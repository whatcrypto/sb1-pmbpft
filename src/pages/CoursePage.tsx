import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { PublicNavBar } from '../components/PublicNavBar';
import { Book, Clock } from 'lucide-react';
import { cryptoSectorsCourse } from '../data/courses';

export function CoursePage() {
  const { courseId } = useParams();
  const navigate = useNavigate();
  const course = cryptoSectorsCourse;

  const handleStartModule = (moduleId: number) => {
    // Navigate to the first lesson of the selected module
    navigate(`/education/${courseId}/module/${moduleId}/lesson/1`);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <PublicNavBar />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">{course.title}</h1>
          <p className="text-lg text-gray-600">{course.description}</p>
        </div>

        <div className="space-y-6">
          {course.modules.map((module) => (
            <div 
              key={module.id}
              className="bg-white rounded-lg shadow-sm border border-gray-200 p-6"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-4">
                  <Book className="w-6 h-6 text-navy-600" />
                  <h3 className="text-lg font-semibold text-gray-900">
                    Module {module.id}: {module.title}
                  </h3>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="w-4 h-4 text-gray-400" />
                  <span className="text-sm text-gray-500">
                    {module.lessons.length} lessons
                  </span>
                </div>
              </div>

              <p className="text-gray-600 mb-6">{module.description}</p>

              <div className="space-y-3 mb-6">
                {module.lessons.map((lesson) => (
                  <div 
                    key={lesson.id}
                    className="flex items-center space-x-3 text-sm text-gray-600"
                  >
                    <span className="w-6 h-6 rounded-full bg-navy-50 text-navy-600 flex items-center justify-center font-medium">
                      {lesson.id}
                    </span>
                    <span>{lesson.title}</span>
                  </div>
                ))}
              </div>

              <button
                onClick={() => handleStartModule(module.id)}
                className="w-full flex items-center justify-center px-4 py-2 rounded-lg bg-navy-600 text-white hover:bg-navy-700 transition-colors"
              >
                Start Module
              </button>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}