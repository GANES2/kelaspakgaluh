"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, Heart } from "lucide-react"
import Link from "next/link"

export function MobileNav() {
  const [open, setOpen] = useState(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" className="md:hidden">
          <Menu className="h-6 w-6" />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[300px] sm:w-[400px] p-6">
        <div className="flex flex-col space-y-4 mt-8">
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-10 h-10"></div>
            <div>
              <h2 className="text-xl font-bold bg-gradient-to-r from-pink-600 to-red-600 bg-clip-text text-transparent">
                Jejepangan
              </h2>
              <p className="text-xs text-gray-500">PakGaluh</p>
            </div>
          </div>

          <Link
            href="/"
            className="text-lg font-medium text-gray-700 hover:text-pink-600 transition-colors py-2"
            onClick={() => setOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/tentang"
            className="text-lg font-medium text-gray-700 hover:text-pink-600 transition-colors py-2"
            onClick={() => setOpen(false)}
          >
            Tentang Kami
          </Link>
          <Link
            href="#upcoming"
            className="text-lg font-medium text-gray-700 hover:text-pink-600 transition-colors py-2 cursor-pointer"
            onClick={(e) => {
              e.preventDefault()
              setOpen(false)
              const section = document.getElementById("upcoming")
              if (section) {
                section.scrollIntoView({ behavior: "smooth" })
              }
            }}
          >
            Event Mendatang
          </Link>
          <Link
            href="/galeri"
            className="text-lg font-medium text-gray-700 hover:text-pink-600 transition-colors py-2"
            onClick={() => setOpen(false)}
          >
            Galeri
          </Link>
        </div>
      </SheetContent>
    </Sheet>
  )
}
