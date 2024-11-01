import { useNavigate } from 'react-router-dom';
import { Check, Wallet } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import Cta from '../components/P';
import { Navbar } from '../components/Navbar';

export function PricingPage() {
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubscribe = (plan: 'pro' | 'elite') => {
    // Here you would typically handle the payment process
    login();
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar
        searchTerm={''}
        onSearchChange={function (value: string): void {
          throw new Error('Function not implemented.');
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <Wallet className="w-12 h-12 text-navy-600 mx-auto mb-4" />
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Choose Your Investment Journey
          </h1>
          <p className="text-xl text-gray-600">
            Get access to professional-grade crypto investment strategies
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Pro Plan */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Pro</h2>
              <div className="flex items-center justify-center mb-4">
                <span className="text-5xl font-bold text-navy-600">$25</span>
                <span className="text-gray-500 ml-2">/month</span>
              </div>
            </div>

            <ul className="space-y-4 mb-8">
              <li className="flex items-center">
                <Check className="w-5 h-5 text-emerald-500 mr-3" />
                <span className="text-gray-700">Access to all portfolios</span>
              </li>
              <li className="flex items-center">
                <Check className="w-5 h-5 text-emerald-500 mr-3" />
                <span className="text-gray-700">
                  Price targets and analysis
                </span>
              </li>
              <li className="flex items-center">
                <Check className="w-5 h-5 text-emerald-500 mr-3" />
                <span className="text-gray-700">Full investment plans</span>
              </li>
              <li className="flex items-center">
                <Check className="w-5 h-5 text-emerald-500 mr-3" />
                <span className="text-gray-700">Research reports</span>
              </li>
              <li className="flex items-center">
                <Check className="w-5 h-5 text-emerald-500 mr-3" />
                <span className="text-gray-700">Advanced analytics</span>
              </li>
            </ul>

            <button
              onClick={() => handleSubscribe('pro')}
              className="w-full py-3 px-6 text-white bg-navy-600 hover:bg-navy-700 rounded-lg font-medium transition-colors"
            >
              Subscribe to Pro
            </button>
          </div>

          {/* Elite Plan */}
          <div className="bg-navy-600 rounded-2xl shadow-lg p-8 text-white">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold mb-4">Elite</h2>
              <div className="flex items-center justify-center mb-4">
                <span className="text-5xl font-bold">$35</span>
                <span className="ml-2 opacity-80">/month</span>
              </div>
            </div>

            <ul className="space-y-4 mb-8">
              <li className="flex items-center">
                <Check className="w-5 h-5 text-emerald-400 mr-3" />
                <span>Everything in Pro plan</span>
              </li>
              <li className="flex items-center">
                <Check className="w-5 h-5 text-emerald-400 mr-3" />
                <span>Exclusive 100X Opportunities</span>
              </li>
              <li className="flex items-center">
                <Check className="w-5 h-5 text-emerald-400 mr-3" />
                <span>10 Hidden Gems each month</span>
              </li>
              <li className="flex items-center">
                <Check className="w-5 h-5 text-emerald-400 mr-3" />
                <span>Live trade alerts</span>
              </li>
              <li className="flex items-center">
                <Check className="w-5 h-5 text-emerald-400 mr-3" />
                <span>SMS & Email notifications</span>
              </li>
              <li className="flex items-center">
                <Check className="w-5 h-5 text-emerald-400 mr-3" />
                <span>Priority support</span>
              </li>
            </ul>

            <button
              onClick={() => handleSubscribe('elite')}
              className="w-full py-3 px-6 text-navy-600 bg-white hover:bg-gray-50 rounded-lg font-medium transition-colors"
            >
              Subscribe to Elite
            </button>
          </div>
        </div>

        {/* Money Back Guarantee */}
        <div className="text-center mt-12">
          <p className="text-gray-600">
            30-day money-back guarantee • Cancel anytime • Secure payment
          </p>
        </div>
        {/* Call To Action Section */}
        <div>
          <Cta />
        </div>
      </div>
    </div>
  );
}
