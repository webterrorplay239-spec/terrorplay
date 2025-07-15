
import { Drama } from 'lucide-react';
import Image from 'next/image';

export default function CenasDeMisterioPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 space-y-12">
      <section className="text-center animate-fade-in relative overflow-hidden rounded-lg p-4">
        <Drama className="h-16 w-16 text-primary mx-auto mb-4" />
        <h1 className="text-5xl md:text-7xl font-headline text-primary mb-4 animate-text-flicker">Cenas de Misterio</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">Un asesinato, un grupo de sospechosos y una cena deliciosa. ¿Quién es el culpable?</p>
      </section>
      
      <section className="animate-slide-up">
        <Image
          src="https://placehold.co/1200x600.png"
          alt="Cena de misterio"
          width={1200}
          height={600}
          className="rounded-lg shadow-2xl w-full h-auto object-cover"
          data-ai-hint="elegant mystery dinner"
        />
      </section>

      <section className="max-w-4xl mx-auto text-lg text-left md:text-center space-y-4 text-muted-foreground leading-relaxed p-6 rounded-lg bg-scratches">
          <p>
            Disfruta de una velada diferente con nuestras cenas de misterio y cluedos en vivo. Cada invitado recibe un papel y un conjunto de objetivos, pero uno de vosotros es un asesino. 
          </p>
          <p>
            A lo largo de la cena, tendréis que interrogar a los demás, descubrir pistas y desenmascarar al culpable antes de que sea demasiado tarde. Es la actividad perfecta para team building, celebraciones de cumpleaños o simplemente una noche original con amigos. Nos adaptamos a cualquier número de participantes y localización.
          </p>
      </section>
    </div>
  );
}
