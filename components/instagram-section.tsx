'use client'

import Image from 'next/image'
import { InstagramIcon } from '@/components/icons/instagram-icon'
import { FacebookIcon } from '@/components/icons/facebook-icon'
import { useLanguage } from '@/lib/i18n/language-context'

const INSTAGRAM_IMAGES = [
  { src: '/images/shisha-neon-smoke.jpg', alt: 'Shisha mit Rauch vor dem CÉ LA VI Logo' },
  { src: '/images/cocktails-outdoor.jpg', alt: 'Cocktails auf der Terrasse' },
  { src: '/images/leather-couch-neon.jpg', alt: 'Lounge Sitzbereich' },
  { src: '/images/bar-interior.jpg', alt: 'Bar Theke' },
  { src: '/images/exterior-venue.jpg', alt: 'Terrasse und Aussenansicht des CÉ LA VI in Zug' },
]

export function InstagramSection() {
  const { t } = useLanguage()

  return (
    <section className="bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-end">
          <div>
            <h2 className="text-balance font-serif text-4xl leading-tight text-foreground sm:text-5xl">
              {t.instagram.title}
            </h2>
            <p className="mt-5 max-w-md text-balance leading-relaxed text-foreground/70">
              {t.instagram.description}
            </p>
          </div>

          <div className="flex shrink-0 flex-wrap items-center gap-3">
            <a
              href="https://www.instagram.com/celavizug/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-primary px-7 py-3 text-sm font-medium tracking-[0.08em] text-primary uppercase transition-colors hover:bg-primary hover:text-primary-foreground"
            >
              <InstagramIcon className="size-4" />
              {t.instagram.ctaInstagram}
            </a>
            <a
              href="https://www.facebook.com/CeLaViZug/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-foreground/30 px-7 py-3 text-sm font-medium tracking-[0.08em] text-foreground uppercase transition-colors hover:border-primary hover:text-primary"
            >
              <FacebookIcon className="size-4" />
              {t.instagram.ctaFacebook}
            </a>
          </div>
        </div>

        <p className="mt-6 text-sm tracking-[0.08em] text-foreground/50">{t.instagram.handle}</p>

        <div className="mt-10 grid grid-cols-3 gap-3 sm:grid-cols-5 lg:gap-4">
          {INSTAGRAM_IMAGES.map((img) => (
            <a
              key={img.src}
              href="https://www.instagram.com/celavizug/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square overflow-hidden bg-card"
              aria-label={t.instagram.viewOnInstagram}
            >
              <Image
                src={img.src || '/placeholder.svg'}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-background/0 opacity-0 transition-opacity duration-300 group-hover:bg-background/50 group-hover:opacity-100">
                <InstagramIcon className="size-5 text-primary" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
