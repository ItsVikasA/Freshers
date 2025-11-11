import type { Metadata } from 'next'
import { Inter, Orbitron } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const orbitron = Orbitron({ subsets: ['latin'], variable: '--font-orbitron' })

export const metadata: Metadata = {
  title: 'CSE Freshers Party 2025 - Welcome Freshers!',
  description: 'Join us for an unforgettable CSE Freshers Party 2025. Experience amazing performances, games, food, and fun!',
  keywords: 'CSE, Freshers Party, 2025, Computer Science, Engineering, Welcome Event',
  authors: [{ name: 'CSE Department Student Committee' }],
  openGraph: {
    title: 'CSE Freshers Party 2025',
    description: 'Join us for an unforgettable freshers party!',
    type: 'website',
    images: ['/og-image.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CSE Freshers Party 2025',
    description: 'Join us for an unforgettable freshers party!',
  },
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} ${orbitron.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  )
}
