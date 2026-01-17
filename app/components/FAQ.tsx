"use client"

import { ChevronDown } from "lucide-react"
import { useState } from "react"

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      question: "¿Cómo solicito un presupuesto?",
      answer:
        "Es fácil y sin costo. Podés escribirnos por WhatsApp o completar nuestro formulario con fotos de lo que necesitás. Te responderemos en máximo 24 horas con un presupuesto cerrado.",
    },
    {
      question: "¿Incluye garantía el trabajo?",
      answer:
        "Sí. Todos nuestros trabajos están garantizados por escrito y protegidos con seguro de obra. Contrato y transparencia total.",
    },
    {
      question: "¿Cuánto tiempo tarda una reforma típica?",
      answer:
        "Depende del alcance, pero un baño completo toma 2-4 semanas. Te firmaremos un cronograma exacto antes de empezar, y lo cumplimos.",
    },
    {
      question: "¿Atienden emergencias o trabajos urgentes?",
      answer:
        "Sí. Tenemos flexibilidad para emergencias. Contactanos por WhatsApp al 094 681 285 y coordinamos según disponibilidad.",
    },
    {
      question: "¿Qué zona atienden?",
      answer:
        "Trabajamos en toda la zona de Montevideo y alrededores. Presupuestamos sin costo en el lugar.",
    },
    {
      question: "¿Qué incluye 'llave en mano'?",
      answer:
        "Todo: proyecto, permisos si aplica, compra de materiales, mano de obra, supervisión diaria y reportes con fotos. Vos no te preocupás por nada.",
    },
  ]

  return (
    <section id="faq" className="w-full py-20 lg:py-28 bg-white">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Preguntas Frecuentes</h2>
          <p className="text-lg text-slate-600">
            Resolvemos tus dudas sobre presupuestos, garantías y plazos
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-slate-200 rounded-lg overflow-hidden transition-all duration-300 hover:border-slate-300"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-4 md:py-5 flex items-center justify-between bg-slate-50 hover:bg-slate-100 transition-colors text-left focus:outline-none focus:ring-2 focus:ring-slate-900 focus:ring-inset"
              >
                <h3 className="font-semibold text-slate-900 text-base md:text-lg pr-4">
                  {faq.question}
                </h3>
                <ChevronDown
                  className={`w-5 h-5 text-slate-600 flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              {openIndex === index && (
                <div className="px-6 py-4 md:py-5 bg-white border-t border-slate-200 text-slate-700 text-base leading-relaxed">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA after FAQ */}
        <div className="mt-12 text-center">
          <p className="text-slate-600 mb-6">¿Más preguntas? Estamos acá para ayudarte</p>
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
            Contactanos por WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}
