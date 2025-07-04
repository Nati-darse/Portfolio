export default function About() {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-3xl font-bold text-center mb-12">About Me</h2>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <p className="text-lg mb-4">
              I’m a <span className="font-semibold">Frontend Developer</span> passionate about building 
              responsive, accessible web applications with React and Next.js.
            </p>
            <p className="mb-4">
              My work on projects like the <span className="text-blue-600">UN-ET UOG Charter Website</span> 
              taught me how to collaborate with teams and deliver user-centric solutions.
            </p>
            <p>
              When not coding, I’m hiking or exploring Ethiopian jazz music.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Skills</h3>
            <div className="flex flex-wrap gap-2">
              {['React', 'Next.js', 'Tailwind CSS', 'JavaScript', 'Git', 'Figma'].map((skill) => (
                <span key={skill} className="px-3 py-1 bg-gray-100 rounded-full text-sm">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}