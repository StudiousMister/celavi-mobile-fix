'use client'

import { Star, ArrowRight } from 'lucide-react'
import { useLanguage } from '@/lib/i18n/language-context'

export function SocialProofSection() {
  const { t } = useLanguage()

  return (
    <section className="border-y border-primary/10 bg-card py-20">
      <div className="mx-auto flex max-w-4xl flex-col items-center px-6 text-center">
        <h2 className="text-balance font-serif text-3xl leading-tight text-foreground sm:text-4xl">
          {t.socialProof.title}
        </h2>

        <div className="mt-8 flex items-center gap-3">
          <div className="flex items-center gap-1" aria-hidden="true">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className={
                  i < 4
                    ? 'size-5 fill-primary text-primary'
                    : 'size-5 fill-primary/40 text-primary/40'
                }
              />
            ))}
          </div>
          <span className="font-serif text-3xl text-foreground">4.4 / 5</span>
        </div>

        <p className="mt-3 text-sm tracking-[0.05em] text-foreground/60">
          {t.socialProof.ratingBasis}
        </p>

        <a
          href="https://www.google.com/search?q=c%C3%A9+la+vi+zug"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex items-center gap-2 text-sm font-medium tracking-[0.08em] text-primary uppercase transition-colors hover:text-primary/70"
        >
          {t.socialProof.cta}
          <ArrowRight className="size-4" />
        </a>
      </div>
    </section>
  )
}
