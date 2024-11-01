import React from 'react';
import { useNavigate } from 'react-router-dom';
import { PublicNavBar } from '../components/PublicNavBar';
import { Wallet, PieChart, TrendingUp, Shield, ChevronRight, Book } from 'lucide-react';

export function PersonalFinancePage() {
  const navigate = useNavigate();

  const guides = [
    {
      title: 'Portfolio Management',
      description: 'Learn how to build and manage a diversified crypto portfolio.',
      icon: PieChart,
      articles: [
        'Asset Allocation Strategies',
        'Risk Management Techniques',
        'Rebalancing Guidelines'
      ]
    },
    {
      title: 'Investment Planning',
      description: 'Develop a personalized investment strategy aligned with your goals.',
      icon: TrendingUp,
      articles: [
        'Goal Setting Framework',
        'Investment Timeline Planning',
        'Risk Tolerance Assessment'
      ]
    },
    {
      title: 'Security Best Practices',
      description: 'Protect your digital assets with comprehensive security measures.',
      icon: Shield,
      articles: [
        'Wallet Security Guidelines',
        'Backup Procedures',
        'Safe Trading Practices'
      ]
    }
  ];

  const tools = [
    {
      title: 'Portfolio Tracker',
      description: 'Track your crypto investments across multiple platforms.',
      status: 'Available'
    },
    {
      title: 'Risk Calculator',
      description: 'Calculate and optimize your portfolio risk exposure.',
      status: 'Available'
    },
    {
      title: 'Tax Reporter',
      description: 'Generate tax reports for your crypto transactions.',
      status: 'Coming Soon'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <PublicNavBar />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Personal Finance</h1>
          <p className="text-lg text-gray-600">
            Master your crypto finances with our comprehensive guides and tools.
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <Wallet className="w-8 h-8 text-navy-600 mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Portfolio Management</h3>
            <p className="text-gray-600">Track and optimize your crypto investments</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <TrendingUp className="w-8 h-8 text-navy-600 mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Investment Planning</h3>
            <p className="text-gray-600">Create your personalized investment strategy</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <Shield className="w-8 h-8 text-navy-600 mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Security</h3>
            <p className="text-gray-600">Protect your digital assets</p>
          </div>
        </div>

        {/* Guides Section */}
        <div className="mb-12">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">Financial Guides</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {guides.map((guide, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <guide.icon className="w-8 h-8 text-navy-600 mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{guide.title}</h3>
                <p className="text-gray-600 mb-4">{guide.description}</p>
                
                <div className="space-y-2 mb-6">
                  {guide.articles.map((article, idx) => (
                    <div key={idx} className="flex items-center text-sm text-gray-600">
                      <Book className="w-4 h-4 text-navy-600 mr-2" />
                      {article}
                    </div>
                  ))}
                </div>

                <button className="text-navy-600 text-sm font-medium hover:text-navy-700 flex items-center">
                  Read Guide
                  <ChevronRight className="ml-1 w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Tools Section */}
        <div>
          <h2 className="text-xl font-semibold text-gray-900 mb-6">Financial Tools</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {tools.map((tool, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-900">{tool.title}</h3>
                  <span className={`px-3 py-1 text-xs font-medium rounded-full ${
                    tool.status === 'Available' 
                      ? 'bg-emerald-100 text-emerald-800'
                      : 'bg-gray-100 text-gray-600'
                  }`}>
                    {tool.status}
                  </span>
                </div>
                <p className="text-gray-600 mb-4">{tool.description}</p>
                <button
                  className={`w-full flex items-center justify-center px-4 py-2 rounded-md text-sm font-medium ${
                    tool.status === 'Available'
                      ? 'bg-navy-600 text-white hover:bg-navy-700'
                      : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                  }`}
                  disabled={tool.status !== 'Available'}
                >
                  {tool.status === 'Available' ? 'Launch Tool' : 'Coming Soon'}
                </button>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}