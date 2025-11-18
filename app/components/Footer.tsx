import { Phone, Mail, MapPin, Facebook, Linkedin, Instagram, ExternalLink, Heart, MessageCircle } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const footerSections = [
    {
      title: "Navegación",
      links: [
        { label: "Inicio", href: "#" },
        { label: "Servicios", href: "#" },
        { label: "Proyectos", href: "#" },
        { label: "Nosotros", href: "#" },
        { label: "Contacto", href: "#" },
      ],
    },
    {
      title: "Servicios",
      links: [
        { label: "Obras Nuevas", href: "#" },
        { label: "Reformas en General", href: "#" },
        { label: "Llave en Mano", href: "#" },
        { label: "Reciclajes", href: "#" },
      ],
    },
    {
      title: "Legal",
      links: [
        { label: "Términos y Condiciones", href: "#" },
        { label: "Política de Privacidad", href: "#" },
        { label: "Política de Cookies", href: "#" },
      ],
    },
  ]

  const socialLinks = [
    { icon: Facebook, href: "https://www.facebook.com/orcamconstrucciones", label: "Facebook" },
    { icon: MessageCircle, href: "https://wa.me/59895732108", label: "WhatsApp" },
  ]

  return (
    <footer className="bg-linear-to-b from-[#f5f7fb] via-white to-[#eef2f9]">
      {/* Main Footer Content */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 mb-16">
          {/* Brand Section */}
          <div className="md:col-span-2 space-y-6">
            <Link href="/" className="inline-block group">
              <Image 
                src="/orcam_logo.png" 
                alt="Orcam Construcciones Logo" 
                className="h-16 w-auto transition-all duration-300 group-hover:scale-105" 
                width={120} 
                height={80}
              />
            </Link>
            <div className="space-y-3">
              <h3 className="text-lg font-bold text-[#102348]">Orcam Construcciones</h3>
              <p className="text-gray-600 text-sm leading-relaxed max-w-sm font-medium">
                Somos una empresa con más de 20 años de trayectoria. Nos caracteriza la responsabilidad y seriedad al encarar cada proyecto con profesionalismo integral.
              </p>
            </div>

            {/* Social Links */}
            <div className="flex gap-3 pt-2">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="group w-11 h-11 rounded-lg bg-[#102348]/8 hover:bg-[#102348]/15 flex items-center justify-center transition-all duration-300 border-2 border-[#102348]/10 hover:border-[#102348]/30 hover:scale-110 hover:-translate-y-1"
                >
                  <Icon className="w-5 h-5 text-[#102348] transition-transform duration-300 group-hover:rotate-12" />
                </a>
              ))}
            </div>
          </div>

          {/* Footer Links Sections */}
          {footerSections.map((section) => (
            <div key={section.title} className="space-y-5">
              <h4 className="font-bold text-[#102348] text-sm uppercase tracking-wide">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-gray-600 hover:text-[#102348] text-sm transition-all duration-300 inline-flex items-center gap-2 group font-medium"
                    >
                      <span className="w-0 h-0.5 bg-[#102348] transition-all duration-300 group-hover:w-5" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact Info Bar */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 py-10 border-t border-b border-[#102348]/10">
          {/* Phone */}
          <a
            href="tel:+59823558304"
            className="group flex items-center gap-4 p-5 rounded-xl bg-[#102348]/5 hover:bg-[#102348]/8 transition-all duration-300 border border-[#102348]/10 hover:border-[#102348]/20 hover:-translate-y-1"
          >
            <div className="w-12 h-12 rounded-lg bg-[#102348]/10 group-hover:bg-[#102348]/15 flex items-center justify-center transition-all duration-300 group-hover:scale-110">
              <Phone className="w-6 h-6 text-[#102348]" strokeWidth={2} />
            </div>
            <div className="flex-1">
              <p className="text-xs text-gray-500 font-semibold uppercase tracking-wide">Teléfono Línea</p>
              <p className="font-bold text-gray-900 text-sm">23558304</p>
            </div>
          </a>

          {/* WhatsApp */}
          <a
            href="https://wa.me/59895732108"
            className="group flex items-center gap-4 p-5 rounded-xl bg-green-50 hover:bg-green-100 transition-all duration-300 border border-green-200 hover:border-green-400 hover:-translate-y-1"
          >
            <div className="w-12 h-12 rounded-lg bg-green-200 group-hover:bg-green-300 flex items-center justify-center transition-all duration-300 group-hover:scale-110">
              <MessageCircle className="w-6 h-6 text-green-700" strokeWidth={2} />
            </div>
            <div className="flex-1">
              <p className="text-xs text-green-700 font-semibold uppercase tracking-wide">WhatsApp</p>
              <p className="font-bold text-gray-900 text-sm">095732108</p>
            </div>
          </a>

          {/* Email */}
          <a
            href="mailto:serviorcam@gmail.com"
            className="group flex items-center gap-4 p-5 rounded-xl bg-[#102348]/5 hover:bg-[#102348]/8 transition-all duration-300 border border-[#102348]/10 hover:border-[#102348]/20 hover:-translate-y-1"
          >
            <div className="w-12 h-12 rounded-lg bg-[#102348]/10 group-hover:bg-[#102348]/15 flex items-center justify-center transition-all duration-300 group-hover:scale-110">
              <Mail className="w-6 h-6 text-[#102348]" strokeWidth={2} />
            </div>
            <div className="flex-1">
              <p className="text-xs text-gray-500 font-semibold uppercase tracking-wide">Email</p>
              <p className="font-bold text-gray-900 text-sm text-ellipsis overflow-hidden">serviorcam@gmail.com</p>
            </div>
          </a>
        </div>

        {/* Bottom Section */}
        <div className="mt-10 pt-10 border-t border-[#102348]/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Copyright */}
            <div className="text-center md:text-left">
              <p className="text-gray-600 text-sm font-medium">
                © {currentYear} <span className="font-bold text-[#102348]">Orcam Construcciones</span>. Todos los derechos reservados.
              </p>
              <p className="text-gray-500 text-xs mt-2">
                Contacto: <span className="font-bold text-[#102348]">Horacio Camejo</span>
              </p>
            </div>

            {/* Credit */}
            <div className="flex items-center gap-2 text-gray-600 text-sm">
              <span>Desarrollado por</span>
              <a 
                href="https://kuberalabs.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="font-bold text-[#102348] hover:underline transition-all duration-300"
              >
                KuberaLabs
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Banner */}
      <div className="border-t border-[#102348]/10 bg-linear-to-r from-[#102348]/8 via-[#102348]/5 to-[#102348]/8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 md:py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-center md:text-left">
              <h3 className="font-extrabold text-[#102348] text-xl md:text-2xl mb-2">¿Listo para empezar tu proyecto?</h3>
              <p className="text-gray-600 text-sm font-medium">Solicita tu presupuesto gratuito sin compromiso</p>
            </div>
            <a target="_blank"
                rel="noopener noreferrer"
              href="https://wa.me/59895732108"
              className="group relative px-8 py-4 rounded-xl bg-linear-to-r from-green-500 to-green-600 text-white font-bold transition-all duration-300 hover:shadow-lg hover:shadow-green-500/40 hover:-translate-y-1 hover:scale-105 whitespace-nowrap overflow-hidden"
            >
              <div className="absolute inset-0 bg-linear-to-r from-green-600 to-green-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
              <span className="relative flex items-center gap-2">
                <MessageCircle size={20} strokeWidth={2.5} />
                Contactar por WhatsApp
              </span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
