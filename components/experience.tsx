"use client"

import { Badge } from "@/components/ui/badge"
import { ArrowUpRight } from "lucide-react"
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
    accentHex: "#006B3F",
    logoUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-ySGudjs29w8sQw874zv8skG7GjbKh2.png",
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
    accentHex: "#00A6FF",
    logoLetter: "CL",
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
    logoLetter: "Af",
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
    logoLetter: "Wo",
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
    accentHex: "#003A70",
    logoLetter: "T",
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
    accentHex: "#FFC709",
    logoLetter: "A!",
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
    accentHex: "#8B6914",
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
    accentHex: "#0078D4",
    logoLetter: "YT",
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
          <p className="text-sm font-mono tracking-widest uppercase text-[#2d8a4e] mb-4">
            Experience
          </p>
          <h2 className="text-3xl lg:text-4xl font-semibold text-foreground text-balance max-w-2xl">
            From structural engineering in Pakistan to AI/ML in Finland
          </h2>
        </div>

        <div className="space-y-1">
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

  const inner = (
    <div
      ref={ref}
      className={cn(
        "group relative grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-8 py-8 lg:py-10 px-4 sm:px-6 -mx-4 sm:-mx-6 rounded-xl transition-all duration-500",
        "hover:bg-secondary/60",
        isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      )}
      style={{ transitionDelay: `${Math.min(index * 80, 400)}ms` }}
    >
      {/* Left accent line on hover */}
      <div
        className="absolute left-0 top-4 bottom-4 w-0.5 rounded-full transition-all duration-500 opacity-0 group-hover:opacity-100"
        style={{ backgroundColor: experience.accentHex }}
      />

      {/* Timeline */}
      <div className="lg:col-span-3 flex flex-col gap-2">
        <p className="text-sm font-mono text-muted-foreground">
          {experience.period}
        </p>
        <p className="text-xs text-muted-foreground">{experience.location}</p>

        {/* Logo */}
        {experience.logoUrl ? (
          <div className="mt-2 w-12 h-12 relative rounded-lg overflow-hidden bg-foreground/5 ring-1 ring-border">
            <Image
              src={experience.logoUrl}
              alt={`${experience.company} logo`}
              fill
              className="object-contain p-1"
              sizes="48px"
            />
          </div>
        ) : (
          experience.logoLetter && (
            <div
              className="mt-2 w-12 h-12 rounded-lg flex items-center justify-center text-sm font-bold transition-transform duration-300 group-hover:scale-110"
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
      <div className="lg:col-span-9">
        <h3 className="text-lg font-medium text-foreground flex items-center gap-2 flex-wrap">
          {experience.role}
          <span className="font-normal" style={{ color: experience.accentHex }}>
            {"at "}
            {experience.company}
          </span>
          {experience.url && (
            <ArrowUpRight className="h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          )}
        </h3>

        <ul className="mt-4 space-y-2">
          {experience.description.map((desc, i) => (
            <li
              key={i}
              className="text-sm text-muted-foreground leading-relaxed pl-5 relative"
            >
              <span
                className="absolute left-0 top-[0.55em] w-2 h-2 rounded-full transition-colors duration-300"
                style={{ backgroundColor: `${experience.accentHex}30` }}
              />
              {desc}
            </li>
          ))}
        </ul>

        <div className="mt-4 flex flex-wrap gap-2">
          {experience.skills.map((skill) => (
            <Badge
              key={skill}
              variant="outline"
              className="font-mono text-xs font-normal transition-all duration-300"
              style={{
                backgroundColor: `${experience.accentHex}08`,
                borderColor: `${experience.accentHex}25`,
                color: `${experience.accentHex}cc`,
              }}
            >
              {skill}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  )

  if (experience.url) {
    return (
      <a
        href={experience.url}
        target="_blank"
        rel="noopener noreferrer"
        className="block"
      >
        {inner}
      </a>
    )
  }

  return inner
}
