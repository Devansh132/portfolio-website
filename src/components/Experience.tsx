import React from 'react';
import { Calendar, MapPin, Briefcase } from 'lucide-react';

const Experience: React.FC = () => {
  const experiences = [
    {
      title: 'Software Developer',
      company: 'Centocode Technologies Private Limited',
      location: 'Gurgaon, Haryana, India',
      period: 'Sep 2024 - Current',
      description: [
        'Developed and optimized web applications using Angular, React, and Bootstrap, focusing on performance, scalability, and user experience.',
        'Contributed to VisionWay CRM, enhancing client data management, visa tracking, and communication efficiency.',
        'Built Waptoz, a bulk messaging tool with WhatsApp Business API, enabling secure and scalable client communication.',
        'Collaborated with cross-functional teams for seamless API integration and high-quality application delivery.'
      ],
      technologies: ['Angular', 'React', 'MUI', 'WhatsApp API', 'Tailwind', 'Typescript', 'Javascript', 'Html/Css', 'REST API']
    },
    {
      title: 'Frontend Developer',
      company: 'Nashtech Global',
      location: 'Remote',
      period: 'Nov 2022 - Jul 2024',
      description: [
        'Developed and maintained dynamic web applications using Angular and Material-UI.',
        'Worked on GO 1%, enhancing modularity, fixing bugs, and transforming data for improved UX.',
        'Contributed to SPRICED-NRP by implementing dynamic Reactive Forms, custom validators, and NgRx for state management.',
        'Integrated REST APIs and optimized performance through code reusability and error handling.'
      ],
      technologies: ['Angular', 'Material-UI', 'NgRx', 'REST API', 'Typescript', 'Javascript', 'Html/Css']
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Experience
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            My professional journey and key achievements
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-blue-500 to-purple-600"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full border-4 border-gray-900 z-10"></div>
                
                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'} ml-12 md:ml-0`}>
                  <div className="experience-card group">
                    <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300">
                      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      
                      <div className="relative z-10">
                        <div className="flex items-center gap-2 mb-2">
                          <Briefcase size={20} className="text-blue-400" />
                          <h3 className="text-xl font-bold text-white">{exp.title}</h3>
                        </div>
                        
                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-4">
                          <span className="text-blue-400 font-medium">{exp.company}</span>
                          <div className="flex items-center gap-4 text-gray-400 text-sm">
                            <div className="flex items-center gap-1">
                              <MapPin size={14} />
                              {exp.location}
                            </div>
                            <div className="flex items-center gap-1">
                              <Calendar size={14} />
                              {exp.period}
                            </div>
                          </div>
                        </div>
                        
                        <ul className="space-y-2 mb-4">
                          {exp.description.map((item, itemIndex) => (
                            <li key={itemIndex} className="text-gray-300 text-sm leading-relaxed flex items-start gap-2">
                              <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                              {item}
                            </li>
                          ))}
                        </ul>
                        
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className="px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-xs text-gray-300 border border-white/20"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
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

export default Experience;