'use client';

import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Here you would typically send to your backend
      // For now, we'll simulate a successful submission
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // You can integrate with services like:
      // - EmailJS for direct email sending
      // - Formspree for form handling
      // - Your own backend API
      
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-purple-100 to-blue-50 dark:from-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4 flex flex-col items-center">
        <div className="bg-white/70 dark:bg-gray-900/70 backdrop-blur-lg rounded-2xl shadow-2xl p-10 max-w-xl w-full border border-gray-200 dark:border-gray-700">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-10 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block mb-1 font-semibold text-gray-700 dark:text-gray-200">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 dark:focus:ring-purple-500 focus:outline-none bg-white/80 dark:bg-gray-800/80 transition-all duration-300 shadow-sm"
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-1 font-semibold text-gray-700 dark:text-gray-200">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 dark:focus:ring-purple-500 focus:outline-none bg-white/80 dark:bg-gray-800/80 transition-all duration-300 shadow-sm"
              />
            </div>
            <div>
              <label htmlFor="message" className="block mb-1 font-semibold text-gray-700 dark:text-gray-200">Message</label>
              <textarea
                id="message"
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 dark:focus:ring-purple-500 focus:outline-none bg-white/80 dark:bg-gray-800/80 transition-all duration-300 shadow-sm"
              ></textarea>
            </div>
            
            {/* Status Messages */}
            {submitStatus === 'success' && (
              <div className="p-4 bg-green-100 dark:bg-green-900/30 border border-green-400 text-green-700 dark:text-green-300 rounded-lg">
                ✅ Message sent successfully! I&apos;ll get back to you soon.
              </div>
            )}
            
            {submitStatus === 'error' && (
              <div className="p-4 bg-red-100 dark:bg-red-900/30 border border-red-400 text-red-700 dark:text-red-300 rounded-lg">
                ❌ Something went wrong. Please try again or contact me directly.
              </div>
            )}
            
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-bold shadow-lg transition-all duration-300 ${
                isSubmitting 
                  ? 'opacity-50 cursor-not-allowed' 
                  : 'hover:scale-105 hover:shadow-2xl'
              }`}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
                      <div className="mt-12 text-center">
              <p className="mb-6 text-gray-700 dark:text-gray-300 font-medium">Or reach out directly:</p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <a href="mailto:natnael.darsema@gmail.com" className="group flex flex-col items-center p-4 bg-white/60 dark:bg-gray-800/60 rounded-lg hover:bg-white/80 dark:hover:bg-gray-800/80 transition-all duration-300" aria-label="Email">
                  <span className="text-3xl mb-2 group-hover:scale-125 transition-transform">✉️</span>
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Email</span>
                </a>
                <a href="https://github.com/Nati-darse" target="_blank" rel="noopener noreferrer" className="group flex flex-col items-center p-4 bg-white/60 dark:bg-gray-800/60 rounded-lg hover:bg-white/80 dark:hover:bg-gray-800/80 transition-all duration-300" aria-label="GitHub">
                  <span className="text-3xl mb-2 group-hover:scale-125 transition-transform">🐙</span>
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">GitHub</span>
                </a>
                <a href="https://linkedin.com/in/nathnael-darsema" target="_blank" rel="noopener noreferrer" className="group flex flex-col items-center p-4 bg-white/60 dark:bg-gray-800/60 rounded-lg hover:bg-white/80 dark:hover:bg-gray-800/80 transition-all duration-300" aria-label="LinkedIn">
                  <span className="text-3xl mb-2 group-hover:scale-125 transition-transform">💼</span>
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">LinkedIn</span>
                </a>
                <a href="https://stackoverflow.com/users/your-stackoverflow-id" target="_blank" rel="noopener noreferrer" className="group flex flex-col items-center p-4 bg-white/60 dark:bg-gray-800/60 rounded-lg hover:bg-white/80 dark:hover:bg-gray-800/80 transition-all duration-300" aria-label="Stack Overflow">
                  <span className="text-3xl mb-2 group-hover:scale-125 transition-transform">📚</span>
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Stack Overflow</span>
                </a>
              </div>
            </div>
        </div>
      </div>
    </section>
  );
}