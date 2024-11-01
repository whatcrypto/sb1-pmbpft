import React from 'react';
import { useNavigate } from 'react-router-dom';
import { PublicNavBar } from '../components/PublicNavBar';
import { TrendingUp, BarChart2, Target, Shield, ChevronRight, Users } from 'lucide-react';

export function InvestingIdeasPage() {
  const navigate = useNavigate();

  const strategies = [
    {
      id: 'wc10-index',
      title: 'WC10 Index Strategy',
      description: 'A core portfolio strategy focused on the top 10 cryptocurrencies by market capitalization.',
      risk: 'Moderate',
      performance: '+12.4%',
      users: '2,345',
      image: 'https://images.unsplash.com/photo-1642790106117-e829e14a795f?w=800&auto=format&fit=crop&q=60'
    },
    {
      id: 'large-cap-blend',
      title: 'Large Cap Blend',
      description: 'A balanced approach combining established cryptocurrencies for stability and growth.',
      risk: 'Moderate',
      performance: '+15.7%',
      users: '1,892',
      image: 'https://images.unsplash.com/photo-1621761191319-c6fb62004040?w=800&auto=format&fit=crop&q=60'
    },
    {
      id: 'esg-responsible',
      title: 'ESG Responsible',
      description: 'Focus on environmentally and socially responsible blockchain projects.',
      risk: 'Moderate-Low',
      performance: '+8.2%',
      users: '956',
      image: 'https://images.unsplash.com/photo-1623127899673-39264566a100?w=800&auto=format&fit=crop&q=60'
    }
  ];

  const insights = [
    {
      title: 'Smart Contract Platforms Analysis',
      description: 'Deep dive into the competitive landscape of smart contract platforms.',
      date: 'Updated today',
      category: 'Technical Analysis'
    },
    {
      title: 'DeFi Sector Overview',
      description: 'Current state and future outlook of decentralized finance protocols.',
      date: 'Updated yesterday',
      category: 'Sector Analysis'
    },
    {
      title: 'Infrastructure Trends',
      description: 'Emerging trends in blockchain infrastructure and scaling solutions.',
      date: '2 days ago',
      category: 'Market Research'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <PublicNavBar />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Investment Ideas</h1>
          <p className="text-lg text-gray-600">
            Discover curated investment strategies and insights based on thorough market research and analysis.
          </p>
        </div>

        {/* Investment Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <div className="flex items-center justify-between mb-2">
              <TrendingUp className="w-6 h-6 text-emerald-500" />
              <span className="text-sm text-gray-500">24h Change</span>
            </div>
            <div className="text-2xl font-semibold text-emerald-500">+2.34%</div>
            <div className="text-sm text-gray-500">Market Average</div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <div className="flex items-center justify-between mb-2">
              <BarChart2 className="w-6 h-6 text-blue-500" />
              <span className="text-sm text-gray-500">Volatility</span>
            </div>
            <div className="text-2xl font-semibold text-gray-900">6.8</div>
            <div className="text-sm text-gray-500">30-day Index</div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <div className="flex items-center justify-between mb-2">
              <Target className="w-6 h-6 text-purple-500" />
              <span className="text-sm text-gray-500">Success Rate</span>
            </div>
            <div className="text-2xl font-semibold text-gray-900">85%</div>
            <div className="text-sm text-gray-500">Strategy Performance</div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <div className="flex items-center justify-between mb-2">
              <Shield className="w-6 h-6 text-red-500" />
              <span className="text-sm text-gray-500">Risk Score</span>
            </div>
            <div className="text-2xl font-semibold text-gray-900">4.2</div>
            <div className="text-sm text-gray-500">Market Risk Index</div>
          </div>
        </div>

        {/* Investment Strategies */}
        <div className="mb-12">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">Featured Strategies</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {strategies.map((strategy) => (
              <div key={strategy.id} className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow">
                <img 
                  src={strategy.image} 
                  alt={strategy.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{strategy.title}</h3>
                  <p className="text-gray-600 mb-4">{strategy.description}</p>
                  
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center text-sm">
                        <Users className="w-4 h-4 mr-1 text-gray-400" />
                        <span className="text-gray-600">{strategy.users}</span>
                      </div>
                      <div className="text-sm text-emerald-500 font-medium">
                        {strategy.performance}
                      </div>
                    </div>
                    <span className="text-sm text-gray-500">{strategy.risk}</span>
                  </div>

                  <button
                    onClick={() => navigate(`/portfolio/${strategy.id}`)}
                    className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-navy-600 hover:bg-navy-700"
                  >
                    View Strategy
                    <ChevronRight className="ml-2 -mr-1 w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Market Insights */}
        <div>
          <h2 className="text-xl font-semibold text-gray-900 mb-6">Latest Market Insights</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {insights.map((insight, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 text-xs font-medium text-navy-600 bg-navy-50 rounded-full">
                    {insight.category}
                  </span>
                  <span className="text-sm text-gray-500">{insight.date}</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{insight.title}</h3>
                <p className="text-gray-600 mb-4">{insight.description}</p>
                <button className="text-navy-600 text-sm font-medium hover:text-navy-700">
                  Read Analysis →
                </button>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}