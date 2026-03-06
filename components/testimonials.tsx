"use client"

import { useInView } from "@/hooks/use-in-view"
import { cn } from "@/lib/utils"
import Image from "next/image"

const testimonials = [
  {
    quote:
      "Saad is one of those rare engineers who combines deep technical knowledge with real-world problem-solving in a way that just makes things better. He doesn't just follow trends; he understands the why behind the tech and uses that to build smarter, more sustainable solutions.",
    author: "Thaman Chand",
    context: "Colleague at Aiforsite",
  },
  {
    quote:
      "Among my top recruits. A true systems engineer with great problem solving skills: excellent in conceptualizing and evaluating suitable approaches, with multi-disciplinary hands-on competences to implement the solution. A person with high work motivation and ambition to develop himself.",
    author: "Tuomas Lackman",
    context: "Manager at Aiforsite",
  },
]

export function Testimonials() {
  const { ref, isInView } = useInView(0.1)

  return (
    <section className="py-24 lg:py-32 relative overflow-hidden" ref={ref}>
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#0c4a6e]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="mx-auto max-w-screen-xl px-6 lg:px-12 relative">
        <div
          className={cn(
            "mb-16 transition-all duration-700",
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          )}
        >
          <p className="text-sm font-mono tracking-widest uppercase text-[#00a2ff] mb-4">
            Recommendations
          </p>
          <h2 className="text-3xl lg:text-4xl font-semibold text-foreground text-balance max-w-2xl">
            What colleagues say
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <blockquote
              key={t.author}
              className={cn(
                "group relative p-6 sm:p-8 rounded-2xl border border-border bg-card transition-all duration-500 hover:border-[#00a2ff]/30 hover:shadow-lg hover:shadow-[#00a2ff]/5",
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              )}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              <span className="absolute top-4 right-6 text-6xl font-serif text-[#00a2ff]/10 leading-none select-none">
                {'"'}
              </span>

              <p className="text-base text-foreground/80 leading-relaxed relative z-10">
                {`"${t.quote}"`}
              </p>
              <footer className="mt-6 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#00a2ff]/10 flex items-center justify-center text-sm font-semibold text-[#00a2ff]">
                  {t.author
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">
                    {t.author}
                  </p>
                  <p className="text-xs text-muted-foreground">{t.context}</p>
                </div>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}
