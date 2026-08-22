import { useEffect, useRef } from "react";

function useBackgroundOrbs() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;

    if (!canvas) return;

    const ctx = canvas.getContext("2d");

    let animationFrame;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resize();

    window.addEventListener("resize", resize);

    const orbs = [
      {
        x: 0.15,
        y: 0.25,
        r: 260,
        c: "124,92,252",
        dx: 0.00012,
        dy: 0.00009,
        t: 0,
      },
      {
        x: 0.85,
        y: 0.15,
        r: 220,
        c: "34,211,238",
        dx: -0.0001,
        dy: 0.00013,
        t: 2,
      },
      {
        x: 0.6,
        y: 0.6,
        r: 300,
        c: "124,92,252",
        dx: 0.00008,
        dy: -0.00011,
        t: 4,
      },
    ];

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const time = Date.now();

      orbs.forEach((orb) => {
        const x =
          (orb.x + Math.sin(time * orb.dx + orb.t) * 0.04) *
          canvas.width;

        const y =
          (orb.y + Math.cos(time * orb.dy + orb.t) * 0.04) *
          canvas.height;

        const gradient = ctx.createRadialGradient(
          x,
          y,
          0,
          x,
          y,
          orb.r
        );

        gradient.addColorStop(
          0,
          `rgba(${orb.c},0.16)`
        );

        gradient.addColorStop(
          1,
          `rgba(${orb.c},0)`
        );

        ctx.fillStyle = gradient;

        ctx.beginPath();
        ctx.arc(x, y, orb.r, 0, Math.PI * 2);
        ctx.fill();
      });

      animationFrame = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return canvasRef;
}

export default useBackgroundOrbs;