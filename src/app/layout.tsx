
import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

export const metadata: Metadata = {
  title: 'TerrorPlay - Eventos y Animaciones de Terror para Halloween',
  description: 'Especialistas en eventos de terror, pasajes del terror, escape rooms y animaciones para Halloween. Creamos experiencias de miedo inolvidables para fiestas, empresas y ayuntamientos.',
};

const SmokeEffect = () => (
    <div className="smoke-container">
        <div className="smoke-element s1"></div>
        <div className="smoke-element s2"></div>
        <div className="smoke-element s3"></div>
        <div className="smoke-element s4"></div>
        <div className="smoke-element s5"></div>
    </div>
);

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
      <body className="font-['Alegreya',_serif] bg-background text-foreground antialiased flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <SmokeEffect />
        <WhatsAppButton phoneNumber="+34000000000" message="Hola! Me gustaría pedir presupuesto para un evento de terror." />
        <Toaster />
      </body>
    </html>
  );
}
