import { PackageCheck } from 'lucide-react'
import { BRAND_NAME, DEFAULT_WHATSAPP_URL, NAV_LINKS } from '@/lib/site'
import { WhatsAppIcon } from '@/components/whatsapp-icon'

export function SiteFooter() {
  return (
    <>
      <footer className="bg-foreground text-background">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-2">
              <span className="flex size-9 items-center justify-center rounded-md bg-background/10">
                <PackageCheck className="size-5" aria-hidden="true" />
              </span>
              <span className="font-heading font-bold">{BRAND_NAME}</span>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-background/60">
              Mobiliario de Alta Resistencia para Eventos, Banquetes y Hogar.
            </p>
          </div>

          <nav aria-label="Pie de página">
            <p className="text-sm font-semibold">Enlaces</p>
            <ul className="mt-3 grid gap-2 text-sm text-background/70">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="hover:text-background">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="text-sm font-semibold">Cotiza ahora</p>
            <p className="mt-3 text-sm text-background/60">Fabricación Directa | Calibre 18 y 16 | Pintura Electrostática</p>
            <a
              href={DEFAULT_WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 rounded-md bg-whatsapp px-4 py-2.5 text-sm font-semibold text-whatsapp-foreground hover:bg-whatsapp-hover"
            >
              <WhatsAppIcon className="size-4" />
              Escríbenos por WhatsApp
            </a>
          </div>
        </div>
        <div className="border-t border-background/10">
          <p className="mx-auto max-w-6xl px-4 py-5 text-xs text-background/50">
            {`© ${new Date().getFullYear()} Benhur Ospina. Todos los derechos reservados.`}
          </p>
        </div>
      </footer>

      <a
        href={DEFAULT_WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Cotizar por WhatsApp"
        className="fixed bottom-5 right-5 z-50 flex size-14 items-center justify-center rounded-full bg-whatsapp text-whatsapp-foreground shadow-lg ring-4 ring-whatsapp/20 transition-transform hover:scale-105 hover:bg-whatsapp-hover"
      >
        <WhatsAppIcon className="size-7" />
      </a>
    </>
  )
}
