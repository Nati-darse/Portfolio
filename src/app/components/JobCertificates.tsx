'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function JobCertificates() {
  const jobCertificates = [
    {
      projectName: 'E-commerce Platform Development',
      client: 'TechStart Inc.',
      completionDate: 'December 2024',
      certificate: '/certificates/ecommerce-completion-cert.png',
      feedback: 'Exceptional work on our e-commerce platform. Natnael delivered a robust, scalable solution that exceeded our expectations. The project was completed on time and within budget.',
      rating: 5,
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      projectValue: '$'
    },
    {
      projectName: 'Church Website Redesign',
      client: 'ABFG Church',
      completionDate: 'November 2024',
      certificate: '/certificates/church-website-cert.png',
      feedback: 'Natnael transformed our outdated website into a modern, responsive platform. His attention to detail and understanding of our needs was outstanding.',
      rating: 5,
      technologies: ['Next.js', 'TypeScript', 'Tailwind CSS'],
      projectValue: '$'
    },
    {
      projectName: 'Event Management System',
      client: 'EventEasy Solutions',
      completionDate: 'October 2024',
      certificate: '/certificates/event-system-cert.png',
      feedback: 'The event management system Natnael built for us is intuitive and powerful. Our users love the new features and improved user experience.',
      rating: 5,
      technologies: ['React', 'Express', 'MongoDB', 'Socket.io'],
      projectValue: '$'
    },
    {
      projectName: 'School Management Platform',
      client: 'Education First Academy',
      completionDate: 'September 2024',
      certificate: '/certificates/school-management-cert.png',
      feedback: 'Natnael created a comprehensive school management system that streamlined our administrative processes. The system is reliable and user-friendly.',
      rating: 5,
      technologies: ['React', 'Node.js', 'PostgreSQL', 'JWT'],
      projectValue: '$'
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span key={i} className={`text-lg ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}>
        ⭐
      </span>
    ));
  };

  return (
    <section id="job-certificates" className="py-20 bg-gradient-to-br from-green-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent mb-4">
            Job Completion Certificates
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Official certificates and testimonials from completed projects, showcasing successful deliveries and client satisfaction
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {jobCertificates.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white/70 dark:bg-gray-900/70 backdrop-blur-lg rounded-2xl shadow-xl p-8 border border-gray-200 dark:border-gray-700 hover:scale-105 transition-transform duration-300"
            >
              <div className="flex flex-col lg:flex-row gap-6">
                {/* Certificate Image */}
                <div className="flex-shrink-0">
                  <div className="relative w-48 h-32 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/20 dark:to-purple-900/20 rounded-lg border-2 border-blue-200 dark:border-blue-700 overflow-hidden">
                    <Image
                      src={cert.certificate}
                      alt={`${cert.projectName} completion certificate`}
                      fill
                      className="object-cover cursor-pointer hover:scale-110 transition-transform duration-300"
                      onClick={() => window.open(cert.certificate, '_blank')}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                    <div className="absolute bottom-2 left-2 text-white text-xs font-semibold">
                      Click to view
                    </div>
                  </div>
                </div>

                {/* Project Details */}
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200">
                      {cert.projectName}
                    </h3>
                    <span className="text-sm font-semibold text-green-600 dark:text-green-400 bg-green-100 dark:bg-green-900/20 px-3 py-1 rounded-full">
                      {cert.projectValue}
                    </span>
                  </div>
                  
                  <p className="text-blue-600 dark:text-blue-400 font-medium mb-2">
                    {cert.client}
                  </p>
                  
                  <p className="text-gray-500 dark:text-gray-400 text-sm mb-3">
                    Completed: {cert.completionDate}
                  </p>

                  <div className="flex flex-wrap gap-1 mb-4">
                    {cert.technologies.map((tech, idx) => (
                      <span key={idx} className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-xs text-gray-600 dark:text-gray-300 rounded">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex mb-3">
                    {renderStars(cert.rating)}
                  </div>

                  <blockquote className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed italic">
                    &ldquo;{cert.feedback}&rdquo;
                  </blockquote>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Summary Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          <div className="text-center">
            <div className="text-4xl font-bold text-green-600 dark:text-green-400 mb-2">4</div>
            <div className="text-gray-600 dark:text-gray-300">Certified Projects</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">$55.5K</div>
            <div className="text-gray-600 dark:text-gray-300">Total Project Value</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-purple-600 dark:text-purple-400 mb-2">100%</div>
            <div className="text-gray-600 dark:text-gray-300">On-Time Delivery</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-yellow-600 dark:text-yellow-400 mb-2">5.0</div>
            <div className="text-gray-600 dark:text-gray-300">Average Rating</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 