"use client"

import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"

const navItems = [
  { id: "hero", label: "Index" },
  { id: "signals", label: "What's News" },
  { id: "work", label: "Selected Work" },
  { id: "principles", label: "About Me" },
  { id: "colophon", label: "Contact" },
]

export function SideNav() {
  const [activeSection, setActiveSection] = useState("hero")

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { threshold: 0.3 },
    )

    navItems.forEach(({ id }) => {
      const element = document.getElementById(id)
      if (element) observer.observe(element)
    })

    return () => observer.disconnect()
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 w-full border-b border-border/30 bg-background/80 backdrop-blur-sm">
      <div className="flex items-center justify-center gap-4 md:gap-8 px-4 md:px-8 py-3 md:py-4">
        {navItems.map(({ id, label }) => (
          <button
            key={id}
            onClick={() => scrollToSection(id)}
            className="group relative flex flex-col items-center gap-1.5 px-2 py-1 transition-all duration-200"
          >
            <span
              className={cn(
                "h-1 w-8 rounded-full transition-all duration-300",
                activeSection === id ? "bg-accent" : "bg-muted-foreground/40 group-hover:bg-foreground/60",
              )}
            />
            <span
              className={cn(
                "font-mono text-[10px] md:text-xs uppercase tracking-widest transition-colors duration-200 whitespace-nowrap",
                activeSection === id ? "text-accent" : "text-muted-foreground group-hover:text-foreground",
              )}
            >
              {label}
            </span>
          </button>
        ))}
      </div>
    </nav>
  )
}
