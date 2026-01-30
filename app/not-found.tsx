import Link from "next/link"
import Image from "next/image"
import { Home, ArrowRight } from "lucide-react"

// Static generation configuration
export const revalidate = false; // Completamente estático
export const dynamic = "force-static";
export const fetchCache = "only-cache";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-linear-to-b from-white via-[#f5f7fb] to-[#eef2f9] flex items-center justify-center px-4 py-20">
      <div className="max-w-2xl w-full text-center space-y-8">
        {/* Logo */}
        <Link href="/" className="inline-block group">
          <Image
            src="/orcam_logo.png"
            alt="Orcam Construcciones Logo"
            className="h-20 w-auto transition-all duration-300 group-hover:scale-105"
            width={150}
            height={100}
          />
        </Link>

        {/* 404 Large Text */}
        <div className="space-y-4">
          <h1 className="text-9xl md:text-[120px] font-black text-transparent bg-clip-text bg-gradient-to-r from-[#102348] via-[#1a3f6e] to-[#102348] leading-none">
            404
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-[#102348] to-green-500 mx-auto rounded-full" />
        </div>

        {/* Description */}
        <div className="space-y-3">
          <h2 className="text-3xl md:text-4xl font-bold text-[#102348]">
            Página no encontrada
          </h2>
          <p className="text-lg text-gray-600 font-medium">
            Lo sentimos, la página que buscas no existe o ha sido movida.
          </p>
        </div>

        {/* Illustration / Icon */}
        <div className="py-8">
          <div className="inline-flex items-center justify-center w-32 h-32 bg-gradient-to-br from-[#102348]/10 to-green-500/10 rounded-3xl border-2 border-[#102348]/20">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[#102348] to-green-500 opacity-10 blur-3xl rounded-full" />
              <svg
                className="w-16 h-16 text-[#102348]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
          {/* Home Button */}
          <Link
            href="/"
            className="group relative px-8 py-4 rounded-xl bg-gradient-to-r from-[#102348] to-[#1a3f6e] text-white font-bold transition-all duration-300 hover:shadow-lg hover:shadow-[#102348]/40 hover:-translate-y-1 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#1a3f6e] to-[#102348] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
            <span className="relative flex items-center gap-2 justify-center">
              <Home size={20} strokeWidth={2.5} />
              Volver al Inicio
            </span>
          </Link>

          {/* WhatsApp CTA */}
          <a
            href="https://wa.me/59899062837"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative px-8 py-4 rounded-xl bg-gradient-to-r from-green-500 to-green-600 text-white font-bold transition-all duration-300 hover:shadow-lg hover:shadow-green-500/40 hover:-translate-y-1 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-green-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
            <span className="relative flex items-center gap-2 justify-center">
              <ArrowRight size={20} strokeWidth={2.5} />
              Contactar por WhatsApp
            </span>
          </a>
        </div>

        {/* Quick Links */}
        <div className="pt-12 border-t border-[#102348]/10">
          <p className="text-sm text-gray-600 font-medium mb-6">
            Explora estas secciones:
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { label: "Beneficios", href: "#beneficios" },
              { label: "Servicios", href: "#servicios" },
              { label: "Proyectos", href: "#proyectos" },
              { label: "Nosotros", href: "#nosotros" },
              { label: "FAQ", href: "#faq" },
            ].map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="px-4 py-2 rounded-lg bg-[#102348]/8 hover:bg-[#102348]/15 text-[#102348] font-semibold text-sm transition-all duration-300 hover:scale-105 border border-[#102348]/20 hover:border-[#102348]/40"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Footer Note */}
        <div className="pt-8 border-t border-[#102348]/10">
          <p className="text-xs text-gray-500">
            Error 404 • Página no encontrada
          </p>
        </div>
      </div>
    </div>
  )
}
