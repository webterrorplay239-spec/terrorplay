"use client";

import { useCallback } from 'react';
import { useLocalStorage } from './useLocalStorage';
import type { Video } from '@/lib/types';
import { useToast } from "@/hooks/use-toast";

const WATCHLIST_KEY = 'terrorplay-watchlist';

export function useWatchlist() {
  const [watchlistIds, setWatchlistIds] = useLocalStorage<string[]>(WATCHLIST_KEY, []);
  const { toast } = useToast();

  const addToWatchlist = useCallback((video: Video) => {
    if (!watchlistIds.includes(video.id)) {
      setWatchlistIds(prev => [...prev, video.id]);
      toast({
        title: "Added to Watchlist",
        description: `${video.title} has been added to your watchlist.`,
      });
    }
  }, [watchlistIds, setWatchlistIds, toast]);

  const removeFromWatchlist = useCallback((videoId: string) => {
    setWatchlistIds(prev => prev.filter(id => id !== videoId));
    toast({
      title: "Removed from Watchlist",
      description: `Video has been removed from your watchlist.`,
      variant: "destructive",
    });
  }, [setWatchlistIds, toast]);

  const isWatchlisted = useCallback((videoId: string) => {
    return watchlistIds.includes(videoId);
  }, [watchlistIds]);

  return {
    watchlistIds,
    addToWatchlist,
    removeFromWatchlist,
    isWatchlisted,
  };
}
