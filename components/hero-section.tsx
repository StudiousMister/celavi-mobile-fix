'use client'

import Image from 'next/image'
import { MapPin } from 'lucide-react'
import { useLanguage } from '@/lib/i18n/language-context'

export function HeroSection() {
  const { t } = useLanguage()

  return (
    <section id="home" className="relative isolate flex min-h-[100svh] items-center py-28 md:min-h-[100vh] md:overflow-hidden md:py-0">
      {/* Background layer: image + overlay, isolated to its own stacking context so it can never paint above the content. */}
      <div className="absolute inset-0 z-0" aria-hidden="true">
        <Image
          src="/images/hero-shisha-neon.jpg"
          alt=""
          fill
          priority
          className="object-cover object-[65%_center]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/70 to-background/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/40" />
      </div>

      {/* Content layer: always static, always visible, no scroll-, viewport- or JS-based reveal logic. */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 lg:px-10">
        <div className="max-w-2xl opacity-100">
          <p className="mb-6 text-xs font-semibold tracking-[0.28em] text-primary uppercase">
            {t.hero.badge}
          </p>

          <h1 className="text-balance font-serif text-5xl leading-[1.08] text-foreground sm:text-6xl lg:text-7xl">
            {t.hero.titleLine1}
            <br />
            {t.hero.titleLine2}
            <br />
            <span className="text-primary">{t.hero.titleBrand}</span>
          </h1>

          <p className="mt-7 max-w-md text-balance text-base leading-relaxed text-foreground/80">
            {t.hero.description}
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#experience"
              className="inline-flex items-center bg-primary px-8 py-3.5 text-sm font-medium tracking-[0.08em] text-primary-foreground uppercase transition-colors hover:bg-primary/85"
            >
              {t.hero.ctaPrimary}
            </a>
            <a
              href="#visit"
              className="inline-flex items-center border border-foreground/30 bg-background/40 px-8 py-3.5 text-sm font-medium tracking-[0.08em] text-foreground uppercase transition-colors hover:border-primary hover:text-primary"
            >
              {t.hero.ctaSecondary}
            </a>
          </div>

          <div className="mt-12 inline-flex items-center gap-2 text-xs tracking-[0.1em] text-foreground/60 uppercase">
            <MapPin className="size-3.5 text-primary" />
            {t.hero.location}
          </div>
        </div>
      </div>
    </section>
  )
}
