import { ArrowUpRight, ExternalLink } from "lucide-solid";
import { Badge } from "@/components/ui/badge";
import { A } from "@solidjs/router";
import githubLogo from "@/assets/github-logo.svg";

export default function ProjectsPage() {
  return (
    <div class="min-h-screen bg-white">
      {/* Floating Navigation */}
      <header class="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm border-b border-gray-100">
        <div class="container mx-auto px-4 py-4 flex justify-between items-center">
          <div class="flex items-center gap-3">
            <img src="/logo-1.png" class="w-10 h-auto" />
            <span class="font-medium text-lg">Francis Amidu</span>
          </div>
          <nav class="flex items-center gap-8">
            <A
              href="/"
              class="text-gray-600 hover:text-primary transition-colors"
            >
              Home
            </A>
            <A
              href="/resume"
              class="text-gray-600 hover:text-primary transition-colors"
            >
              Resume
            </A>
          </nav>
        </div>
      </header>

      {/* Page Content - Add padding-top to account for fixed header */}
      <div class="pt-20">
        {/* Hero Section */}
        <section class="container mx-auto px-4 py-16 md:py-24">
          <div class="max-w-3xl">
            <h1 class="text-5xl md:text-6xl font-bold mb-6">
              Projects & Solutions
            </h1>
            <p class="text-xl text-gray-600 mb-8">
              A collection of solutions I've crafted to solve real-world
              problems. Each project represents a unique challenge overcome with
              thoughtful design and efficient code.
            </p>
            <div class="flex items-center gap-4">
              <div class="h-1 w-12 bg-black"></div>
              <span class="text-gray-500">Scroll to explore</span>
            </div>
          </div>
        </section>

        {/* Featured Project */}
        <section class="container mx-auto px-4 py-16 border-t border-gray-100">
          <div class="grid md:grid-cols-2 gap-12 items-center">
            <div class="order-2 md:order-1">
              <Badge class="mb-4 bg-blue-50 text-blue-700 hover:bg-blue-50 border-0">
                Featured Project
              </Badge>
              <h2 class="text-3xl font-bold mb-4">AI-Powered Web Dashboard</h2>
              <p class="text-gray-600 mb-6">
                A lightning-fast dashboard that leverages AI to provide
                real-time insights and analytics. Built with Solid.js,
                TypeScript, and TailwindCSS, this solution reduced data
                processing time by 80%.
              </p>
              <div class="flex flex-wrap gap-2 mb-6">
                <Badge variant="outline" class="rounded-full">
                  Solid.js
                </Badge>
                <Badge variant="outline" class="rounded-full">
                  TypeScript
                </Badge>
                <Badge variant="outline" class="rounded-full">
                  TailwindCSS
                </Badge>
                <Badge variant="outline" class="rounded-full">
                  AI Integration
                </Badge>
              </div>
              <div class="flex gap-4">
                <A
                  href="#"
                  class="flex items-center gap-2 text-sm font-medium hover:text-blue-600 transition-colors"
                >
                  <img src={githubLogo} class="w-5 h-5" />
                  View Code
                </A>
                <A
                  href="#"
                  class="flex items-center gap-2 text-sm font-medium hover:text-blue-600 transition-colors"
                >
                  <ExternalLink size={18} />
                  Live Demo
                </A>
              </div>
            </div>
            <div class="order-1 md:order-2 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl overflow-hidden aspect-video flex items-center justify-center">
              <div class="w-4/5 h-4/5 bg-white rounded-lg shadow-lg flex items-center justify-center">
                <div class="text-blue-500 font-medium">Dashboard Preview</div>
              </div>
            </div>
          </div>
        </section>

        {/* Project Grid */}
        <section class="container mx-auto px-4 py-16 border-t border-gray-100">
          <h2 class="text-2xl font-bold mb-12">More Solutions</h2>

          <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project Card 1 */}
            <div class="group">
              <div class="bg-gray-50 rounded-xl overflow-hidden aspect-video mb-4 flex items-center justify-center group-hover:bg-gray-100 transition-colors">
                <div class="w-4/5 h-3/5 bg-white rounded-lg shadow-sm flex items-center justify-center">
                  <div class="text-gray-400 font-medium">
                    E-commerce Platform
                  </div>
                </div>
              </div>
              <h3 class="text-xl font-bold mb-2 group-hover:text-blue-600 transition-colors flex items-center gap-2">
                E-commerce Performance Boost
                <ArrowUpRight
                  size={18}
                  class="opacity-0 group-hover:opacity-100 transition-opacity"
                />
              </h3>
              <p class="text-gray-600 mb-3">
                Optimized a slow e-commerce platform, reducing load times by 65%
                and increasing conversion rates by 23%.
              </p>
              <div class="flex flex-wrap gap-2 mb-4">
                <Badge variant="outline" class="rounded-full">
                  Next.js
                </Badge>
                <Badge variant="outline" class="rounded-full">
                  Performance
                </Badge>
              </div>
            </div>

            {/* Project Card 2 */}
            <div class="group">
              <div class="bg-amber-50 rounded-xl overflow-hidden aspect-video mb-4 flex items-center justify-center group-hover:bg-amber-100 transition-colors">
                <div class="w-4/5 h-3/5 bg-white rounded-lg shadow-sm flex items-center justify-center">
                  <div class="text-amber-400 font-medium">
                    Content Management
                  </div>
                </div>
              </div>
              <h3 class="text-xl font-bold mb-2 group-hover:text-amber-600 transition-colors flex items-center gap-2">
                Headless CMS Integration
                <ArrowUpRight
                  size={18}
                  class="opacity-0 group-hover:opacity-100 transition-opacity"
                />
              </h3>
              <p class="text-gray-600 mb-3">
                Built a custom headless CMS solution that allowed content
                editors to work 3x faster with an intuitive interface.
              </p>
              <div class="flex flex-wrap gap-2 mb-4">
                <Badge variant="outline" class="rounded-full">
                  Solid.js
                </Badge>
                <Badge variant="outline" class="rounded-full">
                  GraphQL
                </Badge>
                <Badge variant="outline" class="rounded-full">
                  CMS
                </Badge>
              </div>
            </div>

            {/* Project Card 3 */}
            <div class="group">
              <div class="bg-green-50 rounded-xl overflow-hidden aspect-video mb-4 flex items-center justify-center group-hover:bg-green-100 transition-colors">
                <div class="w-4/5 h-3/5 bg-white rounded-lg shadow-sm flex items-center justify-center">
                  <div class="text-green-400 font-medium">
                    Analytics Dashboard
                  </div>
                </div>
              </div>
              <h3 class="text-xl font-bold mb-2 group-hover:text-green-600 transition-colors flex items-center gap-2">
                Real-time Analytics Platform
                <ArrowUpRight
                  size={18}
                  class="opacity-0 group-hover:opacity-100 transition-opacity"
                />
              </h3>
              <p class="text-gray-600 mb-3">
                Developed a real-time analytics dashboard for a SaaS company,
                processing over 1M events daily.
              </p>
              <div class="flex flex-wrap gap-2 mb-4">
                <Badge variant="outline" class="rounded-full">
                  TypeScript
                </Badge>
                <Badge variant="outline" class="rounded-full">
                  WebSockets
                </Badge>
              </div>
            </div>

            {/* Project Card 4 */}
            <div class="group">
              <div class="bg-purple-50 rounded-xl overflow-hidden aspect-video mb-4 flex items-center justify-center group-hover:bg-purple-100 transition-colors">
                <div class="w-4/5 h-3/5 bg-white rounded-lg shadow-sm flex items-center justify-center">
                  <div class="text-purple-400 font-medium">Mobile App</div>
                </div>
              </div>
              <h3 class="text-xl font-bold mb-2 group-hover:text-purple-600 transition-colors flex items-center gap-2">
                Cross-platform Mobile Application
                <ArrowUpRight
                  size={18}
                  class="opacity-0 group-hover:opacity-100 transition-opacity"
                />
              </h3>
              <p class="text-gray-600 mb-3">
                Built a React Native app that works seamlessly across iOS and
                Android with a shared codebase.
              </p>
              <div class="flex flex-wrap gap-2 mb-4">
                <Badge variant="outline" class="rounded-full">
                  React Native
                </Badge>
                <Badge variant="outline" class="rounded-full">
                  Mobile
                </Badge>
              </div>
            </div>

            {/* Project Card 5 */}
            <div class="group">
              <div class="bg-red-50 rounded-xl overflow-hidden aspect-video mb-4 flex items-center justify-center group-hover:bg-red-100 transition-colors">
                <div class="w-4/5 h-3/5 bg-white rounded-lg shadow-sm flex items-center justify-center">
                  <div class="text-red-400 font-medium">
                    Authentication System
                  </div>
                </div>
              </div>
              <h3 class="text-xl font-bold mb-2 group-hover:text-red-600 transition-colors flex items-center gap-2">
                Secure Authentication System
                <ArrowUpRight
                  size={18}
                  class="opacity-0 group-hover:opacity-100 transition-opacity"
                />
              </h3>
              <p class="text-gray-600 mb-3">
                Implemented a secure, multi-factor authentication system with
                biometric support for a fintech startup.
              </p>
              <div class="flex flex-wrap gap-2 mb-4">
                <Badge variant="outline" class="rounded-full">
                  Security
                </Badge>
                <Badge variant="outline" class="rounded-full">
                  OAuth
                </Badge>
                <Badge variant="outline" class="rounded-full">
                  Biometrics
                </Badge>
              </div>
            </div>

            {/* Project Card 6 */}
            <div class="group">
              <div class="bg-cyan-50 rounded-xl overflow-hidden aspect-video mb-4 flex items-center justify-center group-hover:bg-cyan-100 transition-colors">
                <div class="w-4/5 h-3/5 bg-white rounded-lg shadow-sm flex items-center justify-center">
                  <div class="text-cyan-400 font-medium">
                    YouTube Downloader
                  </div>
                </div>
              </div>
              <h3 class="text-xl font-bold mb-2 group-hover:text-cyan-600 transition-colors flex items-center gap-2">
                YouTube Downloader Tool
                <ArrowUpRight
                  size={18}
                  class="opacity-0 group-hover:opacity-100 transition-opacity"
                />
              </h3>
              <p class="text-gray-600 mb-3">
                Created a minimalist, high-performance YouTube video downloader
                with multiple format options.
              </p>
              <div class="flex flex-wrap gap-2 mb-4">
                <Badge variant="outline" class="rounded-full">
                  Solid.js
                </Badge>
                <Badge variant="outline" class="rounded-full">
                  API Integration
                </Badge>
              </div>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section class="container mx-auto px-4 py-16 border-t border-gray-100">
          <div class="bg-gray-50 rounded-xl p-8 md:p-12 flex flex-col md:flex-row md:items-center justify-between gap-8">
            <div>
              <h2 class="text-3xl font-bold mb-4">Have a project in mind?</h2>
              <p class="text-gray-600 max-w-xl">
                I'm always open to discussing new projects and challenges. Let's
                create something amazing together.
              </p>
            </div>
            <A
              href="/contact"
              class="bg-black text-white px-6 py-3 rounded-md hover:bg-gray-800 transition-colors whitespace-nowrap text-center md:text-left"
            >
              Get in Touch
            </A>
          </div>
        </section>

        {/* Footer */}
        <footer class="container mx-auto px-4 py-8 border-t border-gray-100 mt-16">
          <div class="flex flex-col md:flex-row justify-between items-center gap-4">
            <div class="flex items-center gap-3">
              <div class="bg-black text-white rounded-full h-8 w-8 flex items-center justify-center font-bold text-sm">
                FA
              </div>
              <span class="font-medium">Francis Amidu</span>
            </div>
            <div class="text-sm text-gray-500">
              © {new Date().getFullYear()} Francis Amidu. All rights reserved.
            </div>
            <div class="flex gap-4">
              <A
                href="#"
                class="text-gray-600 hover:text-black transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
              </A>
              <A
                href="#"
                class="text-gray-600 hover:text-black transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  view-box="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                </svg>
              </A>
              <A
                href="#"
                class="text-gray-600 hover:text-black transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  view-box="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-inejoin="round"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </A>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
