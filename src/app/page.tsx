
"use client";

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MessageSquareQuote, Skull, PartyPopper } from 'lucide-react';
import { ParallaxBanner } from '@/components/ParallaxBanner';
import NeonLogo from '@/components/icons/NeonLogo';
import HorrorIntro from '@/components/HorrorIntro';
import { useEffect, useState } from 'react';

export default function HomePage() {
  const [showIntro, setShowIntro] = useState(false);

  useEffect(() => {
    const hasSeenIntro = sessionStorage.getItem('terrorIntroSeen');
    if (!hasSeenIntro) {
      setShowIntro(true);
      sessionStorage.setItem('terrorIntroSeen', 'true');
    }
  }, []);
  
  if (showIntro) {
    return <HorrorIntro onFinished={() => setShowIntro(false)} />;
  }


  return (
    <div className="space-y-0">
      {/* Hero Section */}
      <ParallaxBanner imageUrl="https://placehold.co/1200x800.png" dataAiHint="dark atmospheric horror">
        <div className="relative z-20 text-center flex flex-col items-center justify-center h-full bg-black/70 p-8 animate-fade-in">
            <NeonLogo className="w-40 h-40 md:w-56 md:h-56 text-accent mb-4" />
            <h1 className="text-5xl md:text-7xl font-headline text-primary mb-6 drop-shadow-lg animate-text-flicker">
              Creamos Eventos de Terror Inolvidables
            </h1>
            <p className="text-xl md:text-2xl text-foreground max-w-3xl mx-auto mb-8 drop-shadow-md">
              Desde pasajes del terror y escape rooms hasta cenas de misterio. Damos vida a tus peores pesadillas para que disfrutes de una experiencia única.
            </p>
            <Button size="lg" asChild className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-lg animate-pulse">
              <Link href="/contacto">
                Solicita tu Presupuesto
              </Link>
            </Button>
        </div>
      </ParallaxBanner>

      <SectionDivider />

      {/* How it Works Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 text-center bg-scratches rounded-lg">
        <div className="relative animate-slide-up">
          <h2 className="text-4xl font-headline text-center text-primary">Cómo lo Hacemos</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Nuestro proceso para garantizar que tu evento sea terroríficamente perfecto.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 pt-12">
          <HowItWorksStep
            icon={<MessageSquareQuote className="h-12 w-12 text-accent" />}
            title="1. Cuéntanos tu Idea"
            description="Contactas con nosotros y nos explicas qué tipo de evento de terror tienes en mente. ¿Quieres sustos, misterio, o ambos?"
             animationDelay="0.2s"
          />
          <HowItWorksStep
            icon={<Skull className="h-12 w-12 text-accent" />}
            title="2. Diseño a Medida"
            description="Nuestro equipo de creativos diseña una experiencia única para ti, adaptando la historia, los actores y la ambientación a tus necesidades."
            animationDelay="0.4s"
          />
          <HowItWorksStep
            icon={<PartyPopper className="h-12 w-12 text-accent" />}
            title="3. Ejecución Impecable"
            description="Llevamos el terror donde nos pidas. Nos encargamos de todo el montaje, los actores y la producción para que solo te preocupes de gritar."
            animationDelay="0.6s"
          />
        </div>
      </section>

      <SectionDivider />

      {/* Our Events Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 text-center">
        <div className="relative animate-slide-up">
            <h2 className="text-4xl font-headline text-center text-primary">Nuestros Eventos</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Creamos todo tipo de experiencias de terror. Aquí tienes algunos ejemplos.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 pt-12">
          <EventCard
            imageSrc="https://placehold.co/600x400.png"
            imageHint="haunted house passage"
            title="Pasajes del Terror"
            description="Recorridos inmersivos llenos de sustos, actores y efectos especiales. Ideal para fiestas, ayuntamientos y centros comerciales."
            animationDelay="0.2s"
          />
          <EventCard
            imageSrc="https://placehold.co/600x400.png"
            imageHint="escape room dark"
            title="Escape Rooms Temáticos"
            description="Nuestros game masters os guiarán (o atormentarán) a través de un misterio que deberéis resolver antes de que sea tarde."
             animationDelay="0.4s"
          />
          <EventCard
            imageSrc="https://placehold.co/600x400.png"
            imageHint="murder mystery dinner"
            title="Cenas de Misterio"
            description="Una cena donde nada es lo que parece y uno de los comensales es un asesino. Perfecto para eventos de empresa y grupos."
            animationDelay="0.6s"
          />
        </div>
        <div className="mt-12 animate-slide-up" style={{animationDelay: "0.8s"}}>
            <Button variant="outline" asChild>
                <Link href="/eventos">Ver todos los servicios</Link>
            </Button>
        </div>
      </section>
      
      <SectionDivider />

      {/* Testimonials Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 text-center">
         <div className="relative animate-slide-up">
            <h2 className="text-4xl font-headline text-center text-primary">Opiniones de Nuestros Clientes</h2>
         </div>
         <div className="grid md:grid-cols-2 gap-8 pt-12 max-w-4xl mx-auto">
            <TestimonialCard
              quote="¡Increíble! Montaron un pasaje del terror para nuestra fiesta de Halloween y fue un éxito rotundo. Los actores eran de 10."
              author="Laura G. - Evento Privado"
              animationDelay="0.2s"
            />
            <TestimonialCard
              quote="La cena de misterio para nuestro team building fue genial. Muy bien organizada y divertida. ¡Repetiremos seguro!"
              author="Carlos M. - Empresa Tech"
              animationDelay="0.4s"
            />
         </div>
      </section>

      <SectionDivider />

      {/* Final CTA Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 text-center bg-scratches my-12 rounded-lg shadow-xl animate-slide-up">
          <h3 className="text-3xl font-headline text-primary mb-4">¿Hablamos de tu Próximo Evento?</h3>
          <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
            Estamos listos para hacer realidad tus pesadillas. Contacta con nosotros y pide un presupuesto sin compromiso.
          </p>
          <Button size="lg" asChild className="bg-accent hover:bg-accent/90 text-accent-foreground">
            <Link href="/contacto">Contactar</Link>
          </Button>
      </section>
    </div>
  );
}

function SectionDivider() {
    return (
        <div className="relative h-20 bg-transparent">
             <div className="absolute inset-0 bg-gradient-to-b from-background to-transparent z-10"></div>
             <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent z-10"></div>
            <svg className="absolute inset-0 w-full h-full text-primary" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0 5 Q 15 10, 30 5 T 70 5 Q 85 10, 100 5" stroke="currentColor" strokeWidth="0.2" fill="none" />
                 <path d="M0 6 Q 20 0, 45 6 T 100 6" stroke="hsl(var(--accent))" strokeWidth="0.1" fill="none" opacity="0.5" />
            </svg>
        </div>
    )
}


interface HowItWorksStepProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  animationDelay?: string;
}

function HowItWorksStep({ icon, title, description, animationDelay }: HowItWorksStepProps) {
  return (
    <div className="flex flex-col items-center space-y-3 p-4 rounded-lg transition-all duration-300 hover:bg-card/50 animate-slide-up" style={{ animationDelay }}>
      <div className="p-4 bg-card rounded-full">{icon}</div>
      <h3 className="text-2xl font-headline">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
}

interface EventCardProps {
  imageSrc: string;
  imageHint: string;
  title: string;
  description: string;
  animationDelay?: string;
}

function EventCard({ imageSrc, imageHint, title, description, animationDelay }: EventCardProps) {
  return (
    <Card className="text-left overflow-hidden transform transition-transform hover:scale-105 duration-300 bg-scratches border-border/50 group animate-slide-up" style={{ animationDelay }}>
       <div className="relative">
        <Image 
            src={imageSrc}
            width={600}
            height={400}
            alt={title}
            className="w-full h-48 object-cover"
            data-ai-hint={imageHint}
          />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      <CardHeader>
        <CardTitle className="font-headline text-2xl">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );
}

interface TestimonialCardProps {
  quote: string;
  author: string;
  animationDelay?: string;
}

function TestimonialCard({ quote, author, animationDelay }: TestimonialCardProps) {
    return (
        <Card className="bg-scratches p-6 text-left border-border/50 animate-slide-up" style={{ animationDelay }}>
            <CardContent className="p-0 space-y-4">
                <MessageSquareQuote className="w-8 h-8 text-accent" />
                <blockquote className="text-lg italic border-l-4 border-accent pl-4">
                    {quote}
                </blockquote>
                <p className="text-right font-headline text-primary">— {author}</p>
            </CardContent>
        </Card>
    )
}
