"use client";

import { useState, useMemo, useEffect } from 'react';
import VideoCard from '@/components/VideoCard';
import { mockVideos, categories as availableCategories } from '@/lib/data';
import type { Video } from '@/lib/types';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { Search, ListFilter, ArrowDownUp, XCircle } from 'lucide-react';
import LoadingSpinner from '@/components/LoadingSpinner';

export default function VideoCatalogPage() {
  const [videos, setVideos] = useState<Video[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [sortOrder, setSortOrder] = useState<string>('title-asc');

  useEffect(() => {
    // Simulate API call
    setIsLoading(true);
    setTimeout(() => {
      setVideos(mockVideos);
      setIsLoading(false);
    }, 500);
  }, []);

  const filteredAndSortedVideos = useMemo(() => {
    let filtered = videos;

    if (searchTerm) {
      filtered = filtered.filter(video =>
        video.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        video.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }

    if (selectedCategory !== 'all') {
      filtered = filtered.filter(video => video.category.toLowerCase() === selectedCategory.toLowerCase());
    }

    return filtered.sort((a, b) => {
      switch (sortOrder) {
        case 'title-asc':
          return a.title.localeCompare(b.title);
        case 'title-desc':
          return b.title.localeCompare(a.title);
        case 'date-asc':
          return new Date(a.releaseDate || 0).getTime() - new Date(b.releaseDate || 0).getTime();
        case 'date-desc':
          return new Date(b.releaseDate || 0).getTime() - new Date(a.releaseDate || 0).getTime();
        default:
          return 0;
      }
    });
  }, [videos, searchTerm, selectedCategory, sortOrder]);

  const clearFilters = () => {
    setSearchTerm('');
    setSelectedCategory('all');
    setSortOrder('title-asc');
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-[calc(100vh-20rem)]">
        <LoadingSpinner size={64} />
      </div>
    );
  }

  return (
    <div className="space-y-12">
      <section className="text-center animate-fade-in">
        <h1 className="text-5xl md:text-7xl font-headline text-primary mb-4">Welcome to TerrorPlay</h1>
        <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
          Explore our curated collection of terrifying videos. Dare to watch?
        </p>
      </section>

      <section className="space-y-6 p-6 bg-card/50 rounded-lg shadow-xl animate-slide-up" style={{animationDelay: '0.2s'}}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-end">
          <div className="space-y-2">
            <label htmlFor="search" className="text-sm font-medium text-muted-foreground">Search Videos</label>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                id="search"
                type="text"
                placeholder="Search by title or tag..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="category" className="text-sm font-medium text-muted-foreground">Filter by Category</label>
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger id="category" className="w-full">
                <ListFilter className="h-4 w-4 mr-2 text-muted-foreground inline-block" />
                <SelectValue placeholder="Select category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                {availableCategories.map(cat => (
                  <SelectItem key={cat.id} value={cat.name.toLowerCase()}>{cat.name}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          
          <div className="space-y-2">
            <label htmlFor="sort" className="text-sm font-medium text-muted-foreground">Sort By</label>
            <Select value={sortOrder} onValueChange={setSortOrder}>
              <SelectTrigger id="sort" className="w-full">
                <ArrowDownUp className="h-4 w-4 mr-2 text-muted-foreground inline-block" />
                <SelectValue placeholder="Sort order" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="title-asc">Title (A-Z)</SelectItem>
                <SelectItem value="title-desc">Title (Z-A)</SelectItem>
                <SelectItem value="date-desc">Newest First</SelectItem>
                <SelectItem value="date-asc">Oldest First</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        {(searchTerm || selectedCategory !== 'all') && (
          <Button variant="outline" onClick={clearFilters} className="w-full md:w-auto">
            <XCircle className="mr-2 h-4 w-4" /> Clear Filters
          </Button>
        )}
      </section>

      {filteredAndSortedVideos.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8 animate-fade-in" style={{animationDelay: '0.4s'}}>
          {filteredAndSortedVideos.map((video, index) => (
            <VideoCard key={video.id} video={video} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12 animate-fade-in">
          <h2 className="text-2xl font-headline text-muted-foreground mb-2">No Videos Found</h2>
          <p className="text-lg text-muted-foreground">
            Try adjusting your search or filters. The horror awaits... if you can find it.
          </p>
        </div>
      )}
    </div>
  );
}
