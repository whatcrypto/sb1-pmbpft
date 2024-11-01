import { useState, useEffect } from 'react';
import { binanceWs, Trade } from '../lib/api/binance';

export function useLivePrice(symbol: string) {
  const [price, setPrice] = useState<string | null>(null);
  const [lastTrade, setLastTrade] = useState<Trade | null>(null);

  useEffect(() => {
    const handleTrade = (trade: Trade) => {
      setPrice(trade.p);
      setLastTrade(trade);
    };

    binanceWs.subscribe(symbol, handleTrade);

    return () => {
      binanceWs.unsubscribe(symbol);
    };
  }, [symbol]);

  return { price, lastTrade };
}