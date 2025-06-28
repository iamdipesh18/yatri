import React from 'react';
import { Mountain, Search, Menu, X } from 'lucide-react';

interface NavbarProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ searchQuery, onSearchChange }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  return (
    <nav className="bg-white/95 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Mountain className="h-8 w-8 text-teal-600" />
            <span className="text-2xl font-bold text-gray-900">YATRI</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-700 hover:text-teal-600 transition-colors font-medium">
              Destinations
            </a>
            <a href="#" className="text-gray-700 hover:text-teal-600 transition-colors font-medium">
              About
            </a>
            <a href="#" className="text-gray-700 hover:text-teal-600 transition-colors font-medium">
              Contact
            </a>
          </div>

          {/* Search Bar */}
          <div className="hidden sm:flex items-center">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <input
                type="text"
                placeholder="Search destinations..."
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                className="pl-10 pr-4 py-2 w-64 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
              />
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-700 hover:text-teal-600 transition-colors"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <input
                  type="text"
                  placeholder="Search destinations..."
                  value={searchQuery}
                  onChange={(e) => onSearchChange(e.target.value)}
                  className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                />
              </div>
              <a href="#" className="text-gray-700 hover:text-teal-600 transition-colors font-medium">
                Destinations
              </a>
              <a href="#" className="text-gray-700 hover:text-teal-600 transition-colors font-medium">
                About
              </a>
              <a href="#" className="text-gray-700 hover:text-teal-600 transition-colors font-medium">
                Contact
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};