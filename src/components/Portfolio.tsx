import React, { useState } from 'react';
import { ExternalLink, Code, Smartphone, Layout } from 'lucide-react';

const projects = [
  {
    title: "E-Commerce Platform",
    category: "Web Development",
    image: "https://images.unsplash.com/photo-1661956602116-aa6865609028?auto=format&fit=crop&w=800&q=80",
    description: "A modern e-commerce platform with real-time inventory management.",
    tech: ["React", "Node.js", "MongoDB"],
    icon: <Code className="text-red-500" size={20} />
  },
  {
    title: "Fitness App",
    category: "Mobile App",
    image: "https://images.unsplash.com/photo-1576678927484-cc907957088c?auto=format&fit=crop&w=800&q=80",
    description: "Cross-platform mobile app for fitness tracking and workout planning.",
    tech: ["React Native", "Firebase", "Redux"],
    icon: <Smartphone className="text-red-500" size={20} />
  },
  {
    title: "Banking Dashboard",
    category: "UI/UX Design",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    description: "Modern banking dashboard with real-time analytics.",
    tech: ["Figma", "Adobe XD", "Webflow"],
    icon: <Layout className="text-red-500" size={20} />
  }
];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const categories = ["All", "Web Development", "Mobile App", "UI/UX Design"];

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="portfolio" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-transparent pointer-events-none" />
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-red-500/10 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-red-500 to-red-800 bg-clip-text text-transparent">
              Our Portfolio
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Explore our latest projects and success stories
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-gradient-to-r from-red-600 to-red-800 text-white'
                  : 'bg-gray-800/50 text-gray-400 hover:text-white hover:bg-gray-800'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl overflow-hidden
                         border border-gray-700/50 hover:border-red-500/50 transition-all duration-500"
            >
              {/* Project Image */}
              <div className="aspect-w-16 aspect-h-9">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Project Info Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent 
                            flex flex-col justify-end p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    {project.icon}
                    <span className="text-sm text-red-400">{project.category}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white">{project.title}</h3>
                  <p className="text-gray-400 text-sm">{project.description}</p>
                  
                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="text-xs px-2 py-1 bg-gray-800/80 text-gray-300 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* View Project Button */}
                  <button className="mt-4 px-4 py-2 bg-red-500/20 hover:bg-red-500/30 text-red-400 
                                   rounded-lg flex items-center gap-2 text-sm transition-colors duration-300">
                    View Project
                    <ExternalLink size={16} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;