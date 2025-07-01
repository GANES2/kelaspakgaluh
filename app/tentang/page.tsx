"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { usePathname } from "next/navigation"
import { Heart, Instagram, Sparkles } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

export default function TentangKami() {
  const [hoveredMember, setHoveredMember] = useState<number | null>(null)
  const pathname = usePathname();

  const teamMembers = [
      {
      name: "Kanesu",
      nickname: "MAHASIGMA",
      bio: "ingin menjadi penjelajah event jejepangan luar kota",
      favoriteCharacter: "Wanderer ( Genshin Impact)",
      instagram: "@kanesuuu_",
      avatar: "/GANES.jpg",
      color: "from-blue-400 to-blue-600",
      bgColor: "bg-gray-800/50",
      funFact: "BOCIL ROBLOX",
    },
    {
      name: "Yoon",
      nickname: "MAHASIGMA",
      bio: "jago statistik",
      favoriteCharacter: "Kazuha ( Genshin Impact)",
      instagram: "@yoon.kun_",
      avatar: "/Dion.jpg",
      color: "from-pink-400 to-red-500",
      bgColor: "bg-gray-800/50",
      funFact: "bisa bikin cacing",
    },
    {
      name: "Mina",
      nickname: "MAHASIGMA",
      bio: "Ratu detail dan ilustrator animeh",
      favoriteCharacter: "Mizuki (Project Sekai)",
      instagram: "@yaeayu",
      avatar: "/Sedny Zomo.jpg",
      color: "from-yellow-400 to-orange-500",
      bgColor: "bg-gray-800/50",
      funFact: "punya 1000+ gambar suami(kami sudah menikah dari tanggal 02 februari 2022)",
    },
    {
      name: "Galuh",
      nickname: "PHOTOGRAFHY",
      bio: "aku rajin mengocok dan mencari bahan nya di internet.",
      favoriteCharacter: "Sumanto ( Mutilasi)",
      instagram: "@galuh_photografhy",
      avatar: "/Galuh1.jpg",
      color: "from-green-400 to-teal-500",
      bgColor: "bg-gray-800/50",
      funFact: "mengoleksi video porn 1M",
    },
    {
      name: "Kageno",
      nickname: "SUHU COSPLAYER",
      bio: "Master Cosplay",
      favoriteCharacter: "Gojo Satoru (Jujutsu Kaisen)",
      instagram: "@kageno.cos",
      avatar: "/Kageno.jpg",
      color: "from-purple-400 to-indigo-500",
      bgColor: "bg-gray-800/50",
      funFact: "effort dalam bercosplay",
    },
    {
      name: "Adit",
      nickname: "The Photographer",
      bio: "Fotografer resmi grup! Semua foto kece kami hasil jepretan Adit. Master angle foto 📸",
      favoriteCharacter: "Makoto (Your Name)",
      instagram: "@adit_photos",
      avatar: "/placeholder.svg?height=200&width=200",
      color: "from-red-400 to-pink-500",
      bgColor: "bg-gray-800/50",
      funFact: "Udah foto 1000+ moment grup",
    },
  ]

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-16 h-16 bg-pink-200 rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute top-40 right-20 w-12 h-12 bg-red-200 rounded-full opacity-20 animate-pulse delay-1000"></div>
      <div className="absolute bottom-32 left-1/3 w-20 h-20 bg-pink-300 rounded-full opacity-20 animate-pulse delay-2000"></div>

      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md shadow-sm border-b border-pink-200 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-3">
              <div className="w-12 h-12 rounded-full flex items-center justify-center shadow-lg overflow-hidden">
                <img src="/Logo Jejepangan Pak Galuh.jpg" alt="Logo Jejepangan Pak Galuh" className="w-10 h-10 object-contain" />
              </div>
              <div className="flex flex-col leading-tight">
                <h1 className="text-2xl font-bold text-black">
                  Jejepangan
                </h1>
                <p className="text-xs text-gray-500">
                  PakGaluh
                </p>
              </div>
            </Link>

              <nav className="hidden md:flex space-x-6">
                <Link href="/" className="text-gray-600 hover:text-pink-600 font-medium transition-colors">
                  Home
                </Link>
                <Link
                  href="#"
                  className="font-medium"
                  style={{ color: pathname === "/tentang" ? "black" : "#FFD700" }}
                >
                  Tentang Kami
                </Link>
                <Link href="/galeri" className="text-gray-600 hover:text-pink-600 font-medium transition-colors">
                  Galeri
                </Link>
              </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto text-center">
          <div className="mb-8">
            <Image
              src="/Gambar WhatsApp 2025-06-25 pukul 14.37.47_23b297d1.jpg"
              alt="SenpaiSix Squad - Meet the Team"
              width={600}
              height={400}
              className="mx-auto rounded-3xl shadow-2xl border-4 border-white"
            />
          </div>
          <h2 className="text-5xl font-extrabold text-white mb-4 drop-shadow-lg">
            SELAMAT DATANG DI <br />
            <span className="text-white drop-shadow-lg">SENPAI PAK GALUH</span>! ✨
          </h2>
          <p className="text-xl text-white mb-8 max-w-3xl mx-auto drop-shadow-md">
            Ini Website Kami Ber 6 Khusus Untuk DOKUMENTASI Event Jejepangan!🌸
          </p>
        </div>
      </section>

      {/* Team Members */}
      <section className="py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card
                key={index}
                className={`overflow-hidden hover:shadow-2xl transition-all duration-500 border-2 hover:border-pink-300 bg-white/20 bg-gradient-to-r bg-opacity-40 ${member.color}/40 transform hover:-translate-y-3 hover:rotate-1 cursor-pointer`}
                onMouseEnter={() => setHoveredMember(index)}
                onMouseLeave={() => setHoveredMember(null)}
              >
                <div className={`h-3 bg-gradient-to-r ${member.color}/40`}></div>
                <CardContent className="p-8 text-center relative">
                  {hoveredMember === index && (
                    <div className="absolute top-4 right-4">
                      <Sparkles className="w-6 h-6 text-white animate-spin" />
                    </div>
                  )}

                  <div className="relative mb-6">
                    <Image
                      src={member.avatar || "/placeholder.svg"}
                      alt={member.name}
                      width={120}
                      height={120}
                      className="rounded-full mx-auto border-4 border-white shadow-xl object-cover aspect-square"
                    />
                    <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2">
                      <Badge className={`bg-gradient-to-r ${member.color} text-white border-0 shadow-lg px-3 py-1`}>
                        {member.nickname}
                      </Badge>
                    </div>
                  </div>

                  <h4 className="text-2xl font-bold text-gray-800 mb-4 mt-2">{member.name}</h4>

                  <div className="bg-white/20 bg-opacity-20 backdrop-blur-sm rounded-xl p-4 mb-4 border border-pink-100">
                    <p className="text-gray-700 text-sm leading-relaxed italic font-medium">"{member.bio}"</p>
                  </div>

                  <div className="space-y-3 mb-6">
                    <div className="bg-white/20 bg-opacity-20 backdrop-blur-sm rounded-lg p-3 border border-pink-100">
                      <p className="text-xs text-gray-500 mb-1 font-semibold">Karakter Favorit</p>
                      <p className="font-bold text-gray-800">{member.favoriteCharacter}</p>
                    </div>

                    <div className="bg-white/20 bg-opacity-20 backdrop-blur-sm rounded-lg p-3 border border-pink-100">
                      <p className="text-xs text-gray-500 mb-1 font-semibold">Fun Fact</p>
                      <p className="font-semibold text-gray-700 text-sm">{member.funFact}</p>
                    </div>

                    <Button
                      className={`w-full bg-gradient-to-r ${member.color} text-white hover:shadow-lg transition-all font-semibold`}
                      asChild
                    >
                      <a
                        href={`https://instagram.com/${member.instagram.replace("@", "")}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Instagram className="w-4 h-4 mr-2" />
                        {member.instagram}
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 px-4 bg-white/60 backdrop-blur-sm">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-4xl font-bold text-gray-800 mb-8">
              Cerita <span className="text-pink-600">Pertemanan</span> Kami 💕
            </h3>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <Card className="border-2 border-pink-200 bg-white/80 backdrop-blur-sm hover:shadow-xl transition-all">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-pink-400 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🌸</span>
                  </div>
                  <h4 className="font-bold text-lg mb-2 text-gray-800">2024 : Awal Mula</h4>
                  <p className="text-gray-600 text-sm">
                    bertemu di Tangcity Mall & Home YonnKun
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-red-200 bg-white/80 backdrop-blur-sm hover:shadow-xl transition-all">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-red-400 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🎌</span>
                  </div>
                  <h4 className="font-bold text-lg mb-2 text-gray-800">2024-2025 Makin Solid</h4>
                    <p className="text-gray-600 text-sm">
                      Mulai rutin Meet  walau sering nya meet melalui VC grup karna kami kuliah & kerja
                    </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-pink-200 bg-white/80 backdrop-blur-sm hover:shadow-xl transition-all">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-pink-400 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">✨</span>
                  </div>
                  <h4 className="font-bold text-lg mb-2 text-gray-800">2025 : Jejepangan Pak Galuh</h4>
                    <p className="text-gray-600 text-sm">
                      Officially jadi "Jejepangan Pak Galuh" dan bikin website ini sebagai dokumentasi pertemanan!
                    </p>
                </CardContent>
              </Card>
            </div>

            <div className="bg-gradient-to-r from-pink-100 to-red-100 rounded-2xl p-8 border-2 border-pink-200">
              <h4 className="text-2xl font-bold text-gray-800 mb-4">Motto Kami</h4>
              <p className="text-xl text-gray-700 italic font-medium mb-4">
                "Selalu bareng walau dompet menjerit" 💸✨
              </p>
              <p className="text-gray-600">
                Karena passion untuk anime dan persahabatan lebih berharga dari apapun! Event mahal? Patungan! Cosplay
                ribet? Bantuin! Foto jelek? Edit bareng! 😄
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <div className="w-10 h-10 rounded-full flex items-center justify-center overflow-hidden shadow-lg">
              <img src="/Logo Jejepangan Pak Galuh.jpg" alt="Logo Jejepangan Pak Galuh" className="w-10 h-10 object-contain" />
            </div>
              <div className="flex flex-col leading-tight">
                <h4 className="text-2xl font-bold text-white">
                  Jejepangan
                </h4>
                <p className="text-sm text-gray-400">PakGaluh</p>
              </div>
          </div>

          <p className="text-gray-300 mb-6 italic">"Friendship goals: Always together in every anime event!" 🌟</p>

          <div className="border-t border-gray-700 pt-6">
            <p className="text-gray-400 text-sm">&copy; 2025 Jejepangan PakGaluh. BY KANESU❤️</p>
            <p className="text-gray-500 text-xs mt-2">Kanesu • Yoon • Sendy • Galuh • Kageno • Adit</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
