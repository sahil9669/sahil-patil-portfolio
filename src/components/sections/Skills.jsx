import SectionHeading from "../ui/SectionHeading";
import SkillCard from "../ui/SkillCard";
import Reveal from "../ui/Reveal";

import { SKILLS } from "../../data/skills";

function Skills() {
  return (
    <section
      id="skills"
      className="
        relative z-10
        mx-auto max-w-7xl
        px-6 py-32
        lg:px-12
      "
    >
      <SectionHeading
        eyebrow="Skills"
        title="Tools I build with"
        subtitle="A stack chosen for shipping speed and long-term maintainability."
      />

      <div
        className="
          mt-14
          grid grid-cols-2 gap-4
          sm:grid-cols-3
          lg:grid-cols-6
        "
      >
        {SKILLS.map((skill, index) => (
          <Reveal
            key={skill.name}
            delay={index * 0.04}
          >
            <SkillCard skill={skill} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export default Skills;