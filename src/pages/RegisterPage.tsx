import React from 'react';
import { useNavigate } from 'react-router-dom';
import { PublicNavBar } from '../components/PublicNavBar';
import { useAuth } from '../context/AuthContext';

export function RegisterPage() {
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    login();
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <PublicNavBar />
      <div className="max-w-md mx-auto px-4 py-12">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Create an Account</h2>
          <form onSubmit={handleRegister} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-navy-500 focus:ring-navy-500"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-navy-500 focus:ring-navy-500"
                required
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-navy-500 focus:ring-navy-500"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-navy-600 text-white py-2 px-4 rounded-lg hover:bg-navy-700 transition-colors"
            >
              Create Account
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}