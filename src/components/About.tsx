import React from 'react';
import { User, School, Coffee, Globe } from 'lucide-react';

const getExperienceYears = () => {
  const start = new Date(2022, 10); 
  const now = new Date();
  const diff = now.getTime() - start.getTime();
  const years = diff / (1000 * 60 * 60 * 24 * 365.25);
  return years.toFixed(1);
};

const About: React.FC = () => {
    const experienceYears = getExperienceYears();
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-900 to-gray-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A passionate Software Engineer with {experienceYears}+ years of experience, eager to build innovative, scalable, and user-centric applications.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="about-card group">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                  <User className="text-white" size={24} />
                </div>
                <h3 className="text-2xl font-bold text-white">Objective</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                A passionate Software Engineer with {experienceYears}+ years of experience, eager to build innovative, scalable, and user-centric applications. Committed to solving real-world challenges through efficient code, collaborative teamwork, and continuous learning. Seeking an opportunity to contribute to impactful projects while refining my expertise in modern web technologies and software development.
              </p>
            </div>
            <div className="about-card group">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                  <School className="text-white" size={24} />
                </div>
                <h3 className="text-2xl font-bold text-white">Education</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Maharana Pratap Engineering College<br />
                BTECH (CSE) | 2020 - 2024
              </p>
            </div>

             <div className="about-card group">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-orange-600 rounded-lg flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                  <Coffee className="text-white" size={24} />
                </div>
                <h3 className="text-2xl font-bold text-white">When I'm Not Coding</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
               I have a deep passion for traveling, hiking, and exploring diverse cultures, as I believe inspiration can be found in every corner of the world. These experiences broaden my perspective and fuel my creativity. In addition to my love for exploration, I also enjoy singing, which allows me to express myself artistically and maintain a balanced lifestyle.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-3xl p-8 backdrop-blur-sm border border-white/10">
              <div className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-600/10"></div>
                <div className="relative z-10 text-center">
                  <Globe size={80} className="text-blue-400 mx-auto mb-4" />
                  <p className="text-2xl font-bold text-white mb-2">Based in</p>
                  <p className="text-xl text-gray-300">Gurgaon, Haryana, India</p>
                  <p className="text-sm text-gray-400 mt-4">Open to relocation and remote work</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;