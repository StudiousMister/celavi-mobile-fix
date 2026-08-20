'use client'

import { MapPin, Phone, Clock, ArrowRight } from 'lucide-react'
import { useLanguage } from '@/lib/i18n/language-context'

export function VisitSection() {
  const { t } = useLanguage()

  return (
    <section id="visit" className="bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-xl">
          <h2 className="text-balance font-serif text-4xl leading-tight text-foreground sm:text-5xl">
            {t.visit.title}
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col gap-10">
            <div className="flex gap-4">
              <MapPin className="mt-0.5 size-5 shrink-0 text-primary" />
              <div>
                <p className="text-xs font-semibold tracking-[0.2em] text-primary uppercase">
                  {t.visit.addressLabel}
                </p>
                <p className="mt-2 leading-relaxed text-foreground/85">
                  {t.visit.addressLines.map((line, index) => (
                    <span key={line}>
                      {line}
                      {index < t.visit.addressLines.length - 1 && <br />}
                    </span>
                  ))}
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <Phone className="mt-0.5 size-5 shrink-0 text-primary" />
              <div>
                <p className="text-xs font-semibold tracking-[0.2em] text-primary uppercase">
                  {t.visit.phoneLabel}
                </p>
                <p className="mt-2 leading-relaxed text-foreground/85">+41 78 800 26 61</p>
              </div>
            </div>

            <div className="flex gap-4">
              <Clock className="mt-0.5 size-5 shrink-0 text-primary" />
              <div className="w-full">
                <p className="text-xs font-semibold tracking-[0.2em] text-primary uppercase">
                  {t.visit.hoursLabel}
                </p>
                <dl className="mt-2 flex flex-col gap-1.5">
                  {t.visit.hours.map((row) => (
                    <div
                      key={row.days}
                      className="flex flex-wrap justify-between gap-x-6 border-b border-primary/10 py-1.5 text-sm"
                    >
                      <dt className="text-foreground/70">{row.days}</dt>
                      <dd className="font-medium text-foreground">{row.time}</dd>
                    </div>
                  ))}
                </dl>
                <p className="mt-4 text-sm tracking-[0.05em] text-primary/80">
                  {t.visit.ageNote}
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <a
                href="https://www.google.com/maps/search/?api=1&query=Baarerstrasse+52+6300+Zug"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-primary px-7 py-3.5 text-sm font-medium tracking-[0.08em] text-primary-foreground uppercase transition-colors hover:bg-primary/85"
              >
                {t.visit.ctaRoute}
                <ArrowRight className="size-4" />
              </a>
              <a
                href="tel:+41788002661"
                className="inline-flex items-center gap-2 border border-foreground/30 px-7 py-3.5 text-sm font-medium tracking-[0.08em] text-foreground uppercase transition-colors hover:border-primary hover:text-primary"
              >
                <Phone className="size-4" />
                {t.visit.ctaCall}
              </a>
            </div>
          </div>

          <div className="relative min-h-[360px] border border-primary/15 lg:min-h-full">
            <iframe
              title={t.visit.mapTitle}
              src="https://www.google.com/maps?q=Baarerstrasse+52,+6300+Zug&output=embed"
              className="absolute inset-0 h-full w-full grayscale contrast-125 invert-[0.92]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
