import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Dice Bot Dashboard',
  description: 'Dashboard pour Dice Bot - Bot Discord complet',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  )
}
