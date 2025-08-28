import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ParallaxBanner } from '@/components/ParallaxBanner';
import { Clapperboard, MessageSquareQuote, Skull, PartyPopper } from 'lucide-react';

export const metadata = {
  title: 'Pasajes del Terror a Medida - Eventos de Halloween y Fiestas',
  description: 'Diseñamos y montamos pasajes del terror profesionales para Halloween, fiestas de empresa y ayuntamientos. Actores, decorados y efectos especiales para un evento de miedo inolvidable.',
};

export default function PasajesDelTerrorPage() {
  return (
    <div className="space-y-0">
       <ParallaxBanner imageUrl="https://placehold.co/1200x800.png" dataAiHint="haunted house spooky corridor">
        <div className="relative z-20 text-center flex flex-col items-center justify-center h-full bg-black/70 p-8 animate-fade-in">
            <Clapperboard className="h-24 w-24 text-accent mb-4" />
            <h1 className="text-5xl md:text-7xl font-['Lacquer',_cursive] text-primary mb-6 drop-shadow-lg animate-text-flicker">
              Pasajes del Terror
            </h1>
            <p className="text-xl md:text-2xl text-foreground max-w-3xl mx-auto mb-8 drop-shadow-md">
              Creamos recorridos de miedo a medida, donde cada esquina esconde un nuevo grito. La experiencia de terror definitiva para tu evento de Halloween.
            </p>
        </div>
      </ParallaxBanner>

      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 space-y-8 bg-scratches rounded-lg my-12">
        <h2 className="text-4xl font-['Lacquer',_cursive] text-center text-primary">Especialistas en Gritos y Pesadillas</h2>
        <div className="max-w-4xl mx-auto text-lg text-left md:text-center space-y-4 text-muted-foreground leading-relaxed">
            <p>
                En TerrorPlay, somos especialistas en el diseño y montaje de pasajes del terror que se adaptan a cualquier espacio y público. Transformamos locales, fincas, recintos feriales o incluso tu propia casa en un laberinto de pesadilla.
            </p>
            <p>
                Nos encargamos de absolutamente todo: la conceptualización de la historia, la construcción de decorados, la iluminación y efectos de sonido de cine, y por supuesto, un elenco de actores profesionales que harán que los participantes vivan una experiencia terroríficamente real. Ideal para animaciones de Halloween, fiestas patronales o eventos corporativos.
            </p>
        </div>
      </section>

      {/* <SectionDivider /> */}

       <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 text-center">
        <div className="relative animate-slide-up">
          <h2 className="text-4xl font-['Lacquer',_cursive] text-center text-primary">Nuestro Proceso Creativo</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Así damos vida a tu pasaje del terror personalizado.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 pt-12">
          <HowItWorksStep
            icon={<MessageSquareQuote className="h-12 w-12 text-accent" />}
            title="1. Conceptualización"
            description="Escuchamos tu idea y el tipo de público. Diseñamos una temática y una historia que se ajuste a tus necesidades, desde terror psicológico a sustos sin parar."
             animationDelay="0.2s"
          />
          <HowItWorksStep
            icon={<Skull className="h-12 w-12 text-accent" />}
            title="2. Diseño y Montaje"
            description="Nuestro equipo de artistas y técnicos construye la escenografía, prepara los efectos especiales, el sonido y la iluminación para una inmersión total."
            animationDelay="0.4s"
          />
          <HowItWorksStep
            icon={<PartyPopper className="h-12 w-12 text-accent" />}
            title="3. El Show"
            description="Coordinamos a nuestros actores profesionales para que den vida a los personajes más aterradores y guiamos a los grupos para una experiencia fluida e impactante."
            animationDelay="0.6s"
          />
        </div>
      </section>

      <SectionDivider />

      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 text-center">
         <div className="relative animate-slide-up">
            <h2 className="text-4xl font-['Lacquer',_cursive] text-center text-primary">Opiniones de Nuestros Pasajes</h2>
         </div>
         <div className="grid md:grid-cols-2 gap-8 pt-12 max-w-4xl mx-auto">
            <TestimonialCard
              quote="¡El mejor pasaje del terror que hemos tenido en el pueblo para Halloween! El año que viene repetimos con TerrorPlay sin dudarlo."
              author="Concejalía de Festejos - Ayuntamiento de Villamiedo"
              animationDelay="0.2s"
            />
            <TestimonialCard
              quote="Contratamos un pasaje para nuestra fiesta de empresa y fue un éxito. El nivel de profesionalidad de los actores y el montaje fue increíble."
              author="RRHH - Tech Corp"
              animationDelay="0.4s"
            />
         </div>
      </section>

      <SectionDivider />

      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 text-center bg-scratches my-12 rounded-lg shadow-xl animate-slide-up">
          <h3 className="text-3xl font-['Lacquer',_cursive] text-primary mb-4">¿Quieres Montar tu Propio Pasaje del Terror?</h3>
          <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
            Contacta con nosotros y te daremos un presupuesto a medida sin compromiso. Hacemos realidad cualquier idea, por muy terrorífica que sea.
          </p>
          <Button size="lg" asChild className="bg-accent hover:bg-accent/90 text-accent-foreground">
            <Link href="/contacto">Pedir Presupuesto</Link>
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
