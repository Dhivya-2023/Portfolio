import React from 'react';
import { MapPin, Zap } from 'lucide-react';
import TechCard from '../TechCard';
import { techStack } from "@/data/techstack";

const About = () => {
  return (
    <section id="about" className="py-32 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-purple-400 mb-6">My Journey</h3>
            <p className="text-lg text-gray-300 leading-relaxed">
              From analyzing complex biomedical systems to crafting intuitive user interfaces, 
              my journey represents a unique blend of analytical thinking and creative problem-solving.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              At <span className="text-purple-400 font-semibold">RBG.AI</span>, I've specialized in building 
              production-grade applications that serve both internal teams and external clients, 
              focusing on performance, scalability, and exceptional user experience.
            </p>
            <div className="flex items-center space-x-6 pt-4">
              <div className="flex items-center text-gray-400">
                <MapPin size={20} className="mr-2 text-purple-400" />
                Based in India
              </div>
              <div className="flex items-center text-gray-400">
                <Zap size={20} className="mr-2 text-purple-400" />
                Available for opportunities
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {techStack.map((tech, index) => (
              <TechCard
                key={index}
                icon={tech.icon}
                name={tech.name}
                level={tech.level}
                delay={index * 100}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;