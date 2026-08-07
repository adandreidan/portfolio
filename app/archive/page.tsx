import type { Metadata } from "next"
import { ArchiveLists } from "@/components/archive-lists"

export const metadata: Metadata = {
  title: "Archive — Andrei Dan",
  description: "A few random stats about Andrei Dan.",
}

export default function ArchivePage() {
  return (
    <main className="min-h-screen pt-32 pb-24 md:pt-40">
      <div className="mx-auto max-w-3xl px-6 md:px-10">
        <span className="kicker text-sm">Archive</span>
        <h1 className="mt-2 text-3xl tracking-tight md:text-4xl">Random stats</h1>
        <p className="mt-3 max-w-md text-[15px] leading-relaxed text-muted">
          A few random stats about me.
        </p>
      </div>
      <ArchiveLists />
    </main>
  )
}
