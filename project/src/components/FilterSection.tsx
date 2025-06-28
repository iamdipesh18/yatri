import React from 'react';
import { Filter } from 'lucide-react';

interface FilterSectionProps {
  selectedDifficulty: string;
  onDifficultyChange: (difficulty: string) => void;
}

export const FilterSection: React.FC<FilterSectionProps> = ({
  selectedDifficulty,
  onDifficultyChange,
}) => {
  const difficulties = ['All', 'Easy', 'Moderate', 'Difficult', 'Extreme'];

  return (
    <div className="bg-white border-b border-gray-200 py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center space-x-6">
          <div className="flex items-center space-x-2">
            <Filter className="h-5 w-5 text-gray-600" />
            <span className="font-semibold text-gray-900">Filters:</span>
          </div>
          
          <div className="flex space-x-2 overflow-x-auto">
            {difficulties.map((difficulty) => (
              <button
                key={difficulty}
                onClick={() => onDifficultyChange(difficulty)}
                className={`px-4 py-2 rounded-full font-medium transition-colors whitespace-nowrap ${
                  selectedDifficulty === difficulty
                    ? 'bg-teal-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {difficulty}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};