import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FileText, ChevronRight } from 'lucide-react';
import { coins } from '../data/coins';
import { Navbar } from '../components/Navbar';
import { Sidebar } from '../components/Sidebar';

export function ReportsPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <Sidebar />
      <div className="flex-1 ml-64">
        <Navbar searchTerm="" onSearchChange={() => {}} />
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="text-2xl font-bold text-gray-900 mb-8">Research Reports</h1>

          <div className="space-y-6">
            {coins.map((coin) => (
              <div
                key={coin.id}
                className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-navy-50 rounded-lg">
                      <FileText className="w-6 h-6 text-navy-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">
                        {coin.name} ({coin.symbol}) Analysis Report
                      </h3>
                      <p className="text-sm text-gray-500">
                        Comprehensive analysis of {coin.name}'s market position, technology, and future prospects
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => navigate(`/coin/${coin.id}`)}
                    className="flex items-center space-x-2 text-navy-600 hover:text-navy-700"
                  >
                    <span className="text-sm font-medium">View Report</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}