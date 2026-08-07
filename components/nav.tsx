"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"

const links = [
  { href: "/", label: "Home" },
  { href: "/work", label: "Work" },
  { href: "/archive", label: "Archive" },
]

export function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm transition-shadow ${
        scrolled ? "shadow-[0_1px_0_var(--border)]" : ""
      }`}
    >
      <div className="mx-auto max-w-3xl px-6 py-5 md:px-10">
        <nav className="flex items-center gap-6 md:gap-8">
          {links.map((link) => {
            const isActive = pathname === link.href
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-[15px] tracking-wide transition-colors hover:text-foreground ${
                  isActive ? "font-medium text-foreground" : "text-muted"
                }`}
              >
                {link.label}
              </Link>
            )
          })}
        </nav>
      </div>
    </header>
  )
}
