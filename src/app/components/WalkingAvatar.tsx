import React from 'react';

// Sitting developer avatar: hands on keyboard, PC in front, above the text
export default function SittingAvatar() {
  return (
    <div className="w-64 h-64 mx-auto">
      <svg viewBox="0 0 256 256" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        {/* Chair back */}
        <rect x="80" y="120" width="96" height="80" rx="32" fill="#23272f" />
        {/* Body (hoodie) */}
        <rect x="104" y="120" width="48" height="64" rx="20" fill="#2d3748" />
        {/* Hoodie pocket */}
        <rect x="124" y="160" width="8" height="16" rx="4" fill="#374151" />
        {/* Hoodie drawstrings */}
        <rect x="120" y="128" width="2" height="12" rx="1" fill="#374151" />
        <rect x="134" y="128" width="2" height="12" rx="1" fill="#374151" />
        {/* Code symbol on hoodie */}
        <text x="128" y="150" fontSize="14" fill="#7ed6fb" fontFamily="monospace" textAnchor="middle">{'</>'}</text>
        {/* Head */}
        <ellipse cx="128" cy="104" rx="24" ry="24" fill="#f5e9e2" />
        {/* Hair */}
        <ellipse cx="128" cy="96" rx="24" ry="10" fill="#23272f" />
        {/* Headphones */}
        <ellipse cx="110" cy="104" rx="6" ry="12" fill="#444" />
        <ellipse cx="146" cy="104" rx="6" ry="12" fill="#444" />
        <rect x="110" y="90" width="36" height="8" rx="4" fill="#444" />
        {/* Arms (on keyboard) */}
        <rect x="104" y="170" width="12" height="32" rx="6" fill="#f5e9e2" />
        <rect x="140" y="170" width="12" height="32" rx="6" fill="#f5e9e2" />
        {/* Desk */}
        <rect x="80" y="200" width="96" height="16" rx="8" fill="#b0b4ba" />
        {/* Keyboard */}
        <rect x="112" y="196" width="32" height="8" rx="4" fill="#d1d5db" />
        {/* PC Monitor (front) */}
        <rect x="96" y="80" width="64" height="32" rx="8" fill="#23272f" stroke="#7ed6fb" strokeWidth="3" />
        {/* Glowing screen */}
        <rect x="104" y="88" width="48" height="20" rx="4" fill="#7ed6fb">
          <animate attributeName="fill" values="#7ed6fb;#b2f7ef;#7ed6fb" dur="2s" repeatCount="indefinite" />
        </rect>
        {/* Code lines (syntax colors) */}
        <rect x="110" y="92" width="24" height="3" rx="1.5" fill="#61dafb" />
        <rect x="110" y="98" width="18" height="3" rx="1.5" fill="#8cc84b" />
        <rect x="110" y="104" width="20" height="3" rx="1.5" fill="#fbbf24" />
        {/* Eyes (animated blink) */}
        <ellipse cx="122" cy="110" rx="3" ry="1.5" fill="#23272f">
          <animate attributeName="ry" values="1.5;0.3;1.5" keyTimes="0;0.5;1" dur="3s" repeatCount="indefinite" />
        </ellipse>
        <ellipse cx="134" cy="110" rx="3" ry="1.5" fill="#23272f">
          <animate attributeName="ry" values="1.5;0.3;1.5" keyTimes="0;0.5;1" dur="3s" repeatCount="indefinite" />
        </ellipse>
        {/* Mouth */}
        <path d="M122 116 Q128 122 134 116" stroke="#c2996b" strokeWidth="2" fill="none" />
      </svg>
    </div>
  );
} 