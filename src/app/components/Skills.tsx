'use client';

import { motion } from 'framer-motion';

interface Skill {
  name: string;
  level: number;
  category: string;
}

const skillsData: Skill[] = [
  { name: 'React', level: 90, category: 'Frontend' },
  { name: 'Next.js', level: 65, category: 'Frontend' },
  { name: 'TypeScript', level: 60, category: 'Frontend' },
  { name: 'Tailwind CSS', level: 85, category: 'Frontend' },
  { name: 'Node.js', level: 75, category: 'Backend' },
  { name: 'Express', level: 70, category: 'Backend' },
  { name: 'MongoDB', level: 65, category: 'Backend' },
  { name: 'PostgreSQL', level: 70, category: 'Backend' },
];

export default function Skills() {
  const categories = [...new Set(skillsData.map(skill => skill.category))];

  return (
    <section id="skills" className="py-20 bg-gray-850">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-bold text-center mb-16 text-purple-500"
        >
          Skills & Technologies
        </motion.h2>

        {categories.map((category, categoryIndex) => (
          <motion.div
            key={category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
            className="mb-12"
          >
            <h3 className="text-2xl font-semibold mb-6 text-blue-600">{category}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {skillsData
                .filter(skill => skill.category === category)
                .map((skill, index) => ( 
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-gray-800">{skill.name}</span>
                      <span className="text-sm text-gray-600">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                        className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full"
                      />
                    </div>
                  </motion.div>
                ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}