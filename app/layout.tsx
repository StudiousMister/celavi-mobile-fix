import type { Metadata, Viewport } from 'next'
import { Playfair_Display, Manrope } from 'next/font/google'
import { Providers } from '@/components/providers'
import './globals.css'

const _playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  weight: ['500', '600', '700'],
})
const _manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
})

export const metadata: Metadata = {
  title: 'CÉ LA VI — Shisha • Bar • Lounge in Zug',
  description:
    'CÉ LA VI ist die Shisha, Bar & Lounge mitten in Zug. Premium Shisha, Cocktails und Lounge-Atmosphäre an der Baarerstrasse 52.',
  generator: 'v0.app',
  keywords: ['Shisha Zug', 'Bar Zug', 'Lounge Zug', 'CÉ LA VI', 'Shisha Bar Lounge'],
  icons: {
    icon: [{ url: '/brand-favicon.svg', type: 'image/svg+xml' }],
    apple: '/brand-favicon.svg',
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#0a0908',
  userScalable: true,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="de" className={`dark bg-background ${_playfair.variable} ${_manrope.variable}`}>
      <body className="antialiased font-sans">
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
