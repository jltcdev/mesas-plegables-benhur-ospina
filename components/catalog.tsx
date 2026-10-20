'use client'

import { useId, useState, useEffect, useCallback, MouseEvent } from 'react'
import Image from 'next/image'
import { AnimatePresence, motion } from 'motion/react'
import {
  CheckCircle2,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  Ruler,
  Scissors,
  Sparkles,
  X,
  ZoomIn,
} from 'lucide-react'
import {
  SITE_CONFIG,
  getWhatsAppUrl,
  FIXED_HEIGHT,
  RECTANGULAR_SIZES,
  ROUND_SIZES,
} from '@/lib/site'
import { RECTANGULAR_PHOTOS, ROUND_PHOTOS, type Photo } from '@/lib/catalog-data'
import { WhatsAppIcon } from '@/components/whatsapp-icon'
import { cn } from '@/lib/utils'

type Category = 'todas' | 'rectangulares' | 'redondas' | 'sobre-medida'

const TABS: { id: Category; label: string }[] = [
  { id: 'todas', label: 'Todas' },
  { id: 'rectangulares', label: 'Rectangulares' },
  { id: 'redondas', label: 'Redondas' },
  { id: 'sobre-medida', label: 'Sobre Medida' },
]

export function Catalog() {
  const [active, setActive] = useState<Category>('todas')

  const show = (cat: Exclude<Category, 'todas'>) => active === 'todas' || active === cat

  return (
    <section id="catalogo" className="scroll-mt-20 bg-muted/50 py-20 pt-24">
      <div className="mx-auto max-w-6xl px-4">
        <div className="max-w-2xl">
          <h2 className="font-heading text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
            Catálogo de Productos
          </h2>
          <p className="mt-2 text-lg font-medium text-primary">
            Elige tu mesa y cotiza al instante
          </p>
          <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">
            Selecciona la medida que necesitas y envíanos tu solicitud directamente por WhatsApp. Haz clic en cualquier imagen para verla en pantalla completa con zoom interactivo.
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
  const [isLightboxOpen, setIsLightboxOpen] = useState(false)

  // Estado para el zoom interactivo con el mouse
  const [zoomPos, setZoomPos] = useState({ x: 50, y: 50 })
  const [isZoomed, setIsZoomed] = useState(false)

  const photo = photos[photoIndex]
  const goTo = (step: number) => {
    setIsZoomed(false)
    setPhotoIndex((i) => (i + step + photos.length) % photos.length)
  }

  const quoteUrl = getWhatsAppUrl(
    `Hola ${SITE_CONFIG.fullName}, quiero cotizar: ${productName}\nMedida: ${size}\nAltura: ${FIXED_HEIGHT}\nAcabado de referencia: ${photo.finish}`,
  )

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect()
    const x = ((e.clientX - left) / width) * 100
    const y = ((e.clientY - top) / height) * 100
    setZoomPos({ x, y })
  }

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (!isLightboxOpen) return
      if (e.key === 'Escape') setIsLightboxOpen(false)
      if (e.key === 'ArrowLeft') goTo(-1)
      if (e.key === 'ArrowRight') goTo(1)
    },
    [isLightboxOpen],
  )

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [handleKeyDown])

  return (
    <>
      <article className="flex h-full flex-col justify-between overflow-hidden rounded-xl border border-border bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
        <div
          className="group relative aspect-[4/3] cursor-pointer overflow-hidden bg-muted"
          onClick={() => setIsLightboxOpen(true)}
        >
          <AnimatePresence initial={false}>
            <motion.div
              key={photo.src}
              className="absolute inset-0"
              initial={{ opacity: 0, scale: 1.04 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.45, ease: 'easeOut' }}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </motion.div>
          </AnimatePresence>

          {/* Overlay para ampliado */}
          <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 transition-opacity pointer-events-none group-hover:opacity-100">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-background/90 px-3 py-1.5 text-xs font-semibold text-foreground shadow-lg backdrop-blur">
              <Maximize2 className="size-3.5" /> Ampliar imagen
            </span>
          </div>

          <span className="absolute left-3 top-3 z-10 rounded-md bg-background/90 px-2 py-1 text-xs font-semibold text-foreground shadow-sm">
            {photo.finish}
          </span>
          <span className="absolute right-3 top-3 z-10 rounded-md bg-foreground/70 px-2 py-1 text-xs font-medium text-background">
            {photoIndex + 1}/{photos.length}
          </span>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation()
              goTo(-1)
            }}
            aria-label="Foto anterior"
            className="absolute left-2 top-1/2 z-10 flex size-9 -translate-y-1/2 items-center justify-center rounded-full border border-border/40 bg-background/90 text-foreground shadow transition-all hover:scale-110 hover:bg-primary hover:text-primary-foreground"
          >
            <ChevronLeft className="size-5" aria-hidden="true" />
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation()
              goTo(1)
            }}
            aria-label="Foto siguiente"
            className="absolute right-2 top-1/2 z-10 flex size-9 -translate-y-1/2 items-center justify-center rounded-full border border-border/40 bg-background/90 text-foreground shadow transition-all hover:scale-110 hover:bg-primary hover:text-primary-foreground"
          >
            <ChevronRight className="size-5" aria-hidden="true" />
          </button>
        </div>

        <div className="flex gap-2 overflow-x-auto px-4 pt-3 [scrollbar-width:none]" aria-label="Acabados y vistas disponibles">
          {photos.map((p, i) => (
            <button
              key={p.src}
              type="button"
              onClick={() => setPhotoIndex(i)}
              aria-label={`Ver ${p.finish}`}
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

        <div className="flex flex-1 flex-col justify-between p-5">
          <div>
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
          </div>

          <div className="mt-auto flex flex-col gap-3 pt-5">
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
            <div className="grid gap-2 rounded-md bg-muted px-3 py-2.5 text-sm">
              <div className="flex items-center justify-between gap-3">
                <span className="text-muted-foreground">Medida seleccionada</span>
                <span className="relative h-5 overflow-hidden" aria-live="polite">
                  <AnimatePresence mode="wait" initial={false}>
                    <motion.span
                      key={size}
                      className="block font-semibold text-primary"
                      initial={{ y: 12, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: -12, opacity: 0 }}
                      transition={{ duration: 0.22, ease: 'easeOut' }}
                    >
                      {size}
                    </motion.span>
                  </AnimatePresence>
                </span>
              </div>
              <div className="flex items-center justify-between gap-3">
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
              className="mt-3 inline-flex items-center justify-center gap-2 rounded-md bg-whatsapp px-4 py-3 text-sm font-semibold text-whatsapp-foreground transition-colors hover:bg-whatsapp-hover"
            >
              <WhatsAppIcon className="size-4" />
              Cotizar esta medida
            </a>
          </div>
        </div>
      </article>

      {/* MODAL LIGHTBOX CON ZOOM LUPA INTERACTIVO */}
      <AnimatePresence>
        {isLightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-md"
            onClick={() => setIsLightboxOpen(false)}
          >
            {/* Botón de Cierre */}
            <button
              type="button"
              onClick={() => setIsLightboxOpen(false)}
              className="absolute right-4 top-4 z-50 flex size-12 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition-all hover:bg-white/30 hover:scale-110"
              aria-label="Cerrar visor"
            >
              <X className="size-6" />
            </button>

            <div
              className="relative flex max-h-[92vh] w-full max-w-5xl flex-col items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Contenedor de Imagen con Efecto Lupa */}
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
                    src={photo.src}
                    alt={photo.alt}
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

              {/* Botones de Navegación del Visor con Hover Resaltado */}
              <button
                type="button"
                onClick={() => goTo(-1)}
                className="absolute left-3 top-1/2 z-30 flex size-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-black/60 text-white shadow-xl transition-all hover:scale-110 hover:border-emerald-400 hover:bg-emerald-600"
                aria-label="Anterior"
              >
                <ChevronLeft className="size-8" />
              </button>

              <button
                type="button"
                onClick={() => goTo(1)}
                className="absolute right-3 top-1/2 z-30 flex size-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-black/60 text-white shadow-xl transition-all hover:scale-110 hover:border-emerald-400 hover:bg-emerald-600"
                aria-label="Siguiente"
              >
                <ChevronRight className="size-8" />
              </button>

              {/* Pie del Visor */}
              <div className="mt-4 flex w-full flex-col items-center justify-between gap-3 text-center sm:flex-row sm:text-left">
                <div>
                  <h4 className="text-lg font-bold text-white">{title} — {photo.finish}</h4>
                  <p className="text-xs text-slate-300">{photoIndex + 1} de {photos.length}: {photo.alt}</p>
                </div>

                <a
                  href={quoteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-md bg-whatsapp px-5 py-2.5 text-sm font-semibold text-whatsapp-foreground shadow-lg transition-colors hover:bg-whatsapp-hover"
                >
                  <WhatsAppIcon className="size-4" />
                  Cotizar Referencia
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

function CustomCard() {
  const url = getWhatsAppUrl(
    `Hola ${SITE_CONFIG.fullName}, necesito una mesa plegable sobre medida.\nLargo: \nAncho: \nAlto: \nCantidad: `,
  )

  return (
    <article className="flex h-full flex-col justify-between overflow-hidden rounded-xl border-2 border-dashed border-primary/40 bg-primary text-primary-foreground">
      <div className="flex flex-1 flex-col p-5">
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
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-auto inline-flex items-center justify-center gap-2 rounded-md bg-primary-foreground px-4 py-3 text-sm font-semibold text-primary transition-opacity hover:opacity-90"
        >
          <WhatsAppIcon className="size-4 text-whatsapp" />
          Solicitar Medida Especial
        </a>
      </div>
    </article>
  )
}