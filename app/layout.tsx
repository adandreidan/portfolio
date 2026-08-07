import type React from "react"
import type { Metadata } from "next"
import { EB_Garamond } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Nav } from "@/components/nav"
import "./globals.css"

const garamond = EB_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-garamond",
})

export const metadata: Metadata = {
  title: "Andrei Dan",
  description:
    "Andrei Dan — Computer Science student at the University of Waterloo focused on AI and software engineering.",
  generator: "Andrei Dan",
  metadataBase: new URL("https://www.andreidan.ca"),
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={garamond.variable}>
      <body className="font-serif antialiased bg-background text-foreground">
        <Nav />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
