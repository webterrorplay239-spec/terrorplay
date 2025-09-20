"use client";

import { ParallaxBanner } from "@/components/ParallaxBanner";

export default function PrivacidadPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <ParallaxBanner 
        title="Política de Privacidad" 
        subtitle="Cómo protegemos tus datos"
        imagePath="/pared-de-metal-oxidado-con-salpicaduras-de-sangre.jpg"
      />
      
      <div className="container mx-auto px-4 py-8 prose prose-invert max-w-4xl">
        <h2 className="text-2xl font-bold mb-4">Política de Privacidad</h2>
        <p className="mb-8">
          Su privacidad es importante para nosotros. María del Pilar Barradas González, cumple con lo establecido en la legislación sobre protección de datos de carácter personal, y es titular de este sitio web, por lo que informa de los siguientes aspectos:
        </p>

        <section className="mb-8">
          <h3 className="text-xl font-bold mb-4">1. ¿QUIÉN ES RESPONSABLE DE SUS DATOS?</h3>
          <ul>
            <li>Identidad: M. Pilar Barradas, con nif: 48656935K</li>
            <li>Domicilio: Calle José Rodríguez Rodri 41980 La Algaba (Sevilla)</li>
            <li>Teléfono de contacto: 653 336 695</li>
            <li>Dirección de correo electrónico: info@goodparty.es</li>
          </ul>
        </section>

        <section className="mb-8">
          <h3 className="text-xl font-bold mb-4">2. ¿CON QUÉ FINALIDAD TRATAMOS SUS DATOS PERSONALES?</h3>
          <p>
            Tratamos los datos facilitados para poder prestar nuestros servicios de Agente, según lo establecido en según se determina en la Ley 12/1992, de 27 de mayo, sobre Contrato de Agencia, tal y como se indica en el "Aviso Legal" de la web.
          </p>
          <p>
            El responsable en ningún caso utilizará los datos para fines incompatibles o distintos para los que los datos fueron recabados. Si los datos solicitados no se facilitan no nos será posible cumplir con los fines descritos.
          </p>
        </section>

        <section className="mb-8">
          <h3 className="text-xl font-bold mb-4">3. ¿POR CUÁNTO TIEMPO CONSERVAMOS SUS DATOS?</h3>
          <p>
            Se establece un periodo general de conservación de dos años a partir del término de la relación profesional. Los datos se podrán conservar más tiempo en tanto transcurra el razonablemente necesario para depurar cualquier tipo de responsabilidad según las circunstancias del caso concreto, así como durante el tiempo necesario para gestionar el ejercicio de los derechos por el interesado o la notificación de quiebras de seguridad en caso de que éstas se produzcan.
          </p>
        </section>

        <section className="mb-8">
          <h3 className="text-xl font-bold mb-4">4. ¿CUÁL ES LA LEGITIMACIÓN PARA EL TRATAMIENTO DE SUS DATOS?</h3>
          <p>
            La base que legitima el tratamiento de datos es el consentimiento otorgado por el usuario para la prestación de nuestros servicios de Agente.
          </p>
        </section>

        <section className="mb-8">
          <h3 className="text-xl font-bold mb-4">5. ¿A QUÉ DESTINATARIOS SE COMUNICARÁN SUS DATOS?</h3>
          <p>
            En principio, no se prevén comunicaciones a terceras personas distintas del propio interesado, salvo cumplimiento de obligación legal.
          </p>
        </section>

        <section className="mb-8">
          <h3 className="text-xl font-bold mb-4">6. DERECHOS</h3>
          <p>La actual legislación en materia de protección de datos personales le otorga la posibilidad de poder ejercer los siguientes derechos:</p>
          <ul className="list-disc pl-6">
            <li>Derecho a solicitar el acceso a los datos personales relativos al interesado</li>
            <li>Derecho a solicitar la rectificación o supresión de los datos</li>
            <li>Derecho a solicitar la limitación de su tratamiento</li>
            <li>Derecho a oponerse al tratamiento de los datos</li>
            <li>Derecho a la portabilidad de los datos</li>
            <li>Derecho a no ser objeto de decisiones individuales automatizadas</li>
          </ul>
          <p className="mt-4">
            Los interesados podrán ejercer sus derechos bien presencialmente, en Calle José Rodríguez Rodri 37 41980 La Algaba (Sevilla). Igualmente, podrá hacerlo a través de la siguiente dirección de correo electrónico: info@goodparty.es
          </p>
        </section>
      </div>
    </main>
  );
}