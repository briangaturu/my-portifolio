import { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const CursorTrail = () => {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const trailX = useMotionValue(-100);
  const trailY = useMotionValue(-100);
  const dotX = useMotionValue(-100);
  const dotY = useMotionValue(-100);

  // outer ring — slowest, most lag
  const springX = useSpring(cursorX, { stiffness: 80, damping: 20 });
  const springY = useSpring(cursorY, { stiffness: 80, damping: 20 });

  // mid trail — medium lag
  const trailSpringX = useSpring(trailX, { stiffness: 140, damping: 22 });
  const trailSpringY = useSpring(trailY, { stiffness: 140, damping: 22 });

  // inner dot — snappy, near-instant
  const dotSpringX = useSpring(dotX, { stiffness: 600, damping: 35 });
  const dotSpringY = useSpring(dotY, { stiffness: 600, damping: 35 });

  const isHovering = useRef(false);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      trailX.set(e.clientX);
      trailY.set(e.clientY);
      dotX.set(e.clientX);
      dotY.set(e.clientY);
    };

    const onEnter = () => { isHovering.current = true; };
    const onLeave = () => { isHovering.current = false; };

    window.addEventListener("mousemove", move);

    // add hover class to all interactive elements
    const interactives = document.querySelectorAll("a, button, [data-cursor]");
    interactives.forEach((el) => {
      el.addEventListener("mouseenter", onEnter);
      el.addEventListener("mouseleave", onLeave);
    });

    return () => {
      window.removeEventListener("mousemove", move);
      interactives.forEach((el) => {
        el.removeEventListener("mouseenter", onEnter);
        el.removeEventListener("mouseleave", onLeave);
      });
    };
  }, []);

  // hide on touch devices
  if (typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches) {
    return null;
  }

  return (
    <>
      {/* ── Outer glow ring ── */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-9999 rounded-full"
        style={{
          x: springX,
          y: springY,
          translateX: "-50%",
          translateY: "-50%",
          width: 40,
          height: 40,
          border: "1.5px solid rgba(56,189,248,0.5)",
          boxShadow: "0 0 12px rgba(56,189,248,0.25), inset 0 0 8px rgba(56,189,248,0.1)",
          background: "rgba(56,189,248,0.03)",
        }}
      />

      {/* ── Mid trail ring ── */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-9999 rounded-full"
        style={{
          x: trailSpringX,
          y: trailSpringY,
          translateX: "-50%",
          translateY: "-50%",
          width: 18,
          height: 18,
          border: "1px solid rgba(129,140,248,0.6)",
          background: "rgba(129,140,248,0.05)",
        }}
      />

      {/* ── Inner dot ── */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-9999 rounded-full"
        style={{
          x: dotSpringX,
          y: dotSpringY,
          translateX: "-50%",
          translateY: "-50%",
          width: 5,
          height: 5,
          background: "rgba(56,189,248,0.9)",
          boxShadow: "0 0 6px rgba(56,189,248,0.8)",
        }}
      />
    </>
  );
};

export default CursorTrail;