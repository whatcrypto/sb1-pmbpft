import React from 'react';
import { Star, ChevronRight } from 'lucide-react';
import { analyses } from '../data/analyses';

export function CryptoAnalysis() {
  const renderStars = (rating: number) => {
    return Array(5).fill(0).map((_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200">
      <div className="p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-gray-900">Latest Crypto Analysis</h2>
          <button className="text-sm text-indigo-600 hover:text-indigo-700 font-medium flex items-center">
            View All
            <ChevronRight className="w-4 h-4 ml-1" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 min-w-0">
          {analyses.map((analysis) => (
            <div 
              key={analysis.symbol} 
              className="border border-gray-200 rounded-lg hover:shadow-md transition-shadow duration-200 cursor-pointer min-w-0"
            >
              <div className="p-4">
                <div className="flex items-center space-x-2 mb-3">
                  <div className="bg-gray-100 text-gray-600 text-xs font-medium px-2 py-1 rounded">
                    {analysis.symbol}
                  </div>
                  <span className="text-sm text-gray-600 truncate">{analysis.name}</span>
                </div>

                <h3 className="text-lg font-semibold text-gray-900 mb-4 line-clamp-2">
                  {analysis.name}
                </h3>

                <div className="flex items-center space-x-4 mb-6">
                  <img
                    src={analysis.imageUrl}
                    alt={analysis.symbol}
                    className="w-10 h-10 rounded-full flex-shrink-0"
                  />
                  <div className="min-w-0">
                    <div className="text-sm font-medium text-gray-900 truncate">
                      {analysis.analyst}
                    </div>
                    <div className="text-sm text-gray-500">
                      {analysis.date}
                    </div>
                  </div>
                </div>

                <dl className="grid grid-cols-2 gap-4 mb-6">
                  <div>
                    <dt className="text-sm text-gray-500">Rating</dt>
                    <dd className="mt-1 flex">{renderStars(analysis.rating)}</dd>
                  </div>
                  <div>
                    <dt className="text-sm text-gray-500">Price</dt>
                    <dd className="mt-1 text-sm font-medium text-gray-900 truncate">{analysis.price}</dd>
                  </div>
                  <div>
                    <dt className="text-sm text-gray-500">Fair Value</dt>
                    <dd className="mt-1 text-sm font-medium text-gray-900 truncate">{analysis.fairValue}</dd>
                  </div>
                  <div>
                    <dt className="text-sm text-gray-500">Uncertainty</dt>
                    <dd className="mt-1 text-sm font-medium text-gray-900 truncate">{analysis.uncertainty}</dd>
                  </div>
                  <div>
                    <dt className="text-sm text-gray-500">Economic Moat</dt>
                    <dd className="mt-1 text-sm font-medium text-gray-900 truncate">{analysis.economicMoat}</dd>
                  </div>
                  <div>
                    <dt className="text-sm text-gray-500">Capital Allocation</dt>
                    <dd className="mt-1 text-sm font-medium text-gray-900 truncate">{analysis.capitalAllocation}</dd>
                  </div>
                </dl>

                <button className="w-full flex items-center justify-center space-x-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg transition-colors duration-200">
                  <span>Read Analysis</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}