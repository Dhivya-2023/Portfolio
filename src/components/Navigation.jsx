import React from 'react';

const Navigation = ({ activeSection, isScrolled, scrollToSection }) => {
  return (
    <nav className={`fixed top-0 w-full z-40 transition-all duration-500 ${
      isScrolled 
        ? 'bg-slate-900/90 backdrop-blur-xl shadow-2xl border-b border-slate-800/50' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold">
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
             DHIVYA
            </span>
          </div>
          <div className="hidden md:flex space-x-8">
            {['About', 'Experience', 'Projects', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className={`relative px-4 py-2 transition-all duration-300  ${
                  activeSection === item.toLowerCase() 
                    ? 'text-purple-400' 
                    : 'text-gray-300 hover:text-pink-500'
                }`}
              >
                {item}
                {activeSection === item.toLowerCase() && (
                  <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full" />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;