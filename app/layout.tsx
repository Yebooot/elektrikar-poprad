import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Elektrikár Poprad',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="sk" className="dark">
      <body>{children}</body>
    </html>
  )
}
