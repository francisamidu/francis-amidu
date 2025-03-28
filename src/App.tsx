import { createSignal, onMount } from "solid-js";
import { Header } from "./components/Header";
import { Tooling } from "./components/Tooling";
import { Projects } from "./components/Projects";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";

export default function App() {
  const [isLoaded, setIsLoaded] = createSignal(false);

  onMount(() => {
    setTimeout(() => setIsLoaded(true), 500);
  });

  return (
    <div class="min-h-screen">
      <div
        class={`transition-opacity duration-1000 ${
          isLoaded() ? "opacity-100" : "opacity-0"
        }`}
      >
        <Header />
        <main>
          <Hero />
          <Tooling />
          <Projects />
          <About />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}
