"use client"

import { useReveal } from "@/lib/use-reveal"

const RANDOM_STATS = [
  "3× Team Finalist Ontario Pro-Con Debating",
  "2× High Point Speaker Ontario Pro-Con Debating",
  "2× Bronze Medalist, Swimming Ontario Open",
  "Internal affairs for local newspaper",
  "17 countries so far",
  "5K swim < 1 hour",
  "Can dunk",
  "1600 chess.com elo",
]

export function ArchiveLists() {
  const ref = useReveal<HTMLDivElement>()

  return (
    <div className="mx-auto max-w-3xl px-6 py-14 md:px-10">
      <div ref={ref} className="reveal">
        <ul className="space-y-4">
          {RANDOM_STATS.map((stat) => (
            <li key={stat} className="flex gap-3 text-[17px] leading-relaxed text-foreground/85">
              <span className="text-muted-2">—</span>
              {stat}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
