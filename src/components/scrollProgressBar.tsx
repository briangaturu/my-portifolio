import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const ScrollProgressBar = () => {
  const { scrollYProgress } = useScroll();

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // translate the tip dot from 0 → (100vw - 6px) as scroll goes 0 → 1
  const dotX = useTransform(scrollYProgress, [0, 1], ["0vw", "calc(100vw - 12px)"]);
  const smoothDotX = useSpring(dotX, { stiffness: 100, damping: 30 });

  return (
    <>
      {/* ── Gradient progress bar ── */}
      <motion.div
        className="fixed top-0 left-0 right-0 z-[9998] h-[3px] origin-left"
        style={{
          scaleX,
          background: "linear-gradient(90deg,#38bdf8,#818cf8,#a78bfa)",
          boxShadow:
            "0 0 10px rgba(56,189,248,0.7), 0 0 24px rgba(129,140,248,0.35)",
        }}
      />

      {/* ── Glowing tip dot ── */}
      <motion.div
        className="fixed top-0 left-0 z-[9998] w-3 h-3 rounded-full -translate-y-[2px]"
        style={{
          x: smoothDotX,
          background: "radial-gradient(circle,#ffffff,#38bdf8)",
          boxShadow:
            "0 0 8px rgba(56,189,248,1), 0 0 20px rgba(56,189,248,0.6), 0 0 40px rgba(129,140,248,0.3)",
        }}
      />
    </>
  );
};

export default ScrollProgressBar;