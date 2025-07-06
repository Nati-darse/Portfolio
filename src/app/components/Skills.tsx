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
    <section id="skills" className="py-20 bg-gradient-to-br from-blue-50 to-purple-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-14 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Skills &amp; Tools
        </h2>
        <div className="grid md:grid-cols-3 gap-12">
          {skillData.map((group) => (
            <div
              key={group.category}
              className="bg-white/70 dark:bg-gray-900/70 backdrop-blur-lg rounded-2xl shadow-xl p-8 flex flex-col items-center border border-gray-200 dark:border-gray-700 hover:scale-105 transition-transform duration-300 relative"
            >
              <div className="text-5xl mb-6 relative z-10">{group.icon}</div>
              <h3 className="text-2xl font-semibold mb-8 text-blue-700 dark:text-blue-300 relative z-10">
                {group.category}
              </h3>
              <ul className="w-full space-y-8 relative z-10">
                {group.skills.map((skill) => (
                  <li key={skill.name} className="w-full">
                    <div className="flex justify-between mb-2">
                      <span className="font-medium text-gray-700 dark:text-gray-200">{skill.name}</span>
                      <span className="text-sm text-blue-600 dark:text-blue-400 font-bold">{skill.level}%</span>
                    </div>
                    <div className="w-full h-3 bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-1000"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}