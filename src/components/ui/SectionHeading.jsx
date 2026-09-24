import Reveal from "./Reveal";

function SectionHeading({
  eyebrow,
  title,
  subtitle,
}) {
  return (
    <>
      <Reveal className="flex items-center gap-2.5 font-mono text-xs uppercase tracking-widest text-[#7c5cfc]">
        <span className="h-px w-6 bg-[#7c5cfc]" />
        {eyebrow}
      </Reveal>

      <Reveal
        as="h2"
        delay={0.05}
        className="
          mt-3
          text-3xl
          font-bold
          tracking-tight
          text-[#17191f]
          sm:text-4xl
        "
      >
        {title}
      </Reveal>

      {subtitle && (
        <Reveal
          delay={0.1}
          className="
            mt-4
            max-w-xl
            text-base
            text-[#5f636d]
          "
        >
          {subtitle}
        </Reveal>
      )}
    </>
  );
}

export default SectionHeading;
