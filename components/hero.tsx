import Image from 'next/image'
import { ArrowDown, ShieldCheck } from 'lucide-react'
import { DEFAULT_WHATSAPP_URL } from '@/lib/site'
import { WhatsAppIcon } from '@/components/whatsapp-icon'
import { MapPin } from 'lucide-react'

const STATS = [
  { value: 'Calibre 18 y 16', label: 'Tubo cuadrado' },
  { value: '75 cm', label: 'Altura estándar' },
  { value: '100%', label: 'Fabricación directa' },
]

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative isolate flex min-h-[calc(100svh-4rem)] items-center overflow-hidden bg-slate-950 text-white"
    >
      <Image
        src="/images/salon-eventos.jpg"
        alt=""
        fill
        priority
        sizes="100vw"
        className="-z-20 object-cover"
      />
      <div
        className="absolute inset-0 -z-10 bg-gradient-to-b from-slate-950/85 via-slate-900/80 to-slate-950/90"
        aria-hidden="true"
      />

      <div className="mx-auto flex w-full max-w-4xl flex-col items-center px-4 py-20 text-center md:py-28">
        <p className="text-white/90 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-xs font-medium backdrop-blur-sm sm:text-sm">
          <MapPin className="size-4 text-primary" aria-hidden="true" />
          {'Envíos a toda Colombia • Garantía de Fábrica'}
        </p>

        <h1 className="mt-6 text-balance font-heading text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl lg:text-7xl">
          Mesas Plegables Benhur Ospina
        </h1>
        <p className="mt-5 text-pretty text-lg font-semibold text-white/90 sm:text-2xl">
          Mobiliario de Alta Resistencia para Eventos, Banquetes y Hogar
        </p>
        <p className="mt-4 max-w-2xl text-pretty leading-relaxed text-white/75 sm:text-lg">
          Diseñadas para uso pesado en banquetes, alquileres y hogar. Estructuras reforzadas por la parte inferior,
          acabado duradero y fabricación estándar o sobre medida.
        </p>

        <div className="mt-9 flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
          <a
            href="#catalogo"
            className="inline-flex items-center justify-center gap-2 rounded-md bg-white px-7 py-3.5 text-base font-semibold text-slate-900 transition-opacity hover:opacity-90"
          >
            Explorar Catálogo
            <ArrowDown className="size-4" aria-hidden="true" />
          </a>
          <a
            href={DEFAULT_WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-md bg-whatsapp px-7 py-3.5 text-base font-semibold text-whatsapp-foreground transition-colors hover:bg-whatsapp-hover"
          >
            <WhatsAppIcon className="size-5" />
            Cotizar por WhatsApp
          </a>
        </div>

        <dl className="mt-12 grid w-full max-w-2xl grid-cols-3 divide-x divide-white/15 rounded-xl border border-white/15 bg-white/5 py-5 backdrop-blur-sm">
          {STATS.map((stat) => (
            <div key={stat.label} className="flex flex-col-reverse px-2">
              <dt className="mt-1 text-xs text-white/65 sm:text-sm">{stat.label}</dt>
              <dd className="font-heading text-base font-bold sm:text-2xl">{stat.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
