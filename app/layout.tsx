import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: '婚礼指南 | Wedding Guide',
  description: '欢迎来到我们的婚礼，请查收这份婚礼指南',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-CN">
      <body className="antialiased">{children}</body>
    </html>
  )
}
