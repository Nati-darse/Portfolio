import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';

interface WalkingAvatarProps {
  onArrive?: () => void;
}

export default function WalkingAvatar({ onArrive }: WalkingAvatarProps) {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({ x: '50vw' }).then(() => {
      if (onArrive) onArrive();
    });
  }, [controls, onArrive]);

  return (
    <motion.div
      initial={{ x: '-20vw' }}
      animate={controls}
      transition={{ duration: 2, ease: 'easeInOut' }}
      className="absolute left-0 top-1/2 -translate-y-1/2 z-20"
      style={{ width: '8rem', height: '8rem' }}
    >
      <svg viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        {/* Head */}
        <ellipse cx="64" cy="28" rx="16" ry="16" fill="#f5e9e2" />
        {/* Hair */}
        <ellipse cx="64" cy="22" rx="16" ry="7" fill="#23272f" />
        {/* Hoodie */}
        <ellipse cx="64" cy="48" rx="20" ry="16" fill="#2d3748" />
        {/* Body */}
        <rect x="48" y="44" width="32" height="32" rx="12" fill="#2d3748" />
        {/* Hoodie pocket */}
        <rect x="60" y="64" width="8" height="10" rx="3" fill="#374151" />
        {/* Headphones */}
        <ellipse cx="52" cy="28" rx="3" ry="7" fill="#444" />
        <ellipse cx="76" cy="28" rx="3" ry="7" fill="#444" />
        <rect x="52" y="20" width="24" height="4" rx="2" fill="#444" />
        {/* Bag */}
        <rect x="80" y="60" width="12" height="18" rx="5" fill="#7ed6fb" />
        {/* Arm (front, swinging) */}
        <motion.rect
          x="80" y="44" width="8" height="28" rx="4" fill="#f5e9e2"
          animate={{ rotate: [30, -30, 30] }}
          transition={{ duration: 1, repeat: Infinity }}
          style={{ originX: 0.5, originY: 0 }}
        />
        {/* Arm (back, swinging) */}
        <motion.rect
          x="40" y="44" width="8" height="28" rx="4" fill="#f5e9e2"
          animate={{ rotate: [-30, 30, -30] }}
          transition={{ duration: 1, repeat: Infinity }}
          style={{ originX: 0.5, originY: 0 }}
        />
        {/* Leg (front, swinging) */}
        <motion.rect
          x="70" y="76" width="8" height="32" rx="4" fill="#23272f"
          animate={{ rotate: [-30, 30, -30] }}
          transition={{ duration: 1, repeat: Infinity }}
          style={{ originX: 0.5, originY: 0 }}
        />
        {/* Leg (back, swinging) */}
        <motion.rect
          x="50" y="76" width="8" height="32" rx="4" fill="#23272f"
          animate={{ rotate: [30, -30, 30] }}
          transition={{ duration: 1, repeat: Infinity }}
          style={{ originX: 0.5, originY: 0 }}
        />
        {/* Eyes (animated blink) */}
        <ellipse cx="60" cy="32" rx="2" ry="1" fill="#23272f">
          <animate attributeName="ry" values="1;0.2;1" keyTimes="0;0.5;1" dur="3s" repeatCount="indefinite" />
        </ellipse>
        <ellipse cx="68" cy="32" rx="2" ry="1" fill="#23272f">
          <animate attributeName="ry" values="1;0.2;1" keyTimes="0;0.5;1" dur="3s" repeatCount="indefinite" />
        </ellipse>
        {/* Mouth */}
        <path d="M60 38 Q64 42 68 38" stroke="#c2996b" strokeWidth="2" fill="none" />
      </svg>
    </motion.div>
  );
} 