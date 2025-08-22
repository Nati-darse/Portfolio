'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import CodeBackground from './CodeBackground';

export default function Resume() {
  const experience = [
    {
      title: 'Full-Stack Developer',
      company: 'Freelance',
      period: '2023 - Present',
      description: 'Building scalable web applications for clients across various industries, specializing in React, Node.js, and modern web technologies.',
      achievements: [
        'Developed full-stack applications with modern tech stack',
        'Improved application performance by 40% through optimization',
        'Collaborated with 5+ clients to deliver custom solutions'
      ]
    },
    {
      title: 'UN-ET ondar  Developer',
      company: 'Organization Contract ',
      period: 'Feb 2025 - Mar 2025',
      description: 'Building scalable web applications for clients across various industries, specializing in React, Node.js, and modern web technologies.',
      achievements: [
        'Developed full-stack applications with modern tech stack',
        'Improved application performance by 40% through optimization',
        'Collaborated with 5+ clients to deliver custom solutions'
      ]
    },
    {
      title: 'Frontend Developer',
      company: 'Personal Projects',
      period: '2022 - 2023',
      description: 'Focused on building responsive, user-friendly interfaces and learning modern frontend frameworks.',
      achievements: [
        'Built 10+ React applications with TypeScript',
        'Mastered responsive design and accessibility best practices',
        'Contributed to open-source projects on GitHub'
      ]
    }
  ];

  const education = [
    {
      degree: 'Bachelor of Computer Science',
      institution: 'University of Gondar',
      period: '2020 - 2024',
      description: 'Focused on software engineering, algorithms, and web development fundamentals.'
    }
  ];

  const certifications = [
    {
      name: 'Frontend WebDeveloper',
      issuer: 'ALX',
      date: '2025',
      link: 'https://member.theroom.com/alx',
      image: '/certificates/front-end-web-development-certificate-natnael-darsema.png' // Add your certificate image path here
    },
    
  ];

  return (
    <section id="resume" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-800 dark:to-gray-900 relative overflow-hidden">
      <div className="dark:block hidden">
        <CodeBackground />
      </div>
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 relative z-10"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Resume & Experience
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            My professional journey, education, and certifications that shape my expertise
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 relative z-10">
          {/* Experience */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-2"
          >
            <div className="bg-white/70 dark:bg-gray-900/70 backdrop-blur-lg rounded-2xl shadow-xl p-8 border border-gray-200 dark:border-gray-700 hover:border-blue-500/50 transition-all duration-500">
              <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-6 flex items-center">
                <span className="text-3xl mr-3">💼</span>
                Professional Experience
              </h3>
              <div className="space-y-8">
                {experience.map((exp, index) => (
                  <div key={index} className="relative pl-8 border-l-2 border-blue-500 hover:border-purple-500 transition-colors duration-500">
                    <div className="absolute -left-2.5 top-0 w-5 h-5 bg-blue-500 rounded-full hover:bg-purple-500 transition-colors duration-500 hover:scale-125"></div>
                    <div className="mb-2">
                      <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-200">{exp.title}</h4>
                      <p className="text-blue-600 dark:text-blue-400 font-medium">{exp.company}</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">{exp.period}</p>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 mb-3">{exp.description}</p>
                    <ul className="space-y-1">
                      {exp.achievements.map((achievement, idx) => (
                        <li key={idx} className="text-sm text-gray-600 dark:text-gray-300 flex items-start">
                          <span className="text-blue-500 mr-2">•</span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Education & Certifications */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Education */}
            <div className="bg-white/70 dark:bg-gray-900/70 backdrop-blur-lg rounded-2xl shadow-xl p-8 border border-gray-200 dark:border-gray-700 hover:border-green-500/50 transition-all duration-500">
              <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-6 flex items-center">
                <span className="text-3xl mr-3">🎓</span>
                Education
              </h3>
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <div key={index}>
                    <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200">{edu.degree}</h4>
                    <p className="text-blue-600 dark:text-blue-400 font-medium">{edu.institution}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">{edu.period}</p>
                    <p className="text-sm text-gray-600 dark:text-gray-300">{edu.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div className="bg-white/70 dark:bg-gray-900/70 backdrop-blur-lg rounded-2xl shadow-xl p-8 border border-gray-200 dark:border-gray-700 hover:border-yellow-500/50 transition-all duration-500">
              <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-6 flex items-center">
                <span className="text-3xl mr-3">🏆</span>
                Certifications
              </h3>
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <div key={index} className="p-4 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-lg border border-blue-200 dark:border-blue-800 hover:shadow-lg hover:scale-105 transition-all duration-300">
                    <div className="flex items-start gap-4">
                      {cert.image && (
                        <div className="flex-shrink-0">
                          <Image
                            src={cert.image}
                            alt={`${cert.name} certificate`}
                            width={80}
                            height={60}
                            className="rounded-lg object-cover border border-gray-200 dark:border-gray-600 cursor-pointer hover:scale-105 transition-transform duration-200"
                            onClick={() => window.open(cert.image, '_blank')}
                          />
                        </div>
                      )}
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-800 dark:text-gray-200">{cert.name}</h4>
                        <p className="text-blue-600 dark:text-blue-400 text-sm">{cert.issuer}</p>
                        <p className="text-gray-500 dark:text-gray-400 text-sm">{cert.date}</p>
                        {cert.link && cert.link !== '#' && (
                          <a
                            href={cert.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 dark:text-blue-400 text-sm hover:underline mt-1 inline-block"
                          >
                            View Certificate →
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Download Resume Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <a
            href="/Natnael Darsema_  Resume.pdf"
            download
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold hover:scale-105 hover:shadow-2xl transition-all duration-300 relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <span className="text-2xl mr-3">📄</span>
            <span className="relative z-10">Download Full Resume (PDF)</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
} 