interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  demoUrl?: string;
  codeUrl?: string;
}

export default function ProjectCard({
  title,
  description,
  tags,
  demoUrl,
  codeUrl,
}: ProjectCardProps) {
  return (
    <div className="border rounded-lg p-6 hover:shadow-lg transition-shadow">
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="mt-2 text-gray-600">{description}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span key={tag} className="px-2 py-1 bg-gray-100 rounded-md text-sm">
            {tag}
          </span>
        ))}
      </div>
      <div className="mt-6 space-x-3">
        {demoUrl && (
          <a
            href={demoUrl}
            target="_blank"
            className="text-blue-600 hover:underline"
          >
            Live Demo
          </a>
        )}
        {codeUrl && (
          <a
            href={codeUrl}
            target="_blank"
            className="text-gray-600 hover:underline"
          >
            View Code
          </a>
        )}
      </div>
    </div>
  );
}