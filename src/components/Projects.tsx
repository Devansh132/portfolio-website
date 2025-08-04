import React from 'react';
import { ExternalLink, Github, Zap } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'VisionWay CRM',
      description: 'A customized CRM for VisionWay Immigration to manage visa consultancy, client data, and communication. Features real-time tracking, automation, and responsive UI. Built with Angular, NestJs, Skote Theme and Bootstrap.',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
      tech: ['Angular', 'NestJs', 'Bootstrap'],
      featured: true,
      demoUrl: 'https://visionwayimmigration.com/'
    },
    {
      title: 'Waptoz',
      description: 'Bulk messaging tool using React, Material UI, SQL, and Go Lang, leveraging WhatsApp Business API for secure, large-scale messaging. Features contact management, scheduling, and real-time tracking.',
      image: 'https://images.pexels.com/photos/3184299/pexels-photo-3184299.jpeg?auto=compress&cs=tinysrgb&w=800',
      tech: ['React', 'MUI', 'SQL', 'Go Lang'],
      featured: true,
      demoUrl: 'https://waptoz.com'
    },
    {
      title: 'GO 1%',
      description: 'HRMS built with Angular for HR professionals to track and manage organizational growth. Focused on reusable components, performance optimization, and responsive UI.',
      image: 'https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=800',
      tech: ['Angular', 'NgRx', 'Tailwind'],
      featured: false,
      demoUrl: ''
    },
    {
      title: 'Spriced-NRP',
      description: 'Web application using Angular 13, TypeScript, and NgRx. Developed dynamic forms, integrated REST APIs, and optimized state management for a scalable and maintainable platform.',
      image: 'https://images.pexels.com/photos/8369648/pexels-photo-8369648.jpeg?auto=compress&cs=tinysrgb&w=800',
      tech: ['Angular', 'Material UI', 'NgRx'],
      featured: false,
      demoUrl: ''
    },
    {
      title: 'AI Interview Application',
      description: 'AI-powered interview application that simulates real interview scenarios. Features include question generation, answer evaluation, and feedback generation using OpenAI API.',
      image: 'https://images.pexels.com/photos/3184299/pexels-photo-3184299.jpeg?auto=compress&cs=tinysrgb&w=800',
      tech: ['React', 'OpenAI API', 'Node.js'],
      featured: false,
      demoUrl: 'https://introview.com/'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-gray-800 to-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A showcase of my recent work and creative solutions
          </p>
        </div>

        <div className="grid gap-8">
          {/* Featured Projects */}
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {projects.filter(p => p.featured).map((project, index) => (
              <div key={index} className="project-card group cursor-pointer">
                <div className="relative bg-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-500 h-full">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Animated overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  
                  <div className="relative z-10">
                    <div className="relative overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent"></div>
                      {project.featured && (
                        <div className="absolute top-4 right-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                          <Zap size={16} />
                          Featured
                        </div>
                      )}
                    </div>
                    
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                      <p className="text-gray-300 mb-4 leading-relaxed">{project.description}</p>
                      
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tech.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-sm text-gray-300 border border-white/20 hover:bg-white/20 hover:scale-105 transition-all duration-300 cursor-pointer"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      
                      <div className="flex gap-4">
                        {project.demoUrl ? (
                          <a
                            href={project.demoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg text-white font-medium hover:scale-105 transition-transform duration-300"
                          >
                            <ExternalLink size={16} />
                            Live Demo
                          </a>
                        ) : (
                          <button
                            className="flex items-center gap-2 px-4 py-2 bg-gray-700 rounded-lg text-gray-400 font-medium cursor-not-allowed opacity-60"
                            disabled
                            title="Live demo not available"
                          >
                            <ExternalLink size={16} />
                            Live Demo
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Other Projects */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.filter(p => !p.featured).map((project, index) => (
              <div key={index} className="project-card group cursor-pointer">
                <div className="relative bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-300 h-full">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Hover glow effect */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl opacity-0 group-hover:opacity-20 blur transition-opacity duration-500"></div>
                  
                  <div className="relative z-10">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-32 object-cover transform group-hover:scale-110 transition-transform duration-300"
                    />
                    
                    <div className="p-4">
                      <h3 className="text-lg font-bold text-white mb-2">{project.title}</h3>
                      <p className="text-gray-300 text-sm mb-3 leading-relaxed">{project.description}</p>
                      
                      <div className="flex flex-wrap gap-1 mb-3">
                        {project.tech.slice(0, 3).map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-2 py-1 bg-white/10 rounded text-xs text-gray-300 hover:bg-white/20 transition-colors duration-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      
                      <div className="flex gap-2">
                        <button className="flex items-center gap-1 px-3 py-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded text-white text-sm hover:scale-105 transition-transform duration-300">
                          <ExternalLink size={12} />
                          Demo
                        </button>
                        <button className="flex items-center gap-1 px-3 py-1 border border-white/20 rounded text-white text-sm hover:bg-white/10 hover:scale-105 transition-all duration-300">
                          <Github size={12} />
                          Code
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;