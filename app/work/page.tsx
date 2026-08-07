import type { Metadata } from "next"
import { NowSection } from "@/components/now-section"
import { WorkSection } from "@/components/work-section"

export const metadata: Metadata = {
  title: "Work — Andrei Dan",
  description: "What Andrei Dan is working on now, and a selection of past projects.",
}

export default function WorkPage() {
  return (
    <main className="pt-16 md:pt-20 pb-24">
      <NowSection />
      <WorkSection />
    </main>
  )
}
