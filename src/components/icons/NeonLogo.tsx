
import type React from 'react';

const NeonLogo: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    aria-label="TerrorPlay Neon Logo"
    {...props}
  >
    <defs>
      <filter id="neon-glow-primary">
        <feGaussianBlur stdDeviation="1.5" result="coloredBlur" />
        <feMerge>
          <feMergeNode in="coloredBlur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
       <filter id="neon-glow-accent">
        <feGaussianBlur stdDeviation="2.5" result="coloredBlur" />
        <feMerge>
          <feMergeNode in="coloredBlur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>
    <g>
        {/* T */}
        <path d="M 30 35 H 70" stroke="hsl(var(--primary))" strokeWidth="4" filter="url(#neon-glow-primary)" />
        <path d="M 50 35 V 75" stroke="hsl(var(--primary))" strokeWidth="4" filter="url(#neon-glow-primary)" />
        
        {/* P */}
        <path d="M 40 25 V 65" stroke="currentColor" strokeWidth="3" filter="url(#neon-glow-accent)" />
        <path d="M 40 25 C 55 25, 55 45, 40 45" stroke="currentColor" strokeWidth="3" fill="none" filter="url(#neon-glow-accent)" />

        {/* Outer Circle */}
        <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="1" opacity="0.5" fill="none" />
    </g>
  </svg>
);

export default NeonLogo;
