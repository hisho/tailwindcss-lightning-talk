import type { ReactNode } from 'react'

import '@/src/app/app.css'
import { Metadata } from 'next'

export const metadata: Metadata = {
  robots: {
    follow: false,
    index: false,
  },
  title: 'Tailwind CSS LT',
}

type Props = {
  children: ReactNode
}

export default function ({ children }: Props) {
  return (
    <html>
      <head />
      <body>{children}</body>
    </html>
  )
}
