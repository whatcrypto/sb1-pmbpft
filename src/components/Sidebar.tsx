import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Wallet, 
  TrendingUp, 
  PieChart, 
  Settings, 
  LogOut,
  ChevronRight,
  ChevronLeft,
  Menu
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';

export function Sidebar() {
  const navigate = useNavigate();
  const location = useLocation();
  const { isAuthenticated, logout } = useAuth();
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const menuItems = [
    { icon: LayoutDashboard, label: 'Dashboard', path: '/' },
    { icon: Wallet, label: 'Portfolios', path: '/portfolio/wc10-index' },
    { icon: TrendingUp, label: 'Analytics', path: '/analytics' },
    { icon: PieChart, label: 'Reports', path: '/reports' },
    { icon: Settings, label: 'Settings', path: '/settings' },
  ];

  const user = {
    name: 'John Doe',
    email: 'john@example.com'
  };

  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(n => n[0])
      .join('')
      .toUpperCase();
  };

  const handleNavigation = (path: string) => {
    if (!isAuthenticated) {
      navigate('/pricing');
    } else {
      navigate(path);
      setIsMobileOpen(false); // Close mobile menu after navigation
    }
  };

  return (
    <>
      {/* Mobile Menu Button */}
      <div className="lg:hidden fixed top-0 left-0 w-full bg-white border-b border-gray-200 z-50">
        <div className="flex items-center justify-between p-4">
          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="p-2 rounded-lg hover:bg-gray-100"
          >
            <Menu className="w-6 h-6 text-gray-600" />
          </button>
          <div className="flex items-center">
            <Wallet className="w-6 h-6 text-navy-600" />
            <span className="ml-2 text-lg font-semibold">WhatCrypto</span>
          </div>
          <div className="w-10" /> {/* Spacer for alignment */}
        </div>
      </div>

      {/* Mobile Overlay */}
      {isMobileOpen && (
        <div 
          className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsMobileOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div className={`fixed top-0 left-0 h-full bg-white border-r border-gray-200 transition-all duration-300 z-50
        ${isCollapsed ? 'w-20' : 'w-64'}
        ${isMobileOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        <div className="flex items-center justify-between p-4">
          {!isCollapsed && (
            <div className="flex items-center">
              <Wallet className="w-8 h-8 text-navy-600" />
              <span className="ml-2 text-xl font-semibold">WhatCrypto</span>
            </div>
          )}
          <button
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="p-2 rounded-lg hover:bg-gray-100 hidden lg:block"
          >
            {isCollapsed ? (
              <ChevronRight className="w-5 h-5 text-gray-500" />
            ) : (
              <ChevronLeft className="w-5 h-5 text-gray-500" />
            )}
          </button>
        </div>

        {isAuthenticated && (
          <div className={`px-4 py-3 border-b border-gray-200 ${isCollapsed ? 'text-center' : ''}`}>
            {isCollapsed ? (
              <div className="w-10 h-10 rounded-full bg-navy-600 text-white flex items-center justify-center mx-auto">
                {getInitials(user.name)}
              </div>
            ) : (
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-navy-600 text-white flex items-center justify-center">
                  {getInitials(user.name)}
                </div>
                <div>
                  <div className="font-medium text-gray-900">{user.name}</div>
                  <div className="text-sm text-gray-500">{user.email}</div>
                </div>
              </div>
            )}
          </div>
        )}

        <nav className="p-4 space-y-1">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            
            return (
              <button
                key={item.label}
                onClick={() => handleNavigation(item.path)}
                className={`w-full flex items-center ${
                  isCollapsed ? 'justify-center' : 'justify-start'
                } space-x-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                  isActive 
                    ? 'bg-navy-50 text-navy-600' 
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                <Icon className="w-5 h-5 flex-shrink-0" />
                {!isCollapsed && <span>{item.label}</span>}
              </button>
            );
          })}
        </nav>

        <div className={`absolute bottom-4 ${isCollapsed ? 'left-0 right-0' : 'left-4 right-4'}`}>
          <button 
            onClick={() => {
              logout();
              navigate('/');
            }}
            className={`w-full flex items-center ${
              isCollapsed ? 'justify-center' : 'justify-start'
            } space-x-3 px-4 py-3 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-50`}
          >
            <LogOut className="w-5 h-5 flex-shrink-0" />
            {!isCollapsed && <span>Sign Out</span>}
          </button>
        </div>
      </div>
    </>
  );
}