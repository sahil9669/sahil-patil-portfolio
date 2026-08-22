import { ExternalLink } from "lucide-react";

function ProjectCard({ project }) {
  return (
    <div
      className="
        overflow-hidden
        rounded-[20px]
        border border-white/[0.08]
        bg-[#12141b]
        transition-all duration-300
        hover:-translate-y-2
        hover:border-[#7c5cfc]/50
        hover:shadow-2xl hover:shadow-black/40
      "
    >
      {/* Project Icon */}
      <div
        className="
          flex h-[170px]
          items-center justify-center
          bg-gradient-to-br from-[#171a24] to-[#10121a]
        "
      >
        <svg
          width="44"
          height="44"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#7c5cfc"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d={project.icon} />
        </svg>
      </div>

      {/* Project Content */}
      <div className="px-[22px] pb-6 pt-[22px]">
        <h3 className="font-['Space_Grotesk'] text-lg font-semibold text-[#f2f3f6]">
          {project.title}
        </h3>

        <p className="mt-2 min-h-[38px] text-[13.5px] text-[#9aa0ac]">
          {project.desc}
        </p>

        {/* Tech Stack */}
        <div className="mb-5 mt-4 flex flex-wrap gap-2">
          {project.stack.map((technology) => (
            <span
              key={technology}
              className="
                rounded-full
                border border-[#22d3ee]/20
                bg-[#22d3ee]/[0.08]
                px-2 py-1
                font-mono
                text-[10.5px]
                text-[#22d3ee]
              "
            >
              {technology}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-4 text-[13px] font-semibold">
          {/* Live Project */}
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="
              flex items-center gap-1.5
              text-[#9aa0ac]
              transition-colors
              hover:text-[#7c5cfc]
            "
          >
            <ExternalLink size={14} />
            View Project
          </a>

          {/* GitHub */}
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="
              flex items-center gap-1.5
              text-[#9aa0ac]
              transition-colors
              hover:text-[#7c5cfc]
            "
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M12 2C6.48 2 2 6.58 2 12.23c0 4.52 2.87 8.35 6.84 9.71.5.1.68-.22.68-.49v-1.72c-2.78.62-3.37-1.22-3.37-1.22-.46-1.18-1.11-1.5-1.11-1.5-.91-.64.07-.63.07-.63 1.01.07 1.54 1.07 1.54 1.07.9 1.58 2.36 1.12 2.94.86.09-.67.35-1.12.64-1.38-2.22-.26-4.55-1.14-4.55-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.28 2.75 1.05A9.2 9.2 0 0 1 12 7.92c.85 0 1.71.12 2.51.35 1.91-1.33 2.75-1.05 2.75-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.94-2.33 4.81-4.56 5.07.36.32.68.95.68 1.91v1.42c0 .27.18.59.69.49A10.24 10.24 0 0 0 22 12.23C22 6.58 17.52 2 12 2Z" />
            </svg>
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;