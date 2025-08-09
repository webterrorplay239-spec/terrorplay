
import type React from 'react';

const TerrorPlayLogo: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 200 50" // Adjusted viewBox for shorter text
    className="font-headline"
    aria-label="TerrorPlay Logo"
    {...props}
  >
    <defs>
      <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" style={{ stopColor: "hsl(var(--primary))", stopOpacity: 1 }} />
        <stop offset="100%" style={{ stopColor: "hsl(var(--accent))", stopOpacity: 1 }} />
      </linearGradient>
    </defs>
    <text
      x="50%"
      y="50%"
      dominantBaseline="middle"
      textAnchor="middle"
      fontSize="28" // Adjusted font size
      fill="url(#logoGradient)"
      className="font-['Lacquer',_cursive] tracking-wider"
      style={{ filter: "drop-shadow(2px 2px 3px rgba(0,0,0,0.5))" }}
    >
      TERRORPLAY
    </text>
  </svg>
);

export default TerrorPlayLogo;
