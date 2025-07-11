import React from 'react';

// Side view: developer sitting and typing on PC
export default function AnimatedAvatar() {
  return (
    <div className="w-56 h-56 mx-auto relative">
      <svg
        viewBox="0 0 224 224"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        {/* Desk */}
        <rect x="40" y="170" width="144" height="18" rx="8" fill="#b0b4ba" />
        {/* Chair (side) */}
        <rect x="60" y="140" width="18" height="44" rx="9" fill="#23272f" />
        {/* Body (side) */}
        <rect x="80" y="120" width="32" height="48" rx="14" fill="#3b4252" />
        {/* Head (side) */}
        <ellipse cx="100" cy="110" rx="14" ry="16" fill="#f5e9e2" />
        {/* Hair */}
        <ellipse cx="100" cy="104" rx="14" ry="7" fill="#23272f" />
        {/* Arm (back, on desk) */}
        <rect x="90" y="150" width="8" height="28" rx="4" fill="#f5e9e2" transform="rotate(-20 90 150)" />
        {/* Arm (front, typing, animated) */}
        <rect x="108" y="150" width="8" height="28" rx="4" fill="#f5e9e2">
          <animateTransform attributeName="transform" type="rotate" from="10 112 150" to="20 112 150" dur="0.7s" repeatCount="indefinite" direction="alternate" />
        </rect>
        {/* PC Monitor (side) */}
        <rect x="140" y="120" width="16" height="38" rx="5" fill="#23272f" stroke="#444" strokeWidth="3" />
        {/* Glowing screen (side) */}
        <rect x="142" y="124" width="12" height="30" rx="3" fill="#7ed6fb">
          <animate attributeName="fill" values="#7ed6fb;#b2f7ef;#7ed6fb" dur="2s" repeatCount="indefinite" />
        </rect>
        {/* Animated code lines (vertical) */}
        <rect x="144" y="128" width="8" height="3" rx="1.5" fill="#23272f">
          <animate attributeName="width" values="8;4;8" dur="1.2s" repeatCount="indefinite" />
        </rect>
        <rect x="144" y="134" width="6" height="3" rx="1.5" fill="#23272f">
          <animate attributeName="width" values="6;8;6" dur="1.2s" repeatCount="indefinite" />
        </rect>
        <rect x="144" y="140" width="7" height="3" rx="1.5" fill="#23272f">
          <animate attributeName="width" values="7;5;7" dur="1.2s" repeatCount="indefinite" />
        </rect>
        {/* Monitor stand */}
        <rect x="146" y="158" width="8" height="8" rx="3" fill="#888" />
        {/* Keyboard (side) */}
        <rect x="130" y="164" width="28" height="6" rx="2" fill="#d1d5db" />
        {/* Eyes (animated blink, side) */}
        <ellipse cx="104" cy="112" rx="2.2" ry="1.1" fill="#23272f">
          <animate attributeName="ry" values="1.1;0.2;1.1" keyTimes="0;0.5;1" dur="3s" repeatCount="indefinite" />
        </ellipse>
        {/* Mouth (side) */}
        <path d="M104 118 Q106 120 108 118" stroke="#c2996b" strokeWidth="2" fill="none" />
        {/* Coffee cup on desk */}
        <ellipse cx="60" cy="184" rx="7" ry="7" fill="#fff" stroke="#bbb" strokeWidth="2" />
        <rect x="56" y="180" width="7" height="7" rx="2" fill="#e0c9a6" />
      </svg>
    </div>
  );
} 