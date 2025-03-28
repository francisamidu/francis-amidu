"use client"

import { createSignal, onMount, onCleanup } from "solid-js"
import { Button } from "./ui/button"
import { Menu, X } from "lucide-solid"

export function Header() {
  const [isScrolled, setIsScrolled] = createSignal(false)
  const [isMenuOpen, setIsMenuOpen] = createSignal(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen())

  const handleScroll = () => {
    setIsScrolled(window.scrollY > 20)
  }

  onMount(() => {
    window.addEventListener("scroll", handleScroll)
  })

  onCleanup(() => {
    window.removeEventListener("scroll", handleScroll)
  })

  return (
    <header
      class={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled() ? "bg-slate-950/90 backdrop-blur-md py-3 shadow-lg" : "bg-transparent py-5"
      }`}
    >
      <div class="container mx-auto px-4 md:px-6">
        <div class="flex items-center justify-between">
          <a href="#" class="flex items-center gap-2">
            <div class="flex items-center justify-center w-10 h-10 rounded-full bg-maroon-600 text-white font-bold">
              FA
            </div>
            <span class="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-maroon-400">
              Francis Amidu
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav class="hidden md:flex items-center gap-8">
            <a href="#about" class="text-white/80 hover:text-white transition-colors">
              About
            </a>
            <a href="#tooling" class="text-white/80 hover:text-white transition-colors">
              Expertise
            </a>
            <a href="#contact" class="text-white/80 hover:text-white transition-colors">
              Contact
            </a>
            <Button variant="outline" class="border-maroon-500 text-white hover:bg-maroon-600">
              Resume
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <Button variant="ghost" size="icon" class="md:hidden text-white" onClick={toggleMenu}>
            {isMenuOpen() ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        class={`md:hidden absolute top-full left-0 right-0 bg-slate-950/95 backdrop-blur-md transition-all duration-300 ${
          isMenuOpen() ? "max-h-[300px] opacity-100" : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <nav class="flex flex-col gap-4 p-6">
          <a
            href="#about"
            class="text-white/80 hover:text-white transition-colors py-2"
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </a>
          <a
            href="#tooling"
            class="text-white/80 hover:text-white transition-colors py-2"
            onClick={() => setIsMenuOpen(false)}
          >
            Expertise
          </a>
          <a
            href="#contact"
            class="text-white/80 hover:text-white transition-colors py-2"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </a>
          <Button variant="outline" class="border-maroon-500 text-white hover:bg-maroon-600 w-full mt-2">
            Resume
          </Button>
        </nav>
      </div>
    </header>
  )
}

