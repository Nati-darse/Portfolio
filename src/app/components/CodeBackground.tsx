'use client';

import { useEffect, useRef } from 'react';

const codeSnippets = [
  'const developer = "Natnael";',
  'function buildAmazingApps() {',
  '  return "success";',
  '}',
  'import React from "react";',
  'export default function App() {',
  '  const [state, setState] = useState();',
  '  useEffect(() => {',
  '    // Magic happens here',
  '  }, []);',
  '  return <div>Hello World</div>;',
  '}',
  'npm install awesome-package',
  'git commit -m "feat: new feature"',
  'const api = await fetch("/api/data");',
  'console.log("Building the future...");'
];

export default function CodeBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    const particles: Array<{
      x: number;
      y: number;
      text: string;
      speed: number;
      opacity: number;
      fontSize: number;
    }> = [];

    // Create floating code snippets
    for (let i = 0; i < 15; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        text: codeSnippets[Math.floor(Math.random() * codeSnippets.length)],
        speed: 0.2 + Math.random() * 0.5,
        opacity: 0.1 + Math.random() * 0.2,
        fontSize: 12 + Math.random() * 8
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      
      particles.forEach(particle => {
        ctx.font = `${particle.fontSize}px 'Courier New', monospace`;
        ctx.fillStyle = `rgba(100, 200, 255, ${particle.opacity})`;
        ctx.fillText(particle.text, particle.x, particle.y);
        
        particle.y -= particle.speed;
        
        if (particle.y < -20) {
          particle.y = height + 20;
          particle.x = Math.random() * width;
          particle.text = codeSnippets[Math.floor(Math.random() * codeSnippets.length)];
        }
      });
      
      requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none opacity-30"
      aria-hidden="true"
    />
  );
}