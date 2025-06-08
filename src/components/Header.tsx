import Link from 'next/link';
import { Clapperboard, ListVideo, Sparkles, Heart } from 'lucide-react';
import TerrorPlayLogo from './icons/TerrorPlayLogo';
import { Button } from './ui/button';

const navItems = [
  { href: '/', label: 'Videos', icon: ListVideo },
  { href: '/story-generator', label: 'AI Story Generator', icon: Sparkles },
  { href: '/watchlist', label: 'Watchlist', icon: Heart },
];

export default function Header() {
  return (
    <header className="bg-card/80 backdrop-blur-md shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center space-x-2 group" aria-label="TerrorPlay Home">
            <Clapperboard className="h-10 w-10 text-primary group-hover:text-accent transition-colors duration-300" />
            <TerrorPlayLogo className="h-10 w-auto hidden sm:block" />
          </Link>
          <nav className="flex items-center space-x-2 sm:space-x-4">
            {navItems.map((item) => (
              <Button key={item.label} variant="ghost" asChild className="text-foreground hover:text-accent hover:bg-accent/10 transition-colors duration-300">
                <Link href={item.href} className="flex items-center space-x-2 px-3 py-2 rounded-md">
                  <item.icon className="h-5 w-5" />
                  <span className="hidden md:inline">{item.label}</span>
                </Link>
              </Button>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
