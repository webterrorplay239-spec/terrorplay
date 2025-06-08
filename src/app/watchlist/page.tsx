"use client";

import { useEffect, useState } from 'react';
import VideoCard from '@/components/VideoCard';
import { useWatchlist } from '@/hooks/useWatchlist';
import { mockVideos } from '@/lib/data'; // Assuming mockVideos is the source of all videos
import type { Video } from '@/lib/types';
import { HeartCrack, Film } from 'lucide-react';
import LoadingSpinner from '@/components/LoadingSpinner';

export default function WatchlistPage() {
  const { watchlistIds } = useWatchlist();
  const [watchlistedVideos, setWatchlistedVideos] = useState<Video[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    // In a real app, you might fetch video details based on IDs
    // For now, filter from mockVideos
    const videos = mockVideos.filter(video => watchlistIds.includes(video.id));
    setWatchlistedVideos(videos);
    setIsLoading(false);
  }, [watchlistIds]);

  if (isLoading) {
     return (
      <div className="flex justify-center items-center min-h-[calc(100vh-20rem)]">
        <LoadingSpinner size={64} />
      </div>
    );
  }

  return (
    <div className="space-y-10">
      <section className="text-center animate-fade-in">
        <Film className="h-16 w-16 text-primary mx-auto mb-4" />
        <h1 className="text-5xl font-headline text-primary mb-3">Your Watchlist</h1>
        <p className="text-xl text-muted-foreground">
          The horrors you've saved for later. Don't keep them waiting too long...
        </p>
      </section>

      {watchlistedVideos.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8 animate-fade-in" style={{animationDelay: '0.2s'}}>
          {watchlistedVideos.map(video => (
            <VideoCard key={video.id} video={video} />
          ))}
        </div>
      ) : (
        <div className="text-center py-20 animate-fade-in" style={{animationDelay: '0.2s'}}>
          <HeartCrack className="h-24 w-24 text-muted-foreground mx-auto mb-6" />
          <h2 className="text-3xl font-headline text-muted-foreground mb-3">Your Watchlist is Empty</h2>
          <p className="text-lg text-muted-foreground">
            Looks like you haven't added any videos yet. Go explore and find some nightmares to save!
          </p>
        </div>
      )}
    </div>
  );
}
