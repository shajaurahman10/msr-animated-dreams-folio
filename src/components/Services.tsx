
import React from 'react';
import { Palette, Code, BarChart, Share2, PenTool, Heart } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Graphic Design",
      description: "Creating stunning visuals using Canva and professional design tools",
      items: ["Logo Design", "Brand Identity", "Marketing Materials", "Social Media Graphics"]
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Wedding Design",
      description: "Beautiful wedding cards and invitations for your special day",
      items: ["Wedding Invitations", "Save the Dates", "Menu Cards", "Thank You Cards"]
    },
    {
      icon: <PenTool className="w-8 h-8" />,
      title: "Print Design",
      description: "Professional posters and eBook covers that capture attention",
      items: ["Event Posters", "eBook Covers", "Flyers", "Brochures"]
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Web Development",
      description: "Full-stack development solutions for modern web applications",
      items: ["Frontend Development", "Backend APIs", "Database Design", "Responsive Design"]
    },
    {
      icon: <BarChart className="w-8 h-8" />,
      title: "Data Services",
      description: "Data entry and analysis to help your business make informed decisions",
      items: ["Data Entry", "Data Analysis", "Excel Automation", "Report Generation"]
    },
    {
      icon: <Share2 className="w-8 h-8" />,
      title: "Social Media",
      description: "Growing your online presence with strategic content management",
      items: ["Content Creation", "Page Management", "Growth Strategy", "Analytics"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            My <span className="text-blue-500">Services</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            From creative design to technical development, I offer comprehensive solutions for your business needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={service.title}
              className="bg-gray-800 p-6 rounded-xl hover:bg-gray-700 transition-all duration-300 transform hover:scale-105 hover:shadow-xl group"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="text-blue-500 mb-4 group-hover:text-blue-400 transition-colors">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
              <p className="text-gray-300 mb-4">{service.description}</p>
              <ul className="space-y-2">
                {service.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="text-gray-400 text-sm flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-6">
                <a 
                  href="mailto:mohammedshajaurahman@gmail.com" 
                  className="inline-flex items-center text-blue-500 hover:text-blue-400 transition-colors"
                >
                  Get Quote →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
