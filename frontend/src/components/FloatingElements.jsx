import React from 'react';

const FloatingElements = () => {
  const elements = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    size: Math.random() * 4 + 2,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 10 + 10,
    delay: Math.random() * 5,
  }));

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {elements.map((el) => (
        <div
          key={el.id}
          className="absolute rounded-full bg-gradient-to-r from-purple-500/10 to-pink-500/10 animate-pulse"
          style={{
            width: `${el.size}rem`,
            height: `${el.size}rem`,
            left: `${el.x}%`,
            top: `${el.y}%`,
            animationDuration: `${el.duration}s`,
            animationDelay: `${el.delay}s`,
          }}
        />
      ))}
    </div>
  );
};

export default FloatingElements;