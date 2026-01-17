"use client"

import { CheckCircle, Award, Users, Zap } from "lucide-react"

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
              href="https://wa.me/59895732108"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg transition-colors mb-4"
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-5.031 1.378c-3.055 2.309-3.955 6.7-2.01 10.369 1.919 3.595 5.825 5.194 9.604 3.985.735-.201 1.452-.547 2.089-.986l.064-.041 4.118.308 1.281-3.823-.041-.064c.537-1.004.997-2.314.997-3.468C19.884 9.572 17.313 6.979 14.051 6.979Z" />
              </svg>
              Escribinos por WhatsApp
            </a>
            <p className="text-slate-400 text-sm">
              <strong>094 681 285</strong>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
