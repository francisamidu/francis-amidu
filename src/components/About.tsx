import { createSignal } from "solid-js"
import { Button } from "./ui/button"
import { useIntersectionObserver } from "../hooks/useIntersectionObserver"
import { FileText, Github, Linkedin, Twitter } from "lucide-solid"

export function About() {
  const [ref, setRef] = createSignal<HTMLElement | null>(null)
  const isVisible = useIntersectionObserver(ref, { threshold: 0.1 })

  return (
    <section id="about" class="py-24 bg-slate-950" ref={setRef}>
      <div class="container mx-auto px-4 md:px-6">
        <div class="flex flex-col lg:flex-row gap-12 items-center">
          <div
            class={`lg:w-1/2 transition-all duration-700 ${
              isVisible() ? "opacity-100 transform-none" : "opacity-0 translate-x-8"
            }`}
          >
            <div class="relative">
              <div class="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-maroon-500"></div>
              <div class="absolute -bottom-4 -right-4 w-24 h-24 border-b-2 border-r-2 border-maroon-500"></div>
              <div class="bg-maroon-900/20 p-2">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/screencapture-francis-amidu-surge-sh-2025-03-24-14_54_00-1DhTsKNkuwTzjIJb5SijDpwFKxo5eQ.png"
                  alt="Francis Amidu"
                  class="w-full h-auto grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
            </div>
          </div>

          <div
            class={`lg:w-1/2 transition-all duration-700 delay-300 ${
              isVisible() ? "opacity-100 transform-none" : "opacity-0 translate-x-8"
            }`}
          >
            <h2 class="text-3xl md:text-4xl font-bold mb-6">ABOUT</h2>
            <div class="space-y-4 text-white/80">
              <p>
                Hello! My name is Francis and I love building <span class="text-maroon-400 font-bold">Fast</span> web
                apps.
              </p>
              <p>I enjoy turning ideas and opportunities into software solutions that don't waste people's time.</p>
              <p>
                During the years I've had the chance to work with HTML, CSS and JavaScript for the frontend. I also have
                fullstack experience with Node.js but I spend more time bringing to life beautiful UI experiences.
              </p>
            </div>

            <div class="mt-8 flex flex-wrap gap-4">
              <Button class="bg-maroon-600 hover:bg-maroon-700 text-white">
                <FileText class="mr-2 h-4 w-4" />
                Download Resume
              </Button>
              <div class="flex gap-3">
                <Button
                  variant="outline"
                  size="icon"
                  class="rounded-full border-slate-700 hover:border-white hover:bg-slate-800"
                >
                  <Github class="h-5 w-5" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  class="rounded-full border-slate-700 hover:border-white hover:bg-slate-800"
                >
                  <Linkedin class="h-5 w-5" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  class="rounded-full border-slate-700 hover:border-white hover:bg-slate-800"
                >
                  <Twitter class="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

