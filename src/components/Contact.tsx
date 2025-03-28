"use client"

import { createSignal } from "solid-js"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Textarea } from "./ui/textarea"
import { useIntersectionObserver } from "../hooks/useIntersectionObserver"
import { Send, Mail } from "lucide-solid"

export function Contact() {
  const [ref, setRef] = createSignal<HTMLElement | null>(null)
  const isVisible = useIntersectionObserver(ref, { threshold: 0.1 })

  const [name, setName] = createSignal("")
  const [email, setEmail] = createSignal("")
  const [message, setMessage] = createSignal("")
  const [isSubmitting, setIsSubmitting] = createSignal(false)

  const handleSubmit = (e: Event) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setName("")
      setEmail("")
      setMessage("")
      alert("Message sent successfully!")
    }, 1500)
  }

  return (
    <section id="contact" class="py-24 bg-black" ref={setRef}>
      <div class="container mx-auto px-4 md:px-6">
        <div class="max-w-3xl mx-auto">
          <div
            class={`text-center mb-12 transition-all duration-700 ${
              isVisible() ? "opacity-100 transform-none" : "opacity-0 translate-y-8"
            }`}
          >
            <h2 class="text-3xl md:text-4xl font-bold mb-4 inline-flex items-center gap-2">
              <Mail class="h-8 w-8 text-maroon-500" />
              LET'S CONNECT
            </h2>
            <p class="text-white/70 text-lg">
              If you want to know more about me or my work, or you like good things (fast websites), send me a message.
              I'd love to hear from you.
            </p>
          </div>

          <div class="bg-slate-900 rounded-xl p-6 md:p-8 border border-slate-800 shadow-xl">
            <form onSubmit={handleSubmit} class="space-y-6">
              <div
                class={`transition-all duration-700 delay-200 ${
                  isVisible() ? "opacity-100 transform-none" : "opacity-0 translate-y-8"
                }`}
              >
                <label for="name" class="block text-sm font-medium mb-2">
                  NAME
                </label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Enter your name"
                  value={name()}
                  onInput={(e) => setName(e.currentTarget.value)}
                  required
                  class="bg-slate-800 border-slate-700 focus:border-maroon-500 text-white placeholder:text-white/50"
                />
              </div>

              <div
                class={`transition-all duration-700 delay-300 ${
                  isVisible() ? "opacity-100 transform-none" : "opacity-0 translate-y-8"
                }`}
              >
                <label for="email" class="block text-sm font-medium mb-2">
                  EMAIL
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  value={email()}
                  onInput={(e) => setEmail(e.currentTarget.value)}
                  required
                  class="bg-slate-800 border-slate-700 focus:border-maroon-500 text-white placeholder:text-white/50"
                />
              </div>

              <div
                class={`transition-all duration-700 delay-400 ${
                  isVisible() ? "opacity-100 transform-none" : "opacity-0 translate-y-8"
                }`}
              >
                <label for="message" class="block text-sm font-medium mb-2">
                  MESSAGE
                </label>
                <Textarea
                  id="message"
                  placeholder="Enter your message"
                  value={message()}
                  onInput={(e) => setMessage(e.currentTarget.value)}
                  required
                  rows={6}
                  class="bg-slate-800 border-slate-700 focus:border-maroon-500 text-white placeholder:text-white/50 resize-none"
                />
              </div>

              <div
                class={`flex justify-between items-center transition-all duration-700 delay-500 ${
                  isVisible() ? "opacity-100 transform-none" : "opacity-0 translate-y-8"
                }`}
              >
                <Button type="button" variant="outline" class="border-slate-700 text-white hover:bg-slate-800">
                  Send email directly
                </Button>
                <Button type="submit" disabled={isSubmitting()} class="bg-maroon-600 hover:bg-maroon-700 text-white">
                  {isSubmitting() ? (
                    <>
                      <div class="animate-spin mr-2 h-4 w-4 border-2 border-white border-t-transparent rounded-full"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send class="mr-2 h-4 w-4" />
                      Send message
                    </>
                  )}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

