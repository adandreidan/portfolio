"use client"

import { useEffect, useRef } from "react"

/**
 * Attaches an IntersectionObserver to the returned ref and toggles
 * `.is-visible` the first time the element enters the viewport.
 * Pairs with the `.reveal` utility in globals.css — a quiet fade + settle,
 * no scrubbing, no parallax.
 */
export function useReveal<T extends HTMLElement>() {
  const ref = useRef<T>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("is-visible")
          observer.unobserve(el)
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px" },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return ref
}
