"use client"

import { useInView } from "@/hooks/use-in-view"
import { cn } from "@/lib/utils"
import { Mail, Linkedin, Github, ArrowUpRight } from "lucide-react"
import Image from "next/image"

const links = [
  {
    label: "saadazhar7@gmail.com",
    href: "#contact",
    icon: Mail,
    desc: "Email",
  },
  {
    label: "Saad Azhar",
    href: "https://www.linkedin.com/in/saadazhar7/",
    icon: Linkedin,
    desc: "LinkedIn",
  },
  {
    label: "sadsasuke",
    href: "https://github.com/sadsasuke",
    icon: Github,
    desc: "GitHub",
  },
]

export function Contact() {
  const { ref, isInView } = useInView(0.1)

  return (
    <section id="contact" className="py-24 lg:py-32 relative" ref={ref}>
      {/* Ambient glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#0c4a6e]/8 rounded-full blur-[120px] pointer-events-none" />

      <div className="mx-auto max-w-screen-xl px-6 lg:px-12 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left: image composition */}
          <div
            className={cn(
              "lg:col-span-5 transition-all duration-700",
              isInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            )}
          >
            <div className="relative max-w-sm mx-auto lg:mx-0">
              {/* Main photo */}
              <div className="relative rounded-2xl overflow-hidden aspect-[3/4]">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Azhar-Saad_010-neIMEZo8c5V1NjE4h0UYGVr6vm8n7I.jpg"
                  alt="Saad Azhar"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
              </div>

              {/* Floating secondary photo */}
              <div className="absolute -bottom-4 -right-4 w-28 h-28 rounded-xl overflow-hidden border-2 border-background shadow-xl ring-1 ring-[#00a2ff]/20">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Azhar-Saad_048_nelio-NaBw5cogYAk5k3tF7OVn56f6oVN0xo.jpg"
                  alt="Saad Azhar portrait"
                  fill
                  className="object-cover"
                  sizes="112px"
                />
              </div>
            </div>
          </div>

          {/* Right: contact info */}
          <div className="lg:col-span-7">
            <p
              className={cn(
                "text-sm font-mono tracking-widest uppercase text-[#00a2ff] mb-4 transition-all duration-700",
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              )}
            >
              Get in touch
            </p>
            <h2
              className={cn(
                "text-3xl lg:text-4xl xl:text-5xl font-semibold text-foreground leading-tight text-balance max-w-xl transition-all duration-700 delay-100",
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              )}
            >
              Interested in working together?
            </h2>
            <p
              className={cn(
                "mt-4 text-lg text-muted-foreground leading-relaxed max-w-md transition-all duration-700 delay-200",
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              )}
            >
              Always open to collaborations, conversations, and new challenges
              in AI, construction tech, and beyond.
            </p>

            <div
              className={cn(
                "mt-10 space-y-3 transition-all duration-700 delay-300",
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              )}
            >
              {links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={
                    link.href.startsWith("mailto") ? undefined : "_blank"
                  }
                  rel={
                    link.href.startsWith("mailto")
                      ? undefined
                      : "noopener noreferrer"
                  }
                  className="group flex items-center gap-4 p-4 -mx-4 rounded-xl transition-all duration-300 hover:bg-secondary/60"
                >
                  <div className="w-11 h-11 rounded-lg bg-[#00a2ff]/10 flex items-center justify-center transition-all duration-300 group-hover:bg-[#00a2ff]/20 group-hover:scale-110">
                    <link.icon className="h-5 w-5 text-[#7dd3fc]" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-foreground group-hover:text-[#7dd3fc] transition-colors">
                      {link.label}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {link.desc}
                    </p>
                  </div>
                  <ArrowUpRight className="h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom thematic banner */}
        <div
          className={cn(
            "mt-20 relative rounded-2xl overflow-hidden h-48 lg:h-64 transition-all duration-700 delay-500",
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
        >
          <Image
            src="/images/smart-buildings.jpg"
            alt="Smart building technology visualization"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/70 to-background/30" />
          <div className="absolute inset-0 flex items-center px-8 lg:px-12">
            <div>
              <p className="text-sm font-mono text-[#7dd3fc] tracking-widest uppercase mb-2">
                Building the future
              </p>
              <p className="text-2xl lg:text-3xl font-semibold text-foreground max-w-md text-balance">
                AI-driven solutions for the built environment
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
