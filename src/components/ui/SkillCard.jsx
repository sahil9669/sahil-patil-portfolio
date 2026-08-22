function SkillCard({ skill }) {
  return (
    <div
      className="
        group
        flex flex-col items-center gap-3
        overflow-hidden
        rounded-2xl
        border border-white/[0.08]
        bg-[#12141b]
        px-4 py-6
        text-center
        transition-all duration-300
        hover:-translate-y-1.5
        hover:border-[#7c5cfc]
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

      <div className="text-[13px] font-semibold text-[#f2f3f6]">
        {skill.name}
      </div>
    </div>
  );
}

export default SkillCard;