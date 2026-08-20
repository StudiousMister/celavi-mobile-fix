'use client'

import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { useLanguage } from '@/lib/i18n/language-context'

export function EventsSection() {
  const { t } = useLanguage()

  return (
    <section id="events" className="bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-xl">
          <p className="text-xs font-semibold tracking-[0.28em] text-primary uppercase">
            {t.events.badge}
          </p>
          <h2 className="mt-5 text-balance font-serif text-4xl leading-tight text-foreground sm:text-5xl">
            {t.events.title}
          </h2>
          <p className="mt-6 text-balance leading-relaxed text-foreground/70">
            {t.events.description}
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 overflow-hidden border border-primary/15 lg:grid-cols-2">
          <div className="relative aspect-[4/5] lg:aspect-auto">
            <Image
              src="/images/event-wm2026.jpg"
              alt="WM 2026 Public Viewing im CÉ LA VI"
              fill
              className="object-cover"
            />
          </div>
          <div className="flex flex-col justify-center bg-card p-8 sm:p-12">
            <p className="text-[11px] font-semibold tracking-[0.24em] text-primary uppercase">
              {t.events.featuredLabel}
            </p>
            <h3 className="mt-4 font-serif text-3xl leading-tight text-foreground">
              {t.events.eventTitle}
            </h3>
            <p className="mt-4 leading-relaxed text-foreground/70">{t.events.eventText}</p>
            <a
              href="https://www.instagram.com/celavizug/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex w-fit items-center gap-2 border border-primary px-7 py-3 text-sm font-medium tracking-[0.08em] text-primary uppercase transition-colors hover:bg-primary hover:text-primary-foreground"
            >
              {t.events.cta}
              <ArrowRight className="size-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
