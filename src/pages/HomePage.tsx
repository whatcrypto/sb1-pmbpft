import React from 'react';
import { TrendingUp } from 'lucide-react';
import { Sidebar } from '../components/Sidebar';
import { PortfolioCarousel } from '../components/PortfolioCarousel';
import { SectorTable } from '../components/SectorTable';
import { CryptoAnalysis } from '../components/CryptoAnalysis';

export function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar />
      
      {/* Main content with responsive padding */}
      <div className="lg:pl-64 pt-16 lg:pt-0 transition-all duration-300">
        <div className="p-4 sm:p-6 lg:p-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8">
              <h1 className="text-2xl font-bold text-gray-900 mb-2 sm:mb-0">
                Investment Strategies
              </h1>
              <div className="flex items-center space-x-2">
                <TrendingUp className="w-5 h-5 text-navy-600" />
                <span className="text-sm font-medium text-gray-600">
                  Market Overview
                </span>
              </div>
            </div>

            <div className="space-y-8">
              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-4">
                  Portfolio Categories
                </h2>
                <div className="overflow-hidden">
                  <PortfolioCarousel />
                </div>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-4">
                  Crypto Analysis
                </h2>
                <div className="overflow-x-auto">
                  <CryptoAnalysis />
                </div>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-4">
                  Sector Performance
                </h2>
                <div className="overflow-x-auto">
                  <SectorTable />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}