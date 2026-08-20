'use client'

import { useState } from 'react'
import Image from 'next/image'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'
import { cn } from '@/lib/utils'
import { useLanguage } from '@/lib/i18n/language-context'

const GALLERY_IMAGES = [
  {
    src: '/images/bar-interior.jpg',
    alt: 'Bar Theke im CÉ LA VI mit Pflanzen und Regalen voller Flaschen',
    span: 'row-span-2',
  },
  {
    src: '/images/hero-shisha-neon.jpg',
    alt: 'Premium Shisha vor dem leuchtenden CÉ LA VI Schriftzug',
    span: '',
  },
  {
    src: '/images/cocktails-outdoor.jpg',
    alt: 'Drei Cocktails auf der Aussenterrasse',
    span: '',
  },
  {
    src: '/images/shisha-neon-smoke.jpg',
    alt: 'Shisha Nahaufnahme mit Rauch vor dem CÉ LA VI Logo',
    span: 'row-span-2',
  },
  {
    src: '/images/man-smoke-logo.jpg',
    alt: 'Gast geniesst Shisha vor dem CÉ LA VI Logo',
    span: '',
  },
  {
    src: '/images/leather-couch-neon.jpg',
    alt: 'Leder Lounge Sitzbereich mit Shisha und Neon Schriftzug',
    span: '',
  },
  {
    src: '/images/exterior-venue.jpg',
    alt: 'Aussenansicht des CÉ LA VI mit Terrasse in Zug',
    span: 'row-span-2',
  },
]

export function GallerySection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)
  const { t } = useLanguage()

  const close = () => setActiveIndex(null)
  const prev = () =>
    setActiveIndex((i) =>
      i === null ? null : (i - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length,
    )
  const next = () =>
    setActiveIndex((i) => (i === null ? null : (i + 1) % GALLERY_IMAGES.length))

  return (
    <section id="gallery" className="bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-xl">
          <h2 className="text-balance font-serif text-4xl leading-tight text-foreground sm:text-5xl">
            {t.gallery.title}
          </h2>
          <p className="mt-5 text-balance leading-relaxed text-foreground/70">
            {t.gallery.description}
          </p>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:[grid-template-rows:repeat(4,14rem)] lg:gap-4">
          {GALLERY_IMAGES.map((img, index) => (
            <button
              key={img.src + index}
              type="button"
              onClick={() => setActiveIndex(index)}
              className={cn('group relative overflow-hidden bg-card text-left', img.span)}
              aria-label={`${t.gallery.zoomLabel}: ${img.alt}`}
            >
              <Image
                src={img.src || '/placeholder.svg'}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/0 via-transparent to-transparent transition-colors duration-500 group-hover:from-background/30" />
            </button>
          ))}
        </div>
      </div>

      {activeIndex !== null && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-background/95 p-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label={t.gallery.dialogLabel}
        >
          <button
            type="button"
            onClick={close}
            aria-label={t.gallery.closeLabel}
            className="absolute right-5 top-5 p-2 text-foreground/80 transition-colors hover:text-primary"
          >
            <X className="size-7" />
          </button>
          <button
            type="button"
            onClick={prev}
            aria-label={t.gallery.prevLabel}
            className="absolute left-3 top-1/2 -translate-y-1/2 p-2 text-foreground/70 transition-colors hover:text-primary sm:left-6"
          >
            <ChevronLeft className="size-8" />
          </button>
          <button
            type="button"
            onClick={next}
            aria-label={t.gallery.nextLabel}
            className="absolute right-3 top-1/2 -translate-y-1/2 p-2 text-foreground/70 transition-colors hover:text-primary sm:right-6"
          >
            <ChevronRight className="size-8" />
          </button>
          <div className="relative h-[70vh] w-full max-w-4xl">
            <Image
              src={GALLERY_IMAGES[activeIndex].src || '/placeholder.svg'}
              alt={GALLERY_IMAGES[activeIndex].alt}
              fill
              className="object-contain"
            />
          </div>
        </div>
      )}
    </section>
  )
}
