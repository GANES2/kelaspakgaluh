"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Heart, Calendar, MapPin, Users, Camera, Filter } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

export default function GaleriPage() {
  const [selectedFilter, setSelectedFilter] = useState("All")
  const [selectedImage, setSelectedImage] = useState<any>(null)

  const eventCategories = [
    "All",
    "Comic Convention",
    "Japanese Festival",
    "Anime Convention",
    "Cosplay Competition",
    "Cultural Event",
  ]

  const galleryData = [
    {
      id: 1,
      title: "Comic Frontier 16",
      date: "23-24 Desember 2023",
      location: "Jakarta Convention Center",
      category: "Comic Convention",
      description: "Event comic terbesar! Kami cosplay grup Demon Slayer dan menang juara 3! 🏆",
      images: [
        {
          src: "/placeholder.svg?height=400&width=600",
          caption: "Grup cosplay Demon Slayer kami",
          photographer: "Adit",
        },
        {
          src: "/placeholder.svg?height=400&width=600",
          caption: "Sendy sebagai Zenitsu yang epic!",
          photographer: "Galuh",
        },
        {
          src: "/placeholder.svg?height=400&width=600",
          caption: "Booth hunting dan beli merchandise",
          photographer: "Adit",
        },
      ],
      highlight: true,
    },
    {
      id: 2,
      title: "Ennichisai 2023",
      date: "14 Januari 2023",
      location: "Blok M Square",
      category: "Japanese Festival",
      description: "Festival Jepang dengan suasana matsuri yang authentic! Yukata day! 👘",
      images: [
        {
          src: "/placeholder.svg?height=400&width=600",
          caption: "Semua pakai yukata, so aesthetic!",
          photographer: "Adit",
        },
        {
          src: "/placeholder.svg?height=400&width=600",
          caption: "Makan takoyaki bareng-bareng",
          photographer: "Dion",
        },
      ],
    },
    {
      id: 3,
      title: "Anime Festival Asia Jakarta 2023",
      date: "25-27 Agustus 2023",
      location: "ICE BSD",
      category: "Anime Convention",
      description: "AFA terbesar tahun ini! Ketemu voice actor favorit dan nonton concert! 🎤",
      images: [
        {
          src: "/placeholder.svg?height=400&width=600",
          caption: "Foto bareng voice actor Gojo!",
          photographer: "Adit",
        },
        {
          src: "/placeholder.svg?height=400&width=600",
          caption: "Concert LiSA yang bikin merinding",
          photographer: "Kageno",
        },
        {
          src: "/placeholder.svg?height=400&width=600",
          caption: "Hunting merchandise sampai kantong kering",
          photographer: "Adit",
        },
      ],
      highlight: true,
    },
    {
      id: 4,
      title: "Jakarta Japan Matsuri 2023",
      date: "2-3 September 2023",
      location: "Monas",
      category: "Cultural Event",
      description: "Matsuri di Monas! Suasana Jepang di tengah Jakarta. Ikut workshop origami! 🎋",
      images: [
        {
          src: "/placeholder.svg?height=400&width=600",
          caption: "Workshop origami, Galuh jago banget!",
          photographer: "Adit",
        },
        {
          src: "/placeholder.svg?height=400&width=600",
          caption: "Taiko drumming performance",
          photographer: "Sendy",
        },
      ],
    },
    {
      id: 5,
      title: "Cosplay Competition Gandaria City",
      date: "15 Oktober 2023",
      location: "Gandaria City Mall",
      category: "Cosplay Competition",
      description: "Kompetisi cosplay pertama kami! Dion cosplay Tanjiro, detail banget! ⚔️",
      images: [
        {
          src: "/placeholder.svg?height=400&width=600",
          caption: "Dion as Tanjiro - so detailed!",
          photographer: "Adit",
        },
        {
          src: "/placeholder.svg?height=400&width=600",
          caption: "Backstage preparation yang chaos",
          photographer: "Kageno",
        },
      ],
    },
      {
      id: 6,
      title: "Popcon Asia 2023",
      date: "5-7 Mei 2023",
      location: "ICE BSD",
      category: "Comic Convention",
      description: "Pop culture convention dengan banyak booth international! Kageno beli figure limited! 🎮",
      images: [
        {
          src: "/placeholder.svg?height=400&width=600",
          caption: "Kageno dengan koleksi figure barunya",
          photographer: "Adit",
        },
        {
          src: "/placeholder.svg?height=400&width=600",
          caption: "Booth international yang keren abis",
          photographer: "Ganes",
        },
        {
          src: "/Gambar WhatsApp 2025-06-25 pukul 14.37.47_23b297d1.jpg",
          caption: "GURU BANGKIT - PULIHKAN PENDIDIKAN",
          photographer: "SDS PT BPP AIRBALAM",
        },
      ],
    },
  ]

  const filteredGallery =
    selectedFilter === "All" ? galleryData : galleryData.filter((event) => event.category === selectedFilter)

  const allImages = galleryData.flatMap((event) =>
    event.images.map((img) => ({
      ...img,
      eventTitle: event.title,
      eventDate: event.date,
      eventLocation: event.location,
      category: event.category,
    })),
  )

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Section 6 Sahabat */}
      {/* Removed the 6 Sahabat label and section as requested */}
      <section className="relative max-w-full mx-auto mt-0 p-0 rounded-xl shadow-lg bg-white">
        <img
          src="/wallpaper di bagian Galeri.jpg"
          alt="Gallery Wallpaper"
          className="rounded-none w-full object-cover brightness-50"
          style={{ aspectRatio: "16 / 9" }}
        />
      </section>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-16 h-16 bg-pink-200 rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute top-40 right-20 w-12 h-12 bg-red-200 rounded-full opacity-20 animate-pulse delay-1000"></div>
      <div className="absolute bottom-32 left-1/4 w-20 h-20 bg-pink-300 rounded-full opacity-20 animate-pulse delay-2000"></div>

      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md shadow-sm border-b border-pink-200 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-3">
              <div className="w-12 h-12 rounded-full overflow-hidden shadow-lg">
                <img src="/Logo%20Jejepangan%20Pak%20Galuh.jpg" alt="Jejepangan PakGaluh" className="w-full h-full object-contain" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-black">
                  Jejepangan
                </h1>
                <p className="text-xs text-gray-500">PakGaluh</p>
              </div>
            </Link>
            <nav className="hidden md:flex space-x-6">
              <Link href="/" className="text-gray-600 hover:text-pink-600 font-medium transition-colors">
                Home
              </Link>
              <Link href="/tentang" className="text-gray-600 hover:text-pink-600 font-medium transition-colors">
                Tentang Kami
              </Link>
              <Link href="#" className="text-black font-medium">
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
            <Camera className="w-20 h-20 mx-auto text-pink-500 mb-4" />
          </div>
          <h2 className="text-5xl font-bold text-gray-800 mb-4">
            Galeri{" "}
            <span className="bg-gradient-to-r from-pink-500 to-red-500 bg-clip-text text-transparent">Kenangan</span>{" "}
            Kami 📸
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Dokumentasi perjalanan SenpaiSix menjelajahi event-event Jejepangan di Jabodetabek. Setiap foto punya cerita
            dan kenangan indah! ✨
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
            <div className="bg-white/60 backdrop-blur-sm rounded-xl p-4 border border-pink-100">
              <h4 className="text-2xl font-bold text-pink-600">{galleryData.length}+</h4>
              <p className="text-sm text-gray-600">Event Dihadiri</p>
            </div>
            <div className="bg-white/60 backdrop-blur-sm rounded-xl p-4 border border-red-100">
              <h4 className="text-2xl font-bold text-red-600">{allImages.length}+</h4>
              <p className="text-sm text-gray-600">Foto Kenangan</p>
            </div>
            <div className="bg-white/60 backdrop-blur-sm rounded-xl p-4 border border-pink-100">
              <h4 className="text-2xl font-bold text-pink-600">3+</h4>
              <p className="text-sm text-gray-600">Tahun Dokumentasi</p>
            </div>
            <div className="bg-white/60 backdrop-blur-sm rounded-xl p-4 border border-red-100">
              <h4 className="text-2xl font-bold text-red-600">∞</h4>
              <p className="text-sm text-gray-600">Momen Berharga</p>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 px-4 bg-white/60 backdrop-blur-sm">
        <div className="container mx-auto">
          <div className="flex flex-wrap justify-center gap-3">
            <div className="flex items-center gap-2 mb-4">
              <Filter className="w-5 h-5 text-gray-600" />
              <span className="font-medium text-gray-700">Filter by Category:</span>
            </div>
            {eventCategories.map((category) => (
              <Button
                key={category}
                onClick={() => setSelectedFilter(category)}
                variant={selectedFilter === category ? "default" : "outline"}
                size="sm"
                className={`transition-all ${
                  selectedFilter === category
                    ? "bg-gradient-to-r from-pink-500 to-red-500 text-white shadow-lg"
                    : "border-pink-300 text-pink-600 hover:bg-pink-50 bg-white/80"
                }`}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-12 px-4">
        <div className="container mx-auto">
          <div className="grid gap-8">
            {filteredGallery.map((event) => (
              <Card
                key={event.id}
                className={`overflow-hidden hover:shadow-2xl transition-all duration-500 border-2 bg-white/80 backdrop-blur-sm ${
                  event.highlight ? "border-pink-400 shadow-lg" : "border-pink-200 hover:border-pink-300"
                }`}
              >
                {event.highlight && (
                  <div className="bg-gradient-to-r from-pink-500 to-red-500 text-white text-center py-2">
                    <span className="font-semibold text-sm">✨ Highlight Event ✨</span>
                  </div>
                )}

                <CardContent className="p-6">
                  {/* Event Info */}
                  <div className="mb-6">
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <h3 className="text-2xl font-bold text-gray-800">{event.title}</h3>
                      <Badge className="bg-gradient-to-r from-pink-500 to-red-500 text-white border-0">
                        {event.category}
                      </Badge>
                    </div>

                    <div className="flex flex-wrap gap-4 text-gray-600 mb-3">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-pink-500" />
                        <span className="text-sm">{event.date}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-red-500" />
                        <span className="text-sm">{event.location}</span>
                      </div>
                    </div>

                    <p className="text-gray-700 italic">{event.description}</p>
                  </div>

                  {/* Photo Grid */}
                  <div
                    className={`grid gap-4 ${
                      event.images.length === 1
                        ? "grid-cols-1"
                        : event.images.length === 2
                          ? "grid-cols-1 md:grid-cols-2"
                          : "grid-cols-1 md:grid-cols-3"
                    }`}
                  >
                    {event.images.map((image, imgIndex) => (
                      <Dialog key={imgIndex}>
                        <DialogTrigger asChild>
                          <div className="relative group cursor-pointer overflow-hidden rounded-xl">
                            <Image
                              src={image.src || "/placeholder.svg"}
                              alt={image.caption}
                              width={400}
                              height={300}
                              className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                              <Camera className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </div>
                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                              <p className="text-white text-sm font-medium">{image.caption}</p>
                              <p className="text-white/80 text-xs">📸 by {image.photographer}</p>
                            </div>
                          </div>
                        </DialogTrigger>
                        <DialogContent className="max-w-4xl max-h-[90vh] p-0">
                          <DialogHeader className="p-6 pb-0">
                            <DialogTitle className="text-xl font-bold text-gray-800">{event.title}</DialogTitle>
                          </DialogHeader>
                          <div className="p-6 pt-0">
                            <Image
                              src={image.src || "/placeholder.svg"}
                              alt={image.caption}
                              width={800}
                              height={600}
                              className="w-full h-auto rounded-lg"
                            />
                            <div className="mt-4 space-y-2">
                              <p className="font-medium text-gray-800">{image.caption}</p>
                              <div className="flex items-center gap-4 text-sm text-gray-600">
                                <span>📸 Photographer: {image.photographer}</span>
                                <span>📅 {event.date}</span>
                                <span>📍 {event.location}</span>
                              </div>
                            </div>
                          </div>
                        </DialogContent>
                      </Dialog>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredGallery.length === 0 && (
            <div className="text-center py-16">
              <Camera className="w-16 h-16 mx-auto text-gray-400 mb-4" />
              <h3 className="text-xl font-semibold text-gray-600 mb-2">Belum ada foto untuk kategori ini</h3>
              <p className="text-gray-500">Coba pilih kategori lain atau tunggu event berikutnya! 📸</p>
            </div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 bg-gradient-to-r from-pink-500 via-red-500 to-pink-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto text-center relative z-10">
          <h3 className="text-4xl font-bold text-white mb-4">Mau Lihat Lebih Banyak? 📱</h3>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Follow Instagram kami untuk update foto-foto terbaru dari setiap event yang kami hadiri!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-pink-600 hover:bg-gray-100 font-semibold shadow-lg hover:shadow-xl transition-all"
            >
              <Users className="w-5 h-5 mr-2" />
              Follow @senpaisix
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-pink-600 bg-transparent font-semibold shadow-lg hover:shadow-xl transition-all"
              asChild
            >
              <Link href="/#upcoming">
                <Heart className="w-5 h-5 mr-2" />
                Lihat Event Mendatang
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <div className="w-10 h-10 bg-gradient-to-r from-pink-400 to-red-500 rounded-full flex items-center justify-center">
              <img src="/Logo%20Jejepangan%20Pak%20Galuh.jpg" alt="Jejepangan PakGaluh" className="w-6 h-6 object-contain" />
            </div>
            <div>
              <h4 className="text-2xl font-bold text-black">
                Jejepangan
              </h4>
              <p className="text-sm text-gray-400">PakGaluh</p>
            </div>
          </div>

          <p className="text-gray-300 mb-6 italic">"Selalu bareng walau dompet menjerit" 💸✨</p>

          <div className="border-t border-gray-700 pt-6">
            <p className="text-gray-400 text-sm">&copy; 2025 Jejepangan PakGaluh. BY KANESU <span className="text-red-500">❤️</span></p>
            <p className="text-gray-500 text-xs mt-2">Kanesu • Yoon • Sendy • Galuh • Kageno • Adit</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
