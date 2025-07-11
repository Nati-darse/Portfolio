import React, { useEffect, useState } from 'react';

interface TypewriterTextProps {
  text: string;
  className?: string;
  speed?: number; // ms per character
  onTyped?: () => void;
}

export default function TypewriterText({ text, className = '', speed = 60, onTyped }: TypewriterTextProps) {
  const [displayed, setDisplayed] = useState('');
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    let i = 0;
    setDisplayed('');
    setShowCursor(true);
    const type = () => {
      if (i <= text.length) {
        setDisplayed(text.slice(0, i));
        i++;
        setTimeout(type, speed);
      } else if (onTyped) {
        onTyped();
      }
    };
    type();
    return () => setShowCursor(false);
  }, [text, speed, onTyped]);

  useEffect(() => {
    const blink = setInterval(() => setShowCursor((c) => !c), 500);
    return () => clearInterval(blink);
  }, []);

  return (
    <span className={className}>
      {displayed}
      <span className={`inline-block w-2 ${showCursor ? 'opacity-100' : 'opacity-0'} animate-blink`}>|</span>
    </span>
  );
} 