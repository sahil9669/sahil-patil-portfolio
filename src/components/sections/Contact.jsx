import { ArrowRight, Mail } from "lucide-react";

import Reveal from "../ui/Reveal";
import SocialLinks from "../ui/SocialLinks";

function Contact() {
  return (
    <section
      id="contact"
      className="
        relative z-10
        mx-auto max-w-7xl
        px-6 py-32
        lg:px-12
      "
    >
      <Reveal>
        <div
          className="
            relative overflow-hidden
            rounded-[24px]
            border border-[#e1e4e8]
            bg-white
            px-6 py-16
            text-center
            shadow-sm
            sm:px-10
            lg:px-16
          "
        >
          <div className="relative z-10">
            {/* Eyebrow */}
            <div
              className="
                mb-4
                flex items-center justify-center gap-2.5
                font-mono
                text-xs
                uppercase
                tracking-widest
                text-[#7c5cfc]
              "
            >
              <span className="h-px w-6 bg-[#7c5cfc]" />
              Contact
              <span className="h-px w-6 bg-[#7c5cfc]" />
            </div>

            {/* Heading */}
            <h2
              className="
                font-['Space_Grotesk']
                text-3xl
                font-bold
                tracking-tight
                text-[#17191f]
                sm:text-4xl
                lg:text-5xl
              "
            >
              Let's build something
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
                great together.
              </span>
            </h2>

            {/* Description */}
            <p
              className="
                mx-auto mt-5
                max-w-xl
                text-base
                leading-relaxed
                text-[#5f636d]
              "
            >
              I'm currently open to internships, entry-level opportunities,
              and interesting full-stack projects. Feel free to reach out.
            </p>

            {/* Email Button */}
            <a
              href="mailto:sahilpatil9889@gmail.com"
              className="
                mt-8
                inline-flex items-center gap-2
                rounded-xl
                bg-[#7c5cfc]
                px-6 py-3.5
                text-sm
                font-semibold
                text-white
                shadow-[0_8px_24px_-8px_rgba(124,92,252,0.25)]
                transition-all duration-300
                hover:-translate-y-0.5
                hover:bg-[#6d4ee8]
                hover:shadow-[0_12px_32px_-6px_rgba(124,92,252,0.3)]
              "
            >
              <Mail size={16} />
              Get In Touch
              <ArrowRight size={16} />
            </a>

            {/* Socials */}
            <div className="mt-8 flex justify-center">
              <SocialLinks />
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

export default Contact;
