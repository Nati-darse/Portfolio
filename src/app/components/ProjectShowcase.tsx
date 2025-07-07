import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

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

interface ProjectShowcaseProps {
  projects: Project[];
}

const ProjectShowcase: React.FC<ProjectShowcaseProps> = ({ projects }) => {
  const [selected, setSelected] = useState(0);

  return (
    <section className="w-full flex flex-col md:flex-row gap-8 md:gap-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-3xl shadow-2xl overflow-hidden">
      {/* Left: Project Thumbnails */}
      <div className="md:w-1/3 w-full flex md:flex-col flex-row md:overflow-y-auto overflow-x-auto md:h-[600px] h-40 bg-gray-900/80 p-4 md:p-8 gap-4 md:gap-6">
        {projects.map((project, idx) => (
          <button
            key={project.title}
            onClick={() => setSelected(idx)}
            className={`group relative flex-shrink-0 rounded-2xl overflow-hidden border-2 transition-all duration-300 ${selected === idx ? 'border-blue-500 scale-105 shadow-xl' : 'border-gray-700 hover:border-blue-400 hover:scale-105'}`}
            style={{ width: '96px', height: '96px' }}
            aria-label={`Show details for ${project.title}`}
          >
            <Image
              src={project.image}
              alt={project.title}
              width={96}
              height={96}
              className="object-cover w-full h-full group-hover:opacity-90 transition-opacity duration-200"
            />
            {selected === idx && (
              <span className="absolute inset-0 ring-2 ring-blue-500 rounded-2xl pointer-events-none"></span>
            )}
          </button>
        ))}
      </div>

      {/* Right: Project Details */}
      <div className="md:w-2/3 w-full flex items-center justify-center p-6 md:p-12">
        <AnimatePresence mode="wait">
          <motion.div
            key={projects[selected].title}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{ duration: 0.5 }}
            className="w-full max-w-xl bg-gray-800/80 rounded-2xl p-8 shadow-lg"
          >
            <h3 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-2">
              {projects[selected].title}
            </h3>
            <p className="text-gray-300 text-lg mb-4">{projects[selected].description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {projects[selected].tags.map(tag => (
                <span key={tag} className="px-3 py-1 bg-gray-700 rounded-full text-xs text-blue-300 font-semibold">
                  {tag}
                </span>
              ))}
            </div>
            <ul className="list-disc list-inside text-gray-400 mb-4 space-y-1">
              {projects[selected].features.map(f => (
                <li key={f}>{f}</li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-2 mb-4">
              {projects[selected].techStack.map(tech => (
                <span key={tech} className="px-2 py-1 bg-gray-900 rounded text-xs text-purple-300 border border-gray-700">
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex gap-4 mt-6">
              {projects[selected].demoUrl && projects[selected].demoUrl !== '#' && (
                <a
                  href={projects[selected].demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition"
                >
                  Live Demo <FaExternalLinkAlt className="w-4 h-4" />
                </a>
              )}
              <a
                href={projects[selected].codeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-gray-700 text-white rounded-full font-semibold hover:bg-gray-600 transition"
              >
                Code <FaGithub className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default ProjectShowcase; 