"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, MapPin, Calendar, Award } from "lucide-react"
import { projectsData } from "../json/projectData"

export default function ProjectsSection() {
  const [activeProject, setActiveProject] = useState(0)
  const [activeImageIndex, setActiveImageIndex] = useState(0)

  const currentProject = projectsData[activeProject]

  const nextProject = () => {
    setActiveProject((prev) => (prev + 1) % projectsData.length)
    setActiveImageIndex(0)
  }

  const prevProject = () => {
    setActiveProject((prev) => (prev - 1 + projectsData.length) % projectsData.length)
    setActiveImageIndex(0)
  }

  const nextImage = () => {
    setActiveImageIndex((prev) => (prev + 1) % currentProject.images.length)
  }

  const prevImage = () => {
    setActiveImageIndex((prev) => (prev - 1 + currentProject.images.length) % currentProject.images.length)
  }

  return (
    <section className="w-full py-24 bg-linear-to-br from-slate-50 to-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Nuestros Proyectos</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Obras que reflejan calidad y excelencia
          </p>
        </div>

        {/* Main Gallery Section */}
        <div className="max-w-5xl mx-auto">
          <div className="relative group">
            {/* Main Image */}
            <div className="relative bg-slate-200 rounded-3xl overflow-hidden shadow-2xl aspect-video">
              <img
                src={currentProject.images[activeImageIndex] || "/placeholder.svg"}
                alt={`${currentProject.title} - Imagen ${activeImageIndex + 1}`}
                className="w-full h-full object-cover transition-transform duration-500"
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

            {/* Navigation Arrows */}
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white shadow-lg rounded-full p-3 transition-all duration-300 hover:scale-110 z-10"
              aria-label="Imagen anterior"
            >
              <ChevronLeft className="w-6 h-6 text-slate-900" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white shadow-lg rounded-full p-3 transition-all duration-300 hover:scale-110 z-10"
              aria-label="Siguiente imagen"
            >
              <ChevronRight className="w-6 h-6 text-slate-900" />
            </button>

            {/* Thumbnail Strip */}
            <div className="mt-6 flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
              {currentProject.images.map((image, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImageIndex(idx)}
                  className={`shrink-0 w-24 h-24 rounded-xl overflow-hidden transition-all duration-300 border-2 ${
                    idx === activeImageIndex
                      ? "border-[#102348] shadow-lg scale-105"
                      : "border-slate-200 hover:border-[#102348]/50 hover:scale-105"
                  }`}
                >
                  <img
                    src={image || "/placeholder.svg"}
                    alt={`Thumbnail ${idx + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Projects Carousel */}
        <div className="mt-16 space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-bold text-slate-900">Otros Proyectos</h3>
            <div className="flex gap-2">
              <button
                onClick={prevProject}
                className="bg-white border-2 border-slate-200 hover:border-[#102348] text-slate-900 hover:text-[#102348] rounded-full p-2 transition-all duration-200"
                aria-label="Proyecto anterior"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextProject}
                className="bg-white border-2 border-slate-200 hover:border-[#102348] text-slate-900 hover:text-[#102348] rounded-full p-2 transition-all duration-200"
                aria-label="Siguiente proyecto"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Project Cards Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {projectsData.map((project, idx) => (
              <button
                key={project.id}
                onClick={() => {
                  setActiveProject(idx)
                  setActiveImageIndex(0)
                }}
                className={`group relative overflow-hidden rounded-2xl transition-all duration-300 ${
                  idx === activeProject 
                    ? "ring-4 ring-[#102348] shadow-xl scale-105" 
                    : "shadow-lg hover:shadow-xl hover:scale-105"
                }`}
              >
                {/* Card Image */}
                <div className="relative h-56 bg-slate-300">
                  <img
                    src={project.images[0] || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent" />
                </div>

                {/* Card Info */}
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <h4 className="font-bold text-base mb-1 drop-shadow-lg">{project.title}</h4>
                  <p className="text-xs opacity-90 flex items-center gap-1">
                    <MapPin className="w-3 h-3" />
                    {project.location}
                  </p>
                </div>

                {/* Active Indicator */}
                {idx === activeProject && (
                  <div className="absolute top-3 right-3 w-3 h-3 bg-white rounded-full shadow-lg" />
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
        <div className="mt-20 bg-linear-to-r from-[#102348] to-[#1a3a6b] rounded-3xl p-10 md:p-14 text-center text-white shadow-2xl">
          <h3 className="text-3xl md:text-4xl font-bold mb-4">¿Tienes un proyecto en mente?</h3>
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            Solicita un presupuesto gratuito y sin compromiso
          </p>
          <a
            href="https://wa.me/59895732108"
            className="inline-flex items-center gap-2 bg-white hover:bg-slate-100 text-[#102348] font-bold py-4 px-10 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-xl"
          >
            Contactar Ahora
          </a>
        </div>
      </div>
    </section>
  )
}
