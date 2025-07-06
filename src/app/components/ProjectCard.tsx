import Image from 'next/image';

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  demoUrl?: string;
  codeUrl?: string;
  image?: string;
  featured?: boolean;
  features?: string[];
  techStack?: string[];
}

const techIcons: { [key: string]: string } = {
  'React': '⚛️',
  'Next.js': '▲',
  'TypeScript': '📘',
  'JavaScript': '🟨',
  'Node.js': '🟢',
  'Express': '🚂',
  'MongoDB': '🍃',
  'Tailwind CSS': '🎨',
  'CSS': '💅',
  'HTML': '🌐'
};

export default function ProjectCard({
  title,
  description,
  tags,
  demoUrl,
  codeUrl,
  image,
  featured,
  features = [],
  techStack = []
}: ProjectCardProps) {
  return (
    <div className="relative bg-gray-800/60 backdrop-blur-lg border border-gray-700 rounded-2xl p-6 shadow-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl overflow-hidden group">
      {/* Featured Badge */}
      {featured && (
        <span className="absolute top-4 left-4 bg-gradient-to-r from-pink-500 to-purple-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg z-10">
          ⭐ Featured
        </span>
      )}
      
      {/* Project Image/Icon */}
      {image && (
        <div className="w-16 h-16 mb-4 mx-auto flex items-center justify-center rounded-xl bg-gradient-to-br from-gray-800 to-gray-700 shadow-md">
          <Image src={image} alt={title} width={48} height={48} className="object-contain" />
        </div>
      )}
      
      <h3 className="text-2xl font-bold text-blue-300 mb-2 group-hover:text-purple-400 transition-colors duration-300">
        {title}
      </h3>
      
      <p className="mt-2 text-gray-300 mb-4 min-h-[48px] leading-relaxed">
        {description}
      </p>

      {/* Key Features */}
      {features.length > 0 && (
        <div className="mb-4">
          <h4 className="text-sm font-semibold text-gray-400 mb-2">Key Features:</h4>
          <ul className="space-y-1">
            {features.map((feature, index) => (
              <li key={index} className="text-xs text-gray-300 flex items-center">
                <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                {feature}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Tech Stack Icons */}
      {techStack.length > 0 && (
        <div className="mb-4">
          <h4 className="text-sm font-semibold text-gray-400 mb-2">Tech Stack:</h4>
          <div className="flex flex-wrap gap-2">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="inline-flex items-center px-2 py-1 bg-gray-800 rounded-md text-xs font-medium text-gray-300"
                title={tech}
              >
                <span className="mr-1">{techIcons[tech] || '🔧'}</span>
                {tech}
              </span>
            ))}
          </div>
        </div>
      )}
      
      {/* Tags */}
      <div className="mt-2 flex flex-wrap gap-2 justify-center">
        {tags.map((tag) => (
          <span
            key={tag}
            className="px-3 py-1 bg-gradient-to-r from-blue-900 to-purple-900 text-blue-200 rounded-full text-xs font-semibold shadow-sm border border-blue-800"
          >
            #{tag}
          </span>
        ))}
      </div>
      
      {/* Action Buttons */}
      <div className="mt-6 flex justify-center gap-4">
        {demoUrl && demoUrl !== '#' && (
          <a
            href={demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View live demo of ${title}`}
            className="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold shadow hover:scale-105 hover:shadow-xl transition-all duration-300 flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            <span role="img" aria-label="globe">🌐</span>
            Live Demo
          </a>
        )}
        {codeUrl && (
          <a
            href={codeUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View source code of ${title}`}
            className="px-4 py-2 border-2 border-blue-400 text-blue-400 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300 hover:scale-105 flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            <span role="img" aria-label="folder">📁</span>
            View Code
          </a>
        )}
      </div>
    </div>
  );
}