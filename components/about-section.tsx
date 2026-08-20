'use client'

import Image from 'next/image'
import { useLanguage } from '@/lib/i18n/language-context'

export function AboutSection() {
  const { t } = useLanguage()

  return (
    <section id="about" className="bg-background py-24 lg:py-32">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-6 lg:grid-cols-2 lg:gap-20 lg:px-10">
        <div className="relative order-2 aspect-[4/5] lg:order-1">
          <Image
            src="/images/about-lounge-atmosphere.jpg"
            alt="Gäste geniessen Shisha und Lounge-Atmosphäre im CÉ LA VI"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 border border-primary/20" style={{ margin: '-1px' }} />
        </div>

        <div className="order-1 lg:order-2">
          <p className="text-xs font-semibold tracking-[0.28em] text-primary uppercase">
            {t.about.badge}
          </p>
          <h2 className="mt-5 text-balance font-serif text-4xl leading-tight text-foreground sm:text-5xl">
            {t.about.title}
          </h2>
          <p className="mt-6 max-w-lg text-balance leading-relaxed text-foreground/70">
            {t.about.description}
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            {t.about.highlights.map((item, index) => (
              <span key={item} className="flex items-center gap-4">
                <span className="text-sm font-medium tracking-[0.18em] text-foreground/80 uppercase">
                  {item}
                </span>
                {index < t.about.highlights.length - 1 && (
                  <span className="text-primary/40" aria-hidden="true">
                    ·
                  </span>
                )}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
