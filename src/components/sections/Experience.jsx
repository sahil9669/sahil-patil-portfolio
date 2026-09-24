
import SectionHeading from "../ui/SectionHeading";
import Reveal from "../ui/Reveal";

function Experience() {
  return (
    <section
      id="experience"
      className="
        relative z-10
        mx-auto max-w-7xl
        px-6 py-32
        lg:px-12
      "
    >
      <SectionHeading
        eyebrow="Experience"
        title="Where I've been learning & building"
        subtitle="A snapshot of my development journey and hands-on experience."
      />

      <div className="mt-14">
        <Reveal>
          <div
            className="
              relative
              border-l
              border-[#e1e4e8]
              pl-8
              sm:pl-10
            "
          >
            {/* Timeline Dot */}
            <span
              className="
                absolute
                -left-[5px]
                top-2
                h-2.5 w-2.5
                rounded-full
                bg-[#7c5cfc]
              "
            />

            {/* Experience Card */}
            <div
              className="
                rounded-[20px]
                border border-[#e1e4e8]
                bg-white
                p-6
                shadow-sm
                transition-all duration-300
                hover:border-[#7c5cfc]/50
                hover:shadow-[0_20px_50px_-20px_rgba(124,92,252,0.2)]
                sm:p-7
              "
            >
              <div
                className="
                  flex flex-col
                  justify-between
                  gap-2
                  sm:flex-row
                  sm:items-start
                "
              >
                <div>
                  <h3
                    className="
                      font-['Space_Grotesk']
                      text-xl
                      font-semibold
                      text-[#17191f]
                    "
                  >
                    Data Science Intern
                  </h3>

                  <p className="mt-1 text-sm text-[#7c5cfc]">
                    Codec Technologies
                  </p>
                </div>

                <span
                  className="
                    font-mono
                    text-xs
                    text-[#6b7280]
                  "
                >
                  Jan 2026
                </span>
              </div>

              <p
                className="
                  mt-5
                  max-w-3xl
                  text-sm
                  leading-relaxed
                  text-[#5f636d]
                "
              >
                Worked on a data science project focused on house price
                prediction, gaining practical experience with data
                preprocessing, analysis, machine learning workflows, and
                Python-based development.
              </p>

              {/* Technologies */}
              <div className="mt-5 flex flex-wrap gap-2">
                {["Python", "Pandas", "NumPy", "Scikit-learn"].map(
                  (technology) => (
                    <span
                      key={technology}
                      className="
                        rounded-full
                        border border-[#22d3ee]/25
                        bg-[#22d3ee]/[0.08]
                        px-2.5 py-1
                        font-mono
                        text-[10.5px]
                        text-[#0891b2]
                      "
                    >
                      {technology}
                    </span>
                  )
                )}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default Experience;
