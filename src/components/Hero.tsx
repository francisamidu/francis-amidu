import { onMount, createSignal } from "solid-js";
import { FileText, Folder, Link } from "lucide-solid";
import { A } from "@solidjs/router";

import linkedinLogo from "@/assets/linkedin-logo.svg";
import githubLogo from "@/assets/github-logo.svg";
import twitterLogo from "@/assets/twitter-logo.svg";
import { Tooling } from "./Tooling";

export const Hero = () => {
  const [isMounted, setIsMounted] = createSignal(false);

  onMount(() => {
    setIsMounted(true);
  });

  return (
    <section id="hero" class="min-h-screen pt-28 pb-10">
      <div class="container mx-auto px-6">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Name, Title and Brief Description */}
          <div
            class={`transition-all duration-700 ${
              isMounted()
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <h1 class="text-5xl md:text-6xl lg:text-7xl font-bold mb-2">
              Francis Amidu
            </h1>
            <h2 class="text-2xl font-medium mb-8 text-slate-800">
              Frontend Web Architect
            </h2>

            <p class="text-lg mb-8 max-w-xl">
              I specialize in building fast and accessible web applications.
            </p>

            <div class="flex flex-col sm:flex-row items-start sm:items-center gap-6 mt-12">
              <A
                href="/projects"
                class="flex items-center gap-2 border-b border-foreground transition-all hover:border-primary hover:!text-primary pb-1"
              >
                <Folder class="w-4 h-4" />
                <span>Projects</span>
              </A>
              <A
                href="/resume"
                class="flex items-center gap-2 border-b border-foreground transition-all hover:border-primary hover:!text-primary pb-1"
              >
                <FileText class="w-4 h-4 " />
                <span>Resume</span>
              </A>
            </div>

            <div class="flex items-center gap-4 mt-12">
              <a
                href="https://github.com/francisamidu"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <img
                  src={githubLogo}
                  class="w-6 h-6 text-foreground hover:text-primary transition-colors"
                />
              </a>
              <a
                href="https://twitter.com/iamfrancisamidu"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
              >
                <img
                  src={twitterLogo}
                  class="w-6 h-6 text-foreground hover:text-primary transition-colors"
                />
              </a>
              <a
                href="https://linkedin.com/in/francis-amidu-developer"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <img
                  src={linkedinLogo}
                  class="w-6 h-6 text-foreground hover:text-primary transition-colors"
                />
              </a>
            </div>
          </div>

          {/* Right Column - Longer Description and Frontend Tools */}
          <div
            class={`transition-all duration-700 delay-200 ${
              isMounted()
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div class="mb-10">
              <p class="text-lg leading-relaxed mb-4">
                Let's face it, we all hate slow websites. But I'm here to change
                that. Hi, I'm Francis, a problem-solver with expertise in
                crafting lightning-fast web experiences.
              </p>
              <p class="text-lg leading-relaxed mb-4">
                I leverage cutting-edge frontend technologies and AI to build
                solutions that eliminate your pain points. I've helped 5
                startups overcome performance issues in their web apps, and I'm
                ready to help you too. Your websites doesn't have to chase away
                users!
              </p>
            </div>

            {/* Frontend Tools Section */}

            <Tooling />
            {/* Recent Activity Section */}
            <div>
              <h3 class="text-xl font-medium mb-4">Recent Activity</h3>

              <div class="mb-6">
                <div class="flex items-center gap-2 mb-3">
                  <div class="w-4 h-0.5 bg-foreground"></div>
                  <span>Latest Project</span>
                </div>

                <A
                  href="/ai-web-dashboard"
                  class="flex flex-row items-center gap-2 hover:text-primary transition-colors"
                >
                  <span>AI-Powered Web Dashboard</span>
                  <Link class="w-4 h-4" />
                </A>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
