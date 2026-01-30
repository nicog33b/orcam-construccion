import ServicesSection from "./components/servicios";
import BenefitsSection from "./components/beneficios";
import ProjectsSection from "./components/projects";
import AboutSection from "./components/About";
import FAQSection from "./components/FAQ";
import CTASection from "./components/ContactCTA";
import { SiWhatsapp } from "react-icons/si";

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
            href="https://wa.me/59899062837"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg transition-colors"
          >
            <SiWhatsapp className="w-5 h-5 mr-2" />
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
