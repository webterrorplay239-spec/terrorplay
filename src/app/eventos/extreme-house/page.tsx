'use client';

import { ParallaxBanner } from '@/components/ParallaxBanner';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, Skull } from 'lucide-react';
import TicketPurchaseDialog from '@/components/TicketPurchaseDialog';
import { useState } from 'react';

export default function ExtremeHousePage() {
  const [ticketModalOpen, setTicketModalOpen] = useState(false);

  return (
    <div className="space-y-0">
      <ParallaxBanner 
        imageUrl="/070b0295-4015-4c2c-88d2-eb7f50120fa1.jpg" 
        dataAiHint="extreme-house-horror"
      >
        <div className="relative z-20 text-center flex flex-col items-center justify-center h-screen min-h-[600px] bg-black/70 p-8 animate-fade-in">
          <Skull className="h-24 w-24 text-accent mb-4" />
          <h1 className="text-5xl md:text-7xl font-horror text-red-600 mb-6 drop-shadow-lg animate-text-flicker">
            EXTREME HOUSE
          </h1>
          <p className="text-xl md:text-2xl text-foreground max-w-3xl mx-auto mb-8 drop-shadow-md">
            La experiencia de terror definitiva. Donde tus peores pesadillas cobran vida.
          </p>
          <div className="mt-4 bg-red-950/30 p-4 rounded-lg max-w-2xl">
            <p className="text-sm text-red-200">
              Adéntrate en un mundo de terror extremo donde los límites entre la realidad y la pesadilla se desvanecen.
              Una experiencia visceral que te llevará al límite.
            </p>
          </div>
        </div>
      </ParallaxBanner>

      <section className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto space-y-8">
          <Card className="border-red-800/50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <CardContent className="pt-6">
              <h2 className="text-2xl font-horror text-red-500 mb-4">LA PESADILLA DEFINITIVA</h2>
              <p className="mb-4 text-lg">
                Bienvenido a Extreme House, donde tus peores pesadillas cobran vida. Esta no es una experiencia de terror convencional - es una inmersión total en el horror más visceral y perturbador que jamás hayas experimentado.
              </p>
              <p className="mb-4">
                En Extreme House, los límites entre la realidad y la pesadilla se difuminan. Nuestros actores profesionales están entrenados para llevarte al límite de tu resistencia psicológica, creando una experiencia tan intensa que te hará cuestionar tu propia cordura.
              </p>
              <div className="bg-red-950/30 p-4 rounded-lg mt-6">
                <h3 className="text-xl font-horror text-red-400 mb-2">ADVERTENCIA</h3>
                <p className="text-sm">
                  Esta experiencia contiene elementos de terror extremo, efectos especiales intensos y situaciones perturbadoras. No recomendado para personas sensibles, cardíacas, embarazadas o menores de 18 años.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-red-800/50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <CardContent className="pt-6">
              <h2 className="text-2xl font-horror text-red-500 mb-4">DETALLES DEL EVENTO</h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-2">
                  <span className="font-bold text-red-400">Duración:</span>
                  <span>45 minutos de terror puro e intenso</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold text-red-400">Participantes:</span>
                  <span>Grupos reducidos de máximo 4 personas</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold text-red-400">Edad mínima:</span>
                  <span>18 años (se requiere identificación)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold text-red-400">Equipamiento:</span>
                  <span>Se proporciona todo el equipo de protección necesario</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <div className="flex justify-center">
            <Button 
              size="lg" 
              onClick={() => setTicketModalOpen(true)}
              className="bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-8 rounded-full shadow-lg transform transition hover:scale-105"
            >
              <Calendar className="w-5 h-5 mr-2" />
              Reserva tu pesadilla
            </Button>
          </div>
        </div>
      </section>

      <TicketPurchaseDialog 
        isOpen={ticketModalOpen} 
        onOpenChange={setTicketModalOpen}
      />
    </div>
  );
}