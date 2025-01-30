import React, { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const particlesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const createParticle = () => {
      if (!particlesRef.current) return;
      
      const particle = document.createElement('div');
      particle.className = 'absolute w-2 h-2 bg-red-500 rounded-full';
      
      const x = Math.random() * particlesRef.current.offsetWidth;
      const y = Math.random() * particlesRef.current.offsetHeight;
      
      particle.style.left = `${x}px`;
      particle.style.top = `${y}px`;
      particle.style.opacity = '0';
      particle.style.transform = 'scale(0)';
      
      particlesRef.current.appendChild(particle);
      
      requestAnimationFrame(() => {
        particle.style.transition = 'all 3s ease-out';
        particle.style.opacity = '0.5';
        particle.style.transform = 'scale(1)';
        
        setTimeout(() => {
          if (particlesRef.current?.contains(particle)) {
            particlesRef.current.removeChild(particle);
          }
        }, 3000);
      });
    };

    const interval = setInterval(createParticle, 200);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden" id="home">
      <div ref={particlesRef} className="absolute inset-0" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl sm:text-6xl font-bold mb-8 animate-fade-in">
          <span className="bg-gradient-to-r from-red-500 to-red-800 bg-clip-text text-transparent">
            Innovating Tomorrow's
          </span>
          <br />
          <span className="text-white">Digital Solutions</span>
        </h1>
        
        <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto animate-fade-in-delayed">
          We transform ideas into powerful software solutions that drive business growth and innovation.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-delayed-more">
          <button className="px-8 py-3 bg-gradient-to-r from-red-600 to-red-800 rounded-lg font-semibold 
                           hover:from-red-700 hover:to-red-900 transition-all duration-300 flex items-center justify-center gap-2">
            Get Started
            <ArrowRight size={20} />
          </button>
          <button className="px-8 py-3 border-2 border-red-600 rounded-lg font-semibold
                           hover:bg-red-600/10 transition-all duration-300">
            View Our Work
          </button>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowRight size={24} className="rotate-90" />
      </div>
    </div>
  );
};

export default Hero;