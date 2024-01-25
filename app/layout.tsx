import './globals.css'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: "我是哄哄模拟器的开源版，基于 Gemini AI + Next.js + Vercel 构建",
  description:
    "这是哄哄模拟器的开源版，基于 Gemini AI + Next.js + Vercel 构建"
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
