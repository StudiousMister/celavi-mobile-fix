'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import { useLanguage } from '@/lib/i18n/language-context'
import { LanguageSwitcher } from '@/components/language-switcher'

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const { t } = useLanguage()

  const NAV_LINKS = [
    { label: t.nav.home, href: '#home' },
    { label: t.nav.experience, href: '#experience' },
    { label: t.nav.about, href: '#about' },
    { label: t.nav.contact, href: '#visit' },
  ]

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-colors duration-500',
        scrolled || open
          ? 'border-b border-primary/10 bg-background'
          : 'border-b border-transparent bg-transparent',
      )}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-10">
        <Link href="#home" className="flex items-center gap-2.5">
          <span className="relative block h-10 w-[145px] overflow-hidden lg:h-[50px] lg:w-[180px]">
            <Image
              src="/images/official-logo-transparent.png"
              alt="CÉ LA VI Shisha Bar Lounge Logo"
              fill
              sizes="(min-width: 1024px) 180px, 145px"
              className="object-cover object-center"
            />
          </span>
        </Link>

        <nav className="hidden items-center gap-9 lg:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[13px] font-medium tracking-[0.08em] text-foreground/80 uppercase transition-colors hover:text-primary"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <LanguageSwitcher />
          <a
            href="#visit"
            className="rounded-none border border-primary px-6 py-2.5 text-[13px] font-medium tracking-[0.1em] text-primary uppercase transition-colors hover:bg-primary hover:text-primary-foreground"
          >
            {t.nav.requestTable}
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? t.nav.menuClose : t.nav.menuOpen}
          aria-expanded={open}
          className="inline-flex items-center justify-center p-2 text-foreground lg:hidden"
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      <div
        className={cn(
          'grid overflow-hidden transition-all duration-300 lg:hidden',
          open ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0 pointer-events-none',
        )}
      >
        <div className="min-h-0">
          <nav className="flex flex-col gap-1 border-t border-primary/10 bg-background px-6 py-6">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="py-3 text-sm font-medium tracking-[0.08em] text-foreground/85 uppercase transition-colors hover:text-primary"
            >
              {link.label}
            </a>
          ))}
          <div className="mt-2 flex items-center justify-between border-t border-primary/10 py-4">
            <span className="text-xs font-medium tracking-[0.15em] text-foreground/60 uppercase">
              Language
            </span>
            <LanguageSwitcher />
          </div>
          <a
            href="#visit"
            onClick={() => setOpen(false)}
            className="mt-3 rounded-none border border-primary px-6 py-3 text-center text-[13px] font-medium tracking-[0.1em] text-primary uppercase"
          >
            {t.nav.requestTable}
          </a>
        </nav>
        </div>
      </div>
    </header>
  )
}
