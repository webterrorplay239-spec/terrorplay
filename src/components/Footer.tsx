
import Link from "next/link";
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
          {socialLinks.map((social) => (
            <Button key={social.name} variant="ghost" size="icon" asChild>
              <Link href={social.href} target="_blank" rel="noopener noreferrer">
                <social.icon className="h-6 w-6" />
                <span className="sr-only">{social.name}</span>
              </Link>
            </Button>
          ))}
        </div>
        <p className="text-sm">
          &copy; {new Date().getFullYear()} TerrorPlay. Todos los derechos reservados.
        </p>
        <p className="text-xs mt-2">
          La productora de tus peores pesadillas.
        </p>
      </div>
    </footer>
  );
}
