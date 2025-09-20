"use client";

import { ParallaxBanner } from "@/components/ParallaxBanner";

export default function AvisoLegalPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <ParallaxBanner 
        title="Aviso Legal" 
        subtitle="Información legal de TerrorPlay"
        imagePath="/pared-de-metal-oxidado-con-salpicaduras-de-sangre.jpg"
      />
      
      <div className="container mx-auto px-4 py-8 prose prose-invert max-w-4xl">
        <h2 className="text-2xl font-bold mb-4">Aviso Legal</h2>
        
        <section className="mb-8">
          <h3 className="text-xl font-bold mb-4">Identificación</h3>
          <ul>
            <li>Razón Social: M. Pilar Barradas</li>
            <li>Nombre comercial: Good Party</li>
            <li>CIF: 48656935K</li>
            <li>Domicilio social: Calle José Rodríguez Rodri 41980 La Algaba (Sevilla)</li>
            <li>Actividad: Eventos</li>
            <li>Correo electrónico: info@goodparty.es</li>
          </ul>
        </section>

        <section className="mb-8">
          <p className="mb-4">
            Good Party como responsable de esta web, asume el compromiso de procesar la información de sus usuarios y clientes con plenas garantías y cumplir con los requisitos nacionales y europeos que regulan la recopilación y uso de los datos personales de sus usuarios.
          </p>
          <p className="mb-4">
            Esta web cumple rigurosamente con La Ley Orgánica 15/1999, de 13 de diciembre, de Protección de Datos de Carácter Personal (LOPD), y con el Real Decreto 1720/2007, de 21 de diciembre (LOPD). Cumple también con el Reglamento (UE) 2016/679 del Parlamento Europeo y del Consejo de 27 de abril de 2016 relativo a la protección de las personas físicas (RGPD), así como con la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y Comercio Electrónico (LSSICE ó LSSI).
          </p>
        </section>

        <section className="mb-8">
          <h3 className="text-xl font-bold mb-4">Condiciones de uso</h3>
          <p className="mb-4">
            Toda persona que acceda a este sitio web asume el papel de usuario, comprometiéndose a la observancia y cumplimiento riguroso de las disposiciones aquí dispuestas, así como a cualesquiera otra disposición legal que fuera de aplicación.
          </p>
          <p className="mb-4">
            El prestador se reserva el derecho a modificar cualquier tipo de información que pudiera aparecer en el sitio web, sin que exista obligación de preavisar o poner en conocimiento de los usuarios dichas obligaciones, entendiéndose como suficiente con la publicación en el sitio web del prestador.
          </p>
        </section>

        <section className="mb-8">
          <h3 className="text-xl font-bold mb-4">Compromisos y obligaciones de los usuarios</h3>
          <ol className="list-decimal pl-6">
            <li className="mb-4">
              Quedas informado y aceptas que el acceso a esta web no supone, en modo alguno, el inicio de una relación comercial con Good Party. Así que debes comprometerte a utilizar esta web, sus servicios y contenidos cumpliendo la legislación vigente, la buena fe y el orden público.
            </li>
            <li className="mb-4">
              Queda prohibido el uso de la web con fines ilícitos, dañinos o que puedan causar cualquier tipo de problema o perjuicio o impedir el normal funcionamiento de la web.
            </li>
            <li className="mb-4">
              Te comprometes a no llevar a cabo ninguna conducta que pudiera dañar la imagen, los intereses y los derechos de Good Party o de terceros. O que pueda dañar, inutilizar o sobrecargar goodparty.es impidiendo de cualquier forma que se pueda utilizar la web de forma normal.
            </li>
          </ol>
        </section>

        <section className="mb-8">
          <h3 className="text-xl font-bold mb-4">Medidas de seguridad</h3>
          <p className="mb-4">
            Los datos personales que puedas comunicar a Good Party como Usuario de goodparty.es pueden ser almacenadas en bases de datos, cuya titularidad corresponde exclusivamente a Good Party, asumiendo todas las medidas técnicas, organizativas y de seguridad que garantizan la confidencialidad, integridad y calidad de la información contenida en las mismas.
          </p>
        </section>

        <section className="mb-8">
          <h3 className="text-xl font-bold mb-4">Exclusión de garantías y responsabilidad</h3>
          <p className="mb-4">
            Good Party no otorga ninguna garantía ni se hace responsable, en ningún caso, de los daños y perjuicios de cualquier naturaleza que pudieran originarse por:
          </p>
          <ul className="list-disc pl-6">
            <li>La falta de disponibilidad, mantenimiento y efectivo funcionamiento de la web o de sus servicios y contenidos.</li>
            <li>La existencia de virus, malware, programas maliciosos o dañinos en los contenidos.</li>
            <li>El uso ilícito, negligente, fraudulento o contrario a este Aviso Legal.</li>
            <li>De los daños que pudieran provenir del uso ilegal o indebido de esta web.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h3 className="text-xl font-bold mb-4">Ley aplicable y jurisdicción</h3>
          <p className="mb-4">
            Con carácter general, las relaciones entre goodparty.es y los Usuarios, respecto al uso de la web, se encuentran sometidas a la legislación y jurisdicción españolas, a la que se someten expresamente las partes, siendo competentes para la resolución de todos los conflictos derivados o relacionados con su uso los Juzgados y Tribunales de Sevilla.
          </p>
        </section>

        <section>
          <h3 className="text-xl font-bold mb-4">Contacto</h3>
          <p>
            En caso de que como Usuario tuvieses alguna duda sobre estas Condiciones legales o quieres hacer cualquier comentario sobre goodparty.es, puedes escribir a info@goodparty.es
          </p>
        </section>
      </div>
    </main>
  );
}