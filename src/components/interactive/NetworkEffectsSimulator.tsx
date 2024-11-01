import React, { useState, useEffect } from 'react';
import { 
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, 
  ResponsiveContainer, AreaChart, Area 
} from 'recharts';
import { Info } from 'lucide-react';

interface SimulationParams {
  activeUsers: number;
  stakingRatio: number;
  transactionFee: number;
  burnRate: number;
}

interface MetricsResult {
  networkValue: number;
  protocolRevenue: number;
  tokenPrice: number;
  totalStaked: number;
}

interface DataPoint {
  month: number;
  networkValue: number;
  protocolRevenue: number;
  tokenPrice: number;
  totalStaked: number;
}

export function NetworkEffectsSimulator() {
  const [params, setParams] = useState<SimulationParams>({
    activeUsers: 500000,
    stakingRatio: 30,
    transactionFee: 0.3,
    burnRate: 70,
  });

  const [simulationData, setSimulationData] = useState<DataPoint[]>([]);

  const calculateMetrics = (params: SimulationParams, month: number): MetricsResult => {
    const userGrowth = params.activeUsers * (1 + 0.1 * month);
    const networkValue = Math.pow(userGrowth, 2) / 1e8;
    
    const avgTransactionsPerUser = 10;
    const avgTransactionValue = 100;
    const monthlyTransactions = userGrowth * avgTransactionsPerUser;
    const protocolRevenue = monthlyTransactions * avgTransactionValue * (params.transactionFee / 100);
    
    const circulatingSupply = 120e6;
    const totalStaked = circulatingSupply * (params.stakingRatio / 100);
    const effectiveBurn = protocolRevenue * (params.burnRate / 100);
    
    const tokenPrice = (networkValue + effectiveBurn) / (circulatingSupply - totalStaked);

    return {
      networkValue,
      protocolRevenue,
      tokenPrice,
      totalStaked,
    };
  };

  useEffect(() => {
    const newData: DataPoint[] = [];
    for (let month = 0; month < 12; month++) {
      const metrics = calculateMetrics(params, month);
      newData.push({
        month,
        ...metrics,
      });
    }
    setSimulationData(newData);
  }, [params]);

  return (
    <div className="space-y-8">
      <div className="bg-white p-6 rounded-lg border border-gray-200">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold">Network Effects Simulator</h3>
          <Info className="w-4 h-4 text-gray-400" />
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Active Users (Monthly)
              </label>
              <input
                type="range"
                min={100000}
                max={2000000}
                step={100000}
                value={params.activeUsers}
                onChange={(e) => setParams({
                  ...params,
                  activeUsers: parseInt(e.target.value)
                })}
                className="w-full"
              />
              <div className="mt-1 text-sm text-gray-500">
                {params.activeUsers.toLocaleString()} users
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Staking Ratio (%)
              </label>
              <input
                type="range"
                min={0}
                max={100}
                step={1}
                value={params.stakingRatio}
                onChange={(e) => setParams({
                  ...params,
                  stakingRatio: parseInt(e.target.value)
                })}
                className="w-full"
              />
              <div className="mt-1 text-sm text-gray-500">
                {params.stakingRatio}% of supply staked
              </div>
            </div>
          </div>

          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={simulationData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Area 
                  type="monotone" 
                  dataKey="networkValue" 
                  stroke="#1a237e" 
                  fill="#1a237e" 
                  fillOpacity={0.1} 
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
}