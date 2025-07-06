'use client';

import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create email content
    const subject = `Portfolio Contact from ${formData.name}`;
    const body = `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`;
    
    // Create mailto link
    const mailtoLink = `mailto:natnaeldarsema@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    // Open default email client
    window.open(mailtoLink, '_blank');
    
    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-purple-100 to-blue-50">
      <div className="container mx-auto px-4 flex flex-col items-center">
        <div className="bg-white/70 backdrop-blur-lg rounded-2xl shadow-2xl p-10 max-w-xl w-full border border-gray-200">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-10 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block mb-1 font-semibold text-gray-700">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none bg-white/80 transition-all duration-300 shadow-sm"
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-1 font-semibold text-gray-700">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none bg-white/80 transition-all duration-300 shadow-sm"
              />
            </div>
            <div>
              <label htmlFor="message" className="block mb-1 font-semibold text-gray-700">Message</label>
              <textarea
                id="message"
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none bg-white/80 transition-all duration-300 shadow-sm"
              ></textarea>
            </div>
            
            <button
              type="submit"
              className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-bold shadow-lg hover:scale-105 hover:shadow-2xl transition-all duration-300"
            >
              Send Message
            </button>
          </form>
                      <div className="mt-12 text-center">
              <p className="mb-6 text-gray-700 font-medium">Or reach out directly:</p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <a href="mailto:natnaeldarsema@gmail.com" className="group flex flex-col items-center p-4 bg-white/60 rounded-lg hover:bg-white/80 transition-all duration-300" aria-label="Email">
                  <span className="text-3xl mb-2 group-hover:scale-125 transition-transform">✉️</span>
                  <span className="text-sm font-medium text-gray-700">Email</span>
                </a>
                <a href="https://github.com/Nati-darse" target="_blank" rel="noopener noreferrer" className="group flex flex-col items-center p-4 bg-white/60 rounded-lg hover:bg-white/80 transition-all duration-300" aria-label="GitHub">
                  <span className="text-3xl mb-2 group-hover:scale-125 transition-transform">🐙</span>
                  <span className="text-sm font-medium text-gray-700">GitHub</span>
                </a>
                <a href="https://linkedin.com/in/nathnael-darsema" target="_blank" rel="noopener noreferrer" className="group flex flex-col items-center p-4 bg-white/60 rounded-lg hover:bg-white/80 transition-all duration-300" aria-label="LinkedIn">
                  <span className="text-3xl mb-2 group-hover:scale-125 transition-transform">💼</span>
                  <span className="text-sm font-medium text-gray-700">LinkedIn</span>
                </a>
                <a href="https://stackoverflow.com/users/your-stackoverflow-id" target="_blank" rel="noopener noreferrer" className="group flex flex-col items-center p-4 bg-white/60 rounded-lg hover:bg-white/80 transition-all duration-300" aria-label="Stack Overflow">
                  <span className="text-3xl mb-2 group-hover:scale-125 transition-transform">📚</span>
                  <span className="text-sm font-medium text-gray-700">Stack Overflow</span>
                </a>
              </div>
            </div>
        </div>
      </div>
    </section>
  );
}