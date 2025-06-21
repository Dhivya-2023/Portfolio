import React from 'react';
import { experience } from '../../data/experience';

const Experience = () => {
  return (
    <section id="experience" className="py-32 px-6 bg-slate-800/20 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Experience
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full" />
        </div>

        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-500 via-pink-500 to-purple-500 rounded-full" />
          
          <div className="space-y-16">
            {experience.map((job, index) => (
              <div key={index} className="relative flex items-start">
                <div className={`absolute left-6 w-6 h-6 bg-${job.color}-500 rounded-full border-4 border-slate-900 shadow-lg`} />
                <div className="ml-20 bg-slate-800/40 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 hover:border-purple-500/50 transition-all duration-500 transform hover:scale-105">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                    <div>
                      <h3 className="text-2xl font-bold text-purple-400 mb-2">{job.title}</h3>
                      <p className="text-xl text-white mb-2">{job.company}</p>
                      <p className="text-gray-400">{job.description}</p>
                    </div>
                    <span className="text-purple-300 font-medium bg-purple-500/10 px-4 py-2 rounded-full mt-4 lg:mt-0 self-start">
                      {job.period}
                    </span>
                  </div>
                  <ul className="space-y-3">
                    {job.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start text-gray-300">
                        <div className="w-2 h-2 bg-purple-400 rounded-full mr-3 mt-2 flex-shrink-0" />
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;