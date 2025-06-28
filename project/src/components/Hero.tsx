import React from 'react';
import { Search } from 'lucide-react';

interface HeroProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ searchQuery, onSearchChange }) => {
  return (
    <div className="relative bg-gradient-to-br from-teal-600 to-blue-700 text-white py-20">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
          Discover Your Next
          <span className="block text-yellow-300">Adventure</span>
        </h1>
        <p className="text-xl sm:text-2xl mb-10 text-teal-100 max-w-3xl mx-auto">
          Explore breathtaking trek destinations around the world and embark on unforgettable journeys
        </p>

        {/* Hero Search Bar */}
        <div className="max-w-2xl mx-auto">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              placeholder="Search for your dream destination..."
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              className="w-full pl-12 pr-6 py-4 text-gray-900 bg-white rounded-full shadow-lg focus:outline-none focus:ring-4 focus:ring-white/30 text-lg"
            />
          </div>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold text-yellow-300">50+</div>
            <div className="text-teal-100">Trek Destinations</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-yellow-300">10K+</div>
            <div className="text-teal-100">Happy Travelers</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-yellow-300">4.8★</div>
            <div className="text-teal-100">Average Rating</div>
          </div>
        </div>
      </div>
    </div>
  );
};