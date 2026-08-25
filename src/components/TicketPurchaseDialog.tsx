"use client";

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ExternalLink, Mail, MessageCircle, Ticket } from 'lucide-react';
import { RESERVATION_URL, CONTACT_EMAIL, WHATSAPP_PHONE } from '@/lib/site';

interface TicketPurchaseDialogProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  /** Nombre del evento, para prerrellenar el asunto del email. */
  eventName?: string;
}

export default function TicketPurchaseDialog({ isOpen, onOpenChange, eventName }: TicketPurchaseDialogProps) {
  const subject = encodeURIComponent(
    eventName ? `Reserva de entradas: ${eventName}` : 'Reserva de entradas para un evento de TerrorPlay'
  );
  const body = encodeURIComponent(
    `Hola,\n\nMe gustaría reservar entradas${eventName ? ` para ${eventName}` : ''}.\n\nFecha deseada:\nNúmero de personas:\nTeléfono de contacto:\n\nGracias.`
  );
  const whatsappMessage = encodeURIComponent(
    `Hola! Me gustaría reservar entradas${eventName ? ` para ${eventName}` : ' para un evento de terror'}.`
  );

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md bg-card text-card-foreground border-accent shadow-2xl shadow-accent/20">
        <DialogHeader>
          <DialogTitle className="font-horror text-3xl text-primary text-center flex items-center justify-center gap-2">
            <Ticket className="h-7 w-7" />
            Reserva tus Entradas
          </DialogTitle>
          <DialogDescription className="text-center pt-2">
            {eventName
              ? `Gestionamos las reservas de ${eventName} de forma personalizada, según fechas y tamaño del grupo.`
              : 'Gestionamos las reservas de forma personalizada, según el evento, la fecha y el número de personas.'}
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-3 py-4">
          <Button asChild className="w-full h-12 bg-primary hover:bg-primary/90 text-primary-foreground">
            <a href={RESERVATION_URL} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="mr-2 h-5 w-5" />
              Reservar en goodparty.es
            </a>
          </Button>

          <Button asChild variant="outline" className="w-full h-12">
            <a href={`mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`}>
              <Mail className="mr-2 h-5 w-5" />
              Escribir a {CONTACT_EMAIL}
            </a>
          </Button>

          <Button asChild variant="outline" className="w-full h-12 border-[#25D366]/60 hover:bg-[#25D366]/10">
            <a
              href={`https://wa.me/${WHATSAPP_PHONE}?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle className="mr-2 h-5 w-5 text-[#25D366]" />
              Reservar por WhatsApp
            </a>
          </Button>

          <p className="text-center text-sm text-muted-foreground pt-2">
            También puedes{' '}
            <Link
              href="/contacto"
              className="text-accent underline underline-offset-4 hover:text-accent/80"
              onClick={() => onOpenChange(false)}
            >
              pedir presupuesto desde la web
            </Link>{' '}
            y te respondemos en menos de 24 horas.
          </p>
        </div>

        <DialogFooter>
          <Button variant="ghost" className="w-full" onClick={() => onOpenChange(false)}>
            Cerrar
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
