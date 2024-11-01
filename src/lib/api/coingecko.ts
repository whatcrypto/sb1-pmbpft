import axios from 'axios';
import { z } from 'zod';

const COINGECKO_API = 'https://api.coingecko.com/api/v3';

// API Response Schemas
const CoinSchema = z.object({
  id: z.string(),
  symbol: z.string(),
  name: z.string(),
  image: z.string(),
  current_price: z.number(),
  market_cap: z.number(),
  market_cap_rank: z.number(),
  total_volume: z.number(),
  price_change_percentage_24h: z.number().nullable(),
  sparkline_in_7d: z.object({
    price: z.array(z.number())
  }).optional()
});

const MarketChartSchema = z.object({
  prices: z.array(z.tuple([z.number(), z.number()])),
  market_caps: z.array(z.tuple([z.number(), z.number()])),
  total_volumes: z.array(z.tuple([z.number(), z.number()]))
});

export type Coin = z.infer<typeof CoinSchema>;
export type MarketChart = z.infer<typeof MarketChartSchema>;

// API Client
class CoingeckoAPI {
  private async get<T>(endpoint: string, params?: Record<string, string>) {
    const response = await axios.get(`${COINGECKO_API}${endpoint}`, { params });
    return response.data as T;
  }

  async getTopCoins(limit: number = 100) {
    const data = await this.get<Coin[]>('/coins/markets', {
      vs_currency: 'usd',
      order: 'market_cap_desc',
      per_page: limit.toString(),
      sparkline: 'true',
      price_change_percentage: '24h'
    });
    return z.array(CoinSchema).parse(data);
  }

  async getCoinMarketChart(coinId: string, days: number = 7) {
    const data = await this.get<MarketChart>(`/coins/${coinId}/market_chart`, {
      vs_currency: 'usd',
      days: days.toString()
    });
    return MarketChartSchema.parse(data);
  }

  async getCoinsByIds(ids: string[]) {
    const data = await this.get<Coin[]>('/coins/markets', {
      vs_currency: 'usd',
      ids: ids.join(','),
      sparkline: 'true'
    });
    return z.array(CoinSchema).parse(data);
  }
}

export const coingecko = new CoingeckoAPI();