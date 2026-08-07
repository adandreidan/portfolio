"use client"

import { useReveal } from "@/lib/use-reveal"

const projects = [
  {
    title: "The Sidebar",
    meta: "TypeScript · Next.js · MongoDB Atlas · Voyage",
    description:
      "A multi-agent deliberation engine that casts a panel of AI personas around a decision and drives them through argument, rebuttal, and synthesis into a single ruling.",
    url: "https://github.com/Calvinky-Lee/Sidebar",
  },
  {
    title: "Decentralized Identity Infrastructure",
    meta: "ACA-Py · Docker · Node.js · PostgreSQL · DIDComm · AnonCreds",
    description:
      "A self-sovereign identity ecosystem where autonomous agents issue, hold, and verify credentials over encrypted DIDComm channels with zero-knowledge proofs and no central authority.",
    url: "https://github.com/adandreidan/Decentralized-Identity-Infrastructure",
  },
  {
    title: "Men's Health Tracker",
    meta: "Xcode · TypeScript · Python",
    description:
      "A men's health analytics tracker that benchmarks personal data against averages for men of similar age.",
    url: "https://github.com/adandreidan/mens-health-tracker",
  },
]

const CERTIFICATIONS = [
  { title: "Python OOP Certification", note: "LinkedIn Learning", date: "2025.12" },
  { title: "Advanced Pandas Certification", note: "LinkedIn Learning", date: "2025.12" },
  { title: "AI & ML Certification", note: "Circuit Stream", date: "2024.07" },
  { title: "AP Computer Science Principles", note: "CodeHS", date: "2024.06" },
]

export function WorkSection() {
  const ref = useReveal<HTMLDivElement>()
  const certRef = useReveal<HTMLDivElement>()

  return (
    <>
      <section id="work" className="mx-auto max-w-3xl px-6 pt-14 pb-20 md:px-10 md:pt-16 md:pb-24">
        <div ref={ref} className="reveal">
          <span className="kicker text-sm">Work</span>
          <h2 className="mt-2 text-2xl tracking-tight md:text-3xl">Selected work</h2>

          <ul className="mt-10 divide-y divide-border">
            {projects.map((project) => (
              <li key={project.title} className="py-6 first:pt-0">
                <a href={project.url} target="_blank" rel="noopener noreferrer" className="group block">
                  <h3 className="text-[17px] leading-snug underline decoration-border decoration-1 underline-offset-4 transition-colors group-hover:decoration-foreground">
                    {project.title}
                  </h3>
                  <p className="mt-1 text-sm text-muted-2">{project.meta}</p>
                  <p className="mt-3 max-w-lg text-sm leading-relaxed text-muted">{project.description}</p>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-3xl border-t border-border px-6 py-20 md:px-10 md:py-24">
        <div ref={certRef} className="reveal">
          <span className="kicker text-sm">Certifications</span>
          <h2 className="mt-2 text-2xl tracking-tight md:text-3xl">Certifications</h2>

          <ul className="mt-10 space-y-3">
            {CERTIFICATIONS.map((item) => (
              <li key={item.title} className="flex flex-wrap items-baseline gap-x-3 text-[15px] text-foreground/85">
                <time className="text-sm text-muted-2">{item.date}</time>
                <span>{item.title}</span>
                <span className="text-sm text-muted-2">— {item.note}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  )
}
