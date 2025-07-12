'use client';

import { motion } from 'framer-motion';

import ProjectBook from './components/ProjectBook';
import Skills from './components/Skills';
import Contact from './components/Contact';
import About from './components/About';
import Footer from './components/Footer';
import Resume from './components/Resume';
import Testimonials from './components/Testimonials';
import JobCertificates from './components/JobCertificates';
import SittingAvatar from './components/WalkingAvatar';
import TypewriterText from './components/TypewriterText';
import React, { useState } from 'react';
// import Blog from './components/Blog';

const projects = [
  {
    title: 'Gebeya - Agricultural Marketing Platform',
    description: 'A comprehensive platform connecting rural farmers with urban merchants for agricultural marketing and trade.',
    tags: ['Full-Stack', 'E-commerce', 'Real-time'],
    demoUrl: 'https://gebeya-h2bx.vercel.app/',
    codeUrl: 'https://github.com/Nati-darse/Gebeya',
    image: '/projects/gebeya.png',
    featured: true,
    features: [
      'User Authentication & Authorization',
      'Real-time Chat System',
      'Payment Integration',
      'Product Management',
      'Order Tracking System'
    ],
    techStack: ['React', 'Node.js', 'Express', 'MongoDB', 'JavaScript']
  },
  {
    title: 'Eventeasy_F - Event Management System',
    description: 'Advanced event management system with enhanced features for event planning and coordination.',
    tags: ['Advanced', 'Management', 'Planning'],
    demoUrl: '#',
    codeUrl: 'https://github.com/Nati-darse/Eventeasy_F',
    image: '/projects/event.png',
    features: [
      'Advanced Event Planning',
      'Team Collaboration',
      'Calendar Integration',
      'Resource Management',
      'Analytics Dashboard'
    ],
    techStack: ['React', 'Express', 'JavaScript', 'CSS']
  },
  {
    title: 'UN-ET UOG Charter Website',
    description: 'Official platform for United Nations Ethiopia-University of Gondar partnership and collaboration.',
    tags: ['Partnership', 'Official', 'Collaboration'],
    demoUrl: 'https://un-et-uog-chapter.vercel.app/',
    codeUrl: 'https://github.com/Nati-darse/UN-ET-UOG-Chapter',
    image: '/projects/un.png',
    features: [
      'Partnership Information',
      'Event Management',
      'Resource Sharing',
      'Contact Forms',
      'News Updates'
    ],
    techStack: ['React', 'Tailwind CSS', 'JavaScript']
  },
  {
    title: 'ABFG Church Website',
    description: 'Modern church website built with TypeScript, featuring responsive design and interactive components.',
    tags: ['TypeScript', 'Next.js', 'Responsive'],
    demoUrl: '#',
    codeUrl: 'https://github.com/Nati-darse/ABFG-Church-',
    image: '/window.svg',
    features: [
      'Responsive Design',
      'Interactive Components',
      'SEO Optimized',
      'Fast Loading',
      'Modern UI/UX'
    ],
    techStack: ['TypeScript', 'React', 'Next.js', 'Tailwind CSS']
  },


  {
    title: 'School Management System',
    description: 'Comprehensive school management solution streamlining administrative workflows for educational institutions.',
    tags: ['Education', 'Admin', 'Management'],
    demoUrl: '#',
    codeUrl: 'https://github.com/Nati-darse/school-management-system',
    image: '/vercel.svg',
    features: [
      'Student Management',
      'Teacher Portal',
      'Grade Management',
      'Attendance Tracking',
      'Report Generation'
    ],
    techStack: ['React', 'Node.js', 'Express', 'MongoDB', 'JavaScript']
  },
  {
    title: 'GitHub Clone Project',
    description: 'A GitHub-inspired project showcasing modern web development practices and UI/UX design.',
    tags: ['UI/UX', 'Clone', 'Design'],
    demoUrl: '#',
    codeUrl: 'https://github.com/Nati-darse/GitHubCloneProject',
    image: '/file.svg',
    features: [
      'GitHub-like Interface',
      'Repository Management',
      'User Profiles',
      'Responsive Design',
      'Modern UI Components'
    ],
    techStack: ['React', 'JavaScript', 'CSS', 'HTML']
  },
  {
    title: 'Misgana Music Player',
    description: 'Modern music streaming platform with intuitive interface and comprehensive music library.',
    tags: ['Music', 'Streaming', 'Entertainment'],
    demoUrl: 'https://migana-music-player.vercel.app/',
    codeUrl: 'https://github.com/Nati-darse/Music-Player',
    image: '/file.svg',
    features: [
      'Music Streaming',
      'Playlist Management',
      'User Authentication',
      'Search & Discovery',
      'Responsive Player'
    ],
    techStack: ['React', 'Node.js', 'MongoDB', 'JavaScript']
  }
];

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function Home() {
  const [showTagline, setShowTagline] = useState(false);
  const handleNameTyped = () => setShowTagline(true);

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 pt-16">
      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
        {/* Sitting Avatar above the text */}
        <div className="w-full flex justify-center mt-12 mb-2">
          <SittingAvatar />
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-2">
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-6">
            <TypewriterText text="Natnael Darsema" speed={90} onTyped={handleNameTyped} />
          </h1>
          {showTagline && (
            <p className="text-2xl md:text-3xl font-semibold text-gray-200 mb-4">
              <TypewriterText text="Full-Stack Developer Building Scalable Web Solutions" speed={45} />
            </p>
          )}
        </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="text-lg md:text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed"
          >
            Passionate about creating exceptional digital experiences with modern technologies. 
            Specializing in React, Node.js, and TypeScript to build robust, scalable applications 
            that solve real-world problems and delight users.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <a
              href="#projects"
              className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <span className="relative z-10">Explore My Work</span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
            <a
              href="#contact"
              className="px-8 py-4 border-2 border-blue-400 text-blue-400 rounded-full font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300 hover:scale-105"
            >
              Let&apos;s Connect
            </a>
          </motion.div>

          {/* Tech Stack Preview */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="mt-16 mb-32 flex flex-wrap justify-center gap-4"
          >
            {['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Node.js'].map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 bg-gray-800/80 backdrop-blur-sm rounded-full text-sm font-medium text-gray-200 border border-gray-700"
              >
                {tech}
              </span>
            ))}
          </motion.div>
        </section>

      {/* Projects Section */}
      <motion.section 
        id="projects"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="py-20 px-4"
      >
        <div className="container mx-auto max-w-6xl">
          <motion.div
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
              Featured Projects
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              A showcase of my latest work, demonstrating modern web development practices and creative problem-solving
            </p>
          </motion.div>

          <ProjectBook projects={projects} />
        </div>
      </motion.section>

      <About />
      <Skills />
      <Resume />
      <Testimonials />
      <JobCertificates />
      {/* <Blog /> */}
      <Contact />
      <Footer />
    </main>
  );
}