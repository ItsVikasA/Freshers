import type { Metadata } from 'next'
import { Space_Grotesk, Bebas_Neue, Poppins } from 'next/font/google'
import './globals.css'

const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-space' })
const bebasNeue = Bebas_Neue({ weight: '400', subsets: ['latin'], variable: '--font-bebas' })
const poppins = Poppins({ weight: ['300', '400', '500', '600', '700'], subsets: ['latin'], variable: '--font-poppins' })

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
      <body className={`${poppins.variable} ${bebasNeue.variable} ${spaceGrotesk.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  )
}
