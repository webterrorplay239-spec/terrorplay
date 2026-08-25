/** Configuración pública del sitio, en un solo sitio. */

// Dominio real (sin barra final). En producción, define NEXT_PUBLIC_SITE_URL.
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || 'https://www.terrorplay.com').replace(/\/$/, '');
export const SITE_NAME = 'TerrorPlay';

// Contacto: el mismo de Good Party. Cambiar aquí lo cambia en toda la web
// (botón flotante de WhatsApp, diálogo de reservas y datos estructurados).
export const CONTACT_EMAIL = 'info@goodparty.es';
export const CONTACT_PHONE = '+34653336695';
/** Formato que exige wa.me: solo dígitos, con prefijo de país. */
export const WHATSAPP_PHONE = '34653336695';
/** Página donde se gestionan las reservas. */
export const RESERVATION_URL = 'https://goodparty.es/';
