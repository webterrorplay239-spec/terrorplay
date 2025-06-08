
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Zap, Ghost, MapPin, Ticket } from 'lucide-react';

export default function ElParquePage() {
  return (
    <div className="space-y-16">
      <section className="text-center animate-fade-in rounded-lg bg-card/50 shadow-xl p-8 md:p-12">
        <h1 className="text-5xl md:text-7xl font-headline text-primary mb-6">
          Bienvenido a Horrorland Sevilla
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-8">
          El epicentro del terror en el corazón de Andalucía. Sumérgete en un mundo donde tus peores pesadillas cobran vida. ¿Tienes el valor para enfrentarlas?
        </p>
        <Button size="lg" asChild className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-lg animate-pulse">
          <Link href="/informacion#entradas">
            <Ticket className="mr-2 h-5 w-5" /> ¡Compra tus Entradas!
          </Link>
        </Button>
      </section>

      <section className="space-y-8 animate-slide-up" style={{animationDelay: '0.2s'}}>
        <h2 className="text-4xl font-headline text-center text-primary mb-8">Descubre el Parque</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard
            icon={<Ghost className="h-10 w-10 text-accent" />}
            title="Atracciones Escalofriantes"
            description="Desde casas encantadas hasta montañas rusas que desafían la gravedad y tus nervios. Cada rincón esconde un nuevo grito."
            link="/atracciones"
            linkText="Ver Atracciones"
          />
          <FeatureCard
            icon={<Zap className="h-10 w-10 text-accent" />}
            title="Experiencias Inmersivas"
            description="Participa en historias interactivas, resuelve misterios y escapa de situaciones límite. Tú eres el protagonista de la pesadilla."
            link="/experiencias"
            linkText="Explorar Experiencias"
          />
          <FeatureCard
            icon={<MapPin className="h-10 w-10 text-accent" />}
            title="Zonas Temáticas Únicas"
            description="Explora mundos detalladamente recreados que te transportarán a diferentes universos de terror. Cuidado por dónde pisas."
            linkText="Próximamente Más Info"
          />
        </div>
      </section>
      
      <section className="text-center bg-card/30 p-8 rounded-lg shadow-lg animate-fade-in" style={{animationDelay: '0.4s'}}>
          <h3 className="text-3xl font-headline text-primary mb-4">¿Listo para el Terror?</h3>
          <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
            Horrorland Sevilla te espera con las puertas abiertas... y las criaturas acechando.
            Consulta nuestros horarios y planifica tu visita.
          </p>
          <Button variant="outline" asChild>
            <Link href="/informacion">
              Horarios y Cómo Llegar
            </Link>
          </Button>
      </section>
    </div>
  );
}

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  link?: string;
  linkText: string;
}

function FeatureCard({ icon, title, description, link, linkText }: FeatureCardProps) {
  return (
    <Card className="text-center hover:shadow-primary/20 transition-shadow duration-300">
      <CardHeader className="items-center">
        <div className="p-4 bg-accent/10 rounded-full mb-4">
          {icon}
        </div>
        <CardTitle className="font-headline text-2xl">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground mb-6">{description}</p>
        {link ? (
          <Button asChild variant="ghost" className="text-accent hover:text-accent-foreground hover:bg-accent/20">
            <Link href={link}>{linkText}</Link>
          </Button>
        ) : (
           <p className="text-sm text-muted-foreground italic">{linkText}</p>
        )}
      </CardContent>
    </Card>
  );
}
