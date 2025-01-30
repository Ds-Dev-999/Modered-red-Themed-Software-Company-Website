import React from 'react';
import { ChevronRight } from 'lucide-react';

const About = () => {
  const stats = [
    { number: "10+", label: "Years Experience" },
    { number: "200+", label: "Projects Completed" },
    { number: "50+", label: "Team Members" },
    { number: "98%", label: "Client Satisfaction" }
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-transparent pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left column - Image */}
          <div className="relative">
            <div className="aspect-w-16 aspect-h-9 rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
                alt="Team collaboration"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-gradient-to-br from-red-500 to-red-800 rounded-full blur-3xl opacity-20" />
          </div>

          {/* Right column - Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                <span className="bg-gradient-to-r from-red-500 to-red-800 bg-clip-text text-transparent">
                  Innovating the Future
                </span>
              </h2>
              <p className="text-gray-400 leading-relaxed">
                Since our inception, Compnay Name has been at the forefront of digital transformation, 
                helping businesses navigate the ever-evolving technology landscape. Our passion 
                for innovation and commitment to excellence drives us to deliver exceptional 
                solutions that empower our clients to succeed in the digital age.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="p-4 rounded-lg bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50
                           hover:border-red-500/50 transition-all duration-300 group"
                >
                  <div className="text-2xl font-bold text-red-500 group-hover:text-red-400 transition-colors">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-white">Why Choose Us?</h3>
              {[
                "Cutting-edge technology solutions",
                "Dedicated expert team",
                "Proven track record of success",
                "Agile development methodology"
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-2 text-gray-400 group"
                >
                  <ChevronRight size={20} className="text-red-500 group-hover:translate-x-1 transition-transform" />
                  <span className="group-hover:text-gray-300 transition-colors">{item}</span>
                </div>
              ))}
            </div>

            <button className="px-8 py-3 bg-gradient-to-r from-red-600 to-red-800 rounded-lg font-semibold 
                             hover:from-red-700 hover:to-red-900 transition-all duration-300 flex items-center gap-2">
              Learn More
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;