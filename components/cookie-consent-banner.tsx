'use client'

import Link from 'next/link'
import { useCookieConsent } from '@/lib/consent/cookie-consent-context'
import { useLanguage } from '@/lib/i18n/language-context'

export function CookieConsentBanner() {
  const { hasResponded, hasHydrated, acceptAll, acceptNecessaryOnly, openSettings } = useCookieConsent()
  const { t } = useLanguage()

  if (!hasHydrated || hasResponded) return null

  return (
    <div
      role="region"
      aria-label={t.cookieBanner.title}
      className="fixed inset-x-0 bottom-0 z-[2147483647] border-t border-primary/35 bg-background pb-[env(safe-area-inset-bottom)] shadow-[0_-12px_40px_rgba(0,0,0,0.28)]"
    >
      <div className="mx-auto grid max-w-6xl gap-6 px-5 py-5 sm:px-8 md:grid-cols-[minmax(0,1fr)_auto] md:items-center md:gap-8 lg:gap-12 lg:px-10 lg:py-6">
        <div className="min-w-0">
          <p className="font-serif text-xl tracking-wide text-foreground sm:text-[22px]">
            {t.cookieBanner.title}
          </p>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-foreground/65">
            {t.cookieBanner.description}
          </p>
          <div className="mt-4 flex items-center gap-4 text-xs tracking-[0.08em] text-foreground/50 uppercase">
            <Link href="/datenschutz" className="transition-colors hover:text-primary hover:underline">
              {t.cookieBanner.privacyLink}
            </Link>
            <span aria-hidden="true" className="text-primary/50">•</span>
            <Link href="/impressum" className="transition-colors hover:text-primary hover:underline">
              {t.cookieBanner.legalLink}
            </Link>
          </div>
        </div>

        <div className="flex w-full flex-col gap-2.5 sm:flex-row sm:flex-wrap md:w-auto md:flex-nowrap md:items-center">
          <button
            type="button"
            onClick={acceptAll}
            className="min-h-11 w-full bg-primary px-4 text-[12px] font-semibold tracking-[0.12em] text-primary-foreground uppercase transition-colors hover:bg-primary/85 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background md:w-[148px]"
          >
            {t.cookieBanner.acceptAll}
          </button>
          <button
            type="button"
            onClick={acceptNecessaryOnly}
            className="min-h-11 w-full border border-foreground/25 bg-foreground/[0.03] px-4 text-[12px] font-medium tracking-[0.12em] text-foreground/80 uppercase transition-colors hover:border-primary/70 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background md:w-[148px]"
          >
            {t.cookieBanner.necessaryOnly}
          </button>
          <button
            type="button"
            onClick={openSettings}
            className="min-h-11 w-full border border-primary/45 px-4 text-[12px] font-medium tracking-[0.12em] text-primary uppercase transition-colors hover:bg-primary/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background md:w-[148px]"
          >
            {t.cookieBanner.settings}
          </button>
        </div>
      </div>
    </div>
  )
}
