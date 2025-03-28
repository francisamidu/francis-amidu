import { createSignal, For } from "solid-js"
import { useIntersectionObserver } from "../hooks/useIntersectionObserver"

interface Tool {
  name: string
  icon: string
  color: string
}

export function Tooling() {
  const [ref, setRef] = createSignal<HTMLElement | null>(null)
  const isVisible = useIntersectionObserver(ref, { threshold: 0.1 })

  const tools: Tool[] = [
    { name: "HTML", icon: "html5", color: "bg-[#E34F26]" },
    { name: "CSS", icon: "css3", color: "bg-[#1572B6]" },
    { name: "JavaScript", icon: "javascript", color: "bg-[#F7DF1E]" },
    { name: "TypeScript", icon: "typescript", color: "bg-[#3178C6]" },
    { name: "Node.js", icon: "nodejs", color: "bg-[#339933]" },
    { name: "React", icon: "react", color: "bg-[#61DAFB]" },
    { name: "SolidJS", icon: "solid", color: "bg-[#2C4F7C]" },
    { name: "Tailwind", icon: "tailwindcss", color: "bg-[#06B6D4]" },
    { name: "Vite", icon: "vite", color: "bg-[#646CFF]" },
  ]

  return (
    <section id="tooling" class="py-24 bg-slate-900" ref={setRef}>
      <div class="container mx-auto px-4 md:px-6">
        <div class="flex flex-col md:flex-row gap-12 items-start">
          <div class="md:w-1/3">
            <h2
              class={`text-3xl md:text-4xl font-bold mb-6 transition-all duration-700 ${
                isVisible() ? "opacity-100 transform-none" : "opacity-0 translate-y-8"
              }`}
            >
              <span class="text-maroon-400">&lt;</span>
              Tooling
              <span class="text-maroon-400">/&gt;</span>
            </h2>
            <p
              class={`text-white/70 text-lg transition-all duration-700 delay-300 ${
                isVisible() ? "opacity-100 transform-none" : "opacity-0 translate-y-8"
              }`}
            >
              I specialize in modern web technologies that enable me to build fast, responsive, and reliable
              applications. Here's my tech stack that I use to bring beautiful UI experiences to life.
            </p>
          </div>

          <div class="md:w-2/3 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-6">
            <For each={tools}>
              {(tool, index) => (
                <div
                  class={`flex flex-col items-center transition-all duration-700 ${
                    isVisible() ? "opacity-100 transform-none" : "opacity-0 translate-y-8"
                  }`}
                  style={{ "transition-delay": `${300 + index() * 100}ms` }}
                >
                  <div
                    class={`w-16 h-16 md:w-20 md:h-20 rounded-xl flex items-center justify-center mb-3 bg-slate-800 hover:${tool.color} transition-colors duration-300 group`}
                  >
                    <i
                      class={`devicon-${tool.icon}-plain text-3xl md:text-4xl text-white/80 group-hover:text-white`}
                    ></i>
                  </div>
                  <span class="text-sm font-medium">{tool.name}</span>
                </div>
              )}
            </For>
          </div>
        </div>
      </div>
    </section>
  )
}

