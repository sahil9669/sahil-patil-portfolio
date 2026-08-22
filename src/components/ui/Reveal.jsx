import useReveal from "../../hooks/useReveal";

function Reveal({
  as: Tag = "div",
  delay = 0,
  className = "",
  children,
}) {
  const [ref, visible] = useReveal();

  return (
    <Tag
      ref={ref}
      className={`
        ${className}
        transition-all duration-700 ease-out
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
      `}
      style={{
        transitionDelay: `${delay}s`,
      }}
    >
      {children}
    </Tag>
  );
}

export default Reveal;