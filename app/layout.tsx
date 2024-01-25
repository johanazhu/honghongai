import './globals.css'
import { Inter } from 'next/font/google'
import { GoogleAnalytics, UmamiAnalytics } from '@/components/Analytics'

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
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/site.webmanifest"></link>
      <meta
        name="description"
        content="哄哄模拟器开源版"
      />
      <meta
        property="og:description"
        content="哄哄模拟器开源版"
      />
      <meta property="og:title" content="哄哄模拟器开源版" />
      <meta
        name="twitter:description"
        content="哄哄模拟器开源版"
      />
      <meta
        property="og:image"
        content="https://hong.azhubaby.com/og-image.png"
      />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@JOJOhanbo" />
      <meta name="twitter:title" content="哄哄模拟器开源版" />
      <meta name="twitter:description" content="哄哄模拟器开源版" />
      <meta name="twitter:image" content="https://hong.azhubaby.com/og-image.png" />
      <meta name="twitter:creator" content="@JOJOhanbo" />

      {process.env.NODE_ENV === "development" ? (
        <></>
      ) : (
        <>
          <GoogleAnalytics />
          <UmamiAnalytics />
        </>
      )}
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
