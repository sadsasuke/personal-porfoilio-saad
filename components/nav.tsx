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
]

export function Nav() {
  const [activeSection, setActiveSection] = useState("")
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
      const sections = [...navItems.map((item) => item.href.slice(1)), "contact"]
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
    <>
      <div className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 transition-all duration-500 pointer-events-none mt-4 sm:mt-6">
        <nav
          className={cn(
            "pointer-events-auto transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]",
            scrolled
              ? "bg-[#00a2ff]/10 dark:bg-[#00a2ff]/20 backdrop-blur-2xl border border-[#00a2ff]/30 shadow-2xl shadow-[#00a2ff]/20 rounded-full px-4 sm:px-6 py-2.5 w-full max-w-3xl"
              : "bg-background/40 backdrop-blur-xl border border-border/40 shadow-xl rounded-full px-4 sm:px-6 py-2.5 w-full max-w-4xl"
          )}
        >
          <div className={cn(
            "flex items-center justify-between transition-all duration-500 gap-4 sm:gap-8",
            scrolled ? "mx-0" : "mx-auto"
          )}>
            <a
              href="#"
              className="text-foreground tracking-tight text-xl font-bold transition-all hover:text-[#00a2ff] hover:scale-105 active:scale-95 shrink-0"
            >
              SA<span className="text-[#00a2ff]">.</span>
            </a>

            {/* Desktop Navigation */}
            <ul className="hidden md:flex items-center justify-center space-x-1">
              {navItems.map((item) => {
                const isActive = activeSection === item.href.slice(1);
                return (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      className={cn(
                        "relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-full block",
                        isActive
                          ? "text-[#00a2ff] bg-[#00a2ff]/10"
                          : "text-muted-foreground hover:text-foreground hover:bg-foreground/5 hover:backdrop-blur-sm"
                      )}
                    >
                      {isActive && (
                        <span className="absolute inset-0 bg-[#00a2ff]/10 rounded-full -z-10 animate-fade-in" />
                      )}
                      {item.label}
                    </a>
                  </li>
                );
              })}
            </ul>

            {/* CTA & Mobile Toggle */}
            <div className="flex items-center gap-2 sm:gap-4 shrink-0">
              <a
                href="#contact"
                className="hidden sm:inline-flex items-center justify-center gap-2 rounded-full bg-[#00a2ff] px-6 py-2 text-sm font-medium text-white transition-all hover:bg-[#0077c2] hover:shadow-lg hover:shadow-[#00a2ff]/25 hover:-translate-y-0.5 active:translate-y-0"
              >
                Contact
              </a>
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="md:hidden flex items-center justify-center w-10 h-10 rounded-full hover:bg-foreground/10 transition-colors text-foreground"
                aria-label="Toggle menu"
              >
                {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </div>
        </nav>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 bg-background/95 backdrop-blur-xl md:hidden animate-fade-in flex flex-col pt-32 px-6">
          <div className="flex flex-col gap-6">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.slice(1);
              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className={cn(
                    "text-4xl font-semibold tracking-tight py-2 border-b border-border/30 transition-colors",
                    isActive ? "text-[#00a2ff]" : "text-muted-foreground hover:text-foreground hover:pl-2"
                  )}
                >
                  {item.label}
                </a>
              )
            })}
            <a
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-[#00a2ff] px-8 py-5 text-xl font-medium text-white transition-all hover:bg-[#0077c2]"
            >
              Get in touch
            </a>
          </div>
        </div>
      )}
    </>
  )
}
