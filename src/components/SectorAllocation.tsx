import React from 'react';

const sectors = [
  { name: 'Basic Materials', allocation: 9.25, type: 'Cyclical' },
  { name: 'Consumer Cyclical', allocation: 13.83, type: 'Cyclical' },
  { name: 'Financial Services', allocation: 10.29, type: 'Cyclical' },
  { name: 'Real Estate', allocation: 0.00, type: 'Cyclical' },
  { name: 'Communication Services', allocation: 9.48, type: 'Sensitive' },
  { name: 'Energy', allocation: 10.60, type: 'Sensitive' },
  { name: 'Industrials', allocation: 12.28, type: 'Sensitive' },
  { name: 'Technology', allocation: 8.53, type: 'Sensitive' },
  { name: 'Consumer Defensive', allocation: 7.97, type: 'Defensive' },
  { name: 'Healthcare', allocation: 9.52, type: 'Defensive' },
  { name: 'Utilities', allocation: 10.28, type: 'Defensive' }
];

export function SectorAllocation() {
  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Cyclical':
        return 'text-orange-600';
      case 'Sensitive':
        return 'text-blue-600';
      case 'Defensive':
        return 'text-green-600';
      default:
        return 'text-gray-600';
    }
  };

  return (
    <div className="space-y-4">
      {sectors.map((sector, index) => (
        <div key={index} className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className={`text-sm font-medium ${getTypeColor(sector.type)}`}>
              {sector.type[0]}
            </span>
            <span className="text-sm text-gray-700">{sector.name}</span>
          </div>
          <div className="flex items-center space-x-4">
            <div className="w-32 h-2 bg-gray-200 rounded-full overflow-hidden">
              <div
                className={`h-full ${getTypeColor(sector.type)} opacity-50`}
                style={{ width: `${sector.allocation}%` }}
              />
            </div>
            <span className="text-sm font-medium text-gray-900 w-12 text-right">
              {sector.allocation}%
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}