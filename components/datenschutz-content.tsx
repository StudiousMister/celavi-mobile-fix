'use client'

import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { useLanguage } from '@/lib/i18n/language-context'
import { useCookieConsent } from '@/lib/consent/cookie-consent-context'

export function DatenschutzContent() {
  const { t } = useLanguage()
  const { openSettings } = useCookieConsent()

  return (
    <main className="mx-auto min-h-screen max-w-3xl px-6 py-24 lg:px-10">
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-sm text-foreground/70 transition-colors hover:text-primary"
      >
        <ArrowLeft className="size-4" />
        {t.privacyPage.backLink}
      </Link>

      <h1 className="mt-8 font-serif text-4xl text-foreground">{t.privacyPage.heading}</h1>
      <p className="mt-3 text-sm tracking-[0.05em] text-foreground/50">
        {t.privacyPage.lastUpdated}
      </p>

      <div className="mt-10 flex flex-col gap-10">
        {t.privacyPage.sections.map((section) => (
          <div key={section.title}>
            <h2 className="font-serif text-xl text-foreground">{section.title}</h2>
            <div className="mt-3 flex flex-col gap-3 leading-relaxed text-foreground/80">
              {section.body.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            {'hasCookieSettingsButton' in section && section.hasCookieSettingsButton && (
              <button
                type="button"
                onClick={openSettings}
                className="mt-4 inline-flex items-center border border-primary px-6 py-2.5 text-[13px] font-medium tracking-[0.08em] text-primary uppercase transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                {t.footer.cookieSettings}
              </button>
            )}
          </div>
        ))}
      </div>
    </main>
  )
}
