import Image from 'next/image';
import { motion } from 'framer-motion';
import ProjectCard from './components/ProjectCard';
import Skills from './components/Skills';
import Contact from './components/Contact';


const projects = [
  {
    title: 'UN-ET UOG Charter Website',
    description: 'Platform for United Nations Ethiopia-University of Gondar partnership.',
    tags: ['React', 'Tailwind CSS'],
    demoUrl: 'https://un-et-uog-chapter.vercel.app/',
    codeUrl: 'https://github.com/Nati-darse/UN-ET-UOG-Chapter.git',
  },
  {
    title: 'School Management System',
    description: 'Streamlined admin workflows for educators and students.',
    tags: ['React', 'Node.js', 'MongoDB'],
    demoUrl: '#',
    codeUrl: 'https://github.com/Nati-darse/school-management-system.git',
  },
  {
    title: 'Gebeya Agricultural marketing website',
    description: 'A Platform that connect farmers in Rular area with merchants in Urban.',
    tags: ['React', 'Node.js', 'MongoDB'],
    demoUrl: 'https://gebeya-h2bx.vercel.app/',
    codeUrl: 'https://github.com/Nati-darse/Gebeya.git',
  },
  {
    title: 'Misgana Music player ',
    description: 'A Platform to listen Music.',
    tags: ['React', 'Node.js', 'MongoDB'],
    demoUrl: 'https://migana-music-player.vercel.app/',
    codeUrl: 'https://github.com/Nati-darse/Music-Player.git',
  },
  {
    title: 'Event Easy ',
    description: 'An event recommendation system.',
    tags: ['React', 'Node.js', 'MongoDB'],
    demoUrl: 'https://event-easy-omega.vercel.app/',
    codeUrl: 'https://github.com/Nati-darse/Event-Easy.git',
  },
];



export default function Home() {
  return (
    <main>
       <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center py-20 px-4"
      >
      {/* Hero Section */}
      <section className="text-center py-20 px-4">
        <div className="mx-auto max-w-3xl">
          {/* Add Avatar (replace with your image) */}
          <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-blue-100">
            <Image
              src="/natu.jpg"  // Replace with your image path (store in /public)
              alt="Natnael Darsema"
              width={128}
              height={128}
              className="object-cover"
            />
          </div>
          <h1 className="text-4xl font-bold text-blue-700">Natnael Darsema</h1>
          <p className="mt-4 text-xl text-gray-600">
            Frontend Developer | Javascript & Typescript | React & Next.js Specialist
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <a
              href="#projects"
              className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="px-6 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors"
            >
              Contact Me
            </a>
          </div>
        </div>
      </section>
      {/* Projects Section */}
      <section id="projects" className="py-16 container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </section>
      <Skills />
      <Contact />
      </motion.section>
    </main>
  );
}