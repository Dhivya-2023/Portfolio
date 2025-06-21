import React from 'react';
import { Mail, Linkedin, Github, Code, ArrowRight } from 'lucide-react';

const Contact = () => {
  const contactLinks = [
    { icon: Mail, label: "Email Me", href: "mailto:your.email@example.com", primary: true },
    { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com/in/yourprofile" },
    { icon: Github, label: "GitHub", href: "https://github.com/yourusername" }
  ];

  return (
    <section id="contact" className="py-32 px-6 bg-slate-800/20 relative">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-5xl md:text-6xl font-bold mb-8">
          <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Let's Create Together
          </span>
        </h2>
        <p className="text-xl text-gray-300 mb-16 max-w-2xl mx-auto leading-relaxed">
          Ready to bring your next project to life? Let's discuss how we can create 
          something extraordinary together.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-8 justify-center items-center mb-16">
          {contactLinks.map(({ icon: Icon, label, href, primary }, index) => (
            <a
              key={index}
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className={`group flex items-center space-x-3 px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                primary 
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white'
                  : 'border-2 border-purple-500 hover:bg-purple-500 text-purple-400 hover:text-white'
              }`}
            >
              <Icon size={20} />
              <span>{label}</span>
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
            </a>
          ))}
        </div>

        <div className="border-t border-slate-700/50 pt-12">
          <p className="text-gray-400 flex items-center justify-center space-x-2">
            <Code size={16} className="text-purple-400" />
            <span>Built with React & Tailwind CSS</span>
            <span className="text-purple-400">•</span>
            <span>© 2024 Frontend Developer</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;