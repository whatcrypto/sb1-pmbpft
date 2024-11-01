import React, { useEffect, useState } from 'react';
import { Award } from 'lucide-react';

interface AchievementPopupProps {
  title: string;
  description: string;
  type: 'bronze' | 'silver' | 'gold' | 'platinum';
  onClose: () => void;
}

export function AchievementPopup({ title, description, type, onClose }: AchievementPopupProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onClose, 300); // Wait for fade out animation
    }, 3000);
    return () => clearTimeout(timer);
  }, [onClose]);

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
    <div className={`fixed bottom-4 right-4 transition-opacity duration-300 ${
      isVisible ? 'opacity-100' : 'opacity-0'
    }`}>
      <div className={`flex items-center p-4 rounded-lg border shadow-lg ${getBadgeColor(type)}`}>
        <Award className="w-8 h-8 mr-3" />
        <div>
          <h3 className="font-semibold">Achievement Unlocked!</h3>
          <p className="font-medium">{title}</p>
          <p className="text-sm">{description}</p>
        </div>
      </div>
    </div>
  );
}