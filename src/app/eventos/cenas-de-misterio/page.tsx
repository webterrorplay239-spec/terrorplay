'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ParallaxBanner } from '@/components/ParallaxBanner';
import { Drama, MessageSquareQuote, Skull, PartyPopper } from 'lucide-react';

export default function CenasDeMisterioPage() {
  return (
    <div className="space-y-0">
       <ParallaxBanner 
        imageUrl="/Gemini_Generated_Image_vlzx92vlzx92vlzx.png" 
        dataAiHint="elegant mystery dinner"
      >
        <div className="relative z-20 text-center flex flex-col items-center justify-center h-screen min-h-[600px] bg-black/70 p-8 animate-fade-in">
          <Drama className="h-24 w-24 text-accent mb-4" />
          <h1 className="text-5xl md:text-7xl font-horror text-red-600 mb-6 drop-shadow-lg animate-text-flicker">
            Cenas de Misterio
          </h1>
          <p className="text-xl md:text-2xl text-foreground max-w-3xl mx-auto mb-8 drop-shadow-md">
            Un asesinato, un grupo de sospechosos y una cena deliciosa. ¿Quién es el culpable?
          </p>
          <div className="mt-4 bg-red-950/30 p-4 rounded-lg max-w-2xl">
            <p className="text-sm text-red-200">
              Sumérgete en una noche de intriga, secretos y conspiraciones.
              Cada invitado es un sospechoso, y el asesino está entre nosotros.
            </p>
          </div>
        </div>
      </ParallaxBanner>
      
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 space-y-8 bg-scratches rounded-lg my-12">
        <h2 className="text-4xl font-horror text-red-600 text-center mb-6">Una Velada de Intriga Inolvidable</h2>
        <div className="max-w-4xl mx-auto text-lg text-left md:text-center space-y-4 text-foreground leading-relaxed">
          <p>
            Disfruta de una velada diferente con nuestras cenas de misterio y cluedos en vivo. Cada invitado recibe un papel y un conjunto de objetivos, pero uno de vosotros es un asesino. 
          </p>
          <p>
            A lo largo de la cena, tendréis que interrogar a los demás, descubrir pistas y desenmascarar al culpable antes de que sea demasiado tarde. Es la actividad perfecta para team building, celebraciones de cumpleaños o simplemente una noche original con amigos. Nos adaptamos a cualquier número de participantes y localización.
          </p>
        </div>
      </section>

      {/* <SectionDivider /> */}

       <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 text-center">
        <div className="relative animate-slide-up">
          <h2 className="text-4xl font-['Lacquer',_cursive] text-center text-primary">Organizamos tu Noche de Misterio</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Nos encargamos de todo para que solo te preocupes de acusar (o de no ser descubierto).</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 pt-12">
          <HowItWorksStep
            icon={<MessageSquareQuote className="h-12 w-12 text-accent" />}
            title="1. Diseño de la Trama"
            description="Elegimos o creamos una historia de misterio a medida para tu grupo. Desde crímenes de época hasta conspiraciones modernas."
             animationDelay="0.2s"
          />
          <HowItWorksStep
            icon={<Skull className="h-12 w-12 text-accent" />}
            title="2. Asignación de Papeles"
            description="Cada invitado recibe con antelación su personaje, con su trasfondo, secretos y objetivos para la noche. ¡La intriga empieza antes de la cena!"
            animationDelay="0.4s"
          />
          <HowItWorksStep
            icon={<PartyPopper className="h-12 w-12 text-accent" />}
            title="3. Dirección del Evento"
            description="Nuestros actores guían el evento, revelan pistas clave y se aseguran de que la trama avance. Garantizamos una noche llena de giros y sorpresas."
            animationDelay="0.6s"
          />
        </div>
      </section>

      <SectionDivider />
      
       <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 text-center">
         <div className="relative animate-slide-up">
            <h2 className="text-4xl font-['Lacquer',_cursive] text-center text-primary">Opiniones de Nuestros Clientes</h2>
         </div>
         <div className="grid md:grid-cols-2 gap-8 pt-12 max-w-4xl mx-auto">
            <TestimonialCard
              quote="¡La mejor actividad de team building que hemos hecho! Fue divertidísimo ver a todo el equipo metido en su papel. Repetiremos."
              author="CEO - Creative Minds Agency"
              animationDelay="0.2s"
            />
            <TestimonialCard
              quote="Organizaron una cena de misterio para mi 40 cumpleaños y fue el alma de la fiesta. Todos mis amigos alucinaron."
              author="David L. - Cumpleaños"
              animationDelay="0.4s"
            />
         </div>
      </section>

      <SectionDivider />

       <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 text-center bg-scratches my-12 rounded-lg shadow-xl animate-slide-up">
          <h3 className="text-3xl font-['Lacquer',_cursive] text-primary mb-4">¿Listo para Resolver el Crimen?</h3>
          <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
            Contacta con nosotros para organizar una cena de misterio o cluedo en vivo. La excusa perfecta para una noche diferente, original y muy entretenida.
          </p>
          <Button size="lg" asChild className="bg-accent hover:bg-accent/90 text-accent-foreground">
            <Link href="/contacto">Organizar mi Cena</Link>
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
      <h3 className="text-2xl font-['Lacquer',_cursive]">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
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
                <p className="text-right font-['Lacquer',_cursive] text-primary">— {author}</p>
            </CardContent>
        </Card>
    )
}
