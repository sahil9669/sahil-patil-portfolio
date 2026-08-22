import useMouseGlow from "../../hooks/useMouseGlow";
import useBackgroundOrbs from "../../hooks/useBackgroundOrbs";

function BackgroundEffects() {
  const glowRef = useMouseGlow();
  const canvasRef = useBackgroundOrbs();

  return (
    <>
      {/* Animated Orbs */}
      <canvas
        ref={canvasRef}
        className="
          pointer-events-none
          fixed inset-0
          z-0
          h-full w-full
          opacity-80
        "
      />

      {/* Grid */}
      <div
        className="
          pointer-events-none
          fixed inset-0
          z-0
          h-full w-full

          bg-[linear-gradient(to_right,rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.025)_1px,transparent_1px)]

          [background-size:64px_64px]

          [mask-image:radial-gradient(ellipse_80%_60%_at_50%_0%,black_40%,transparent_100%)]
          [-webkit-mask-image:radial-gradient(ellipse_80%_60%_at_50%_0%,black_40%,transparent_100%)]
        "
      />

      {/* Mouse Glow */}
      <div
        ref={glowRef}
        className="
          pointer-events-none
          fixed
          z-[1]
          h-[420px] w-[420px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-[radial-gradient(circle,rgba(124,92,252,0.35)_0%,transparent_70%)]
          opacity-50
          blur-[20px]
        "
      />
    </>
  );
}

export default BackgroundEffects;