import { BrandLogo } from '@/components/brand-logo'
import { BRAND_NAME, DEFAULT_WHATSAPP_URL, NAV_LINKS } from '@/lib/site'
import { WhatsAppIcon } from '@/components/whatsapp-icon'

export function SiteFooter() {
  return (
    <>
      <footer className="bg-foreground text-background">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 md:grid-cols-3">
          <div>
            <a href="#inicio" aria-label={`${BRAND_NAME} - Inicio`} className="inline-block">
              <BrandLogo tone="light" />
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-background/60">
              Fabricantes directos de mesas plegables de alta resistencia para eventos, banquetes, alquiler y hogar.
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
        className="group fixed bottom-5 right-5 z-50 flex size-14 items-center justify-center rounded-full bg-whatsapp text-whatsapp-foreground shadow-lg shadow-whatsapp/30 transition-transform duration-300 hover:scale-110 hover:bg-whatsapp-hover"
      >
        <span
          aria-hidden="true"
          className="absolute inset-0 rounded-full bg-whatsapp opacity-60 motion-safe:animate-ping [animation-duration:2s]"
        />
        <span aria-hidden="true" className="absolute -inset-1.5 rounded-full ring-2 ring-whatsapp/30 motion-safe:animate-pulse" />
        <WhatsAppIcon className="relative size-7" />
      </a>
    </>
  )
}
