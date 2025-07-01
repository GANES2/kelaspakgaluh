import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Galeri Kenangan - SenpaiSix Squad",
  description: "Dokumentasi foto-foto event Jejepangan yang sudah dihadiri SenpaiSix Squad",
}

export default function GaleriLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
