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
        border-b border-[#d3d7dd]
        px-6 py-[18px]
        transition-all duration-300
        lg:px-12
        ${
          scrolled
            ? "bg-white/90 py-3.5 backdrop-blur-xl"
            : "bg-transparent"
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
          text-[#17191f]
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
              text-[#5f636d]
              transition-colors duration-200
              first:ml-0
              hover:text-[#17191f]
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
        className="
          inline-flex items-center gap-1.5
          rounded-full
          border border-[#dfe2e7]
          bg-white
          px-[18px] py-2
          font-mono
          text-xs
          font-medium
          text-[#17191f]
          shadow-sm
          transition-all duration-200
          hover:border-[#7c5cfc]
          hover:text-[#7c5cfc]
          hover:shadow-md
        "
      >
        <Download size={13} />
        Resume
      </a>
    </header>
  );
}

export default Navbar;