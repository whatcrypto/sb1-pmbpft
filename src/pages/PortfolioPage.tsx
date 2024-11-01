import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { portfolios } from '../data';
import { Navbar } from '../components/Navbar';
import { Sidebar } from '../components/Sidebar';
import { CoinCard } from '../components/CoinCard';
import { PortfolioPieChart } from '../components/PortfolioPieChart';
import { PerformanceChart } from '../components/PerformanceChart';
import { RiskGauge } from '../components/RiskGauge';
import { RiskMetrics } from '../components/RiskMetrics';
import { SectorAllocation } from '../components/SectorAllocation';

export function PortfolioPage() {
  const { category } = useParams();
  const navigate = useNavigate();
  
  const portfolio = portfolios.find(
    p => p.category.toLowerCase().replace(/\s+/g, '-') === category
  );

  if (!portfolio) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900">Portfolio not found</h2>
          <button
            onClick={() => navigate('/')}
            className="mt-4 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-navy-600 hover:bg-navy-700"
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  // Calculate portfolio allocations for pie chart
  const totalCoins = portfolio.coins.length;
  const allocations = portfolio.coins.map(coin => ({
    name: coin.name,
    allocation: 100 / totalCoins // Equal weight for simplicity
  }));

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <Sidebar />
      <div className="flex-1 ml-64">
        <Navbar searchTerm="" onSearchChange={() => {}} />
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <button
            onClick={() => navigate('/analytics')}
            className="mb-6 inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-700"
          >
            <ArrowLeft className="w-4 h-4 mr-1" />
            Back to Analytics
          </button>

          <h1 className="text-2xl font-bold text-gray-900 mb-8">{portfolio.category}</h1>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
            <div className="lg:col-span-2">
              <PerformanceChart />
            </div>
            <div>
              <PortfolioPieChart coins={allocations} />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <h2 className="text-lg font-semibold text-gray-900 mb-6">Holdings</h2>
                <div className="space-y-4">
                  {portfolio.coins.map((coin, index) => (
                    <CoinCard
                      key={index}
                      name={coin.name.split(' (')[0]}
                      symbol={coin.name.match(/\((.*?)\)/)?.[1] || ''}
                      rating={coin.rating}
                      currentPrice={1000 + Math.random() * 50000}
                      targetPrice={1500 + Math.random() * 75000}
                      priceTargets={{
                        entry: 900 + Math.random() * 45000,
                        exit: 2000 + Math.random() * 100000,
                        stopLoss: 800 + Math.random() * 40000
                      }}
                      shortTermPhase={coin.shortTermPhase}
                    />
                  ))}
                </div>
              </div>
            </div>
            <div className="space-y-8">
              <RiskGauge score={76} />
              <RiskMetrics />
              <SectorAllocation />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}