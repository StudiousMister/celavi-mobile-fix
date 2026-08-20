'use client'

import Image from 'next/image'
import Link from 'next/link'
import { InstagramIcon } from '@/components/icons/instagram-icon'
import { FacebookIcon } from '@/components/icons/facebook-icon'
import { useLanguage } from '@/lib/i18n/language-context'
import { useCookieConsent } from '@/lib/consent/cookie-consent-context'

const LEGAL_LINKS = [
  { key: 'legal', href: '/impressum' },
  { key: 'privacy', href: '/datenschutz' },
]

export function SiteFooter() {
  const { t } = useLanguage()
  const { openSettings } = useCookieConsent()

  const FOOTER_LINKS = [
    { label: t.nav.home, href: '#home' },
    { label: t.nav.experience, href: '#experience' },
    { label: t.nav.about, href: '#about' },
    { label: t.nav.contact, href: '#visit' },
  ]

  const legalLabels: Record<string, string> = {
    legal: t.legalPage.heading,
    privacy: t.privacyPage.heading,
  }

  return (
    <footer className="bg-background">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="relative block h-[50px] w-[180px] overflow-hidden">
                <Image
                  src="/images/official-logo-transparent.png"
                  alt="CÉ LA VI Shisha Bar Lounge Logo"
                  fill
                  sizes="180px"
                  className="object-cover object-center"
                />
              </span>
            </div>
            <p className="mt-4 text-sm tracking-[0.1em] text-foreground/60 uppercase">
              {t.footer.tagline}
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold tracking-[0.2em] text-primary uppercase">
              {t.footer.contactLabel}
            </p>
            <p className="mt-4 text-sm leading-relaxed text-foreground/70">
              Baarerstrasse 52
              <br />
              6300 Zug
              <br />
              +41 78 800 26 61
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold tracking-[0.2em] text-primary uppercase">
              {t.footer.navigationLabel}
            </p>
            <ul className="mt-4 flex flex-col gap-2.5">
              {FOOTER_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-foreground/70 transition-colors hover:text-primary"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold tracking-[0.2em] text-primary uppercase">
              {t.footer.legalLabel}
            </p>
            <ul className="mt-4 flex flex-col gap-2.5">
              {LEGAL_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-foreground/70 transition-colors hover:text-primary"
                  >
                    {legalLabels[link.key]}
                  </Link>
                </li>
              ))}
              <li>
                <button
                  type="button"
                  onClick={openSettings}
                  className="text-left text-sm text-foreground/70 transition-colors hover:text-primary"
                >
                  {t.footer.cookieSettings}
                </button>
              </li>
            </ul>
            <div className="mt-5 flex flex-col gap-3">
              <a
                href="https://www.instagram.com/celavizug/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="CÉ LA VI auf Instagram"
                className="inline-flex items-center gap-2 text-sm text-foreground/70 transition-colors hover:text-primary"
              >
                <InstagramIcon className="size-4" />
                Instagram
              </a>
              <a
                href="https://www.facebook.com/CeLaViZug/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="CÉ LA VI auf Facebook"
                className="inline-flex items-center gap-2 text-sm text-foreground/70 transition-colors hover:text-primary"
              >
                <FacebookIcon className="size-4" />
                Facebook
              </a>
            </div>
          </div>
        </div>

        <div className="mt-14 border-t border-primary/10 pt-8">
          <p className="text-xs tracking-[0.05em] text-foreground/50">{t.footer.copyright}</p>
        </div>
      </div>
    </footer>
  )
}
