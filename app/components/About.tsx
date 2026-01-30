"use client"

import { CheckCircle, Award, Users, Zap } from "lucide-react"
import { SiWhatsapp } from "react-icons/si"

export default function AboutSection() {
  return (
    <section id="nosotros" className="w-full py-20 lg:py-28 bg-gradient-to-b from-slate-50 to-white">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Content */}
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900">
              Somos Orcam Construcciones
            </h2>

            <p className="text-lg text-slate-700 leading-relaxed">
              Con más de 10 años en el rubro, sabemos que construir o reformar no es solo ladrillo y cemento.
              Es cumplimiento, transparencia y dejar un trabajo que dure.
            </p>

            <p className="text-lg text-slate-700 leading-relaxed">
              Por eso cada obra que hacemos va con presupuesto cerrado, cronograma firmado y reportes
              diarios. Queremos que confíes en nosotros desde el primer día.
            </p>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4 pt-6">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-slate-900">+200 obras</p>
                  <p className="text-sm text-slate-600">completadas</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Award className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-slate-900">10+ años</p>
                  <p className="text-sm text-slate-600">en el rubro</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Users className="w-6 h-6 text-purple-600 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-slate-900">Equipo propio</p>
                  <p className="text-sm text-slate-600">de profesionales</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Zap className="w-6 h-6 text-orange-600 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-slate-900">Rápido</p>
                  <p className="text-sm text-slate-600">y confiable</p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Card */}
          <div className="bg-linear-to-br from-slate-900 to-slate-800 rounded-2xl p-8 text-white text-center md:col-span-1 md:row-span-2 flex flex-col justify-center h-fit">
            <h3 className="text-2xl font-bold mb-4">¿Necesitás una reforma?</h3>
            <p className="text-slate-300 mb-8">
              Presupuesto sin cargo. Respuesta en máximo 24 horas. Sin compromiso.
            </p>
            <a
              href="https://wa.me/59899062837"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg transition-colors mb-4"
            >
              <SiWhatsapp className="w-5 h-5 mr-2" />
              Escribinos por WhatsApp
            </a>
            <p className="text-slate-400 text-sm">
              <strong>099 062 837</strong>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
