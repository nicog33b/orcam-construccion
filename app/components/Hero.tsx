"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

interface BannerSlide {
  id: string
  title: string
  subtitle: string
  image: string
  buttonText: string
  buttonLink: string
}

interface HeroBannerProps {
  slides: BannerSlide[]
  autoPlayInterval?: number
}

export default function HeroBanner({ slides, autoPlayInterval = 5000 }: HeroBannerProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true)
      setCurrentIndex((prev) => (prev + 1) % slides.length)
      setTimeout(() => setIsTransitioning(false), 50)
    }, autoPlayInterval)

    return () => clearInterval(interval)
  }, [slides.length, autoPlayInterval])

  const currentSlide = slides[currentIndex]

  const goToSlide = (index: number) => {
    setIsTransitioning(true)
    setCurrentIndex(index)
    setTimeout(() => setIsTransitioning(false), 50)
  }

  return (
    <div className="relative w-full h-screen overflow-hidden bg-slate-900">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <Image
          src={currentSlide.image || "/placeholder.svg"}
          alt={currentSlide.title}
          fill
          className="object-cover transition-all duration-1000 ease-out"
          style={{
            opacity: isTransitioning ? 0.85 : 1,
            filter: `brightness(${isTransitioning ? 0.5 : 0.6})`,
          }}
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/60 via-slate-900/40 to-transparent" />
      </div>

      {/* Content Container */}
      <div className="relative h-full flex items-center">
        <div className="w-full px-6 md:px-12 lg:px-20">
          <div className="max-w-3xl">
            {/* Main Title with Stagger Effect */}
            <div className="mb-4 overflow-hidden">
              <h1
                className={`text-5xl md:text-6xl lg:text-7xl font-light tracking-tight text-white transition-all duration-700 ${
                  isTransitioning ? "translate-y-12 opacity-0" : "translate-y-0 opacity-100"
                }`}
                style={{
                  transitionTimingFunction: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                }}
              >
                {currentSlide.title}
              </h1>
            </div>

            {/* Subtitle with Delayed Animation */}
            <div className="mb-8 overflow-hidden">
              <p
                className={`text-lg md:text-xl text-slate-200 font-light transition-all duration-700 delay-100 ${
                  isTransitioning ? "translate-y-12 opacity-0" : "translate-y-0 opacity-100"
                }`}
                style={{
                  transitionTimingFunction: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                }}
              >
                {currentSlide.subtitle}
              </p>
            </div>

            {/* CTA Button with Stagger */}
            <div className="overflow-hidden w-fit">
              <button
                onClick={() => (window.location.href = currentSlide.buttonLink)}
                className={`px-8 py-3 md:px-10 md:py-4 bg-white text-slate-900 font-medium rounded-lg hover:bg-slate-100 transition-all duration-300 ease-out transform hover:scale-105 ${
                  isTransitioning ? "translate-y-12 opacity-0" : "translate-y-0 opacity-100"
                }`}
                style={{
                  transitionTimingFunction: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                  transitionDelay: isTransitioning ? "0ms" : "200ms",
                }}
              >
                {currentSlide.buttonText}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-2 rounded-full transition-all duration-500 ${
              index === currentIndex ? "w-8 bg-white" : "w-2 bg-white/40 hover:bg-white/60"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Slide Counter */}
      <div className="absolute top-8 right-8 text-white/60 text-sm font-light">
        {String(currentIndex + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
      </div>
    </div>
  )
}
