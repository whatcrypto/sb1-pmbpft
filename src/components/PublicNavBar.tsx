import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Wallet } from 'lucide-react';

export function PublicNavBar() {
  const navigate = useNavigate();

  const navItems = [
    { label: 'Investing Ideas', path: '/investing-ideas' },
    { label: 'Education', path: '/education' },
    { label: 'Personal Finance', path: '/personal-finance' },
    { label: 'Pricing', path: '/pricing' },
  ];

  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <button 
              onClick={() => navigate('/')}
              className="flex items-center space-x-2"
            >
              <Wallet className="w-8 h-8 text-navy-600" />
              <span className="text-xl font-bold text-gray-900">WhatCrypto</span>
            </button>
            <div className="hidden md:ml-8 md:flex md:space-x-6">
              {navItems.map((item) => (
                <button
                  key={item.path}
                  onClick={() => navigate(item.path)}
                  className="text-gray-600 hover:text-navy-600 px-3 py-2 text-sm font-medium"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <button
              onClick={() => navigate('/signin')}
              className="text-gray-600 hover:text-navy-600 px-3 py-2 text-sm font-medium"
            >
              Sign In
            </button>
            <button
              onClick={() => navigate('/register')}
              className="bg-navy-600 text-white hover:bg-navy-700 px-4 py-2 rounded-lg text-sm font-medium"
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}