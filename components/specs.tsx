import Image from 'next/image'
import { Paintbrush, Ruler, Shield, Weight } from 'lucide-react'

const SPECS = [
  {
    icon: Shield,
    title: 'Tubo Cuadrado Calibre 18 y 16',
    text: 'Estructura metálica sólida para uso profesional.',
  },
  {
    icon: Paintbrush,
    title: 'Pintura Electrostática',
    text: 'Recubrimiento horneado libre de rayones, óxido y desgaste.',
  },
  {
    icon: Weight,
    title: 'Refuerzo Inferior',
    text: 'Soporte debajo de la cubierta para soportar alto peso continuo.',
  },
  {
    icon: Ruler,
    title: 'Diseños Personalizados',
    text: 'Ajustamos largo, ancho y alto a tus necesidades específicas.',
  },
]

const DETAILS = [
  {
    src: '/images/galeria/mesa_cuadrada_11.jpeg',
    alt: 'Refuerzos laterales en tubo cuadrado bajo la cubierta de madera',
    title: 'Refuerzo inferior',
    text: 'Travesaños laterales a lo largo de la cubierta.',
  },
  {
    src: '/images/galeria/mesa_cuadrada_10.jpeg',
    alt: 'Patas en tubo cuadrado calibre 18 y 16 plegadas bajo la cubierta',
    title: 'Tubo calibre 18 / 16',
    text: 'Patas en tubo cuadrado con pintura electrostática.',
  },
  {
    src: '/images/galeria/mesa_cuadrada_13.jpeg',
    alt: 'Bisagra metálica atornillada con seguro de pata',
    title: 'Bisagra con seguro',
    text: 'Anclaje atornillado que bloquea la pata abierta.',
  },
  {
    src: '/images/galeria/mesa_cuadrada_14.jpeg',
    alt: 'Tuerca de seguridad tipo bellota en la unión de la pata',
    title: 'Tornillería de seguridad',
    text: 'Tuercas de bellota en cada punto de articulación.',
  },
]

export function Specs() {
  return (
    <section id="especificaciones" className="scroll-mt-20 py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid items-end gap-6 md:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-primary">Especificaciones técnicas</p>
            <h2 className="mt-2 text-balance font-heading text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
              Calidad que se nota debajo de la mesa
            </h2>
          </div>
          <p className="text-pretty leading-relaxed text-muted-foreground">
            Cada mesa sale de nuestro taller con materiales pensados para cargar, plegar y transportar todos los días
            sin perder estabilidad.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {SPECS.map(({ icon: Icon, title, text }) => (
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

        <figure className="mt-10 grid overflow-hidden rounded-xl border border-border bg-card md:grid-cols-2">
          <div className="relative aspect-[3/4] md:aspect-auto md:min-h-[32rem]">
            <Image
              src="/images/galeria/mesa_cuadrada_09.jpeg"
              alt="Parte inferior de mesa rectangular con estructura en tubo cuadrado y travesaños de refuerzo"
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          <figcaption className="flex flex-col justify-center p-6 sm:p-10">
            <h3 className="font-heading text-2xl font-bold text-card-foreground">Estructura reforzada a la vista</h3>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              Travesaños metálicos atornillados bajo la cubierta, bisagras con seguro y patas en tubo cuadrado con
              pintura electrostática. Así garantizamos estabilidad incluso con carga pesada.
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

        <ul className="mt-6 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {DETAILS.map((d) => (
            <li key={d.src} className="group overflow-hidden rounded-xl border border-border bg-card">
              <div className="relative aspect-square overflow-hidden bg-muted">
                <Image
                  src={d.src}
                  alt={d.alt}
                  fill
                  sizes="(min-width: 1024px) 25vw, 50vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-4">
                <h3 className="font-heading text-sm font-bold text-card-foreground sm:text-base">{d.title}</h3>
                <p className="mt-1 text-xs leading-relaxed text-muted-foreground sm:text-sm">{d.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
