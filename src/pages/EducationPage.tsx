import React from 'react';
import { useNavigate } from 'react-router-dom';
import { PublicNavBar } from '../components/PublicNavBar';
import { Book, ChevronRight, Award, Users, Clock, BarChart, Wallet, Code, LineChart } from 'lucide-react';

export function EducationPage() {
  const navigate = useNavigate();

  const courses = [
    {
      id: 'crypto-sectors',
      title: 'Understanding Crypto Sectors',
      description: 'Master the fundamentals of the five major sectors in the cryptocurrency ecosystem and how they work together to create value.',
      duration: '2 hours',
      modules: 6,
      enrolled: '1,234',
      level: 'Beginner',
      instructor: 'Dr. Sarah Chen',
      topics: [
        'Evolution of Digital Assets',
        'Smart Contract Platforms',
        'DeFi Applications',
        'Consumer & Culture',
        'Infrastructure Services'
      ],
      image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&auto=format&fit=crop&q=60'
    },
    {
      id: 'defi-fundamentals',
      title: 'DeFi Fundamentals',
      description: 'Learn about decentralized finance protocols, from lending and borrowing to automated market makers.',
      duration: '3 hours',
      modules: 8,
      enrolled: '956',
      level: 'Intermediate',
      instructor: 'Michael Rodriguez',
      topics: [
        'Lending Protocols',
        'Decentralized Exchanges',
        'Yield Farming',
        'Risk Management',
        'DeFi Security'
      ],
      image: 'https://images.unsplash.com/photo-1620321023374-d1a68fbc720d?w=800&auto=format&fit=crop&q=60'
    },
    {
      id: 'tokenomics',
      title: 'Tokenomics & Valuation',
      description: 'Understand how to analyze and value different types of cryptoassets using fundamental and technical approaches.',
      duration: '2.5 hours',
      modules: 7,
      enrolled: '789',
      level: 'Advanced',
      instructor: 'Alex Thompson',
      topics: [
        'Token Economics',
        'Valuation Models',
        'Market Analysis',
        'Risk Assessment',
        'Portfolio Strategy'
      ],
      image: 'https://images.unsplash.com/photo-1605792657660-596af9009e82?w=800&auto=format&fit=crop&q=60'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <PublicNavBar />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Education Center</h1>
          <p className="text-lg text-gray-600">Master the fundamentals of cryptocurrency through our expert-curated courses.</p>
        </div>

        {/* Featured Course */}
        <div className="mb-12">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">Featured Course</h2>
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow">
            <div className="md:flex">
              <div className="md:w-1/3">
                <img 
                  src={courses[0].image}
                  alt={courses[0].title}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="p-8 md:w-2/3">
                <div className="flex items-center mb-4">
                  <span className="px-3 py-1 text-sm font-medium text-navy-600 bg-navy-50 rounded-full">
                    {courses[0].level}
                  </span>
                  <span className="ml-4 flex items-center text-sm text-gray-500">
                    <Clock className="w-4 h-4 mr-1" />
                    {courses[0].duration}
                  </span>
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{courses[0].title}</h3>
                <p className="text-gray-600 mb-6">{courses[0].description}</p>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {courses[0].topics.map((topic, index) => (
                    <div key={index} className="flex items-center text-sm text-gray-600">
                      <ChevronRight className="w-4 h-4 text-navy-600 mr-2" />
                      {topic}
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center text-sm text-gray-500">
                      <Book className="w-4 h-4 mr-1" />
                      {courses[0].modules} modules
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <Users className="w-4 h-4 mr-1" />
                      {courses[0].enrolled} enrolled
                    </div>
                  </div>
                  <button
                    onClick={() => navigate(`/education/${courses[0].id}`)}
                    className="flex items-center px-4 py-2 bg-navy-600 text-white rounded-lg hover:bg-navy-700 transition-colors"
                  >
                    Start Learning
                    <ChevronRight className="ml-2 w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Course Categories */}
        <div className="mb-12">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">Course Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <div className="w-12 h-12 bg-navy-50 rounded-lg flex items-center justify-center mb-4">
                <Book className="w-6 h-6 text-navy-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Fundamentals</h3>
              <p className="text-gray-600">Learn the basics of blockchain technology and cryptoassets.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <div className="w-12 h-12 bg-navy-50 rounded-lg flex items-center justify-center mb-4">
                <Code className="w-6 h-6 text-navy-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Technical Analysis</h3>
              <p className="text-gray-600">Master technical analysis and trading strategies.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <div className="w-12 h-12 bg-navy-50 rounded-lg flex items-center justify-center mb-4">
                <LineChart className="w-6 h-6 text-navy-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Advanced Trading</h3>
              <p className="text-gray-600">Advanced concepts for experienced traders.</p>
            </div>
          </div>
        </div>

        {/* All Courses */}
        <div>
          <h2 className="text-xl font-semibold text-gray-900 mb-6">All Courses</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course) => (
              <div key={course.id} className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow">
                <img 
                  src={course.image} 
                  alt={course.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 text-sm font-medium text-navy-600 bg-navy-50 rounded-full">
                      {course.level}
                    </span>
                    <span className="flex items-center text-sm text-gray-500">
                      <Clock className="w-4 h-4 mr-1" />
                      {course.duration}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{course.title}</h3>
                  <p className="text-gray-600 mb-4">{course.description}</p>
                  
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center text-sm text-gray-500">
                        <Book className="w-4 h-4 mr-1" />
                        {course.modules} modules
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <Users className="w-4 h-4 mr-1" />
                        {course.enrolled} enrolled
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={() => navigate(`/education/${course.id}`)}
                    className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-navy-600 hover:bg-navy-700"
                  >
                    Start Learning
                    <ChevronRight className="ml-2 -mr-1 w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}