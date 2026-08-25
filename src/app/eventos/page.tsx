import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clapperboard, Puzzle, Drama, Skull, Footprints, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Eventos de Terror a Medida | Pasajes, Escape Rooms y Cenas de Misterio',
  description: 'Pasajes del terror, escape rooms, cenas de misterio, real games zombie y Extreme House. Diseñamos y montamos eventos de terror a medida en Sevilla y toda Andalucía.',
  alternates: { canonical: '/eventos' },
};

const eventServices = [
  {
    icon: Skull,
    title: "Extreme House",
    description: "La experiencia de terror definitiva, solo para mayores de 18 años. Grupos reducidos, 45 minutos y actores entrenados para llevarte al límite de tu resistencia. No apto para sensibles.",
    imageSrc: "/78042.jpg",
    imageHint: "extreme house terror",
    href: "/eventos/extreme-house",
  },
  {
    icon: Clapperboard,
    title: "Pasajes del Terror",
    description: "Diseñamos y montamos pasajes del terror a medida para todo tipo de públicos y espacios: fiestas privadas, eventos de empresa, ayuntamientos, centros comerciales y más. Nos encargamos de la escenografía, actores, efectos especiales y sonido.",
    imageSrc: "/229f6432-7b10-4354-ad95-9103e3bcdb4a.jpg",
    imageHint: "haunted house passage interior",
    href: "/eventos/pasajes-del-terror",
  },
  {
    icon: Puzzle,
    title: "Escape Rooms de Terror",
    description: "Creamos experiencias de escape room inmersivas con temática de terror. Resuelve los puzzles, encuentra las pistas y escapa antes de que sea demasiado tarde. Disponibles en versión portátil para llevar a tu localización o en locales asociados.",
    imageSrc: "/bd8f6f72-46e5-4169-adef-4ed8af1de77e.jpg",
    imageHint: "dark escape room puzzle",
    href: "/eventos/escape-rooms",
  },
  {
    icon: Drama,
    title: "Cenas y Cluedo de Misterio",
    description: "Una velada inolvidable donde los invitados se convierten en detectives (o sospechosos). Organizamos cenas con asesinato, cluedos en vivo y eventos de misterio personalizados, perfectos para team building y celebraciones originales.",
    imageSrc: "/Gemini_Generated_Image_vlzx92vlzx92vlzx.png",
    imageHint: "mystery dinner scene",
    href: "/eventos/cenas-de-misterio",
  },
  {
    icon: Footprints,
    title: "Real Games y Supervivencia Zombie",
    description: "Eventos a gran escala en pueblos, fincas o recintos grandes. Los participantes deben sobrevivir, cumplir misiones y evitar a las hordas de zombies o criaturas que hemos preparado para ellos. Pura adrenalina.",
    imageSrc: "/ojos-de-zombi-de-cerca.jpg",
    imageHint: "zombie survival outdoor",
    href: "/eventos/real-games",
  },
];

export default function EventosPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 space-y-12">
      <section className="text-center animate-fade-in relative overflow-hidden rounded-lg p-4">
        <Clapperboard className="h-16 w-16 text-primary mx-auto mb-4" />
        <h1 className="text-5xl md:text-7xl font-horror text-primary mb-4 animate-text-flicker">Nuestros Eventos de Terror</h1>
        <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
          Desde sustos y adrenalina hasta misterios y tensión. Explora los tipos de experiencias que podemos crear para ti.
        </p>
      </section>

      <section className="space-y-8">
        {eventServices.map((service, index) => (
          <Card key={service.title} className="overflow-hidden animate-slide-up bg-scratches transition-colors hover:border-primary/60" style={{animationDelay: `${index * 0.1}s`}}>
            <div className="grid md:grid-cols-5 md:gap-6 items-center">
              <div className="md:col-span-2">
                <Link href={service.href} aria-label={service.title}>
                  <Image
                    src={service.imageSrc}
                    width={600}
                    height={400}
                    alt={service.title}
                    className="w-full h-64 md:h-full object-cover transition-transform duration-500 hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 40vw"
                    data-ai-hint={service.imageHint}
                  />
                </Link>
              </div>
              <div className="md:col-span-3 p-6">
                <CardHeader>
                  <CardTitle className="flex items-center text-2xl md:text-3xl font-horror">
                    <service.icon className="h-8 w-8 mr-4 text-accent shrink-0" />
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <CardDescription className="text-base text-muted-foreground">
                    {service.description}
                  </CardDescription>
                  <Button asChild variant="outline" className="border-primary/60 hover:bg-primary/10">
                    <Link href={service.href}>
                      Ver este evento
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </div>
            </div>
          </Card>
        ))}
      </section>

      <section className="text-center bg-scratches rounded-lg p-8 shadow-xl">
        <h2 className="text-3xl font-horror text-primary mb-4">¿No sabes cuál encaja con tu evento?</h2>
        <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
          Cuéntanos qué tienes en mente (fecha, lugar y número de personas) y te proponemos la experiencia que mejor funcione.
        </p>
        <Button size="lg" asChild className="bg-accent hover:bg-accent/90 text-accent-foreground">
          <Link href="/contacto">Pedir presupuesto sin compromiso</Link>
        </Button>
      </section>
    </div>
  );
}
