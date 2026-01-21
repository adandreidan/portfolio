"use client"

import { useRef, useEffect } from "react"
import { cn } from "@/lib/utils"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const signals = [
  {
    date: "2025.12 - Present",
    title: "University of Waterloo CUBE - Software Developer",
    note: "Developing a full-stack portfolio for Waterloo’s CUBE incubator startup projects",
    url: "https://www.linkedin.com/company/uwcube/posts/?feedView=all",
  },
  {
    date: "2025.12.27",
    title: "Advanced Pandas Certification",
    note: "Advanced Pandas Certification - Mastering Pandas, Jupyter Notebook, Data Sorting, and Essential Python Libraries & APIs.",
    url: "https://www.linkedin.com/learning/certificates/94db261214a87da6ebaec015b1d986f6bf8f2ddec1f59bb2310dbc8726d5d3be?trk=share_certificate",
  },
  {
    date: "2025.12.23",
    title: "Python OOP Certification",
    note: "Python OOP Certification - Covering Classes, Inheritance, Advanced Functions, and Magic Methods for Python Object-Oriented Programming.",
    url: "https://www.linkedin.com/learning/certificates/d4130a43b91ed8a3a4f1926d1df3b50322624ea2ba5aa208df68f1f1350484c6?trk=share_certificate",
  },
  {
    date: "2025.05-06",
    title: "Software Engineer Intern",
    note: "Completed internship at Doxim working on PDF-to-CSV data extraction pipelines.",
    url: "https://www.doxim.com",
  },
  {
    date: "2024.07.15",
    title: "AI & ML Certification",
    note: "Completed comprehensive AI and ML with Python certification from Circuit Stream.",
    url: "https://www.credly.com/badges/93218a0e-7eb3-4ebf-b049-c9da49674ca0/public_url",
  },
  {
    date: "2025.11.23",
    title: "Men's Health Tracker",
    note: "Launched men's health analytics application with XCode, TypeScript, and Python.",
    url: "https://github.com/adandreidan/mens-health-tracker",
  },
  {
    date: "2024.06.20",
    title: "AP Java Certification",
    note: "Earned AP Java Computer Science Principles certification through CodeHS.",
    url: "https://codehs.com/certificate/kWh0Qf",
  },
  {
    date: "2025.08.12",
    title: "Portfolio Website",
    note: "Developed and launched modern responsive portfolio website.",
    url: "https://www.andreidan.ca",
  },
]

export function SignalsSection() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const sectionRef = useRef<HTMLElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!sectionRef.current || !headerRef.current || !cardsRef.current) return

    const ctx = gsap.context(() => {
      // Header slide in from left
      gsap.fromTo(
        headerRef.current,
        { x: -60, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: headerRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        },
      )

      const cards = cardsRef.current?.querySelectorAll("article")
      if (cards) {
        gsap.fromTo(
          cards,
          { x: -100, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: cardsRef.current,
              start: "top 90%",
              toggleActions: "play none none reverse",
            },
          },
        )
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section id="signals" ref={sectionRef} className="relative py-32 pl-6 md:pl-28">
      {/* Section header */}
      <div ref={headerRef} className="mb-16 pr-6 md:pr-12">
        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent">01 / RECENTS</span>
        <h2 className="mt-4 text-5xl md:text-7xl tracking-tight">WHAT&apos;S NEW</h2>
      </div>

      {/* Horizontal scroll container */}
      <div
        ref={(el) => {
          scrollRef.current = el
          cardsRef.current = el
        }}
        className="flex gap-8 overflow-x-auto pb-8 pr-12 scrollbar-hide"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {signals.map((signal, index) => (
          <SignalCard key={index} signal={signal} index={index} />
        ))}
      </div>
    </section>
  )
}

function SignalCard({
  signal,
  index,
}: {
  signal: { date: string; title: string; note: string; url?: string }
  index: number
}) {
  return (
    <article
      className={cn(
        "group relative flex-shrink-0 w-80",
        "transition-transform duration-500 ease-out",
        "hover:-translate-y-2",
      )}
    >
      {/* Card with paper texture effect */}
      <div className="relative bg-card border border-border/50 md:border-t md:border-l md:border-r-0 md:border-b-0 p-8">
        {/* Top torn edge effect */}
        <div className="absolute -top-px left-0 right-0 h-px bg-gradient-to-r from-transparent via-border/40 to-transparent" />

        {/* Issue number - editorial style */}
        <div className="flex items-baseline justify-between mb-8">
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
            No. {String(index + 1).padStart(2, "0")}
          </span>
          <time className="font-mono text-[10px] text-muted-foreground/60">{signal.date}</time>
        </div>

        {/* Title */}
        <h3 className="text-4xl tracking-tight mb-4 group-hover:text-accent transition-colors duration-300">
          {signal.url ? (
            <a
              href={signal.url}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              {signal.title}
            </a>
          ) : (
            signal.title
          )}
        </h3>

        {/* Divider line */}
        <div className="w-12 h-px bg-accent/60 mb-6 group-hover:w-full transition-all duration-500" />

        {/* Description */}
        <p className="font-mono text-xs text-muted-foreground leading-relaxed">{signal.note}</p>

        {/* Bottom right corner fold effect */}
        <div className="absolute bottom-0 right-0 w-6 h-6 overflow-hidden">
          <div className="absolute bottom-0 right-0 w-8 h-8 bg-background rotate-45 translate-x-4 translate-y-4 border-t border-l border-border/30" />
        </div>
      </div>

      {/* Shadow/depth layer */}
      <div className="absolute inset-0 -z-10 translate-x-1 translate-y-1 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </article>
  )
}
