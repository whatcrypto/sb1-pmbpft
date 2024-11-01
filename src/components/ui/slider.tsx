import React from 'react';

interface SliderProps {
  min: number;
  max: number;
  step: number;
  value: number[];
  onValueChange: (value: number[]) => void;
  className?: string;
}

export function Slider({ min, max, step, value, onValueChange, className = '' }: SliderProps) {
  return (
    <div className={`relative w-full h-6 ${className}`}>
      <div className="absolute h-2 w-full bg-gray-200 rounded-full top-1/2 transform -translate-y-1/2">
        <div
          className="absolute h-full bg-navy-600 rounded-full"
          style={{
            width: `${((value[0] - min) / (max - min)) * 100}%`
          }}
        />
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value[0]}
        onChange={(e) => onValueChange([parseFloat(e.target.value)])}
        className="absolute w-full h-2 opacity-0 cursor-pointer top-1/2 transform -translate-y-1/2"
      />
      <div
        className="absolute w-4 h-4 bg-navy-600 rounded-full top-1/2 transform -translate-y-1/2 -translate-x-1/2"
        style={{
          left: `${((value[0] - min) / (max - min)) * 100}%`
        }}
      />
    </div>
  );
}