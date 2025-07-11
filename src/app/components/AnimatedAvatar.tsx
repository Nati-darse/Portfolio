import React from 'react';

// Clean, modern, highly developer-like avatar: dual monitors, code, headphones, hoodie, desk items
export default function AnimatedAvatar() {
  return (
    <div className="w-64 h-64 mx-auto relative">
      <svg
        viewBox="0 0 320 320"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        {/* Desk */}
        <rect x="60" y="240" width="200" height="24" rx="10" fill="#b0b4ba" />
        {/* Coffee cup */}
        <ellipse cx="80" cy="252" rx="10" ry="10" fill="#fff" stroke="#bbb" strokeWidth="2" />
        <rect x="76" y="247" width="8" height="10" rx="2" fill="#e0c9a6" />
        {/* Sticky note */}
        <rect x="110" y="250" width="16" height="12" rx="2" fill="#ffe066" />
        {/* Mouse */}
        <ellipse cx="220" cy="258" rx="7" ry="4" fill="#d1d5db" />
        {/* Chair back */}
        <rect x="110" y="170" width="32" height="60" rx="16" fill="#23272f" />
        {/* Body (hoodie) */}
        <rect x="140" y="170" width="40" height="60" rx="18" fill="#2d3748" />
        {/* Hoodie pocket */}
        <rect x="155" y="210" width="10" height="16" rx="4" fill="#374151" />
        {/* Hoodie drawstrings */}
        <rect x="152" y="180" width="2" height="12" rx="1" fill="#374151" />
        <rect x="166" y="180" width="2" height="12" rx="1" fill="#374151" />
        {/* Code symbol on hoodie */}
        <text x="160" y="200" fontSize="14" fill="#7ed6fb" fontFamily="monospace" textAnchor="middle">{'</>'}</text>
        {/* Head */}
        <ellipse cx="160" cy="150" rx="22" ry="24" fill="#f5e9e2" />
        {/* Hair */}
        <ellipse cx="160" cy="140" rx="22" ry="10" fill="#23272f" />
        {/* Headphones */}
        <ellipse cx="142" cy="150" rx="5" ry="10" fill="#444" />
        <ellipse cx="178" cy="150" rx="5" ry="10" fill="#444" />
        <rect x="142" y="138" width="36" height="6" rx="3" fill="#444" />
        {/* Arm (left, on keyboard) */}
        <rect x="120" y="200" width="12" height="28" rx="6" fill="#f5e9e2" />
        {/* Arm (right, on mouse) */}
        <rect x="178" y="220" width="12" height="18" rx="6" fill="#f5e9e2" />
        {/* Dual Monitors */}
        {/* Left monitor: code */}
        <rect x="100" y="110" width="54" height="44" rx="8" fill="#23272f" stroke="#7ed6fb" strokeWidth="3" />
        {/* Code lines (syntax colors) */}
        <rect x="108" y="120" width="36" height="5" rx="2.5" fill="#61dafb" />
        <rect x="108" y="128" width="28" height="5" rx="2.5" fill="#8cc84b" />
        <rect x="108" y="136" width="32" height="5" rx="2.5" fill="#fbbf24" />
        <rect x="108" y="144" width="20" height="5" rx="2.5" fill="#e06c75" />
        {/* Right monitor: terminal/browser */}
        <rect x="166" y="110" width="54" height="44" rx="8" fill="#23272f" stroke="#7ed6fb" strokeWidth="3" />
        {/* Terminal prompt */}
        <rect x="174" y="120" width="36" height="5" rx="2.5" fill="#abb2bf" />
        <rect x="174" y="128" width="28" height="5" rx="2.5" fill="#7ed6fb" />
        <rect x="174" y="136" width="32" height="5" rx="2.5" fill="#8cc84b" />
        {/* Monitor stands */}
        <rect x="124" y="154" width="8" height="10" rx="3" fill="#888" />
        <rect x="190" y="154" width="8" height="10" rx="3" fill="#888" />
        {/* Keyboard */}
        <rect x="140" y="220" width="40" height="10" rx="4" fill="#d1d5db" />
        {/* Eyes (animated blink) */}
        <ellipse cx="154" cy="156" rx="3.2" ry="1.6" fill="#23272f">
          <animate attributeName="ry" values="1.6;0.3;1.6" keyTimes="0;0.5;1" dur="3s" repeatCount="indefinite" />
        </ellipse>
        <ellipse cx="166" cy="156" rx="3.2" ry="1.6" fill="#23272f">
          <animate attributeName="ry" values="1.6;0.3;1.6" keyTimes="0;0.5;1" dur="3s" repeatCount="indefinite" />
        </ellipse>
        {/* Mouth */}
        <path d="M154 164 Q160 170 166 164" stroke="#c2996b" strokeWidth="2" fill="none" />
        {/* Digital nameplate area (for typewriter text, overlayed in React) */}
        <rect x="80" y="40" width="160" height="32" rx="10" fill="#23272f" stroke="#7ed6fb" strokeWidth="2" opacity="0.8" />
      </svg>
    </div>
  );
} 