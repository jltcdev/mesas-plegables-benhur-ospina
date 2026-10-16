import Image from 'next/image'
import { ArrowDown, ShieldCheck } from 'lucide-react'
import { DEFAULT_WHATSAPP_URL } from '@/lib/site'
import { WhatsAppIcon } from '@/components/whatsapp-icon'

const STATS = [
  { value: 'Calibre 18 y 16', label: 'Tubo cuadrado' },
  { value: '75 cm', label: 'Altura estándar' },
  { value: '100%', label: 'Fabricación directa' },
]

export function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden bg-primary text-primary-foreground">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-14 md:grid-cols-2 md:py-20">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/20 bg-primary-foreground/10 px-3 py-1.5 text-xs font-medium sm:text-sm">
            <ShieldCheck className="size-4 shrink-0 text-whatsapp-light" aria-hidden="true" />
            {'Fabricación Directa • Calibre 18 y 16 • Pintura Electrostática'}
          </p>

          <h1 className="mt-6 text-balance font-heading text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
            Mesas Plegables Benhur Ospina
          </h1>
          <p className="mt-4 text-pretty text-lg font-semibold text-primary-foreground/90 sm:text-xl">
            Mobiliario de Alta Resistencia para Eventos, Banquetes y Hogar
          </p>
          <p className="mt-4 max-w-xl text-pretty leading-relaxed text-primary-foreground/75">
            Diseñadas para uso pesado en banquetes, alquileres y hogar. Estructuras reforzadas por la parte inferior,
            acabado duradero y fabricación estándar o sobre medida.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#catalogo"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-primary-foreground px-6 py-3.5 text-base font-semibold text-primary transition-opacity hover:opacity-90"
            >
              Explorar Catálogo
              <ArrowDown className="size-4" aria-hidden="true" />
            </a>
            <a
              href={DEFAULT_WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-whatsapp px-6 py-3.5 text-base font-semibold text-whatsapp-foreground transition-colors hover:bg-whatsapp-hover"
            >
              <WhatsAppIcon className="size-5" />
              Cotizar por WhatsApp
            </a>
          </div>

          <dl className="mt-10 grid grid-cols-3 gap-4 border-t border-primary-foreground/15 pt-6">
            {STATS.map((stat) => (
              <div key={stat.label}>
                <dt className="text-xs text-primary-foreground/60 sm:text-sm">{stat.label}</dt>
                <dd className="mt-1 font-heading text-base font-bold sm:text-xl">{stat.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative">
          <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-primary-foreground/10 shadow-2xl">
            <Image
              src="/images/salon-eventos.jpg"
              alt="Salón de eventos montado con mesas redondas plegables y sillas vestidas"
              fill
              priority
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="absolute -bottom-6 left-4 right-4 flex items-center gap-3 rounded-lg bg-background p-3 text-foreground shadow-xl sm:left-auto sm:right-6 sm:w-72">
            <div className="relative size-14 shrink-0 overflow-hidden rounded-md bg-muted">
              <Image
                src="/images/mesa-redonda-refuerzo.jpeg"
                alt="Vista inferior de mesa redonda con refuerzos metálicos"
                fill
                sizes="56px"
                className="object-cover"
              />
            </div>
            <div>
              <p className="text-sm font-bold">Refuerzo inferior</p>
              <p className="text-xs text-muted-foreground">Soporta alto peso en uso continuo</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
