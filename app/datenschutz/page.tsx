import type { Metadata } from 'next'
import { DatenschutzContent } from '@/components/datenschutz-content'

export const metadata: Metadata = {
  title: 'Datenschutz — CÉ LA VI',
}

export default function DatenschutzPage() {
  return <DatenschutzContent />
}
