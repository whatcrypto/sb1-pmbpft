import React from 'react';
import { ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { portfolios } from '../data';

export function PortfolioCarousel() {
  const navigate = useNavigate();

  return (
    <div className="relative">
      <div className="flex overflow-x-auto gap-4 pb-6 -mx-4 px-4 sm:mx-0 sm:px-0 scrollbar-hide">
        {portfolios.map((portfolio, index) => (
          <div 
            key={index}
            className="flex-none w-full sm:w-[300px] bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow"
          >
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                {portfolio.category}
              </h3>
              
              <div className="space-y-2">
                {portfolio.coins.slice(0, 3).map((coin, idx) => (
                  <div key={idx} className="flex items-center justify-between">
                    <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${
                      coin.badgeColor === 'green' ? 'bg-emerald-100 text-emerald-800' :
                      coin.badgeColor === 'red' ? 'bg-red-100 text-red-800' :
                      'bg-amber-100 text-amber-800'
                    }`}>
                      {coin.rating}
                    </span>
                    <span className="text-sm text-gray-600 truncate flex-1 mx-2">
                      {coin.name}
                    </span>
                    <span className="text-sm font-medium text-gray-900">
                      {coin.percentChange}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-4 pt-4 border-t border-gray-100">
                <div className="flex justify-between items-center">
                  <div className="text-xs text-gray-500">
                    <div>Short Term: {portfolio.coins[0].shortTermPhase}</div>
                    <div>Long Term: {portfolio.coins[0].longTermPhase}</div>
                  </div>
                  <button 
                    onClick={() => navigate(`/portfolio/${portfolio.category.toLowerCase().replace(/\s+/g, '-')}`)}
                    className="flex items-center text-sm text-indigo-600 hover:text-indigo-700"
                  >
                    View All
                    <ChevronRight className="w-4 h-4 ml-1" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}