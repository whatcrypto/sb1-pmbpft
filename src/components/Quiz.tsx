import React, { useState } from 'react';
import { CheckCircle, XCircle } from 'lucide-react';

interface QuizProps {
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  onComplete: (correct: boolean) => void;
}

export function Quiz({ question, options, correctAnswer, explanation, onComplete }: QuizProps) {
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);

  const handleAnswer = (index: number) => {
    if (selectedAnswer !== null) return;
    
    setSelectedAnswer(index);
    setShowExplanation(true);
    onComplete(index === correctAnswer);
  };

  return (
    <div className="space-y-6">
      <h3 className="text-lg font-semibold">{question}</h3>
      
      <div className="space-y-3">
        {options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleAnswer(index)}
            disabled={selectedAnswer !== null}
            className={`w-full text-left p-4 rounded-lg border transition-colors ${
              selectedAnswer === null
                ? 'border-gray-200 hover:border-navy-600'
                : selectedAnswer === index
                  ? index === correctAnswer
                    ? 'border-green-500 bg-green-50'
                    : 'border-red-500 bg-red-50'
                  : index === correctAnswer
                    ? 'border-green-500 bg-green-50'
                    : 'border-gray-200 opacity-50'
            }`}
          >
            <div className="flex items-center">
              {selectedAnswer === index && (
                index === correctAnswer 
                  ? <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                  : <XCircle className="w-5 h-5 text-red-500 mr-2" />
              )}
              {option}
            </div>
          </button>
        ))}
      </div>

      {showExplanation && (
        <div className={`p-4 rounded-lg ${
          selectedAnswer === correctAnswer ? 'bg-green-50' : 'bg-red-50'
        }`}>
          <p className="text-sm">{explanation}</p>
        </div>
      )}
    </div>
  );
}