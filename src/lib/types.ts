
import type { LucideIcon } from 'lucide-react';

export interface Attraction {
  id: string;
  title: string;
  description: string;
  thumbnailUrl: string;
  category: string; // e.g., 'Casa del Terror', 'Montaña Rusa', 'Espectáculo'
  tags: string[];
  intensity?: 'Baja' | 'Media' | 'Alta' | 'Para todos';
  minHeight?: string; // e.g., "1.20m"
  duration?: string; // e.g., "25 mins", "Todo el día"
  moreInfoUrl?: string; // Link to a dedicated page or section for the attraction
}

export interface CategoryInfo {
  id: string;
  name: string;
  icon: LucideIcon | React.ComponentType<React.SVGProps<SVGSVGElement>>;
  dataAiHint?: string;
}
