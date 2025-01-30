import React, { useEffect, useState } from 'react';
import { Menu, X, ChevronRight, Code, Smartphone, Cloud, Brain, Layout, Users, ArrowRight } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

function App() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Generate random positions for star lines
  const starLines = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    delay: `${Math.random() * 5}s`,
    duration: `${8 + Math.random() * 4}s`
  }));

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white relative">
      {/* Star Lines Background */}
      <div className="star-lines">
        {starLines.map(line => (
          <div
            key={line.id}
            className="star-line"
            style={{
              left: line.left,
              top: line.top,
              animationDelay: line.delay,
              animationDuration: line.duration
            }}
          />
        ))}
      </div>

      <Navbar isScrolled={isScrolled} />
      <main className="relative z-10">
        <Hero />
        <Services />
        <About />
        <Portfolio />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}

export default App;