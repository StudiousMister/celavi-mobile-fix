import type { Metadata } from 'next'
import { ImpressumContent } from '@/components/impressum-content'

export const metadata: Metadata = {
  title: 'Impressum — CÉ LA VI',
}

export default function ImpressumPage() {
  return <ImpressumContent />
}
