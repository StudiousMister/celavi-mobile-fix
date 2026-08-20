'use client'

import { useEffect, useState } from 'react'
import { X } from 'lucide-react'
import { cn } from '@/lib/utils'
import { useCookieConsent, type ConsentPreferences } from '@/lib/consent/cookie-consent-context'
import { useLanguage } from '@/lib/i18n/language-context'

function ConsentToggle({
  checked,
  disabled,
  onChange,
  label,
}: {
  checked: boolean
  disabled?: boolean
  onChange: (value: boolean) => void
  label: string
}) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      aria-label={label}
      disabled={disabled}
      onClick={() => !disabled && onChange(!checked)}
      className={cn(
        'relative inline-flex h-6 w-11 shrink-0 items-center border transition-colors',
        checked ? 'border-primary bg-primary/90' : 'border-foreground/30 bg-transparent',
        disabled && 'cursor-not-allowed opacity-60',
      )}
    >
      <span
        className={cn(
          'inline-block size-4 translate-x-1 bg-foreground transition-transform',
          checked && 'translate-x-6 bg-background',
        )}
      />
    </button>
  )
}

export function CookieSettingsPanel() {
  const { preferences, isSettingsOpen, closeSettings, acceptAll, rejectAll, savePreferences } =
    useCookieConsent()
  const { t } = useLanguage()

  const [draft, setDraft] = useState<Omit<ConsentPreferences, 'necessary'>>({
    functional: preferences.functional,
    analytics: preferences.analytics,
    marketing: preferences.marketing,
  })

  useEffect(() => {
    if (isSettingsOpen) {
      setDraft({
        functional: preferences.functional,
        analytics: preferences.analytics,
        marketing: preferences.marketing,
      })
    }
  }, [isSettingsOpen, preferences])

  useEffect(() => {
    if (!isSettingsOpen) return
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') closeSettings()
    }
    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [isSettingsOpen, closeSettings])

  if (!isSettingsOpen) return null

  const categories = [
    {
      key: 'necessary' as const,
      title: t.cookieSettings.necessaryTitle,
      text: t.cookieSettings.necessaryText,
      checked: true,
      disabled: true,
    },
    {
      key: 'functional' as const,
      title: t.cookieSettings.functionalTitle,
      text: t.cookieSettings.functionalText,
      checked: draft.functional,
      disabled: false,
    },
    {
      key: 'analytics' as const,
      title: t.cookieSettings.analyticsTitle,
      text: t.cookieSettings.analyticsText,
      checked: draft.analytics,
      disabled: false,
    },
    {
      key: 'marketing' as const,
      title: t.cookieSettings.marketingTitle,
      text: t.cookieSettings.marketingText,
      checked: draft.marketing,
      disabled: false,
    },
  ]

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={t.cookieSettings.title}
      className="fixed inset-0 z-[210] flex items-center justify-center bg-background/95 p-4 backdrop-blur-sm"
    >
      <div className="relative flex max-h-[85vh] w-full max-w-xl flex-col border border-primary/20 bg-card">
        <button
          type="button"
          onClick={closeSettings}
          aria-label={t.cookieSettings.close}
          className="absolute right-4 top-4 p-2 text-foreground/70 transition-colors hover:text-primary"
        >
          <X className="size-5" />
        </button>

        <div className="overflow-y-auto p-8">
          <h2 className="font-serif text-2xl text-foreground">{t.cookieSettings.title}</h2>
          <p className="mt-3 text-sm leading-relaxed text-foreground/70">
            {t.cookieSettings.description}
          </p>

          <div className="mt-8 flex flex-col gap-6">
            {categories.map((category) => (
              <div
                key={category.key}
                className="flex items-start justify-between gap-4 border-t border-primary/10 pt-6 first:border-t-0 first:pt-0"
              >
                <div>
                  <p className="text-sm font-semibold tracking-[0.1em] text-foreground uppercase">
                    {category.title}
                  </p>
                  <p className="mt-1.5 text-sm leading-relaxed text-foreground/65">
                    {category.text}
                  </p>
                  {category.disabled && (
                    <p className="mt-1.5 text-[11px] tracking-[0.1em] text-primary/70 uppercase">
                      {t.cookieSettings.alwaysOn}
                    </p>
                  )}
                </div>
                <ConsentToggle
                  checked={category.checked}
                  disabled={category.disabled}
                  label={category.title}
                  onChange={(value) =>
                    setDraft((prev) => ({ ...prev, [category.key]: value }) as typeof prev)
                  }
                />
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-end gap-3 border-t border-primary/10 p-6">
          <button
            type="button"
            onClick={rejectAll}
            className="border border-foreground/30 px-5 py-2.5 text-[13px] font-medium tracking-[0.08em] text-foreground uppercase transition-colors hover:border-primary hover:text-primary"
          >
            {t.cookieSettings.rejectAll}
          </button>
          <button
            type="button"
            onClick={acceptAll}
            className="border border-primary px-5 py-2.5 text-[13px] font-medium tracking-[0.08em] text-primary uppercase transition-colors hover:bg-primary hover:text-primary-foreground"
          >
            {t.cookieSettings.acceptAll}
          </button>
          <button
            type="button"
            onClick={() => savePreferences(draft)}
            className="bg-primary px-6 py-2.5 text-[13px] font-medium tracking-[0.08em] text-primary-foreground uppercase transition-colors hover:bg-primary/85"
          >
            {t.cookieSettings.save}
          </button>
        </div>
      </div>
    </div>
  )
}
