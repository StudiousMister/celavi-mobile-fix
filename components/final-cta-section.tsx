'use client'

import Image from 'next/image'
import { InstagramIcon } from '@/components/icons/instagram-icon'
import { FacebookIcon } from '@/components/icons/facebook-icon'
import { useLanguage } from '@/lib/i18n/language-context'

export function FinalCtaSection() {
  const { t } = useLanguage()

  return (
    <section className="relative flex min-h-[60vh] items-center justify-center overflow-hidden">
      <Image
        src="/images/exterior-venue.jpg"
        alt="CÉ LA VI Außenansicht mit Terrasse und Sitzplätzen in Zug"
        fill
        sizes="100vw"
        className="object-cover object-center"
        priority={false}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/35 via-background/65 to-background/90" />
      <div className="absolute inset-0 bg-background/20" />

      <div className="relative z-10 mx-auto max-w-2xl px-6 py-24 text-center">
        <h2 className="text-balance font-serif text-4xl leading-tight text-foreground gold-glow sm:text-6xl">
          {t.finalCta.title}
        </h2>
        <p className="mt-6 text-balance text-lg text-foreground/80">{t.finalCta.description}</p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#visit"
            className="inline-flex items-center bg-primary px-9 py-3.5 text-sm font-medium tracking-[0.08em] text-primary-foreground uppercase transition-colors hover:bg-primary/85"
          >
            {t.finalCta.ctaTable}
          </a>
          <a
            href="https://www.instagram.com/celavizug/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-foreground/30 px-9 py-3.5 text-sm font-medium tracking-[0.08em] text-foreground uppercase transition-colors hover:border-primary hover:text-primary"
          >
            <InstagramIcon className="size-4" />
            {t.finalCta.ctaInstagram}
          </a>
          <a
            href="https://www.facebook.com/CeLaViZug/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-foreground/30 px-9 py-3.5 text-sm font-medium tracking-[0.08em] text-foreground uppercase transition-colors hover:border-primary hover:text-primary"
          >
            <FacebookIcon className="size-4" />
            {t.finalCta.ctaFacebook}
          </a>
        </div>
      </div>
    </section>
  )
}
