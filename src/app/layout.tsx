import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from './../components/Navbar'
import { ChakraProvider } from '@chakra-ui/react'
 
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Event Management',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      

      <head/>
      <body className={inter.className}>
      <ChakraProvider>
        <Navbar></Navbar>
        {children}
      </ChakraProvider>
      </body>
      
      
    </html>
  )
}