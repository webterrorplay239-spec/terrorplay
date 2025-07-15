
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, PartyPopper, CalendarCheck, MessageSquareQuote } from 'lucide-react';
import { ParallaxBanner } from '@/components/ParallaxBanner';

export default function HomePage() {
  return (
    <div className="space-y-20 md:space-y-28">
      {/* Hero Section */}
      <ParallaxBanner imageUrl="https://placehold.co/1200x800.png" dataAiHint="dark atmospheric horror">
        <div className="relative z-20 text-center flex flex-col items-center justify-center h-full bg-black/60 p-8">
            <h1 className="text-5xl md:text-7xl font-headline text-primary mb-6 drop-shadow-lg">
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

      {/* How it Works Section */}
      <section className="space-y-8 text-center">
        <h2 className="text-4xl font-headline text-center text-primary">Cómo lo Hacemos</h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Nuestro proceso para garantizar que tu evento sea terroríficamente perfecto.</p>
        <div className="grid md:grid-cols-3 gap-8 pt-4">
          <HowItWorksStep
            icon={<CheckCircle className="h-12 w-12 text-accent" />}
            title="1. Cuéntanos tu Idea"
            description="Contactas con nosotros y nos explicas qué tipo de evento de terror tienes en mente. ¿Quieres sustos, misterio, o ambos?"
          />
          <HowItWorksStep
            icon={<PartyPopper className="h-12 w-12 text-accent" />}
            title="2. Diseño a Medida"
            description="Nuestro equipo de creativos diseña una experiencia única para ti, adaptando la historia, los actores y la ambientación a tus necesidades."
          />
          <HowItWorksStep
            icon={<CalendarCheck className="h-12 w-12 text-accent" />}
            title="3. Ejecución Impecable"
            description="Llevamos el terror donde nos pidas. Nos encargamos de todo el montaje, los actores y la producción para que solo te preocupes de gritar."
          />
        </div>
      </section>

      {/* Our Events Section */}
      <section className="space-y-8 text-center">
        <h2 className="text-4xl font-headline text-center text-primary">Nuestros Eventos</h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Creamos todo tipo de experiencias de terror. Aquí tienes algunos ejemplos.</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 pt-4">
          <EventCard
            imageSrc="https://placehold.co/600x400.png"
            imageHint="haunted house passage"
            title="Pasajes del Terror"
            description="Recorridos inmersivos llenos de sustos, actores y efectos especiales. Ideal para fiestas, ayuntamientos y centros comerciales."
          />
          <EventCard
            imageSrc="https://placehold.co/600x400.png"
            imageHint="escape room dark"
            title="Escape Rooms Temáticos"
            description="Nuestros game masters os guiarán (o atormentarán) a través de un misterio que deberéis resolver antes de que sea tarde."
          />
          <EventCard
            imageSrc="https://placehold.co/600x400.png"
            imageHint="murder mystery dinner"
            title="Cenas de Misterio"
            description="Una cena donde nada es lo que parece y uno de los comensales es un asesino. Perfecto para eventos de empresa y grupos."
          />
        </div>
        <Button variant="outline" asChild>
          <Link href="/eventos">Ver todos los servicios</Link>
        </Button>
      </section>

      {/* Testimonials Section */}
      <section className="space-y-8 text-center">
        <h2 className="text-4xl font-headline text-center text-primary">Opiniones de Nuestros Clientes</h2>
         <div className="grid md:grid-cols-2 gap-8 pt-4 max-w-4xl mx-auto">
            <TestimonialCard
              quote="¡Increíble! Montaron un pasaje del terror para nuestra fiesta de Halloween y fue un éxito rotundo. Los actores eran de 10."
              author="Laura G. - Evento Privado"
            />
            <TestimonialCard
              quote="La cena de misterio para nuestro team building fue genial. Muy bien organizada y divertida. ¡Repetiremos seguro!"
              author="Carlos M. - Empresa Tech"
            />
         </div>
      </section>

      {/* Final CTA Section */}
      <section className="text-center bg-card/50 p-8 md:p-12 rounded-lg shadow-xl">
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

interface HowItWorksStepProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function HowItWorksStep({ icon, title, description }: HowItWorksStepProps) {
  return (
    <div className="flex flex-col items-center space-y-3">
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
}

function EventCard({ imageSrc, imageHint, title, description }: EventCardProps) {
  return (
    <Card className="text-left overflow-hidden transform transition-transform hover:scale-105 duration-300">
       <Image 
          src={imageSrc}
          width={600}
          height={400}
          alt={title}
          className="w-full h-48 object-cover"
          data-ai-hint={imageHint}
        />
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
}

function TestimonialCard({ quote, author }: TestimonialCardProps) {
    return (
        <Card className="bg-card/70 p-6 text-left">
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
