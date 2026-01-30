"use client"

import { ChevronDown } from "lucide-react"
import { SiWhatsapp } from "react-icons/si"
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
        "Sí. Tenemos flexibilidad para emergencias. Contactanos por WhatsApp al 099 062 837 y coordinamos según disponibilidad.",
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
            href="https://wa.me/59899062837"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg transition-colors"
          >
            <SiWhatsapp className="w-5 h-5 mr-2" />
            Contactanos por WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}
