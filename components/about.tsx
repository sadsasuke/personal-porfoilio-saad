"use client"

import Image from "next/image"
import { useState, useEffect } from "react"
import { useInView } from "@/hooks/use-in-view"
import { cn } from "@/lib/utils"

const stats = [
  { value: "8+", label: "Years Experience" },
  { value: "Agentic", label: "Architecture" },
  { value: "BIM", label: "Integration" },
  { value: "MEng", label: "Aalto University" },
]

export function About() {
  const { ref, isInView } = useInView(0.1)

  return (
    <section id="about" className="py-24 lg:py-32" ref={ref}>
      <div className="mx-auto max-w-screen-xl px-6 lg:px-12">
        <div
          className={cn(
            "mb-16 transition-all duration-700",
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          )}
        >
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-semibold text-foreground leading-tight text-balance mb-8">
            About
          </h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left: label + Image Slider */}
          <div className="lg:col-span-5">
            <div
              className={cn(
                "relative rounded-2xl overflow-hidden aspect-[4/5] bg-muted transition-all duration-700 delay-200 ring-1 ring-border shadow-2xl",
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              )}
            >
              <Image
                src="/images/Azhar-Saad_043_web_cross_arm.jpg"
                alt="Saad Azhar - arms crossed portrait"
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent" />
            </div>
          </div>

          {/* Right: text */}
          <div className="lg:col-span-7 flex flex-col justify-start">
            <div className="space-y-6 text-left">
              <p
                className={cn(
                  "text-lg lg:text-xl text-foreground/90 leading-relaxed transition-all duration-700 delay-100",
                  isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                )}
              >
                I am an agentic systems engineer with nearly 8 years of experience bridging civil
                engineering and advanced AI. My focus is on creating autonomous agents that
                understand the physical world—from surveying hydropower sites to building
                generative AI agents that reason over BIM data and construction workflows.
              </p>
              <p
                className={cn(
                  "text-lg lg:text-xl text-foreground/90 leading-relaxed transition-all duration-700 delay-200",
                  isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                )}
              >
                Currently at Granlund, I architect agentic AI solutions for complex building systems.
                Previously, as a Founding Engineer at Complink and Data Scientist at Aiforsite,
                I specialized in multi-agent orchestration, BIM (IFC) reasoning, and
                large-scale point cloud processing for the construction industry.
              </p>
              <p
                className={cn(
                  "text-lg lg:text-xl text-foreground/90 leading-relaxed transition-all duration-700 delay-300",
                  isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                )}
              >
                I hold a Master of Engineering from Aalto University with a focus
                on data science and machine learning, where my thesis applied
                computer vision to automate concrete workability estimation.
              </p>
            </div>

            {/* Stats */}
            <div
              className={cn(
                "mt-12 grid grid-cols-2 sm:grid-cols-4 gap-6 pt-10 border-t border-border transition-all duration-700 delay-400",
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              )}
            >
              {stats.map((stat) => (
                <div key={stat.label} className="text-left">
                  <p className="text-3xl font-semibold text-[#00a2ff]">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
