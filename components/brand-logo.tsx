import { cn } from '@/lib/utils'

export function BrandMark({ className, accentClassName }: { className?: string; accentClassName?: string }) {
  return (
    <svg viewBox="0 0 48 40" fill="none" aria-hidden="true" className={cn('text-primary', className)}>
      <g className={cn('text-slate-400', accentClassName)} stroke="currentColor" strokeWidth="2.5" strokeLinecap="square">
        <path d="M17 12 L39 34" />
        <path d="M31 12 L9 34" />
      </g>
      <rect x="2" y="3" width="44" height="3.5" fill="currentColor" />
      <rect x="6.5" y="8.5" width="35" height="3.5" fill="currentColor" />
      <g stroke="currentColor" strokeWidth="3.5" strokeLinecap="square">
        <path d="M13 13 L35 35" />
        <path d="M35 13 L13 35" />
      </g>
      <path d="M8 36.5 H17 M31 36.5 H40" stroke="currentColor" strokeWidth="3" />
      <circle cx="24" cy="24" r="1.8" fill="white" />
    </svg>
  )
}

export function BrandLogo({ tone = 'dark', className }: { tone?: 'dark' | 'light'; className?: string }) {
  const isLight = tone === 'light'
  return (
    <span className={cn('flex items-center gap-2.5', className)}>
      <BrandMark
        className={cn('h-10 w-12 shrink-0', isLight ? 'text-white' : 'text-primary')}
        accentClassName={isLight ? 'text-slate-500' : 'text-slate-400'}
      />
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            'font-heading text-base font-extrabold tracking-wide sm:text-lg',
            isLight ? 'text-white' : 'text-primary',
          )}
        >
          BENHUR OSPINA
        </span>
        <span
          className={cn(
            'mt-1 text-[11px] font-medium uppercase tracking-[0.14em] sm:text-xs',
            isLight ? 'text-white/60' : 'text-muted-foreground',
          )}
        >
          Mesas Plegables &amp; Banquetería
        </span>
      </span>
    </span>
  )
}
