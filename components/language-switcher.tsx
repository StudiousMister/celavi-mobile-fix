'use client'

import { useEffect, useRef, useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'
import { useLanguage } from '@/lib/i18n/language-context'
import { LANGUAGE_LABELS, type Language } from '@/lib/i18n/translations'

const LANGUAGES: Language[] = ['de', 'en']

export function LanguageSwitcher({ className }: { className?: string }) {
  const { language, setLanguage } = useLanguage()
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!open) return
    const onClick = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setOpen(false)
      }
    }
    document.addEventListener('click', onClick)
    return () => document.removeEventListener('click', onClick)
  }, [open])

  return (
    <div ref={ref} className={cn('relative', className)}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="listbox"
        aria-expanded={open}
        className="inline-flex items-center gap-1.5 border border-primary/30 px-3 py-2 text-[13px] font-medium tracking-[0.1em] text-foreground/80 uppercase transition-colors hover:border-primary hover:text-primary"
      >
        {language.toUpperCase()}
        <ChevronDown className={cn('size-3.5 transition-transform', open && 'rotate-180')} />
      </button>

      {open && (
        <div
          role="listbox"
          className="absolute right-0 top-full z-50 mt-2 min-w-[140px] border border-primary/15 bg-background/95 backdrop-blur-md"
        >
          {LANGUAGES.map((lang) => (
            <button
              key={lang}
              type="button"
              role="option"
              aria-selected={language === lang}
              onClick={() => {
                setLanguage(lang)
                setOpen(false)
              }}
              className={cn(
                'flex w-full items-center justify-between px-4 py-2.5 text-left text-[13px] tracking-[0.05em] transition-colors hover:bg-primary/10 hover:text-primary',
                language === lang ? 'text-primary' : 'text-foreground/80',
              )}
            >
              {LANGUAGE_LABELS[lang]}
              <span className="text-[11px] uppercase text-foreground/40">{lang}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
