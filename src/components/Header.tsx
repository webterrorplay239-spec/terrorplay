
import Link from 'next/link';
import { Ticket, Map, Sparkles, Info, Clapperboard } from 'lucide-react'; // Clapperboard might be replaced by a real logo component later
import HorrorlandSevillaLogo from './icons/TerrorPlayLogo'; // Corrected import path
import { Button } from './ui/button';

const navItems = [
  { href: '/', label: 'El Parque', icon: Ticket },
  { href: '/atracciones', label: 'Atracciones', icon: Map },
  { href: '/experiencias', label: 'Experiencias IA', icon: Sparkles },
  { href: '/informacion', label: 'Info Práctica', icon: Info },
];

export default function Header() {
  return (
    <header className="bg-card/80 backdrop-blur-md shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center space-x-2 group" aria-label="Horrorland Sevilla Home">
            {/* Using Clapperboard as a placeholder visual for the logo icon part */}
            <Clapperboard className="h-10 w-10 text-primary group-hover:text-accent transition-colors duration-300" />
            <HorrorlandSevillaLogo className="h-10 w-auto hidden sm:block" />
          </Link>
          <nav className="flex items-center space-x-1 sm:space-x-2">
            {navItems.map((item) => (
              <Button key={item.label} variant="ghost" asChild className="text-foreground hover:text-accent hover:bg-accent/10 transition-colors duration-300 text-xs md:text-sm">
                <Link href={item.href} className="flex items-center space-x-1 md:space-x-2 px-2 py-2 md:px-3 rounded-md">
                  <item.icon className="h-4 w-4 md:h-5 md:w-5" />
                  <span className="hidden sm:inline">{item.label}</span>
                </Link>
              </Button>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
