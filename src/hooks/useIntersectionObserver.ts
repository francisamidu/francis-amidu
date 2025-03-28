import { createSignal, onCleanup, onMount } from "solid-js"

interface IntersectionOptions {
  root?: Element | null
  rootMargin?: string
  threshold?: number | number[]
}

export function useIntersectionObserver(elementRef: () => Element | null, options: IntersectionOptions = {}) {
  const [isIntersecting, setIsIntersecting] = createSignal(false)

  onMount(() => {
    const element = elementRef()
    if (!element) return

    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting)
    }, options)

    observer.observe(element)

    onCleanup(() => {
      observer.disconnect()
    })
  })

  return isIntersecting
}

