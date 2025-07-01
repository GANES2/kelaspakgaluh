import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import ParticleBackground from "./components/ParticleBackground"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "SenpaiSix - Jejepangan Squad",
  description: "Dokumentasi perjalanan 6 sahabat menjelajahi event Jejepangan di Jabodetabek",
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id">
      <head>
        {/* Hapus base path karena sudah tidak menggunakan subpath */}
        {/* <base href="/KELAS-PAK-GALUH/" /> */}
      </head>
      <body className={inter.className}>
        <ParticleBackground />
        <main className="relative z-10">{children}</main>
      </body>
    </html>
  )
}
