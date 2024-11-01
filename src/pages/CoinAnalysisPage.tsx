import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { coins } from '../data/coins';
import { Navbar } from '../components/Navbar';
import { Sidebar } from '../components/Sidebar';
import { PerformanceChart } from '../components/PerformanceChart';
import { MetricCard } from '../components/MetricCard';
import { NewsCard } from '../components/NewsCard';

export function CoinAnalysisPage() {
  const { coinId } = useParams();
  const navigate = useNavigate();
  
  const coin = coins.find(c => c.id === coinId);

  if (!coin) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900">Coin not found</h2>
          <button
            onClick={() => navigate('/analytics')}
            className="mt-4 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-navy-600 hover:bg-navy-700"
          >
            Back to Analytics
          </button>
        </div>
      </div>
    );
  }

  const metrics = [
    {
      title: 'Volatility Score',
      value: (Math.random() * 10).toFixed(1),
      description: 'Market volatility index (1-10)'
    },
    {
      title: 'Downside Risk',
      value: `-${(Math.random() * 20).toFixed(1)}%`,
      description: 'Maximum potential loss'
    },
    {
      title: 'Momentum',
      value: `+${(Math.random() * 5).toFixed(1)}`,
      description: 'Current market momentum'
    },
    {
      title: 'RSI',
      value: Math.floor(Math.random() * 100),
      description: 'Relative Strength Index'
    },
    {
      title: 'Sharpe Ratio',
      value: (Math.random() * 3).toFixed(1),
      description: 'Risk-adjusted return metric'
    },
    {
      title: 'Beta',
      value: (Math.random() * 2).toFixed(1),
      description: 'Market correlation coefficient'
    },
    {
      title: 'Market Phase',
      value: coin.shortTermPhase,
      description: 'Current market cycle stage'
    },
    {
      title: 'Volume Ratio',
      value: `${(Math.random() * 2 + 0.5).toFixed(1)}x`,
      description: '24h volume vs 7d average'
    },
    {
      title: 'Whale Activity',
      value: Math.random() > 0.5 ? 'High' : 'Moderate',
      description: 'Large transaction frequency'
    },
    {
      title: 'Order Book Depth',
      value: `${(Math.random() * 10 + 1).toFixed(1)}M`,
      description: 'Total order book liquidity'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <Sidebar />
      <div className="flex-1 ml-64">
        <Navbar searchTerm="" onSearchChange={() => {}} />
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <button
            onClick={() => navigate(-1)}
            className="mb-6 inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-700"
          >
            <ArrowLeft className="w-4 h-4 mr-1" />
            Back
          </button>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h1 className="text-2xl font-bold text-gray-900">{coin.name}</h1>
                  <span className="text-sm text-gray-500">{coin.symbol}</span>
                </div>
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                  coin.rating.toLowerCase() === 'buy' ? 'bg-emerald-100 text-emerald-800' :
                  coin.rating.toLowerCase() === 'sell' ? 'bg-red-100 text-red-800' :
                  'bg-amber-100 text-amber-800'
                }`}>
                  {coin.rating}
                </span>
              </div>

              <div className="space-y-4">
                <div>
                  <div className="text-sm text-gray-500">Current Price</div>
                  <div className="text-2xl font-bold text-gray-900">
                    ${coin.currentPrice.toLocaleString(undefined, { maximumFractionDigits: 2 })}
                  </div>
                </div>

                <div>
                  <div className="text-sm text-gray-500">Target Price</div>
                  <div className="text-2xl font-bold text-navy-600">
                    ${coin.targetPrice.toLocaleString(undefined, { maximumFractionDigits: 2 })}
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-200">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <div className="text-sm text-gray-500">Entry Price</div>
                      <div className="text-lg font-medium text-gray-900">
                        ${coin.priceTargets.entry.toLocaleString(undefined, { maximumFractionDigits: 2 })}
                      </div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-500">Exit Price</div>
                      <div className="text-lg font-medium text-gray-900">
                        ${coin.priceTargets.exit.toLocaleString(undefined, { maximumFractionDigits: 2 })}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2">
              <PerformanceChart />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <h2 className="text-lg font-semibold text-gray-900 mb-4">Analysis</h2>
                <p className="text-gray-600 mb-6">{coin.description}</p>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-md font-medium text-gray-900 mb-2">Technical Analysis</h3>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <div className="text-sm text-gray-500">RSI</div>
                        <div className="text-md font-medium text-gray-900">{coin.technicalAnalysis.rsi.toFixed(2)}</div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-500">MACD</div>
                        <div className="text-md font-medium text-gray-900">{coin.technicalAnalysis.macd}</div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-500">Moving Averages</div>
                        <div className="text-md font-medium text-gray-900">{coin.technicalAnalysis.movingAverages}</div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-md font-medium text-gray-900 mb-2">Fundamental Analysis</h3>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <div className="text-sm text-gray-500">Network Growth</div>
                        <div className="text-md font-medium text-gray-900">{coin.fundamentalAnalysis.networkGrowth}</div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-500">Developer Activity</div>
                        <div className="text-md font-medium text-gray-900">{coin.fundamentalAnalysis.developerActivity}</div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-500">Institutional Interest</div>
                        <div className="text-md font-medium text-gray-900">{coin.fundamentalAnalysis.institutionalInterest}</div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-500">Supply Dynamics</div>
                        <div className="text-md font-medium text-gray-900">{coin.fundamentalAnalysis.supplyDynamics}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <h2 className="text-lg font-semibold text-gray-900 mb-4">Latest Research</h2>
                <div className="space-y-4">
                  {coin.news.map((article) => (
                    <NewsCard
                      key={article.id}
                      title={article.title}
                      summary={article.summary}
                      author={article.author}
                      date={article.date}
                      readTime={article.readTime}
                      sentiment={article.sentiment}
                      onClick={() => {}}
                    />
                  ))}
                </div>
              </div>
            </div>

            <div>
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <h2 className="text-lg font-semibold text-gray-900 mb-4">Market Metrics</h2>
                <div className="space-y-4">
                  {metrics.map((metric, index) => (
                    <MetricCard
                      key={index}
                      title={metric.title}
                      value={metric.value}
                      description={metric.description}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}