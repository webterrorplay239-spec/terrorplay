"use client";

import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import Link from "next/link";

export const COOKIE_CHOICE_KEY = "cookiesChoice";

/**
 * Devuelve true si el usuario ha aceptado las cookies no esenciales.
 * Úsalo como condición antes de cargar Analytics, píxeles o cualquier
 * script de terceros.
 */
export function hasAcceptedCookies(): boolean {
  try {
    return localStorage.getItem(COOKIE_CHOICE_KEY) === "accepted";
  } catch {
    return false;
  }
}

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // El banner solo se muestra si el usuario aún no ha decidido nada.
    try {
      const choice = localStorage.getItem(COOKIE_CHOICE_KEY);
      if (choice !== "accepted" && choice !== "rejected") {
        setIsVisible(true);
      }
    } catch {
      // Modo incógnito o almacenamiento bloqueado: mostramos el banner igualmente.
      setIsVisible(true);
    }
  }, []);

  const saveChoice = (choice: "accepted" | "rejected") => {
    try {
      localStorage.setItem(COOKIE_CHOICE_KEY, choice);
    } catch {
      // Si no se puede guardar, al menos ocultamos el banner en esta visita.
    }
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
            onClick={() => saveChoice("rejected")}
          >
            Rechazar
          </Button>
          <Button 
            variant="default"
            className="text-xs bg-primary hover:bg-primary/80"
            onClick={() => saveChoice("accepted")}
          >
            Aceptar cookies
          </Button>
        </div>
      </div>
    </div>
  );
}