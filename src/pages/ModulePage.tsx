import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { PublicNavBar } from '../components/PublicNavBar';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { cryptoSectorsCourse } from '../data/courses/crypto-sectors';
import { Quiz } from '../components/Quiz';
import { LessonContent } from '../components/LessonContent';
import { useProgress } from '../context/ProgressContext';
import { useAchievements } from '../context/AchievementsContext';

export function ModulePage() {
  const { courseId, moduleId } = useParams();
  const navigate = useNavigate();
  const [currentLessonIndex, setCurrentLessonIndex] = useState(0);
  const { updateProgress } = useProgress();
  const { unlockAchievement } = useAchievements();

  const module = cryptoSectorsCourse.modules.find(m => m.id === Number(moduleId));
  const currentLesson = module?.lessons[currentLessonIndex];

  useEffect(() => {
    if (courseId && moduleId && currentLesson) {
      updateProgress(courseId, Number(moduleId), currentLesson.id);
    }
  }, [courseId, moduleId, currentLesson, updateProgress]);

  if (!module || !currentLesson) {
    return (
      <div className="min-h-screen bg-gray-50">
        <PublicNavBar />
        <div className="max-w-7xl mx-auto px-4 py-12">
          <h1 className="text-3xl font-bold">Module not found</h1>
        </div>
      </div>
    );
  }

  const handleQuizComplete = (correct: boolean) => {
    if (correct) {
      // Check if this was the last lesson of the last module
      const isLastLesson = currentLessonIndex === module.lessons.length - 1;
      const isLastModule = module.id === cryptoSectorsCourse.modules.length;
      
      if (isLastLesson && isLastModule) {
        unlockAchievement('crypto-sectors');
      }
    }
  };

  const handleNext = () => {
    if (currentLessonIndex < module.lessons.length - 1) {
      setCurrentLessonIndex(prev => prev + 1);
    } else {
      navigate(`/education/${courseId}`);
    }
  };

  const handlePrevious = () => {
    if (currentLessonIndex > 0) {
      setCurrentLessonIndex(prev => prev - 1);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <PublicNavBar />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <button
          onClick={() => navigate(`/education/${courseId}`)}
          className="flex items-center text-sm font-medium text-gray-500 hover:text-gray-700 mb-8"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Course
        </button>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200">
          {/* Progress Bar */}
          <div className="h-2 bg-gray-100 rounded-t-lg">
            <div 
              className="h-full bg-navy-600 rounded-tl-lg transition-all duration-300"
              style={{ width: `${((currentLessonIndex + 1) / module.lessons.length) * 100}%` }}
            />
          </div>

          {/* Content */}
          <div className="p-8">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                {currentLesson.title}
              </h2>
              <p className="text-sm text-gray-500">
                Lesson {currentLessonIndex + 1} of {module.lessons.length}
              </p>
            </div>

            <LessonContent
              content={currentLesson.content}
              onNext={handleNext}
              onPrevious={handlePrevious}
              isFirstLesson={currentLessonIndex === 0}
              isLastLesson={currentLessonIndex === module.lessons.length - 1}
            />

            {currentLesson.quiz && (
              <div className="mt-8">
                <Quiz
                  question={currentLesson.quiz.question}
                  options={currentLesson.quiz.options}
                  correctAnswer={currentLesson.quiz.correctAnswer}
                  explanation={currentLesson.quiz.explanation}
                  onComplete={handleQuizComplete}
                />
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}