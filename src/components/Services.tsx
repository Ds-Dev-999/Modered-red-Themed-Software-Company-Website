import React from 'react';
import { Code, Smartphone, Cloud, Brain, Layout, Users } from 'lucide-react';

const services = [
  {
    icon: <Code size={32} className="text-red-500" />,
    title: "Web Development",
    description: "Custom web applications built with cutting-edge technologies and best practices."
  },
  {
    icon: <Smartphone size={32} className="text-red-500" />,
    title: "Mobile Development",
    description: "Native and cross-platform mobile apps that deliver exceptional user experiences."
  },
  {
    icon: <Cloud size={32} className="text-red-500" />,
    title: "Cloud Solutions",
    description: "Scalable cloud infrastructure and services for modern businesses."
  },
  {
    icon: <Brain size={32} className="text-red-500" />,
    title: "AI & Machine Learning",
    description: "Intelligent solutions that leverage the latest in artificial intelligence."
  },
  {
    icon: <Layout size={32} className="text-red-500" />,
    title: "UI/UX Design",
    description: "Beautiful, intuitive interfaces designed for optimal user engagement."
  },
  {
    icon: <Users size={32} className="text-red-500" />,
    title: "IT Consulting",
    description: "Strategic technology consulting to drive your business forward."
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-red-500 to-red-800 bg-clip-text text-transparent">
              Our Services
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Comprehensive software solutions tailored to your business needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="service-card group"
              style={{
                animationDelay: `${index * 0.1}s`,
              }}
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-red-500 transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                {service.description}
              </p>
              <div className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-red-500 to-red-800 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;