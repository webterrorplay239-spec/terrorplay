"use client";

import Image from 'next/image';
import Link from 'next/link';
import type { Video, CategoryInfo } from '@/lib/types';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Heart, PlayCircle, ExternalLink, CalendarDays, Clock } from 'lucide-react';
import { useWatchlist } from '@/hooks/useWatchlist';
import { getCategoryByName } from '@/lib/data';

interface VideoCardProps {
  video: Video;
}

export default function VideoCard({ video }: VideoCardProps) {
  const { addToWatchlist, removeFromWatchlist, isWatchlisted } = useWatchlist();
  const categoryInfo = getCategoryByName(video.category);
  const IconComponent = categoryInfo?.icon || ExternalLink;

  const handleWatchlistToggle = () => {
    if (isWatchlisted(video.id)) {
      removeFromWatchlist(video.id);
    } else {
      addToWatchlist(video);
    }
  };

  return (
    <Card className="flex flex-col overflow-hidden h-full transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary/30 animate-slide-up">
      <CardHeader className="p-0 relative">
        <Link href={video.videoUrl} target="_blank" rel="noopener noreferrer" aria-label={`Watch ${video.title}`}>
          <Image
            src={video.thumbnailUrl}
            alt={`Thumbnail for ${video.title}`}
            width={600}
            height={400}
            className="object-cover w-full h-48 md:h-56"
            data-ai-hint={`${categoryInfo?.dataAiHint ?? 'horror movie'} thumbnail`}
          />
          <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
            <PlayCircle className="h-16 w-16 text-white/80" />
          </div>
        </Link>
      </CardHeader>
      <CardContent className="p-4 flex-grow">
        <div className="flex items-center space-x-2 mb-2">
          <IconComponent className="h-5 w-5 text-accent" />
          <Badge variant="outline" className="border-accent text-accent">{video.category}</Badge>
        </div>
        <CardTitle className="text-xl font-headline mb-2 leading-tight">
          <Link href={video.videoUrl} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
            {video.title}
          </Link>
        </CardTitle>
        <CardDescription className="text-sm text-muted-foreground line-clamp-3 mb-3">
          {video.description}
        </CardDescription>
        <div className="flex flex-wrap gap-1 mb-3">
          {video.tags.slice(0, 3).map(tag => (
            <Badge key={tag} variant="secondary" className="text-xs">{tag}</Badge>
          ))}
        </div>
        <div className="text-xs text-muted-foreground space-y-1">
          {video.releaseDate && (
            <div className="flex items-center">
              <CalendarDays className="h-3.5 w-3.5 mr-1.5" />
              Released: {new Date(video.releaseDate).toLocaleDateString()}
            </div>
          )}
          {video.duration && (
            <div className="flex items-center">
              <Clock className="h-3.5 w-3.5 mr-1.5" />
              Duration: {video.duration}
            </div>
          )}
        </div>
      </CardContent>
      <CardFooter className="p-4 border-t border-border/50">
        <Button
          variant={isWatchlisted(video.id) ? "destructive" : "default"}
          size="sm"
          onClick={handleWatchlistToggle}
          className="w-full transition-colors duration-300"
        >
          <Heart className={`mr-2 h-4 w-4 ${isWatchlisted(video.id) ? 'fill-current' : ''}`} />
          {isWatchlisted(video.id) ? 'Remove from Watchlist' : 'Add to Watchlist'}
        </Button>
      </CardFooter>
    </Card>
  );
}
