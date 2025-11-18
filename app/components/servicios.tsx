"use client"

import {
  Building,
  Wrench,
  MapPin,
  FileText,
  Handshake,
  ArrowRight,
  Drill,
  Lightbulb,
  Droplets,
  PaintBucket,
  DoorOpen,
  Table2,
} from "lucide-react"

export default function ServicesSection() {


  // Rubros especializados
  const specializedServices = [
    {
      icon: Building,
      title: "Albañilería",
      description: "Muros, revoques y estructuras sólidas",
    },
    {
      icon: Droplets,
      title: "Sanitaria",
      description: "Instalaciones de agua y desagües",
    },
    {
      icon: Lightbulb,
      title: "Electricidad",
      description: "Sistemas eléctricos completos",
    },
    {
      icon: Wrench,
      title: "Yeso",
      description: "Cielorrasos y terminaciones",
    },
    {
      icon: PaintBucket,
      title: "Pintura",
      description: "Acabados y revestimientos",
    },
    {
      icon: DoorOpen,
      title: "Aberturas y Mamparas",
      description: "Puertas, ventanas y divisiones",
    },
    {
      icon: Table2,
      title: "Carpintería",
      description: "Muebles y trabajos en madera",
    },
    {
      icon: Drill,
      title: "Más Rubros",
      description: "Soluciones personalizadas",
    },
  ]

  const processSteps = [
    {
      number: 1,
      title: "Visita y Diagnóstico",
      description: "Evaluamos tu proyecto, necesidades específicas y presupuesto disponible.",
      icon: MapPin,
    },
    {
      number: 2,
      title: "Presupuesto y Plan",
      description: "Entregamos propuesta cerrada con cronograma detallado y sin sorpresas.",
      icon: FileText,
    },
    {
      number: 3,
      title: "Ejecución y Entrega",
      description: "Supervisión diaria, reporte visual y entrega de obra conforme contrato.",
      icon: Handshake,
    },
  ]

  
  return (
    <>
      {/* Servicios Principales */}
      <section className="w-full bg-linear-to-b from-white to-gray-50 py-20 md:py-28 px-4">
        <div className="mx-auto max-w-7xl">
          {/* Header */}
          <div className="mb-16 text-center space-y-5">
            <div className="inline-block px-4 py-2 bg-[#102348]/10 rounded-full mb-4">
              <span className="text-[#102348] font-semibold text-sm">Servicios Integrales</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#102348] text-balance">
              Soluciones Completas de Construcción
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Desde obras nuevas hasta reformas especializadas, cubrimos todos nuestros servicios con calidad profesional
            </p>
          </div>

   
          {/* Specialized Services Section */}
          <div className="mt-20">

            {/* Specialized Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5">
              {specializedServices.map((service, idx) => {
                const IconComponent = service.icon
                return (
                  <div
                    key={idx}
                    className="group relative bg-white rounded-xl border border-gray-200 hover:border-[#102348]/30 shadow-sm hover:shadow-lg transition-all duration-300 p-5 md:p-6 flex flex-col items-center text-center gap-3 hover:-translate-y-1 cursor-pointer"
                  >
                    {/* Icon container */}
                    <div className="h-12 w-12 md:h-14 md:w-14 rounded-lg bg-[#102348]/5 flex items-center justify-center group-hover:bg-[#102348]/10 transition-all duration-300 group-hover:scale-110">
                      <IconComponent className="text-[#102348]" size={24} strokeWidth={2} />
                    </div>

                    {/* Title */}
                    <h4 className="text-sm md:text-base font-bold text-gray-900 group-hover:text-[#102348] transition-colors">
                      {service.title}
                    </h4>

                    {/* Description */}
                    <p className="text-xs text-gray-500 leading-snug">
                      {service.description}
                    </p>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* How We Work Section */}
      <section className="w-full bg-white py-20 md:py-28 px-4 border-t border-gray-100">
        <div className="mx-auto max-w-7xl">
          {/* Header */}
          <div className="mb-16 text-center space-y-5">
            <div className="inline-block px-4 py-2 bg-[#102348]/10 rounded-full mb-4">
              <span className="text-[#102348] font-semibold text-sm">Proceso Transparente</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#102348] text-balance">Cómo Trabajamos</h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Un proceso claro y profesional en 3 pasos simples
            </p>
          </div>

          {/* Process Steps */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-6">
            {processSteps.map((step, idx) => {
              const IconComponent = step.icon
              return (
                <div key={idx} className="relative flex flex-col group">
                  {/* Connector line - only on desktop */}
                  {idx < processSteps.length - 1 && (
                    <div className="hidden md:block absolute top-10 left-[55%] w-[90%] h-0.5 bg-linear-to-r from-[#102348]/20 to-[#102348]/5" />
                  )}

                  {/* Step card */}
                  <div className="relative z-10 flex flex-col items-center text-center space-y-5 bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border-2 border-gray-100 hover:border-[#102348]/20">
                    {/* Number badge */}
                    <div className="h-20 w-20 rounded-full bg-linear-to-br from-[#102348] to-[#1a3a6b] flex items-center justify-center text-white font-extrabold text-2xl shadow-lg shadow-[#102348]/30 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                      {step.number}
                    </div>

                    {/* Icon */}
                    <div className="p-3 rounded-xl bg-[#102348]/5 group-hover:bg-[#102348]/10 transition-colors duration-300">
                      <IconComponent className="text-[#102348]" size={32} strokeWidth={2} />
                    </div>

                    {/* Content */}
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#102348] transition-colors">
                        {step.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
                    </div>

                    {/* Decorative element */}
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-[#102348]/5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                </div>
              )
            })}
          </div>

          {/* CTA */}
          <div className="mt-16 text-center">
            <a
              href="tel:+59898041654"
              className="inline-flex items-center gap-3 px-8 py-4 bg-linear-to-r from-[#102348] to-[#1a3a6b] text-white font-bold text-lg rounded-xl shadow-lg shadow-[#102348]/30 hover:shadow-2xl hover:shadow-[#102348]/40 hover:-translate-y-1 hover:scale-105 transition-all duration-300 group"
            >
              <span>Solicitar Presupuesto Gratuito</span>
              <ArrowRight size={22} className="transition-transform duration-300 group-hover:translate-x-1" strokeWidth={2.5} />
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
