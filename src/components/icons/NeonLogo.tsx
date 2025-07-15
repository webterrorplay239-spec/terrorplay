
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
    <circle
      cx="50"
      cy="50"
      r="40"
      stroke="hsl(var(--primary))"
      strokeWidth="3"
      fill="none"
      filter="url(#neon-glow-primary)"
    />
    <path
      d="M50 10 L85 75 L15 75 Z"
      stroke="currentColor"
      strokeWidth="3"
      fill="none"
      filter="url(#neon-glow-accent)"
      strokeLinejoin="round"
      strokeLinecap="round"
    />
  </svg>
);

export default NeonLogo;
