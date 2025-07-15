
import Link from 'next/link';
import { Calendar, Users, Mail, Menu } from 'lucide-react';
import TerrorPlayLogo from './icons/TerrorPlayLogo';
import { Button } from './ui/button';
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';

const navItems = [
  { href: '/eventos', label: 'Eventos', icon: Calendar },
  { href: '/quienes-somos', label: 'Quiénes Somos', icon: Users },
  { href: '/contacto', label: 'Contacto', icon: Mail },
];

export default function Header() {
  return (
    <header className="bg-card/80 backdrop-blur-md shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center space-x-2 group" aria-label="TerrorPlay Home">
            <TerrorPlayLogo className="h-12 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-2">
            {navItems.map((item) => (
              <Button key={item.label} variant="ghost" asChild>
                <Link href={item.href} className="flex items-center space-x-2 px-3 py-2">
                  <item.icon className="h-5 w-5" />
                  <span>{item.label}</span>
                </Link>
              </Button>
            ))}
            <Button asChild className="ml-4 bg-primary hover:bg-primary/90 text-primary-foreground">
              <Link href="/contacto">Solicita Presupuesto</Link>
            </Button>
          </nav>

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Abrir menú</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <nav className="flex flex-col space-y-4 mt-8">
                  {navItems.map((item) => (
                    <Button key={item.label} variant="ghost" asChild>
                       <Link href={item.href} className="flex items-center space-x-3 text-lg">
                          <item.icon className="h-6 w-6" />
                          <span>{item.label}</span>
                       </Link>
                    </Button>
                  ))}
                  <Button asChild className="mt-6 bg-primary hover:bg-primary/90 text-primary-foreground">
                    <Link href="/contacto">Solicita Presupuesto</Link>
                  </Button>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
