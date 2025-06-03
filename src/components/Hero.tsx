
import React, { useState, useEffect } from 'react';

const Hero = () => {
  const [showFullName, setShowFullName] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowFullName(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="text-center z-10 px-4">
        <div className="mb-8">
          {!showFullName ? (
            <h1 className="text-8xl md:text-9xl font-bold text-white animate-fade-in">
              <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
                MSR
              </span>
            </h1>
          ) : (
            <div className="animate-scale-in">
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
                <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
                  Mohammed Shajau Rahman
                </span>
              </h1>
              <div className="text-xl md:text-2xl text-gray-300 animate-fade-in delay-500">
                Full Stack Developer & Creative Designer
              </div>
            </div>
          )}
        </div>

        {showFullName && (
          <div className="animate-fade-in delay-1000">
            <p className="text-lg md:text-xl text-gray-400 mb-8 max-w-3xl mx-auto">
              Bringing your digital dreams to life through innovative design, powerful development, 
              and creative solutions that make an impact.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="#projects" 
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105"
              >
                View My Work
              </a>
              <a 
                href="mailto:mohammedshajaurahman@gmail.com" 
                className="border border-blue-500 text-blue-400 px-8 py-3 rounded-lg hover:bg-blue-500 hover:text-white transition-all transform hover:scale-105"
              >
                Let's Connect
              </a>
            </div>
          </div>
        )}
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-blue-500 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-blue-500 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
