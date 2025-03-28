import { Heart } from "lucide-solid"

export function Footer() {
  return (
    <footer class="py-8 bg-slate-950 border-t border-slate-800">
      <div class="container mx-auto px-4 md:px-6">
        <div class="flex flex-col md:flex-row justify-between items-center">
          <div class="mb-4 md:mb-0">
            <a href="#" class="flex items-center gap-2">
              <div class="flex items-center justify-center w-8 h-8 rounded-full bg-maroon-600 text-white font-bold text-xs">
                FA
              </div>
              <span class="text-lg font-bold">Francis Amidu</span>
            </a>
          </div>

          <div class="text-white/60 text-sm flex items-center">
            <span>Developed with</span>
            <Heart class="h-4 w-4 mx-1 text-maroon-500 fill-maroon-500" />
            <span>by yours truly</span>
            <span class="mx-2">•</span>
            <span>Copyright © {new Date().getFullYear()}</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

