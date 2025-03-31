import { createSignal } from "solid-js";
import { A } from "@solidjs/router";

import { Button } from "./ui/button";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = createSignal(false);

  return (
    <header class="bg-white py-3">
      <div class="container mx-auto px-4 md:px-6">
        <div class="flex items-center justify-between">
          <A href="/" class="flex flex-row items-center">
            <img src="/logo-1.png" class="w-10 h-auto" />
            <span class="md:text-xl font-semibold ml-2">Francis Amidu</span>
          </A>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        class={`md:hidden absolute top-full left-0 right-0 bg-slate-950/95 backdrop-blur-md transition-all duration-300 ${
          isMenuOpen()
            ? "max-h-[300px] opacity-100"
            : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <nav class="flex flex-col gap-4 p-6">
          <A
            href="#about"
            class="text-white/80 hover:text-white transition-colors py-2"
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </A>
          <A
            href="#tooling"
            class="text-white/80 hover:text-white transition-colors py-2"
            onClick={() => setIsMenuOpen(false)}
          >
            Expertise
          </A>
          <A
            href="#contact"
            class="text-white/80 hover:text-white transition-colors py-2"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </A>
          <Button
            variant="outline"
            class="border-maroon-500 text-white hover:bg-maroon-600 w-full mt-2"
          >
            Resume
          </Button>
        </nav>
      </div>
    </header>
  );
}
