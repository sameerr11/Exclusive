import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navigation: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const location = useLocation();
  const dropdownRef = useRef<HTMLDivElement>(null);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Certifications', path: '/certifications' },
    { name: 'Workflow', path: '/workflow' },
    { name: 'Industries', path: '/industries' },
    { name: 'Contact', path: '/contact' },
  ];

  const evProductsItems = [
    { name: 'EV ERP System', path: '/everp' },
    { name: 'EV Sports Management System', path: '/ev-sms', description: 'Sports Management System' },
    { name: 'EV Clinic Management System', path: '/ev-cs', description: 'Clinic System' },
    { name: 'EV Educational Training Center', path: '/ev-tc', description: 'Training Center' },
  ];

  const isActive = (path: string) => location.pathname === path;

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };

    if (isDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isDropdownOpen]);

  return (
    <nav className="bg-primary shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center group">
              <img 
                src="/logo.png" 
                alt="Exclusive Vision Logo" 
                className="h-14 w-14 mr-4 bg-white rounded-xl p-1.5 group-hover:scale-105 transition-transform duration-200"
              />
              <h1 className="text-white text-xl font-heading font-bold group-hover:text-accent transition-colors duration-200">
                Exclusive Vision
              </h1>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`px-4 py-2.5 rounded-lg text-base font-semibold transition-all duration-200 ${
                  isActive(item.path)
                    ? 'text-accent bg-white bg-opacity-15 shadow-sm'
                    : 'text-white hover:text-accent hover:bg-white hover:bg-opacity-10 hover:scale-105'
                }`}
              >
                {item.name}
              </Link>
            ))}
            
            {/* EV Products Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className={`px-4 py-2.5 rounded-lg text-base font-semibold transition-all duration-200 flex items-center ${
                  evProductsItems.some(item => isActive(item.path))
                    ? 'text-accent bg-white bg-opacity-15 shadow-sm'
                    : 'text-white hover:text-accent hover:bg-white hover:bg-opacity-10 hover:scale-105'
                }`}
              >
                EV Products
                <svg
                  className={`ml-2 w-4 h-4 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Dropdown Menu */}
              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-xl py-2 z-50 border border-gray-100">
                  {evProductsItems.map((item) => (
                    <Link
                      key={item.name}
                      to={item.path}
                      onClick={() => setIsDropdownOpen(false)}
                      className={`block px-4 py-2 text-sm font-semibold transition-colors duration-200 ${
                        isActive(item.path)
                          ? 'text-accent bg-primary bg-opacity-5'
                          : 'text-primary hover:text-accent hover:bg-gray-50'
                      }`}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-accent focus:outline-none focus:text-accent p-2 rounded-lg hover:bg-white hover:bg-opacity-10 transition-all duration-200"
            >
              <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-3 pb-4 space-y-2 sm:px-3 bg-primary border-t border-white border-opacity-20">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block px-4 py-3 rounded-lg text-base font-semibold transition-all duration-200 ${
                    isActive(item.path)
                      ? 'text-accent bg-white bg-opacity-15'
                      : 'text-white hover:text-accent hover:bg-white hover:bg-opacity-10'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              
              {/* EV Products in Mobile */}
              <div>
                <div className="px-4 py-3 text-base font-semibold text-white">
                  EV Products
                </div>
                <div className="pl-6 space-y-1">
                  {evProductsItems.map((item) => (
                    <Link
                      key={item.name}
                      to={item.path}
                      onClick={() => setIsMenuOpen(false)}
                      className={`block px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${
                        isActive(item.path)
                          ? 'text-accent bg-white bg-opacity-15'
                          : 'text-white text-opacity-80 hover:text-accent hover:bg-white hover:bg-opacity-10'
                      }`}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation; 