import SectionHeading from "../ui/SectionHeading";
import Reveal from "../ui/Reveal";

function About() {
  return (
    <section
      id="about"
      className="
        relative z-10
        mx-auto max-w-7xl
        px-6 py-32
        lg:px-12
      "
    >
      <SectionHeading
        eyebrow="About"
        title={
          <>
            Engineer by training,
            <br />
            builder by habit.
          </>
        }
      />

      <div
        className="
          mt-16
          grid items-center gap-[70px]
          lg:grid-cols-[0.75fr_1.25fr]
        "
      >
        {/* Avatar */}
        <Reveal>
          <div
            className="
              relative
              aspect-square
              overflow-hidden
              rounded-[24px]
              border border-white/[0.08]
              bg-gradient-to-br
              from-[#171a22]
              to-[#12141b]
            "
          >
            {/* Purple glow */}
            <div
              className="
                absolute inset-0
                bg-[radial-gradient(circle_at_30%_20%,rgba(124,92,252,0.35),transparent_55%)]
                opacity-50
              "
            />

            {/* Initials */}
            <div
              className="
                relative
                flex h-full
                items-center justify-center
                font-['Space_Grotesk']
                text-[120px]
                font-bold
                leading-none
                text-transparent
                bg-gradient-to-br
                from-[#7c5cfc]
                to-[#22d3ee]
                bg-clip-text
              "
            >
              SP
            </div>

            {/* Bottom Tag */}
            <div
              className="
                absolute bottom-[18px] left-[18px] right-[18px]
                flex items-center justify-between
                rounded-xl
                border border-white/[0.08]
                bg-[#0a0b0f]/70
                px-4 py-3
                font-mono
                text-xs
                text-[#9aa0ac]
                backdrop-blur-md
              "
            >
              <span>sahil_patil.dev</span>

              <span className="text-[#22d3ee]">
                ● online
              </span>
            </div>
          </div>
        </Reveal>

        {/* About Content */}
        <Reveal delay={0.1}>
          <div>
            <p
              className="
                mb-[18px]
                max-w-[560px]
                text-base
                leading-relaxed
                text-[#9aa0ac]
              "
            >
              I'm a{" "}
              <strong className="font-semibold text-[#f2f3f6]">
                Computer Engineering
              </strong>{" "}
              graduate with a focus on the{" "}
              <strong className="font-semibold text-[#f2f3f6]">
                MERN stack
              </strong>{" "}
              — building products where the frontend, API layer, and database
              all feel like one coherent system, not three bolted-together
              parts.
            </p>

            <p
              className="
                mb-[18px]
                max-w-[560px]
                text-base
                leading-relaxed
                text-[#9aa0ac]
              "
            >
              I care about clean component architecture, well-modelled REST
              APIs, and interfaces that stay fast and legible under real use.
              Currently exploring backend performance and system design while
              shipping full-stack projects end to end.
            </p>

            {/* Stats */}
            <div
              className="
                mt-9
                grid grid-cols-2 gap-4
                sm:grid-cols-4
              "
            >
              <StatCard
                number="5+"
                label="Projects Shipped"
              />

              <StatCard
                number="MERN"
                label="Primary Stack"
              />

              <StatCard
                number="REST"
                label="API Design"
              />

              <StatCard
                number="Open"
                label="To Opportunities"
              />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function StatCard({ number, label }) {
  return (
    <div
      className="
        rounded-[14px]
        border border-white/[0.08]
        bg-[#12141b]
        px-4 py-5
        transition-all duration-300
        hover:-translate-y-1
        hover:border-[#7c5cfc]
        hover:shadow-[0_12px_30px_-12px_rgba(124,92,252,0.35)]
      "
    >
      <div
        className="
          mb-1
          font-['Space_Grotesk']
          text-2xl
          font-bold
          text-[#7c5cfc]
        "
      >
        {number}
      </div>

      <div className="text-[12.5px] text-[#5c6270]">
        {label}
      </div>
    </div>
  );
}

export default About;