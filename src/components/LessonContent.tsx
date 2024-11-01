import React from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

interface LessonContentProps {
  content: string;
  onNext: () => void;
  onPrevious: () => void;
  isFirstLesson: boolean;
  isLastLesson: boolean;
}

export function LessonContent({ 
  content, 
  onNext, 
  onPrevious, 
  isFirstLesson,
  isLastLesson 
}: LessonContentProps) {
  return (
    <div className="space-y-6">
      <div 
        className="prose max-w-none"
        dangerouslySetInnerHTML={{ __html: content }}
      />
      
      <div className="flex justify-between pt-6">
        <button
          onClick={onPrevious}
          disabled={isFirstLesson}
          className={`flex items-center px-4 py-2 rounded-lg text-sm font-medium ${
            isFirstLesson
              ? 'text-gray-400 cursor-not-allowed'
              : 'text-navy-600 hover:bg-navy-50'
          }`}
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Previous
        </button>
        
        <button
          onClick={onNext}
          className="flex items-center px-4 py-2 bg-navy-600 text-white rounded-lg text-sm font-medium hover:bg-navy-700"
        >
          {isLastLesson ? 'Complete' : 'Next'}
          <ArrowRight className="w-4 h-4 ml-2" />
        </button>
      </div>
    </div>
  );
}