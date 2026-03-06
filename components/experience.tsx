"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"
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

export function Experience() {
  const { ref, isInView } = useInView(0.05)

  return (
    <section id="experience" className="py-24 lg:py-32" ref={ref}>
      <div className="mx-auto max-w-screen-xl px-6 lg:px-12">
        <div
          className={cn(
            "mb-16 transition-all duration-700",
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          )}
        >
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-semibold text-foreground leading-tight text-balance mb-8">
            Experience
          </h2>
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
