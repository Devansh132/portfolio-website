import React, { useEffect, useRef } from 'react';
import { ChevronDown, Code, Palette, Zap, Download, Eye } from 'lucide-react';

const getExperienceYears = () => {
  const start = new Date(2022, 10); 
  const now = new Date();
  const diff = now.getTime() - start.getTime();
  const years = diff / (1000 * 60 * 60 * 24 * 365.25);
  return years.toFixed(1);
};

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      
      const xPos = (clientX / innerWidth) * 100;
      const yPos = (clientY / innerHeight) * 100;
      
      heroRef.current.style.setProperty('--mouse-x', `${xPos}%`);
      heroRef.current.style.setProperty('--mouse-y', `${yPos}%`);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  

useEffect(() => {
  const text = "Devansh Shukla";
  const element = textRef.current;
  if (!element) return;

  let i = 0;
  let timeoutId: NodeJS.Timeout;

  const typeWriter = () => {
    if (i <= text.length) {
      element.textContent = text.slice(0, i);
      i++;
      timeoutId = setTimeout(typeWriter, 100);
    }
  };

  typeWriter();

  return () => {
    clearTimeout(timeoutId);
    if (element) element.textContent = "";
  };
}, []);

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

const downloadResume = () => {
  const link = document.createElement('a');
  link.href = '/DEVANSH-RESUME.pdf';
  link.download = 'DEVANSH-RESUME.pdf';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
  const experienceYears = getExperienceYears();
  useEffect(() => {
  console.log(`Experience Years: ${experienceYears}`);
}, [experienceYears]);
  

  return (
    <section id="home" ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_var(--mouse-x,50%)_var(--mouse-y,50%),rgba(56,189,248,0.15),transparent_50%)] transition-all duration-300"></div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="floating-element absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400 rounded-full opacity-80"></div>
        <div className="floating-element absolute top-1/3 right-1/3 w-3 h-3 bg-purple-400 rounded-full opacity-60" style={{animationDelay: '2s'}}></div>
        <div className="floating-element absolute bottom-1/4 right-1/4 w-4 h-4 bg-pink-400 rounded-full opacity-40" style={{animationDelay: '4s'}}></div>
        <div className="floating-element absolute bottom-1/3 left-1/3 w-2 h-2 bg-green-400 rounded-full opacity-70" style={{animationDelay: '6s'}}></div>
      </div>

      {/* 3D Icons */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="floating-icon absolute top-1/4 left-1/6 text-blue-400 opacity-20">
          <Code size={40} />
        </div>
        <div className="floating-icon absolute top-1/2 right-1/6 text-purple-400 opacity-20" style={{animationDelay: '3s'}}>
          <Palette size={48} />
        </div>
        <div className="floating-icon absolute bottom-1/4 left-1/4 text-pink-400 opacity-20" style={{animationDelay: '1.5s'}}>
          <Zap size={36} />
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <div className="hero-content">
          <h1 
            ref={textRef}
            className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-white via-blue-200 to-purple-300 bg-clip-text text-transparent leading-tight min-h-[1.2em]"
          >
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            Software Engineer | Gurgaon, Haryana, India
          </p>
          <p className="text-lg text-gray-400 mb-12 max-w-3xl mx-auto">
            A passionate Software Engineer with {experienceYears}+ years of experience, eager to build innovative, scalable, and user-centric applications. Committed to solving real-world challenges through efficient code, collaborative teamwork, and continuous learning.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button 
              onClick={scrollToProjects}
              className="group relative px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg text-white font-medium transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25"
            >
              <span className="relative z-10 flex items-center gap-2">
                <Eye size={20} />
                View My Work
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-700 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            <button 
              onClick={downloadResume}
              className="group px-8 py-4 border-2 border-white/20 rounded-lg text-white font-medium transition-all duration-300 hover:bg-white/10 hover:border-white/40 hover:scale-105"
            >
              <span className="flex items-center gap-2">
                <Download size={20} />
                Download Resume
              </span>
            </button>
          </div>
          {/* Social Links */}
          <div className="flex justify-center gap-6 mt-8">
            <a href="mailto:devanshshukla132@gmail.com" className="social-link group" title="Email">
              <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20 hover:border-blue-400 transition-all duration-300 group-hover:scale-110">
                <svg className="w-6 h-6 text-gray-300 group-hover:text-blue-400 transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 2v.01L12 13 4 6.01V6h16zm0 12H4V8.99l8 6.99 8-6.99V18z"/>
                </svg>
              </div>
            </a>
            <a href="https://www.linkedin.com/in/devansh-shukla-bb45b3240/" target="_blank" rel="noopener noreferrer" className="social-link group" title="LinkedIn">
              <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20 hover:border-blue-400 transition-all duration-300 group-hover:scale-110">
                <svg className="w-6 h-6 text-gray-300 group-hover:text-blue-400 transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.29c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm13.5 10.29h-3v-4.5c0-1.08-.02-2.47-1.5-2.47-1.5 0-1.73 1.17-1.73 2.39v4.58h-3v-9h2.89v1.23h.04c.4-.76 1.38-1.56 2.84-1.56 3.04 0 3.6 2 3.6 4.59v5.74z"/>
                </svg>
              </div>
            </a>
            <a href="tel:6394307931" className="social-link group" title="Phone">
              <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20 hover:border-blue-400 transition-all duration-300 group-hover:scale-110">
                <svg className="w-6 h-6 text-gray-300 group-hover:text-blue-400 transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.11-.21c1.21.49 2.53.76 3.88.76a1 1 0 011 1v3.5a1 1 0 01-1 1C10.07 22 2 13.93 2 4.5A1 1 0 013 3.5h3.5a1 1 0 011 1c0 1.35.27 2.67.76 3.88a1 1 0 01-.21 1.11l-2.2 2.2z"/>
                </svg>
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-2 left-1/1 transform -translate-x-1/2 animate-bounce cursor-pointer" onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}>
        <ChevronDown size={32} className="text-white/60" />
      </div>
    </section>
  );
};

export default Hero;