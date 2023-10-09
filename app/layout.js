import '../css/globals.css'
import { Inter } from 'next/font/google'

import NavMenu from '../components/NavMenu'
import Banner from '../components/Banner'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'CE Wallington',
  description: 'Taking God’s Divine Presence to the World’s Nations',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Banner />
        <NavMenu />
        {children}
        <Footer />
      </body>
    </html>
  )
}
