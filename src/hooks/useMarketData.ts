import { useQuery } from 'react-query';
import { coingecko } from '../lib/api/coingecko';

export function useTopCoins(limit: number = 100) {
  return useQuery(
    ['topCoins', limit],
    () => coingecko.getTopCoins(limit),
    {
      refetchInterval: 60000, // Refetch every minute
      staleTime: 30000, // Consider data stale after 30 seconds
    }
  );
}

export function useCoinMarketChart(coinId: string, days: number = 7) {
  return useQuery(
    ['coinChart', coinId, days],
    () => coingecko.getCoinMarketChart(coinId, days),
    {
      refetchInterval: 300000, // Refetch every 5 minutes
      staleTime: 60000, // Consider data stale after 1 minute
    }
  );
}

export function usePortfolioCoins(coinIds: string[]) {
  return useQuery(
    ['portfolioCoins', coinIds],
    () => coingecko.getCoinsByIds(coinIds),
    {
      refetchInterval: 60000,
      staleTime: 30000,
      enabled: coinIds.length > 0,
    }
  );
}