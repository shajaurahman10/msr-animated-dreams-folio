
import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-gray-900/95 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="text-2xl font-bold text-white">
            <span className="text-blue-500">MSR</span>
          </div>
          
          <div className="hidden md:flex space-x-8">
            <button onClick={() => scrollToSection('home')} className="text-gray-300 hover:text-blue-500 transition-colors">Home</button>
            <button onClick={() => scrollToSection('about')} className="text-gray-300 hover:text-blue-500 transition-colors">About</button>
            <button onClick={() => scrollToSection('services')} className="text-gray-300 hover:text-blue-500 transition-colors">Services</button>
            <button onClick={() => scrollToSection('projects')} className="text-gray-300 hover:text-blue-500 transition-colors">Projects</button>
            <button onClick={() => scrollToSection('contact')} className="text-gray-300 hover:text-blue-500 transition-colors">Contact</button>
          </div>

          <div className="flex items-center space-x-4">
            <a href="mailto:mohammedshajaurahman@gmail.com" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors">
              Hire Me
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
