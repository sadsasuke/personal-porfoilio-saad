"use client"

import { useState, useEffect } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowUpRight, ExternalLink } from "lucide-react"
import { cn } from "@/lib/utils"
import { useInView } from "@/hooks/use-in-view"
import Image from "next/image"

interface ExperienceItem {
  company: string
  role: string
  period: string
  location: string
  description: string[]
  skills: string[]
  accentHex: string
  logoUrl?: string
  logoLetter?: string
  url?: string
}

const experiences: ExperienceItem[] = [
  {
    company: "Granlund",
    role: "Data Scientist",
    period: "2025 -- Present",
    location: "Helsinki, Finland",
    description: [
      "Working on AI and data-driven solutions for building and energy systems across the built environment.",
      "Developing scalable ML pipelines for smart building analytics and sustainability optimization.",
    ],
    skills: ["AI/ML", "Data Science", "Smart Buildings", "Energy Systems", "Python"],
    accentHex: "#F97316",
    logoUrl: "/logos/granlund.png",
    url: "https://www.granlund.fi",
  },
  {
    company: "Complink",
    role: "Founding Engineer",
    period: "Aug 2025 -- Present",
    location: "Uusimaa, Finland",
    description: [
      "Develop and deploy scalable AI/ML solutions for construction workflows including BIM data processing and procurement automation.",
      "Design software infrastructure and data pipelines integrating with existing construction industry ecosystems.",
      "Shape product direction and technical roadmap in close alignment with co-founders.",
    ],
    skills: ["AI/ML", "BIM", "Procurement Automation", "Data Pipelines", "Python"],
    accentHex: "#3B82F6",
    logoUrl: "/logos/complink.png",
    url: "https://complink.fi",
  },
  {
    company: "Aiforsite",
    role: "Data Scientist",
    period: "Jul 2022 -- Aug 2025",
    location: "Espoo, Finland",
    description: [
      "Contributed to the development of 'Wendy', an AI chat language model for the construction industry.",
      "Led development of autonomous path-finding algorithms achieving 97% success rate using SLAM.",
      "Built efficient pipelines for continuous algorithm delivery and deployment using Docker.",
    ],
    skills: ["LLMs", "SLAM", "Computer Vision", "Docker", "Prompt Engineering"],
    accentHex: "#26D07C",
    logoUrl: "/logos/aiforsite.png",
    url: "https://www.aiforsite.com",
  },
  {
    company: "Writeomatic",
    role: "Co-Founder",
    period: "Feb 2023 -- Dec 2024",
    location: "Helsinki, Finland",
    description: [
      "Co-founded an AI-powered platform bridging unique individual expressions with diverse social media platforms.",
      "Leveraged generative AI and prompt engineering to deliver bespoke content solutions.",
    ],
    skills: ["Generative AI", "Prompt Engineering", "Product Development"],
    accentHex: "#FF6B35",
    logoUrl: "/logos/writeomatic.png",
    url: "https://writeomatic.app",
  },
  {
    company: "Trimble Inc.",
    role: "Student Brand Ambassador",
    period: "Jul 2020 -- Jul 2022",
    location: "Espoo, Finland",
    description: [
      "Represented Tekla software at Aalto University, gaining public speaking and networking experience.",
      "Received hands-on software training and contributed to brand visibility on campus.",
    ],
    skills: ["Tekla Structures", "Public Speaking", "Networking"],
    accentHex: "#3B82F6",
    logoUrl: "/logos/trimble.png",
    url: "https://www.trimble.com",
  },
  {
    company: "Aalto University",
    role: "Thesis Worker & Research Assistant",
    period: "Jan 2020 -- Aug 2021",
    location: "Espoo, Finland",
    description: [
      "Researched machine learning approach for estimating workability of concrete using 3D stereo camera systems.",
      "Replicated state-of-the-art coarse registration algorithms for point cloud and BIM model alignment.",
      "Served as Aalto Squad Ambassador writing blogs and promoting the university internationally.",
    ],
    skills: ["Computer Vision", "Point Clouds", "3D Camera", "Machine Learning", "Python"],
    accentHex: "#F59E0B",
    logoUrl: "/logos/aalto.png",
    url: "https://www.aalto.fi",
  },
  {
    company: "Shahid and Co",
    role: "Project Engineer",
    period: "Feb 2017 -- Jun 2019",
    location: "Pakistan",
    description: [
      "Managed heavy construction machinery workshop operations and prepared BOQs.",
      "Served as Quantity Surveyor on the Metro Bus Project, Islamabad.",
    ],
    skills: ["Construction Management", "BOQ", "Quantity Surveying", "Site Engineering"],
    accentHex: "#D97706",
    logoLetter: "SC",
  },
  {
    company: "Yangtze Three Gorges",
    role: "Survey Engineer",
    period: "Jul 2016 -- Dec 2016",
    location: "Karot, Pakistan",
    description: [
      "Established survey control points using GPS calibrations on the 720 MW Karot Hydropower Project.",
      "Conducted topographical surveys and generated contour maps using Civil 3D CAD.",
    ],
    skills: ["GPS", "Topographical Survey", "Civil 3D", "Hydropower"],
    accentHex: "#3B82F6",
    logoUrl: "/logos/ctg.png",
  },
]

const photoQuotes = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1541888086425-d81bb19240f5?q=80&w=2670&auto=format&fit=crop",
    quote: "Building the future requires a seamless integration of physical infrastructure and artificial intelligence.",
    tag: "Construction & AI"
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2670&auto=format&fit=crop",
    quote: "Innovation is not just about adopting new tools, but profoundly rethinking how we create and construct.",
    tag: "Innovation"
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop",
    quote: "The true power of AI lies in its ability to augment human capability across the built environment.",
    tag: "AI & Data"
  }
]

export function Experience() {
  const { ref, isInView } = useInView(0.05)
  const [currentSlide, setCurrentSlide] = useState(0)

  // Simple auto-playing carousel using state
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % photoQuotes.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section id="experience" className="py-24 lg:py-32" ref={ref}>
      <div className="mx-auto max-w-screen-xl px-6 lg:px-12">
        <div
          className={cn(
            "mb-16 transition-all duration-700",
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          )}
        >
          <p className="text-sm font-mono tracking-widest uppercase text-[#00a2ff] mb-4">
            Experience
          </p>
          <div className="flex flex-col lg:flex-row justify-between lg:items-end gap-6">
            <h2 className="text-3xl lg:text-4xl font-semibold text-foreground text-balance max-w-2xl">
              From structural engineering in Pakistan to AI/ML in Finland
            </h2>
            <Button variant="outline" className="w-fit gap-2 group border-primary/20 hover:border-primary">
              <a href="#projects" className="flex items-center gap-2">
                View related projects
                <ArrowUpRight className="h-4 w-4 opacity-70 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </Button>
          </div>
        </div>

        {/* Photo Quotes Transitions */}
        <div className={cn(
          "mb-20 transition-all duration-1000 delay-300 relative rounded-2xl overflow-hidden h-[400px] shadow-2xl group",
          isInView ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-12 scale-95"
        )}>
          {photoQuotes.map((item, i) => (
            <div
              key={item.id}
              className={cn(
                "absolute inset-0 transition-opacity duration-1000 ease-in-out",
                currentSlide === i ? "opacity-100 z-10" : "opacity-0 z-0"
              )}
            >
              <div className="absolute inset-0 bg-black/40 z-10" />
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-[10000ms] ease-linear"
                style={{
                  backgroundImage: `url('${item.image}')`,
                  transform: currentSlide === i ? "scale(1.05)" : "scale(1)",
                }}
              />
              <div className="absolute inset-x-0 bottom-0 p-8 lg:p-12 z-20 bg-gradient-to-t from-background/90 via-background/60 to-transparent">
                <Badge variant="secondary" className="mb-4 bg-primary/20 text-primary hover:bg-primary/30 border-none backdrop-blur-md">
                  {item.tag}
                </Badge>
                <div className="max-w-3xl">
                  <p className="text-2xl lg:text-3xl font-medium text-white italic drop-shadow-md leading-relaxed">
                    &quot;{item.quote}&quot;
                  </p>
                </div>
              </div>
            </div>
          ))}
          <div className="absolute bottom-6 right-8 z-30 flex gap-2">
            {photoQuotes.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentSlide(i)}
                className={cn(
                  "h-1.5 rounded-full transition-all duration-300",
                  currentSlide === i ? "w-8 bg-primary" : "w-2 bg-white/50 hover:bg-white/80"
                )}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="space-y-4">
          {experiences.map((exp, i) => (
            <ExperienceCard key={exp.company + exp.role} experience={exp} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ExperienceCard({
  experience,
  index,
}: {
  experience: ExperienceItem
  index: number
}) {
  const { ref, isInView } = useInView(0.1)

  return (
    <div
      ref={ref}
      className={cn(
        "group relative grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-8 py-8 lg:py-10 px-6 sm:px-8 border border-border/50 bg-card/30 rounded-2xl transition-all duration-500",
        "hover:bg-secondary/40 hover:border-primary/20 hover:shadow-lg",
        isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      )}
      style={{ transitionDelay: `${Math.min(index * 80, 400)}ms` }}
    >
      {/* Glow effect on hover */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none rounded-2xl transition-opacity duration-500"
        style={{ background: `radial-gradient(circle at 50% 50%, ${experience.accentHex}08 0%, transparent 60%)` }}
      />

      {/* Left accent line on hover */}
      <div
        className="absolute left-0 top-6 bottom-6 w-1 rounded-r-full transition-all duration-500 opacity-0 group-hover:opacity-100"
        style={{ backgroundColor: experience.accentHex }}
      />

      {/* Timeline */}
      <div className="lg:col-span-3 flex flex-col gap-2 relative z-10">
        <p className="text-sm font-mono text-muted-foreground bg-muted w-fit px-2 py-0.5 rounded-md">
          {experience.period}
        </p>
        <p className="text-xs text-muted-foreground flex items-center gap-1.5 mt-1">
          {experience.location}
        </p>

        {/* Logo */}
        {experience.logoUrl ? (
          <div className="mt-4 w-16 h-16 relative rounded-xl overflow-hidden bg-white shadow-sm ring-1 ring-border/20 group-hover:shadow-md transition-all duration-300">
            <Image
              src={experience.logoUrl}
              alt={`${experience.company} logo`}
              fill
              className="object-contain p-2.5 transition-transform duration-500 group-hover:scale-110"
              sizes="64px"
            />
          </div>
        ) : (
          experience.logoLetter && (
            <div
              className="mt-4 w-16 h-16 rounded-xl flex items-center justify-center text-xl font-bold transition-all duration-500 group-hover:scale-110 shadow-sm"
              style={{
                backgroundColor: `${experience.accentHex}15`,
                color: experience.accentHex,
              }}
            >
              {experience.logoLetter}
            </div>
          )
        )}
      </div>

      {/* Content */}
      <div className="lg:col-span-9 relative z-10">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <h3 className="text-xl font-medium text-foreground flex items-center gap-2 flex-wrap">
            {experience.role}
            <span className="font-normal" style={{ color: experience.accentHex }}>
              {"at "}
              {experience.company}
            </span>
          </h3>

          {experience.url && (
            <Button variant="ghost" size="sm" className="hidden sm:flex self-start gap-2 h-8 text-xs font-medium hover:bg-background" asChild>
              <a href={experience.url} target="_blank" rel="noopener noreferrer">
                Company site
                <ExternalLink className="w-3 h-3 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
              </a>
            </Button>
          )}
        </div>

        <ul className="mt-5 space-y-3">
          {experience.description.map((desc, i) => (
            <li
              key={i}
              className="text-sm text-foreground/80 leading-relaxed pl-6 relative"
            >
              <span
                className="absolute left-1.5 top-[0.6em] w-1.5 h-1.5 rounded-full transition-colors duration-300 shadow-sm"
                style={{ backgroundColor: experience.accentHex }}
              />
              {desc}
            </li>
          ))}
        </ul>

        <div className="mt-6 flex flex-wrap gap-2 items-center">
          {experience.skills.map((skill) => (
            <Badge
              key={skill}
              variant="outline"
              className="font-mono text-xs font-normal transition-all duration-300 bg-background/50 hover:bg-background"
              style={{
                borderColor: `${experience.accentHex}30`,
                color: `${experience.accentHex}ee`,
              }}
            >
              {skill}
            </Badge>
          ))}
        </div>

        {experience.url && (
          <Button variant="outline" size="sm" className="mt-6 sm:hidden w-full gap-2 text-xs" asChild>
            <a href={experience.url} target="_blank" rel="noopener noreferrer">
              Company site
              <ExternalLink className="w-3 h-3" />
            </a>
          </Button>
        )}
      </div>
    </div>
  )
}
