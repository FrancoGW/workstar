
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })
import Navitaion from './components/navigation'
import './global.css'
export const metadata = {
  title: 'SFT DEVELOPMENT',
  description: '',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" padding="0" margin='0'>
      <body className={inter.className} padding="0" margin='0'>
        <Navitaion/>
        {children}</body>
    </html>
  )
}
