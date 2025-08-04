
'use server';
/**
 * @fileOverview Un flujo para manejar el envío de correos electrónicos de contacto.
 *
 * - sendContactEmail: Una función que procesa la solicitud de contacto.
 * - SendContactEmailInput: El tipo de entrada para la función sendContactEmail.
 */

import { ai } from '@/ai/genkit';
import { z } from 'zod';

// Esquema de entrada que coincide con el formulario de contacto
const SendContactEmailInputSchema = z.object({
  name: z.string().describe('El nombre del remitente.'),
  email: z.string().email().describe('La dirección de correo electrónico del remitente.'),
  eventType: z.string().describe('El tipo de evento seleccionado.'),
  message: z.string().describe('El mensaje del remitente.'),
});

export type SendContactEmailInput = z.infer<typeof SendContactEmailInputSchema>;

/**
 * Función de envoltura exportada que llama al flujo de Genkit.
 * @param input Los datos del formulario de contacto.
 * @returns Una promesa que se resuelve cuando el correo electrónico ha sido "enviado".
 */
export async function sendContactEmail(input: SendContactEmailInput): Promise<void> {
  await sendContactEmailFlow(input);
}

const sendContactEmailFlow = ai.defineFlow(
  {
    name: 'sendContactEmailFlow',
    inputSchema: SendContactEmailInputSchema,
    outputSchema: z.void(),
  },
  async (input) => {
    console.log('Se recibió una nueva solicitud de contacto:', input);

    // TODO: Implementar la lógica de envío de correo electrónico aquí.
    // Este es el lugar para integrar un servicio de correo electrónico como Resend, SendGrid o Nodemailer.
    // Ejemplo con un servicio de email ficticio:
    //
    // import { emailService } from '@/lib/email';
    //
    // await emailService.send({
    //   from: 'web@terrorplay.com',
    //   to: 'contacto@tuempresa.com', // El correo donde recibirás las solicitudes
    //   reply_to: input.email,
    //   subject: `Nueva solicitud de evento: ${input.eventType}`,
    //   html: `
    //     <h1>Nueva solicitud de presupuesto</h1>
    //     <p><strong>Nombre:</strong> ${input.name}</p>
    //     <p><strong>Email:</strong> ${input.email}</p>
    //     <p><strong>Tipo de evento:</strong> ${input.eventType}</p>
    //     <p><strong>Mensaje:</strong></p>
    //     <p>${input.message}</p>
    //   `,
    // });
    
    // Simula un pequeño retraso para emular una llamada de red
    await new Promise(resolve => setTimeout(resolve, 1000));

    console.log(`Simulación: Correo enviado para ${input.email}.`);
  }
);
