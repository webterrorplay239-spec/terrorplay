"use client";

import { ParallaxBanner } from "@/components/ParallaxBanner";

export default function AccesibilidadPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <ParallaxBanner 
        title="Accesibilidad" 
        subtitle="Nuestro compromiso con la accesibilidad"
        imagePath="/pared-de-metal-oxidado-con-salpicaduras-de-sangre.jpg"
      />
      
      <div className="container mx-auto px-4 py-8 prose prose-invert max-w-4xl">
        <h2 className="text-2xl font-bold mb-4">Política de Accesibilidad</h2>
        <p className="mb-8">
          La entidad M. Pilar Barradas se ha comprometido a hacer accesible su sitio web de conformidad con el Real Decreto 1112/2018, de 7 de septiembre, sobre accesibilidad de los sitios web y aplicaciones para dispositivos móviles del sector público.
        </p>

        <section className="mb-8">
          <h3 className="text-xl font-bold mb-4">Situación de cumplimiento</h3>
          <p>
            Este sitio web es parcialmente conforme con el RD 1112/2018 debido a las excepciones y a la falta de conformidad de los aspectos que se indican a continuación.
          </p>
        </section>

        <section className="mb-8">
          <h3 className="text-xl font-bold mb-4">Contenido no accesible</h3>
          <p className="mb-4">El contenido que se recoge a continuación no es accesible por lo siguiente:</p>

          <h4 className="text-lg font-semibold mb-2">Falta de conformidad con el RD 1112/2018</h4>
          <ul className="list-disc pl-6 space-y-2">
            <li>Existen logotipos e imágenes con texto alternativo incorrecto o confuso e imágenes complejas sin descripción textual.</li>
            <li>Existen listas creadas de forma incorrecta y tablas con celdas etiquetadas incorrectamente.</li>
            <li>Existen tablas y formularios no adaptados a tamaños de pantalla pequeños.</li>
            <li>Existen elementos que no son accesibles por teclado.</li>
            <li>Hay enlaces en los que no se identifica correctamente su función.</li>
            <li>Hay encabezados con texto repetido y/o poco descriptivo.</li>
            <li>Existen formularios con campos obligatorios donde no se informa al usuario.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h3 className="text-xl font-bold mb-4">Preparación de la presente declaración de accesibilidad</h3>
          <ul className="list-disc pl-6">
            <li>La presente declaración fue preparada el 23/02/2024</li>
            <li>Última revisión de la declaración: 19/02/2025</li>
            <li>El método empleado fue una autoevaluación llevada a cabo por la propia entidad.</li>
          </ul>
        </section>

        <section>
          <h3 className="text-xl font-bold mb-4">Observaciones y datos de contacto</h3>
          <p className="mb-4">
            Puede realizar comunicaciones sobre requisitos de accesibilidad como:
          </p>
          <ul className="list-disc pl-6">
            <li>Informar sobre cualquier posible incumplimiento</li>
            <li>Transmitir dificultades de acceso al contenido</li>
            <li>Formular consultas o sugerencias de mejora</li>
          </ul>
          <p className="mt-4">
            Para cualquier consulta relacionada con la accesibilidad de este sitio web, puede contactar con nosotros a través de info@goodparty.es
          </p>
        </section>
      </div>
    </main>
  );
}