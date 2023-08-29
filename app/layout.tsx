import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Magnetic Text (Demo)",
  description: "by @javitoshi",
  openGraph: {
    images: [
      {
        url: "https://magnetic-text.vercel.app/og.png",
      },
    ],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className + " bg-gradient-to-b from-slate-900 to-slate-700"}>{children}</body>
    </html>
  )
}
