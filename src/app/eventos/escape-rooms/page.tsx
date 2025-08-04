
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ParallaxBanner } from '@/components/ParallaxBanner';
import { Puzzle, MessageSquareQuote, Skull, PartyPopper } from 'lucide-react';

export const metadata = {
  title: 'Escape Rooms de Terror Portátiles y a Medida - TerrorPlay',
  description: 'Creamos escape rooms de terror inmersivos y portátiles para eventos, fiestas y team building. Puzzles, misterio y sustos garantizados. ¿Podrás escapar?',
};

export default function EscapeRoomsPage() {
  return (
    <div className="space-y-0">
       <ParallaxBanner imageUrl="https://placehold.co/1200x800.png" dataAiHint="dark escape room door">
        <div className="relative z-20 text-center flex flex-col items-center justify-center h-full bg-black/70 p-8 animate-fade-in">
            <Puzzle className="h-24 w-24 text-accent mb-4" />
            <h1 className="text-5xl md:text-7xl font-headline text-primary mb-6 drop-shadow-lg animate-text-flicker">
              Escape Rooms de Terror
            </h1>
            <p className="text-xl md:text-2xl text-foreground max-w-3xl mx-auto mb-8 drop-shadow-md">
               La tensión aumenta con cada segundo. ¿Podrás resolver los enigmas y escapar a tiempo?
            </p>
        </div>
      </ParallaxBanner>
      
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 space-y-8 bg-scratches rounded-lg my-12">
        <h2 className="text-4xl font-headline text-center text-primary">El Misterio Llama a tu Puerta</h2>
         <div className="max-w-4xl mx-auto text-lg text-left md:text-center space-y-4 text-muted-foreground leading-relaxed">
          <p>
           Nuestras escape rooms temáticas de terror van un paso más allá de los candados y las llaves. Sumérgete en historias complejas y atmósferas opresivas donde el ingenio es tan importante como el valor.
          </p>
          <p>
           Ofrecemos experiencias portátiles que podemos llevar al lugar que elijas, perfectas para eventos de empresa, cumpleaños o fiestas privadas. También colaboramos con locales para crear experiencias fijas más grandes y elaboradas. Cada puzzle y cada susto están diseñados para mantener a tu equipo en vilo hasta el último minuto.
          </p>
        </div>
      </section>

      <SectionDivider />

      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 text-center">
        <div className="relative animate-slide-up">
          <h2 className="text-4xl font-headline text-center text-primary">¿Cómo Funciona un Escape Room Portátil?</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Llevamos el terror y el misterio a la localización que tú elijas.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 pt-12">
          <HowItWorksStep
            icon={<MessageSquareQuote className="h-12 w-12 text-accent" />}
            title="1. Elige tu Aventura"
            description="Contacta con nosotros, cuéntanos sobre tu evento y te ayudaremos a elegir la temática y nivel de dificultad perfectos para tu grupo."
             animationDelay="0.2s"
          />
          <HowItWorksStep
            icon={<Skull className="h-12 w-12 text-accent" />}
            title="2. Montaje Inmersivo"
            description="Nuestro equipo se desplaza y transforma tu espacio (una oficina, un salón, un jardín) en el escenario de la escape room con atrezo, sonido y efectos."
            animationDelay="0.4s"
          />
          <HowItWorksStep
            icon={<PartyPopper className="h-12 w-12 text-accent" />}
            title="3. A Jugar (y a Gritar)"
            description="Un Game Master introduce la historia y supervisa el juego, dando pistas (o sustos) cuando es necesario. Vosotros solo tenéis que resolver el misterio."
            animationDelay="0.6s"
          />
        </div>
      </section>

      <SectionDivider />
      
       <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 text-center">
         <div className="relative animate-slide-up">
            <h2 className="text-4xl font-headline text-center text-primary">Opiniones de Nuestros Detectives</h2>
         </div>
         <div className="grid md:grid-cols-2 gap-8 pt-12 max-w-4xl mx-auto">
            <TestimonialCard
              quote="Una experiencia de team building increíble. Montaron la escape room en nuestra oficina y fue súper inmersivo. ¡Muy recomendable!"
              author="Directora de Marketing - Innova Solutions"
              animationDelay="0.2s"
            />
            <TestimonialCard
              quote="¡Perfecto para un cumpleaños diferente! Los puzzles eran muy originales y la ambientación de 10. Lo pasamos de miedo."
              author="Marta R. - Cumpleaños"
              animationDelay="0.4s"
            />
         </div>
      </section>

      <SectionDivider />

       <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 text-center bg-scratches my-12 rounded-lg shadow-xl animate-slide-up">
          <h3 className="text-3xl font-headline text-primary mb-4">¿Te Atreves a Enfrentarte al Desafío?</h3>
          <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
            Ideal para grupos, empresas y cualquiera que busque una actividad original. Pide presupuesto para tu escape room de terror a medida.
          </p>
          <Button size="lg" asChild className="bg-accent hover:bg-accent/90 text-accent-foreground">
            <Link href="/contacto">Reservar Experiencia</Link>
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

    