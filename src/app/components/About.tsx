'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function About() {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-800 to-gray-900 relative overflow-hidden">
      {/* Animated border gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20 animate-pulse"></div>
      <div className="absolute inset-[1px] bg-gradient-to-br from-gray-800 to-gray-900"></div>
      
      <div className="container mx-auto px-4">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center mb-16 relative z-10"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            About Me
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Passionate developer crafting digital solutions that make a difference
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto relative z-10">
          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative w-80 h-80 mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full animate-pulse opacity-30 blur-xl"></div>
              <div className="absolute inset-4 bg-gray-800 rounded-full flex items-center justify-center shadow-2xl overflow-hidden">
                <Image
                  src="/photo_2025-07-01_22-31-26-removebg-preview (1).png"
                  alt="Natnael Darsema"
                  width={288}
                  height={288}
                  className="rounded-full object-cover w-full h-full"
                />
              </div>
            </div>
          </motion.div>

          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4">
                My Journey
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                I&apos;m a passionate Full-Stack Developer with a deep love for creating innovative web solutions. 
                My journey in web development began with curiosity and has evolved into a commitment to 
                building scalable, user-centric applications that solve real-world problems.
              </p>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                I specialize in modern JavaScript frameworks like React and Node.js, with a strong focus 
                on TypeScript for type-safe development. My experience spans from building e-commerce 
                platforms to educational management systems, always prioritizing clean code and optimal performance.
              </p>
            </div>

            {/* Key Highlights */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-lg p-4 border border-gray-200 dark:border-gray-700">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-lg opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                <div className="flex items-center mb-2">
                  <span className="text-2xl mr-3">🎯</span>
                  <h4 className="font-semibold text-gray-800 dark:text-gray-200">Problem Solver</h4>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  I love tackling complex challenges and finding elegant solutions
                </p>
              </div>
              
              <div className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-lg p-4 border border-gray-200 dark:border-gray-700">
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-blue-500/10 rounded-lg opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                <div className="flex items-center mb-2">
                  <span className="text-2xl mr-3">🚀</span>
                  <h4 className="font-semibold text-gray-800 dark:text-gray-200">Fast Learner</h4>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Always eager to learn new technologies and best practices
                </p>
              </div>
              
              <div className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-lg p-4 border border-gray-200 dark:border-gray-700">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-lg opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                <div className="flex items-center mb-2">
                  <span className="text-2xl mr-3">🤝</span>
                  <h4 className="font-semibold text-gray-800 dark:text-gray-200">Team Player</h4>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Collaborative approach with strong communication skills
                </p>
              </div>
              
              <div className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-lg p-4 border border-gray-200 dark:border-gray-700">
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/10 to-orange-500/10 rounded-lg opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                <div className="flex items-center mb-2">
                  <span className="text-2xl mr-3">💡</span>
                  <h4 className="font-semibold text-gray-800 dark:text-gray-200">Innovative</h4>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Creative thinking to deliver unique user experiences
                </p>
              </div>
            </div>

            {/* Current Focus */}
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-lg p-6 border border-blue-200 dark:border-blue-800">
              <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2 flex items-center">
                <span className="text-xl mr-2">🎯</span>
                Currently Focused On
              </h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Building scalable web applications, contributing to open-source projects, 
                and exploring emerging technologies like AI/ML integration in web development.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 