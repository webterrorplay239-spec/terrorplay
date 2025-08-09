
"use client";

import Link from 'next/link';
import { Calendar, Users, Mail, Menu, ChevronDown, Clapperboard, Puzzle, Drama, Ticket } from 'lucide-react';
import NeonLogo from './icons/NeonLogo';
import { Button } from './ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetClose, SheetHeader, SheetTitle } from './ui/sheet';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion';
import TicketPurchaseDialog from './TicketPurchaseDialog';
import { useState } from 'react';

const mainNavItems = [
  { href: '/quienes-somos', label: 'Quiénes Somos', icon: Users },
  { href: '/contacto', label: 'Contacto', icon: Mail },
];

const eventNavItems = [
    { href: '/eventos/pasajes-del-terror', label: 'Pasajes del Terror', icon: Clapperboard },
    { href: '/eventos/escape-rooms', label: 'Escape Rooms', icon: Puzzle },
    { href: '/eventos/cenas-de-misterio', label: 'Cenas de Misterio', icon: Drama },
];

export default function Header() {
  const [isTicketModalOpen, setTicketModalOpen] = useState(false);
  
  return (
    <>
    <header className="bg-card/80 backdrop-blur-md shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center space-x-2 group" aria-label="TerrorPlay Home">
            <NeonLogo className="h-12 w-auto text-primary" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-2">
             <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost">
                  <Calendar className="h-5 w-5 mr-2" />
                  <span>Eventos</span>
                  <ChevronDown className="h-4 w-4 ml-1" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                {eventNavItems.map((item) => (
                    <DropdownMenuItem key={item.label} asChild>
                        <Link href={item.href} className="flex items-center space-x-2">
                            <item.icon className="h-5 w-5" />
                            <span>{item.label}</span>
                        </Link>
                    </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {mainNavItems.map((item) => (
              <Button key={item.label} variant="ghost" asChild>
                <Link href={item.href} className="flex items-center space-x-2 px-3 py-2">
                  <item.icon className="h-5 w-5" />
                  <span>{item.label}</span>
                </Link>
              </Button>
            ))}
            
            <Button onClick={() => setTicketModalOpen(true)} className="ml-4 bg-primary hover:bg-primary/90 text-primary-foreground">
              <Ticket className="h-5 w-5 mr-2" />
              Compra tus Entradas
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
                 <SheetHeader>
                    <SheetTitle className="sr-only">Menú de Navegación</SheetTitle>
                </SheetHeader>
                <nav className="flex flex-col space-y-2 mt-8">
                   
                   <Button onClick={() => {
                     const closeButton = document.querySelector('[data-radix-collection-item]')?.closest('button');
                     if (closeButton) closeButton.click();
                     setTicketModalOpen(true)
                    }} className="mb-4 bg-primary hover:bg-primary/90 text-primary-foreground">
                      <Ticket className="h-5 w-5 mr-2" />
                      Compra tus Entradas
                   </Button>
                   
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="eventos" className="border-b-0">
                      <AccordionTrigger className="hover:no-underline text-lg">
                        <div className="flex items-center space-x-3">
                            <Calendar className="h-6 w-6" />
                            <span>Eventos</span>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="pl-8">
                         {eventNavItems.map((item) => (
                            <SheetClose asChild key={item.label}>
                                <Link href={item.href} className="flex items-center space-x-3 text-lg py-3">
                                    <item.icon className="h-6 w-6" />
                                    <span>{item.label}</span>
                                </Link>
                            </SheetClose>
                         ))}
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>

                  {mainNavItems.map((item) => (
                     <SheetClose asChild key={item.label}>
                       <Link href={item.href} className="flex items-center space-x-3 text-lg p-4">
                          <item.icon className="h-6 w-6" />
                          <span>{item.label}</span>
                       </Link>
                    </SheetClose>
                  ))}
                  <Button asChild className="mt-6 bg-accent hover:bg-accent/90 text-accent-foreground">
                     <SheetClose asChild>
                        <Link href="/contacto">Solicita Presupuesto</Link>
                     </SheetClose>
                  </Button>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
    <TicketPurchaseDialog isOpen={isTicketModalOpen} onOpenChange={setTicketModalOpen} />
    </>
  );
}
