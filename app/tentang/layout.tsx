import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Tentang Kami - SenpaiSix Squad",
  description: "Kenali 6 anggota SenpaiSix Squad: Ganes, Dion, Sendy, Galuh, Kageno, dan Adit",
}

export default function TentangLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
