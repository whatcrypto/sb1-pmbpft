import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

interface CoinCardProps {
  name: string;
  symbol: string;
  rating: string;
  currentPrice: number;
  targetPrice: number;
  priceTargets: {
    entry: number;
    exit: number;
    stopLoss: number;
  };
  shortTermPhase: string;
}

export function CoinCard({ 
  name, 
  symbol, 
  rating, 
  currentPrice, 
  targetPrice,
  priceTargets,
  shortTermPhase 
}: CoinCardProps) {
  const navigate = useNavigate();
  
  const getBadgeColor = (rating: string) => {
    switch (rating.toLowerCase()) {
      case 'buy':
        return 'bg-emerald-100 text-emerald-800';
      case 'sell':
        return 'bg-red-100 text-red-800';
      case 'hold':
        return 'bg-amber-100 text-amber-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }).format(price);
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-3">
          <span className={`px-2.5 py-0.5 rounded-full text-xs font-medium ${getBadgeColor(rating)}`}>
            {rating}
          </span>
          <span className="text-lg font-medium text-gray-900">{name}</span>
          <span className="text-sm text-gray-500">{symbol}</span>
        </div>
      </div>

      <div className="flex items-center justify-between mb-4">
        <div>
          <div className="text-sm text-gray-500">Current Price</div>
          <div className="text-lg font-semibold">{formatPrice(currentPrice)}</div>
        </div>
        <div className="text-right">
          <div className="text-sm text-gray-500">Target Price</div>
          <div className="text-lg font-semibold">{formatPrice(targetPrice)}</div>
        </div>
      </div>
      
      <div className="flex items-center justify-between">
        <span className="text-sm text-gray-500">
          Phase: <span className="font-medium text-gray-900">{shortTermPhase}</span>
        </span>
        <button
          onClick={() => navigate(`/coin/${name.toLowerCase().replace(/\s+/g, '-')}`)}
          className="inline-flex items-center px-3 py-1.5 text-sm font-medium text-white bg-navy-600 hover:bg-navy-700 rounded-full transition-colors"
        >
          Analysis
          <ChevronRight className="ml-1 -mr-1 w-4 h-4" />
        </button>
      </div>
    </div>
  );
}