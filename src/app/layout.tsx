import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Footer, Navbar } from '@/app/components'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'HashtagHit',
  description: 'Created by Botenics',
}

export default  function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
 

  
  


  return (
    <html lang="en">
      <body className={inter.className}>
      <Navbar />

        {children}
      <Footer/>
        </body>
    </html>
  )
}



