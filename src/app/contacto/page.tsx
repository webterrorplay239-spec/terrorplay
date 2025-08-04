
"use client";

import { useForm, type SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from "@/hooks/use-toast";
import { Mail, Send } from 'lucide-react';

const contactSchema = z.object({
  name: z.string().min(2, { message: "El nombre debe tener al menos 2 caracteres." }),
  email: z.string().email({ message: "Por favor, introduce un email válido." }),
  eventType: z.enum(['pasaje-terror', 'escape-room', 'cena-misterio', 'otro'], { required_error: "Selecciona un tipo de evento." }),
  message: z.string().min(10, { message: "El mensaje debe tener al menos 10 caracteres." }).max(500, "El mensaje no puede superar los 500 caracteres."),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactoPage() {
  const { toast } = useToast();

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  });

  const onSubmit: SubmitHandler<ContactFormData> = async (data) => {
    // Aquí iría la lógica para enviar el email o guardar en una BBDD
    console.log("Form data submitted:", data);
    
    // Simulación de envío
    await new Promise(resolve => setTimeout(resolve, 1000));

    toast({
      title: "¡Mensaje Enviado!",
      description: "Gracias por contactarnos. Te responderemos lo antes posible.",
    });

    form.reset();
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 space-y-12">
       <section className="text-center animate-fade-in relative overflow-hidden rounded-lg p-4">
        <Mail className="h-16 w-16 text-primary mx-auto mb-4" />
        <h1 className="text-5xl md:text-7xl font-headline text-primary mb-4 animate-text-flicker">Contacta con Nosotros</h1>
        <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
          ¿Listo para planificar tu próximo evento de terror o animación de Halloween? Rellena el formulario y cuéntanos tu idea.
        </p>
      </section>

      <Card className="shadow-2xl shadow-primary/20 animate-slide-up max-w-2xl mx-auto bg-scratches">
        <CardHeader>
          <CardTitle className="font-headline text-2xl">Solicita tu Presupuesto</CardTitle>
          <CardDescription>Nos pondremos en contacto contigo para dar forma a tu pesadilla ideal.</CardDescription>
        </CardHeader>
        <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Nombre</FormLabel>
                      <FormControl>
                        <Input placeholder="Tu nombre completo" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input type="email" placeholder="tu.email@ejemplo.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                 <FormField
                    control={form.control}
                    name="eventType"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Tipo de Evento</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="¿Qué tipo de evento te interesa?" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="pasaje-terror">Pasaje del Terror</SelectItem>
                            <SelectItem value="escape-room">Escape Room de Terror</SelectItem>
                            <SelectItem value="cena-misterio">Cena de Misterio / Cluedo</SelectItem>
                            <SelectItem value="otro">Otro tipo de evento de miedo</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Tu Mensaje</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Cuéntanos un poco sobre tu idea: fecha aproximada, número de personas, localización, y cualquier detalle que se te ocurra para tu evento de terror."
                          className="min-h-[120px] resize-none"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" disabled={form.formState.isSubmitting} className="w-full">
                  {form.formState.isSubmitting ? 'Enviando...' : (
                    <>
                      <Send className="mr-2 h-4 w-4" /> Enviar Petición
                    </>
                  )}
                </Button>
              </form>
            </Form>
        </CardContent>
      </Card>
    </div>
  );
}
