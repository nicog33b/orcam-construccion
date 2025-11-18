"use client"

import { useEffect, useState } from "react"
import { Menu, X, Phone, MessageSquare } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [active, setActive] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  // Public images to rotate in the hero background
  const heroImages = [
    "/banner-1.jpg",
    "/banner-2.jpg",
    "/banner-3.jpg",
    "/banner-4.jpg",
  ]

  // Enhanced auto-rotate with pause on hover
  useEffect(() => {
    if (!isAutoPlaying) return
    
    const id = setInterval(() => {
      setActive((i) => (i + 1) % heroImages.length)
    }, 5000)
    
    return () => clearInterval(id)
  }, [isAutoPlaying, heroImages.length])

  // Manual slide navigation
  const goToSlide = (index: number) => {
    setActive(index)
    setIsAutoPlaying(false)
    // Resume autoplay after 10s
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }

  const navItems = [
    { label: "Beneficios", href: "#beneficios" },
    { label: "Servicios", href: "#servicios" },
    { label: "Proyectos", href: "#proyectos" },
  ]

  return (
    <header className="relative w-full">
      {/* Navigation Bar */}
      <nav className="relative z-50 bg-white shadow-md backdrop-blur-sm">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            {/* Logo */}
            <Link href="/" className="group">
              <div className="flex items-center gap-2 cursor-pointer transition-transform duration-300 group-hover:scale-105">
                <Image 
                  src="/orcam_logo.png" 
                  className="w-18 h-20 p-1 transition-all duration-300 group-hover:brightness-110" 
                  alt="Constructora Logo" 
                  width={500} 
                  height={500}
                />
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="relative text-sm font-semibold text-gray-700 hover:text-[#102348] transition-all duration-300 group"
                >
                  <span className="relative z-10">{item.label}</span>
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#102348] transition-all duration-300 group-hover:w-full" />
                </Link>
              ))}
            </div>

            {/* CTA and Phone */}
            <div className="flex items-center gap-4">
              <a
                href="tel:+59898041654"
                className="hidden sm:flex items-center gap-2 px-5 py-2.5 rounded-lg border-2 border-[#102348] text-[#102348] hover:bg-[#102348] hover:text-white hover:shadow-lg hover:shadow-[#102348]/20 transition-all duration-300 font-semibold text-sm group"
              >
                <Phone size={16} className="transition-transform duration-300 group-hover:rotate-12" />
                <span>098041654</span>
              </a>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden p-2.5 hover:bg-[#102348]/10 rounded-lg transition-all duration-300 hover:scale-105"
                aria-label="Toggle menu"
              >
                {isMenuOpen ? (
                  <X size={24} className="text-[#102348] transition-transform duration-300 rotate-90" />
                ) : (
                  <Menu size={24} className="text-[#102348]" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden border-t border-gray-100 py-4 space-y-2 animate-in slide-in-from-top-5 duration-300">
              {navItems.map((item, idx) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="block px-4 py-3 text-sm font-medium text-gray-700 hover:bg-[#102348]/8 hover:text-[#102348] rounded-lg transition-all duration-200 hover:translate-x-1"
                  onClick={() => setIsMenuOpen(false)}
                  style={{ animationDelay: `${idx * 50}ms` }}
                >
                  {item.label}
                </Link>
              ))}
              <a
                href="tel:+59898041654"
                className="flex items-center gap-2 mx-4 px-4 py-3 bg-[#102348] text-white rounded-lg font-semibold hover:bg-[#0d1a38] hover:shadow-lg transition-all duration-300 group"
              >
                <Phone size={18} className="transition-transform duration-300 group-hover:rotate-12" />
                Llamar ahora
              </a>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section 
        className="relative h-[600px] w-full overflow-hidden md:h-[750px] lg:h-screen"
        onMouseEnter={() => setIsAutoPlaying(false)}
        onMouseLeave={() => setIsAutoPlaying(true)}
      >
        {/* Background Slideshow */}
        <div className="absolute inset-0">
          {heroImages.map((src, idx) => (
            <div key={src} className="absolute inset-0">
              <Image
                src={src}
                alt={`Banner ${idx + 1}`}
                fill
                priority={idx === 0}
                sizes="100vw"
                quality={90}
                className={`object-cover transition-all duration-1000 ease-in-out ${
                  active === idx ? "opacity-100 scale-100" : "opacity-0 scale-105"
                }`}
              />
            </div>
          ))}
          <div className="header-overlay" />
        </div>

        {/* Content */}
        <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center">
      
          {/* Main Title */}
          <h1 className="mb-6 max-w-4xl text-4xl font-extrabold text-white md:text-5xl lg:text-7xl text-balance hero-text leading-tight animate-in fade-in-0 slide-in-from-bottom-4 duration-700">
            Construimos tu proyecto con calidad, compromiso y eficiencia
          </h1>


          {/* Main CTA */}
          <button className="group relative px-10 py-4 mt-6 rounded-xl bg-linear-to-r from-[#102348] via-[#31558b] to-[#5b72a1] text-white font-bold text-lg shadow-2xl shadow-[#102348]/40 overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[#102348]/60 hover:scale-105 animate-in fade-in-0 slide-in-from-bottom-4 delay-500">
            <div className="absolute inset-0 bg-linear-to-r from-[#0d1a38] via-[#102348] to-[#0d1a38] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500">
              <div className="absolute inset-0 bg-linear-to-r from-transparent via-white to-transparent animate-shimmer" />
            </div>
            <span className="relative flex items-center gap-3">
              <span>Solicitar presupuesto gratuito</span>
              <span className="transition-transform duration-300 group-hover:translate-x-2 text-xl">→</span>
            </span>
          </button>

          {/* Slide Indicators */}
          <div className="absolute bottom-24 left-1/2 -translate-x-1/2 flex gap-2.5 z-20">
            {heroImages.map((_, idx) => (
              <button
                key={idx}
                onClick={() => goToSlide(idx)}
                className={`transition-all duration-300 rounded-full ${
                  active === idx
                    ? "w-10 h-2.5 bg-white shadow-lg"
                    : "w-2.5 h-2.5 bg-white/40 hover:bg-white/70 hover:scale-125"
                }`}
                aria-label={`Ir a imagen ${idx + 1}`}
              />
            ))}
          </div>

        </div>
      </section>
    </header>
  )
}
