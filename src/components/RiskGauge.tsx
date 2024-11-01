import React from 'react';

interface RiskGaugeProps {
  score: number;
}

export function RiskGauge({ score }: RiskGaugeProps) {
  const getRiskLevel = (score: number) => {
    if (score <= 23) return 'Conservative';
    if (score <= 47) return 'Moderate';
    if (score <= 78) return 'Aggressive';
    if (score <= 99) return 'Very Aggressive';
    return 'Extreme';
  };

  const getColor = (score: number) => {
    if (score <= 23) return '#4338ca';
    if (score <= 47) return '#7c3aed';
    if (score <= 78) return '#db2777';
    if (score <= 99) return '#dc2626';
    return '#f97316';
  };

  return (
    <div className="relative">
      <div className="flex justify-between mb-2">
        <span className="text-sm font-medium text-gray-700">Portfolio Risk Score</span>
        <span className="text-sm font-medium text-gray-900">{getRiskLevel(score)}</span>
      </div>
      <div className="h-4 bg-gray-200 rounded-full overflow-hidden">
        <div
          className="h-full transition-all duration-500 ease-out"
          style={{
            width: `${score}%`,
            backgroundColor: getColor(score)
          }}
        />
      </div>
      <div className="mt-2 flex justify-between text-xs text-gray-500">
        <span>Conservative</span>
        <span>Moderate</span>
        <span>Aggressive</span>
        <span>Very Aggressive</span>
        <span>Extreme</span>
      </div>
    </div>
  );
}