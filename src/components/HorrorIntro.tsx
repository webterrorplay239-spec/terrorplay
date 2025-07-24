
"use client";

import { useEffect, useState } from 'react';
import NeonLogo from './icons/NeonLogo';

interface HorrorIntroProps {
  onFinished: () => void;
}

const messages = [
  { text: "WAKING UP...", duration: 1500 },
  { text: "SYSTEM FAILURE", duration: 1000 },
  { text: "LOADING TERROR...", duration: 1500 },
  { text: "CAN'T ESCAPE", duration: 1000 },
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
        <div className="font-code text-2xl md:text-4xl text-red-500 animate-glitch">
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

        @keyframes scanlines {
          from { background-position: 0 0; }
          to { background-position: 0 100vh; }
        }
        
        .animate-glitch {
            animation: glitch 1s steps(2, end) infinite;
            text-shadow: 
                -2px -2px 0px hsl(var(--primary)),
                 2px  2px 0px hsl(var(--accent));
        }

        @keyframes glitch {
          0% {
            clip-path: inset(89% 0 1% 0);
            transform: translate(-10px, 5px);
          }
          10% {
             clip-path: inset(44% 0 44% 0);
             transform: translate(8px, -3px);
          }
           20% {
            clip-path: inset(93% 0 2% 0);
            transform: translate(-5px, 2px);
          }
           30% {
            clip-path: inset(38% 0 57% 0);
            transform: translate(3px, -6px);
          }
           40% {
            clip-path: inset(49% 0 46% 0);
             transform: translate(-12px, 8px);
          }
           50% {
            clip-path: inset(9% 0 81% 0);
             transform: translate(6px, -4px);
          }
           60% {
            clip-path: inset(88% 0 3% 0);
            transform: translate(-9px, 7px);
          }
           70% {
            clip-path: inset(55% 0 33% 0);
            transform: translate(4px, -2px);
          }
           80% {
            clip-path: inset(25% 0 68% 0);
             transform: translate(-7px, 5px);
          }
           90% {
            clip-path: inset(76% 0 12% 0);
             transform: translate(10px, -6px);
          }
          100% {
            clip-path: inset(9% 0 85% 0);
            transform: translate(-4px, 3px);
          }
        }
      `}</style>
    </div>
  );
};

export default HorrorIntro;
