'use client'

import { useState, type FormEvent } from 'react'
import { ChevronDown, MapPin, MessageSquareText } from 'lucide-react'
import {
  SITE_CONFIG,
  getWhatsAppUrl,
  FIXED_HEIGHT,
  RECTANGULAR_SIZES,
  ROUND_SIZES,
} from '@/lib/site'
import { WhatsAppIcon } from '@/components/whatsapp-icon'

type TableType = 'Rectangular' | 'Redonda' | 'Sobre Medida'

const TYPES: TableType[] = ['Rectangular', 'Redonda', 'Sobre Medida']

const inputClass =
  'h-11 w-full rounded-md border border-input bg-background px-3 text-sm text-foreground placeholder:text-muted-foreground focus-visible:outline-2 focus-visible:outline-ring'

export function QuoteForm() {
  const [type, setType] = useState<TableType>('Rectangular')
  const [size, setSize] = useState<string>(RECTANGULAR_SIZES[0])
  const [customSize, setCustomSize] = useState('')
  const [quantity, setQuantity] = useState('10')
  const [city, setCity] = useState('')
  const [error, setError] = useState('')

  function handleTypeChange(next: TableType) {
    setType(next)
    if (next === 'Rectangular') setSize(RECTANGULAR_SIZES[0])
    if (next === 'Redonda') setSize(ROUND_SIZES[0])
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const qty = Number(quantity)
    const measure = type === 'Sobre Medida' ? customSize.trim() : size

    if (!measure) return setError('Indica la medida que necesitas.')
    if (!Number.isInteger(qty) || qty < 1 || qty > 10000) return setError('Ingresa una cantidad válida.')
    if (!city.trim()) return setError('Indica la ciudad de envío.')
    setError('')

    const lines = [
      `Hola ${SITE_CONFIG.fullName}, quiero una cotización:`,
      `• Tipo de mesa: ${type}`,
      `• Medida: ${measure}`,
      ...(type === 'Sobre Medida' ? [] : [`• Altura: ${FIXED_HEIGHT}`]),
      `• Cantidad: ${qty}`,
      `• Ciudad de envío: ${city.trim()}`,
    ]
    window.open(getWhatsAppUrl(lines.join('\n')), '_blank', 'noopener,noreferrer')
  }

  const sizes = type === 'Rectangular' ? RECTANGULAR_SIZES : ROUND_SIZES

  return (
    <section id="contacto" className="scroll-mt-20 bg-muted/50 py-20">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 md:grid-cols-5">
        <div className="md:col-span-2">
          {/* H2 Principal del Bloque */}
          <h2 className="font-heading text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
            Cotización Rápida
          </h2>
          <p className="mt-2 text-lg font-medium text-primary">
            Arma tu pedido en 30 segundos
          </p>
          <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">
            Completa los datos y te llevamos directo a WhatsApp con el mensaje listo. Te respondemos con precio y
            tiempos de entrega.
          </p>
          <ul className="mt-6 grid gap-3 text-sm text-foreground">
            <li className="flex items-center gap-2">
              <MessageSquareText className="size-4 text-primary" aria-hidden="true" />
              Atención directa con el fabricante
            </li>
            <li className="flex items-center gap-2">
              <MapPin className="size-4 text-primary" aria-hidden="true" />
              Envíos a nivel nacional
            </li>
          </ul>
        </div>

        <form
          onSubmit={handleSubmit}
          noValidate
          className="grid gap-4 rounded-xl border border-border bg-card p-5 shadow-sm sm:grid-cols-2 sm:p-8 md:col-span-3"
        >
          <fieldset className="sm:col-span-2">
            <legend className="text-sm font-semibold text-foreground">Tipo de Mesa</legend>
            <div className="mt-2 grid grid-cols-3 gap-2">
              {TYPES.map((t) => (
                <label
                  key={t}
                  className="flex cursor-pointer items-center justify-center rounded-md border border-input px-2 py-2.5 text-center text-sm font-medium text-foreground transition-colors has-[:checked]:border-primary has-[:checked]:bg-primary has-[:checked]:text-primary-foreground has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-ring"
                >
                  <input
                    type="radio"
                    name="tipo"
                    value={t}
                    checked={type === t}
                    onChange={() => handleTypeChange(t)}
                    className="sr-only"
                  />
                  {t}
                </label>
              ))}
            </div>
          </fieldset>

          <div className="sm:col-span-2">
            <label htmlFor="medida" className="text-sm font-semibold text-foreground">
              Medida Seleccionada
            </label>
            {type === 'Sobre Medida' ? (
              <input
                id="medida"
                type="text"
                value={customSize}
                onChange={(e) => setCustomSize(e.target.value)}
                placeholder="Ej: 2.40m x 90cm x 75cm alto"
                maxLength={120}
                className={`${inputClass} mt-1.5`}
              />
            ) : (
              <div className="relative mt-1.5">
                <select
                  id="medida"
                  value={size}
                  onChange={(e) => setSize(e.target.value)}
                  className={`${inputClass} appearance-none pr-10`}
                >
                  {sizes.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
                <ChevronDown className="pointer-events-none absolute right-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" aria-hidden="true" />
              </div>
            )}
          </div>

          <div>
            <label htmlFor="cantidad" className="text-sm font-semibold text-foreground">
              Cantidad deseada
            </label>
            <input
              id="cantidad"
              type="number"
              inputMode="numeric"
              min={1}
              max={10000}
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              className={`${inputClass} mt-1.5`}
            />
          </div>

          <div>
            <label htmlFor="ciudad" className="text-sm font-semibold text-foreground">
              Ciudad de Envío
            </label>
            <input
              id="ciudad"
              type="text"
              autoComplete="address-level2"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              placeholder="Ej: Bogotá"
              maxLength={80}
              className={`${inputClass} mt-1.5`}
            />
          </div>

          {error && (
            <p role="alert" className="text-sm font-medium text-destructive sm:col-span-2">
              {error}
            </p>
          )}

          <button
            type="submit"
            className="inline-flex items-center justify-center gap-2 rounded-md bg-whatsapp px-6 py-3.5 text-base font-semibold text-whatsapp-foreground transition-colors hover:bg-whatsapp-hover sm:col-span-2"
          >
            <WhatsAppIcon className="size-5" />
            Enviar Cotización a WhatsApp
          </button>
        </form>
      </div>
    </section>
  )
}