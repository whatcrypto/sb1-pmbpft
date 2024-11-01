import React from 'react';
import { ArrowUpRight, ArrowDownRight } from 'lucide-react';

const sectors = [
  { name: 'Basic Materials', change: -0.54, trend: 'down' },
  { name: 'Communication Services', change: 1.21, trend: 'up' },
  { name: 'Consumer Defensive', change: -0.91, trend: 'down' },
  { name: 'Consumer Cyclical', change: -0.52, trend: 'down' },
  { name: 'Energy', change: -1.34, trend: 'down' },
  { name: 'Healthcare', change: -0.19, trend: 'down' },
  { name: 'Financial Services', change: -0.54, trend: 'down' },
  { name: 'Industrials', change: -0.32, trend: 'down' },
  { name: 'Utilities', change: -1.77, trend: 'down' },
  { name: 'Real Estate', change: -0.80, trend: 'down' },
  { name: 'Technology', change: 1.17, trend: 'up' }
];

export function SectorPerformance() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {sectors.map((sector) => (
        <div
          key={sector.name}
          className="bg-white rounded-lg border border-gray-200 p-4 hover:shadow-md transition-shadow"
        >
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-medium text-gray-900">{sector.name}</h3>
            <div className="flex items-center space-x-1">
              {sector.change > 0 ? (
                <ArrowUpRight className="w-4 h-4 text-emerald-600" />
              ) : (
                <ArrowDownRight className="w-4 h-4 text-red-600" />
              )}
              <span className={`text-sm font-medium ${
                sector.change > 0 ? 'text-emerald-600' : 'text-red-600'
              }`}>
                {sector.change > 0 ? '+' : ''}{sector.change}%
              </span>
            </div>
          </div>
          
          <div className="mt-2 relative h-2 bg-gray-100 rounded-full overflow-hidden">
            <div
              className={`absolute top-0 left-0 h-full rounded-full ${
                sector.change > 0 ? 'bg-emerald-500' : 'bg-red-500'
              }`}
              style={{
                width: `${Math.abs(sector.change) * 20}%`,
                minWidth: '10%'
              }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}