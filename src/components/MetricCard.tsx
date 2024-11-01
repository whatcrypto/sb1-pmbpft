import React from 'react';

interface MetricCardProps {
  title: string;
  value: string | number;
  description: string;
}

export function MetricCard({ title, value, description }: MetricCardProps) {
  return (
    <div className="bg-blue-50 rounded-lg border border-blue-200 p-4">
      <h3 className="text-sm font-medium text-gray-600">{title}</h3>
      <div className="mt-2 flex items-baseline">
        <p className="text-2xl font-semibold text-gray-900">{value}</p>
      </div>
      <p className="mt-1 text-xs text-gray-500">{description}</p>
    </div>
  );
}