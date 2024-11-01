import React, { useState } from 'react';
import { Book, CheckCircle, PlayCircle, ArrowRight, ArrowLeft, Info } from 'lucide-react';

// Types
interface Quiz {
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

interface Lesson {
  id: number;
  title: string;
  content: string;
  quiz: Quiz[];
  interactiveExample?: React.ReactNode;
}

interface Module {
  id: number;
  title: string;
  description: string;
  lessons: Lesson[];
}

interface CourseProgress {
  currentModule: number;
  currentLesson: number;
  completedLessons: Set<string>;
}

// Course Content Definition
const courseModules: Module[] = [
  {
    id: 1,
    title: "Fundamentals of Cryptoasset Valuation",
    description: "Understanding the basics of how cryptoassets derive their value",
    lessons: [
      {
        id: 1,
        title: "Introduction to Cryptoasset Value Drivers",
        content: `
          <div class="space-y-4">
            <h3 class="text-xl font-semibold">Key Value Drivers</h3>
            <ul class="list-disc pl-6 space-y-2">
              <li>Network Effects: User adoption and engagement</li>
              <li>Utility Value: Practical applications and use cases</li>
              <li>Scarcity: Supply mechanics and distribution</li>
              <li>Market Dynamics: Trading volume and liquidity</li>
            </ul>

            <div class="bg-blue-50 p-4 rounded-lg mt-4">
              <p class="font-semibold">💡 Key Insight:</p>
              <p>Unlike traditional assets, cryptoassets often derive value from network effects and utility rather than cash flows alone.</p>
            </div>
          </div>
        `,
        quiz: [
          {
            question: "Which of the following is NOT a primary value driver for cryptoassets?",
            options: [
              "Network Effects",
              "Quarterly Dividends",
              "Utility Value",
              "Market Dynamics"
            ],
            correctAnswer: 1,
            explanation: "Traditional dividend payments are not typically a feature of cryptoassets. Their value is primarily driven by utility, network effects, and market dynamics."
          }
        ]
      }
    ]
  }
];

export const CourseModule: React.FC = () => {
  const [progress, setProgress] = useState<CourseProgress>({
    currentModule: 0,
    currentLesson: 0,
    completedLessons: new Set()
  });
  
  const [quizAnswers, setQuizAnswers] = useState<{[key: string]: number}>({});
  const [showExplanation, setShowExplanation] = useState<boolean>(false);

  const currentModule = courseModules[progress.currentModule];
  const currentLesson = currentModule.lessons[progress.currentLesson];

  const handleNextLesson = () => {
    if (progress.currentLesson < currentModule.lessons.length - 1) {
      setProgress(prev => ({
        ...prev,
        currentLesson: prev.currentLesson + 1
      }));
    } else if (progress.currentModule < courseModules.length - 1) {
      setProgress(prev => ({
        ...prev,
        currentModule: prev.currentModule + 1,
        currentLesson: 0
      }));
    }
    setQuizAnswers({});
    setShowExplanation(false);
  };

  const handleQuizAnswer = (quizIndex: number, answerIndex: number) => {
    setQuizAnswers(prev => ({
      ...prev,
      [quizIndex]: answerIndex
    }));
    setShowExplanation(true);
  };

  const isAnswerCorrect = (quizIndex: number) => {
    return quizAnswers[quizIndex] === currentLesson.quiz[quizIndex].correctAnswer;
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Progress Bar */}
      <div className="mb-8">
        <div className="h-2 bg-gray-200 rounded-full">
          <div 
            className="h-full bg-navy-600 rounded-full transition-all duration-300"
            style={{
              width: `${(progress.currentModule * 100) / courseModules.length}%`
            }}
          />
        </div>
        <div className="mt-2 text-sm text-gray-600">
          Module {progress.currentModule + 1} of {courseModules.length}
        </div>
      </div>

      {/* Module Header */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900">{currentModule.title}</h2>
        <p className="mt-2 text-gray-600">{currentModule.description}</p>
      </div>

      {/* Lesson Content */}
      <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
        <div className="flex items-center mb-4">
          <PlayCircle className="w-5 h-5 text-navy-600 mr-2" />
          <h3 className="text-xl font-semibold">{currentLesson.title}</h3>
        </div>
        
        <div 
          className="prose max-w-none mb-8"
          dangerouslySetInnerHTML={{ __html: currentLesson.content }}
        />

        {currentLesson.interactiveExample && (
          <div className="mb-8">
            {currentLesson.interactiveExample}
          </div>
        )}

        {/* Quiz Section */}
        <div className="space-y-6">
          {currentLesson.quiz.map((quiz, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg">
              <h4 className="font-semibold mb-4">{quiz.question}</h4>
              <div className="space-y-3">
                {quiz.options.map((option, optionIndex) => (
                  <button
                    key={optionIndex}
                    onClick={() => handleQuizAnswer(index, optionIndex)}
                    className={`w-full text-left p-3 rounded-lg transition-colors ${
                      quizAnswers[index] === optionIndex
                        ? isAnswerCorrect(index)
                          ? 'bg-green-100 text-green-800'
                          : 'bg-red-100 text-red-800'
                        : 'bg-white hover:bg-gray-100'
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>
              {showExplanation && quizAnswers[index] !== undefined && (
                <div className={`mt-4 p-4 rounded-lg ${
                  isAnswerCorrect(index) ? 'bg-green-50' : 'bg-red-50'
                }`}>
                  <p className="text-sm">{quiz.explanation}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Navigation */}
      <div className="flex justify-between">
        <button
          onClick={() => setProgress(prev => ({
            ...prev,
            currentLesson: Math.max(0, prev.currentLesson - 1)
          }))}
          disabled={progress.currentLesson === 0}
          className="px-4 py-2 text-navy-600 disabled:text-gray-400"
        >
          <ArrowLeft className="w-5 h-5 inline mr-2" />
          Previous Lesson
        </button>
        
        <button
          onClick={handleNextLesson}
          className="px-4 py-2 bg-navy-600 text-white rounded-lg hover:bg-navy-700"
        >
          Next Lesson
          <ArrowRight className="w-5 h-5 inline ml-2" />
        </button>
      </div>
    </div>
  );
};

export default CourseModule;