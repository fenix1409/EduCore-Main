import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono, Space_Grotesk } from "next/font/google"
import { Toaster } from "@/components/ui/sonner"
import "./globals.css"
import { AppContextProvider } from "@/context/AppContext"

const geist = Geist({ subsets: ["latin"] })
const geistMono = Geist_Mono({ subsets: ["latin"] })
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Educora — Learn. Grow. Achieve without limits.",
  description: "Educora helps learners master coding and AI faster with personalized learning journeys.",
  generator: "v0.app",
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${geist.className} bg-[#0C0C10] text-white antialiased selection:bg-cyan-400/20 selection:text-white`}
      >
        <AppContextProvider>
          {children}
          <Toaster />
        </AppContextProvider>
      </body>
    </html>
  )
}
