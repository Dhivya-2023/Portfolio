import React from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const TechCard = ({ icon: Icon, name, level, delay }) => {
  const [ref, isVisible] = useIntersectionObserver(0.3);
  
  return (
    <div
      ref={ref}
      className={`bg-slate-800/40 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 hover:border-purple-500/50 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg mb-4">
        <Icon size={24} className="text-white" />
      </div>
      <h3 className="text-lg font-semibold text-white mb-2">{name}</h3>
      <div className="w-full bg-slate-700 rounded-full h-2">
        <div 
          className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full transition-all duration-1000"
          style={{ width: isVisible ? `${level}%` : '0%' }}
        />
      </div>
      <span className="text-sm text-gray-400 mt-2 block">{level}%</span>
    </div>
  );
};

export default TechCard;