import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { PublicNavBar } from '../components/PublicNavBar';
import { useAuth } from '../context/AuthContext';
import { Wallet } from 'lucide-react';

export function SignInPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const { login } = useAuth();
  const message = location.state?.message;

  const handleSignIn = (e: React.FormEvent) => {
    e.preventDefault();
    login();
    navigate(-1); // Go back to previous page after login
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <PublicNavBar />
      <div className="flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <div className="flex justify-center">
            <Wallet className="w-12 h-12 text-navy-600" />
          </div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Sign in to WhatCrypto
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Access all courses and learning materials for free
          </p>
          {message && (
            <div className="mt-2 text-center text-sm text-navy-600 bg-navy-50 p-2 rounded">
              {message}
            </div>
          )}
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <form className="space-y-6" onSubmit={handleSignIn}>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email address
                </label>
                <div className="mt-1">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-navy-500 focus:border-navy-500"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                  Password
                </label>
                <div className="mt-1">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-navy-500 focus:border-navy-500"
                  />
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 text-navy-600 focus:ring-navy-500 border-gray-300 rounded"
                  />
                  <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                    Remember me
                  </label>
                </div>

                <div className="text-sm">
                  <a href="#" className="font-medium text-navy-600 hover:text-navy-500">
                    Forgot your password?
                  </a>
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-navy-600 hover:bg-navy-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-navy-500"
                >
                  Sign in
                </button>
              </div>
            </form>

            <div className="mt-6">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-gray-500">Or</span>
                </div>
              </div>

              <div className="mt-6">
                <button
                  onClick={() => navigate('/register')}
                  className="w-full flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-navy-500"
                >
                  Create new account
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}