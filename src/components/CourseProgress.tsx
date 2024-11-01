import React from 'react';
import { CheckCircle, Circle } from 'lucide-react';

interface CourseProgressProps {
  totalModules: number;
  completedModules: number;
}

export function CourseProgress({ totalModules, completedModules }: CourseProgressProps) {
  const percentage = (completedModules / totalModules) * 100;

  return (
    <div className="space-y-2">
      <div className="flex justify-between text-sm">
        <span className="text-gray-600">Course Progress</span>
        <span className="font-medium">{Math.round(percentage)}%</span>
      </div>
      <div className="h-2 bg-gray-200 rounded-full">
        <div 
          className="h-full bg-navy-600 rounded-full transition-all duration-300"
          style={{ width: `${percentage}%` }}
        />
      </div>
      <div className="flex space-x-2 mt-2">
        {Array.from({ length: totalModules }).map((_, i) => (
          <div key={i} className="flex-1">
            {i < completedModules ? (
              <CheckCircle className="w-5 h-5 text-navy-600" />
            ) : (
              <Circle className="w-5 h-5 text-gray-300" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}