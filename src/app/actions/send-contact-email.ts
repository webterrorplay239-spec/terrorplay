'use server';

/**
 * Server Action que envía por email las solicitudes del formulario de contacto.
 *
 * Requiere estas variables de entorno (ver .env.example):
 *   SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, CONTACT_TO, CONTACT_FROM
 */

import nodemailer from 'nodemailer';
import { z } from 'zod';

const ContactSchema = z.object({
  name: z.string().min(2).max(100),
  email: z.string().email(),
  eventType: z.enum(['pasaje-terror', 'escape-room', 'cena-misterio', 'real-game', 'otro']),
  message: z.string().min(10).max(500),
  // Honeypot antispam: los bots lo rellenan, las personas no lo ven.
  website: z.string().max(0).optional(),
});

export type SendContactEmailInput = z.infer<typeof ContactSchema>;
export type SendContactEmailResult = { ok: true } | { ok: false; error: string };

const EVENT_LABELS: Record<SendContactEmailInput['eventType'], string> = {
  'pasaje-terror': 'Pasaje del Terror',
  'escape-room': 'Escape Room de Terror',
  'cena-misterio': 'Cena de Misterio / Cluedo',
  'real-game': 'Real Game / Supervivencia Zombie',
  otro: 'Otro tipo de evento',
};

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

export async function sendContactEmail(input: SendContactEmailInput): Promise<SendContactEmailResult> {
  const parsed = ContactSchema.safeParse(input);
  if (!parsed.success) {
    return { ok: false, error: 'Los datos del formulario no son válidos.' };
  }

  const data = parsed.data;

  // Honeypot relleno => bot. Devolvemos ok para no darle pistas.
  if (data.website) {
    return { ok: true };
  }

  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, CONTACT_TO, CONTACT_FROM } = process.env;

  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS || !CONTACT_TO) {
    console.error(
      '[contacto] Faltan variables de entorno SMTP. Solicitud NO enviada:',
      { name: data.name, email: data.email, eventType: data.eventType }
    );
    return {
      ok: false,
      error: 'El envío de correo no está configurado en el servidor.',
    };
  }

  const port = Number(SMTP_PORT ?? 587);

  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port,
    secure: port === 465,
    auth: { user: SMTP_USER, pass: SMTP_PASS },
  });

  const eventLabel = EVENT_LABELS[data.eventType];

  try {
    await transporter.sendMail({
      from: CONTACT_FROM || `TerrorPlay <${SMTP_USER}>`,
      to: CONTACT_TO,
      replyTo: `${data.name} <${data.email}>`,
      subject: `Nueva solicitud de evento (${eventLabel}) - ${data.name}`,
      text: [
        'Nueva solicitud de presupuesto desde terrorplay',
        '',
        `Nombre: ${data.name}`,
        `Email: ${data.email}`,
        `Tipo de evento: ${eventLabel}`,
        '',
        'Mensaje:',
        data.message,
      ].join('\n'),
      html: `
        <h2>Nueva solicitud de presupuesto</h2>
        <p><strong>Nombre:</strong> ${escapeHtml(data.name)}</p>
        <p><strong>Email:</strong> <a href="mailto:${escapeHtml(data.email)}">${escapeHtml(data.email)}</a></p>
        <p><strong>Tipo de evento:</strong> ${escapeHtml(eventLabel)}</p>
        <p><strong>Mensaje:</strong></p>
        <p style="white-space:pre-wrap">${escapeHtml(data.message)}</p>
      `,
    });

    return { ok: true };
  } catch (error) {
    console.error('[contacto] Error enviando el email:', error);
    return {
      ok: false,
      error: 'No se ha podido enviar el mensaje. Inténtalo de nuevo más tarde.',
    };
  }
}
