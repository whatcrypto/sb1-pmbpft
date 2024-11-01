export interface CryptoAnalysis {
  symbol: string;
  name: string;
  imageUrl: string;
  analyst: string;
  date: string;
  rating: number;
  price: string;
  fairValue: string;
  uncertainty: string;
  economicMoat: string;
  capitalAllocation: string;
}

export const analyses: CryptoAnalysis[] = [
  {
    symbol: "BTC",
    name: "Bitcoin Shows Strong Momentum Despite Market Volatility",
    imageUrl: "https://cryptologos.cc/logos/bitcoin-btc-logo.png",
    analyst: "Satoshi Analysis",
    date: "Oct 30, 2024",
    rating: 4,
    price: "$35,245.00",
    fairValue: "$42,000.00",
    uncertainty: "High",
    economicMoat: "Wide",
    capitalAllocation: "Exemplary"
  },
  {
    symbol: "ETH",
    name: "Ethereum's Transition to PoS Creates New Opportunities",
    imageUrl: "https://cryptologos.cc/logos/ethereum-eth-logo.png",
    analyst: "Vitalik Research",
    date: "Oct 30, 2024",
    rating: 5,
    price: "$1,845.00",
    fairValue: "$2,200.00",
    uncertainty: "Medium",
    economicMoat: "Wide",
    capitalAllocation: "Standard"
  },
  {
    symbol: "SOL",
    name: "Solana's Network Improvements Drive Growth",
    imageUrl: "https://cryptologos.cc/logos/solana-sol-logo.png",
    analyst: "Chain Insights",
    date: "Oct 30, 2024",
    rating: 4,
    price: "$45.23",
    fairValue: "$65.00",
    uncertainty: "High",
    economicMoat: "Narrow",
    capitalAllocation: "Standard"
  }
];