import Nav from '@/components/Nav'
import './globals.css'
import { Space_Grotesk } from 'next/font/google'

const font = Space_Grotesk({ subsets: ['latin'], weight: ['300','400'] })

export const metadata = {
  title: 'Sign In / Sign Up',
  description: 'Using nextjs, sequelize & postgres.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Nav />
        {children}
      </body>
    </html>
  )
}
