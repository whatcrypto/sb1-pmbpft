import WebSocket from 'ws';
import { z } from 'zod';

const BINANCE_WS = 'wss://stream.binance.com:9443/ws';

const TradeSchema = z.object({
  e: z.string(), // Event type
  E: z.number(), // Event time
  s: z.string(), // Symbol
  p: z.string(), // Price
  q: z.string(), // Quantity
  T: z.number(), // Trade time
  m: z.boolean(), // Is buyer market maker
});

export type Trade = z.infer<typeof TradeSchema>;

export class BinanceWebSocket {
  private ws: WebSocket | null = null;
  private subscriptions: Map<string, (trade: Trade) => void> = new Map();

  connect() {
    this.ws = new WebSocket(BINANCE_WS);

    this.ws.on('open', () => {
      console.log('Connected to Binance WebSocket');
      // Resubscribe to all pairs
      this.subscriptions.forEach((_, symbol) => {
        this.subscribe(symbol);
      });
    });

    this.ws.on('message', (data: WebSocket.Data) => {
      try {
        const trade = TradeSchema.parse(JSON.parse(data.toString()));
        const callback = this.subscriptions.get(trade.s.toLowerCase());
        if (callback) {
          callback(trade);
        }
      } catch (error) {
        console.error('Error parsing trade data:', error);
      }
    });

    this.ws.on('close', () => {
      console.log('Disconnected from Binance WebSocket');
      // Attempt to reconnect after 5 seconds
      setTimeout(() => this.connect(), 5000);
    });

    this.ws.on('error', (error) => {
      console.error('WebSocket error:', error);
      this.ws?.close();
    });
  }

  subscribe(symbol: string, callback: (trade: Trade) => void) {
    const formattedSymbol = symbol.toLowerCase();
    this.subscriptions.set(formattedSymbol, callback);

    if (this.ws?.readyState === WebSocket.OPEN) {
      this.ws.send(JSON.stringify({
        method: 'SUBSCRIBE',
        params: [`${formattedSymbol}@trade`],
        id: Date.now()
      }));
    }
  }

  unsubscribe(symbol: string) {
    const formattedSymbol = symbol.toLowerCase();
    this.subscriptions.delete(formattedSymbol);

    if (this.ws?.readyState === WebSocket.OPEN) {
      this.ws.send(JSON.stringify({
        method: 'UNSUBSCRIBE',
        params: [`${formattedSymbol}@trade`],
        id: Date.now()
      }));
    }
  }

  disconnect() {
    this.ws?.close();
    this.ws = null;
    this.subscriptions.clear();
  }
}

export const binanceWs = new BinanceWebSocket();