
import type { Attraction, CategoryInfo } from './types';
import { Ghost, Skull, Zap, Drama, WandSparkles, MapPin, Info, ShieldQuestion } from 'lucide-react'; // Using Zap for thrill rides, MapPin for location-based, Info for general info

export const categories: CategoryInfo[] = [
  { id: 'casa-terror', name: 'Casas del Terror', icon: Ghost, dataAiHint: 'haunted house dark' },
  { id: 'emociones-fuertes', name: 'Emociones Fuertes', icon: Zap, dataAiHint: 'thrill ride scary' },
  { id: 'experiencia-inmersiva', name: 'Experiencias Inmersivas', icon: WandSparkles, dataAiHint: 'immersive horror interactive' },
  { id: 'espectaculo', name: 'Espectáculos', icon: Drama, dataAiHint: 'horror show stage' },
  { id: 'zona-tematica', name: 'Zonas Temáticas', icon: MapPin, dataAiHint: 'themed area horror' },
  { id: 'infantil-miedo', name: 'Terror Infantil', icon: ShieldQuestion, dataAiHint: 'kids friendly spooky' }, // For "less scary" or kid-friendly horror
  { id: 'general', name: 'General', icon: Info, dataAiHint: 'park attraction info' },
];

export const mockAttractions: Attraction[] = [
  {
    id: 'mansion-pesadillas',
    title: 'La Mansión de las Pesadillas',
    description: 'Adéntrate en una mansión abandonada donde tus peores miedos cobran vida. ¿Podrás escapar de sus malévolos habitantes?',
    thumbnailUrl: 'https://placehold.co/600x400/8B0000/FFFFFF.png',
    category: 'Casas del Terror',
    tags: ['espíritus', 'sustos', 'interactivo', 'oscuro'],
    intensity: 'Alta',
    duration: '20 mins',
    moreInfoUrl: '/atracciones/mansion-pesadillas',
  },
  {
    id: 'grito-abismo',
    title: 'El Grito del Abismo',
    description: 'Una caída vertical hacia la oscuridad total. Solo para los más valientes que se atreven a mirar al vacío.',
    thumbnailUrl: 'https://placehold.co/600x400/8A2BE2/FFFFFF.png',
    category: 'Emociones Fuertes',
    tags: ['caída libre', 'adrenalina', 'extremo'],
    intensity: 'Alta',
    minHeight: '1.40m',
    duration: '2 mins',
  },
  {
    id: 'laberinto-condenado',
    title: 'Laberinto del Condenado',
    description: 'Piérdete en un laberinto donde cada esquina esconde una nueva amenaza. La salida es solo el comienzo de tu terror.',
    thumbnailUrl: 'https://placehold.co/600x400/222222/FFFFFF.png',
    category: 'Experiencias Inmersivas',
    tags: ['puzzle', 'claustrofobia', 'criaturas'],
    intensity: 'Media',
    duration: '30 mins',
  },
  {
    id: 'circo-macabro',
    title: 'El Circo Macabro',
    description: 'Un espectáculo de payasos siniestros y acrobacias mortales que te dejarán sin aliento... permanentemente.',
    thumbnailUrl: 'https://placehold.co/600x400/4A0404/FFFFFF.png',
    category: 'Espectáculos',
    tags: ['payasos', 'show en vivo', 'humor negro'],
    intensity: 'Media',
    duration: '45 mins',
  },
  {
    id: 'callejon-olvidado',
    title: 'El Callejón Olvidado',
    description: 'Una zona temática que recrea las calles más oscuras de una Sevilla de pesadilla, llena de secretos y peligros.',
    thumbnailUrl: 'https://placehold.co/600x400/330033/FFFFFF.png',
    category: 'Zonas Temáticas',
    tags: ['exploración', 'ambiente', 'sevilla oscura'],
    intensity: 'Media',
    duration: 'Exploración libre',
  },
  {
    id: 'bosque-susurros',
    title: 'El Bosque de los Susurros (Infantil)',
    description: 'Un paseo misterioso pero divertido para los pequeños valientes, con criaturas amigables y dulces sustos.',
    thumbnailUrl: 'https://placehold.co/600x400/556B2F/FFFFFF.png',
    category: 'Terror Infantil',
    tags: ['niños', 'familiar', 'aventura', 'suave'],
    intensity: 'Baja',
    duration: '15 mins',
  },
];

export const getCategoryByName = (name?: string): CategoryInfo | undefined => {
  if (!name) return categories.find(cat => cat.id === 'general');
  return categories.find(cat => cat.name.toLowerCase() === name.toLowerCase() || cat.id === name.toLowerCase()) || categories.find(cat => cat.id === 'general');
};
