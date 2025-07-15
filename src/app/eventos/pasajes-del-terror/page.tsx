
import { Clapperboard } from 'lucide-react';
import Image from 'next/image';

export default function PasajesDelTerrorPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 space-y-12">
      <section className="text-center animate-fade-in relative overflow-hidden rounded-lg p-4">
        <div className="absolute inset-0 bg-primary/10 animate-static-noise -z-10"></div>
        <Clapperboard className="h-16 w-16 text-primary mx-auto mb-4" />
        <h1 className="text-5xl md:text-7xl font-headline text-primary mb-4">Pasajes del Terror</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">Creamos recorridos de miedo a medida, donde cada esquina esconde un nuevo grito.</p>
      </section>

      <section className="animate-slide-up">
        <Image
          src="https://placehold.co/1200x600.png"
          alt="Pasaje del terror"
          width={1200}
          height={600}
          className="rounded-lg shadow-2xl w-full h-auto object-cover"
          data-ai-hint="haunted house spooky corridor"
        />
      </section>

      <section className="max-w-4xl mx-auto text-lg text-left md:text-center space-y-4 text-muted-foreground leading-relaxed p-6 rounded-lg bg-scratches">
          <p>
            En TerrorPlay, somos especialistas en el diseño y montaje de pasajes del terror que se adaptan a cualquier espacio y público. Transformamos locales, fincas, recintos feriales o incluso tu propia casa en un laberinto de pesadilla. 
          </p>
          <p>
            Nos encargamos de absolutamente todo: la conceptualización de la historia, la construcción de decorados, la iluminación y efectos de sonido de cine, y por supuesto, un elenco de actores profesionales que harán que los participantes vivan una experiencia terroríficamente real.
          </p>
      </section>
    </div>
  );
}
