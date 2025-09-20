"use client";

import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import Link from "next/link";

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Comprobar si el usuario ya ha aceptado las cookies
    const hasAcceptedCookies = localStorage.getItem("cookiesAccepted");
    if (!hasAcceptedCookies) {
      setIsVisible(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookiesAccepted", "true");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-black/95 text-white p-4 shadow-lg z-50 backdrop-blur-sm">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-sm">
          Utilizamos cookies propias y de terceros para mejorar nuestros servicios.{" "}
          <Link href="/cookies" className="text-primary hover:underline">
            Más información
          </Link>
        </div>
        <div className="flex gap-4">
          <Button
            variant="outline"
            className="text-xs"
            onClick={() => setIsVisible(false)}
          >
            Rechazar
          </Button>
          <Button 
            variant="default"
            className="text-xs bg-primary hover:bg-primary/80"
            onClick={acceptCookies}
          >
            Aceptar cookies
          </Button>
        </div>
      </div>
    </div>
  );
}