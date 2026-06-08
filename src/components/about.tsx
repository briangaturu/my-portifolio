import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";
import brian2 from "../assets/brian2.jpeg";

const techStack = [
  { name: "React", icon: "⚛️", color: "from-cyan-500/20 to-cyan-400/5 border-cyan-400/30 text-cyan-600 dark:text-cyan-300" },
  { name: "TypeScript", icon: "🔷", color: "from-blue-500/20 to-blue-400/5 border-blue-400/30 text-blue-600 dark:text-blue-300" },
  { name: "JavaScript", icon: "🟨", color: "from-yellow-400/20 to-yellow-300/5 border-yellow-400/30 text-yellow-700 dark:text-yellow-300" },
  { name: "Node.js", icon: "🟢", color: "from-green-500/20 to-green-400/5 border-green-400/30 text-green-600 dark:text-green-300" },
  { name: "Express", icon: "🚂", color: "from-gray-400/20 to-gray-300/5 border-gray-400/30 text-gray-700 dark:text-gray-300" },
  { name: "PostgreSQL", icon: "🐘", color: "from-indigo-500/20 to-indigo-400/5 border-indigo-400/30 text-indigo-600 dark:text-indigo-300" },
  { name: "TailwindCSS", icon: "🌊", color: "from-sky-500/20 to-sky-400/5 border-sky-400/30 text-sky-600 dark:text-sky-300" },
  { name: "Drizzle ORM", icon: "💧", color: "from-purple-500/20 to-purple-400/5 border-purple-400/30 text-purple-600 dark:text-purple-300" },
  { name: "Git / GitHub", icon: "🐙", color: "from-orange-500/20 to-orange-400/5 border-orange-400/30 text-orange-600 dark:text-orange-300" },
];

/* 3-D tilt card on mouse move */
const TiltCard = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [6, -6]), { stiffness: 300, damping: 30 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-6, 6]), { stiffness: 300, damping: 30 });

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = ref.current!.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  return (
    <motion.div
      ref={ref}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      onMouseMove={handleMove}
      onMouseLeave={() => { x.set(0); y.set(0); }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

const About = () => {
  return (
    <>
      {/* ══════════════════════════════════════
          ABOUT SECTION
      ══════════════════════════════════════ */}
      <section
        id="about"
        className="relative min-h-screen flex items-center px-6 md:px-20 py-24 overflow-hidden
          bg-[#f0f4ff] dark:bg-[#050b18]"
      >
        {/* grid bg */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `
              linear-gradient(rgba(99,179,237,.06) 1px, transparent 1px),
              linear-gradient(90deg, rgba(99,179,237,.06) 1px, transparent 1px)
            `,
            backgroundSize: "48px 48px",
          }}
        />
        {/* blobs */}
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-indigo-400/10 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-cyan-400/10 blur-3xl pointer-events-none" />

        <div className="relative z-10 w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-14 items-center">

          {/* ── Left: photo with orbital decoration ── */}
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
          >
            <div className="relative w-72 md:w-[360px]">
              {/* rotating border */}
              <motion.div
                className="absolute -inset-3 rounded-3xl"
                style={{
                  background: "conic-gradient(from 0deg, transparent 60%, #38bdf8 80%, #818cf8 100%)",
                  borderRadius: "28px",
                }}
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
              />
              {/* counter ring */}
              <motion.div
                className="absolute -inset-5 rounded-3xl opacity-40"
                style={{
                  background: "conic-gradient(from 180deg, transparent 70%, #a78bfa 90%, transparent 100%)",
                  borderRadius: "32px",
                }}
                animate={{ rotate: -360 }}
                transition={{ repeat: Infinity, duration: 16, ease: "linear" }}
              />

              <img
                src={brian2}
                alt="Brian Gaturu"
                className="relative w-full aspect-square object-cover rounded-3xl border-2 border-white/20 dark:border-white/10 shadow-2xl"
              />

              {/* floating stat */}
              <motion.div
                className="absolute -bottom-5 -right-5 px-4 py-2 rounded-2xl bg-white dark:bg-gray-900 border border-indigo-300/30 shadow-xl text-sm font-semibold text-indigo-600 dark:text-indigo-300"
                animate={{ y: [0, -6, 0] }}
                transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              >
                🔥 2+ yrs experience
              </motion.div>
            </div>
          </motion.div>

          {/* ── Right: text card ── */}
          <TiltCard>
            <motion.div
              className="relative rounded-3xl p-8 md:p-10 border border-cyan-400/20 bg-white/60 dark:bg-white/5 backdrop-blur-xl shadow-[0_8px_40px_rgba(56,189,248,0.08)]"
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
            >
              {/* corner accent */}
              <div
                className="absolute top-0 left-0 w-24 h-24 rounded-tl-3xl pointer-events-none"
                style={{
                  background: "radial-gradient(circle at top left, rgba(56,189,248,0.15), transparent 70%)",
                }}
              />

              {/* section label */}
              <p className="text-xs font-bold tracking-[0.2em] uppercase text-cyan-500 dark:text-cyan-400 mb-3">
                 Who I Am
              </p>

              <h2 className="text-3xl md:text-4xl font-black text-gray-900 dark:text-white mb-6 leading-tight">
                About{" "}
                <span
                  className="bg-clip-text text-transparent"
                  style={{
                    backgroundImage: "linear-gradient(135deg,#38bdf8,#818cf8)",
                  }}
                >
                  Me
                </span>
              </h2>

              {[
                <>I'm <span className="font-bold text-indigo-500 dark:text-indigo-400">Brian Gaturu</span>, a passionate <span className="font-semibold">Full-Stack Developer</span> who enjoys building dynamic and scalable web applications.</>,
                "My focus is on crafting clean, maintainable code and creating intuitive user experiences — I value continuous learning and collaboration in delivering impactful digital products.",
                "I'm always exploring new tools and technologies that enhance performance, reliability, and developer experience.",
              ].map((text, i) => (
                <motion.p
                  key={i}
                  className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4 text-[0.95rem]"
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + i * 0.12, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  {text}
                </motion.p>
              ))}

              {/* mini trait chips */}
              <div className="flex flex-wrap gap-2 mt-6">
                {["Problem Solver", "Clean Code", "Team Player", "Fast Learner"].map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1 text-xs font-semibold rounded-full border border-cyan-400/30 bg-cyan-400/10 text-cyan-700 dark:text-cyan-300"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          </TiltCard>
        </div>
      </section>

      {/* ══════════════════════════════════════
          TECH STACK SECTION
      ══════════════════════════════════════ */}
      <section
        id="tech"
        className="relative py-24 px-6 md:px-20 overflow-hidden
          bg-[#080f1e] dark:bg-[#080f1e]"
      >
        {/* scanlines overlay */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.03]"
          style={{
            backgroundImage: "repeating-linear-gradient(0deg, #fff 0px, #fff 1px, transparent 1px, transparent 4px)",
          }}
        />
        {/* grid */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `
              linear-gradient(rgba(99,179,237,.05) 1px, transparent 1px),
              linear-gradient(90deg, rgba(99,179,237,.05) 1px, transparent 1px)
            `,
            backgroundSize: "48px 48px",
          }}
        />
        {/* central glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full bg-indigo-600/10 blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-5xl mx-auto">
          {/* heading */}
          <motion.div
            className="text-center mb-14"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <p className="text-xs font-bold tracking-[0.2em] uppercase text-cyan-500 mb-3">
               Tools & Technologies
            </p>
            <h2 className="text-3xl md:text-5xl font-black text-white leading-tight">
              Tech{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{ backgroundImage: "linear-gradient(135deg,#38bdf8,#818cf8)" }}
              >
                Stack
              </span>
            </h2>
            <p className="mt-4 text-gray-400 max-w-lg mx-auto text-sm leading-relaxed">
              A curated set of technologies I use to build fast, scalable, and maintainable products.
            </p>
          </motion.div>

          {/* tech grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-4">
            {techStack.map((tech, i) => (
              <motion.div
                key={tech.name}
                className={`group relative flex items-center gap-3 px-5 py-4 rounded-2xl border bg-linear-to-br cursor-default ${tech.color} backdrop-blur-sm transition-all duration-300`}
                initial={{ opacity: 0, scale: 0.85, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ delay: i * 0.07, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.06, y: -4 }}
                whileTap={{ scale: 0.97 }}
              >
                {/* hover glow line at top */}
                <div className="absolute top-0 left-4 right-4 h-px bg-linear-to-r from-transparent via-current to-transparent opacity-0 group-hover:opacity-40 transition-opacity rounded-full" />

                <span className="text-xl shrink-0" aria-hidden="true">{tech.icon}</span>
                <span className="font-semibold text-sm">{tech.name}</span>

                {/* animated corner bracket */}
                <motion.span
                  className="absolute top-2 right-2 text-[10px] font-mono opacity-0 group-hover:opacity-50 transition-opacity"
                >
                  {"</>"}
                </motion.span>
              </motion.div>
            ))}
          </div>

          {/* bottom strip */}
          <motion.div
            className="mt-14 flex items-center gap-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="h-px flex-1 bg-linear-to-r from-transparent via-cyan-400/30 to-transparent" />
            <span className="text-xs text-gray-500 font-mono tracking-widest uppercase">Always Learning More</span>
            <div className="h-px flex-1 bg-linear-to-r from-transparent via-cyan-400/30 to-transparent" />
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default About;