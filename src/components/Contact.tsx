
import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: "Email",
      value: "mohammedshajaurahman@gmail.com",
      href: "mailto:mohammedshajaurahman@gmail.com"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      label: "Phone",
      value: "+91 8129913205",
      href: "tel:+918129913205"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      label: "Location",
      value: "Available for Remote Work",
      href: null
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Let's <span className="text-blue-500">Connect</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to bring your ideas to life? Let's discuss your project and create something amazing together.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Get in Touch</h3>
              <p className="text-gray-300 text-lg mb-8">
                I'm always excited to work on new projects and collaborate with amazing people. 
                Whether you need design work, development services, or have any questions, 
                feel free to reach out!
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-center space-x-4 group">
                  <div className="bg-blue-600 p-3 rounded-lg group-hover:bg-blue-500 transition-colors">
                    <div className="text-white">
                      {info.icon}
                    </div>
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">{info.label}</p>
                    {info.href ? (
                      <a 
                        href={info.href}
                        className="text-white text-lg hover:text-blue-500 transition-colors"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-white text-lg">{info.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-gray-800 p-6 rounded-xl">
              <h4 className="text-white font-bold mb-4">Quick Response Guarantee</h4>
              <p className="text-gray-300">
                I typically respond to all inquiries within 24 hours. For urgent projects, 
                feel free to call directly.
              </p>
            </div>
          </div>

          <div className="bg-gray-800 p-8 rounded-xl">
            <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>
            <form className="space-y-6">
              <div>
                <label className="block text-gray-300 mb-2">Name</label>
                <input 
                  type="text" 
                  className="w-full bg-gray-700 text-white px-4 py-3 rounded-lg focus:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                  placeholder="Your Name"
                />
              </div>
              
              <div>
                <label className="block text-gray-300 mb-2">Email</label>
                <input 
                  type="email" 
                  className="w-full bg-gray-700 text-white px-4 py-3 rounded-lg focus:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div>
                <label className="block text-gray-300 mb-2">Project Type</label>
                <select className="w-full bg-gray-700 text-white px-4 py-3 rounded-lg focus:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all">
                  <option>Select Service</option>
                  <option>Logo Design</option>
                  <option>Wedding Cards</option>
                  <option>Web Development</option>
                  <option>Data Analysis</option>
                  <option>Social Media</option>
                  <option>Other</option>
                </select>
              </div>
              
              <div>
                <label className="block text-gray-300 mb-2">Message</label>
                <textarea 
                  rows={5}
                  className="w-full bg-gray-700 text-white px-4 py-3 rounded-lg focus:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all resize-none"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>
              
              <button 
                type="button"
                onClick={() => window.location.href = 'mailto:mohammedshajaurahman@gmail.com'}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105 flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                Send Message
              </button>
            </form>
          </div>
        </div>

        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-8 rounded-xl">
            <h3 className="text-2xl font-bold text-white mb-4">Ready to Start Your Project?</h3>
            <p className="text-blue-100 mb-6">
              Let's discuss your requirements and bring your vision to life with professional design and development.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="mailto:mohammedshajaurahman@gmail.com"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-all transform hover:scale-105 font-semibold"
              >
                Email Me Now
              </a>
              <a 
                href="tel:+918129913205"
                className="border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-blue-600 transition-all transform hover:scale-105 font-semibold"
              >
                Call Me
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
