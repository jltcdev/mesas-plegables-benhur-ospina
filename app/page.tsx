import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { Catalog } from '@/components/catalog'
import { Specs } from '@/components/specs'
import { CustomMade } from '@/components/custom-made'
import { QuoteForm } from '@/components/quote-form'
import { SiteFooter } from '@/components/site-footer'

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <Catalog />
        <Specs />
        <CustomMade />
        <QuoteForm />
      </main>
      <SiteFooter />
    </>
  )
}
