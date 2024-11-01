import React from 'react';

interface CircularProgressProps {
  value: number;
  size?: number;
  strokeWidth?: number;
}

export function CircularProgress({ 
  value, 
  size = 120, 
  strokeWidth = 8 
}: CircularProgressProps) {
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const offset = circumference - (value / 100) * circumference;

  const getColor = (value: number) => {
    if (value <= 20) return '#4338ca'; // Conservative
    if (value <= 40) return '#7c3aed'; // Moderate
    if (value <= 60) return '#db2777'; // Aggressive
    if (value <= 80) return '#dc2626'; // Very Aggressive
    return '#f97316'; // Extreme
  };

  return (
    <div className="relative" style={{ width: size, height: size }}>
      <svg
        className="transform -rotate-90"
        width={size}
        height={size}
      >
        <circle
          className="text-gray-200"
          strokeWidth={strokeWidth}
          stroke="currentColor"
          fill="transparent"
          r={radius}
          cx={size / 2}
          cy={size / 2}
        />
        <circle
          className="transition-all duration-500 ease-out"
          strokeWidth={strokeWidth}
          stroke={getColor(value)}
          strokeLinecap="round"
          fill="transparent"
          r={radius}
          cx={size / 2}
          cy={size / 2}
          style={{
            strokeDasharray: circumference,
            strokeDashoffset: offset,
          }}
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-3xl font-bold" style={{ color: getColor(value) }}>
          {value}
        </span>
      </div>
    </div>
  );
}