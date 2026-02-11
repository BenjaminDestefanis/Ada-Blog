'use client'

import React from 'react'
// Usaremos FontAwesome para mantener la fidelidad al diseño original, 
// asegúrate de tener la librería instalada o usar los SVGs directamente.
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  faXTwitter, 
  faYoutube, 
  faInstagram, 
  faTiktok, 
  faWhatsapp
} from '@fortawesome/free-brands-svg-icons'

interface SocialItem {
  name: string
  href: string
  icon: any
  color: string
}

const socialMedia: SocialItem[] = [
  { name: 'Twitter', href: '#', icon: faXTwitter, color: '#101419' },
  { name: 'YouTube', href: '#', icon: faYoutube, color: '#ff0000' },
  { name: 'Instagram', href: '#', icon: faInstagram, color: '#E1306C' },
  { name: 'Tiktok', href: '#', icon: faTiktok, color: '#000000' },
  { name: 'Whatsapp', href: '#', icon: faWhatsapp, color: '#25D366' },
]

export default function SocialLinks() {
  return (
    <section className="py-12 px-6 text-center font-sans">
      {/* <h1 className="text-3xl font-bold text-gray-900 mb-2">Social Icons Hover Effect</h1> */}
      {/* <h2 className="text-lg font-semibold text-gray-700 mb-16">Sigenos en nuestras redes</h2> */}

      <ul className="flex flex-wrap justify-center gap-4 list-none">
        {socialMedia.map((social) => (
          <li 
            key={social.name}
            className="relative flex-none w-[4.5rem] group"
            style={{ '--bg': social.color } as React.CSSProperties}
          >
            {/* Tooltip */}
            <span className="absolute left-1/2 -translate-x-1/2 z-[20] px-3 py-1 text-sm text-white rounded 
              bg-[var(--bg)] opacity-0 invisible pointer-events-none
              transition-all duration-400 cubic-bezier(0.47, 2, 0.41, 1.5)
              top-[-45%] group-hover:top-[-60%] group-hover:opacity-100 group-hover:visible font-mono">
              {social.name}
            </span>

            {/* Enlace / Icono */}
            <a
              href={social.href}
              aria-label={social.name}
              className="relative flex items-center justify-center aspect-square text-3xl text-gray-900 
                border border-current rounded-full overflow-hidden transition-colors duration-300
                hover:text-white focus-visible:text-white outline-none"
            >
              <span className="relative z-10">
                <FontAwesomeIcon icon={social.icon} className="w-7 h-7" />
              </span>
              {/*  */}
              {/* Efecto de llenado de fondo */}
              <div className="absolute inset-x-0 top-full bottom-0 bg-[var(--bg)] transition-all duration-300 
                group-hover:top-0 group-focus-visible:top-0" />
            </a>
          </li>
        ))}
      </ul>
    </section>
  )
}