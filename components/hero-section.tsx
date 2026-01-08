"use client"

import { useEffect, useRef } from "react"
import { SplitFlapText } from "@/components/split-flap-text"
import { AnimatedNoise } from "@/components/animated-noise"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!sectionRef.current || !contentRef.current) return

    const ctx = gsap.context(() => {
      gsap.to(contentRef.current, {
        y: -100,
        opacity: 0,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="hero" className="relative min-h-screen flex items-center pl-6 md:pl-28 pr-6 md:pr-12 pt-20 md:pt-24">
      <AnimatedNoise opacity={0.03} />

      {/* Main content */}
      <div ref={contentRef} className="flex-1">
        <div className="relative">
          <SplitFlapText text="ANDREI DAN" speed={30} />
        </div>

        <div className="flex items-start gap-6 lg:gap-8 mt-8">
          {/* Left side - Intro text */}
          <div className="flex-1 max-w-md">
            <h2 className="text-muted-foreground/60 text-[clamp(1rem,3vw,2rem)] tracking-wide">
              Computer Science Student @ <a href="https://cs.uwaterloo.ca" className="text-accent hover:text-accent/80 transition-colors">UWaterloo</a>
            </h2>

            <p className="mt-12 font-mono text-sm text-muted-foreground leading-relaxed">
              I love to build cool software and learn new things. Outside of school, I enjoy swimming and playing basketball. Feel free to reach out and collaborate!
            </p>

            <div className="mt-16 flex items-center gap-8">
              <a
                href="#work"
                className="group inline-flex items-center border border-foreground/20 px-6 py-3 font-mono text-xs uppercase tracking-widest text-foreground hover:border-accent hover:text-accent transition-all duration-200"
              >
                View Projects
              </a>
              <a
                href="#signals"
                className="group inline-flex items-center border border-foreground/20 px-6 py-3 font-mono text-xs uppercase tracking-widest text-foreground hover:border-accent hover:text-accent transition-all duration-200"
              >
                What's News
              </a>
            </div>
          </div>

          {/* Right side - Circular Photo positioned below DAN */}
          <div className="flex-shrink-0 ml-8">
            <div className="w-72 h-72 md:w-80 md:h-80 rounded-full overflow-hidden border-2 border-border/20 shadow-lg">
              <img
                src="/webpic.png"
                alt="Andrei Dan"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
