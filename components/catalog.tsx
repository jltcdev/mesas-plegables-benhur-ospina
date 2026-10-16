'use client'

import { useId, useState } from 'react'
import Image from 'next/image'
import { CheckCircle2, ChevronDown, Ruler, Scissors, Sparkles } from 'lucide-react'
import {
  buildWhatsAppUrl,
  FIXED_HEIGHT,
  RECTANGULAR_SIZES,
  ROUND_SIZES,
} from '@/lib/site'
import { WhatsAppIcon } from '@/components/whatsapp-icon'
import { cn } from '@/lib/utils'

type Category = 'todas' | 'rectangulares' | 'redondas' | 'sobre-medida'

const TABS: { id: Category; label: string }[] = [
  { id: 'todas', label: 'Todas' },
  { id: 'rectangulares', label: 'Rectangulares' },
  { id: 'redondas', label: 'Redondas' },
  { id: 'sobre-medida', label: 'Sobre Medida' },
]

type Photo = { src: string; alt: string; finish: string }

const RECTANGULAR_PHOTOS: Photo[] = [
  { src: '/images/mesa-rectangular-madera.jpeg', alt: 'Mesa rectangular plegable con cubierta de madera natural', finish: 'Madera natural' },
  { src: '/images/mesa-rectangular-negra.jpeg', alt: 'Mesa rectangular plegable con cubierta negra', finish: 'Negro' },
  { src: '/images/mesa-rectangular-blanca.jpeg', alt: 'Mesa rectangular plegable con cubierta blanca', finish: 'Blanco' },
  { src: '/images/mesa-rectangular-caoba.jpeg', alt: 'Mesa rectangular plegable con cubierta color caoba', finish: 'Caoba' },
  { src: '/images/mesa-rectangular-gris.jpeg', alt: 'Mesa rectangular plegable larga con cubierta gris oscuro', finish: 'Gris grafito' },
]

const ROUND_PHOTOS: Photo[] = [
  { src: '/images/mesa-redonda-madera.jpeg', alt: 'Mesa redonda plegable con cubierta de madera', finish: 'Madera natural' },
  { src: '/images/mesa-redonda-blanca.jpeg', alt: 'Mesa redonda plegable con cubierta blanca', finish: 'Blanco' },
  { src: '/images/mesa-redonda-taller.jpeg', alt: 'Mesa redonda con cubierta de madera lacada en el taller', finish: 'Lacado brillante' },
  { src: '/images/mesa-redonda-refuerzo.jpeg', alt: 'Vista inferior de mesa redonda mostrando refuerzos metálicos', finish: 'Vista inferior' },
]

export function Catalog() {
  const [active, setActive] = useState<Category>('todas')

  const show = (cat: Exclude<Category, 'todas'>) => active === 'todas' || active === cat

  return (
    <section id="catalogo" className="scroll-mt-20 bg-muted/50 py-20 pt-24">
      <div className="mx-auto max-w-6xl px-4">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">Catálogo</p>
          <h2 className="mt-2 text-balance font-heading text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
            Elige tu mesa y cotiza al instante
          </h2>
          <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">
            Selecciona la medida que necesitas y envíanos tu solicitud directamente por WhatsApp.
          </p>
        </div>

        <div
          role="tablist"
          aria-label="Filtrar productos"
          className="mt-8 flex gap-2 overflow-x-auto pb-2 [scrollbar-width:none]"
        >
          {TABS.map((tab) => (
            <button
              key={tab.id}
              type="button"
              role="tab"
              aria-selected={active === tab.id}
              onClick={() => setActive(tab.id)}
              className={cn(
                'shrink-0 rounded-full border px-4 py-2 text-sm font-semibold transition-colors',
                active === tab.id
                  ? 'border-primary bg-primary text-primary-foreground'
                  : 'border-border bg-background text-foreground hover:border-primary/40',
              )}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {show('rectangulares') && (
            <ProductCard
              title="Mesa Rectangular Estándar"
              description="Versátil para banquetes, ferias, aulas y hogar. Cubierta con canto protector y patas plegables."
              photos={RECTANGULAR_PHOTOS}
              sizeLabel="Medidas"
              sizes={RECTANGULAR_SIZES}
              badges={['Refuerzo Inferior', 'Garantía de Estabilidad']}
              productName="Mesa Rectangular Estándar"
            />
          )}
          {show('redondas') && (
            <ProductCard
              title="Mesa Redonda para Banquetes"
              description="La favorita de salones y empresas de alquiler. Montaje rápido y estructura firme para 8 a 10 personas."
              photos={ROUND_PHOTOS}
              sizeLabel="Diámetro"
              sizes={ROUND_SIZES}
              badges={['Ideal para Banquetería', 'Estructura Reforzada']}
              productName="Mesa Redonda para Banquetes"
            />
          )}
          {show('sobre-medida') && <CustomCard />}
        </div>
      </div>
    </section>
  )
}

function ProductCard({
  title,
  description,
  photos,
  sizeLabel,
  sizes,
  badges,
  productName,
}: {
  title: string
  description: string
  photos: Photo[]
  sizeLabel: string
  sizes: readonly string[]
  badges: string[]
  productName: string
}) {
  const selectId = useId()
  const [size, setSize] = useState<string>(sizes[0])
  const [photoIndex, setPhotoIndex] = useState(0)
  const photo = photos[photoIndex]

  const quoteUrl = buildWhatsAppUrl(
    `Hola, quiero cotizar: ${productName}\nMedida: ${size}\nAltura: ${FIXED_HEIGHT}\nAcabado de referencia: ${photo.finish}`,
  )

  return (
    <article className="flex flex-col overflow-hidden rounded-xl border border-border bg-card shadow-sm">
      <div className="relative aspect-[4/3] bg-muted">
        <Image src={photo.src} alt={photo.alt} fill sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw" className="object-cover" />
        <span className="absolute left-3 top-3 rounded-md bg-background/90 px-2 py-1 text-xs font-semibold text-foreground">
          {photo.finish}
        </span>
      </div>

      <div className="flex gap-2 overflow-x-auto px-4 pt-3 [scrollbar-width:none]" aria-label="Acabados disponibles">
        {photos.map((p, i) => (
          <button
            key={p.src}
            type="button"
            onClick={() => setPhotoIndex(i)}
            aria-label={`Ver acabado ${p.finish}`}
            aria-pressed={i === photoIndex}
            className={cn(
              'relative size-12 shrink-0 overflow-hidden rounded-md border-2 transition-colors',
              i === photoIndex ? 'border-primary' : 'border-transparent opacity-70 hover:opacity-100',
            )}
          >
            <Image src={p.src} alt="" fill sizes="48px" className="object-cover" />
          </button>
        ))}
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-heading text-xl font-bold text-card-foreground">{title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{description}</p>

        <ul className="mt-4 flex flex-wrap gap-2">
          {badges.map((badge) => (
            <li
              key={badge}
              className="inline-flex items-center gap-1 rounded-full bg-primary/10 px-2.5 py-1 text-xs font-semibold text-primary"
            >
              <CheckCircle2 className="size-3.5" aria-hidden="true" />
              {badge}
            </li>
          ))}
        </ul>

        <div className="mt-5 grid gap-3">
          <div>
            <label htmlFor={selectId} className="text-sm font-semibold text-foreground">
              {sizeLabel}
            </label>
            <div className="relative mt-1.5">
              <select
                id={selectId}
                value={size}
                onChange={(e) => setSize(e.target.value)}
                className="h-11 w-full appearance-none rounded-md border border-input bg-background px-3 pr-10 text-sm font-medium text-foreground focus-visible:outline-2 focus-visible:outline-ring"
              >
                {sizes.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
              <ChevronDown className="pointer-events-none absolute right-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" aria-hidden="true" />
            </div>
          </div>
          <div className="flex items-center justify-between rounded-md bg-muted px-3 py-2.5 text-sm">
            <span className="flex items-center gap-2 text-muted-foreground">
              <Ruler className="size-4" aria-hidden="true" />
              Altura fija
            </span>
            <span className="font-semibold text-foreground">{FIXED_HEIGHT}</span>
          </div>
        </div>

        <a
          href={quoteUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center justify-center gap-2 rounded-md bg-whatsapp px-4 py-3 text-sm font-semibold text-whatsapp-foreground transition-colors hover:bg-whatsapp-hover"
        >
          <WhatsAppIcon className="size-4" />
          Cotizar esta medida
        </a>
      </div>
    </article>
  )
}

function CustomCard() {
  const url = buildWhatsAppUrl(
    'Hola, necesito una mesa plegable sobre medida.\nLargo: \nAncho: \nAlto: \nCantidad: ',
  )

  return (
    <article className="flex flex-col overflow-hidden rounded-xl border-2 border-dashed border-primary/40 bg-primary text-primary-foreground">
      <div className="flex flex-1 flex-col p-6">
        <span className="flex size-12 items-center justify-center rounded-lg bg-primary-foreground/10">
          <Scissors className="size-6" aria-hidden="true" />
        </span>
        <h3 className="mt-5 font-heading text-2xl font-bold">Fabricación Sobre Medida</h3>
        <p className="mt-3 text-pretty leading-relaxed text-primary-foreground/80">
          ¿Necesitas una dimensión diferente? Fabricamos según las medidas exactas que buscas: largo, ancho, alto,
          forma y acabado de cubierta.
        </p>
        <ul className="mt-6 grid gap-3 text-sm">
          {[
            'Largo, ancho y alto a tu necesidad',
            'Cubiertas en madera, blanco, negro o caoba',
            'Estructura calibre 18 o 16',
            'Pedidos para alquiler y empresas',
          ].map((item) => (
            <li key={item} className="flex items-start gap-2">
              <Sparkles className="mt-0.5 size-4 shrink-0 text-whatsapp-light" aria-hidden="true" />
              {item}
            </li>
          ))}
        </ul>
        <div className="flex-1" />
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex items-center justify-center gap-2 rounded-md bg-primary-foreground px-4 py-3 text-sm font-semibold text-primary transition-opacity hover:opacity-90"
        >
          <WhatsAppIcon className="size-4 text-whatsapp" />
          Solicitar Medida Especial
        </a>
      </div>
    </article>
  )
}
