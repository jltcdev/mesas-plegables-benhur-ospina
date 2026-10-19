import { Mail, Phone, MapPin } from 'lucide-react'
import { SITE_CONFIG } from '@/lib/site'

export function TopBar() {
  return (
    <div className="hidden bg-slate-950 text-xs sm:text-sm text-slate-200 md:block border-b border-slate-800/80">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-2.5">
        {/* Contacto directo */}
        <div className="flex items-center gap-6">
          <span className="flex items-center gap-2 text-slate-300 font-medium">
            <MapPin className="size-4 text-emerald-400 shrink-0" />
            {SITE_CONFIG.contact.location}
          </span>
          <a
            href={`mailto:${SITE_CONFIG.contact.email}`}
            className="flex items-center gap-2 font-medium transition-colors hover:text-white"
          >
            <Mail className="size-4 text-emerald-400 shrink-0" />
            {SITE_CONFIG.contact.email}
          </a>
          <a
            href={`tel:${SITE_CONFIG.contact.phoneRaw}`}
            className="flex items-center gap-2 font-medium transition-colors hover:text-white"
          >
            <Phone className="size-4 text-emerald-400 shrink-0" />
            {SITE_CONFIG.contact.phone}
          </a>
        </div>

        {/* Redes Sociales */}
        <div className="flex items-center gap-3.5">
          <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">Síguenos:</span>

          {/* Gmail */}
          <a
            href={`mailto:${SITE_CONFIG.contact.email}`}
            aria-label="Correo electrónico"
            title={SITE_CONFIG.contact.email}
            className="text-slate-300 transition-colors hover:text-red-500 p-1"
          >
            <svg className="size-4 fill-current" viewBox="0 0 24 24">
              <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L12 9.455l8.073-5.962c1.618-1.214 3.927-.059 3.927 1.964z" />
            </svg>
          </a>

          {/* Facebook */}
          <a
            href={SITE_CONFIG.social.facebook}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="text-slate-300 transition-colors hover:text-blue-500 p-1"
          >
            <svg className="size-4 fill-current" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
          </a>

          {/* Instagram */}
          <a
            href={SITE_CONFIG.social.instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="text-slate-300 transition-colors hover:text-pink-500 p-1"
          >
            <svg className="size-4 fill-current" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
          </a>

          {/* TikTok */}
          <a
            href={SITE_CONFIG.social.tiktok}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="TikTok"
            className="text-slate-300 transition-colors hover:text-white p-1"
          >
            <svg className="size-4 fill-current" viewBox="0 0 24 24">
              <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.82.57-1.31 1.56-1.29 2.57.01 1.17.65 2.27 1.66 2.87 1.02.6 2.33.62 3.37.06 1.06-.57 1.72-1.71 1.73-2.91.01-4.67.01-9.33.01-13.99z" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  )
}