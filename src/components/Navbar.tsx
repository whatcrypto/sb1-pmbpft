import React from 'react';
import { Search, Wallet } from 'lucide-react';

interface NavbarProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
}

export function Navbar({ searchTerm, onSearchChange }: NavbarProps) {
  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Wallet className="w-8 h-8 text-indigo-600" />
            <span className="ml-2 text-xl font-semibold">WhatCrypto</span>
          </div>
          <div className="flex items-center">
            <div className="relative">
              <input
                type="text"
                placeholder="Search portfolios..."
                className="w-64 pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                value={searchTerm}
                onChange={(e) => onSearchChange(e.target.value)}
              />
              <Search className="absolute left-3 top-2.5 w-5 h-5 text-gray-400" />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}