import { createSignal, For } from "solid-js"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card"
import { Button } from "./ui/button"
import { Badge } from "./ui/badge"
import { Github, ExternalLink, ArrowRight } from "lucide-solid"
import { useIntersectionObserver } from "../hooks/useIntersectionObserver"

interface Project {
  id: string
  title: string
  description: string
  image: string
  tags: string[]
  githubUrl: string
  liveUrl: string
}

export function Projects() {
  const [ref, setRef] = createSignal<HTMLElement | null>(null)
  const isVisible = useIntersectionObserver(ref, { threshold: 0.1 })

  const projects: Project[] = [
    {
      id: "medisync",
      title: "Medisync",
      description:
        "A modern and intuitive Health Terms Dashboard designed to simplify access to healthcare terminology.",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/screencapture-francis-amidu-surge-sh-2025-03-24-14_54_00-1DhTsKNkuwTzjIJb5SijDpwFKxo5eQ.png",
      tags: ["React", "TypeScript", "Tailwind CSS", "Healthcare"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
    },
    {
      id: "golf-fitting",
      title: "Golf Fitting",
      description:
        "The Golf Club Fitting Dashboard is designed to streamline the process of scheduling, managing, and analyzing golf club fittings.",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/screencapture-francis-amidu-surge-sh-2025-03-24-14_54_00-1DhTsKNkuwTzjIJb5SijDpwFKxo5eQ.png",
      tags: ["SolidJS", "TypeScript", "Tailwind CSS", "Sports"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
    },
    {
      id: "portfolio",
      title: "Portfolio Website",
      description:
        "My personal portfolio website showcasing my projects and skills, built with modern web technologies.",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/screencapture-francis-amidu-surge-sh-2025-03-24-14_54_00-1DhTsKNkuwTzjIJb5SijDpwFKxo5eQ.png",
      tags: ["SolidJS", "TypeScript", "Tailwind CSS", "Personal"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
    },
  ]

  return (
    <section id="projects" class="py-24 bg-black" ref={setRef}>
      <div class="container mx-auto px-4 md:px-6">
        <div class="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
          <div>
            <h2
              class={`text-3xl md:text-4xl font-bold mb-4 transition-all duration-700 ${
                isVisible() ? "opacity-100 transform-none" : "opacity-0 translate-y-8"
              }`}
            >
              Projects <span class="text-maroon-400">_</span>
            </h2>
            <p
              class={`text-white/70 text-lg max-w-xl transition-all duration-700 delay-200 ${
                isVisible() ? "opacity-100 transform-none" : "opacity-0 translate-y-8"
              }`}
            >
              Here are some of my recent projects that showcase my skills and expertise.
            </p>
          </div>
          <Button
            variant="ghost"
            class={`text-maroon-400 hover:text-maroon-300 group transition-all duration-700 delay-400 ${
              isVisible() ? "opacity-100 transform-none" : "opacity-0 translate-y-8"
            }`}
          >
            <span>View all projects</span>
            <ArrowRight class="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <For each={projects}>
            {(project, index) => (
              <Card
                class={`bg-slate-900 border-slate-800 hover:border-maroon-500/50 transition-all duration-500 overflow-hidden group transition-all duration-700 ${
                  isVisible() ? "opacity-100 transform-none" : "opacity-0 translate-y-8"
                }`}
                style={{ "transition-delay": `${400 + index() * 200}ms` }}
              >
                <div class="relative overflow-hidden h-48">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    class="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                  <div class="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-70"></div>
                </div>
                <CardHeader>
                  <div class="flex justify-between items-start">
                    <CardTitle class="text-xl font-bold">{project.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription class="text-white/70 mb-4">{project.description}</CardDescription>
                  <div class="flex flex-wrap gap-2 mt-4">
                    <For each={project.tags}>
                      {(tag) => (
                        <Badge variant="outline" class="bg-slate-800 text-white/80 border-slate-700">
                          {tag}
                        </Badge>
                      )}
                    </For>
                  </div>
                </CardContent>
                <CardFooter class="flex justify-between border-t border-slate-800 pt-4">
                  <Button variant="ghost" size="sm" class="text-white/70 hover:text-white">
                    <Github class="h-4 w-4 mr-2" />
                    <span>Code</span>
                  </Button>
                  <Button variant="ghost" size="sm" class="text-white/70 hover:text-white">
                    <ExternalLink class="h-4 w-4 mr-2" />
                    <span>Live Demo</span>
                  </Button>
                </CardFooter>
              </Card>
            )}
          </For>
        </div>
      </div>
    </section>
  )
}

