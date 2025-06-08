
"use client";

import Image from 'next/image';
import Link from 'next/link';
import type { Attraction } from '@/lib/types';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Info, Zap, Clock, Users, BarChart3 } from 'lucide-react'; // Using Zap for intensity, BarChart3 for minHeight
import { getCategoryByName } from '@/lib/data';

interface AttractionCardProps {
  attraction: Attraction;
}

export default function AttractionCard({ attraction }: AttractionCardProps) {
  const categoryInfo = getCategoryByName(attraction.category);
  const IconComponent = categoryInfo?.icon || Info;

  return (
    <Card className="flex flex-col overflow-hidden h-full transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary/30 animate-slide-up">
      <CardHeader className="p-0 relative">
        {attraction.moreInfoUrl ? (
          <Link href={attraction.moreInfoUrl} aria-label={`Más información sobre ${attraction.title}`}>
            <Image
              src={attraction.thumbnailUrl}
              alt={`Imagen de ${attraction.title}`}
              width={600}
              height={400}
              className="object-cover w-full h-48 md:h-56"
              data-ai-hint={`${categoryInfo?.dataAiHint ?? 'horror attraction'} park theme`}
            />
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
              <Info className="h-16 w-16 text-white/80" />
            </div>
          </Link>
        ) : (
          <Image
            src={attraction.thumbnailUrl}
            alt={`Imagen de ${attraction.title}`}
            width={600}
            height={400}
            className="object-cover w-full h-48 md:h-56"
            data-ai-hint={`${categoryInfo?.dataAiHint ?? 'horror theme park'} visual`}
          />
        )}
      </CardHeader>
      <CardContent className="p-4 flex-grow">
        <div className="flex items-center space-x-2 mb-2">
          <IconComponent className="h-5 w-5 text-accent flex-shrink-0" />
          <Badge variant="outline" className="border-accent text-accent">{attraction.category}</Badge>
        </div>
        <CardTitle className="text-xl font-headline mb-2 leading-tight">
          {attraction.moreInfoUrl ? (
            <Link href={attraction.moreInfoUrl} className="hover:text-primary transition-colors">
              {attraction.title}
            </Link>
          ) : (
            attraction.title
          )}
        </CardTitle>
        <CardDescription className="text-sm text-muted-foreground line-clamp-3 mb-3">
          {attraction.description}
        </CardDescription>
        <div className="flex flex-wrap gap-1 mb-3">
          {attraction.tags.slice(0, 3).map(tag => (
            <Badge key={tag} variant="secondary" className="text-xs">{tag}</Badge>
          ))}
        </div>
        <div className="text-xs text-muted-foreground space-y-1">
          {attraction.intensity && (
            <div className="flex items-center">
              <Zap className="h-3.5 w-3.5 mr-1.5 text-yellow-500" />
              Intensidad: {attraction.intensity}
            </div>
          )}
          {attraction.duration && (
            <div className="flex items-center">
              <Clock className="h-3.5 w-3.5 mr-1.5" />
              Duración: {attraction.duration}
            </div>
          )}
          {attraction.minHeight && (
            <div className="flex items-center">
              <BarChart3 className="h-3.5 w-3.5 mr-1.5 transform rotate-90" /> {/* Simple representation for height */}
              Altura Mínima: {attraction.minHeight}
            </div>
          )}
        </div>
      </CardContent>
      {attraction.moreInfoUrl && (
        <CardFooter className="p-4 border-t border-border/50">
          <Button asChild variant="default" size="sm" className="w-full transition-colors duration-300">
            <Link href={attraction.moreInfoUrl}>
              <Info className="mr-2 h-4 w-4" />
              Más Detalles
            </Link>
          </Button>
        </CardFooter>
      )}
    </Card>
  );
}
