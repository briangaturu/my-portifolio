import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import brian3 from "../assets/brian3.jpeg";

/* ── Floating particle dot ── */
const Particle = ({ style }: { style: React.CSSProperties }) => (
  <motion.span
    className="absolute w-1 h-1 rounded-full bg-cyan-400/40 dark:bg-cyan-300/30"
    style={style}
    animate={{ y: [0, -18, 0], opacity: [0.3, 0.8, 0.3] }}
    transition={{
      duration: Math.random() * 3 + 3,
      repeat: Infinity,
      delay: Math.random() * 4,
      ease: "easeInOut",
    }}
  />
);

/* ── Animated counter for the stat chips ── */
const Counter = ({ to }: { to: number }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.round(v));
  const [display, setDisplay] = useState(0);
  useEffect(() => {
    rounded.on("change", setDisplay);
    const ctrl = animate(count, to, { duration: 2, delay: 1.2, ease: "easeOut" });
    return ctrl.stop;
  }, []);
  return <>{display}</>;
};

const ROLES = ["Full-Stack Developer", "UI/UX Enthusiast", "Open-Source Builder"];

const Hero = () => {
  const [roleIdx, setRoleIdx] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);
  const timeout = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
  

  /* typewriter effect */
  useEffect(() => {
    const full = ROLES[roleIdx];
    if (!deleting && displayed.length < full.length) {
      timeout.current = setTimeout(() => setDisplayed(full.slice(0, displayed.length + 1)), 60);
    } else if (!deleting && displayed.length === full.length) {
      timeout.current = setTimeout(() => setDeleting(true), 1800);
    } else if (deleting && displayed.length > 0) {
      timeout.current = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 35);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setRoleIdx((i) => (i + 1) % ROLES.length);
    }
    return () => clearTimeout(timeout.current);
  }, [displayed, deleting, roleIdx]);

  /* generate particles once */
  const particles = useRef(
    Array.from({ length: 28 }, (_, i) => ({
      left: `${(i * 37 + 11) % 100}%`,
      top: `${(i * 53 + 7) % 100}%`,
    }))
  );

  return (
    <section
      id="hero"
      className="relative flex flex-col md:flex-row items-center justify-between min-h-screen px-8 md:px-20 overflow-hidden
        bg-[#f0f4ff] dark:bg-[#050b18]"
    >
      {/* ── Grid texture ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(99,179,237,.07) 1px, transparent 1px),
            linear-gradient(90deg, rgba(99,179,237,.07) 1px, transparent 1px)
          `,
          backgroundSize: "48px 48px",
        }}
      />

      {/* ── Ambient glow blobs ── */}
      <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-cyan-400/10 dark:bg-cyan-500/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-indigo-500/10 dark:bg-indigo-600/10 blur-3xl pointer-events-none" />

      {/* ── Particles ── */}
      {particles.current.map((s, i) => (
        <Particle key={i} style={s} />
      ))}

      {/* ══ LEFT CONTENT ══ */}
      <motion.div
        className="relative z-10 space-y-7 text-center md:text-left max-w-xl"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      >
        {/* status badge */}
        <motion.div
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyan-400/40 bg-cyan-400/10 dark:bg-cyan-900/30 text-cyan-600 dark:text-cyan-300 text-sm font-medium tracking-wide"
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400" />
          </span>
          Available for work
        </motion.div>

        {/* headline */}
        <h1 className="text-4xl md:text-[3.8rem] font-black text-gray-900 dark:text-white leading-[1.1] tracking-tight">
          Hi, I'm{" "}
          <span className="relative inline-block">
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  "linear-gradient(135deg, #38bdf8 0%, #818cf8 50%, #a78bfa 100%)",
              }}
            >
              Brian Gaturu
            </span>
            {/* underline bar */}
            <motion.span
              className="absolute left-0 -bottom-1 h-[3px] rounded-full"
              style={{
                background: "linear-gradient(90deg,#38bdf8,#818cf8)",
              }}
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ delay: 1, duration: 0.7, ease: "easeOut" }}
            />
          </span>
        </h1>

        {/* typewriter role */}
        <p className="text-xl font-mono text-gray-500 dark:text-gray-400 h-8">
          <span className="text-indigo-500 dark:text-indigo-400 font-semibold">
            {displayed}
          </span>
          <span className="inline-block w-0.5 h-5 bg-indigo-400 ml-0.5 align-middle animate-pulse" />
        </p>

        {/* description */}
        <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed">
          Dedicated to crafting clean, scalable, and user-friendly digital experiences — where design meets engineering precision.
        </p>

        {/* CTA buttons */}
        <motion.div
          className="flex flex-wrap justify-center md:justify-start gap-4"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
        >
          <a
            href="#projects"
            className="group relative px-7 py-3 rounded-full font-semibold text-white overflow-hidden shadow-lg shadow-indigo-500/30 transition-transform hover:scale-105 active:scale-95"
            style={{
              background: "linear-gradient(135deg,#38bdf8,#6366f1)",
            }}
          >
            <span className="relative z-10">View My Work</span>
            {/* shimmer */}
            <span className="absolute inset-0 bg-white/20 translate-x-[-110%] skew-x-[-20deg] group-hover:translate-x-[110%] transition-transform duration-700" />
          </a>
          <a
            href="#contact"
            className="px-7 py-3 rounded-full font-semibold border border-indigo-400/50 text-indigo-600 dark:text-indigo-300 bg-white/60 dark:bg-white/5 backdrop-blur-sm hover:bg-indigo-50 dark:hover:bg-indigo-900/20 transition-all hover:scale-105 active:scale-95"
          >
            Contact Me
          </a>
        </motion.div>

        {/* stat chips */}
        <motion.div
          className="flex flex-wrap justify-center md:justify-start gap-4 pt-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          {[
            { value: 2, suffix: "+", label: "Years exp." },
            { value: 20, suffix: "+", label: "Projects" },
            // { value: 10, suffix: "+", label: "Happy clients" },
          ].map(({ value, suffix, label }) => (
            <div
              key={label}
              className="flex flex-col items-center px-5 py-2 rounded-2xl border border-cyan-400/20 bg-white/60 dark:bg-white/5 backdrop-blur-sm"
            >
              <span className="text-2xl font-black text-gray-900 dark:text-white tabular-nums">
                <Counter to={value} />
                {suffix}
              </span>
              <span className="text-xs text-gray-500 dark:text-gray-400">{label}</span>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* ══ RIGHT IMAGE ══ */}
      <motion.div
        className="relative mt-16 md:mt-0 z-10"
        initial={{ opacity: 0, scale: 0.75 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
      >
        {/* outer slow-spin orbital */}
        <motion.div
          className="absolute inset-0 rounded-full"
          style={{
            background:
              "conic-gradient(from 0deg, transparent 70%, #38bdf8 85%, #6366f1 100%)",
            padding: "3px",
            borderRadius: "50%",
            scale: 1.07,
          }}
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
        />

        {/* inner counter-spin orbital */}
        <motion.div
          className="absolute inset-0 rounded-full"
          style={{
            background:
              "conic-gradient(from 180deg, transparent 75%, #a78bfa 90%, transparent 100%)",
            padding: "2px",
            borderRadius: "50%",
            scale: 1.14,
          }}
          animate={{ rotate: -360 }}
          transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
        />

        {/* glow ring */}
        <div
          className="absolute inset-0 rounded-full pointer-events-none"
          style={{
            boxShadow:
              "0 0 40px 12px rgba(99,102,241,0.25), 0 0 80px 20px rgba(56,189,248,0.12)",
            scale: "1.05",
          }}
        />

        {/* photo */}
        <motion.img
          src={brian3}
          alt="Brian Gaturu"
          className="relative w-64 md:w-[360px] aspect-square rounded-full object-cover border-4 border-white/20 dark:border-white/10"
          whileHover={{ scale: 1.04 }}
          transition={{ type: "spring", stiffness: 300 }}
        />

        {/* floating badge — top right */}
        <motion.div
          className="absolute -top-4 -right-4 px-3 py-1.5 rounded-xl bg-white dark:bg-gray-900 border border-cyan-300/40 shadow-lg shadow-cyan-500/10 text-xs font-semibold text-cyan-600 dark:text-cyan-300 whitespace-nowrap"
          animate={{ y: [0, -6, 0] }}
          transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
        >
          ⚡ React · Node.js
        </motion.div>

        {/* floating badge — bottom left */}
        <motion.div
          className="absolute -bottom-4 -left-4 px-3 py-1.5 rounded-xl bg-white dark:bg-gray-900 border border-indigo-300/40 shadow-lg shadow-indigo-500/10 text-xs font-semibold text-indigo-600 dark:text-indigo-300 whitespace-nowrap"
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut", delay: 0.5 }}
        >
          🚀 TypeScript · Tailwind
        </motion.div>
      </motion.div>

      {/* ── scroll hint ── */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-gray-400 dark:text-gray-600"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <motion.div
          className="w-5 h-8 rounded-full border border-gray-400/40 flex items-start justify-center pt-1"
          animate={{}}
        >
          <motion.div
            className="w-1 h-2 rounded-full bg-gray-400/60"
            animate={{ y: [0, 12, 0], opacity: [1, 0.2, 1] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;