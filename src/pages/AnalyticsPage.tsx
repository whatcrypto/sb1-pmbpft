import React from 'react';
import { useNavigate } from 'react-router-dom';
import { portfolios } from '../data';
import { Navbar } from '../components/Navbar';
import { Sidebar } from '../components/Sidebar';
import { PortfolioCard } from '../components/PortfolioCard';

export function AnalyticsPage() {
  const navigate = useNavigate();

  // Group portfolios by category
  const categories = {
    core: ['WC10 Index', 'Large Cap Blend', 'Mega-Cap Core'].map(name => 
      portfolios.find(p => p.category.includes(name))
    ).filter(Boolean),
    growth: ['Large Cap Growth', 'Small-Cap, High Potential'].map(name => 
      portfolios.find(p => p.category.includes(name))
    ).filter(Boolean),
    income: ['Large Cap Income', 'Dividend Aristocrats'].map(name => 
      portfolios.find(p => p.category.includes(name))
    ).filter(Boolean),
    specialty: ['ESG Responsible', 'Future Of Privacy', 'Real World Assets'].map(name => 
      portfolios.find(p => p.category.includes(name))
    ).filter(Boolean),
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <Sidebar />
      <div className="flex-1 ml-64">
        <Navbar searchTerm="" onSearchChange={() => {}} />
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="text-2xl font-bold text-gray-900 mb-8">Investment Strategies</h1>

          <div className="space-y-12">
            {/* Core Strategies */}
            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-6">Core Strategies</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {categories.core.map((portfolio) => portfolio && (
                  <PortfolioCard
                    key={portfolio.category}
                    category={portfolio.category}
                    description="Core investment strategy focused on market leaders"
                    performance="+12.4%"
                    risk="Moderate"
                    onClick={() => navigate(`/portfolio/${portfolio.category.toLowerCase().replace(/\s+/g, '-')}`)}
                    showAddButton={true}
                  />
                ))}
              </div>
            </section>

            {/* Growth Strategies */}
            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-6">Growth Strategies</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {categories.growth.map((portfolio) => portfolio && (
                  <PortfolioCard
                    key={portfolio.category}
                    category={portfolio.category}
                    description="High-growth potential with increased volatility"
                    performance="+18.7%"
                    risk="Aggressive"
                    onClick={() => navigate(`/portfolio/${portfolio.category.toLowerCase().replace(/\s+/g, '-')}`)}
                    showAddButton={true}
                  />
                ))}
              </div>
            </section>

            {/* Income Strategies */}
            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-6">Income Strategies</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {categories.income.map((portfolio) => portfolio && (
                  <PortfolioCard
                    key={portfolio.category}
                    category={portfolio.category}
                    description="Focus on stable returns and regular distributions"
                    performance="+8.2%"
                    risk="Conservative"
                    onClick={() => navigate(`/portfolio/${portfolio.category.toLowerCase().replace(/\s+/g, '-')}`)}
                    showAddButton={true}
                  />
                ))}
              </div>
            </section>

            {/* Specialty Strategies */}
            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-6">Specialty Strategies</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {categories.specialty.map((portfolio) => portfolio && (
                  <PortfolioCard
                    key={portfolio.category}
                    category={portfolio.category}
                    description="Specialized investment focus for specific objectives"
                    performance="+15.3%"
                    risk="Moderate-Aggressive"
                    onClick={() => navigate(`/portfolio/${portfolio.category.toLowerCase().replace(/\s+/g, '-')}`)}
                    showAddButton={true}
                  />
                ))}
              </div>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}