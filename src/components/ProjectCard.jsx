import React, { useState } from 'react';
import { ExternalLink, FolderOpen, ArrowRight, FileText, Lock, Globe } from 'lucide-react';
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
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-3">
              <span className="inline-block px-3 py-1 text-xs font-medium bg-purple-500/20 text-purple-300 rounded-full">
                {project.type}
              </span>
              {project.isPrivate ? (
                <Lock size={14} className="text-gray-400" />
              ) : (
                <Globe size={14} className="text-green-400" />
              )}
            </div>
            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors duration-300">
              {project.title}
            </h3>
          </div>
          
          <div className="flex space-x-2 ml-4">
            {!project.isPrivate && project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-slate-700/50 rounded-lg text-gray-400 hover:text-white hover:bg-purple-500/20 transition-all duration-300 transform hover:scale-110"
                title="Live Demo"
              >
                <ExternalLink size={18} />
              </a>
            )}
            {project.apiDocs && (
              <a
                href={project.apiDocs}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-slate-700/50 rounded-lg text-gray-400 hover:text-white hover:bg-blue-500/20 transition-all duration-300 transform hover:scale-110"
                title="API Documentation"
              >
                <FileText size={18} />
              </a>
            )}
          </div>
        </div>

        <p className="text-gray-300 leading-relaxed mb-6">
          {project.description}
        </p>

        {/* Highlights Section - Show key achievements */}
        {project.highlights && project.highlights.length > 0 && (
          <div className="mb-6">
            <h4 className="text-sm font-semibold text-purple-300 mb-3">Key Features:</h4>
            <ul className="space-y-1">
              {project.highlights.slice(0, 3).map((highlight, i) => (
                <li key={i} className="text-sm text-gray-400 flex items-start">
                  <span className="text-purple-400 mr-2 mt-1">•</span>
                  {highlight}
                </li>
              ))}
            </ul>
          </div>
        )}

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

        {/* Action Links */}
        {(!project.isPrivate && (project.link || project.apiDocs)) && (
          <div className="flex items-center gap-4 pt-4 border-t border-slate-700/50">
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center text-purple-400 font-medium transition-all duration-300 hover:text-purple-300 ${
                  isHovered ? 'translate-x-1' : ''
                }`}
              >
                <span className="mr-2">Live Demo</span>
                <ArrowRight size={16} className={`transition-transform duration-300 ${
                  isHovered ? 'translate-x-1' : ''
                }`} />
              </a>
            )}
            {project.apiDocs && (
              <a
                href={project.apiDocs}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-blue-400 font-medium transition-all duration-300 hover:text-blue-300"
              >
                <span className="mr-2">API Docs</span>
                <FileText size={16} />
              </a>
            )}
          </div>
        )}

        {/* Private Project Indicator */}
        {project.isPrivate && (
          <div className="flex items-center gap-4 pt-4 border-t border-slate-700/50">
            <div className="flex items-center text-gray-400 font-medium">
              <Lock size={16} className="mr-2" />
              <span>Internal/Private Project</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;