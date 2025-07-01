"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Instagram } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"
import { MobileNav } from "@/components/mobile-nav"

const basePath = "/KELAS-PAK-GALUH"

export default function HomePage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const upcomingEvents = [
    {
      id: 1,
      title: "Comic Frontier 17",
      date: "28-29 Desember 2024",
      location: "Jakarta Convention Center",
      type: "Comic Convention",
      image: `${basePath}/placeholder.svg?height=200&width=300`,
    },
    {
      id: 2,
      title: "Ennichisai 2024",
      date: "15 Januari 2025",
      location: "Blok M Square",
      type: "Japanese Festival",
      image: `${basePath}/placeholder.svg?height=200&width=300`,
    },
    {
      id: 3,
      title: "Anime Festival Asia Jakarta",
      date: "22-24 Februari 2025",
      location: "ICE BSD",
      type: "Anime Convention",
      image: `${basePath}/placeholder.svg?height=200&width=300`,
    },
  ]

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-pink-200 rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute top-32 right-20 w-16 h-16 bg-red-200 rounded-full opacity-20 animate-pulse delay-1000"></div>
      <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-pink-300 rounded-full opacity-20 animate-pulse delay-2000"></div>

      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md shadow-sm border-b-2 border-yellow-400 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 rounded-full flex items-center justify-center overflow-hidden shadow-lg">
                <Image
                  src="/Logo Jejepangan Pak Galuh.jpg"
                  alt="Jejepangan PakGaluh"
                  width={40}
                  height={40}
                  className="object-contain"
                />
              </div>
              <div>
                <h4 className="text-2xl font-bold text-black">Jejepangan</h4>
                <p className="text-sm text-gray-400">PakGaluh</p>
              </div>
            </div>
            <nav className="hidden md:flex space-x-6">
              <Link href="/" className="text-gray-600 hover:text-blue-600 font-semibold hover:underline transition-all duration-300">Home</Link>
              <Link href="/tentang" className="text-gray-600 hover:text-blue-600 font-semibold hover:underline transition-all duration-300">Tentang Kami</Link>
              <a href="#upcoming" onClick={(e) => { e.preventDefault(); const section = document.getElementById("upcoming"); if (section) section.scrollIntoView({ behavior: "smooth" }) }} className="cursor-pointer text-gray-600 hover:text-blue-600 font-semibold hover:underline transition-all duration-300">Event Mendatang</a>
              <Link href="/galeri" className="text-gray-600 hover:text-blue-600 font-semibold hover:underline transition-all duration-300">Galeri</Link>
            </nav>
            <div className="flex items-center space-x-2">
              <Button className="hidden md:block bg-blue-600 hover:bg-blue-700" asChild>
                <Link href="/tentang">Kenali Kami</Link>
              </Button>
              <MobileNav />
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 relative">
        <div className="container mx-auto text-center">
          <div className={`mb-8 transform transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}>
            <div className="relative inline-block">
              <Image
                src="/Gambar WhatsApp 2025-06-25 pukul 14.37.47_23b297d1.jpg"
                alt="6 Sahabat"
                width={600}
                height={600}
                className="mx-auto rounded-3xl shadow-2xl border-4 border-white object-cover"
              />
              <div className="absolute -top-4 -right-4 bg-pink-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg animate-bounce">
                6 Sahabat! ✨
              </div>
            </div>
          </div>

          <div className={`transform transition-all duration-1000 delay-300 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}>
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
              Kami <span className="bg-gradient-to-r from-white to-white bg-clip-text text-transparent">6 Sahabat</span>,<br />
              Menjelajah Event <span className="bg-gradient-to-r from-white to-white bg-clip-text text-transparent">Jejepangan</span><br />
              di Jabodetabek! 🌸
            </h2>
            <p className="text-xl text-white mb-8 max-w-3xl mx-auto leading-relaxed drop-shadow-md">
              Kelas PakGaluh Berdomisili Dari Tangerang Kota📍
            </p>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-12 px-4 bg-white/60 backdrop-blur-sm">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="bg-white/80 rounded-2xl p-6 shadow-lg border border-pink-100">
              <h4 className="text-3xl font-bold text-pink-600 mb-2">25+</h4>
              <p className="text-gray-600 font-medium">Event Dihadiri</p>
            </div>
            <div className="bg-white/80 rounded-2xl p-6 shadow-lg border border-red-100">
              <h4 className="text-3xl font-bold text-red-600 mb-2">500+</h4>
              <p className="text-gray-600 font-medium">Foto Kenangan</p>
            </div>
            <div className="bg-white/80 rounded-2xl p-6 shadow-lg border border-pink-100">
              <h4 className="text-3xl font-bold text-pink-600 mb-2">3+</h4>
              <p className="text-gray-600 font-medium">Tahun Bersama</p>
            </div>
            <div className="bg-white/80 rounded-2xl p-6 shadow-lg border border-red-100">
              <h4 className="text-3xl font-bold text-red-600 mb-2">∞</h4>
              <p className="text-gray-600 font-medium">Kenangan Indah</p>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section id="upcoming" className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold text-white mb-4">Event yang Akan <span className="text-white">Kami Hadiri</span> 🎌</h3>
            <p className="text-lg text-white max-w-2xl mx-auto">Ini dia event-event Jejepangan yang udah kami mark di kalender! Siapa tau ketemu kalian di sana~</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {upcomingEvents.map((event, index) => (
              <Card key={event.id} className={`overflow-hidden hover:shadow-2xl transition-all duration-300 border-2 hover:border-pink-300 bg-white/80 backdrop-blur-sm transform hover:-translate-y-2 ${index % 2 === 0 ? "hover:rotate-1" : "hover:-rotate-1"}`}>
                <div className="relative">
                  <Image src={event.image} alt={event.title} width={300} height={200} className="w-full h-48 object-cover" />
                  <Badge className="absolute top-3 right-3 bg-gradient-to-r from-pink-500 to-red-500 text-white border-0">{event.type}</Badge>
                  <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
                    <span className="text-sm font-semibold text-gray-700">📅 Soon!</span>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h4 className="text-xl font-bold text-gray-800 mb-3">{event.title}</h4>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-gray-600">
                      <Calendar className="w-4 h-4 text-pink-500" />
                      <span className="text-sm">{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <MapPin className="w-4 h-4 text-red-500" />
                      <span className="text-sm">{event.location}</span>
                    </div>
                  </div>
                  <Button size="sm" className="w-full bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600 text-white">Lihat Detail Event</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 bg-gradient-to-r from-pink-500 via-red-500 to-pink-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto text-center relative z-10">
          <h3 className="text-4xl font-bold text-white mb-4">Temui Kami di Event Berikutnya! 🌟</h3>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Kalau kalian lihat 6 orang yang lagi foto bareng di event anime, itu mungkin kami! Say hi ya~ 👋
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-pink-600 hover:bg-gray-100 font-semibold shadow-lg hover:shadow-xl transition-all">
              <Instagram className="w-5 h-5 mr-2" />
              Follow Instagram Kami
            </Button>
            <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold" asChild>
              <Link href="/tentang">
                <Calendar className="w-5 h-5 mr-2" />
                Kenali Tim Kami
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 relative">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <div className="w-10 h-10 rounded-full flex items-center justify-center overflow-hidden shadow-lg">
              <Image
                src="/Logo Jejepangan Pak Galuh.jpg"
                alt="Jejepangan PakGaluh"
                width={40}
                height={40}
                className="object-contain"
              />
            </div>
            <div>
              <h4 className="text-2xl font-bold text-white">Jejepangan</h4>
              <p className="text-sm text-gray-400">PakGaluh</p>
            </div>
          </div>
          <p className="text-gray-300 mb-6 max-w-md mx-auto italic">"Selalu bareng walau dompet menjerit" 💸✨</p>
          <div className="border-t border-gray-700 pt-6">
            <p className="text-gray-400 text-sm">&copy; 2025 Jejepangan PakGaluh. BY KANESU <span className="text-red-500">❤️</span></p>
            <p className="text-gray-500 text-xs mt-2">Kanesu • Yoon • Sendy • Galuh • Kageno • Adit</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
