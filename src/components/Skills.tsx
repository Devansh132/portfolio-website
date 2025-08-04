import React from 'react';
import { Code2, Palette, Database, Globe, FileCode } from 'lucide-react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      icon: Code2,
      title: 'Frontend',
      skills: ['Angular', 'React', 'Next.js', 'Bootstrap', 'Tailwind CSS', 'Material-UI'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Database,
      title: 'Backend',
      skills: ['Node.js', 'Express.js', 'MongoDB'],
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: FileCode,
      title: 'Languages',
      skills: ['JavaScript', 'TypeScript', 'Java', 'SQL', 'HTML', 'CSS'],
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Globe,
      title: 'Web Dev Tools',
      skills: ['Git', 'GitHub', 'VSCode', 'Chrome DevTools'],
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: Palette,
      title: 'Soft Skills',
      skills: ['Problem Solving', 'Self-learning', 'Presentation', 'Adaptability'],
      color: 'from-pink-500 to-rose-500'
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A comprehensive toolkit for building exceptional digital experiences
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-card group cursor-pointer">
              <div className="relative bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Animated border */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-20 transition-opacity duration-500 animate-pulse"></div>
                
                <div className="relative z-10">
                  <div className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-xl flex items-center justify-center mb-6 transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                    <category.icon size={32} className="text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-4">{category.title}</h3>
                  
                  <div className="space-y-2">
                    {category.skills.map((skill, skillIndex) => (
                      <div
                        key={skillIndex}
                        className="flex items-center gap-2 text-gray-300 group-hover:text-white transition-all duration-300 transform hover:translate-x-2"
                        style={{ animationDelay: `${skillIndex * 100}ms` }}
                      >
                        <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full group-hover:scale-150 transition-transform duration-300"></div>
                        <span className="text-sm">{skill}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="w-full bg-gray-700 rounded-full h-1">
                      <div className={`h-1 bg-gradient-to-r ${category.color} rounded-full transition-all duration-1000 group-hover:w-full`} style={{ width: '0%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;