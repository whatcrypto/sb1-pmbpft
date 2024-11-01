import React, { createContext, useContext, useState, useEffect } from 'react';
import { useAuth } from './AuthContext';

interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string;
  unlockedAt?: Date;
}

interface AchievementsContextType {
  achievements: Achievement[];
  unlockAchievement: (id: string) => void;
  hasAchievement: (id: string) => boolean;
}

const AchievementsContext = createContext<AchievementsContextType>({
  achievements: [],
  unlockAchievement: () => {},
  hasAchievement: () => false,
});

const ACHIEVEMENTS: Achievement[] = [
  {
    id: 'first-course',
    title: 'First Steps',
    description: 'Complete your first course',
    icon: '🎓',
  },
  {
    id: 'crypto-sectors',
    title: 'Sector Specialist',
    description: 'Complete the Understanding Crypto Sectors course',
    icon: '📊',
  },
  // Add more achievements as needed
];

export function AchievementsProvider({ children }: { children: React.ReactNode }) {
  const { isAuthenticated } = useAuth();
  const [achievements, setAchievements] = useState<Achievement[]>(ACHIEVEMENTS);

  // Load achievements from localStorage on mount
  useEffect(() => {
    if (isAuthenticated) {
      const savedAchievements = localStorage.getItem('userAchievements');
      if (savedAchievements) {
        setAchievements(JSON.parse(savedAchievements));
      }
    }
  }, [isAuthenticated]);

  // Save achievements to localStorage when they change
  useEffect(() => {
    if (isAuthenticated && achievements.some(a => a.unlockedAt)) {
      localStorage.setItem('userAchievements', JSON.stringify(achievements));
    }
  }, [achievements, isAuthenticated]);

  const unlockAchievement = (id: string) => {
    setAchievements(prev => 
      prev.map(achievement => 
        achievement.id === id && !achievement.unlockedAt
          ? { ...achievement, unlockedAt: new Date() }
          : achievement
      )
    );
  };

  const hasAchievement = (id: string) => {
    return achievements.some(a => a.id === id && a.unlockedAt);
  };

  return (
    <AchievementsContext.Provider value={{
      achievements,
      unlockAchievement,
      hasAchievement,
    }}>
      {children}
    </AchievementsContext.Provider>
  );
}

export const useAchievements = () => useContext(AchievementsContext);