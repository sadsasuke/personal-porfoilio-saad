import { Nav } from "@/components/nav"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Experience } from "@/components/experience"
import { Projects } from "@/components/projects"
import { Education } from "@/components/education"
import { Skills } from "@/components/skills"
import { Testimonials } from "@/components/testimonials"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { Separator } from "@/components/ui/separator"

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Separator />
        <About />
        <Separator />
        <Experience />
        <Separator />
        <Projects />
        <Separator />
        <Education />
        <Separator />
        <Skills />
        <Separator />
        <Testimonials />
        <Separator />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
