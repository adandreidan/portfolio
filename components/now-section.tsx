"use client"

import { useReveal } from "@/lib/use-reveal"

const items = [
  {
    date: "2026.05 — Present",
    title: "Corpay — Software Automation Engineer",
    note: "Building internal automation tooling.",
    url: "https://www.corpay.com/",
  },
  {
    date: "2025.12 — Present",
    title: "UWaterloo CUBE — Software Developer",
    note: "Backend systems, working on an NLP query engine.",
    url: "https://www.linkedin.com/company/uwcube/posts/?feedView=all",
  },
  {
    date: "2025.05 — 06",
    title: "Doxim — Software Engineer Intern",
    note: "Data extraction pipelines.",
    url: "https://www.doxim.com",
  },
]

export function NowSection() {
  const ref = useReveal<HTMLDivElement>()

  return (
    <section id="now" className="mx-auto max-w-3xl px-6 pt-10 pb-14 md:px-10 md:pt-14 md:pb-16">
      <div ref={ref} className="reveal">
        <span className="kicker text-sm">Now</span>
        <h2 className="mt-2 text-2xl tracking-tight md:text-3xl">What&rsquo;s new</h2>

        <ul className="mt-10 divide-y divide-border">
          {items.map((item) => (
            <li key={item.title} className="flex flex-col gap-1.5 py-5 first:pt-0 sm:flex-row sm:gap-8">
              <time className="shrink-0 text-sm text-muted-2 sm:w-32">{item.date}</time>
              <div>
                <h3 className="text-[17px] leading-snug">
                  {item.url ? (
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline decoration-border decoration-1 underline-offset-4 transition-colors hover:decoration-foreground"
                    >
                      {item.title}
                    </a>
                  ) : (
                    item.title
                  )}
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-muted">{item.note}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
