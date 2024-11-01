import React, { createContext, useContext, useState, useEffect } from 'react';
import { useAuth } from './AuthContext';

interface Progress {
  courseId: string;
  moduleId: number;
  lessonId: number;
  completed: boolean;
}

interface ProgressContextType {
  progress: Progress[];
  updateProgress: (courseId: string, moduleId: number, lessonId: number) => void;
  isModuleUnlocked: (courseId: string, moduleId: number) => boolean;
  isLessonCompleted: (courseId: string, moduleId: number, lessonId: number) => boolean;
}

const ProgressContext = createContext<ProgressContextType>({
  progress: [],
  updateProgress: () => {},
  isModuleUnlocked: () => false,
  isLessonCompleted: () => false,
});

export function ProgressProvider({ children }: { children: React.ReactNode }) {
  const { isAuthenticated } = useAuth();
  const [progress, setProgress] = useState<Progress[]>([]);

  useEffect(() => {
    if (isAuthenticated) {
      const savedProgress = localStorage.getItem('courseProgress');
      if (savedProgress) {
        setProgress(JSON.parse(savedProgress));
      }
    }
  }, [isAuthenticated]);

  useEffect(() => {
    if (isAuthenticated && progress.length > 0) {
      localStorage.setItem('courseProgress', JSON.stringify(progress));
    }
  }, [progress, isAuthenticated]);

  const updateProgress = (courseId: string, moduleId: number, lessonId: number) => {
    if (!isAuthenticated) return;

    setProgress(prev => {
      const existingProgress = prev.find(
        p => p.courseId === courseId && p.moduleId === moduleId && p.lessonId === lessonId
      );

      if (existingProgress) {
        return prev.map(p => 
          p.courseId === courseId && p.moduleId === moduleId && p.lessonId === lessonId
            ? { ...p, completed: true }
            : p
        );
      }

      return [...prev, { courseId, moduleId, lessonId, completed: true }];
    });
  };

  const isModuleUnlocked = (courseId: string, moduleId: number) => {
    if (!isAuthenticated) return false;
    if (moduleId === 1) return true;

    const previousModuleProgress = progress.filter(
      p => p.courseId === courseId && p.moduleId === moduleId - 1
    );

    return previousModuleProgress.length > 0;
  };

  const isLessonCompleted = (courseId: string, moduleId: number, lessonId: number) => {
    return progress.some(
      p => p.courseId === courseId && 
           p.moduleId === moduleId && 
           p.lessonId === lessonId && 
           p.completed
    );
  };

  return (
    <ProgressContext.Provider value={{ 
      progress, 
      updateProgress, 
      isModuleUnlocked,
      isLessonCompleted 
    }}>
      {children}
    </ProgressContext.Provider>
  );
}

export const useProgress = () => useContext(ProgressContext);