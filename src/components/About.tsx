
import React from 'react';

const About = () => {
  const skills = [
    "Graphic Design", "UI/UX Design", "Logo Design", "Wedding Cards",
    "Poster Design", "eBook Covers", "Data Analysis", "Web Development",
    "Social Media Management", "Brand Identity"
  ];

  return (
    <section id="about" className="py-20 bg-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About <span className="text-blue-500">MSR</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A passionate creator who transforms ideas into stunning visual experiences and powerful digital solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white mb-4">My Journey</h3>
            <p className="text-gray-300 text-lg leading-relaxed">
              From crafting beautiful wedding invitations to developing complex web applications, 
              I bring creativity and technical expertise to every project. My diverse skill set 
              allows me to offer comprehensive solutions that bridge design and development.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              Whether you need a stunning logo, a complete brand identity, or a full-stack web 
              application, I'm here to bring your vision to life with attention to detail and 
              innovative thinking.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {skills.map((skill, index) => (
              <div 
                key={skill}
                className="bg-gray-700 p-4 rounded-lg text-center hover:bg-blue-600 transition-all duration-300 transform hover:scale-105"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <span className="text-white font-medium">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
