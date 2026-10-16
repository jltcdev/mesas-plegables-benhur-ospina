import { Factory, Truck, Wrench } from 'lucide-react'

const VIDEOS = [
  { src: '/videos/salon-eventos.mp4', title: 'Salón de eventos', caption: 'Montaje de mesas rectangulares para recepción.' },
  { src: '/videos/salon-clases.mp4', title: 'Salón de clases', caption: 'Mesas plegables para capacitación y aulas.' },
  { src: '/videos/mesa-rectangular.mp4', title: 'Detalle del producto', caption: 'Plegado, estructura y acabados de cerca.' },
]

const STEPS = [
  { icon: Wrench, title: 'Nos cuentas la medida', text: 'Largo, ancho, alto, forma y cantidad.' },
  { icon: Factory, title: 'Fabricamos en taller', text: 'Fabricación directa, sin intermediarios.' },
  { icon: Truck, title: 'Entregamos', text: 'Envíos a tu ciudad, listos para usar.' },
]

export function CustomMade() {
  return (
    <section id="sobre-medida" className="scroll-mt-20 bg-primary py-20 text-primary-foreground">
      <div className="mx-auto max-w-6xl px-4">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-whatsapp-light">Sobre medida</p>
          <h2 className="mt-2 text-balance font-heading text-3xl font-extrabold tracking-tight sm:text-4xl">
            Hechas a la medida de tu espacio
          </h2>
          <p className="mt-3 text-pretty leading-relaxed text-primary-foreground/75">
            Salones, colegios, empresas de alquiler o tu hogar: adaptamos cada mesa a lo que necesitas. Mira cómo
            lucen en uso real.
          </p>
        </div>

        <ol className="mt-10 grid gap-4 sm:grid-cols-3">
          {STEPS.map(({ icon: Icon, title, text }, i) => (
            <li key={title} className="flex gap-4 rounded-xl bg-primary-foreground/5 p-5 ring-1 ring-primary-foreground/10">
              <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary-foreground text-primary">
                <Icon className="size-5" aria-hidden="true" />
              </span>
              <div>
                <p className="text-xs font-semibold text-primary-foreground/60">Paso {i + 1}</p>
                <h3 className="font-heading font-bold">{title}</h3>
                <p className="mt-1 text-sm text-primary-foreground/70">{text}</p>
              </div>
            </li>
          ))}
        </ol>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {VIDEOS.map((video) => (
            <figure key={video.src} className="overflow-hidden rounded-xl bg-primary-foreground/5 ring-1 ring-primary-foreground/10">
              <video
                src={video.src}
                controls
                muted
                playsInline
                preload="metadata"
                className="aspect-[9/12] w-full bg-black object-cover"
                aria-label={video.title}
              />
              <figcaption className="p-4">
                <p className="font-heading font-bold">{video.title}</p>
                <p className="mt-1 text-sm text-primary-foreground/70">{video.caption}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
