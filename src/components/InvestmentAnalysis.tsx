import React from 'react';
import { CircularProgress } from './CircularProgress';
import { RiskMeter } from './RiskMeter';

interface InvestmentAnalysisProps {
  data: {
    riskScore: number;
    riskLevel: string;
    riskVsCategory: 'Low' | 'Below Avg.' | 'Average' | 'Above Avg.' | 'High';
    returnVsCategory: 'Low' | 'Below Avg.' | 'Average' | 'Above Avg.' | 'High';
    metrics: {
      alpha: number;
      beta: number;
      r2: number;
      sharpeRatio: number;
      standardDeviation: number;
    };
    volatility: {
      upside: number;
      downside: number;
      maxDrawdown: number;
      drawdownPeak: string;
      drawdownValley: string;
      maxDuration: string;
    };
    sectors: Array<{
      name: string;
      allocation: number;
      type: 'Cyclical' | 'Sensitive' | 'Defensive';
    }>;
  };
}

export function InvestmentAnalysis({ data }: InvestmentAnalysisProps) {
  const getCategoryRatingColor = (rating: string) => {
    switch (rating) {
      case 'High':
        return 'bg-emerald-100';
      case 'Above Avg.':
        return 'bg-emerald-50';
      case 'Average':
        return 'bg-gray-100';
      case 'Below Avg.':
        return 'bg-red-50';
      case 'Low':
        return 'bg-red-100';
      default:
        return 'bg-gray-100';
    }
  };

  return (
    <div className="space-y-8">
      {/* Risk Score */}
      <div className="bg-white rounded-lg p-6 border border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-6">Portfolio Risk Score</h3>
        <div className="flex items-center justify-between">
          <CircularProgress value={data.riskScore} />
          <div className="flex-1 ml-8">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <div className="text-sm text-gray-500">Risk Level</div>
                <div className="text-lg font-medium text-gray-900">{data.riskLevel}</div>
              </div>
              <div>
                <div className="text-sm text-gray-500">Risk vs. Category</div>
                <div className={`inline-block px-2 py-1 rounded-full text-sm font-medium ${
                  getCategoryRatingColor(data.riskVsCategory)
                }`}>
                  {data.riskVsCategory}
                </div>
              </div>
              <div>
                <div className="text-sm text-gray-500">Return vs. Category</div>
                <div className={`inline-block px-2 py-1 rounded-full text-sm font-medium ${
                  getCategoryRatingColor(data.returnVsCategory)
                }`}>
                  {data.returnVsCategory}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Risk & Volatility Measures */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg p-6 border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-6">Risk & Volatility Measures</h3>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <div className="text-sm text-gray-500">Alpha</div>
              <div className="text-lg font-medium text-gray-900">{data.metrics.alpha}</div>
            </div>
            <div>
              <div className="text-sm text-gray-500">Beta</div>
              <div className="text-lg font-medium text-gray-900">{data.metrics.beta}</div>
            </div>
            <div>
              <div className="text-sm text-gray-500">R²</div>
              <div className="text-lg font-medium text-gray-900">{data.metrics.r2}</div>
            </div>
            <div>
              <div className="text-sm text-gray-500">Sharpe Ratio</div>
              <div className="text-lg font-medium text-gray-900">{data.metrics.sharpeRatio}</div>
            </div>
            <div>
              <div className="text-sm text-gray-500">Standard Deviation</div>
              <div className="text-lg font-medium text-gray-900">{data.metrics.standardDeviation}</div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg p-6 border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-6">Market Volatility Measures</h3>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <div className="text-sm text-gray-500">Upside Capture</div>
              <div className="text-lg font-medium text-emerald-600">{data.volatility.upside}</div>
            </div>
            <div>
              <div className="text-sm text-gray-500">Downside Capture</div>
              <div className="text-lg font-medium text-red-600">{data.volatility.downside}</div>
            </div>
            <div>
              <div className="text-sm text-gray-500">Maximum Drawdown</div>
              <div className="text-lg font-medium text-red-600">{data.volatility.maxDrawdown}%</div>
            </div>
            <div>
              <div className="text-sm text-gray-500">Drawdown Period</div>
              <div className="text-sm font-medium text-gray-900">
                {data.volatility.drawdownPeak} - {data.volatility.drawdownValley}
              </div>
              <div className="text-sm text-gray-500">{data.volatility.maxDuration}</div>
            </div>
          </div>
        </div>
      </div>

      {/* Sector Allocation */}
      <div className="bg-white rounded-lg p-6 border border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-6">Sector Allocation</h3>
        <div className="space-y-4">
          {data.sectors.map((sector, index) => (
            <div key={index} className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <span className={`text-sm font-medium ${
                  sector.type === 'Cyclical' ? 'text-orange-600' :
                  sector.type === 'Sensitive' ? 'text-blue-600' :
                  'text-green-600'
                }`}>
                  {sector.type[0]}
                </span>
                <span className="text-sm text-gray-700">{sector.name}</span>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-32 h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className={`h-full ${
                      sector.type === 'Cyclical' ? 'bg-orange-200' :
                      sector.type === 'Sensitive' ? 'bg-blue-200' :
                      'bg-green-200'
                    }`}
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
      </div>
    </div>
  );
}