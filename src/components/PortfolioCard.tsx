import React from 'react';
import { TrendingUp, AlertTriangle, Plus, Minus } from 'lucide-react';
import { usePortfolio } from '../context/PortfolioContext';

interface PortfolioCardProps {
  category: string;
  description: string;
  performance: string;
  risk: string;
  onClick: () => void;
  showAddButton?: boolean;
}

export function PortfolioCard({
  category,
  description,
  performance,
  risk,
  onClick,
  showAddButton = false
}: PortfolioCardProps) {
  const { addPortfolio, removePortfolio, isPortfolioAdded } = usePortfolio();

  const getRiskColor = (risk: string) => {
    switch (risk.toLowerCase()) {
      case 'conservative':
        return 'text-blue-600';
      case 'moderate':
        return 'text-green-600';
      case 'aggressive':
        return 'text-orange-600';
      case 'very aggressive':
      case 'moderate-aggressive':
        return 'text-red-600';
      default:
        return 'text-gray-600';
    }
  };

  const handleAddRemove = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (isPortfolioAdded(category)) {
      removePortfolio(category);
    } else {
      addPortfolio(category);
    }
  };

  const isAdded = isPortfolioAdded(category);

  return (
    <div
      onClick={onClick}
      className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow cursor-pointer relative"
    >
      {showAddButton && (
        <button
          onClick={handleAddRemove}
          className={`absolute top-4 right-4 p-2 rounded-full transition-colors ${
            isAdded 
              ? 'bg-red-50 text-red-600 hover:bg-red-100'
              : 'bg-green-50 text-green-600 hover:bg-green-100'
          }`}
        >
          {isAdded ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
        </button>
      )}

      <h3 className="text-lg font-semibold text-gray-900 mb-2">{category}</h3>
      <p className="text-sm text-gray-500 mb-4">{description}</p>
      
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <TrendingUp className="w-4 h-4 text-emerald-500" />
          <span className="text-sm font-medium text-emerald-600">{performance}</span>
        </div>
        <div className="flex items-center space-x-2">
          <AlertTriangle className={`w-4 h-4 ${getRiskColor(risk)}`} />
          <span className={`text-sm font-medium ${getRiskColor(risk)}`}>{risk}</span>
        </div>
      </div>
    </div>
  );
}