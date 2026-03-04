"use client"

import { Badge } from "@/components/ui/badge"
import { useInView } from "@/hooks/use-in-view"
import { cn } from "@/lib/utils"

const skillCategories = [
  {
    title: "AI & Machine Learning",
    color: "#2d8a4e",
    skills: [
      "Machine Learning",
      "Deep Learning",
      "Computer Vision",
      "LLMs",
      "Prompt Engineering",
      "SLAM Algorithms",
      "Data Mining",
      "NLP",
    ],
  },
  {
    title: "Languages & Tools",
    color: "#F7941D",
    skills: [
      "Python",
      "Docker",
      "Civil 3D",
      "Tekla Structures",
      "Neo4j",
      "Azure",
      "Git",
      "Linux",
    ],
  },
  {
    title: "Domain Expertise",
    color: "#00A6FF",
    skills: [
      "BIM",
      "Construction Technology",
      "Procurement Automation",
      "Point Clouds",
      "3D Camera Systems",
      "Hydropower",
    ],
  },
  {
    title: "Soft Skills",
    color: "#FFC709",
    skills: [
      "Team Building",
      "Technical Hiring",
      "Mentoring",
      "Public Speaking",
      "Research",
      "Product Strategy",
    ],
  },
]

export function Skills() {
  const { ref, isInView } = useInView(0.1)

  return (
    <section id="skills" className="py-24 lg:py-32" ref={ref}>
      <div className="mx-auto max-w-screen-xl px-6 lg:px-12">
        <div
          className={cn(
            "mb-16 transition-all duration-700",
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          )}
        >
          <p className="text-sm font-mono tracking-widest uppercase text-[#2d8a4e] mb-4">
            Skills
          </p>
          <h2 className="text-3xl lg:text-4xl font-semibold text-foreground text-balance max-w-2xl">
            Technical toolkit refined across industries
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {skillCategories.map((cat, catIndex) => (
            <div
              key={cat.title}
              className={cn(
                "group p-6 rounded-2xl border border-border bg-card hover:bg-secondary/40 transition-all duration-500",
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              )}
              style={{ transitionDelay: `${catIndex * 120}ms` }}
            >
              <div className="flex items-center gap-3 mb-5">
                <div
                  className="w-3 h-3 rounded-full transition-transform duration-300 group-hover:scale-125"
                  style={{ backgroundColor: cat.color }}
                />
                <h3 className="text-sm font-medium text-foreground">
                  {cat.title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill, i) => (
                  <Badge
                    key={skill}
                    variant="secondary"
                    className="font-mono text-xs font-normal transition-all duration-300 hover:scale-105"
                    style={{
                      transitionDelay: `${catIndex * 80 + i * 30}ms`,
                    }}
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
