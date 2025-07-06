export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Natnael Darsema",
    "jobTitle": "Full-Stack Developer",
    "description": "Passionate Full-Stack Developer specializing in React, Node.js, and TypeScript. Building scalable web applications and creating exceptional digital experiences.",
    "url": "https://your-domain.com",
    "image": "https://your-domain.com/photo_2025-07-01_22-31-26-removebg-preview (1).png",
    "sameAs": [
      "https://github.com/Nati-darse",
      "https://linkedin.com/in/nathnael-darsema",
      "https://twitter.com/nati_sha29"
    ],
    "worksFor": {
      "@type": "Organization",
      "name": "Freelance"
    },
    "knowsAbout": [
      "React",
      "Node.js",
      "TypeScript",
      "JavaScript",
      "Next.js",
      "Tailwind CSS",
      "MongoDB",
      "Express.js",
      "Web Development",
      "Full-Stack Development"
    ],
    "hasOccupation": {
      "@type": "Occupation",
      "name": "Full-Stack Developer",
      "description": "Developing web applications using modern technologies"
    },
    "alumniOf": {
      "@type": "EducationalOrganization",
      "name": "University of Gondar"
    },
    "knowsLanguage": "English"
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
} 