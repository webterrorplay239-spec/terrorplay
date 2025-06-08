import type { Video, CategoryInfo } from './types';
import { Ghost, Skull, Bug, Brain, Drama, Slice, WandSparkles, HelpCircle } from 'lucide-react';

export const categories: CategoryInfo[] = [
  { id: 'paranormal', name: 'Paranormal', icon: Ghost, dataAiHint: 'ghost spirit' },
  { id: 'slasher', name: 'Slasher', icon: Slice, dataAiHint: 'knife blood' },
  { id: 'monster', name: 'Monster', icon: Bug, dataAiHint: 'creature monster' },
  { id: 'zombie', name: 'Zombie', icon: Brain, dataAiHint: 'zombie undead' },
  { id: 'psychological', name: 'Psychological', icon: WandSparkles, dataAiHint: 'mind thriller' },
  { id: 'foundfootage', name: 'Found Footage', icon: Drama, dataAiHint: 'camera recording' },
  { id: 'other', name: 'Other', icon: HelpCircle, dataAiHint: 'abstract horror' },
];

export const mockVideos: Video[] = [
  {
    id: '1',
    title: 'The Haunting of Hill House',
    description: 'A family confronts terrifying memories of their old home and the events that drove them from it.',
    thumbnailUrl: 'https://placehold.co/600x400/8B0000/FFFFFF.png',
    videoUrl: 'https://example.com/video/hill-house',
    category: 'Paranormal',
    tags: ['ghost', 'haunted house', 'family drama'],
    duration: '10 episodes',
    releaseDate: '2018-10-12',
  },
  {
    id: '2',
    title: 'A Nightmare on Elm Street',
    description: 'A monstrous spirit of a slain child murderer seeks revenge by invading the dreams of teenagers.',
    thumbnailUrl: 'https://placehold.co/600x400/8A2BE2/FFFFFF.png',
    videoUrl: 'https://example.com/video/nightmare-elm-street',
    category: 'Slasher',
    tags: ['dream', 'killer', 'supernatural'],
    duration: '1h 31m',
    releaseDate: '1984-11-09',
  },
  {
    id: '3',
    title: 'The Thing',
    description: 'A research team in Antarctica is hunted by a shape-shifting alien that assumes the appearance of its victims.',
    thumbnailUrl: 'https://placehold.co/600x400/222222/FFFFFF.png',
    videoUrl: 'https://example.com/video/the-thing',
    category: 'Monster',
    tags: ['alien', 'isolation', 'sci-fi horror'],
    duration: '1h 49m',
    releaseDate: '1982-06-25',
  },
  {
    id: '4',
    title: 'Train to Busan',
    description: 'While a zombie virus breaks out in South Korea, passengers struggle to survive on the train from Seoul to Busan.',
    thumbnailUrl: 'https://placehold.co/600x400/8B0000/FFFFFF.png',
    videoUrl: 'https://example.com/video/train-to-busan',
    category: 'Zombie',
    tags: ['zombie apocalypse', 'survival', 'action'],
    duration: '1h 58m',
    releaseDate: '2016-07-20',
  },
  {
    id: '5',
    title: 'Get Out',
    description: 'A young African-American man visits his white girlfriend\'s parents for the weekend, where his simmering uneasiness about their reception of him eventually reaches a boiling point.',
    thumbnailUrl: 'https://placehold.co/600x400/8A2BE2/FFFFFF.png',
    videoUrl: 'https://example.com/video/get-out',
    category: 'Psychological',
    tags: ['social thriller', 'mystery', 'suspense'],
    duration: '1h 44m',
    releaseDate: '2017-02-24',
  },
  {
    id: '6',
    title: 'The Blair Witch Project',
    description: 'Three film students vanish after traveling into a Maryland forest to film a documentary on the local Blair Witch legend, leaving only their footage behind.',
    thumbnailUrl: 'https://placehold.co/600x400/222222/FFFFFF.png',
    videoUrl: 'https://example.com/video/blair-witch',
    category: 'Found Footage',
    tags: ['supernatural', 'mockumentary', 'forest'],
    duration: '1h 21m',
    releaseDate: '1999-07-30',
  },
  {
    id: '7',
    title: 'Hereditary',
    description: 'After the family matriarch passes away, a grieving family is haunted by tragic and disturbing occurrences, and begin to unravel dark secrets.',
    thumbnailUrl: 'https://placehold.co/600x400/8B0000/FFFFFF.png',
    videoUrl: 'https://example.com/video/hereditary',
    category: 'Paranormal',
    tags: ['family', 'cult', 'grief'],
    duration: '2h 7m',
    releaseDate: '2018-06-08',
  },
  {
    id: '8',
    title: 'It Follows',
    description: 'A young woman is followed by an unknown supernatural force after a sexual encounter.',
    thumbnailUrl: 'https://placehold.co/600x400/8A2BE2/FFFFFF.png',
    videoUrl: 'https://example.com/video/it-follows',
    category: 'Other',
    tags: ['supernatural', 'dread', 'curse'],
    duration: '1h 40m',
    releaseDate: '2014-03-13',
  }
];

export const getCategoryByName = (name?: string): CategoryInfo | undefined => {
  if (!name) return categories.find(cat => cat.id === 'other');
  return categories.find(cat => cat.name.toLowerCase() === name.toLowerCase() || cat.id === name.toLowerCase()) || categories.find(cat => cat.id === 'other');
}
