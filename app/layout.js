"use client"
import { Inter } from 'next/font/google'
import './globals.css'
import { Inter as FontSans } from "next/font/google"
import { UserProvider } from './components/UserContext.js'

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})




const inter = Inter({ subsets: ['latin'] })



export default function RootLayout({ children }) {
  
  return (
    <html lang="en">
      <UserProvider>
      <body className={`${inter.className} font-sans`} >
        {children}
      </body>
      </UserProvider>
    </html>
  )
}

