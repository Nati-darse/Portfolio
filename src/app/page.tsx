'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

import ProjectBook from './components/ProjectBook';
import Skills from './components/Skills';
import Contact from './components/Contact';
import About from './components/About';
import Footer from './components/Footer';
import Resume from './components/Resume';
import Testimonials from './components/Testimonials';
import ParticleNetwork from './components/ParticleNetwork';
// import Blog from './components/Blog';

const projects = [
  {
    title: 'Gebeya - Agricultural Marketing Platform',
    description: 'A comprehensive platform connecting rural farmers with urban merchants for agricultural marketing and trade.',
    tags: ['Full-Stack', 'E-commerce', 'Real-time'],
    demoUrl: 'https://gebeya-h2bx.vercel.app/',
    codeUrl: 'https://github.com/Nati-darse/Gebeya',
    image: '/natu.jpg',
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
    title: 'Event Easy - Event Discovery Platform',
    description: 'A comprehensive event discovery and management platform helping users find and organize events.',
    tags: ['Event Management', 'Social', 'Discovery'],
    demoUrl: 'https://event-easy-omega.vercel.app/',
    codeUrl: 'https://github.com/Nati-darse/Event-Easy',
    image: '/globe.svg',
    features: [
      'Event Discovery & Search',
      'User Registration System',
      'Event Creation & Management',
      'Real-time Updates',
      'Social Features'
    ],
    techStack: ['React', 'Node.js', 'Express', 'MongoDB', 'JavaScript']
  },
  {
    title: 'Eventeasy_F - Event Management System',
    description: 'Advanced event management system with enhanced features for event planning and coordination.',
    tags: ['Advanced', 'Management', 'Planning'],
    demoUrl: '#',
    codeUrl: 'https://github.com/Nati-darse/Eventeasy_F',
    image: '/next.svg',
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
    title: 'UN-ET UOG Charter Website',
    description: 'Official platform for United Nations Ethiopia-University of Gondar partnership and collaboration.',
    tags: ['Partnership', 'Official', 'Collaboration'],
    demoUrl: 'https://un-et-uog-chapter.vercel.app/',
    codeUrl: 'https://github.com/Nati-darse/UN-ET-UOG-Chapter',
    image: '/window.svg',
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

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 pt-16">
      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        {/* Background Pattern */}
        <ParticleNetwork />
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div className="absolute top-40 right-20 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-40 w-72 h-72 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-4000"></div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8"
          >
            <div className="relative w-40 h-40 mx-auto mb-8">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full animate-pulse"></div>
              <div className="absolute inset-2 bg-gray-800 rounded-full flex items-center justify-center overflow-hidden">
                <Image
                  src="/photo_2025-07-01_22-31-26-removebg-preview (1).png"
                  alt="Natnael Darsema"
                  width={144}
                  height={144}
                  className="rounded-full object-cover w-full h-full"
                />
              </div>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-6"
          >
            Natnael Darsema
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-2xl md:text-3xl font-semibold text-gray-200 mb-4"
          >
          
            Full-Stack Developer Building Scalable Web Solutions
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
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
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute bottom-16 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1 h-3 bg-gray-400 rounded-full mt-2"
            />
          </div>
        </motion.div>
      </motion.section>

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
      {/* <Blog /> */}
      <Contact />
      <Footer />
    </main>
  );
}