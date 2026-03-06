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
    title: "Agentic BIM & Point Cloud Reasoning",
    description:
      "Autonomous AI agents that reason over complex 3D point cloud data and BIM models. Automatically detecting structural discrepancies and orchestrating site inspections with zero human intervention.",
    status: "ongoing",
    tags: ["Agentic AI", "Point Clouds", "BIM", "3D Logic"],
    color: "#00a2ff",
    image: "/agentic_bim_pointcloud_viz_1772824408748.png",
  },
  {
    title: "AI Construction Agent (Wendy)",
    description:
      "An autonomous project manager fine-tuned for the built environment. Navigating BIM-IFC data, managing procurement chains, and automating project scheduling via agentic RAG workflows.",
    status: "ongoing",
    tags: ["Agentic AI", "RAG", "Construction", "IFC"],
    color: "#0c4a6e",
    image: "/agentic_ai_construction_interface_1772824428901.png",
    github: "https://github.com/sadsasuke",
  },
  {
    title: "Autonomous Site Navigation Systems",
    description:
      "SLAM-based autonomous navigation agents for construction robotics. Implementing multi-agent path-finding in dynamic, high-uncertainty environments using LiDAR point cloud data.",
    status: "completed",
    tags: ["SLAM", "Point Clouds", "Robotics", "Agents"],
    color: "#26D07C",
    image: "/images/data-science.jpg",
  },
  {
    title: "Computer Vision for Concrete Physics",
    description:
      "Deep learning agents for automated structural quality inspection. Extracting material properties from image sequences using advanced computer vision and neural architectural search.",
    status: "completed",
    tags: ["CV", "Deep Learning", "Quality Control", "Research"],
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
          <p className="text-sm font-mono tracking-widest uppercase text-[#00a2ff] mb-4">
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
            className="inline-flex items-center gap-3 rounded-full border border-border bg-card px-6 py-3 text-sm text-foreground transition-all hover:bg-secondary hover:border-[#00a2ff]/30 hover:shadow-lg hover:shadow-[#00a2ff]/5"
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
                ? "bg-[#00a2ff]/20 text-[#7dd3fc] border border-[#00a2ff]/30"
                : "bg-secondary text-muted-foreground border border-border"
            )}
          >
            {project.status === "ongoing" && (
              <span className="w-1.5 h-1.5 rounded-full bg-[#7dd3fc] animate-pulse" />
            )}
            {project.status === "ongoing" ? "Ongoing" : "Completed"}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="relative p-6">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-lg font-medium text-foreground group-hover:text-[#7dd3fc] transition-colors">
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
