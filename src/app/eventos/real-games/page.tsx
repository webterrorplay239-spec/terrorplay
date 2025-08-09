
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ParallaxBanner } from '@/components/ParallaxBanner';
import { Ghost, MessageSquareQuote, Skull, ShieldQuestion, Footprints } from 'lucide-react';

export const metadata = {
  title: 'Real Games y Supervivencia Zombie - Adrenalina a Gran Escala',
  description: 'Participa en nuestros Real Games y eventos de Supervivencia Zombie. Eventos a gran escala donde tendrás que cumplir misiones, sobrevivir y evitar a las hordas.',
};

export default function RealGamesPage() {
  return (
    <div className="space-y-0">
       <ParallaxBanner imageUrl="https://placehold.co/1200x800.png" dataAiHint="zombie apocalypse street">
        <div className="relative z-20 text-center flex flex-col items-center justify-center h-full bg-black/70 p-8 animate-fade-in">
            <Ghost className="h-24 w-24 text-accent mb-4" />
            <h1 className="text-5xl md:text-7xl font-['Lacquer',_cursive] text-primary mb-6 drop-shadow-lg animate-text-flicker">
              Supervivencia Zombie
            </h1>
            <p className="text-xl md:text-2xl text-foreground max-w-3xl mx-auto mb-8 drop-shadow-md">
               El apocalipsis ha llegado. ¿Tienes lo que hay que tener para sobrevivir a la noche?
            </p>
        </div>
      </ParallaxBanner>
      
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 space-y-8 bg-scratches rounded-lg my-12">
        <h2 className="text-4xl font-['Lacquer',_cursive] text-center text-primary">Tu Pueblo, Nuestro Campo de Batalla</h2>
        <div className="max-w-4xl mx-auto text-lg text-left md:text-center space-y-4 text-muted-foreground leading-relaxed">
          <p>
            Nuestros Real Games transforman pueblos enteros, grandes recintos o fincas en un escenario de película. Durante horas, los participantes se sumergen en una trama apocalíptica donde cada decisión cuenta.
          </p>
          <p>
            No se trata solo de correr. Tendréis que resolver enigmas, interactuar con actores, seguir pistas y, por supuesto, evitar ser "cazado" por las hordas de zombies y otras criaturas que acechan en la oscuridad. Es una experiencia de inmersión total que pone a prueba el ingenio, el trabajo en equipo y la resistencia.
          </p>
        </div>
      </section>

      <SectionDivider />

       <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 text-center">
        <div className="relative animate-slide-up">
          <h2 className="text-4xl font-['Lacquer',_cursive] text-center text-primary">Las Claves de la Supervivencia</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Más que un juego, una experiencia de supervivencia inmersiva.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 pt-12">
          <HowItWorksStep
            icon={<ShieldQuestion className="h-12 w-12 text-accent" />}
            title="1. Misiones y Objetivos"
            description="No estás solo para correr. Recibirás un mapa y una serie de misiones que te harán explorar el terreno y desvelar la trama principal."
             animationDelay="0.2s"
          />
          <HowItWorksStep
            icon={<Skull className="h-12 w-12 text-accent" />}
            title="2. Hordas de Infectados"
            description="Nuestros actores y figurantes, caracterizados profesionalmente, son el corazón del evento. No son solo obstáculos, son cazadores."
            animationDelay="0.4s"
          />
          <HowItWorksStep
            icon={<Footprints className="h-12 w-12 text-accent" />}
            title="3. Zonas Seguras e Interacción"
            description="Habrá puntos de control y zonas seguras donde podrás interactuar con otros personajes (actores) que te darán pistas, objetos o nuevas misiones."
            animationDelay="0.6s"
          />
        </div>
      </section>

      <SectionDivider />
      
       <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 text-center">
         <div className="relative animate-slide-up">
            <h2 className="text-4xl font-['Lacquer',_cursive] text-center text-primary">Opiniones de los Supervivientes</h2>
         </div>
         <div className="grid md:grid-cols-2 gap-8 pt-12 max-w-4xl mx-auto">
            <TestimonialCard
              quote="¡La experiencia más intensa y divertida de mi vida! Sentir a todo un pueblo sumido en el caos es algo que no se puede describir."
              author="Participante - Survival Zombie Edición Especial"
              animationDelay="0.2s"
            />
            <TestimonialCard
              quote="Lo organizaron para las fiestas del pueblo y fue un éxito sin precedentes. Participó gente de todas las edades. ¡Repetiremos!"
              author="Ayuntamiento de Villaterror"
              animationDelay="0.4s"
            />
         </div>
      </section>

      <SectionDivider />

       <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 text-center bg-scratches my-12 rounded-lg shadow-xl animate-slide-up">
          <h3 className="text-3xl font-['Lacquer',_cursive] text-primary mb-4">¿Listo para el Fin del Mundo?</h3>
          <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
            Contacta con nosotros para organizar un Real Game o Supervivencia Zombie en tu localidad. La adrenalina está garantizada.
          </p>
          <Button size="lg" asChild className="bg-accent hover:bg-accent/90 text-accent-foreground">
            <Link href="/contacto">Desatar el Apocalipsis</Link>
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
