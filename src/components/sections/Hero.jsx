import { ArrowRight, Download } from "lucide-react";

import CodeEditor from "../ui/CodeEditor";
import SocialLinks from "../ui/SocialLinks";
import resume from "../../assets/resume.pdf";

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
            border border-[#22d3ee]/30
            bg-[#22d3ee]/[0.08]
            px-3.5 py-1.5
            font-mono
            text-xs
            text-[#0891b2]
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
            text-[#17191f]
          "
        >
          MERN Stack
          <br />
          <span
            className="
              bg-gradient-to-r
              from-[#7c5cfc]
              to-[#0891b2]
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
            text-[#5f636d]
          "
        >
          I build modern, scalable and user-focused web applications — from
          database schema to pixel-perfect UI.
        </p>

        {/* Buttons */}
        <div className="mb-11 flex flex-wrap gap-4">
          {/* Primary Button */}
          <a
            href="#projects"
            className="
              inline-flex items-center gap-2
              rounded-xl
              bg-[#7c5cfc]
              px-[26px] py-3.5
              text-sm font-semibold
              text-white
              shadow-[0_8px_24px_-8px_rgba(124,92,252,0.25)]
              transition-all duration-300
              hover:-translate-y-0.5
              hover:bg-[#6d4ee8]
              hover:shadow-[0_12px_28px_-8px_rgba(124,92,252,0.3)]
            "
          >
            View My Work
            <ArrowRight size={16} />
          </a>

          {/* Resume Button */}
          <a
            href={resume}
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex items-center gap-2
              rounded-xl
              border border-[#dfe2e7]
              bg-white
              px-[26px] py-3.5
              text-sm font-semibold
              text-[#17191f]
              shadow-sm
              transition-all duration-300
              hover:-translate-y-0.5
              hover:border-[#7c5cfc]
              hover:text-[#7c5cfc]
              hover:shadow-md
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
        <div className="w-full max-w-[480px]">
          <CodeEditor />
        </div>
      </div>
    </section>
  );
}

export default Hero;

