'use client'

import { useState, useEffect, useCallback, MouseEvent } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'motion/react'
import {
  X,
  ZoomIn,
  ZoomOut,
  RotateCcw,
  ChevronLeft,
  ChevronRight,
  Move,
} from 'lucide-react'
import { WhatsAppIcon } from '@/components/whatsapp-icon'

type LightboxProps = {
  isOpen: boolean
  onClose: () => void
  src: string
  alt: string
  title: string
  subtitle?: string
  quoteUrl?: string
  onNext?: () => void
  onPrev?: () => void
  currentIndex?: number
  totalCount?: number
}

export function ImageLightbox({
  isOpen,
  onClose,
  src,
  alt,
  title,
  subtitle,
  quoteUrl,
  onNext,
  onPrev,
  currentIndex,
  totalCount,
}: LightboxProps) {
  const [scale, setScale] = useState(1)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isDragging, setIsDragging] = useState(false)
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 })

  const resetZoom = useCallback(() => {
    setScale(1)
    setPosition({ x: 0, y: 0 })
  }, [])

  useEffect(() => {
    resetZoom()
  }, [src, resetZoom])

  const zoomIn = () => setScale((s) => Math.min(s + 0.5, 4))
  const zoomOut = () => {
    setScale((s) => {
      const nextScale = Math.max(s - 0.5, 1)
      if (nextScale === 1) setPosition({ x: 0, y: 0 })
      return nextScale
    })
  }

  const handleMouseDown = (e: MouseEvent<HTMLDivElement>) => {
    if (scale <= 1) return
    setIsDragging(true)
    setDragStart({ x: e.clientX - position.x, y: e.clientY - position.y })
  }

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!isDragging || scale <= 1) return
    setPosition({
      x: e.clientX - dragStart.x,
      y: e.clientY - dragStart.y,
    })
  }

  const handleMouseUp = () => setIsDragging(false)

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (!isOpen) return
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft' && onPrev) onPrev()
      if (e.key === 'ArrowRight' && onNext) onNext()
      if (e.key === '+' || e.key === '=') zoomIn()
      if (e.key === '-') zoomOut()
    },
    [isOpen, onClose, onNext, onPrev],
  )

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [handleKeyDown])

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 backdrop-blur-md select-none"
          onClick={onClose}
        >
          {/* Botón de Cierre */}
          <button
            type="button"
            onClick={onClose}
            className="absolute right-4 top-4 z-50 flex size-12 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition-all hover:bg-white/30 hover:scale-110"
            aria-label="Cerrar visor"
          >
            <X className="size-6" />
          </button>

          {/* Barra Flotante de Controles (+, -, Reset, Manito) */}
          <div
            className="absolute top-4 left-1/2 z-50 flex -translate-x-1/2 items-center gap-1 rounded-full border border-white/20 bg-black/80 px-3 py-1.5 text-white shadow-xl backdrop-blur"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={zoomIn}
              disabled={scale >= 4}
              className="flex size-9 items-center justify-center rounded-full hover:bg-white/20 disabled:opacity-40 transition-colors"
              title="Acercar (+)"
            >
              <ZoomIn className="size-4" />
            </button>
            <span className="text-xs font-semibold px-1 min-w-[3.5rem] text-center">
              {Math.round(scale * 100)}%
            </span>
            <button
              type="button"
              onClick={zoomOut}
              disabled={scale <= 1}
              className="flex size-9 items-center justify-center rounded-full hover:bg-white/20 disabled:opacity-40 transition-colors"
              title="Alejar (-)"
            >
              <ZoomOut className="size-4" />
            </button>
            <div className="h-4 w-px bg-white/20 mx-1" />
            <button
              type="button"
              onClick={resetZoom}
              disabled={scale === 1}
              className="flex size-9 items-center justify-center rounded-full hover:bg-white/20 disabled:opacity-40 transition-colors"
              title="Restablecer tamaño"
            >
              <RotateCcw className="size-4" />
            </button>
            {scale > 1 && (
              <span className="hidden sm:flex items-center gap-1 text-xs text-slate-300 ml-2 border-l border-white/20 pl-3">
                <Move className="size-3.5 text-emerald-400" /> Arrastra para mover
              </span>
            )}
          </div>

          {/* Área de Visualización */}
          <div
            className="relative flex max-h-[90vh] w-full max-w-5xl flex-col items-center justify-center overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div
              className={`relative aspect-[4/3] w-full max-h-[72vh] overflow-hidden rounded-xl bg-black ${
                scale > 1 ? (isDragging ? 'cursor-grabbing' : 'cursor-grab') : 'cursor-default'
              }`}
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
            >
              <div
                className="relative h-full w-full transition-transform duration-75 ease-out"
                style={{
                  transform: `translate(${position.x}px, ${position.y}px) scale(${scale})`,
                }}
              >
                <Image
                  src={src}
                  alt={alt}
                  fill
                  className="object-contain pointer-events-none"
                  priority
                />
              </div>
            </div>

            {/* Flechas de Navegación (Siguiente / Anterior) */}
            {onPrev && (
              <button
                type="button"
                onClick={onPrev}
                className="absolute left-3 top-1/2 z-40 flex size-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-black/60 text-white shadow-xl transition-all hover:scale-110 hover:border-emerald-400 hover:bg-emerald-600"
                aria-label="Anterior"
              >
                <ChevronLeft className="size-8" />
              </button>
            )}

            {onNext && (
              <button
                type="button"
                onClick={onNext}
                className="absolute right-3 top-1/2 z-40 flex size-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-black/60 text-white shadow-xl transition-all hover:scale-110 hover:border-emerald-400 hover:bg-emerald-600"
                aria-label="Siguiente"
              >
                <ChevronRight className="size-8" />
              </button>
            )}

            {/* Pie del Visor */}
            <div className="mt-4 flex w-full flex-col items-center justify-between gap-3 text-center sm:flex-row sm:text-left">
              <div>
                <h4 className="text-lg font-bold text-white">{title}</h4>
                <p className="text-xs text-slate-300">
                  {currentIndex !== undefined && totalCount !== undefined && `${currentIndex + 1} de ${totalCount}: `}
                  {subtitle || alt}
                </p>
              </div>

              {quoteUrl && (
                <a
                  href={quoteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-md bg-whatsapp px-5 py-2.5 text-sm font-semibold text-whatsapp-foreground shadow-lg transition-colors hover:bg-whatsapp-hover"
                >
                  <WhatsAppIcon className="size-4" />
                  Cotizar Referencia
                </a>
              )}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}