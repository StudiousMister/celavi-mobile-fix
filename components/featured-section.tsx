'use client'

import Image from 'next/image'
import { useLanguage } from '@/lib/i18n/language-context'

export function FeaturedSection() {
  const { t } = useLanguage()

  return (
    <section className="relative flex min-h-[70vh] items-center overflow-hidden">
      <Image
        src="/images/bar-interior.jpg"
        alt="Bar Interieur im CÉ LA VI mit Pflanzen und warmem Licht"
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/40 to-background/85" />

      <div className="relative z-10 mx-auto w-full max-w-4xl px-6 py-24 text-center">
        <h2 className="text-balance font-serif text-3xl leading-tight text-foreground sm:text-5xl">
          {t.featured.title}
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-balance leading-relaxed text-foreground/80">
          {t.featured.description}
        </p>
      </div>
    </section>
  )
}
