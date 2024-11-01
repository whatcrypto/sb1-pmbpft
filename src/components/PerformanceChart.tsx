import React, { useState } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const generateGrowthData = (timeframe: string) => {
  const dataPoints = timeframe === '1Y' ? 365 : 
                    timeframe === '3Y' ? 1095 :
                    timeframe === '5Y' ? 1825 : 3650;
  
  const data = [];
  const labels = [];
  let value = 10000;
  
  for (let i = 0; i < dataPoints; i++) {
    const date = new Date();
    date.setDate(date.getDate() - (dataPoints - i));
    
    // Add realistic market volatility
    const dailyChange = (Math.random() - 0.48) * 2; // Slight upward bias
    value = value * (1 + (dailyChange / 100));
    
    // Add some market cycles
    const cycleEffect = Math.sin(i / (dataPoints / 8)) * 1000;
    value += cycleEffect;
    
    if (i % (dataPoints / 52) === 0) { // Weekly data points
      data.push(value);
      labels.push(date.toLocaleDateString('en-US', { month: 'short', year: '2-digit' }));
    }
  }
  
  return { data, labels };
};

export function PerformanceChart() {
  const [timeframe, setTimeframe] = useState('1Y');
  const { data: growthData, labels } = generateGrowthData(timeframe);

  const data = {
    labels,
    datasets: [
      {
        label: 'Portfolio Value',
        data: growthData,
        borderColor: '#1a237e',
        backgroundColor: 'rgba(26, 35, 126, 0.1)',
        fill: true,
        tension: 0.4,
      }
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          label: (context: any) => {
            return `$${context.raw.toLocaleString(undefined, {
              minimumFractionDigits: 0,
              maximumFractionDigits: 0,
            })}`;
          },
        },
      },
    },
    scales: {
      y: {
        title: {
          display: true,
          text: 'Growth of $10,000',
        },
        ticks: {
          callback: (value: number) => {
            return '$' + value.toLocaleString(undefined, {
              minimumFractionDigits: 0,
              maximumFractionDigits: 0,
            });
          },
        },
      },
    },
  };

  const getPerformanceStats = () => {
    const finalValue = growthData[growthData.length - 1];
    const totalReturn = ((finalValue - 10000) / 10000) * 100;
    const years = parseInt(timeframe);
    const annualizedReturn = (Math.pow(finalValue / 10000, 1 / years) - 1) * 100;

    return {
      totalReturn: totalReturn.toFixed(2),
      annualizedReturn: annualizedReturn.toFixed(2),
      currentValue: finalValue.toFixed(0)
    };
  };

  const stats = getPerformanceStats();

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex space-x-2">
          {['1Y', '3Y', '5Y', '10Y'].map((period) => (
            <button
              key={period}
              onClick={() => setTimeframe(period)}
              className={`px-3 py-1 text-sm font-medium rounded-md ${
                timeframe === period
                  ? 'bg-navy-600 text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {period}
            </button>
          ))}
        </div>
        <div className="text-sm font-medium text-gray-900">
          Growth of $10,000
        </div>
      </div>
      
      <div className="h-[400px]">
        <Line data={data} options={options} />
      </div>

      <div className="grid grid-cols-3 gap-4 mt-4">
        <div className="bg-gray-50 p-4 rounded-lg">
          <div className="text-sm text-gray-500">Total Return</div>
          <div className="text-lg font-semibold text-navy-600">
            {stats.totalReturn}%
          </div>
        </div>
        <div className="bg-gray-50 p-4 rounded-lg">
          <div className="text-sm text-gray-500">Annualized Return</div>
          <div className="text-lg font-semibold text-navy-600">
            {stats.annualizedReturn}%
          </div>
        </div>
        <div className="bg-gray-50 p-4 rounded-lg">
          <div className="text-sm text-gray-500">Current Value</div>
          <div className="text-lg font-semibold text-navy-600">
            ${parseInt(stats.currentValue).toLocaleString()}
          </div>
        </div>
      </div>
    </div>
  );
}