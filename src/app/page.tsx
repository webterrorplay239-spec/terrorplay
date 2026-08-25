import type { Metadata } from 'next';
import HomeContent from './HomeContent';

export const metadata: Metadata = {
  title: { absolute: 'TerrorPlay | Eventos de Terror, Pasajes y Halloween en Sevilla' },
  description:
    'Creamos eventos de terror a medida: pasajes del terror, escape rooms, cenas de misterio y real games zombie para fiestas, empresas y ayuntamientos en Sevilla y Andalucía.',
  alternates: { canonical: '/' },
};

export default function HomePage() {
  return <HomeContent />;
}
