"use client"

import { useInView } from "@/hooks/use-in-view"
import { cn } from "@/lib/utils"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"

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
    brandColor: "#F59E0B",
    logoLetter: "A!",
    logoUrl: "/logos/aalto.png"
  },
  {
    institution: "NUST -- NICE",
    degree: "Bachelor of Engineering -- Civil Engineering",
    period: "2012 -- 2016",
    location: "Pakistan",
    focus: [],
    brandColor: "#3B82F6",
    logoLetter: "N",
    logoUrl: "/logos/nust.png"
  },
]

const certifications = [
  {
    title: "Graph Data Modeling Fundamentals",
    issuer: "Neo4j",
    date: "Sep 2025",
    color: "#008CC1",
    logoUrl: "/logos/neo4j.png"
  },
  {
    title: "Neo4j Fundamentals",
    issuer: "Neo4j",
    date: "Sep 2025",
    color: "#008CC1",
    logoUrl: "/logos/neo4j.png"
  },
  {
    title: "Azure AI Fundamentals",
    issuer: "Microsoft",
    date: "Apr 2021",
    color: "#3B82F6",
    logoUrl: "/logos/microsoft.png"
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
          <p className="text-sm font-mono tracking-widest uppercase text-[#00a2ff] mb-4">
            Education & Certifications
          </p>
          <h2 className="text-3xl lg:text-4xl font-semibold text-foreground text-balance max-w-2xl">
            Academic foundation in engineering and data science
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {education.map((edu, i) => (
            <div
              key={edu.institution}
              className={cn(
                "group relative p-8 sm:p-10 rounded-3xl border border-border/50 bg-card/30 transition-all duration-500 hover:bg-card/60 hover:shadow-xl",
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              )}
              style={{
                transitionDelay: `${i * 150}ms`,
              }}
            >
              {/* Hover border glow */}
              <div
                className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                style={{
                  boxShadow: `inset 0 0 0 1px ${edu.brandColor}30, 0 0 40px ${edu.brandColor}10`,
                }}
              />

              <div className="relative z-10">
                <div className="flex justify-between items-start mb-8">
                  {/* Logo */}
                  {edu.logoUrl ? (
                    <div className="w-16 h-16 relative rounded-2xl overflow-hidden bg-white shadow-sm ring-1 ring-border/20 group-hover:shadow-md transition-all duration-300">
                      <Image
                        src={edu.logoUrl}
                        alt={`${edu.institution} logo`}
                        fill
                        className="object-contain p-2.5 transition-transform duration-500 group-hover:scale-110"
                        sizes="64px"
                      />
                    </div>
                  ) : (
                    <div
                      className="w-16 h-16 rounded-2xl flex items-center justify-center text-xl font-bold transition-all duration-500 group-hover:scale-110 shadow-sm"
                      style={{
                        backgroundColor: `${edu.brandColor}15`,
                        color: edu.brandColor,
                      }}
                    >
                      {edu.logoLetter}
                    </div>
                  )}

                  <Badge variant="outline" className="font-mono bg-background/50 text-muted-foreground border-border/50">
                    {edu.period}
                  </Badge>
                </div>

                <h3 className="text-2xl font-medium text-foreground mb-2 leading-tight">
                  {edu.degree}
                </h3>
                <p className="text-base font-medium flex items-center gap-2" style={{ color: edu.brandColor }}>
                  {edu.institution}
                  <span className="text-muted-foreground text-sm font-normal">
                    &middot; {edu.location}
                  </span>
                </p>

                {edu.thesis && (
                  <div className="mt-8 pt-6 border-t border-border/50">
                    <p className="text-sm text-foreground/80 leading-relaxed relative pl-4">
                      <span className="absolute left-0 top-1.5 w-1 h-1 rounded-full bg-primary/40" />
                      <span className="text-foreground font-medium mr-2">Thesis:</span>
                      {edu.thesis}
                    </p>
                  </div>
                )}

                {edu.focus.length > 0 && (
                  <div className="mt-8 flex flex-wrap gap-2">
                    {edu.focus.map((f) => (
                      <Badge
                        key={f}
                        variant="secondary"
                        className="font-normal transition-colors duration-300 bg-secondary/50 hover:bg-secondary"
                      >
                        {f}
                      </Badge>
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
            "mt-20 transition-all duration-700 delay-300",
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          )}
        >
          <div className="flex items-center gap-4 mb-8">
            <h3 className="text-2xl font-semibold text-foreground">Certifications</h3>
            <div className="h-[1px] flex-1 bg-border/50" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, i) => (
              <div
                key={cert.title + i}
                className={cn(
                  "group relative p-6 rounded-2xl border border-border/50 bg-card/30 hover:bg-card/60 transition-all duration-500 hover:shadow-lg flex items-start gap-5",
                  isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                )}
                style={{ transitionDelay: `${400 + i * 100}ms` }}
              >
                {/* Glow left border */}
                <div
                  className="absolute left-0 top-0 bottom-0 w-1 rounded-l-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ backgroundColor: cert.color }}
                />

                {cert.logoUrl ? (
                  <div className="w-12 h-12 relative rounded-xl overflow-hidden bg-white shadow-sm ring-1 ring-border/20 shrink-0">
                    <Image
                      src={cert.logoUrl}
                      alt={`${cert.issuer} logo`}
                      fill
                      className="object-contain p-2"
                      sizes="48px"
                    />
                  </div>
                ) : (
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                    style={{ backgroundColor: `${cert.color}15` }}
                  >
                    <div
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: cert.color }}
                    />
                  </div>
                )}

                <div>
                  <p className="text-base font-medium text-foreground leading-tight group-hover:text-primary transition-colors">
                    {cert.title}
                  </p>
                  <p className="text-sm text-muted-foreground mt-1.5 flex items-center justify-between">
                    <span>{cert.issuer}</span>
                    <span className="font-mono text-xs opacity-70">{cert.date}</span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
