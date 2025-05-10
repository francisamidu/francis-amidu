import { ArrowUpRight, ExternalLink } from "lucide-solid";
import { A } from "@solidjs/router";
import { Mail } from "lucide-solid";

import { Badge } from "@/components/ui/badge";
import githubLogo from "@/assets/github-logo.svg";
import aiditaDashboard from "@/assets/aidita.png";
import dehashDashboard from "@/assets/dehash.png";
import { For } from "solid-js";

const projects = [
  {
    img: dehashDashboard,
    name: "Dehash",
    description:
      "A lightning-fast platform to help businesses turn MSISDN hashes to their corresponding phone number. Built with React, TypeScript, and TailwindCSS, this solution is designed to be performant without compromising on features.",
    tags: ["React", "TypeScript", "TailwindCSS", "AI Integration"],
    githubLink: "",
    websiteLink: "#",
    featured: true,
    badgeColor: "bg-blue-50 text-blue-700 hover:bg-blue-50 border-0",
  },
  {
    img: aiditaDashboard,
    name: "Aidita",
    description:
      "Aidita is an AI-driven video editing platform that simplifies the process of creating high-quality, professional videos.",
    tags: ["Next.js", "Typescript"],
    githubLink: "https://github.com/francisamidu/aidita-landing",
    websiteLink: "https://aidita.netlify.app",
    featured: false,
    badgeColor: "text-indigo-700 group-hover:text-indigo-500",
  },

  {
    img: "",
    name: "YouTube Downloader Tool",
    description:
      "Created a minimalist, high-performance YouTube video downloader with multiple format options.",
    tags: ["Solid.js", "API Integration"],
    githubLink: "",
    websiteLink: "#",
    featured: false,
    badgeColor: "text-cyan-700 group-hover:text-cyan-500",
  },
];

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
        <section class="container mx-auto px-4 py-16 md:py-20">
          <div class="max-w-3xl">
            <h1 class="text-5xl text-slate-800 md:text-6xl font-bold mb-6">
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
              <h2 class="text-3xl font-bold mb-4">{projects[0].name}</h2>
              <p class="text-gray-600 mb-6">{projects[0].description}</p>
              <div class="flex flex-wrap gap-2 mb-6">
                <For each={projects[0].tags}>
                  {(tag) => (
                    <Badge variant="outline" class="rounded-full">
                      {tag}
                    </Badge>
                  )}
                </For>
              </div>
              <div class="flex gap-4">
                <a
                  href={projects[0].websiteLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Dehash Dashboard"
                  class="flex items-center gap-2 text-sm font-medium hover:text-blue-600 transition-colors"
                >
                  <ExternalLink size={18} />
                  Live Demo
                </a>
              </div>
            </div>
            <div class="order-1 md:order-2 rounded-xl overflow-hidden flex items-center justify-center">
              <div class="w-4/5 h-4/5 bg-white rounded-lg shadow-lg flex items-center justify-center">
                <img
                  src={dehashDashboard}
                  alt="Dehash Dashboard"
                  class="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Project Grid */}
        <section class="container mx-auto px-4 py-16 border-t border-gray-100">
          <div class="flex items-center gap-4 mb-5">
            <div class="h-1 w-12 bg-slate-800"></div>
            <span class="text-gray-700 text-3xl font-bold">My catalogue</span>
          </div>

          <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <For each={projects.slice(1)}>
              {(project) => (
                <div class="group">
                  <div class="bg-cyan-50 rounded-xl overflow-hidden aspect-video mb-4 flex items-center justify-center group-hover:bg-cyan-100 transition-colors">
                    {project.img ? (
                      <img
                        src={project.img}
                        alt={project.name}
                        class="w-full h-full object-cover"
                      />
                    ) : (
                      <div class="w-4/5 h-3/5 bg-white rounded-lg shadow-sm flex items-center justify-center">
                        <a
                          href={project.websiteLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={project.name}
                          class={`${project.badgeColor}`}
                        >
                          {project.name}
                        </a>
                      </div>
                    )}
                  </div>
                  <h3
                    class={`text-xl font-bold mb-2 ${project.badgeColor} transition-colors flex items-center gap-2`}
                  >
                    <a
                      href={project.websiteLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={project.name}
                      class={`font-medium ${project.badgeColor}`}
                    >
                      {project.name}
                    </a>
                    <ArrowUpRight
                      size={18}
                      class="opacity-0 group-hover:opacity-100 transition-opacity"
                    />
                  </h3>
                  <p class="text-gray-600 mb-3">{project.description}</p>
                  <div class="flex flex-wrap gap-2 mb-4">
                    <For each={project.tags}>
                      {(tag) => (
                        <Badge variant="outline" class="rounded-full">
                          {tag}
                        </Badge>
                      )}
                    </For>
                  </div>
                </div>
              )}
            </For>
          </div>
        </section>

        {/* Contact CTA */}
        <section class="container mx-auto px-4 py-16 border-t border-gray-100">
          <div class="bg-gray-50 rounded-xl p-8 md:p-12 flex flex-col md:flex-row md:items-center justify-between gap-8">
            <div>
              <h2 class="text-slate-800 text-3xl font-bold mb-4">
                Have a project in mind?
              </h2>
              <p class="text-gray-600 max-w-xl">
                I'm always open to discussing new projects and challenges. Let's
                create something amazing together.
              </p>
            </div>
            <A
              href="/contact"
              class="bg-slate-900 text-white px-5 py-2 rounded-lg hover:bg-gray-800 transition-colors whitespace-nowrap text-center md:text-left flex items-center"
            >
              <Mail class="mr-2" size={20} />
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
              <a
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
              </a>
              <a
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
              </a>
              <a
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
              </a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
