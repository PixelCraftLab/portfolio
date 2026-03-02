import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const containerRef = useRef(null);

  const mouse = useRef({ x: 0, y: 0 });
  const circles = useRef([]);

  const circleCount = 8;
  const baseSize = 22;

  const scale = useRef(1);
  const targetScale = useRef(1);

  useEffect(() => {
    const move = (e) => {
      mouse.current = { x: e.clientX, y: e.clientY };
    };

    const handleMouseDown = () => {
      targetScale.current = 0;
    };

    const handleMouseUp = () => {
      targetScale.current = 1;
    };

    window.addEventListener("mousemove", move);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);

    circles.current = Array(circleCount)
      .fill()
      .map(() => ({ x: 0, y: 0 }));

    const animate = () => {
      let x = mouse.current.x;
      let y = mouse.current.y;

      
      scale.current += (targetScale.current - scale.current) * 0.09;

      circles.current.forEach((circle, index) => {
        circle.x += (x - circle.x) * 0.25;
        circle.y += (y - circle.y) * 0.25;

        const el = containerRef.current.children[index];

        if (el) {
          const size = (baseSize - index * 2) * scale.current;

          el.style.left = circle.x + "px";
          el.style.top = circle.y + "px";
          el.style.width = size + "px";
          el.style.height = size + "px";
          el.style.opacity = scale.current;
        }

        x = circle.x;
        y = circle.y;
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  return (
    <div ref={containerRef}>
      {Array(circleCount)
        .fill()
        .map((_, index) => (
          <div
            key={index}
            style={{
              position: "fixed",
              borderRadius: "50%",
              background: "#00ffff",
              boxShadow: "0 0 5px #00ffff",
              pointerEvents: "none",
              transform: "translate(-50%, -50%)",
              zIndex: 9999,
            }}
          />
        ))}
    </div>
  );
}