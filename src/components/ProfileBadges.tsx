import React from 'react';
import { AchievementBadge } from './AchievementBadge';

interface ProfileBadgesProps {
  badges: Array<{
    title: string;
    description: string;
    date: string;
    type: 'bronze' | 'silver' | 'gold' | 'platinum';
  }>;
}

export function ProfileBadges({ badges }: ProfileBadgesProps) {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold mb-4">Achievements</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {badges.map((badge, index) => (
          <AchievementBadge
            key={index}
            title={badge.title}
            description={badge.description}
            date={badge.date}
            type={badge.type}
          />
        ))}
      </div>
    </div>
  );
}