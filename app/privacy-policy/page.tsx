import { Metadata } from "next"
import Link from "next/link"

// Static generation configuration
export const revalidate = false; // Completamente estático
export const dynamic = "force-static";
export const fetchCache = "only-cache";

export const metadata: Metadata = {
  title: "Política de Privacidad",
  description: "Política de privacidad de Orcam Construcciones. Cómo usamos y protegemos tus datos.",
}

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-white pt-20 pb-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-slate-900 mb-8">Política de Privacidad</h1>

        <div className="prose prose-slate max-w-none space-y-8 text-slate-700">
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">1. Información que Recopilamos</h2>
            <p>
              En Orcam Construcciones recopilamos información personal que voluntariamente nos proporciones a través de:
            </p>
            <ul className="list-disc list-inside space-y-2 mt-2">
              <li>Formularios de contacto en nuestro sitio web</li>
              <li>Mensajes por WhatsApp, teléfono o email</li>
              <li>Solicitudes de presupuesto</li>
            </ul>
            <p className="mt-4">
              Esta información puede incluir: nombre, número de teléfono/WhatsApp, email, y descripción del proyecto.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">2. Cómo Usamos tu Información</h2>
            <p>
              Usamos los datos que nos proporcionas únicamente para:
            </p>
            <ul className="list-disc list-inside space-y-2 mt-2">
              <li>Responderte consultas y presupuestos</li>
              <li>Coordinar proyectos y trabajos contigo</li>
              <li>Mantener comunicación sobre servicios que solicitaste</li>
              <li>Mejorar nuestro servicio al cliente</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">3. Protección de Datos</h2>
            <p>
              Tus datos personales se tratan con confidencialidad y se almacenan de forma segura. No compartimos tu información
              con terceros sin tu consentimiento, excepto cuando sea requerido por ley.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">4. Cookies</h2>
            <p>
              Nuestro sitio web utiliza cookies mínimas para mejorar tu experiencia de navegación. Puedes deshabilitarlas
              en la configuración de tu navegador si lo deseas.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">5. Tus Derechos</h2>
            <p>
              Tienes derecho a:
            </p>
            <ul className="list-disc list-inside space-y-2 mt-2">
              <li>Acceder a los datos personales que tenemos de ti</li>
              <li>Solicitar correcciones si algo es incorrecto</li>
              <li>Solicitar la eliminación de tus datos</li>
              <li>Opt-out de comunicaciones futuras</li>
            </ul>
            <p className="mt-4">
              Para ejercer estos derechos, contactanos por WhatsApp 094 681 285.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">6. Contacto</h2>
            <p>
              Si tienes preguntas sobre esta política de privacidad, puedes contactarnos:
            </p>
            <ul className="list-disc list-inside space-y-2 mt-2">
              <li>WhatsApp: 094 681 285</li>
              <li>Zona de cobertura: Montevideo y alrededores</li>
            </ul>
          </section>

          <section className="pt-8 border-t border-slate-200">
            <p className="text-sm text-slate-600">
              Última actualización: Enero 2026
            </p>
          </section>
        </div>

        {/* Back to Home */}
        <div className="mt-12 text-center">
          <Link
            href="/"
            className="inline-flex items-center px-6 py-3 bg-slate-900 text-white font-semibold rounded-lg hover:bg-slate-800 transition-colors"
          >
            ← Volver al inicio
          </Link>
        </div>
      </div>
    </main>
  )
}
