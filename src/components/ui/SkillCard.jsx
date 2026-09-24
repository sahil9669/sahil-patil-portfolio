function SkillCard({ skill }) {
  return (
    <div
      className="
        group
        flex flex-col items-center gap-3
        overflow-hidden
        rounded-2xl
        border border-[#e1e4e8]
        bg-white
        px-4 py-6
        text-center
        shadow-sm
        transition-all duration-300
        hover:-translate-y-1.5
        hover:border-[#7c5cfc]
        hover:shadow-[0_12px_30px_-12px_rgba(124,92,252,0.2)]
      "
    >
      <svg
        width="34"
        height="34"
        viewBox="0 0 24 24"
        fill="none"
        stroke={skill.color}
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d={skill.path} />
      </svg>

      <div className="text-[13px] font-semibold text-[#17191f]">
        {skill.name}
      </div>
    </div>
  );
}

export default SkillCard;
