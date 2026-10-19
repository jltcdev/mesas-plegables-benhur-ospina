import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Archivo, Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const archivo = Archivo({ subsets: ['latin'], variable: '--font-archivo' })

export const metadata: Metadata = {
  title: 'Mesas Plegables Benhur Ospina | Alta Resistencia para Eventos y Banquetes',
  description:
    'Mesas plegables rectangulares, redondas y sobre medida. Fabricación directa en Colombia, tubo calibre 18 y 16, pintura electrostática y refuerzo inferior. Cotiza por WhatsApp.',
  generator: 'v0.app',
  keywords: [
    'mesas plegables',
    'mesas para banquetes',
    'mesas plegables bogota',
    'mesas plegables colombia',
    'mesas de madera plegables',
    'fabricantes de mesas plegables',
    'benhur ospina',
  ],
  authors: [{ name: 'Mesas Plegables Benhur Ospina' }],
  metadataBase: new URL('https://mesas-plegables-benhur-ospina.vercel.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Mesas Plegables Benhur Ospina | Fabricantes Directos',
    description:
      'Mobiliario de alta resistencia para eventos, banquetes, alquiler y hogar. Envíos y atención a nivel nacional.',
    url: 'https://mesas-plegables-benhur-ospina.vercel.app',
    siteName: 'Mesas Plegables Benhur Ospina',
    locale: 'es_CO',
    type: 'website',
    images: [
      {
        url: '/images/salon-eventos.jpg',
        width: 1200,
        height: 630,
        alt: 'Salón de eventos equipado con mesas plegables Benhur Ospina',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mesas Plegables Benhur Ospina | Alta Resistencia',
    description:
      'Mesas plegables rectangulares y redondas sobre medida. Cotización directa con el fabricante.',
    images: ['/images/salon-eventos.jpg'],
  },
  icons: {
    icon: [{ url: '/icon.svg', type: 'image/svg+xml' }],
    apple: '/icon.svg',
  },
}

export const viewport: Viewport = {
  themeColor: '#1b2b4b',
  colorScheme: 'light',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={`${inter.variable} ${archivo.variable} scroll-smooth`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}