import ServicesSection from "./components/servicios";
import BenefitsSection from "./components/beneficios";
import ProjectsSection
 from "./components/projects";
export default function Home() {
  return (
    <>
      <section id="beneficios">
      <BenefitsSection/>
      </section>
      <section id="servicios">
      <ServicesSection/>
      </section>
      <section id="proyectos">
      <ProjectsSection/>      
      </section>
    </>
  );
}
