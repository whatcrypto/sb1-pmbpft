import React from 'react';
import { Calendar, Clock, ChevronRight } from 'lucide-react';

interface NewsCardProps {
  title: string;
  summary: string;
  author: string;
  date: string;
  readTime: string;
  sentiment: 'bullish' | 'bearish' | 'neutral';
  onClick: () => void;
}

export function NewsCard({
  title,
  summary,
  author,
  date,
  readTime,
  sentiment,
  onClick
}: NewsCardProps) {
  const getSentimentColor = (sentiment: string) => {
    switch (sentiment) {
      case 'bullish':
        return 'bg-emerald-100 text-emerald-800';
      case 'bearish':
        return 'bg-red-100 text-red-800';
      case 'neutral':
        return 'bg-gray-100 text-gray-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
      <div className="flex justify-between items-start mb-4">
        <div className="space-y-1">
          <div className="flex items-center space-x-2">
            <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${getSentimentColor(sentiment)}`}>
              {sentiment.charAt(0).toUpperCase() + sentiment.slice(1)}
            </span>
            <span className="text-sm text-gray-500">{author}</span>
          </div>
          <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
        </div>
      </div>

      <p className="text-gray-600 mb-4 line-clamp-2">{summary}</p>

      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4 text-sm text-gray-500">
          <div className="flex items-center">
            <Calendar className="w-4 h-4 mr-1" />
            {date}
          </div>
          <div className="flex items-center">
            <Clock className="w-4 h-4 mr-1" />
            {readTime}
          </div>
        </div>
        <button
          onClick={onClick}
          className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-navy-600 hover:bg-navy-700 rounded-lg transition-colors"
        >
          Read More
          <ChevronRight className="ml-1 -mr-1 w-4 h-4" />
        </button>
      </div>
    </div>
  );
}