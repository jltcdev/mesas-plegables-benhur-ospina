import { Shield, Paintbrush, Weight, Ruler, Wrench, Factory, Truck } from 'lucide-react'

export type DetailImage = {
  src: string
  alt: string
  title: string
  text: string
}

export const TECHNICAL_SPECS = [
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
] as const

export const MAIN_SPEC_IMAGE: DetailImage = {
  src: '/images/galeria/mesa_cuadrada_09.jpeg',
  alt: 'Parte inferior de mesa rectangular con estructura en tubo cuadrado y travesaños de refuerzo',
  title: 'Estructura reforzada a la vista',
  text: 'Travesaños metálicos atornillados bajo la cubierta, bisagras con seguro y patas en tubo cuadrado con pintura electrostática.',
}

export const SPEC_DETAILS_GALLERY: DetailImage[] = [
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

export const CUSTOM_MADE_STEPS = [
  { icon: Wrench, title: 'Nos cuentas la medida', text: 'Largo, ancho, alto, forma y cantidad.' },
  { icon: Factory, title: 'Fabricamos en taller', text: 'Fabricación directa, sin intermediarios.' },
  { icon: Truck, title: 'Entregamos', text: 'Envíos a tu ciudad, listos para usar.' },
] as const

export const CUSTOM_MADE_VIDEOS = [
  {
    src: '/videos/salon-eventos.mp4',
    title: 'Salón de eventos',
    caption: 'Montaje de mesas rectangulares para recepción.',
  },
  {
    src: '/videos/salon-clases.mp4',
    title: 'Salón de clases',
    caption: 'Mesas plegables para capacitación y aulas.',
  },
  {
    src: '/videos/mesa-rectangular.mp4',
    title: 'Detalle del producto',
    caption: 'Plegado, estructura y acabados de cerca.',
  },
] as const