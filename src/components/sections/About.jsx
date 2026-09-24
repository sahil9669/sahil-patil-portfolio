import SectionHeading from "../ui/SectionHeading";
import Reveal from "../ui/Reveal";
import profileImage from "../../assets/sahil.webp";

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
        {/* Profile Image */}
        <Reveal>
          <div
            className="
              relative
              aspect-square
              overflow-hidden
              rounded-[24px]
              border border-[#e1e4e8]
              bg-white
              shadow-[0_25px_60px_-18px_rgba(15,23,42,0.28)]
              transition-all duration-300
              hover:-translate-y-1
              hover:shadow-[0_30px_70px_-18px_rgba(15,23,42,0.34)]
            "
          >
            <div className="relative h-full w-full">
              <img
                src={profileImage}
                alt="Sahil Patil"
                className="
                  h-full
                  w-full
                  object-cover
                  object-center
                "
              />
            </div>

            {/* Bottom Tag */}
            <div
              className="
                absolute bottom-[18px] left-[18px] right-[18px]
                flex items-center justify-between
                rounded-xl
                border border-[#e1e4e8]
                bg-white/90
                px-4 py-3
                font-mono
                text-xs
                text-[#5f636d]
                backdrop-blur-md
                shadow-sm
              "
            >
              <span>sahil_patil.dev</span>

              <span className="text-[#0891b2]">
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
                text-[#5f636d]
              "
            >
              I'm a{" "}
              <strong className="font-semibold text-[#17191f]">
                Computer Engineering
              </strong>{" "}
              graduate with a focus on the{" "}
              <strong className="font-semibold text-[#17191f]">
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
                text-[#5f636d]
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
        border border-[#e1e4e8]
        bg-white
        px-4 py-5
        shadow-sm
        transition-all duration-300
        hover:-translate-y-1
        hover:border-[#7c5cfc]
        hover:shadow-[0_12px_30px_-12px_rgba(124,92,252,0.25)]
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

      <div className="text-[12.5px] text-[#6b7280]">
        {label}
      </div>
    </div>
  );
}

export default About;