'use client'

import Image from 'next/image'
import { useLanguage } from '@/lib/i18n/language-context'

const PILLAR_IMAGES = [
  {
    image: '/images/shisha-neon-smoke.jpg',
    position: 'center center',
    alt: 'Premium Shisha vor leuchtendem CÉ LA VI Logo',
  },
  {
    image: '/images/cocktails-outdoor.jpg',
    position: 'center center',
    alt: 'Cocktails auf der CÉ LA VI Terrasse',
  },
  {
    image: '/images/leather-couch-neon.jpg',
    position: 'center center',
    alt: 'Lounge Sitzbereich im CÉ LA VI',
  },
]

export function ExperienceSection() {
  const { t } = useLanguage()

  return (
    <section id="experience" className="bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold tracking-[0.28em] text-primary uppercase">
            {t.experience.badge}
          </p>
          <h2 className="mt-5 text-balance font-serif text-4xl leading-[1.1] text-foreground sm:text-5xl">
            {t.experience.title}
          </h2>
          <p className="mt-6 max-w-lg text-balance leading-relaxed text-foreground/70">
            {t.experience.description}
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-px bg-primary/10 sm:grid-cols-3">
          {t.experience.pillars.map((pillar, index) => {
            const media = PILLAR_IMAGES[index]
            return (
              <div key={pillar.title} className="group relative bg-background p-8 sm:p-6">
                <div className="relative mb-8 aspect-[4/5] overflow-hidden">
                  <Image
                    src={media.image || '/placeholder.svg'}
                    alt={media.alt}
                    fill
                    sizes="(min-width: 640px) 33vw, 100vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    style={{ objectPosition: media.position }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                </div>
                <p className="text-[11px] font-semibold tracking-[0.24em] text-primary uppercase">
                  {pillar.tag}
                </p>
                <h3 className="mt-3 font-serif text-2xl text-foreground">{pillar.title}</h3>
                <p className="mt-3 leading-relaxed text-foreground/65">{pillar.text}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
