"use client"

import Image from "next/image"
import { useInView } from "@/hooks/use-in-view"
import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"
import { ArrowUpRight, Github } from "lucide-react"

interface Project {
  title: string
  description: string
  status: "ongoing" | "completed"
  tags: string[]
  color: string
  image: string
  github?: string
  link?: string
}

const projects: Project[] = [
  {
    title: "AI Construction Assistant",
    description:
      "An LLM-powered chat assistant fine-tuned for the construction industry. Understands BIM data, project scheduling, procurement workflows, and construction standards. Built on top of open-source models with RAG pipelines.",
    status: "ongoing",
    tags: ["LLMs", "RAG", "Construction", "Python", "LangChain"],
    color: "#006B3F",
    image: "/images/construction-ai.jpg",
    github: "https://github.com/sadsasuke",
  },
  {
    title: "Smart Building Energy Optimizer",
    description:
      "ML pipeline for predicting and optimizing energy consumption in commercial buildings using IoT sensor data, weather forecasts, and occupancy patterns. Deployed as a real-time dashboard.",
    status: "ongoing",
    tags: ["Machine Learning", "IoT", "Energy", "Time Series", "Dashboard"],
    color: "#F7941D",
    image: "/images/smart-buildings.jpg",
  },
  {
    title: "Autonomous Path-Finding for Indoor Robots",
    description:
      "SLAM-based autonomous navigation system achieving 97% success rate for indoor construction site mapping. Uses LiDAR point cloud processing and real-time obstacle avoidance.",
    status: "completed",
    tags: ["SLAM", "Point Clouds", "Computer Vision", "Robotics", "C++"],
    color: "#26D07C",
    image: "/images/data-science.jpg",
  },
  {
    title: "Concrete Workability Estimation",
    description:
      "Masters thesis project using a 3D stereo camera system and machine learning to automatically estimate concrete workability from mixing image sequences. Published research.",
    status: "completed",
    tags: ["Computer Vision", "3D Camera", "ML", "Research", "OpenCV"],
    color: "#FFC709",
    image: "/images/construction-ai.jpg",
  },
]

export function Projects() {
  const { ref, isInView } = useInView(0.05)

  return (
    <section id="projects" className="py-24 lg:py-32" ref={ref}>
      <div className="mx-auto max-w-screen-xl px-6 lg:px-12">
        <div
          className={cn(
            "mb-16 transition-all duration-700",
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          )}
        >
          <p className="text-sm font-mono tracking-widest uppercase text-[#2d8a4e] mb-4">
            Projects
          </p>
          <h2 className="text-3xl lg:text-4xl font-semibold text-foreground text-balance max-w-2xl">
            Ongoing & notable work
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>

        {/* GitHub CTA */}
        <div
          className={cn(
            "mt-12 text-center transition-all duration-700 delay-500",
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          )}
        >
          <a
            href="https://github.com/sadsasuke"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 rounded-full border border-border bg-card px-6 py-3 text-sm text-foreground transition-all hover:bg-secondary hover:border-[#2d8a4e]/30 hover:shadow-lg hover:shadow-[#2d8a4e]/5"
          >
            <Github className="h-4 w-4" />
            View more on GitHub
            <ArrowUpRight className="h-3.5 w-3.5 text-muted-foreground" />
          </a>
        </div>
      </div>
    </section>
  )
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const { ref, isInView } = useInView(0.1)

  return (
    <div
      ref={ref}
      className={cn(
        "group relative rounded-2xl border border-border bg-card overflow-hidden transition-all duration-500 hover:border-transparent hover:shadow-xl",
        isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      )}
      style={{ transitionDelay: `${index * 120}ms` }}
    >
      {/* Hover glow */}
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          boxShadow: `inset 0 0 0 1px ${project.color}40, 0 0 30px ${project.color}08`,
        }}
      />

      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />

        {/* Status badge */}
        <div className="absolute top-4 right-4">
          <span
            className={cn(
              "inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-mono",
              project.status === "ongoing"
                ? "bg-[#2d8a4e]/20 text-[#4ade80] border border-[#2d8a4e]/30"
                : "bg-secondary text-muted-foreground border border-border"
            )}
          >
            {project.status === "ongoing" && (
              <span className="w-1.5 h-1.5 rounded-full bg-[#4ade80] animate-pulse" />
            )}
            {project.status === "ongoing" ? "Ongoing" : "Completed"}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="relative p-6">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-lg font-medium text-foreground group-hover:text-[#4ade80] transition-colors">
            {project.title}
          </h3>
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 w-8 h-8 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
              aria-label={`${project.title} on GitHub`}
            >
              <Github className="h-4 w-4" />
            </a>
          )}
        </div>

        <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
          {project.description}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <Badge
              key={tag}
              variant="outline"
              className="font-mono text-xs font-normal transition-all duration-300"
              style={{
                backgroundColor: `${project.color}08`,
                borderColor: `${project.color}25`,
                color: `${project.color}cc`,
              }}
            >
              {tag}
            </Badge>
          ))}
        </div>
      </div>

      {/* Bottom accent line */}
      <div
        className="h-0.5 w-0 group-hover:w-full transition-all duration-700"
        style={{ backgroundColor: project.color }}
      />
    </div>
  )
}
