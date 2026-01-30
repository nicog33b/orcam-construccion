"use client"

import { Phone, MapPin } from "lucide-react"
import { SiWhatsapp } from "react-icons/si"
import { useState, FormEvent } from "react"

export default function CTASection() {
  const [formData, setFormData] = useState({
    nombre: "",
    whatsapp: "",
    mensaje: "",
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    // Construir URL de WhatsApp con datos del formulario
    const message = `Hola, soy ${formData.nombre}. ${formData.mensaje}`
    const whatsappUrl = `https://wa.me/59899062837?text=${encodeURIComponent(message)}`

    // Abrir WhatsApp
    window.open(whatsappUrl, "_blank")

    // Limpiar formulario y mostrar confirmación
    setFormData({ nombre: "", whatsapp: "", mensaje: "" })
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <section id="contacto" className="w-full py-20 lg:py-28 bg-gradient-to-b from-slate-900 to-slate-800">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Contáctanos Hoy
          </h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Presupuesto sin cargo en 24 horas. Hablemos de tu proyecto.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* WhatsApp Card */}
          <a
            href="https://wa.me/59899062837"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/10 hover:bg-white/15 backdrop-blur-sm rounded-xl p-8 text-center transition-all hover:scale-105 group"
          >
            <SiWhatsapp className="w-12 h-12 text-green-400 mx-auto mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="text-xl font-semibold text-white mb-2">WhatsApp</h3>
            <p className="text-slate-300 mb-4">Respuesta rápida</p>
            <p className="text-2xl font-bold text-white">099 062 837</p>
          </a>

          {/* Phone Card */}
          <div className="bg-white/10 hover:bg-white/15 backdrop-blur-sm rounded-xl p-8 text-center transition-all">
            <Phone className="w-12 h-12 text-blue-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">Teléfono</h3>
            <p className="text-slate-300 mb-4">De lunes a viernes</p>
            <p className="text-2xl font-bold text-white">099 062 837</p>
          </div>

          {/* Location Card */}
          <div className="bg-white/10 hover:bg-white/15 backdrop-blur-sm rounded-xl p-8 text-center transition-all">
            <MapPin className="w-12 h-12 text-red-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">Zona</h3>
            <p className="text-slate-300">Trabajamos en:</p>
            <p className="text-white font-semibold">Montevideo y alrededores</p>
          </div>
        </div>

        {/* Quick Form */}
        <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 md:p-12 border border-white/10">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">
            O cuéntanos tu proyecto aquí
          </h3>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="nombre" className="block text-white font-medium mb-2">
                Tu nombre
              </label>
              <input
                type="text"
                id="nombre"
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
                required
                placeholder="Ej: Juan García"
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-slate-400 focus:outline-none focus:border-white/50 focus:bg-white/15 transition-all"
              />
            </div>

            <div>
              <label htmlFor="whatsapp" className="block text-white font-medium mb-2">
                Tu WhatsApp
              </label>
              <input
                type="tel"
                id="whatsapp"
                name="whatsapp"
                value={formData.whatsapp}
                onChange={handleChange}
                placeholder="Ej: 094 123 456"
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-slate-400 focus:outline-none focus:border-white/50 focus:bg-white/15 transition-all"
              />
            </div>

            <div>
              <label htmlFor="mensaje" className="block text-white font-medium mb-2">
                Cuéntanos qué necesitás
              </label>
              <textarea
                id="mensaje"
                name="mensaje"
                value={formData.mensaje}
                onChange={handleChange}
                required
                placeholder="Ej: Necesito reformar un baño..."
                rows={4}
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-slate-400 focus:outline-none focus:border-white/50 focus:bg-white/15 transition-all resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg transition-colors flex items-center justify-center gap-2 focus:outline-none focus:ring-4 focus:ring-green-300"
            >
              <SiWhatsapp className="w-5 h-5" />
              Enviar por WhatsApp
            </button>
          </form>

          {submitted && (
            <div className="mt-4 p-4 bg-green-500/20 border border-green-500/50 rounded-lg text-green-200 text-center">
              ✓ ¡Listo! Se abrió WhatsApp con tu mensaje
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
