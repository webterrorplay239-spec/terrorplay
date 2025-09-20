"use client";

import { ParallaxBanner } from "@/components/ParallaxBanner";

export default function CookiesPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <ParallaxBanner 
        title="Política de Cookies" 
        subtitle="Información sobre cookies"
        imagePath="/pared-de-metal-oxidado-con-salpicaduras-de-sangre.jpg"
      />
      
      <div className="container mx-auto px-4 py-8 prose prose-invert max-w-4xl">
        <h2 className="text-2xl font-bold mb-4">Política de Cookies</h2>
        <p className="text-sm text-muted-foreground mb-8">
          Esta política de cookies fue actualizada por última vez el 23 de febrero de 2024 y se aplica a los ciudadanos y residentes legales permanentes del Espacio Económico Europeo y Suiza.
        </p>

        <section className="mb-8">
          <h3 className="text-xl font-bold mb-4">1. Introducción</h3>
          <p>
            Nuestra web utiliza cookies y otras tecnologías relacionadas (para mayor comodidad, todas las tecnologías se denominan «cookies»). Las cookies también son colocadas por terceros a los que hemos contratado. En el siguiente documento te informamos sobre el uso de cookies en nuestra web.
          </p>
        </section>

        <section className="mb-8">
          <h3 className="text-xl font-bold mb-4">2. ¿Qué son las cookies?</h3>
          <p>
            Una cookie es un pequeño archivo que se envía junto con las páginas de esta web y que tu navegador almacena en el disco duro de su ordenador u otro dispositivo. La información almacenada puede ser devuelta a nuestros servidores o a los servidores de terceros apropiados durante una visita posterior.
          </p>
        </section>

        <section className="mb-8">
          <h3 className="text-xl font-bold mb-4">3. ¿Qué son los scripts?</h3>
          <p>
            Un script es un fragmento de código de programa que se utiliza para hacer que nuestra web funcione correctamente y de forma interactiva. Este código se ejecuta en nuestro servidor o en tu dispositivo.
          </p>
        </section>

        <section className="mb-8">
          <h3 className="text-xl font-bold mb-4">4. ¿Qué es una baliza web?</h3>
          <p>
            Una baliza web (o una etiqueta de píxel) es una pequeña e invisible pieza de texto o imagen en una web que se utiliza para monitorear el tráfico en una web. Para ello, se almacenan varios datos sobre usted mediante estas balizas web.
          </p>
        </section>

        <section className="mb-8">
          <h3 className="text-xl font-bold mb-4">5. Cookies</h3>
          <h4 className="text-lg font-semibold mb-2">5.1 Cookies técnicas o funcionales</h4>
          <p className="mb-4">
            Algunas cookies aseguran que ciertas partes de la web funcionen correctamente y que tus preferencias de usuario sigan recordándose. Al colocar cookies funcionales, te facilitamos la visita a nuestra web.
          </p>

          <h4 className="text-lg font-semibold mb-2">5.2 Cookies de estadísticas</h4>
          <p className="mb-4">
            Utilizamos cookies estadísticas para optimizar la experiencia de la web para nuestros usuarios. Con estas cookies estadísticas obtenemos información sobre el uso de nuestra web.
          </p>

          <h4 className="text-lg font-semibold mb-2">5.3 Cookies de marketing/seguimiento</h4>
          <p className="mb-4">
            Las cookies de marketing/seguimiento son cookies, o cualquier otra forma de almacenamiento local, usadas para crear perfiles de usuario para mostrar publicidad o para hacer el seguimiento del usuario en esta web o en varias webs con fines de marketing similares.
          </p>
        </section>

        <section className="mb-8">
          <h3 className="text-xl font-bold mb-4">6. Cookies usadas</h3>
          <ul className="list-disc pl-6">
            <li>WordPress (Funcional)</li>
            <li>ThemeREX</li>
            <li>Google Fonts (Marketing)</li>
            <li>Google reCAPTCHA (Marketing)</li>
            <li>Google Maps (Marketing)</li>
          </ul>
        </section>

        <section className="mb-8">
          <h3 className="text-xl font-bold mb-4">7. Consentimiento</h3>
          <p>
            Cuando visites nuestra web por primera vez, te mostraremos una ventana emergente con una explicación sobre las cookies. Tan pronto como hagas clic en «Guardar preferencias», aceptas que usemos las categorías de cookies y plugins que has seleccionado en la ventana emergente, tal y como se describe en esta política de cookies.
          </p>
        </section>

        <section className="mb-8">
          <h3 className="text-xl font-bold mb-4">8. Tus derechos con respecto a los datos personales</h3>
          <ul className="list-disc pl-6">
            <li>Derecho a saber por qué se necesitan tus datos personales</li>
            <li>Derecho de acceso a tus datos personales</li>
            <li>Derecho de rectificación</li>
            <li>Derecho de cesión de tus datos</li>
            <li>Derecho de oposición</li>
          </ul>
        </section>

        <section>
          <h3 className="text-xl font-bold mb-4">9. Datos de contacto</h3>
          <p>
            Para preguntas y/o comentarios sobre nuestra política de cookies, por favor, contacta con nosotros usando los siguientes datos de contacto:
          </p>
          <address className="mt-4">
            María del Pilar Barradas González<br />
            Calle José Rodríguez Rodri 37<br />
            41980 La Algaba (Sevilla)<br />
            España<br />
            Correo electrónico: info@goodparty.es<br />
            Número de teléfono: 653 336 695
          </address>
        </section>
      </div>
    </main>
  );
}