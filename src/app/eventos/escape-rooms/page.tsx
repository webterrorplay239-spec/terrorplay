
import { Puzzle } from 'lucide-react';
import Image from 'next/image';

export default function EscapeRoomsPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 space-y-12">
      <section className="text-center animate-fade-in relative overflow-hidden rounded-lg p-4">
        <Puzzle className="h-16 w-16 text-primary mx-auto mb-4" />
        <h1 className="text-5xl md:text-7xl font-headline text-primary mb-4 animate-text-flicker">Escape Rooms de Terror</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">La tensión aumenta con cada segundo. ¿Podrás resolver el misterio y escapar a tiempo?</p>
      </section>
       <section className="animate-slide-up">
        <Image
          src="https://placehold.co/1200x600.png"
          alt="Escape room de terror"
          width={1200}
          height={600}
          className="rounded-lg shadow-2xl w-full h-auto object-cover"
          data-ai-hint="dark escape room door"
        />
      </section>

       <section className="max-w-4xl mx-auto text-lg text-left md:text-center space-y-4 text-muted-foreground leading-relaxed p-6 rounded-lg bg-scratches">
          <p>
           Nuestras escape rooms temáticas de terror van un paso más allá de los candados y las llaves. Sumérgete en historias complejas y atmósferas opresivas donde el ingenio es tan importante como el valor.
          </p>
          <p>
           Ofrecemos experiencias portátiles que podemos llevar al lugar que elijas, perfectas para eventos de empresa, cumpleaños o fiestas privadas. También colaboramos con locales para crear experiencias fijas más grandes y elaboradas. Cada puzzle y cada susto están diseñados para mantener a tu equipo en vilo hasta el último minuto.
          </p>
      </section>
    </div>
  );
}
