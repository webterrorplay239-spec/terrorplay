
"use client";

import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Clapperboard, Puzzle, Drama, Skull } from 'lucide-react';

const eventServices = [
  {
    icon: Clapperboard,
    title: "Pasajes del Terror",
    description: "Diseñamos y montamos pasajes del terror a medida para todo tipo de públicos y espacios: fiestas privadas, eventos de empresa, ayuntamientos, centros comerciales y más. Nos encargamos de la escenografía, actores, efectos especiales y sonido.",
    imageSrc: "https://placehold.co/600x400.png",
    imageHint: "haunted house passage interior"
  },
  {
    icon: Puzzle,
    title: "Escape Rooms de Terror",
    description: "Creamos experiencias de escape room inmersivas con temática de terror. Resolve puzzles, encuentra pistas y escapa antes de que sea demasiado tarde. Disponibles en versión portátil para llevar a tu localización o en locales asociados.",
    imageSrc: "https://placehold.co/600x400.png",
    imageHint: "dark escape room puzzle"
  },
  {
    icon: Drama,
    title: "Cenas y Cluedo de Misterio",
    description: "Una velada inolvidable donde los invitados se convierten en detectives (o sospechosos). Organizamos cenas con asesinato, cluedos en vivo y eventos de misterio personalizados, perfectos para team building y celebraciones originales.",
    imageSrc: "https://placehold.co/600x400.png",
    imageHint: "mystery dinner scene"
  },
   {
    icon: Skull,
    title: "Real Games y Supervivencia Zombie",
    description: "Eventos a gran escala en pueblos, fincas o recintos grandes. Los participantes deben sobrevivir, cumplir misiones y evitar a las hordas de zombies o criaturas que hemos preparado para ellos. Pura adrenalina.",
    imageSrc: "https://placehold.co/600x400.png",
    imageHint: "zombie survival outdoor"
  },
];

export default function EventosPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 space-y-12">
      <section className="text-center animate-fade-in relative overflow-hidden rounded-lg p-4">
        <div className="absolute inset-0 bg-primary/10 animate-static-noise -z-10"></div>
        <Clapperboard className="h-16 w-16 text-primary mx-auto mb-4" />
        <h1 className="text-5xl md:text-7xl font-headline text-primary mb-4">Nuestros Eventos de Terror</h1>
        <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
          Desde sustos y adrenalina hasta misterios y tensión. Explora los tipos de experiencias que podemos crear para ti.
        </p>
      </section>

      <section className="space-y-8">
        {eventServices.map((service, index) => (
          <Card key={service.title} className="overflow-hidden animate-slide-up bg-scratches" style={{animationDelay: `${index * 0.1}s`}}>
            <div className="grid md:grid-cols-5 md:gap-6 items-center">
              <div className="md:col-span-2">
                 <Image 
                    src={service.imageSrc}
                    width={600}
                    height={400}
                    alt={service.title}
                    className="w-full h-64 md:h-full object-cover"
                    data-ai-hint={service.imageHint}
                />
              </div>
              <div className="md:col-span-3 p-6">
                <CardHeader>
                  <CardTitle className="flex items-center text-2xl md:text-3xl font-headline">
                    <service.icon className="h-8 w-8 mr-4 text-accent" />
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base text-muted-foreground">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </div>
            </div>
          </Card>
        ))}
      </section>
    </div>
  );
}
