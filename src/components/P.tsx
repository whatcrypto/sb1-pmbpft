import {
  Star,
  Clock,
  TrendingUp,
  Shield,
  BarChart2,
  MessageCircle,
} from 'lucide-react';

const PricingPageTwo = () => {
  // Previous features object remains the same

  const testimonials = [
    {
      name: 'Michael R.',
      role: 'Active Trader',
      content:
        'The color-coded system simplified my trading decisions. Up 34% since joining.',
      avatar: '/api/placeholder/40/40',
    },
    {
      name: 'Sarah K.',
      role: 'Part-time Investor',
      content:
        'Elite signals helped me spot opportunities I would have missed. Worth every penny.',
      avatar: '/api/placeholder/40/40',
    },
    {
      name: 'David L.',
      role: 'Portfolio Manager',
      content:
        'The research quality rivals institutional-grade services at a fraction of the cost.',
      avatar: '/api/placeholder/40/40',
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {/* Previous header and pricing cards content remains the same */}
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold mb-4">
          Choose Your Investment Journey
        </h1>
        <p className="text-gray-600 mb-8">
          Get access to professional-grade crypto investment strategies
        </p>

        {/* Performance Stats */}
        <div className="grid grid-cols-3 gap-4 mb-8">
          <div className="p-4 bg-blue-50 rounded-lg">
            <TrendingUp className="w-8 h-8 text-blue-500 mx-auto mb-2" />
            <div className="text-2xl font-bold">94%</div>
            <div className="text-sm text-gray-600">Signal Accuracy</div>
          </div>
          <div className="p-4 bg-blue-50 rounded-lg">
            <Star className="w-8 h-8 text-blue-500 mx-auto mb-2" />
            <div className="text-2xl font-bold">10,000+</div>
            <div className="text-sm text-gray-600">Active Members</div>
          </div>
          <div className="p-4 bg-blue-50 rounded-lg">
            <Clock className="w-8 h-8 text-blue-500 mx-auto mb-2" />
            <div className="text-2xl font-bold">24/7</div>
            <div className="text-sm text-gray-600">Market Monitoring</div>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Pro and Elite cards remain the same */}
        </div>

        {/* New Post-Pricing Sections */}

        {/* Why Choose Us Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-8">
            Why Traders Choose Our Platform
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white rounded-lg shadow-sm">
              <Shield className="w-12 h-12 text-blue-500 mx-auto mb-4" />
              <h3 className="font-bold mb-2">Secure & Reliable</h3>
              <p className="text-gray-600">
                Bank-grade encryption and 24/7 monitoring for your peace of mind
              </p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-sm">
              <BarChart2 className="w-12 h-12 text-blue-500 mx-auto mb-4" />
              <h3 className="font-bold mb-2">Data-Driven Signals</h3>
              <p className="text-gray-600">
                Advanced algorithms analyzing multiple market indicators
              </p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-sm">
              <MessageCircle className="w-12 h-12 text-blue-500 mx-auto mb-4" />
              <h3 className="font-bold mb-2">Expert Support</h3>
              <p className="text-gray-600">
                Get help when you need it with our responsive support team
              </p>
            </div>
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-8">What Our Members Say</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="p-6 bg-white rounded-lg shadow-sm">
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="rounded-full mr-3"
                  />
                  <div className="text-left">
                    <div className="font-bold">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
                <p className="text-gray-700 text-left">{testimonial.content}</p>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-8">
            Frequently Asked Questions
          </h2>
          <div className="grid md:grid-cols-2 gap-6 text-left">
            <div className="p-6 bg-white rounded-lg shadow-sm">
              <h3 className="font-bold mb-2">How often are signals updated?</h3>
              <p className="text-gray-600">
                Our system monitors markets 24/7 and updates signals in
                real-time. You'll receive immediate notifications for any
                changes.
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-sm">
              <h3 className="font-bold mb-2">
                What's the average return rate?
              </h3>
              <p className="text-gray-600">
                While past performance doesn't guarantee future results, our
                Elite members saw an average of 27% returns in 2023.*
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-sm">
              <h3 className="font-bold mb-2">Can I cancel anytime?</h3>
              <p className="text-gray-600">
                Yes, you can cancel your subscription at any time. We also offer
                a 90-day money-back guarantee.
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-sm">
              <h3 className="font-bold mb-2">How do I get started?</h3>
              <p className="text-gray-600">
                Simply choose your plan above, create an account, and you'll get
                immediate access to our trading signals.
              </p>
            </div>
          </div>
        </div>

        {/* Final CTA Section */}
        <div className="bg-blue-50 p-8 rounded-lg mb-8">
          <h2 className="text-2xl font-bold mb-4">
            Ready to Start Your Trading Journey?
          </h2>
          <p className="text-gray-600 mb-6">
            Join thousands of successful traders who trust our signals every day
          </p>
          <div className="flex justify-center gap-4">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
              Get Started Now
            </button>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-gray-50 transition-colors">
              View Demo
            </button>
          </div>
        </div>

        {/* Trust Signals */}
        <div className="text-center">
          <p className="text-sm text-gray-600">
            Protected by bank-grade encryption • 90-day money-back guarantee •
            24/7 market monitoring
          </p>
          <p className="text-xs text-gray-500 mt-4">
            *Disclaimer: Cryptocurrency trading involves risk. Past performance
            does not guarantee future results.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PricingPageTwo;
