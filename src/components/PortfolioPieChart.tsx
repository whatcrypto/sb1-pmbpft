import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

interface PortfolioPieChartProps {
  coins: Array<{
    name: string;
    allocation: number;
  }>;
}

export function PortfolioPieChart({ coins }: PortfolioPieChartProps) {
  const colors = [
    '#1a237e', // Navy (primary)
    '#3949ab',
    '#5c6bc0',
    '#7986cb',
    '#9fa8da',
    '#c5cae9',
    '#e8eaf6',
    '#3d5afe',
    '#536dfe',
    '#8c9eff',
  ];

  const data = {
    labels: coins.map(coin => coin.name.split(' (')[0]),
    datasets: [
      {
        data: coins.map(coin => coin.allocation),
        backgroundColor: colors,
        borderColor: colors.map(color => color + '33'),
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'right' as const,
        labels: {
          font: {
            size: 12,
            family: "'Inter', sans-serif",
          },
          padding: 20,
          usePointStyle: true,
        },
      },
      tooltip: {
        callbacks: {
          label: (context: any) => {
            const label = context.label || '';
            const value = context.raw || 0;
            return `${label}: ${value.toFixed(2)}%`;
          },
        },
      },
    },
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <h2 className="text-lg font-semibold text-gray-900 mb-4">Portfolio Allocation</h2>
      <div className="h-[400px] relative">
        <Pie data={data} options={options} />
      </div>
    </div>
  );
}