
"use client";

import { useEffect, useState } from 'react';

interface ParallaxBannerProps {
  imageUrl: string;
  dataAiHint: string;
  children: React.ReactNode;
}

export function ParallaxBanner({ imageUrl, dataAiHint, children }: ParallaxBannerProps) {
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
      className="relative h-[60vh] rounded-lg overflow-hidden"
      data-ai-hint={dataAiHint}
    >
      <div
        className="absolute inset-0 bg-cover bg-fixed bg-center z-0"
        style={{ 
            backgroundImage: `url(${imageUrl})`,
            transform: `translateY(${offsetY * 0.3}px)` // Adjust multiplier for parallax speed
        }}
        aria-hidden="true"
      />
      {children}
    </section>
  );
}
