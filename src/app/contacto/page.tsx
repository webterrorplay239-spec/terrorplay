import type { Metadata } from 'next';
import ContactoContent from './ContactoContent';

export const metadata: Metadata = {
  title: 'Contacto y Presupuestos',
  description:
    'Pide presupuesto sin compromiso para tu evento de terror: pasajes del terror, escape rooms, cenas de misterio o animaciones de Halloween. Te respondemos en menos de 24 horas.',
  alternates: { canonical: '/contacto' },
};

export default function ContactoPage() {
  return <ContactoContent />;
}
