export const BRAND_NAME = 'Mesas Plegables Benhur Ospina'

// Reemplaza por el número real con indicativo de país, sin "+" ni espacios.
export const WHATSAPP_NUMBER = '573001234567'

export const NAV_LINKS = [
  { href: '#catalogo', label: 'Catálogo' },
  { href: '#especificaciones', label: 'Especificaciones' },
  { href: '#sobre-medida', label: 'Sobre Medida' },
  { href: '#contacto', label: 'Contacto' },
] as const

export const RECTANGULAR_SIZES = [
  '2.00m x 80cm',
  '1.80m x 80cm',
  '1.20m x 80cm',
  '2.00m x 60cm',
  '1.80m x 60cm',
  '1.20m x 60cm',
] as const

export const ROUND_SIZES = ['1.50m Diámetro', '1.20m Diámetro'] as const

export const FIXED_HEIGHT = '0.75m (75cm)'

export function buildWhatsAppUrl(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
}

export const DEFAULT_WHATSAPP_URL = buildWhatsAppUrl(
  `Hola, quiero cotizar mesas plegables con ${BRAND_NAME}.`,
)
