'use client'

import type { ReactNode } from 'react'
import { LanguageProvider } from '@/lib/i18n/language-context'
import { CookieConsentProvider } from '@/lib/consent/cookie-consent-context'
import { CookieConsentBanner } from '@/components/cookie-consent-banner'
import { CookieSettingsPanel } from '@/components/cookie-settings-panel'
import { ConsentGatedAnalytics } from '@/components/consent-gated-analytics'

export function Providers({ children }: { children: ReactNode }) {
  return (
    <LanguageProvider>
      <CookieConsentProvider>
        {children}
        <CookieConsentBanner />
        <CookieSettingsPanel />
        <ConsentGatedAnalytics />
      </CookieConsentProvider>
    </LanguageProvider>
  )
}
