import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import CreepyMusic from '@/components/CreepyMusic';
import { CookieBanner } from '@/components/CookieBanner';
import { SITE_URL, CONTACT_EMAIL, CONTACT_PHONE, WHATSAPP_PHONE } from '@/lib/site';

// El dominio se define en src/lib/site.ts (variable NEXT_PUBLIC_SITE_URL).

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'TerrorPlay - Eventos y Animaciones de Terror para Halloween',
    template: '%s | TerrorPlay',
  },
  description:
    'Especialistas en eventos de terror, pasajes del terror, escape rooms y animaciones para Halloween. Creamos experiencias de miedo inolvidables para fiestas, empresas y ayuntamientos.',
  applicationName: 'TerrorPlay',
  keywords: [
    'eventos de terror',
    'pasaje del terror',
    'escape room de terror',
    'cena de misterio',
    'animación Halloween',
    'eventos Sevilla',
  ],
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    siteName: 'TerrorPlay',
    url: SITE_URL,
    title: 'TerrorPlay - Eventos y Animaciones de Terror',
    description:
      'Pasajes del terror, escape rooms, cenas de misterio y real games zombie. Creamos experiencias de miedo a medida en Sevilla y toda Andalucía.',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'TerrorPlay - Eventos de terror' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TerrorPlay - Eventos y Animaciones de Terror',
    description: 'Pasajes del terror, escape rooms, cenas de misterio y real games zombie en Sevilla.',
    images: ['/og-image.jpg'],
  },
  robots: { index: true, follow: true },
};

// Datos estructurados: ayuda a Google a entender que sois un negocio local.
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'TerrorPlay',
  description:
    'Productora de eventos de terror: pasajes del terror, escape rooms, cenas de misterio y real games.',
  url: SITE_URL,
  image: `${SITE_URL}/og-image.jpg`,
  email: CONTACT_EMAIL,
  telephone: CONTACT_PHONE,
  parentOrganization: { '@type': 'Organization', name: 'Good Party', url: 'https://goodparty.es' },
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Calle José Rodríguez Rodri, 37',
    postalCode: '41980',
    addressLocality: 'La Algaba',
    addressRegion: 'Sevilla',
    addressCountry: 'ES',
  },
  areaServed: { '@type': 'AdministrativeArea', name: 'Andalucía' },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Lacquer&family=Alegreya:wght@400;700&display=swap" rel="stylesheet" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-body bg-[url('/pared-de-metal-oxidado-con-salpicaduras-de-sangre.jpg')] bg-cover bg-center bg-fixed text-foreground antialiased flex flex-col min-h-screen">
        <CreepyMusic />
        <Header />
        <main className="flex-grow bg-black/40 rounded-lg p-2 md:p-8 shadow-2xl">
          {children}
        </main>
        <Footer />
        <WhatsAppButton phoneNumber={WHATSAPP_PHONE} message="Hola! Me gustaría pedir presupuesto para un evento de terror." />
        <CookieBanner />
        <Toaster />
      </body>
    </html>
  );
}
