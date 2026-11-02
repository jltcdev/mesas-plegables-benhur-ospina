'use client'

import { useState } from 'react'
import { Menu, X, Mail, Phone, MapPin } from 'lucide-react'
import { BrandLogo } from '@/components/brand-logo'
import { BRAND_NAME, DEFAULT_WHATSAPP_URL, NAV_LINKS, SITE_CONFIG } from '@/lib/site'
import { WhatsAppIcon } from '@/components/whatsapp-icon'
import { TopBar } from '@/components/top-bar'

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <div className="sticky top-0 z-40 w-full">
      {/* Barra superior visible en pantallas de escritorio y tablets (md+) */}
      <TopBar />

      {/* Encabezado principal y navegación */}
      <header className="border-b border-border bg-background/90 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4">
          <a href="#inicio" className="shrink-0" aria-label={`${BRAND_NAME} Inicio`}>
            <BrandLogo />
          </a>

          {/* Menú principal de escritorio */}
          <nav aria-label="Principal" className="hidden md:block">
            <ul className="flex items-center gap-6">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Botón de apertura para celulares */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              className="inline-flex size-10 items-center justify-center rounded-md border border-border text-foreground md:hidden"
              aria-expanded={open}
              aria-controls="mobile-nav"
              aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
            >
              {open ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </div>

        {/* Menú desplegable móvil */}
        {open && (
          <nav id="mobile-nav" aria-label="Móvil" className="border-t border-border bg-background md:hidden">
            <ul className="mx-auto flex max-w-6xl flex-col px-4 py-3 divide-y divide-border/60">
              {/* Seccion 1: Enlaces de navegación */}
              <div className="pb-2">
                {NAV_LINKS.map((link) => (
                  <li key={link.href} className="list-none">
                    <a
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="block py-2.5 text-base font-medium text-foreground transition-colors hover:text-primary"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </div>

              {/* Seccion 2: Botón de WhatsApp */}
              <div className="py-3 list-none">
                <a
                  href={DEFAULT_WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 rounded-md bg-whatsapp px-4 py-3 text-sm font-semibold text-whatsapp-foreground shadow-sm"
                >
                  <WhatsAppIcon className="size-4" />
                  Cotizar en WhatsApp
                </a>
              </div>

              {/* Seccion 3: Información de Contacto y Redes (Sustituto de TopBar en móviles) */}
              <div className="pt-3 pb-2 space-y-3 list-none">
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Contacto Directo
                </p>

                {/* Ubicación */}
                <div className="flex items-center gap-2 text-xs font-medium text-muted-foreground">
                  <MapPin className="size-4 text-emerald-500 shrink-0" />
                  <span>{SITE_CONFIG.contact.location}</span>
                </div>

                {/* Teléfono */}
                <a
                  href={`tel:${SITE_CONFIG.contact.phoneRaw}`}
                  className="flex items-center gap-2 text-xs font-medium text-muted-foreground hover:text-foreground"
                >
                  <Phone className="size-4 text-emerald-500 shrink-0" />
                  <span>{SITE_CONFIG.contact.phone}</span>
                </a>

                {/* Correo */}
                <a
                  href={`mailto:${SITE_CONFIG.contact.email}`}
                  className="flex items-center gap-2 text-xs font-medium text-muted-foreground hover:text-foreground truncate"
                >
                  <Mail className="size-4 text-emerald-500 shrink-0" />
                  <span className="truncate">{SITE_CONFIG.contact.email}</span>
                </a>

                {/* Redes Sociales */}
                <div className="pt-2 border-t border-border/40">
                  <p className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                    Síguenos en Redes
                  </p>
                  <div className="flex items-center gap-4">
                    {/* Facebook */}
                    <a
                      href={SITE_CONFIG.social.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Facebook"
                      className="text-muted-foreground hover:text-blue-500 transition-colors p-1"
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
                      className="text-muted-foreground hover:text-pink-500 transition-colors p-1"
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
                      className="text-muted-foreground hover:text-foreground transition-colors p-1"
                    >
                      <svg className="size-4 fill-current" viewBox="0 0 24 24">
                        <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.82.57-1.31 1.56-1.29 2.57.01 1.17.65 2.27 1.66 2.87 1.02.6 2.33.62 3.37.06 1.06-.57 1.72-1.71 1.73-2.91.01-4.67.01-9.33.01-13.99z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </ul>
          </nav>
        )}
      </header>
    </div>
  )
}