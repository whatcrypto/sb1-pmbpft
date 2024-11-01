import React, { createContext, useContext, useState, useEffect } from 'react';
import { useAuth } from './AuthContext';
import { usePortfolioCoins } from '../hooks/useMarketData';
import { Coin } from '../lib/api/coingecko';

interface Position {
  coinId: string;
  amount: number;
  entryPrice: number;
  timestamp: number;
}

interface Portfolio {
  id: string;
  name: string;
  positions: Position[];
  createdAt: number;
  updatedAt: number;
}

interface PortfolioContextType {
  portfolios: Portfolio[];
  activePortfolio: Portfolio | null;
  setActivePortfolio: (id: string) => void;
  addPortfolio: (name: string) => void;
  removePortfolio: (id: string) => void;
  addPosition: (coinId: string, amount: number, price: number) => void;
  removePosition: (coinId: string) => void;
  getPortfolioValue: () => number;
  getPortfolioPerformance: () => { absolute: number; percentage: number; };
}

const PortfolioContext = createContext<PortfolioContextType>({
  portfolios: [],
  activePortfolio: null,
  setActivePortfolio: () => {},
  addPortfolio: () => {},
  removePortfolio: () => {},
  addPosition: () => {},
  removePosition: () => {},
  getPortfolioValue: () => 0,
  getPortfolioPerformance: () => ({ absolute: 0, percentage: 0 }),
});

export function PortfolioProvider({ children }: { children: React.ReactNode }) {
  const { isAuthenticated } = useAuth();
  const [portfolios, setPortfolios] = useState<Portfolio[]>([]);
  const [activePortfolioId, setActivePortfolioId] = useState<string | null>(null);

  const activePortfolio = portfolios.find(p => p.id === activePortfolioId) || null;
  
  // Fetch current prices for all coins in active portfolio
  const { data: coins } = usePortfolioCoins(
    activePortfolio?.positions.map(p => p.coinId) || []
  );

  // Load portfolios from localStorage
  useEffect(() => {
    if (isAuthenticated) {
      const saved = localStorage.getItem('portfolios');
      if (saved) {
        const parsed = JSON.parse(saved);
        setPortfolios(parsed);
        setActivePortfolioId(parsed[0]?.id || null);
      }
    }
  }, [isAuthenticated]);

  // Save portfolios to localStorage
  useEffect(() => {
    if (isAuthenticated && portfolios.length > 0) {
      localStorage.setItem('portfolios', JSON.stringify(portfolios));
    }
  }, [portfolios, isAuthenticated]);

  const addPortfolio = (name: string) => {
    const newPortfolio: Portfolio = {
      id: `portfolio-${Date.now()}`,
      name,
      positions: [],
      createdAt: Date.now(),
      updatedAt: Date.now(),
    };
    setPortfolios(prev => [...prev, newPortfolio]);
    setActivePortfolioId(newPortfolio.id);
  };

  const removePortfolio = (id: string) => {
    setPortfolios(prev => prev.filter(p => p.id !== id));
    if (activePortfolioId === id) {
      setActivePortfolioId(portfolios[0]?.id || null);
    }
  };

  const addPosition = (coinId: string, amount: number, price: number) => {
    if (!activePortfolio) return;

    const newPosition: Position = {
      coinId,
      amount,
      entryPrice: price,
      timestamp: Date.now(),
    };

    setPortfolios(prev => prev.map(p => 
      p.id === activePortfolio.id
        ? {
            ...p,
            positions: [...p.positions, newPosition],
            updatedAt: Date.now(),
          }
        : p
    ));
  };

  const removePosition = (coinId: string) => {
    if (!activePortfolio) return;

    setPortfolios(prev => prev.map(p => 
      p.id === activePortfolio.id
        ? {
            ...p,
            positions: p.positions.filter(pos => pos.coinId !== coinId),
            updatedAt: Date.now(),
          }
        : p
    ));
  };

  const getPortfolioValue = () => {
    if (!activePortfolio || !coins) return 0;

    return activePortfolio.positions.reduce((total, position) => {
      const coin = coins.find(c => c.id === position.coinId);
      if (!coin) return total;
      return total + (position.amount * coin.current_price);
    }, 0);
  };

  const getPortfolioPerformance = () => {
    if (!activePortfolio || !coins) return { absolute: 0, percentage: 0 };

    const { invested, current } = activePortfolio.positions.reduce((acc, position) => {
      const coin = coins.find(c => c.id === position.coinId);
      if (!coin) return acc;
      
      const investedAmount = position.amount * position.entryPrice;
      const currentAmount = position.amount * coin.current_price;
      
      return {
        invested: acc.invested + investedAmount,
        current: acc.current + currentAmount,
      };
    }, { invested: 0, current: 0 });

    const absolute = current - invested;
    const percentage = invested > 0 ? ((current - invested) / invested) * 100 : 0;

    return { absolute, percentage };
  };

  const value = {
    portfolios,
    activePortfolio,
    setActivePortfolio: setActivePortfolioId,
    addPortfolio,
    removePortfolio,
    addPosition,
    removePosition,
    getPortfolioValue,
    getPortfolioPerformance,
  };

  return (
    <PortfolioContext.Provider value={value}>
      {children}
    </PortfolioContext.Provider>
  );
}

export const usePortfolio = () => useContext(PortfolioContext);