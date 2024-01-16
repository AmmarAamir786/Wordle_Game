import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'

const pop = Poppins({ subsets: ['latin-ext'], weight: "500" })

export const metadata: Metadata = {
  title: 'Wordle App',
  description: 'Wordle App Assignment',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={pop.className}>{children}</body>
    </html>
  )
}
