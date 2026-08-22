import SectionHeading from "../ui/SectionHeading";
import ProjectCard from "../ui/ProjectCard";
import Reveal from "../ui/Reveal";

import { PROJECTS } from "../../data/projects";

function Projects() {
  return (
    <section
      id="projects"
      className="
        relative z-10
        mx-auto max-w-7xl
        px-6 py-32
        lg:px-12
      "
    >
      <SectionHeading
        eyebrow="Featured Projects"
        title="Things I've shipped"
        subtitle="A few full-stack builds that show how I think about product, data, and interface."
      />

      <div
        className="
          mt-14
          grid gap-6
          lg:grid-cols-3
        "
      >
        {PROJECTS.map((project, index) => (
          <Reveal
            key={project.title}
            delay={index * 0.08}
          >
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export default Projects;