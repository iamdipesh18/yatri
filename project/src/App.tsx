import React, { useState, useMemo } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { FilterSection } from './components/FilterSection';
import { TrekCard } from './components/TrekCard';
import { trekDestinations } from './data/trekData';

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDifficulty, setSelectedDifficulty] = useState('All');

  // Filter treks based on search query and difficulty
  const filteredTreks = useMemo(() => {
    return trekDestinations.filter((trek) => {
      const matchesSearch = trek.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           trek.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           trek.description.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesDifficulty = selectedDifficulty === 'All' || trek.difficulty === selectedDifficulty;
      
      return matchesSearch && matchesDifficulty;
    });
  }, [searchQuery, selectedDifficulty]);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <Navbar searchQuery={searchQuery} onSearchChange={setSearchQuery} />
      
      {/* Hero Section */}
      <Hero searchQuery={searchQuery} onSearchChange={setSearchQuery} />
      
      {/* Filter Section */}
      <FilterSection 
        selectedDifficulty={selectedDifficulty}
        onDifficultyChange={setSelectedDifficulty}
      />
      
      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Results Header */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            {searchQuery ? `Search Results for "${searchQuery}"` : 'Featured Trek Destinations'}
          </h2>
          <p className="text-gray-600">
            {filteredTreks.length} {filteredTreks.length === 1 ? 'destination' : 'destinations'} found
          </p>
        </div>

        {/* Trek Cards Grid */}
        {filteredTreks.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTreks.map((trek) => (
              <TrekCard key={trek.id} trek={trek} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="text-gray-400 mb-4">
              <svg className="mx-auto h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.47-.881-6.08-2.33m-.92 6.33A9.977 9.977 0 0112 21c5.523 0 10-4.477 10-10S17.523 1 12 1 2 5.477 2 15c0 1.657.405 3.22 1.12 4.6" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No destinations found</h3>
            <p className="text-gray-600">Try adjusting your search terms or filters to find what you're looking for.</p>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">YATRI</h3>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              Your gateway to extraordinary adventures. Discover, plan, and embark on life-changing treks around the world.
            </p>
            <div className="border-t border-gray-800 pt-8">
              <p className="text-gray-400">© 2025 YATRI. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;