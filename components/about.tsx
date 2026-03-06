"use client"

import Image from "next/image"
import { useState, useEffect } from "react"
import { useInView } from "@/hooks/use-in-view"
import { cn } from "@/lib/utils"

const stats = [
  { value: "8+", label: "Years Experience" },
  { value: "97%", label: "Path-Finding Accuracy" },
  { value: "3", label: "Languages Spoken" },
  { value: "MEng", label: "Aalto University" },
]

const aboutImages = [
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Azhar-Saad_043-3AqBTfxiyGMzH5VaNObyrt3LNcDvDb.jpg",
    alt: "Saad Azhar - arms crossed portrait"
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Azhar-Saad_048-C3hElU7ekHVU2ytmeHjpjCkFqukRI2.jpg",
    alt: "Saad Azhar - casual portrait"
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Azhar-Saad_010_web-qocV8NFthI7pUJqCFFKECdlyUZV1Pb.jpg",
    alt: "Saad Azhar - standing"
  }
]

export function About() {
  const { ref, isInView } = useInView(0.1)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % aboutImages.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section id="about" className="py-24 lg:py-32 relative" ref={ref}>
      <div className="mx-auto max-w-screen-xl px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left: label + Image Slider */}
          <div className="lg:col-span-5">
            <p
              className={cn(
                "text-sm font-mono tracking-widest uppercase text-[#00a2ff] mb-8 transition-all duration-700",
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              )}
            >
              About
            </p>

            <div
              className={cn(
                "relative rounded-2xl overflow-hidden aspect-[4/5] bg-muted transition-all duration-700 delay-200 ring-1 ring-border shadow-2xl",
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              )}
            >
              {aboutImages.map((image, idx) => (
                <div
                  key={image.src}
                  className={cn(
                    "absolute inset-0 transition-opacity duration-1000",
                    idx === currentImageIndex ? "opacity-100" : "opacity-0"
                  )}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                  />
                </div>
              ))}
              <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent" />

              {/* Slider indicators */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
                {aboutImages.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentImageIndex(idx)}
                    className={cn(
                      "w-1.5 h-1.5 rounded-full transition-all",
                      idx === currentImageIndex ? "bg-[#00a2ff] w-4" : "bg-white/30 hover:bg-white/50"
                    )}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Right: text */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <div className="space-y-6">
              <p
                className={cn(
                  "text-lg lg:text-xl text-foreground/90 leading-relaxed transition-all duration-700 delay-100",
                  isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                )}
              >
                I am an engineer with nearly 8 years of experience spanning civil
                engineering, data science, and AI/ML. My journey has taken me from
                surveying hydropower sites in Pakistan to building autonomous
                path-finding algorithms and AI chat models for the construction
                industry in Finland.
              </p>
              <p
                className={cn(
                  "text-lg lg:text-xl text-foreground/90 leading-relaxed transition-all duration-700 delay-200",
                  isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                )}
              >
                Currently at Granlund working on AI and data-driven solutions for
                building and energy systems. Previously a Founding Engineer at
                Complink designing scalable AI/ML solutions for construction workflows,
                and Data Scientist at Aiforsite leading projects involving computer
                vision, SLAM algorithms, and large language models.
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
                <div key={stat.label}>
                  <p className="text-3xl font-semibold text-[#00a2ff]">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            {/* Thematic image strip */}
            <div
              className={cn(
                "mt-10 relative rounded-xl overflow-hidden h-40 transition-all duration-700 delay-500",
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              )}
            >
              <Image
                src="/images/construction-ai.jpg"
                alt="Construction site with AI data visualization overlay"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 55vw"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-background/60 via-transparent to-background/60" />
              <div className="absolute inset-0 flex items-center justify-center">
                <p className="text-sm font-mono text-foreground/70 tracking-widest uppercase">
                  Where AI meets Construction
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
