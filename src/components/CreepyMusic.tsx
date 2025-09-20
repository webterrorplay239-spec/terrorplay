'use client';
import { useState, useRef } from 'react';
import { Volume2 } from 'lucide-react';

export default function CreepyMusic() {
  const [enabled, setEnabled] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const handlePlay = () => {
    if (!enabled) {
      audioRef.current = new Audio('/tense-horror-background-174809.mp3');
      audioRef.current.loop = true;
      audioRef.current.volume = 0.15;
      audioRef.current.play();
      setEnabled(true);
    }
  };

  return (
    <>
      {!enabled && (
        <button
          onClick={handlePlay}
          className="fixed bottom-6 left-6 z-[9999] p-4 rounded-full bg-background border-2 border-accent shadow-lg hover:bg-accent hover:text-background transition-all flex items-center gap-2 animate-fade-in"
          title="Activar ambiente sonoro"
        >
          <Volume2 className="w-6 h-6 text-accent" />
          <span className="hidden md:inline text-lg font-bold">Ambiente sonoro</span>
        </button>
      )}
    </>
  );
}
