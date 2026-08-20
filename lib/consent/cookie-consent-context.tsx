'use client'

import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from 'react'

export type ConsentPreferences = {
  necessary: true
  functional: boolean
  analytics: boolean
  marketing: boolean
}

type StoredConsent = {
  version: number
  preferences: ConsentPreferences
}

const STORAGE_KEY = 'cela-vi-cookie-consent'
const STORAGE_VERSION = 1

const DEFAULT_PREFERENCES: ConsentPreferences = {
  necessary: true,
  functional: false,
  analytics: false,
  marketing: false,
}

type CookieConsentContextValue = {
  preferences: ConsentPreferences
  hasResponded: boolean
  hasHydrated: boolean
  isSettingsOpen: boolean
  acceptAll: () => void
  acceptNecessaryOnly: () => void
  rejectAll: () => void
  savePreferences: (partial: Omit<ConsentPreferences, 'necessary'>) => void
  openSettings: () => void
  closeSettings: () => void
}

const CookieConsentContext = createContext<CookieConsentContextValue | null>(null)

function readStoredConsent(): StoredConsent | null {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY)
    if (!raw) return null
    const parsed = JSON.parse(raw) as StoredConsent
    if (parsed.version !== STORAGE_VERSION) return null
    return parsed
  } catch {
    return null
  }
}

function writeStoredConsent(preferences: ConsentPreferences) {
  try {
    const payload: StoredConsent = { version: STORAGE_VERSION, preferences }
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(payload))
  } catch {
    // Safari private browsing can expose localStorage but reject writes.
  }
}

export function CookieConsentProvider({ children }: { children: ReactNode }) {
  const [preferences, setPreferences] = useState<ConsentPreferences>(DEFAULT_PREFERENCES)
  const [hasResponded, setHasResponded] = useState(false)
  const [isSettingsOpen, setIsSettingsOpen] = useState(false)
  const [hasHydrated, setHasHydrated] = useState(false)

  useEffect(() => {
    try {
      const stored = readStoredConsent()
      if (stored) {
        setPreferences({
          necessary: true,
          functional: Boolean(stored.preferences.functional),
          analytics: Boolean(stored.preferences.analytics),
          marketing: Boolean(stored.preferences.marketing),
        })
        setHasResponded(true)
      }
    } finally {
      setHasHydrated(true)
    }
  }, [])

  const commit = (next: ConsentPreferences) => {
    setPreferences(next)
    setHasResponded(true)
    writeStoredConsent(next)
    setIsSettingsOpen(false)
  }

  const value = useMemo<CookieConsentContextValue>(
    () => ({
      preferences,
      hasResponded,
      hasHydrated,
      isSettingsOpen,
      acceptAll: () =>
        commit({ necessary: true, functional: true, analytics: true, marketing: true }),
      acceptNecessaryOnly: () =>
        commit({ necessary: true, functional: false, analytics: false, marketing: false }),
      rejectAll: () =>
        commit({ necessary: true, functional: false, analytics: false, marketing: false }),
      savePreferences: (partial) => commit({ necessary: true, ...partial }),
      openSettings: () => setIsSettingsOpen(true),
      closeSettings: () => setIsSettingsOpen(false),
    }),
    [preferences, hasResponded, hasHydrated, isSettingsOpen],
  )

  return <CookieConsentContext.Provider value={value}>{children}</CookieConsentContext.Provider>
}

export function useCookieConsent() {
  const context = useContext(CookieConsentContext)
  if (!context) {
    throw new Error('useCookieConsent must be used within a CookieConsentProvider')
  }
  return context
}
