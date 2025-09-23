import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, Twitter } from "lucide-react";
import { Button } from "./ui/button";

const socialLinks = [
  {
    name: "Instagram",
    href: "https://instagram.com",
    icon: Instagram,
  },
  {
    name: "Facebook",
    href: "https://facebook.com",
    icon: Facebook,
  },
  {
    name: "Twitter / X",
    href: "https://x.com",
    icon: Twitter,
  },
];


export default function Footer() {
  return (
    <footer className="bg-card/50 border-t border-border/50 py-8 text-center text-muted-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center space-x-4 mb-4">
          <Image src="/logo.png" alt="TerrorPlay Logo" width={48} height={48} className="h-12 w-12 object-contain" unoptimized />
          {socialLinks.map((social) => (
            <Button key={social.name} variant="ghost" size="icon" asChild>
              <Link href={social.href} target="_blank" rel="noopener noreferrer">
                <social.icon className="h-6 w-6" />
                <span className="sr-only">{social.name}</span>
              </Link>
            </Button>
          ))}
        </div>
        <div className="mt-6 flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs">
          <Link href="/aviso-legal" className="hover:text-primary transition-colors">
            Aviso Legal
          </Link>
          <Link href="/privacidad" className="hover:text-primary transition-colors">
            Política de Privacidad
          </Link>
          <Link href="/cookies" className="hover:text-primary transition-colors">
            Política de Cookies
          </Link>
          <Link href="/accesibilidad" className="hover:text-primary transition-colors">
            Accesibilidad
          </Link>
        </div>
        
        <p className="text-sm mt-6">
          &copy; {new Date().getFullYear()} TerrorPlay. Todos los derechos reservados.
        </p>
        <p className="text-xs mt-2">
          La productora de tus peores pesadillas.
        </p>
      </div>
    </footer>
  );
}
