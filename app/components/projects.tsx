"use client"

import { useState, useRef } from "react"
import { ChevronLeft, ChevronRight, MapPin, Calendar } from "lucide-react"
import Image from "next/image"
import { projectsData } from "../json/projectData"

export default function ProjectsSection() {
  const [activeProject, setActiveProject] = useState(0)
  const [activeImageIndex, setActiveImageIndex] = useState(0)
  const galleryRef = useRef<HTMLDivElement>(null)

  const currentProject = projectsData[activeProject]

  const nextProject = () => {
    setActiveProject((prev) => (prev + 1) % projectsData.length)
    setActiveImageIndex(0)
    scrollToGallery()
  }

  const prevProject = () => {
    setActiveProject((prev) => (prev - 1 + projectsData.length) % projectsData.length)
    setActiveImageIndex(0)
    scrollToGallery()
  }

  const scrollToGallery = () => {
    if (galleryRef.current) {
      const y = galleryRef.current.getBoundingClientRect().top + window.scrollY - 80
      window.scrollTo({ top: y, behavior: 'smooth' })
    }
  }

  return (
    <section id="proyectos" className="w-full py-24 bg-linear-to-br from-slate-50 to-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Nuestros Proyectos</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Obras que reflejan calidad y excelencia
          </p>
        </div>

        {/* Main Gallery Section */}
        <div className="w-full mx-auto">
          <div className="relative group" ref={galleryRef}>
            {/* Main Image */}
            <div className="relative bg-slate-200 rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl aspect-4/3 md:aspect-video">
              <Image
                src={currentProject.images[activeImageIndex] || "/placeholder.svg"}
                alt={`${currentProject.title} - Imagen ${activeImageIndex + 1}`}
                fill
                className="w-full h-full object-contain transition-transform duration-500 bg-black"
              />
              {/* Project Info Overlay */}
              <div className="absolute inset-0 bg-linear-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-white text-sm font-semibold">
                        {currentProject.type}
                      </span>
                    </div>
                    <h3 className="text-3xl font-bold text-white mb-2">{currentProject.title}</h3>
                    <div className="flex items-center gap-4 text-white/90 text-sm">
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        <span>{currentProject.location}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{currentProject.year}</span>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Image Counter */}
                <div className="absolute top-4 right-4 bg-black/60 backdrop-blur px-3 py-1.5 rounded-full text-white text-sm font-medium">
                  {activeImageIndex + 1} / {currentProject.images.length}
                </div>
              </div>
              {/* Thumbnail Strip */}
              <div className="mt-4 md:mt-6 flex gap-2 md:gap-3 overflow-x-auto pb-3 scrollbar-hide snap-x snap-mandatory">
                {currentProject.images.map((image, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImageIndex(idx)}
                    className={`shrink-0 w-20 h-20 md:w-24 md:h-24 rounded-lg md:rounded-xl overflow-hidden transition-all duration-300 border-2 snap-start ${
                      idx === activeImageIndex
                        ? "border-[#102348] shadow-lg scale-105 md:scale-105"
                        : "border-slate-200 hover:border-[#102348]/50 active:scale-95"
                    }`}
                  >
                    <Image
                      src={image || "/placeholder.svg"}
                      alt={`Thumbnail ${idx + 1}`}
                      fill
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>

        {/* Projects Carousel */}
        <div className="mt-12 md:mt-16 space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-lg md:text-xl font-bold text-slate-900">Otros Proyectos</h3>
            <div className="flex gap-2">
              <button
                onClick={prevProject}
                className="bg-white border-2 border-slate-200 hover:border-[#102348] text-slate-900 hover:text-[#102348] rounded-full p-2 md:p-2 transition-all duration-200 active:scale-95 shadow-md"
                aria-label="Proyecto anterior"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextProject}
                className="bg-white border-2 border-slate-200 hover:border-[#102348] text-slate-900 hover:text-[#102348] rounded-full p-2 md:p-2 transition-all duration-200 active:scale-95 shadow-md"
                aria-label="Siguiente proyecto"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Project Cards Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
            {projectsData.map((project, idx) => (
              <button
                key={project.id}
                onClick={() => {
                  setActiveProject(idx)
                  setActiveImageIndex(0)
                  scrollToGallery()
                }}
                className={`group relative overflow-hidden rounded-xl md:rounded-2xl transition-all duration-300 active:scale-95 ${
                  idx === activeProject 
                    ? "ring-3 md:ring-4 ring-[#102348] shadow-xl scale-105" 
                    : "shadow-lg hover:shadow-xl md:hover:scale-105"
                }`}
              >
                {/* Card Image */}
                <div className="relative h-44 md:h-56 bg-slate-300">
                  <Image
                    src={project.images[0] || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500 bg-black"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/30 to-transparent" />
                </div>

                {/* Card Info */}
                <div className="absolute bottom-0 left-0 right-0 p-3 md:p-4 text-white">
                  <h4 className="font-bold text-sm md:text-base mb-1 drop-shadow-lg">{project.title}</h4>
                  <p className="text-xs opacity-90 flex items-center gap-1">
                    <MapPin className="w-3 h-3" />
                    {project.location}
                  </p>
                </div>

                {/* Active Indicator */}
                {idx === activeProject && (
                  <div className="absolute top-2 md:top-3 right-2 md:right-3 w-2.5 md:w-3 h-2.5 md:h-3 bg-white rounded-full shadow-lg" />
                )}
              </button>
            ))}
          </div>

          {/* Project Counter */}
          <div className="text-center">
            <p className="text-sm text-slate-600">
              Proyecto {activeProject + 1} de {projectsData.length}
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-12 md:mt-20 bg-linear-to-r from-[#102348] to-[#1a3a6b] rounded-2xl md:rounded-3xl p-8 md:p-14 text-center text-white shadow-2xl">
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4">¿Tienes un proyecto en mente?</h3>
          <p className="text-base md:text-lg opacity-90 mb-6 md:mb-8 max-w-2xl mx-auto">
            Solicita un presupuesto gratuito y sin compromiso
          </p>
          <a
            href="https://wa.me/59899062837"
            className="inline-flex items-center gap-2 bg-white hover:bg-slate-100 text-[#102348] font-bold py-3 md:py-4 px-8 md:px-10 rounded-xl transition-all duration-300 hover:scale-105 active:scale-95 hover:shadow-xl text-sm md:text-base"
          >
            Contactar Ahora
          </a>
        </div>
      </div>
    </section>
  )
}
