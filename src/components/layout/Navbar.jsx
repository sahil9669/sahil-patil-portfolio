import { Download } from "lucide-react";
import { NAV_LINKS } from "../../data/navigation";
import useScrollPosition from "../../hooks/useScrollPosition";
import resume from "../../assets/resume.pdf";

function Navbar() {
  const scrolled = useScrollPosition();

  return (
    <header
      className={`
        fixed left-0 right-0 top-0 z-50
        flex items-center justify-between
        border-b
        px-6 py-[18px]
        transition-all duration-300
        lg:px-12
        ${
          scrolled
            ? "border-white/[0.08] bg-[#0a0b0f]/70 py-3.5 backdrop-blur-xl"
            : "border-transparent"
        }
      `}
    >
      {/* Logo */}
      <a
        href="#home"
        className="
          flex items-center gap-2.5
          font-['Space_Grotesk']
          text-[19px]
          font-semibold
          text-[#f2f3f6]
        "
      >
        <span>
          <span className="text-[#7c5cfc]">&lt;</span>
          Sahil Patil
          <span className="text-[#7c5cfc]">/&gt;</span>
        </span>

        <span
          className="
            inline-block h-1.5 w-1.5
            rounded-full
            bg-[#22d3ee]
            shadow-[0_0_8px_#22d3ee]
          "
        />
      </a>

      {/* Navigation */}
      <nav className="hidden items-center lg:flex">
        {NAV_LINKS.map((link) => (
          <a
            key={link}
            href={`#${link.toLowerCase()}`}
            className="
              ml-[38px]
              font-medium
              text-sm
              text-[#9aa0ac]
              transition-colors duration-200
              first:ml-0
              hover:text-[#f2f3f6]
            "
          >
            {link}
          </a>
        ))}
      </nav>

      {/* Resume */}
      <a
        href={resume}
        target="_blank"
        rel="noopener noreferrer"
        // download="Sahil_Patil_Resume.pdf"
        className="
          inline-flex items-center gap-1.5
          rounded-full
          border border-white/[0.08]
          bg-[#12141b]
          px-[18px] py-2
          font-mono
          text-xs
          font-medium
          text-[#f2f3f6]
          transition-all duration-200
          hover:border-[#7c5cfc]
          hover:text-[#7c5cfc]
          hover:shadow-[0_0_20px_-4px_rgba(124,92,252,0.35)]
        "
      >
        <Download size={13} />
        Resume
      </a>
    </header>
  );
}

export default Navbar;