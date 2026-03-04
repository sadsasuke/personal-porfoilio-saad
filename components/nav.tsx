"use client"

import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"
import { Menu, X } from "lucide-react"

const navItems = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
]

export function Nav() {
  const [activeSection, setActiveSection] = useState("")
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
      const sections = navItems.map((item) => item.href.slice(1))
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i])
        if (el) {
          const rect = el.getBoundingClientRect()
          if (rect.top <= 150) {
            setActiveSection(sections[i])
            return
          }
        }
      }
      setActiveSection("")
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-background/90 backdrop-blur-xl border-b border-border shadow-lg shadow-[#006B3F]/5"
          : "bg-transparent"
      )}
    >
      <div className="mx-auto max-w-screen-xl flex items-center justify-between px-6 py-4 lg:px-12">
        <a
          href="#"
          className="text-foreground font-semibold tracking-tight text-lg transition-colors hover:text-[#2d8a4e]"
        >
          SA<span className="text-[#2d8a4e]">.</span>
        </a>

        <ul className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className={cn(
                  "text-sm tracking-wide transition-all duration-300 relative",
                  activeSection === item.href.slice(1)
                    ? "text-[#2d8a4e]"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {item.label}
                {activeSection === item.href.slice(1) && (
                  <span className="absolute -bottom-1 left-0 right-0 h-px bg-[#2d8a4e]" />
                )}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          <a
            href="mailto:saadazhar7@gmail.com"
            className="hidden md:inline-flex items-center gap-2 rounded-full border border-[#2d8a4e]/30 bg-[#2d8a4e]/10 px-4 py-1.5 text-sm text-[#4ade80] transition-all hover:bg-[#2d8a4e]/20 hover:border-[#2d8a4e]/50"
          >
            Get in touch
          </a>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-foreground"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-xl border-b border-border animate-fade-in">
          <div className="px-6 py-4 space-y-3">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="block text-sm text-muted-foreground hover:text-foreground transition-colors py-2"
              >
                {item.label}
              </a>
            ))}
            <a
              href="mailto:saadazhar7@gmail.com"
              className="block text-sm text-[#4ade80] py-2"
            >
              saadazhar7@gmail.com
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
