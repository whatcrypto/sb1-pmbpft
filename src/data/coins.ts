import { portfolios } from '../data';

interface PriceTarget {
  entry: number;
  exit: number;
  stopLoss: number;
}

export interface CoinAnalysis {
  id: string;
  name: string;
  symbol: string;
  currentPrice: number;
  targetPrice: number;
  priceTargets: PriceTarget;
  rating: string;
  shortTermPhase: string;
  longTermPhase: string;
  marketCap: string;
  volume24h: string;
  description: string;
  technicalAnalysis: {
    rsi: number;
    macd: string;
    movingAverages: string;
    support: number;
    resistance: number;
  };
  fundamentalAnalysis: {
    networkGrowth: string;
    developerActivity: string;
    institutionalInterest: string;
    supplyDynamics: string;
  };
  news: Array<{
    id: string;
    title: string;
    summary: string;
    author: string;
    date: string;
    readTime: string;
    sentiment: 'bullish' | 'bearish' | 'neutral';
    content: string;
  }>;
}

const uniqueCoins = new Map<string, CoinAnalysis>();

portfolios.forEach(portfolio => {
  portfolio.coins.forEach(coin => {
    const coinName = coin.name.split(' (')[0];
    if (!uniqueCoins.has(coinName)) {
      const symbol = coin.name.match(/\((.*?)\)/)?.[1] || '';
      const currentPrice = Math.random() * 50000;
      uniqueCoins.set(coinName, {
        id: coinName.toLowerCase().replace(/\s+/g, '-'),
        name: coinName,
        symbol,
        currentPrice,
        targetPrice: currentPrice * (1 + (Math.random() * 0.5)),
        priceTargets: {
          entry: currentPrice * 0.95,
          exit: currentPrice * 1.3,
          stopLoss: currentPrice * 0.85
        },
        rating: coin.rating,
        shortTermPhase: coin.shortTermPhase,
        longTermPhase: coin.longTermPhase,
        marketCap: '$' + (Math.random() * 1000).toFixed(2) + 'B',
        volume24h: '$' + (Math.random() * 100).toFixed(2) + 'B',
        description: `${coinName} is a leading cryptocurrency that aims to revolutionize the financial industry through innovative blockchain technology.`,
        technicalAnalysis: {
          rsi: Math.random() * 100,
          macd: Math.random() > 0.5 ? 'Bullish' : 'Bearish',
          movingAverages: Math.random() > 0.5 ? 'Buy' : 'Sell',
          support: currentPrice * 0.9,
          resistance: currentPrice * 1.1,
        },
        fundamentalAnalysis: {
          networkGrowth: Math.random() > 0.5 ? 'Strong' : 'Moderate',
          developerActivity: Math.random() > 0.5 ? 'High' : 'Medium',
          institutionalInterest: Math.random() > 0.5 ? 'Increasing' : 'Stable',
          supplyDynamics: Math.random() > 0.5 ? 'Deflationary' : 'Stable',
        },
        news: [
          {
            id: `${coinName.toLowerCase()}-1`,
            title: `${coinName} Shows Strong Momentum Despite Market Volatility`,
            summary: `Our analysis suggests ${coinName} is well-positioned for growth in the current market environment.`,
            author: 'Sarah Chen',
            date: '2024-03-15',
            readTime: '5 min',
            sentiment: 'bullish',
            content: `Detailed analysis of ${coinName}'s recent performance and future prospects...`
          },
          {
            id: `${coinName.toLowerCase()}-2`,
            title: `Technical Analysis: ${coinName} Approaching Key Resistance Levels`,
            summary: `Key technical indicators suggest ${coinName} might be preparing for a breakout.`,
            author: 'Michael Rodriguez',
            date: '2024-03-14',
            readTime: '4 min',
            sentiment: 'neutral',
            content: `In-depth technical analysis of ${coinName}'s price action and market structure...`
          },
          {
            id: `${coinName.toLowerCase()}-3`,
            title: `${coinName} Network Metrics Hit All-Time Highs`,
            summary: `On-chain analysis reveals growing adoption and usage of ${coinName}.`,
            author: 'Alex Thompson',
            date: '2024-03-13',
            readTime: '6 min',
            sentiment: 'bullish',
            content: `Comprehensive review of ${coinName}'s network metrics and adoption trends...`
          }
        ]
      });
    }
  });
});

export const coins = Array.from(uniqueCoins.values());