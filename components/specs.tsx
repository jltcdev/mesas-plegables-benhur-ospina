'use client'

import { useState, useEffect, useCallback, MouseEvent } from 'react'
import Image from 'next/image'
import { AnimatePresence, motion } from 'motion/react'
import { Maximize2, X, ZoomIn } from 'lucide-react'
import { SITE_CONFIG, getWhatsAppUrl } from '@/lib/site'
import {
  TECHNICAL_SPECS,
  MAIN_SPEC_IMAGE,
  SPEC_DETAILS_GALLERY,
  type DetailImage,
} from '@/lib/specs-data'
import { WhatsAppIcon } from '@/components/whatsapp-icon'

export function Specs() {
  const [activeImage, setActiveImage] = useState<DetailImage | null>(null)
  const [zoomPos, setZoomPos] = useState({ x: 50, y: 50 })
  const [isZoomed, setIsZoomed] = useState(false)

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect()
    const x = ((e.clientX - left) / width) * 100
    const y = ((e.clientY - top) / height) * 100
    setZoomPos({ x, y })
  }

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') setActiveImage(null)
  }, [])

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [handleKeyDown])

  const whatsappUrl = getWhatsAppUrl(
    `Hola ${SITE_CONFIG.fullName}, vi el detalle técnico de "${activeImage?.title}" y me interesa cotizar.`,
  )

  return (
    <section id="especificaciones" className="scroll-mt-20 py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid items-end gap-6 md:grid-cols-2">
          <div>
            <h2 className="font-heading text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
              Especificaciones Técnicas
            </h2>
            <p className="mt-2 text-lg font-medium text-primary">
              Calidad que se nota debajo de la mesa
            </p>
          </div>
          <p className="text-pretty leading-relaxed text-muted-foreground">
            Cada mesa sale de nuestro taller con materiales pensados para cargar, plegar y transportar todos los días
            sin perder estabilidad.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {TECHNICAL_SPECS.map(({ icon: Icon, title, text }) => (
            <div
              key={title}
              className="rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-2xl"
            >
              <span className="flex size-11 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <Icon className="size-5" aria-hidden="true" />
              </span>
              <h3 className="mt-5 font-heading text-lg font-bold text-card-foreground">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p>
            </div>
          ))}
        </div>

        {/* Imagen principal de estructura técnica */}
        <figure className="mt-10 grid overflow-hidden rounded-xl border border-border bg-card md:grid-cols-2">
          <div
            className="group relative aspect-[3/4] cursor-pointer overflow-hidden bg-muted md:aspect-auto md:min-h-[32rem]"
            onClick={() => setActiveImage(MAIN_SPEC_IMAGE)}
          >
            <Image
              src={MAIN_SPEC_IMAGE.src}
              alt={MAIN_SPEC_IMAGE.alt}
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 transition-opacity group-hover:opacity-100">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-background/90 px-3.5 py-1.5 text-xs font-semibold text-foreground shadow-lg backdrop-blur">
                <Maximize2 className="size-3.5" /> Ampliar detalle
              </span>
            </div>
          </div>
          <figcaption className="flex flex-col justify-center p-6 sm:p-10">
            <h3 className="font-heading text-2xl font-bold text-card-foreground">
              {MAIN_SPEC_IMAGE.title}
            </h3>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              {MAIN_SPEC_IMAGE.text}
            </p>
            <dl className="mt-6 grid grid-cols-2 gap-4 text-sm">
              <div className="rounded-lg bg-muted p-3">
                <dt className="text-muted-foreground">Altura estándar</dt>
                <dd className="mt-1 font-bold text-foreground">75 cm</dd>
              </div>
              <div className="rounded-lg bg-muted p-3">
                <dt className="text-muted-foreground">Calibre</dt>
                <dd className="mt-1 font-bold text-foreground">18 y 16</dd>
              </div>
            </dl>
          </figcaption>
        </figure>

        {/* Galería de detalles técnicos */}
        <ul className="mt-6 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {SPEC_DETAILS_GALLERY.map((d) => (
            <li
              key={d.src}
              className="group cursor-pointer overflow-hidden rounded-xl border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              onClick={() => setActiveImage(d)}
            >
              <div className="relative aspect-square overflow-hidden bg-muted">
                <Image
                  src={d.src}
                  alt={d.alt}
                  fill
                  sizes="(min-width: 1024px) 25vw, 50vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 transition-opacity group-hover:opacity-100">
                  <span className="inline-flex items-center gap-1 rounded-full bg-background/90 px-2.5 py-1 text-xs font-semibold text-foreground shadow backdrop-blur">
                    <Maximize2 className="size-3" /> Ampliar
                  </span>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-heading text-sm font-bold text-card-foreground sm:text-base">{d.title}</h3>
                <p className="mt-1 text-xs leading-relaxed text-muted-foreground sm:text-sm">{d.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* MODAL LIGHTBOX CON ZOOM INTERACTIVO */}
      <AnimatePresence>
        {activeImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-md"
            onClick={() => setActiveImage(null)}
          >
            <button
              type="button"
              onClick={() => setActiveImage(null)}
              className="absolute right-4 top-4 z-50 flex size-12 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition-all hover:bg-white/30 hover:scale-110"
              aria-label="Cerrar visor"
            >
              <X className="size-6" />
            </button>

            <div
              className="relative flex max-h-[92vh] w-full max-w-4xl flex-col items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <div
                className="relative aspect-[4/3] w-full max-h-[72vh] overflow-hidden rounded-xl bg-black cursor-crosshair"
                onMouseEnter={() => setIsZoomed(true)}
                onMouseLeave={() => setIsZoomed(false)}
                onMouseMove={handleMouseMove}
              >
                <div
                  className="relative h-full w-full transition-transform duration-150 ease-out"
                  style={{
                    transformOrigin: `${zoomPos.x}% ${zoomPos.y}%`,
                    transform: isZoomed ? 'scale(2.2)' : 'scale(1)',
                  }}
                >
                  <Image
                    src={activeImage.src}
                    alt={activeImage.alt}
                    fill
                    className="object-contain"
                    priority
                  />
                </div>

                {!isZoomed && (
                  <span className="absolute bottom-3 left-3 z-20 flex items-center gap-1.5 rounded-full bg-black/60 px-3 py-1 text-xs font-medium text-white backdrop-blur">
                    <ZoomIn className="size-3.5" /> Pasa el cursor para hacer zoom
                  </span>
                )}
              </div>

              <div className="mt-4 flex w-full flex-col items-center justify-between gap-3 text-center sm:flex-row sm:text-left">
                <div>
                  <h4 className="text-lg font-bold text-white">{activeImage.title}</h4>
                  <p className="text-xs text-slate-300">{activeImage.text}</p>
                </div>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-md bg-whatsapp px-5 py-2.5 text-sm font-semibold text-whatsapp-foreground shadow-lg transition-colors hover:bg-whatsapp-hover"
                >
                  <WhatsAppIcon className="size-4" />
                  Consultar por WhatsApp
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}