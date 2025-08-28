"use client";

import { useEffect, useState } from 'react';

interface HorrorIntroProps {
  onFinished: () => void;
}

const messages = [
  { text: "INICIANDO SISTEMA...", duration: 1500 },
  { text: "FALLO CATASTRÓFICO", duration: 1000 },
  { text: "CARGANDO TERROR...", duration: 1500 },
  { text: "NO PUEDES ESCAPAR", duration: 1000 },
];

const HorrorIntro = ({ onFinished }: HorrorIntroProps) => {
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [showLogo, setShowLogo] = useState(false);
  const [fadingOut, setFadingOut] = useState(false);

  useEffect(() => {
    if (currentMessageIndex < messages.length) {
      const timer = setTimeout(() => {
        setCurrentMessageIndex(currentMessageIndex + 1);
      }, messages[currentMessageIndex].duration);
      return () => clearTimeout(timer);
    } else if (!showLogo) {
      const logoTimer = setTimeout(() => {
        setShowLogo(true);
      }, 500);
      return () => clearTimeout(logoTimer);
    } else {
        const finishTimer = setTimeout(() => {
            setFadingOut(true);
            setTimeout(onFinished, 1000); // Wait for fade out animation
        }, 2000);
        return () => clearTimeout(finishTimer);
    }
  }, [currentMessageIndex, showLogo, onFinished]);

  return (
    <div className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black transition-opacity duration-1000 ${fadingOut ? 'opacity-0' : 'opacity-100'}`}>
      <div className="absolute inset-0 bg-black opacity-50 scanlines pointer-events-none"></div>
      
      {!showLogo ? (
        <div className="font-mono text-2xl md:text-4xl text-red-500 animate-glitch-text p-4">
            {'> '}{messages[currentMessageIndex]?.text}
            <span className="animate-ping">_</span>
        </div>
      ) : (
        <div className="flex flex-col items-center animate-fade-in">
             <img src="/logo.png" alt="TerrorPlay Logo" className="w-48 h-48 md:w-64 md:h-64 animate-pulse" />
             <h1 className="text-6xl md:text-8xl font-['Lacquer',_cursive] text-primary mt-4 animate-text-flicker">TERRORPLAY</h1>
        </div>
      )}

      <style jsx>{`
        .scanlines {
          background: linear-gradient(
            to bottom,
            rgba(255, 255, 255, 0),
            rgba(255, 255, 255, 0.05) 50%,
            rgba(255, 255, 255, 0)
          );
          background-size: 100% 0.3rem;
          animation: scanlines 10s linear infinite;
        }
        
        .animate-glitch-text {
            animation: glitch-text-anim 2.5s infinite steps(8);
            text-shadow: 
                -1px -1px 0px hsla(var(--primary), 0.5),
                 1px  1px 0px hsla(var(--accent), 0.5);
        }

        @keyframes glitch-text-anim {
          0% {
            clip-path: inset(85% 0 8% 0);
            opacity: 0.8;
          }
          10% {
            clip-path: inset(5% 0 40% 0);
          }
          20% {
            clip-path: inset(90% 0 3% 0);
          }
          30% {
            clip-path: inset(20% 0 55% 0);
          }
          40% {
            clip-path: inset(60% 0 10% 0);
          }
          50% {
            clip-path: inset(95% 0 2% 0);
            opacity: 0.5;
          }
          60% {
             clip-path: inset(15% 0 70% 0);
          }
          70% {
             clip-path: inset(80% 0 5% 0);
          }
          80% {
            clip-path: inset(45% 0 30% 0);
          }
          90% {
            clip-path: inset(90% 0 8% 0);
          }
          100% {
            clip-path: inset(10% 0 85% 0);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
};

export default HorrorIntro;
