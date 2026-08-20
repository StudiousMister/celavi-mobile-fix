'use client'

import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { useLanguage } from '@/lib/i18n/language-context'

export function ImpressumContent() {
  const { t } = useLanguage()

  return (
    <main className="mx-auto min-h-screen max-w-3xl px-6 py-24 lg:px-10">
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-sm text-foreground/70 transition-colors hover:text-primary"
      >
        <ArrowLeft className="size-4" />
        {t.legalPage.backLink}
      </Link>

      <h1 className="mt-8 font-serif text-4xl text-foreground">{t.legalPage.heading}</h1>

      <div className="mt-8 flex flex-col gap-6 leading-relaxed text-foreground/80">
        <div>
          <p className="text-xs font-semibold tracking-[0.2em] text-primary uppercase">
            {t.legalPage.operatorLabel}
          </p>
          <p className="mt-2">
            CÉ LA VI — Shisha • Bar • Lounge
            <br />
            Baarerstrasse 52
            <br />
            6300 Zug
            <br />
            Schweiz / Switzerland
          </p>
        </div>

        <div>
          <p className="text-xs font-semibold tracking-[0.2em] text-primary uppercase">
            {t.legalPage.phoneLabel}
          </p>
          <p className="mt-2">+41 78 800 26 61</p>
        </div>

        <div>
          <p className="text-xs font-semibold tracking-[0.2em] text-primary uppercase">
            {t.legalPage.socialLabel}
          </p>
          <p className="mt-2 flex flex-col gap-1">
            <a
              href="https://www.instagram.com/celavizug/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              Instagram — @celavizug
            </a>
            <a
              href="https://www.facebook.com/CeLaViZug/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              Facebook — CÉ LA VI
            </a>
          </p>
        </div>
      </div>
    </main>
  )
}
