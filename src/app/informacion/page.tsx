
"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { MapPin, CalendarDays, Ticket, Clock, AlertTriangle, HelpCircle } from 'lucide-react';
import Image from "next/image";

export default function InformacionPage() {
  return (
    <div className="max-w-4xl mx-auto space-y-12">
      <section className="text-center animate-fade-in">
        <HelpCircle className="h-16 w-16 text-primary mx-auto mb-4" />
        <h1 className="text-5xl font-headline text-primary mb-3">Información Práctica</h1>
        <p className="text-xl text-muted-foreground">
          Todo lo que necesitas saber para planificar tu visita al infierno... digo, a Horrorland Sevilla.
        </p>
      </section>

      <div className="grid md:grid-cols-2 gap-8">
        <Card className="animate-slide-up" style={{animationDelay: '0.1s'}}>
          <CardHeader>
            <CardTitle className="flex items-center font-headline text-2xl">
              <CalendarDays className="mr-3 h-7 w-7 text-accent" /> Horarios del Parque
            </CardTitle>
            <CardDescription>Consulta nuestros horarios de apertura y cierre.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <p><strong>Temporada Alta (Octubre - Noviembre):</strong></p>
            <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
              <li>Viernes: 18:00 - 00:00</li>
              <li>Sábados: 16:00 - 01:00</li>
              <li>Domingos y Festivos: 16:00 - 23:00</li>
              <li>Halloween (31 Oct): 18:00 - 02:00</li>
            </ul>
            <p className="mt-2"><strong>Temporada Baja (Resto del año, eventos especiales):</strong></p>
            <ul className="list-disc list-inside text-sm text-muted-foreground">
              <li>Consultar calendario de eventos específicos.</li>
            </ul>
             <p className="text-xs text-muted-foreground mt-2">* Los horarios pueden variar. Confirma siempre antes de tu visita.</p>
          </CardContent>
        </Card>

        <Card className="animate-slide-up" style={{animationDelay: '0.2s'}} id="entradas">
          <CardHeader>
            <CardTitle className="flex items-center font-headline text-2xl">
              <Ticket className="mr-3 h-7 w-7 text-accent" /> Entradas y Precios
            </CardTitle>
            <CardDescription>Asegura tu acceso a la pesadilla.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <p><strong>Entrada General:</strong> Desde 35€ (Online anticipada)</p>
            <p><strong>Entrada VIP (Acceso rápido + extras):</strong> Desde 60€</p>
            <p><strong>Grupos (10+ personas):</strong> Consultar descuentos.</p>
            <p className="text-sm text-muted-foreground">
              Recomendamos comprar online para asegurar disponibilidad y mejores precios.
            </p>
            <div className="mt-4">
              <a href="#" className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-full">
                Comprar Entradas Ahora (Próximamente)
              </a>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="animate-slide-up" style={{animationDelay: '0.3s'}}>
        <CardHeader>
          <CardTitle className="flex items-center font-headline text-2xl">
            <MapPin className="mr-3 h-7 w-7 text-accent" /> Cómo Llegar
          </CardTitle>
          <CardDescription>Encuéntranos... si te atreves.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <p><strong>Dirección:</strong> Avenida de las Pesadillas, Parcela 666, 41020 Sevilla</p>
            <p className="text-sm text-muted-foreground">(Ubicación ficticia para demostración)</p>
          </div>
          <div className="h-64 w-full bg-muted rounded-md overflow-hidden relative">
            <Image src="https://placehold.co/800x400.png" alt="Mapa de ubicación del parque" layout="fill" objectFit="cover" data-ai-hint="map sevilla location"/>
             <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                <p className="text-white text-lg font-semibold">Mapa Próximamente</p>
            </div>
          </div>
          <p><strong>Transporte Público:</strong> Línea de autobús T6 (TerrorBus) directa desde el centro.</p>
          <p><strong>En Coche:</strong> Salida 66B de la SE-666. Amplio parking disponible (de pago).</p>
        </CardContent>
      </Card>

      <Card className="animate-slide-up" style={{animationDelay: '0.4s'}}>
        <CardHeader>
            <CardTitle className="flex items-center font-headline text-2xl">
                <AlertTriangle className="mr-3 h-7 w-7 text-accent" /> Normas y Recomendaciones
            </CardTitle>
            <CardDescription>Para una experiencia terroríficamente segura.</CardDescription>
        </CardHeader>
        <CardContent>
            <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
                <AccordionTrigger>¿Hay edad mínima?</AccordionTrigger>
                <AccordionContent>
                Recomendamos el parque para mayores de 13 años. Algunas atracciones tienen restricciones de edad o altura específicas. Las zonas de terror infantil son aptas para todas las edades, pero siempre bajo supervisión adulta.
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
                <AccordionTrigger>¿Puedo llevar disfraz?</AccordionTrigger>
                <AccordionContent>
                Sí, ¡nos encantan los disfraces! Sin embargo, por seguridad, no se permiten máscaras completas que cubran el rostro para visitantes (nuestros actores sí las llevan). Armas de utilería deben ser claramente falsas y no peligrosas.
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
                <AccordionTrigger>¿Qué pasa si llueve?</AccordionTrigger>
                <AccordionContent>
                Horrorland Sevilla es un parque mayormente al aire libre con algunas atracciones cubiertas. En caso de lluvia ligera, el parque permanecerá abierto. En caso de condiciones meteorológicas extremas, podríamos cerrar temporalmente algunas atracciones o el parque por seguridad. Consulta nuestras redes sociales para actualizaciones.
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
                <AccordionTrigger>¿Hay comida y bebida?</AccordionTrigger>
                <AccordionContent>
                ¡Sí! Contamos con varios puestos de comida y bebida temáticos. Desde snacks rápidos hasta "delicias infernales". No se permite la entrada de comida o bebida del exterior, excepto agua y comida para bebés.
                </AccordionContent>
            </AccordionItem>
            </Accordion>
        </CardContent>
      </Card>
    </div>
  );
}
