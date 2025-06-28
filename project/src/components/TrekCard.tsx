import React from 'react';
import { MapPin, Clock, Mountain, Star, DollarSign } from 'lucide-react';
import { TrekDestination } from '../types';

interface TrekCardProps {
  trek: TrekDestination;
}

const difficultyColors = {
  Easy: 'bg-green-100 text-green-800',
  Moderate: 'bg-yellow-100 text-yellow-800',
  Difficult: 'bg-orange-100 text-orange-800',
  Extreme: 'bg-red-100 text-red-800',
};

export const TrekCard: React.FC<TrekCardProps> = ({ trek }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      {/* Image */}
      <div className="relative h-64 overflow-hidden">
        <img
          src={trek.image}
          alt={trek.name}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
        <div className="absolute top-4 right-4">
          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${difficultyColors[trek.difficulty]}`}>
            {trek.difficulty}
          </span>
        </div>
        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
          <div className="flex items-center space-x-1">
            <Star className="h-4 w-4 text-yellow-500 fill-current" />
            <span className="text-sm font-semibold text-gray-900">{trek.rating}</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Header */}
        <div className="mb-4">
          <h3 className="text-xl font-bold text-gray-900 mb-2">{trek.name}</h3>
          <div className="flex items-center text-gray-600 mb-2">
            <MapPin className="h-4 w-4 mr-1" />
            <span className="text-sm">{trek.location}</span>
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{trek.description}</p>

        {/* Trek Details */}
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="flex items-center text-gray-600">
            <Clock className="h-4 w-4 mr-2 text-teal-600" />
            <span className="text-sm">{trek.duration}</span>
          </div>
          <div className="flex items-center text-gray-600">
            <Mountain className="h-4 w-4 mr-2 text-teal-600" />
            <span className="text-sm">{trek.altitude}</span>
          </div>
        </div>

        {/* Highlights */}
        <div className="mb-4">
          <div className="flex flex-wrap gap-2">
            {trek.highlights.slice(0, 2).map((highlight, index) => (
              <span
                key={index}
                className="bg-teal-50 text-teal-700 px-2 py-1 rounded-md text-xs font-medium"
              >
                {highlight}
              </span>
            ))}
            {trek.highlights.length > 2 && (
              <span className="text-teal-600 text-xs font-medium">
                +{trek.highlights.length - 2} more
              </span>
            )}
          </div>
        </div>

        {/* Price and Action */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <div className="flex items-center text-gray-900">
            <DollarSign className="h-5 w-5 mr-1 text-teal-600" />
            <span className="text-lg font-bold">{trek.price.toLocaleString()}</span>
          </div>
          <button className="bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded-lg font-semibold transition-colors duration-200">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};