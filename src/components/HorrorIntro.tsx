
"use client";

import { useEffect, useState } from 'react';
import NeonLogo from './icons/NeonLogo';

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
      <div className="absolute inset-0 bg-black opacity-50 scanlines"></div>
      
      {!showLogo ? (
        <div className="font-code text-4xl md:text-6xl text-red-500 animate-glitch">
            {messages[currentMessageIndex]?.text}
            <span className="animate-ping">_</span>
        </div>
      ) : (
        <div className="flex flex-col items-center animate-fade-in">
             <NeonLogo className="w-48 h-48 md:w-64 md:h-64 text-primary animate-pulse" />
             <h1 className="text-6xl md:text-8xl font-headline text-primary mt-4 animate-text-flicker">TERRORPLAY</h1>
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
        
        .animate-glitch {
            animation: glitch 1s steps(2, end) infinite;
            text-shadow: 
                -2px -2px 0px hsl(var(--primary)),
                 2px  2px 0px hsl(var(--accent));
        }

        @keyframes glitch {
          0% {
            transform: translate(0);
          }
          20% {
            transform: translate(-3px, 3px);
          }
          40% {
            transform: translate(3px, -3px);
          }
          60% {
            transform: translate(-3px, 3px);
          }
          80% {
            transform: translate(3px, -3px);
          }
          100% {
            transform: translate(0);
          }
        }
      `}</style>
    </div>
  );
};

export default HorrorIntro;
