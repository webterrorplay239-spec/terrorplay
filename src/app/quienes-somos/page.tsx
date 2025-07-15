
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, Heart, Target } from 'lucide-react';

export default function QuienesSomosPage() {
  return (
    <div className="space-y-12">
      <section className="text-center animate-fade-in">
        <Users className="h-16 w-16 text-primary mx-auto mb-4" />
        <h1 className="text-5xl md:text-7xl font-headline text-primary mb-4">Quiénes Somos</h1>
        <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
          Somos un equipo de apasionados del terror, creativos y profesionales dedicados a crear experiencias inmersivas únicas.
        </p>
      </section>

      <section className="grid md:grid-cols-2 gap-8 items-center animate-slide-up">
        <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
          <Image
            src="https://placehold.co/600x800.png"
            alt="Equipo de TerrorPlay"
            layout="fill"
            objectFit="cover"
            data-ai-hint="team creative people"
          />
        </div>
        <div className="space-y-4">
          <h2 className="text-3xl font-headline text-accent">Nuestra Historia</h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            TerrorPlay nació de la unión de expertos en teatro inmersivo, artistas de efectos especiales y organizadores de eventos con una pasión en común: el terror en todas sus formas. Creemos que el miedo, en un entorno seguro y controlado, es una de las emociones más potentes y divertidas que se pueden experimentar.
          </p>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Desde nuestros humildes comienzos montando pequeños pasajes del terror para amigos, hemos crecido hasta convertirnos en una productora de referencia en Sevilla, capaz de crear eventos a gran escala para ayuntamientos, empresas y particulares que buscan algo diferente.
          </p>
        </div>
      </section>

      <section className="grid md:grid-cols-2 gap-8 text-left">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center text-2xl font-headline text-primary">
                <Target className="h-7 w-7 mr-3 text-accent" />
                Nuestra Misión
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Nuestra misión es profesionalizar el entretenimiento de terror, ofreciendo experiencias de alta calidad, seguras e inmersivas que dejen un recuerdo imborrable (y algún que otro grito) en nuestros participantes. Queremos ser la primera opción para cualquiera que busque una dosis de adrenalina y diversión.
              </p>
            </CardContent>
          </Card>
           <Card>
            <CardHeader>
              <CardTitle className="flex items-center text-2xl font-headline text-primary">
                <Heart className="h-7 w-7 mr-3 text-accent" />
                Nuestros Valores
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li><strong>Pasión por el Terror:</strong> Amamos lo que hacemos y se nota en cada detalle.</li>
                <li><strong>Creatividad:</strong> Buscamos constantemente nuevas formas de sorprender y asustar.</li>
                <li><strong>Profesionalidad:</strong> La seguridad y la calidad son nuestras máximas prioridades.</li>
                <li><strong>Inmersión:</strong> Cuidamos cada elemento para que te sientas dentro de una película.</li>
              </ul>
            </CardContent>
          </Card>
      </section>

    </div>
  );
}
