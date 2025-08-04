import React, { useEffect, useState } from 'react';
import { Code, Palette, Zap } from 'lucide-react';

const LoadingScreen: React.FC = () => {
  const [progress, setProgress] = useState(0);
  const [currentText, setCurrentText] = useState(0);

  const loadingTexts = [
    'Initializing Portfolio...',
    'Loading 3D Elements...',
    'Preparing Experience...',
    'Almost Ready...'
  ];

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 2;
      });
    }, 50);

    const textInterval = setInterval(() => {
      setCurrentText(prev => (prev + 1) % loadingTexts.length);
    }, 600);

    return () => {
      clearInterval(progressInterval);
      clearInterval(textInterval);
    };
  }, []);

  return (
    <div className="fixed inset-0 bg-gray-900 flex items-center justify-center z-50">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(56,189,248,0.1),transparent_70%)]"></div>
      </div>

      {/* Floating Icons */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="floating-icon absolute top-1/4 left-1/4 text-blue-400 opacity-30">
          <Code size={60} />
        </div>
        <div className="floating-icon absolute top-1/2 right-1/4 text-purple-400 opacity-30" style={{animationDelay: '2s'}}>
          <Palette size={70} />
        </div>
        <div className="floating-icon absolute bottom-1/4 left-1/3 text-pink-400 opacity-30" style={{animationDelay: '4s'}}>
          <Zap size={50} />
        </div>
      </div>

      {/* Main Loading Content */}
      <div className="relative z-10 text-center">
        {/* Logo/Name */}
        <div className="mb-8">
          <h1 className="text-6xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-4">
            DS
          </h1>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto rounded-full"></div>
        </div>

        {/* Loading Animation */}
        <div className="mb-8">
          <div className="relative w-64 h-2 bg-gray-800 rounded-full mx-auto overflow-hidden">
            <div 
              className="absolute top-0 left-0 h-full bg-gradient-to-r from-blue-400 to-purple-500 rounded-full transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"></div>
          </div>
          <p className="text-2xl font-medium text-white mt-4">{progress}%</p>
        </div>

        {/* Loading Text */}
        <div className="h-8">
          <p className="text-lg text-gray-300 animate-pulse">
            {loadingTexts[currentText]}
          </p>
        </div>

        {/* Spinning Loader */}
        <div className="mt-8">
          <div className="w-12 h-12 border-4 border-gray-700 border-t-blue-400 rounded-full animate-spin mx-auto"></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;