import type { Metadata } from 'next';
import ExtremeHouseContent from './ExtremeHouseContent';

export const metadata: Metadata = {
  title: 'Extreme House | La experiencia de terror extremo (+18)',
  description:
    'Extreme House: 45 minutos de terror extremo en grupos reducidos, solo para mayores de 18 años. Actores profesionales y una inmersión total en la pesadilla.',
  alternates: { canonical: '/eventos/extreme-house' },
};

export default function ExtremeHousePage() {
  return <ExtremeHouseContent />;
}
