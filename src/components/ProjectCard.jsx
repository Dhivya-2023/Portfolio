import React, { useState } from 'react';
import { ExternalLink, FolderOpen, ArrowRight } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const ProjectCard = ({ project, index }) => {
  const [ref, isVisible] = useIntersectionObserver(0.2);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      ref={ref}
      className={`group relative bg-slate-800/40 backdrop-blur-sm rounded-2xl overflow-hidden border border-slate-700/50 hover:border-purple-500/50 transition-all duration-700 transform hover:scale-105 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}
      style={{ transitionDelay: `${index * 200}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-pink-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="relative p-8">
        <div className="flex justify-between items-start mb-6">
          <div>
            <span className="inline-block px-3 py-1 text-xs font-medium bg-purple-500/20 text-purple-300 rounded-full mb-3">
              {project.type}
            </span>
            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors duration-300">
              {project.title}
            </h3>
          </div>
          
          <div className="flex space-x-3">
            {!project.isPrivate && project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-slate-700/50 rounded-lg text-gray-400 hover:text-white hover:bg-purple-500/20 transition-all duration-300 transform hover:scale-110"
              >
                <ExternalLink size={18} />
              </a>
            )}
            {/* <div className="p-2 bg-slate-700/50 rounded-lg text-gray-400">
              <FolderOpen size={18} />
            </div> */}
          </div>
        </div>

        <p className="text-gray-300 leading-relaxed mb-6 line-clamp-3">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map((tech, i) => (
            <span 
              key={i}
              className="px-3 py-1 text-sm bg-slate-700/50 text-gray-300 rounded-full hover:bg-purple-500/20 hover:text-purple-300 transition-all duration-300"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className={`flex items-center text-purple-400 font-medium transition-all duration-300 ${
          isHovered ? 'translate-x-2' : ''
        }`}>
          {/* <span className="mr-2">View Project</span>
          <ArrowRight size={16} className={`transition-transform duration-300 ${
            isHovered ? 'translate-x-1' : ''
          }`} /> */}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;