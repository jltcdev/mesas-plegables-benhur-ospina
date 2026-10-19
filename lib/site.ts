export const SITE_CONFIG = {
  name: 'Benhur Ospina',
  fullName: 'Mesas Plegables Benhur Ospina',
  tagline: 'Mesas Plegables & Banquetería',
  description:
    'Fabricación directa de mesas plegables de alta resistencia para eventos, banquetes, alquiler y hogar.',
  url: 'https://mesas-plegables-benhur-ospina.vercel.app',

  contact: {
    phone: '+57 314 200 4393',
    phoneRaw: '+573142004393',
    whatsappNumber: '573142004393',
    email: 'mesasplegables.benhurospina@gmail.com',
    location: 'Bogotá, Colombia (Envíos Nacionales)',
  },

  social: {
    facebook: 'https://facebook.com/mesasplegables.benhurospina',
    instagram: 'https://instagram.com/mesasplegables_benhurospina',
    tiktok: 'https://tiktok.com/@mesasplegables.benhur',
  },

  whatsappMessages: {
    default: 'Hola, quiero cotizar mesas plegables con Mesas Plegables Benhur Ospina.',
    customSize:
      'Hola, necesito una mesa plegable sobre medida. Largo: , Ancho: , Alto: , Cantidad: ',
  },
} as const

// Helper para generar URLs dinámicas de WhatsApp
export function getWhatsAppUrl(message: string = SITE_CONFIG.whatsappMessages.default) {
  return `https://wa.me/${SITE_CONFIG.contact.whatsappNumber}?text=${encodeURIComponent(message)}`
}

// Aliases para retrocompatibilidad con componentes existentes
export const BRAND_NAME = SITE_CONFIG.fullName
export const WHATSAPP_NUMBER = SITE_CONFIG.contact.whatsappNumber
export const EMAIL = SITE_CONFIG.contact.email
export const DEFAULT_WHATSAPP_URL = getWhatsAppUrl()

export const NAV_LINKS = [
  { label: 'Catálogo', href: '#catalogo' },
  { label: 'Especificaciones', href: '#especificaciones' },
  { label: 'Sobre Medida', href: '#sobre-medida' },
  { label: 'Contacto', href: '#contacto' },
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