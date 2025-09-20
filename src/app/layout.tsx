import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import CreepyMusic from '@/components/CreepyMusic';
import { CookieBanner } from '@/components/CookieBanner';

export const metadata: Metadata = {
  title: 'TerrorPlay - Eventos y Animaciones de Terror para Halloween',
  description: 'Especialistas en eventos de terror, pasajes del terror, escape rooms y animaciones para Halloween. Creamos experiencias de miedo inolvidables para fiestas, empresas y ayuntamientos.',
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
      </head>
      <body className="font-['Alegreya',_serif] bg-[url('/pared-de-metal-oxidado-con-salpicaduras-de-sangre.jpg')] bg-cover bg-center bg-fixed text-foreground antialiased flex flex-col min-h-screen">
        <CreepyMusic />
        <Header />
        <main className="flex-grow bg-black/40 rounded-lg p-2 md:p-8 shadow-2xl">
          {children}
        </main>
        <Footer />
        <WhatsAppButton phoneNumber="+34000000000" message="Hola! Me gustaría pedir presupuesto para un evento de terror." />
        <CookieBanner />
        <Toaster />
      </body>
    </html>
  );
}
