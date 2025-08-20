import { motion } from 'framer-motion';
import CodeBackground from './CodeBackground';

const skillData = [
  {
    category: 'Frontend',
    icon: '🖥️',
    skills: [
      { name: 'React', level: 95 },
      { name: 'Next.js', level: 70 },
      { name: 'Tailwind CSS', level: 92 },
      { name: 'TypeScript', level: 80 },
    ],
  },
  {
    category: 'Backend',
    icon: '🛠️',
    skills: [
      { name: 'Node.js', level: 80 },
      { name: 'Express', level: 75 },
    ],
  },
  {
    category: 'Tools',
    icon: '⚙️',
    skills: [
      { name: 'Git', level: 90 },
      { name: 'Figma', level: 70 },
      { name: 'Vercel', level: 85 },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 relative overflow-hidden">
      <CodeBackground />
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center mb-14 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent relative z-10"
        >
          Skills &amp; Tools
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-12 relative z-10">
          {skillData.map((group) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-gray-800/70 backdrop-blur-lg rounded-2xl shadow-xl p-8 flex flex-col items-center border border-gray-700 hover:scale-105 hover:border-blue-500/50 transition-all duration-500 relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-purple-600/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="text-5xl mb-8 relative z-10">{group.icon}</div>
              <h3 className="text-2xl font-semibold mb-10 text-blue-300 relative z-10">
                {group.category}
              </h3>
              <ul className="w-full space-y-6 relative z-10">
                {group.skills.map((skill) => (
                  <li key={skill.name} className="w-full">
                    <div className="flex justify-between mb-2">
                      <span className="font-medium text-gray-200">{skill.name}</span>
                      <span className="text-sm text-blue-400 font-bold">{skill.level}%</span>
                    </div>
                    <div className="w-full h-3 bg-gray-700 rounded-full overflow-hidden shadow-inner">
                      <div
                        className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-1000 shadow-lg"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}