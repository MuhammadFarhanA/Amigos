import React, { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import navigationData from '../data/navigation.json';

interface NavigationProps {
  currentPage: string;
  onPageChange: (page: string) => void;
}

const Navigation: React.FC<NavigationProps> = ({ currentPage, onPageChange }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisaDropdownOpen, setIsVisaDropdownOpen] = useState(false);
  const [dropdownTimeout, setDropdownTimeout] = useState<NodeJS.Timeout | null>(null);

  const handleDropdownEnter = () => {
    if (dropdownTimeout) {
      clearTimeout(dropdownTimeout);
      setDropdownTimeout(null);
    }
    setIsVisaDropdownOpen(true);
  };

  const handleDropdownLeave = () => {
    const timeout = setTimeout(() => {
      setIsVisaDropdownOpen(false);
    }, 200);
    setDropdownTimeout(timeout);
  };

  return (
    <nav className="bg-[#1A2A44] shadow-lg sticky top-0 z-50 border-b border-[#1A2A44]/20">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <button
              onClick={() => onPageChange('home')}
              className="text-xl md:text-2xl font-bold text-white hover:text-[#FF4500] transition-colors duration-300 cursor-pointer"
            >
              <img src={"src/assets/images/amigos-logo.png"} alt="" />
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-1">
              {navigationData.navItems.map((item) => (
                <div key={item.key} className="relative group">
                  {item.dropdown ? (
                    <>
                      <button
                        className={`px-4 py-2 text-sm font-medium flex items-center space-x-1 transition-colors duration-200 rounded-md cursor-pointer ${
                          (currentPage === 'study-visa' || currentPage === 'tourist-visa') && currentPage !== 'home'
                            ? 'text-[#FF4500] bg-white/10'
                            : 'text-white hover:text-[#FF4500] hover:bg-white/10'
                        }`}
                        onMouseEnter={handleDropdownEnter}
                        onMouseLeave={handleDropdownLeave}
                      >
                        <span>{item.name}</span>
                        <ChevronDown className="h-4 w-4" />
                      </button>
                      {isVisaDropdownOpen && (
                        <div
                          className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-xl py-2 z-50 border border-gray-200 animate-fade-in-up"
                          onMouseEnter={handleDropdownEnter}
                          onMouseLeave={handleDropdownLeave}
                        >
                          {item.dropdown.map((dropdownItem) => (
                            <button
                              key={dropdownItem.key}
                              onClick={() => {
                                onPageChange(dropdownItem.key);
                                setIsVisaDropdownOpen(false);
                              }}
                              className={`block w-full text-left px-4 py-3 text-sm transition-colors duration-200 cursor-pointer hover:bg-gray-50 ${
                                currentPage === dropdownItem.key
                                  ? 'text-[#FF4500] bg-orange-50'
                                  : 'text-gray-700 hover:text-[#FF4500]'
                              }`}
                            >
                              {dropdownItem.name}
                            </button>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <button
                      onClick={() => onPageChange(item.key)}
                      className={`px-4 py-2 text-sm font-medium transition-colors duration-200 rounded-md cursor-pointer ${
                        currentPage === item.key
                          ? 'text-[#FF4500] bg-white/10'
                          : 'text-white hover:text-[#FF4500] hover:bg-white/10'
                      }`}
                    >
                      {item.name}
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-[#FF4500] focus:outline-none transition-colors duration-200 p-2 cursor-pointer"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden animate-fade-in-up">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-[#1A2A44] rounded-lg mt-2 border-t border-white/10">
              {navigationData.navItems.map((item) => (
                <div key={item.key}>
                  {item.dropdown ? (
                    <>
                      <div className="text-white font-medium px-3 py-2 text-sm border-b border-white/10">
                        {item.name}
                      </div>
                      {item.dropdown.map((dropdownItem) => (
                        <button
                          key={dropdownItem.key}
                          onClick={() => {
                            onPageChange(dropdownItem.key);
                            setIsMenuOpen(false);
                          }}
                          className={`block w-full text-left px-6 py-3 text-sm transition-colors duration-200 rounded-md cursor-pointer ${
                            currentPage === dropdownItem.key
                              ? 'text-[#FF4500] bg-white/10'
                              : 'text-gray-200 hover:text-[#FF4500] hover:bg-white/10'
                          }`}
                        >
                          {dropdownItem.name}
                        </button>
                      ))}
                    </>
                  ) : (
                    <button
                      onClick={() => {
                        onPageChange(item.key);
                        setIsMenuOpen(false);
                      }}
                      className={`block w-full text-left px-3 py-3 text-sm font-medium transition-colors duration-200 rounded-md cursor-pointer ${
                        currentPage === item.key
                          ? 'text-[#FF4500] bg-white/10'
                          : 'text-white hover:text-[#FF4500] hover:bg-white/10'
                      }`}
                    >
                      {item.name}
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;