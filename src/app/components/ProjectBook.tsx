import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronLeft, FaChevronRight, FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

import CodeBackground from './CodeBackground';

interface Project {
  title: string;
  description: string;
  tags: string[];
  demoUrl: string;
  codeUrl: string;
  image: string;
  features: string[];
  techStack: string[];
}

interface ProjectBookProps {
  projects: Project[];
}

const pageVariants = {
  initial: (direction: number) => ({
    opacity: 0,
    x: direction > 0 ? 100 : -100,
    rotateY: direction > 0 ? 30 : -30,
    scale: 0.95,
  }),
  animate: {
    opacity: 1,
    x: 0,
    rotateY: 0,
    scale: 1,
    transition: { duration: 0.5 }
  },
  exit: (direction: number) => ({
    opacity: 0,
    x: direction < 0 ? 100 : -100,
    rotateY: direction < 0 ? 30 : -30,
    scale: 0.95,
    transition: { duration: 0.5 }
  })
};

const ProjectBook: React.FC<ProjectBookProps> = ({ projects }) => {
  const [page, setPage] = useState(0);
  const [direction, setDirection] = useState(0);

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setPage((prev) => {
      let next = prev + newDirection;
      if (next < 0) next = projects.length - 1;
      if (next >= projects.length) next = 0;
      return next;
    });
  };

  return (
    <section className="w-full flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 py-8 relative">
      <CodeBackground />
      {/* Left: Animated Project Image as Book Page */}
      <div className="md:w-1/2 w-full flex items-center justify-center relative z-10">
        <AnimatePresence custom={direction} mode="wait">
          <motion.div
            key={projects[page].title}
            custom={direction}
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="relative w-full max-w-2xl aspect-[16/9] bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-3xl shadow-2xl flex items-center justify-center overflow-hidden border-2 border-gray-700 hover:border-blue-500/50 transition-all duration-500"
            style={{ perspective: 1200 }}
          >
            <Image
              src={projects[page].image}
              alt={projects[page].title}
              fill
              className="object-cover rounded-2xl"
              style={{ zIndex: 1 }}
            />
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Right: Project Details */}
      <div className="md:w-1/2 w-full flex flex-col items-start justify-center max-w-xl relative z-10">
        <div className="flex items-center gap-4 mb-4">
          <button
            aria-label="Previous project"
            onClick={() => paginate(-1)}
            className="p-2 rounded-full bg-gray-800 hover:bg-blue-700 text-blue-400 hover:text-white transition-all duration-300 hover:scale-110 hover:shadow-lg"
          >
            <FaChevronLeft size={24} />
          </button>
          <span className="text-gray-400 text-sm">{page + 1} / {projects.length}</span>
          <button
            aria-label="Next project"
            onClick={() => paginate(1)}
            className="p-2 rounded-full bg-gray-800 hover:bg-blue-700 text-blue-400 hover:text-white transition-all duration-300 hover:scale-110 hover:shadow-lg"
          >
            <FaChevronRight size={24} />
          </button>
        </div>
        <h3 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-2">
          {projects[page].title}
        </h3>
        <p className="text-gray-300 text-lg mb-4">{projects[page].description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {projects[page].tags.map(tag => (
            <span key={tag} className="px-3 py-1 bg-gray-700 rounded-full text-xs text-blue-300 font-semibold">
              {tag}
            </span>
          ))}
        </div>
        <ul className="list-disc list-inside text-gray-400 mb-4 space-y-1">
          {projects[page].features.map(f => (
            <li key={f}>{f}</li>
          ))}
        </ul>
        <div className="flex flex-wrap gap-2 mb-4">
          {projects[page].techStack.map(tech => (
            <span key={tech} className="px-2 py-1 bg-gray-900 rounded text-xs text-purple-300 border border-gray-700">
              {tech}
            </span>
          ))}
        </div>
        <div className="flex gap-4 mt-6">
          {projects[page].demoUrl && projects[page].demoUrl !== '#' && (
            <a
              href={projects[page].demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              Live Demo <FaExternalLinkAlt className="w-4 h-4" />
            </a>
          )}
          <a
            href={projects[page].codeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 bg-gray-700 text-white rounded-full font-semibold hover:bg-gray-600 transition-all duration-300 hover:scale-105 hover:shadow-lg"
          >
            Code <FaGithub className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectBook; 