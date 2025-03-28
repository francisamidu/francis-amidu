import { onMount, createSignal } from "solid-js";
import { Github, Twitter, Linkedin, FileText, Folder } from "lucide-solid";

export const Hero = () => {
  const [isMounted, setIsMounted] = createSignal(false);

  onMount(() => {
    setIsMounted(true);
  });

  // Frontend tools data
  const frontendTools = [
    {
      name: "React",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    },
    {
      name: "Next.js",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    },
    {
      name: "TypeScript",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    },
    {
      name: "Tailwind CSS",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
    },
  ];

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
            <h1 class="text-5xl md:text-6xl lg:text-7xl font-bold mb-4">
              Francis Amidu
            </h1>
            <h2 class="text-2xl font-medium mb-6 text-muted-foreground">
              Frontend Web Architect
            </h2>

            <p class="text-lg mb-8 max-w-xl">
              I specialize in building fast and accessible web applications.
            </p>

            <div class="flex flex-col sm:flex-row items-start sm:items-center gap-6 mt-12">
              <a
                href="#projects"
                class="flex items-center gap-2 border-b border-foreground transition-all hover:border-primary pb-1"
              >
                <Folder class="w-4 h-4" />
                <span>Projects</span>
              </a>
              <a
                href="#about"
                class="flex items-center gap-2 border-b border-foreground transition-all hover:border-primary pb-1"
              >
                <FileText class="w-4 h-4" />
                <span>Resume</span>
              </a>
            </div>

            <div class="flex items-center gap-4 mt-12">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <Github class="w-6 h-6 text-foreground hover:text-primary transition-colors" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
              >
                <Twitter class="w-6 h-6 text-foreground hover:text-primary transition-colors" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin class="w-6 h-6 text-foreground hover:text-primary transition-colors" />
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
                I'm Francis Amidu, a dedicated web architect focusing on
                creating exceptional digital experiences with modern frontend
                technologies.
              </p>
              <p class="text-lg leading-relaxed mb-4">
                I leverage cutting-edge frontend technologies and AI to build
                solutions that eliminate your pain points, delivering intuitive
                interfaces that solve real problems and enhance user engagement.
              </p>
            </div>

            {/* Frontend Tools Section */}
            <div class="bg-card/50 backdrop-blur-sm rounded-lg p-6 border border-border mb-8">
              <h3 class="text-xl font-medium mb-4">Frontend Tooling</h3>
              <div class="grid grid-cols-2 sm:grid-cols-4 gap-6">
                {frontendTools.map((tool) => (
                  <div class="text-center">
                    <img
                      src={tool.icon}
                      alt={tool.name}
                      class="w-12 h-12 mx-auto mb-2"
                    />
                    <p class="text-sm font-medium">{tool.name}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent Activity Section */}
            <div>
              <h3 class="text-xl font-medium mb-4">Recent Activity</h3>

              <div class="mb-6">
                <div class="flex items-center gap-2 mb-3">
                  <div class="w-4 h-0.5 bg-foreground"></div>
                  <span>Latest Project</span>
                </div>

                <a
                  href="#"
                  class="flex items-center gap-2 hover:text-primary transition-colors"
                >
                  <span>AI-Powered Web Dashboard</span>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    class="flex-shrink-0"
                  >
                    <path
                      d="M6 3L11 8L6 13"
                      stroke="currentColor"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
