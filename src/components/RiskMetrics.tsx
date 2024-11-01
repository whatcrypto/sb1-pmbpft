import React from 'react';

const metrics = {
  capture: {
    alpha: -0.84,
    beta: 0.88,
    r2: 82.46,
    sharpeRatio: 0.03,
    standardDeviation: 15.78
  },
  volatility: {
    upside: 92,
    downside: 95,
    maxDrawdown: -23.80,
    drawdownPeak: '09/01/2021',
    drawdownValley: '09/30/2022',
    maxDuration: '13 Months'
  }
};

export function RiskMetrics() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-sm font-medium text-gray-700 mb-3">Capture Ratios</h3>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <div className="text-sm text-gray-500">Alpha</div>
            <div className="text-lg font-medium text-gray-900">{metrics.capture.alpha}</div>
          </div>
          <div>
            <div className="text-sm text-gray-500">Beta</div>
            <div className="text-lg font-medium text-gray-900">{metrics.capture.beta}</div>
          </div>
          <div>
            <div className="text-sm text-gray-500">R²</div>
            <div className="text-lg font-medium text-gray-900">{metrics.capture.r2}</div>
          </div>
          <div>
            <div className="text-sm text-gray-500">Sharpe Ratio</div>
            <div className="text-lg font-medium text-gray-900">{metrics.capture.sharpeRatio}</div>
          </div>
          <div>
            <div className="text-sm text-gray-500">Standard Deviation</div>
            <div className="text-lg font-medium text-gray-900">{metrics.capture.standardDeviation}</div>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-sm font-medium text-gray-700 mb-3">Market Volatility Measures</h3>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <div className="text-sm text-gray-500">Upside Capture</div>
            <div className="text-lg font-medium text-emerald-600">{metrics.volatility.upside}</div>
          </div>
          <div>
            <div className="text-sm text-gray-500">Downside Capture</div>
            <div className="text-lg font-medium text-red-600">{metrics.volatility.downside}</div>
          </div>
          <div>
            <div className="text-sm text-gray-500">Maximum Drawdown</div>
            <div className="text-lg font-medium text-red-600">{metrics.volatility.maxDrawdown}%</div>
          </div>
          <div>
            <div className="text-sm text-gray-500">Max Duration</div>
            <div className="text-lg font-medium text-gray-900">{metrics.volatility.maxDuration}</div>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-sm font-medium text-gray-700 mb-3">Drawdown Period</h3>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <div className="text-sm text-gray-500">Peak</div>
            <div className="text-lg font-medium text-gray-900">{metrics.volatility.drawdownPeak}</div>
          </div>
          <div>
            <div className="text-sm text-gray-500">Valley</div>
            <div className="text-lg font-medium text-gray-900">{metrics.volatility.drawdownValley}</div>
          </div>
        </div>
      </div>
    </div>
  );
}