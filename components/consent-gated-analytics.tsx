'use client'

import { Analytics } from '@vercel/analytics/next'
import { useCookieConsent } from '@/lib/consent/cookie-consent-context'

export function ConsentGatedAnalytics() {
  const { preferences } = useCookieConsent()

  if (process.env.NODE_ENV !== 'production' || !preferences.analytics) {
    return null
  }

  return <Analytics />
}
