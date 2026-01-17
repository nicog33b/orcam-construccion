import ServicesSection from "./components/servicios";
import BenefitsSection from "./components/beneficios";
import ProjectsSection from "./components/projects";
import AboutSection from "./components/About";
import FAQSection from "./components/FAQ";
import CTASection from "./components/ContactCTA";

// Static generation configuration
export const revalidate = false; // ISR deshabilitado - completamente estático
export const dynamic = "force-static"; // Fuerza generación estática
export const fetchCache = "only-cache"; // Solo cache, sin fetches dinámicos

export default function Home() {
  return (
    <>
      {/* Beneficios */}
      <section id="beneficios">
        <BenefitsSection />
      </section>

      {/* Servicios */}
      <section id="servicios">
        <ServicesSection />
      </section>

      {/* CTA Intermedia - Mitad de página */}
      <section className="w-full py-12 bg-slate-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            ¿Listo para empezar tu proyecto?
          </h2>
          <p className="text-slate-300 mb-8 text-lg">
            Obtén un presupuesto sin cargo en 24 horas
          </p>
          <a
            href="https://wa.me/59895732108"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg transition-colors"
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-5.031 1.378c-3.055 2.309-3.955 6.7-2.01 10.369 1.919 3.595 5.825 5.194 9.604 3.985.735-.201 1.452-.547 2.089-.986l.064-.041 4.118.308 1.281-3.823-.041-.064c.537-1.004.997-2.314.997-3.468C19.884 9.572 17.313 6.979 14.051 6.979Z" />
            </svg>
            Habla con nosotros por WhatsApp
          </a>
        </div>
      </section>

      {/* Proyectos */}
      <section id="proyectos">
        <ProjectsSection />
      </section>

      {/* Sobre Nosotros */}
      <section id="nosotros">
        <AboutSection />
      </section>

      {/* FAQ */}
      <section id="faq">
        <FAQSection />
      </section>

      {/* Contacto Final */}
      <section id="contacto">
        <CTASection />
      </section>
    </>
  );
}
