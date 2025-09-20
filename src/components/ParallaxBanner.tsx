
"use client";

import { useEffect, useState } from 'react';

interface ParallaxBannerProps {
  title?: string;
  subtitle?: string;
  imagePath?: string;
  imageUrl?: string;
  dataAiHint?: string;
  children?: React.ReactNode;
}

export function ParallaxBanner({ title, subtitle, imagePath, imageUrl, dataAiHint, children }: ParallaxBannerProps) {
  const [offsetY, setOffsetY] = useState(0);

  const handleScroll = () => {
    // Only run on client
    if (typeof window !== "undefined") {
      setOffsetY(window.pageYOffset);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, []);

  return (
    <section 
      className="relative h-[50vh] md:h-[60vh] w-full overflow-hidden"
      data-ai-hint={dataAiHint}
    >
      <div
        className="absolute inset-0 bg-cover bg-fixed bg-center z-0"
        style={{ 
            backgroundImage: `url(${imagePath || imageUrl})`,
            transform: `translateY(${offsetY * 0.4}px)` // Adjust multiplier for parallax speed
        }}
        aria-hidden="true"
      >
        <div className="absolute inset-0 bg-black/50" />
      </div>
      
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-4 text-center">
        {title && (
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            {title}
          </h1>
        )}
        {subtitle && (
          <p className="text-xl md:text-2xl text-white/90">
            {subtitle}
          </p>
        )}
        {children}
      </div>
    </section>
  );
}
