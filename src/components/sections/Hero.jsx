import React from 'react';
import { Code, ChevronDown, ArrowRight } from 'lucide-react';
import AnimatedCounter from '../AnimatedCouter';
import { stats } from '../../data/experience';

const Hero = ({ scrollToSection }) => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-slate-900 to-pink-900/20" />
      
      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
        <div className="mb-8">
          <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl mb-6 animate-pulse">
            <Code size={36} className="text-white" />
          </div>
        </div>
        
        <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-tight">
          <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
            Frontend
          </span>
          <br />
          <span className="text-white">Developer</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
          Transforming ideas into exceptional digital experiences with 
          <span className="text-purple-400 font-semibold"> React.js</span> and modern web technologies
        </p>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12 max-w-2xl mx-auto">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-purple-400 mb-2">
                <AnimatedCounter end={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <button
            onClick={() => scrollToSection('projects')}
            className="group px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 flex items-center space-x-2"
          >
            <span>Explore My Work</span>
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="px-8 py-4 border-2 border-purple-500 rounded-full font-semibold hover:bg-purple-500 hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
          >
            Let's Connect
          </button>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown size={32} className="text-purple-400" />
      </div>
    </section>
  );
};

export default Hero;