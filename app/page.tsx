import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { Catalog } from '@/components/catalog'
import { Specs } from '@/components/specs'
import { CustomMade } from '@/components/custom-made'
import { QuoteForm } from '@/components/quote-form'
import { SiteFooter } from '@/components/site-footer'
import { Reveal } from '@/components/reveal'

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <Reveal>
          <Catalog />
        </Reveal>
        <Reveal>
          <Specs />
        </Reveal>
        <Reveal>
          <CustomMade />
        </Reveal>
        <Reveal>
          <QuoteForm />
        </Reveal>
      </main>
      <SiteFooter />
    </>
  )
}
