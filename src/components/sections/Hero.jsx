import { ArrowRight, Download } from "lucide-react";

import CodeEditor from "../ui/CodeEditor";
import SocialLinks from "../ui/SocialLinks";
import resume from "../../assets/resume.pdf"

function Hero() {
  return (
    <section
      id="home"
      className="
        mx-auto flex min-h-screen max-w-[1440px]
        flex-wrap items-center
        gap-[60px]
        px-6 pb-20 pt-36
        lg:px-12
      "
    >
      {/* Left Content */}
      <div className="max-w-[640px] flex-[1.05_1_480px]">

        {/* Availability Badge */}
        <div
          className="
            mb-7 inline-flex
            items-center gap-2
            rounded-full
            border border-[#22d3ee]/25
            bg-[#22d3ee]/[0.08]
            px-3.5 py-1.5
            font-mono
            text-xs
            text-[#22d3ee]
          "
        >
          <span
            className="
              h-[7px] w-[7px]
              rounded-full
              bg-[#22d3ee]
              animate-pulse
            "
          />

          Available for Internship / Opportunities
        </div>

        {/* Greeting */}
        <div
          className="
            mb-3.5
            font-mono
            text-base
            text-[#7c5cfc]
          "
        >
          👋&nbsp; hi, I'm Sahil Patil
        </div>

        {/* Heading */}
        <h1
          className="
            font-['Space_Grotesk']
            text-[clamp(48px,5vw,72px)]
            font-bold
            leading-[0.95]
            tracking-[-0.045em]
            text-[#f2f3f6]
          "
        >
          MERN Stack
          <br />
          <span
            className="
              bg-gradient-to-r
              from-[#7c5cfc]
              to-[#22d3ee]
              bg-clip-text
              text-transparent
            "
          >
            Developer
          </span>
        </h1>

        {/* Description */}
        <p
          className="
            mb-9 mt-5
            max-w-[480px]
            text-[17px]
            leading-relaxed
            text-[#9aa0ac]
          "
        >
          I build modern, scalable and user-focused web applications — from
          database schema to pixel-perfect UI.
        </p>

        {/* Buttons */}
        <div className="mb-11 flex flex-wrap gap-4">
          <a
            href="#projects"
            className="
              inline-flex items-center gap-2
              rounded-xl
              bg-[#7c5cfc]
              px-[26px] py-3.5
              text-sm font-semibold
              text-white
              shadow-[0_8px_24px_-8px_rgba(124,92,252,0.35)]
              transition-all duration-300
              hover:-translate-y-0.5
              hover:shadow-[0_12px_32px_-6px_rgba(124,92,252,0.35)]
            "
          >
            View My Work
            <ArrowRight size={16} />
          </a>

          <a
            href={resume}
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex items-center gap-2
              rounded-xl
              border border-white/[0.08]
              bg-[#12141b]
              px-[26px] py-3.5
              text-sm font-semibold
              text-[#f2f3f6]
              transition-all duration-300
              hover:-translate-y-0.5
              hover:border-[#9aa0ac]
            "
          >
            <Download size={16} />
            Download Resume
          </a>
        </div>

        {/* Social Links */}
        <SocialLinks />
      </div>

      {/* Right Code Editor */}
      <div
        className="
          flex flex-[1_1_380px]
          justify-center
        "
      >
        <div className="relative w-full max-w-[480px]">
          {/* Glow behind editor */}
          <div
            className="
              pointer-events-none
              absolute -inset-10
              -z-10
              bg-[radial-gradient(circle_at_60%_30%,rgba(124,92,252,0.35),transparent_65%)]
              blur-[30px]
            "
          />

          <CodeEditor />
        </div>
      </div>
    </section>
  );
}

export default Hero;