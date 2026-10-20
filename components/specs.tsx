'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Maximize2 } from 'lucide-react'
import { SITE_CONFIG, getWhatsAppUrl } from '@/lib/site'
import {
  TECHNICAL_SPECS,
  MAIN_SPEC_IMAGE,
  SPEC_DETAILS_GALLERY,
  type DetailImage,
} from '@/lib/specs-data'
import { ImageLightbox } from '@/components/ui/image-lightbox'

export function Specs() {
  const [activeImage, setActiveImage] = useState<DetailImage | null>(null)

  const whatsappUrl = activeImage
    ? getWhatsAppUrl(
        `Hola ${SITE_CONFIG.fullName}, vi el detalle técnico de "${activeImage.title}" y me interesa cotizar.`,
      )
    : undefined

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

      {/* INTEGRACIÓN DE IMAGELIGHTBOX */}
      <ImageLightbox
        isOpen={!!activeImage}
        onClose={() => setActiveImage(null)}
        src={activeImage?.src || ''}
        alt={activeImage?.alt || ''}
        title={activeImage?.title || ''}
        subtitle={activeImage?.text}
        quoteUrl={whatsappUrl}
      />
    </section>
  )
}