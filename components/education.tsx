"use client"

import { useInView } from "@/hooks/use-in-view"
import { cn } from "@/lib/utils"

const education = [
  {
    institution: "Aalto University",
    degree: "Master of Engineering -- MEng",
    period: "2019 -- 2021",
    location: "Finland",
    thesis:
      "Machine learning approach for estimating workability of concrete from mixing image sequences using a 3D stereo camera system.",
    focus: [
      "Computer Vision",
      "Machine Learning (Supervised & Unsupervised)",
      "Deep Learning",
      "Information Visualization",
    ],
    brandColor: "#FFC709",
    logoLetter: "A!",
  },
  {
    institution: "NUST -- NICE",
    degree: "Bachelor of Engineering -- Civil Engineering",
    period: "2012 -- 2016",
    location: "Pakistan",
    focus: [],
    brandColor: "#003366",
    logoLetter: "N",
  },
]

const certifications = [
  {
    title: "Graph Data Modeling Fundamentals",
    issuer: "Neo4j",
    date: "Sep 2025",
    color: "#008CC1",
  },
  {
    title: "Neo4j Fundamentals",
    issuer: "Neo4j",
    date: "Sep 2025",
    color: "#008CC1",
  },
  {
    title: "Azure AI Fundamentals",
    issuer: "Microsoft",
    date: "Apr 2021",
    color: "#0078D4",
  },
]

export function Education() {
  const { ref, isInView } = useInView(0.1)

  return (
    <section id="education" className="py-24 lg:py-32" ref={ref}>
      <div className="mx-auto max-w-screen-xl px-6 lg:px-12">
        <div
          className={cn(
            "mb-16 transition-all duration-700",
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          )}
        >
          <p className="text-sm font-mono tracking-widest uppercase text-[#2d8a4e] mb-4">
            Education & Certifications
          </p>
          <h2 className="text-3xl lg:text-4xl font-semibold text-foreground text-balance max-w-2xl">
            Academic foundation in engineering and data science
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {education.map((edu, i) => (
            <div
              key={edu.institution}
              className={cn(
                "group relative p-6 sm:p-8 rounded-2xl border border-border bg-card transition-all duration-500 hover:border-transparent",
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              )}
              style={{
                transitionDelay: `${i * 150}ms`,
              }}
            >
              {/* Hover border glow */}
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  boxShadow: `inset 0 0 0 1px ${edu.brandColor}40, 0 0 20px ${edu.brandColor}10`,
                }}
              />

              <div className="relative">
                {/* Logo */}
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center text-lg font-bold mb-6 transition-transform duration-300 group-hover:scale-110"
                  style={{
                    backgroundColor: `${edu.brandColor}15`,
                    color: edu.brandColor,
                  }}
                >
                  {edu.logoLetter}
                </div>

                <h3 className="text-lg font-medium text-foreground">
                  {edu.degree}
                </h3>
                <p className="mt-1 text-sm" style={{ color: edu.brandColor }}>
                  {edu.institution}
                  <span className="text-muted-foreground">
                    {" -- "}{edu.location}
                  </span>
                </p>
                <p className="text-sm font-mono text-muted-foreground mt-1">
                  {edu.period}
                </p>

                {edu.thesis && (
                  <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
                    <span className="text-foreground/70 font-medium">Thesis:</span>{" "}
                    {edu.thesis}
                  </p>
                )}

                {edu.focus.length > 0 && (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {edu.focus.map((f) => (
                      <span
                        key={f}
                        className="inline-flex items-center rounded-full px-3 py-1 text-xs font-mono transition-colors duration-300"
                        style={{
                          backgroundColor: `${edu.brandColor}10`,
                          color: `${edu.brandColor}cc`,
                          border: `1px solid ${edu.brandColor}20`,
                        }}
                      >
                        {f}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div
          className={cn(
            "mt-12 transition-all duration-700 delay-300",
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          )}
        >
          <p className="text-sm font-mono tracking-widest uppercase text-muted-foreground mb-6">
            Certifications
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {certifications.map((cert, i) => (
              <div
                key={cert.title}
                className={cn(
                  "group p-5 rounded-xl border border-border bg-card hover:bg-secondary/50 transition-all duration-500",
                  isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                )}
                style={{ transitionDelay: `${400 + i * 100}ms` }}
              >
                <div
                  className="w-2 h-2 rounded-full mb-3"
                  style={{ backgroundColor: cert.color }}
                />
                <p className="text-sm font-medium text-foreground">
                  {cert.title}
                </p>
                <p className="text-xs text-muted-foreground mt-1">
                  {cert.issuer}
                </p>
                <p className="text-xs font-mono text-muted-foreground mt-1">
                  {cert.date}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
