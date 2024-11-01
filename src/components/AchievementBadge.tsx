import React from 'react';
import { Award } from 'lucide-react';

interface AchievementBadgeProps {
  title: string;
  description: string;
  date: string;
  type: 'bronze' | 'silver' | 'gold' | 'platinum';
}

export function AchievementBadge({ title, description, date, type }: AchievementBadgeProps) {
  const getBadgeColor = (type: string) => {
    switch (type) {
      case 'bronze':
        return 'bg-amber-100 text-amber-800 border-amber-200';
      case 'silver':
        return 'bg-gray-100 text-gray-800 border-gray-200';
      case 'gold':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'platinum':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <div className={`flex items-center p-4 rounded-lg border ${getBadgeColor(type)}`}>
      <Award className="w-12 h-12 mr-4" />
      <div>
        <h3 className="font-semibold">{title}</h3>
        <p className="text-sm">{description}</p>
        <p className="text-xs mt-1 opacity-75">Earned on {date}</p>
      </div>
    </div>
  );
}