import type { LucideIcon } from 'lucide-react';

export interface Video {
  id: string;
  title: string;
  description: string;
  thumbnailUrl: string;
  videoUrl: string; // embed URL or link to video page
  category: string; 
  tags: string[];
  duration?: string;
  releaseDate?: string; // YYYY-MM-DD
}

export interface CategoryInfo {
  id: string;
  name: string;
  icon: LucideIcon | React.ComponentType<React.SVGProps<SVGSVGElement>>;
  dataAiHint?: string; // For placeholder images if category images are used
}
