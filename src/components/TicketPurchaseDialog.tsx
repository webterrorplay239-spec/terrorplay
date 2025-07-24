
"use client";

import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Input } from '@/components/ui/input';
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { cn } from '@/lib/utils';
import { Calendar as CalendarIcon, Minus, Plus, CreditCard } from 'lucide-react';
import { format } from 'date-fns';
import { es } from 'date-fns/locale';

interface TicketPurchaseDialogProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}

const ticketTypes = {
  general: { name: 'Entrada General', price: 25 },
  fastpass: { name: 'Fast Pass', price: 40 },
  vip: { name: 'Experiencia VIP', price: 75 },
};

const ApplePayIcon = () => <svg width="48" height="24" viewBox="0 0 64 26" className="inline-block"><path d="M13.256 12.181l2.213-3.504a.25.25 0 00-.213-.377h-4.505a.25.25 0 00-.213.377l2.213 3.504a.25.25 0 00.402 0z" fill="#fff"></path><path d="M21.24 3.733c-2.31 0-4.305 1.808-4.305 4.542 0 2.949 2.65 3.91 4.416 3.91 1.764 0 2.456-.723 4.29-2.924l-2.028-1.284c-1.12 1.54-1.636 2.072-2.82 2.072-1.03 0-1.65-.634-1.65-1.696 0-1.077.635-1.71 1.695-1.71.97 0 1.41.385 2.19 1.15l1.9-1.201c-1.076-1.32-2.31-2.45-4.004-2.45zM38.83 6.918c-.347-.32-3.175-2.058-3.175-3.185 0-.71.59-1.04 1.135-1.04.572 0 2.16.89 2.227.93l.286-2.19c-.067-.04-1.928-1.03-3.69-1.03-1.896 0-3.333 1.13-3.333 3.1 0 1.95 2.26 3.32 2.26 3.32s-2.73 1.25-2.73 3.42c0 2.04 1.59 3.2 3.48 3.2 1.83 0 3.79-1.3 3.79-1.3s-.18 2.31-.22 2.41h2.45v-2.01c.01-.06 1.19-1.8 1.19-3.19 0-1.48-1.34-2.61-3.25-2.61zm-1.01 4.5c0-.62-.57-1.01-1.25-1.01-.68 0-1.23.4-1.23 1.01 0 .61.55 1 .98 1 .68.01 1.5-.4 1.5-1zm-15.01-4.8h2.39v10.5h-2.39V6.618zM31.06 6.54l2.4.07.3 1.8h.08c.57-1.2 1.87-2.1 3.52-2.1.3 0 .57.02.83.05l-.3 2.18c-.18-.03-.39-.05-.55-.05-.98 0-1.89.54-2.31 1.35v6.8h-2.39v-10.1zM44.59 6.54l2.4.07.3 1.8h.08c.57-1.2 1.87-2.1 3.52-2.1.3 0 .57.02.83.05l-.3 2.18c-.18-.03-.39-.05-.55-.05-.98 0-1.89.54-2.31 1.35v6.8h-2.39v-10.1zM58.31 8.76c0-1.35-.9-2.22-2.28-2.22-1.28 0-2.26.83-2.26 2.15 0 1.3.94 2.19 2.33 2.19 1.12 0 1.7-.4 2.21-1.12h-3.83v-1.6h5.36v.1c.06 1.17.08 2.1.08 2.68 0 2.26-1.55 3.59-3.9 3.59-2.48 0-4.18-1.5-4.18-3.8s1.69-3.8 4.18-3.8c2.19 0 3.57 1.2 3.57 2.9h-2.3v-.02z" fill="#fff"></path><path d="M12.96 4.393h1.892l-2.91 4.54a.25.25 0 01-.402 0L8.62 4.394h1.89l1.45 2.293 1 1.562.001-1.562z" fill="#fff"></path><path d="M13.256 12.181l2.213-3.504a.25.25 0 00-.213-.377h-4.505a.25.25 0 00-.213.377l2.213 3.504a.25.25 0 00.402 0z" fill="#fff" class="L5xMce"></path><path d="M13.256 12.181l2.213-3.504a.25.25 0 00-.213-.377h-4.505a.25.25 0 00-.213.377l2.213 3.504a.25.25 0 00.402 0z" fill="#fff"></path><path d="M21.24 3.733c-2.31 0-4.305 1.808-4.305 4.542 0 2.949 2.65 3.91 4.416 3.91 1.764 0 2.456-.723 4.29-2.924l-2.028-1.284c-1.12 1.54-1.636 2.072-2.82 2.072-1.03 0-1.65-.634-1.65-1.696 0-1.077.635-1.71 1.695-1.71.97 0 1.41.385 2.19 1.15l1.9-1.201c-1.076-1.32-2.31-2.45-4.004-2.45zM38.83 6.918c-.347-.32-3.175-2.058-3.175-3.185 0-.71.59-1.04 1.135-1.04.572 0 2.16.89 2.227.93l.286-2.19c-.067-.04-1.928-1.03-3.69-1.03-1.896 0-3.333 1.13-3.333 3.1 0 1.95 2.26 3.32 2.26 3.32s-2.73 1.25-2.73 3.42c0 2.04 1.59 3.2 3.48 3.2 1.83 0 3.79-1.3 3.79-1.3s-.18 2.31-.22 2.41h2.45v-2.01c.01-.06 1.19-1.8 1.19-3.19 0-1.48-1.34-2.61-3.25-2.61zm-1.01 4.5c0-.62-.57-1.01-1.25-1.01-.68 0-1.23.4-1.23 1.01 0 .61.55 1 .98 1 .68.01 1.5-.4 1.5-1zm-15.01-4.8h2.39v10.5h-2.39V6.618zM31.06 6.54l2.4.07.3 1.8h.08c.57-1.2 1.87-2.1 3.52-2.1.3 0 .57.02.83.05l-.3 2.18c-.18-.03-.39-.05-.55-.05-.98 0-1.89.54-2.31 1.35v6.8h-2.39v-10.1zM44.59 6.54l2.4.07.3 1.8h.08c.57-1.2 1.87-2.1 3.52-2.1.3 0 .57.02.83.05l-.3 2.18c-.18-.03-.39-.05-.55-.05-.98 0-1.89.54-2.31 1.35v6.8h-2.39v-10.1zM58.31 8.76c0-1.35-.9-2.22-2.28-2.22-1.28 0-2.26.83-2.26 2.15 0 1.3.94 2.19 2.33 2.19 1.12 0 1.7-.4 2.21-1.12h-3.83v-1.6h5.36v.1c.06 1.17.08 2.1.08 2.68 0 2.26-1.55 3.59-3.9 3.59-2.48 0-4.18-1.5-4.18-3.8s1.69-3.8 4.18-3.8c2.19 0 3.57 1.2 3.57 2.9h-2.3v-.02z" fill="#fff" class="L5xMce"></path><path d="M12.96 4.393h1.892l-2.91 4.54a.25.25 0 01-.402 0L8.62 4.394h1.89l1.45 2.293 1 1.562.001-1.562z" fill="#fff" class="L5xMce"></path></svg>
const GooglePayIcon = () => <svg width="48" height="24" viewBox="0 0 64 25" className="inline-block"><path d="M20.728 10.513v-1.04a2.532 2.532 0 00-2.528-2.528h-6.28a2.532 2.532 0 00-2.528 2.528v1.04c0 .64.248 1.228.656 1.664l4.16 4.16a2.31 2.31 0 003.264 0l4.16-4.16a2.336 2.336 0 00.096-3.328z" fill="#4285F4"></path><path d="M16.088 15.345a3.34 3.34 0 01-2.96-1.664H9.36a2.532 2.532 0 00-2.528 2.528v3.12a2.532 2.532 0 002.528 2.528h1.04a2.532 2.532 0 002.528-2.528v-1.04h.52v1.04c0 .64.248 1.228.656 1.664l4.16 4.16a2.31 2.31 0 003.264 0l2.496-2.496-6.136-6.136z" fill="#EA4335"></path><path d="M54.64 21.853h-1.04a2.532 2.532 0 01-2.528-2.528v-3.12a2.532 2.532 0 012.528-2.528h1.04a2.532 2.532 0 012.528 2.528v3.12a2.532 2.532 0 01-2.528 2.528zm0-7.136a1.488 1.488 0 00-1.488 1.488v3.12a1.488 1.488 0 001.488 1.488h1.04a1.488 1.488 0 001.488-1.488v-3.12a1.488 1.488 0 00-1.488-1.488h-1.04z" fill="#4285F4"></path><path d="M44.416 14.717h5.12v1.8h-3.2v1.984h2.96v1.8h-2.96v2.16h3.28v1.8h-5.2zM22.928 24.345a2.31 2.31 0 003.264 0l6.136-6.136v-2.88a2.532 2.532 0 00-2.528-2.528h-3.72l-4.16 4.16a2.336 2.336 0 00.008 3.384z" fill="#FBBC04"></path><path d="M21.808 19.345a3.34 3.34 0 012.96-1.664h3.768a2.532 2.532 0 002.528-2.528v-3.12a2.532 2.528 0 00-2.528-2.528h-1.04a2.532 2.532 0 00-2.528 2.528v1.04h-.52v-1.04c0-.64-.248-1.228-.656-1.664l-4.16-4.16a2.31 2.31 0 00-3.264 0L14.28 11.85l6.136 6.136a2.336 2.336 0 001.392 1.359z" fill="#34A853"></path><path d="M34.096 14.717v9.6h2.096c2.112 0 3.52-1.216 3.52-3.12 0-1.28-.72-2.224-1.872-2.672a3.132 3.132 0 002.128-2.896c0-1.76-1.328-2.912-3.2-2.912h-2.672zm1.92 3.76h.368c.848 0 1.344.448 1.344 1.2 0 .768-.528 1.2-1.376 1.2h-.336v-2.4zm.032-1.888h.288c.752 0 1.2.4 1.2.992s-.432 1.008-1.168 1.008h-.32v-2zM59.984 14.717v9.6h1.92v-9.6zM28.016 15.345v1.04a2.532 2.532 0 002.528 2.528h6.28a2.532 2.532 0 002.528-2.528v-1.04a2.336 2.336 0 00-.096-3.328l-4.16-4.16a2.31 2.31 0 00-3.264 0l-4.16 4.16c-.408.436-.656 1.024-.656 1.664z" fill="#4285F4"></path></svg>
const PayPalIcon = () => <svg width="48" height="24" viewBox="0 0 64 39" className="inline-block"><path d="M21.116 38.358c-3.153 0-5.91-2.114-6.85-5.132L8.29 5.866c-.322-1.06-.867-1.185-1.923-1.185H2.57C1.49 4.68 1.04 5.37.915 6.47L0 12.62c-.126.98.36 1.543 1.33 1.543h4.482c1.046 0 1.614-.52 1.83-1.63l.794-4.87c.215-1.11.8-1.63 1.83-1.63h3.04c2.81 0 5.12 2.31 4.54 5.05-.58 2.74-3.03 4.51-5.84 4.51h-2.02c-.88 0-1.47.46-1.64 1.36l-3.32 20.35c-.17.9.36 1.54 1.33 1.54h7.6z" fill="#253B80"></path><path d="M42.22 38.358c-3.15 0-5.91-2.114-6.85-5.132l-5.98-27.36C29.07 4.806 28.52 4.68 27.47 4.68h-3.79c-1.08 0-1.53.69-.64 1.79l.91 1.12c.06.07.14.1.22.1h.52c1.04 0 1.61.52 1.83 1.63l.79 4.87c.22 1.11.8 1.63 1.83 1.63h3.04c2.81 0 5.12 2.31 4.54 5.05-.58 2.74-3.03 4.51-5.84 4.51h-2.01c-.88 0-1.47.46-1.64 1.36l-3.32 20.35c-.17.9.36 1.54 1.33 1.54H33.8c1.04 0 1.6-.52 1.83-1.63l3.32-20.35c.17-.9-.35-1.54-1.33-1.54h-2.45c-1.3 0-2.28-.86-2.01-2.11.27-1.25 1.5-2.11 2.8-2.11h.4c.52 0 .97-.33 1.13-.82l3.22-9.4c.17-.5.62-.82 1.13-.82h4.5c1.01 0 1.4.63.97 1.6l-3.23 9.4c-.16.5-.61.83-1.12.83h-.9c-1.3 0-2.28.86-2.02 2.11.27 1.25 1.5 2.11 2.81 2.11h8.18c2.9 0 5.25-2.2 4.7-5.13-.57-2.92-3.1-4.8-6.01-4.8h-3.4c-1.05 0-1.62-.52-1.84-1.63l-.79-4.87c-.22-1.11-.8-1.63-1.83-1.63h-3.04c-2.81 0-5.12-2.31-4.54-5.05.58-2.74 3.03-4.51 5.84-4.51h7.82c3.15 0 5.91 2.114 6.85 5.132l5.98 27.36c.32 1.06.86 1.185 1.92 1.185h3.79c1.08 0 1.53-.69.64-1.79l-.92-1.12a.692.692 0 01-.22-.1h-1.04c-1.04 0-1.61-.52-1.83-1.63l-.79-4.87c-.22-1.11-.8-1.63-1.83-1.63h-3.04c-2.81 0-5.12-2.31-4.54-5.05.58-2.74 3.03-4.51 5.84-4.51h2.02c.88 0 1.47-.46 1.64-1.36l3.32-20.35c.17-.9-.36-1.54-1.33-1.54h-7.6z" fill="#142C8E"></path><path d="M63.085 6.47L62.17 12.62c-.125.98.36 1.543 1.33 1.543h4.48c1.05 0 1.61-.52 1.83-1.63l.79-4.87c.22-1.11.8-1.63 1.83-1.63h3.04c2.81 0 5.12-2.31 4.54-5.05-.58-2.74-3.03-4.51-5.84-4.51h-2.02c-.88 0-1.47.46-1.64 1.36L62.16.81C61.99-.09 61.46-.63 60.5-.63h-7.6c-1.05 0-1.61.52-1.83 1.63l-3.32 20.35c-.17.9.36 1.54 1.33 1.54h2.45c1.3 0 2.28.86 2.01 2.11-.27 1.25-1.5 2.11-2.8 2.11h-.4c-.52 0-.97.33-1.13.82l-3.22 9.4c-.17.5-.62.82-1.13.82h-4.5c-1.01 0-1.4-.63-.97-1.6l3.23-9.4c.16-.5.61-.83 1.12-.83h.9c1.3 0 2.28-.86 2.02-2.11-.27-1.25-1.5-2.11-2.81-2.11H41.8c-3.15 0-5.91-2.114-6.85-5.132L28.97 5.866c-.322-1.06-.867-1.185-1.923-1.185H23.25c-1.01 0-1.4.63-.97 1.6l3.23 9.4c.16.5.61.83 1.12.83h.9c1.3 0 2.28.86 2.02 2.11-.27 1.25-1.5 2.11-2.81 2.11h-8.18c-2.9 0-5.25 2.2-4.7 5.13.57 2.92 3.1 4.8 6.01 4.8h3.4c1.05 0 1.62.52 1.84 1.63l.79 4.87c.22 1.11.8 1.63 1.83 1.63h3.04c2.81 0 5.12 2.31 4.54 5.05-.58 2.74-3.03 4.51-5.84 4.51H19.06c-.88 0-1.47-.46-1.64-1.36L14.1.81C13.93-.09 13.4-.63 12.44-.63H4.84c-3.15 0-5.91-2.114-6.85-5.132L-8.005 5.866c-.322-1.06-.867-1.185-1.923-1.185H-13.72c-1.08 0-1.53.69-.64 1.79l.91 1.12c.06.07.14.1.22.1h.52c1.04 0 1.61.52 1.83 1.63l.79 4.87c.22 1.11.8 1.63 1.83 1.63h3.04c2.81 0 5.12 2.31 4.54 5.05-.58 2.74-3.03 4.51-5.84 4.51h-2.01c-.88 0-1.47.46-1.64 1.36l-3.32 20.35c-.17.9.36 1.54 1.33 1.54H.4z" fill="#009CDE"></path></svg>;


export default function TicketPurchaseDialog({ isOpen, onOpenChange }: TicketPurchaseDialogProps) {
  const [step, setStep] = useState(1);
  const [ticketType, setTicketType] = useState('general');
  const [quantity, setQuantity] = useState(1);
  const [date, setDate] = useState<Date | undefined>(new Date());
  
  const total = ticketTypes[ticketType as keyof typeof ticketTypes].price * quantity;

  const handleNextStep = () => {
    setStep(prev => prev + 1);
  };
  
  const handleBackStep = () => {
    setStep(prev => prev - 1);
  };

  const resetAndClose = () => {
    setStep(1);
    setQuantity(1);
    setTicketType('general');
    setDate(new Date());
    onOpenChange(false);
  }

  const handlePayment = (method: string) => {
    console.log(`Simulating payment with ${method}`);
    // Here would be the actual payment logic
    handleNextStep();
  }

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md bg-card text-card-foreground border-accent shadow-2xl shadow-accent/20">
        <DialogHeader>
          <DialogTitle className="font-headline text-3xl text-primary text-center">Compra tus Entradas</DialogTitle>
          <DialogDescription className="text-center">
            {step < 3 ? `Paso ${step} de 2: Selección de entradas` : 'Confirmación'}
          </DialogDescription>
        </DialogHeader>

        {step === 1 && (
          <div className="space-y-6 py-4">
            {/* Ticket Type */}
            <div className="space-y-2">
              <Label className="font-headline text-lg">Tipo de Entrada</Label>
              <RadioGroup value={ticketType} onValueChange={setTicketType}>
                {Object.entries(ticketTypes).map(([key, { name, price }]) => (
                  <div key={key} className="flex items-center justify-between">
                    <Label htmlFor={key} className="flex items-center space-x-3 cursor-pointer">
                      <RadioGroupItem value={key} id={key} />
                      <span className="font-body text-base">{name}</span>
                    </Label>
                    <span className="font-bold text-accent">{price}€</span>
                  </div>
                ))}
              </RadioGroup>
            </div>
            
            {/* Quantity */}
            <div className="space-y-2">
              <Label className="font-headline text-lg">Cantidad</Label>
              <div className="flex items-center space-x-4">
                <Button variant="outline" size="icon" onClick={() => setQuantity(q => Math.max(1, q - 1))}><Minus /></Button>
                <Input className="w-16 text-center" value={quantity} readOnly />
                <Button variant="outline" size="icon" onClick={() => setQuantity(q => q + 1)}><Plus /></Button>
              </div>
            </div>

            {/* Date */}
            <div className="space-y-2">
              <Label className="font-headline text-lg">Fecha</Label>
               <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant={"outline"}
                    className={cn(
                      "w-full justify-start text-left font-normal",
                      !date && "text-muted-foreground"
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {date ? format(date, "PPP", { locale: es }) : <span>Elige una fecha</span>}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    initialFocus
                    disabled={(date) => date < new Date(new Date().setDate(new Date().getDate() - 1))}
                  />
                </PopoverContent>
              </Popover>
            </div>

          </div>
        )}

        {step === 2 && (
          <div className="space-y-4 py-4">
            <h3 className="font-headline text-xl text-center text-primary">Resumen del Pedido</h3>
            <div className="p-4 rounded-lg border bg-background/50 space-y-2">
                <p><strong>Entrada:</strong> {ticketTypes[ticketType as keyof typeof ticketTypes].name}</p>
                <p><strong>Cantidad:</strong> {quantity}</p>
                <p><strong>Fecha:</strong> {date ? format(date, "PPPP", { locale: es }) : 'No seleccionada'}</p>
                <div className="border-t border-dashed border-border my-2"></div>
                <p className="font-headline text-2xl text-right"><strong>Total: <span className="text-accent">{total}€</span></strong></p>
            </div>
             <h3 className="font-headline text-xl text-center text-primary pt-4">Selecciona un método de pago</h3>
             <div className="grid grid-cols-1 gap-2">
                <Button onClick={() => handlePayment('Credit Card')} className="w-full h-12 bg-gray-800 hover:bg-gray-700"><CreditCard className="mr-2"/>Pagar con Tarjeta</Button>
                <Button onClick={() => handlePayment('PayPal')} className="w-full h-12 bg-[#003087] hover:bg-[#00296b]"><PayPalIcon /> </Button>
                <Button onClick={() => handlePayment('Google Pay')} className="w-full h-12 bg-black hover:bg-gray-900 border border-white/20"><GooglePayIcon /></Button>
                <Button onClick={() => handlePayment('Apple Pay')} className="w-full h-12 bg-black hover:bg-gray-900 border border-white/20"><ApplePayIcon /></Button>
             </div>
          </div>
        )}

        {step === 3 && (
            <div className="text-center py-8 space-y-4">
                <h3 className="font-headline text-2xl text-accent">¡Pago completado!</h3>
                <p>Hemos enviado tus entradas a tu dirección de email.</p>
                <p className="text-sm text-muted-foreground">Revisa tu carpeta de spam si no las encuentras.</p>
                <p className="font-bold text-lg">¡Prepárate para gritar!</p>
            </div>
        )}

        <DialogFooter>
          {step > 1 && step < 3 && <Button variant="ghost" onClick={handleBackStep}>Atrás</Button>}
          {step === 1 && <Button onClick={handleNextStep} className="w-full">Siguiente</Button>}
          {step === 3 && <Button onClick={resetAndClose} className="w-full">Cerrar</Button>}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
