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
            <div key={title} className="rounded-xl border border-border bg-card p-6">
              <span className="flex size-11 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <Icon className="size-5" aria-hidden="true" />
              </span>
              <h3 className="mt-5 font-heading text-lg font-bold text-card-foreground">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p>
            </div>
          ))}
        </div>

        <figure className="mt-10 grid overflow-hidden rounded-xl border border-border bg-card md:grid-cols-2">
          <div className="relative aspect-[4/3] md:aspect-auto">
            <Image
              src="/images/mesa-redonda-refuerzo.jpeg"
              alt="Parte inferior de mesa redonda con travesaños metálicos de refuerzo y patas plegables"
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
      </div>
    </section>
  )
}
