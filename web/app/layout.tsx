import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Doctor Booking Page',
  description: 'Patients Portal for schedule appointments with doctors',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className='container mx-auto p-4'>
          {children}
        </div>
      </body>
    </html>
  )
}
