"use client"

import { CheckCircle, Clock, DollarSign, Camera, Award } from "lucide-react"

export default function BenefitsSection() {


    const benefits = [
        {
            icon: Clock,
            title: "Cumplimiento de plazos",
            description: "Cronograma firmado y comprometido",
            color: "from-blue-500 to-cyan-500",
        },
        {
            icon: DollarSign,
            title: "Presupuesto cerrado",
            description: "Sin costos ocultos sorpresas",
            color: "from-emerald-500 to-teal-500",
        },
        {
            icon: Camera,
            title: "Supervisión diaria",
            description: "Reportes con fotos del progreso",
            color: "from-orange-500 to-red-500",
        },
        {
            icon: Award,
            title: "Garantía completa",
            description: "Contrato y seguro de obra",
            color: "from-purple-500 to-pink-500",
        },
    ]

    return (
        <section className="w-full bg-gradient-to-b from-background via-muted/30 to-background py-20 lg:py-28">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="mb-16 space-y-4 text-center">
                    <h2 className="text-4xl font-bold text-foreground md:text-5xl text-balance">El problema que otros ignoran</h2>
                    <p className="mx-auto max-w-2xl text-lg text-muted-foreground text-balance mt-12">
                        Sabemos exactamente qué te preocupa. Por eso cada decisión que tomamos está diseñada para tu tranquilidad.
                    </p>
                </div>



                {/* Benefits Grid */}
                <div>
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                        {benefits.map((benefit, index) => {
                            const IconComponent = benefit.icon
                            return (
                                <div
                                    key={index}
                                    className="group relative rounded-xl border border-border bg-card overflow-hidden transition-all hover:shadow-xl hover:border-primary/30"
                                >
                                    {/* Background gradient accent on hover */}
                                    <div
                                        className={`absolute inset-0 bg-gradient-to-br ${benefit.color} opacity-0 group-hover:opacity-5 transition-opacity`}
                                    />

                                    {/* Content */}
                                    <div className="relative z-10 flex flex-col gap-4 p-6">
                                        {/* Icon */}
                                        <div className="flex items-center gap-3">
                                            <div
                                                className={`flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br ${benefit.color}`}
                                            >
                                                <IconComponent size={24} className="text-white" />
                                            </div>
                                            <CheckCircle
                                                size={20}
                                                className="text-primary opacity-0 group-hover:opacity-100 transition-opacity"
                                            />
                                        </div>

                                        {/* Text */}
                                        <div>
                                            <h4 className="mb-1 text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                                                {benefit.title}
                                            </h4>
                                            <p className="text-sm text-muted-foreground">{benefit.description}</p>
                                        </div>

                                        {/* Bottom accent line */}
                                        <div
                                            className={`mt-auto h-1 w-0 bg-gradient-to-r ${benefit.color} group-hover:w-8 transition-all`}
                                        />
                                    </div>

                                </div>
                            )
                        })}

                    </div>

                </div>

                {/* 
        <div className="mt-16 rounded-xl border border-primary/20 bg-gradient-to-r from-primary/5 to-primary/10 p-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <h4 className="mb-2 font-bold text-foreground text-lg">Construidas con compromiso real</h4>
              <p className="text-sm text-muted-foreground max-w-md">
                Cada proyecto está respaldado por nuestros 10 años de experiencia y el compromiso legalmente vinculante
                con tus intereses.
              </p>
            </div>
            <div className="flex gap-4">
              <div className="flex flex-col items-center gap-2">
                <Award size={32} className="text-primary" />
                <span className="text-xs font-semibold text-foreground">Garantía Legal</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <CheckCircle size={32} className="text-emerald-500" />
                <span className="text-xs font-semibold text-foreground">Seguro de Obra</span>
              </div>
            </div>
          </div>
        </div> */}

            </div>
            <div className="justify-center flex gap-4 py-12">
                <div className="flex flex-col items-center gap-2">
                    <Award size={32} className="text-primary" />
                    <span className="text-xs font-semibold text-foreground">Garantía Legal</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                    <CheckCircle size={32} className="text-emerald-500" />
                    <span className="text-xs font-semibold text-foreground">Seguro de Obra</span>
                </div>
            </div>
        </section>
    )
}
