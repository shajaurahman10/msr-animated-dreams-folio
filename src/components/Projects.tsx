
import React from 'react';
import { ExternalLink, Github, Clock } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Collzy - Educational Platform",
      description: "A modern educational platform built with React and Node.js",
      image: "/lovable-uploads/e0369a67-6847-4b7c-a6c5-01316bf3a561.png",
      status: "Live",
      url: "https://collzy.vercel.app",
      tech: ["React", "Node.js", "MongoDB", "Tailwind CSS"]
    },
    {
      title: "MSR Design Portfolio",
      description: "Showcasing creative design work and branding projects",
      image: "/lovable-uploads/7acf4acd-89cd-4902-b13e-09632bf7242b.png",
      status: "Under Construction",
      tech: ["React", "TypeScript", "Tailwind CSS"]
    },
    {
      title: "Wedding Card Collections",
      description: "Beautiful wedding invitation designs for special occasions",
      image: "/lovable-uploads/aa86faf0-32a1-4316-aa68-e2652612be11.png",
      status: "Ongoing",
      tech: ["Canva", "Adobe Creative Suite", "Print Design"]
    },
    {
      title: "Brand Identity Projects",
      description: "Logo design and brand identity for various clients",
      image: "/lovable-uploads/f3d563de-5280-4b84-ad46-aabb5462a55a.png",
      status: "Ongoing",
      tech: ["Logo Design", "Brand Strategy", "Visual Identity"]
    }
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "Live":
        return <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm">Live</span>;
      case "Under Construction":
        return <span className="bg-yellow-500 text-white px-3 py-1 rounded-full text-sm flex items-center gap-1">
          <Clock className="w-3 h-3" /> Under Construction
        </span>;
      default:
        return <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm">{status}</span>;
    }
  };

  return (
    <section id="projects" className="py-20 bg-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            My <span className="text-blue-500">Projects</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A showcase of my creative work and technical projects, each crafted with passion and attention to detail.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.title}
              className="bg-gray-900 rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 group"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="aspect-video bg-gray-700 relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4">
                  {getStatusBadge(project.status)}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  {project.url && (
                    <a 
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-blue-500 hover:text-blue-400 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      View Live
                    </a>
                  )}
                  <a 
                    href="mailto:mohammedshajaurahman@gmail.com"
                    className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                  >
                    Contact for Details
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a 
            href="mailto:mohammedshajaurahman@gmail.com"
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105"
          >
            Discuss Your Project
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
