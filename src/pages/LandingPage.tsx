import React from 'react';
import { useNavigate } from 'react-router-dom';
import { PublicNavBar } from '../components/PublicNavBar';
import { 
  ChevronRight, 
  TrendingUp, 
  Shield, 
  Target,
  BarChart4,
  Wallet,
  Users,
  Zap,
  LineChart,
  BookOpen,
  Bell,
  Award
} from 'lucide-react';

export function LandingPage() {
  const navigate = useNavigate();

  const stats = [
    { label: 'Active Users', value: '10,000+' },
    { label: 'Portfolio Strategies', value: '15+' },
    { label: 'Success Rate', value: '85%' },
    { label: 'Research Reports', value: '1,000+' }
  ];

  const testimonials = [
    {
      quote: "The most comprehensive crypto research platform I've ever used.",
      author: "Sarah Chen",
      role: "Portfolio Manager",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&auto=format&fit=crop&q=60"
    },
    {
      quote: "Finally, institutional-grade research for crypto investments.",
      author: "Michael Rodriguez",
      role: "Investment Analyst",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&auto=format&fit=crop&q=60"
    },
    {
      quote: "The risk metrics helped me optimize my portfolio perfectly.",
      author: "Alex Thompson",
      role: "Crypto Trader",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&auto=format&fit=crop&q=60"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <PublicNavBar />
      
      {/* Hero Section */}
      <div className="relative bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
            <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div className="sm:text-center lg:text-left">
                <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                  <span className="block">Professional Crypto</span>
                  <span className="block text-navy-600">Investment Research</span>
                </h1>
                <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                  Make informed investment decisions with institutional-grade research, portfolio strategies, and real-time market analysis.
                </p>
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                  <div className="rounded-md shadow">
                    <button
                      onClick={() => navigate('/register')}
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-navy-600 hover:bg-navy-700 md:py-4 md:text-lg md:px-10"
                    >
                      Start Free Trial
                      <ChevronRight className="ml-2 w-5 h-5" />
                    </button>
                  </div>
                  <div className="mt-3 sm:mt-0 sm:ml-3">
                    <button
                      onClick={() => navigate('/pricing')}
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-navy-700 bg-navy-100 hover:bg-navy-200 md:py-4 md:text-lg md:px-10"
                    >
                      View Pricing
                    </button>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <img
            className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=60"
            alt="Trading dashboard"
          />
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-navy-600">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-3xl font-extrabold text-white">{stat.value}</p>
                <p className="mt-2 text-base font-medium text-navy-100">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-navy-600 font-semibold tracking-wide uppercase">Features</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Everything you need to invest with confidence
            </p>
          </div>

          <div className="mt-10">
            <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10">
              <div className="relative">
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-navy-500 text-white">
                  <TrendingUp className="h-6 w-6" />
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Professional Research</p>
                <p className="mt-2 ml-16 text-base text-gray-500">
                  Institutional-grade analysis and insights from experienced crypto analysts.
                </p>
              </div>

              <div className="relative">
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-navy-500 text-white">
                  <Shield className="h-6 w-6" />
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Risk Management</p>
                <p className="mt-2 ml-16 text-base text-gray-500">
                  Advanced risk metrics and portfolio management tools.
                </p>
              </div>

              <div className="relative">
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-navy-500 text-white">
                  <Target className="h-6 w-6" />
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Investment Strategies</p>
                <p className="mt-2 ml-16 text-base text-gray-500">
                  Curated portfolio strategies for different investment goals.
                </p>
              </div>

              <div className="relative">
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-navy-500 text-white">
                  <BarChart4 className="h-6 w-6" />
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Real-time Analytics</p>
                <p className="mt-2 ml-16 text-base text-gray-500">
                  Live market data and performance tracking.
                </p>
              </div>

              <div className="relative">
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-navy-500 text-white">
                  <Bell className="h-6 w-6" />
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Trade Alerts</p>
                <p className="mt-2 ml-16 text-base text-gray-500">
                  Get notified of market opportunities and portfolio updates.
                </p>
              </div>

              <div className="relative">
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-navy-500 text-white">
                  <BookOpen className="h-6 w-6" />
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Educational Resources</p>
                <p className="mt-2 ml-16 text-base text-gray-500">
                  Learn from our comprehensive guides and tutorials.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center mb-12">
            <h2 className="text-base text-navy-600 font-semibold tracking-wide uppercase">How It Works</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Start investing smarter in 3 simple steps
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <div className="w-12 h-12 bg-navy-100 rounded-full flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-navy-600" />
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">1. Create Account</h3>
              <p className="text-gray-500">Sign up for free and get access to basic features.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <div className="w-12 h-12 bg-navy-100 rounded-full flex items-center justify-center mb-4">
                <LineChart className="h-6 w-6 text-navy-600" />
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">2. Choose Strategy</h3>
              <p className="text-gray-500">Select from our curated portfolio strategies.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <div className="w-12 h-12 bg-navy-100 rounded-full flex items-center justify-center mb-4">
                <Zap className="h-6 w-6 text-navy-600" />
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">3. Start Investing</h3>
              <p className="text-gray-500">Follow our research and recommendations.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="bg-white py-16 lg:py-24">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            <div className="text-center">
              <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">
                Trusted by investors worldwide
              </h2>
              <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
                Join thousands of investors who trust our research for their crypto investments
              </p>
            </div>
            <div className="mt-12 max-w-lg mx-auto grid gap-8 lg:grid-cols-3 lg:max-w-none">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="flex flex-col rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                  <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                    <div className="flex-1">
                      <p className="text-gray-500 italic">"{testimonial.quote}"</p>
                    </div>
                    <div className="mt-6 flex items-center">
                      <div className="flex-shrink-0">
                        <img className="h-10 w-10 rounded-full" src={testimonial.image} alt="" />
                      </div>
                      <div className="ml-3">
                        <p className="text-sm font-medium text-gray-900">{testimonial.author}</p>
                        <p className="text-sm text-gray-500">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Awards Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-navy-600 font-semibold tracking-wide uppercase">Recognition</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Award-winning research platform
            </p>
          </div>
          <div className="mt-10 flex justify-center space-x-8">
            <Award className="w-16 h-16 text-navy-600" />
            <Award className="w-16 h-16 text-navy-600" />
            <Award className="w-16 h-16 text-navy-600" />
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-navy-700">
        <div className="max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            <span className="block">Ready to get started?</span>
            <span className="block">Start your free trial today.</span>
          </h2>
          <p className="mt-4 text-lg leading-6 text-navy-100">
            Get full access to all features for 14 days. No credit card required.
          </p>
          <button
            onClick={() => navigate('/register')}
            className="mt-8 w-full inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-navy-600 bg-white hover:bg-navy-50 sm:w-auto"
          >
            Sign up for free
            <ChevronRight className="ml-2 w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}