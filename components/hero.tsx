"use client"

import Image from "next/image"
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden" id="hero">
      {/* Ambient glows */}
      <div className="absolute top-1/4 -right-32 w-96 h-96 bg-[#0c4a6e]/8 rounded-full blur-[120px] animate-glow-pulse pointer-events-none" />
      <div className="absolute bottom-1/4 -left-32 w-72 h-72 bg-[#F7941D]/6 rounded-full blur-[100px] animate-glow-pulse animation-delay-500 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#8CC63F]/4 rounded-full blur-[180px] pointer-events-none" />

      <div className="mx-auto max-w-screen-xl w-full px-6 lg:px-12 pt-28 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <div className="order-2 lg:order-1 lg:col-span-7">
            <div className="opacity-0 animate-fade-up">
              <div className="flex items-center gap-3 text-muted-foreground text-sm font-mono tracking-widest uppercase mb-6">
                <span className="w-8 h-px bg-[#00a2ff]" />
                Helsinki, Finland
              </div>
            </div>

            <h1 className="opacity-0 animate-fade-up animation-delay-100 text-5xl sm:text-6xl lg:text-7xl xl:text-[5.5rem] font-semibold tracking-tight leading-[1.05] text-foreground text-balance">
              Saad<br />
              <span className="text-[#00a2ff]">Azhar</span>
            </h1>

            <p className="opacity-0 animate-fade-up animation-delay-200 mt-6 text-lg sm:text-xl lg:text-2xl text-muted-foreground font-light leading-relaxed max-w-xl">
              Founding Engineer & Data Scientist building production-ready AI
              solutions for the built environment.
            </p>

            <div className="opacity-0 animate-fade-up animation-delay-300 mt-8 flex flex-wrap gap-3">
              {["Machine Learning", "Computer Vision", "LLMs", "ConTech", "Smart Buildings"].map(
                (tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center rounded-full border border-[#00a2ff]/20 bg-[#00a2ff]/5 px-4 py-1.5 text-xs font-mono text-[#7dd3fc] transition-all hover:bg-[#00a2ff]/10 hover:border-[#00a2ff]/40"
                  >
                    {tag}
                  </span>
                )
              )}
            </div>

            <div className="opacity-0 animate-fade-up animation-delay-400 mt-10 flex items-center gap-4">
              <a
                href="#experience"
                className="inline-flex items-center gap-2 rounded-full bg-[#00a2ff] text-[#0a1f0f] px-6 py-3 text-sm font-medium transition-all hover:bg-[#0077c2] hover:shadow-lg hover:shadow-[#00a2ff]/25"
              >
                View experience
                <ArrowDown className="h-4 w-4" />
              </a>
              <a
                href="https://github.com/sadsasuke"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-[#00a2ff]/40 transition-all"
                aria-label="GitHub"
              >
                <Github className="h-4 w-4" />
              </a>
              <a
                href="https://www.linkedin.com/in/saadazhar7/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-[#00a2ff]/40 transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href="#contact"
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-[#00a2ff]/40 transition-all"
                aria-label="Email"
              >
                <Mail className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Photo Composition */}
          <div className="order-1 lg:order-2 lg:col-span-5 flex justify-center lg:justify-end">
            <div className="opacity-0 animate-scale-in animation-delay-300 relative">
              {/* Main portrait */}
              <div className="relative w-80 h-[26rem] sm:w-96 sm:h-[32rem] lg:w-[26rem] lg:h-[34rem] rounded-2xl overflow-hidden ring-1 ring-border shadow-2xl">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Azhar-Saad_048_web-u7vg2ZwSs9ZSaKVGm1B6BFO5kAtIuQ.jpg"
                  alt="Saad Azhar - full portrait"
                  fill
                  priority
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 320px, (max-width: 1024px) 384px, 416px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent" />
              </div>

              {/* Decorative accent corners */}
              <div className="absolute -top-6 -right-6 w-24 h-24 border-t-2 border-r-2 border-[#00a2ff]/40 rounded-tr-3xl pointer-events-none" />
              <div className="absolute -bottom-6 -left-6 w-24 h-24 border-b-2 border-l-2 border-[#F7941D]/30 rounded-bl-3xl pointer-events-none" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
