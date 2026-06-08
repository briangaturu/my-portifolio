import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";
import brian2 from "../assets/brian2.jpeg";

// techStack.tsx — drop this into your component file

export const techStack = [
  {
    name: "React",
    color: "from-cyan-500/20 to-cyan-400/5 border-cyan-400/30 text-cyan-600 dark:text-cyan-300",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
        <circle cx="12" cy="12" r="2.05" fill="#61DAFB" />
        <g stroke="#61DAFB" strokeWidth="1.1" fill="none">
          <ellipse rx="10" ry="3.8" cx="12" cy="12" />
          <ellipse rx="10" ry="3.8" cx="12" cy="12" transform="rotate(60 12 12)" />
          <ellipse rx="10" ry="3.8" cx="12" cy="12" transform="rotate(120 12 12)" />
        </g>
      </svg>
    ),
  },
  {
    name: "TypeScript",
    color: "from-blue-500/20 to-blue-400/5 border-blue-400/30 text-blue-600 dark:text-blue-300",
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6">
        <rect width="24" height="24" rx="3" fill="#3178C6" />
        <path d="M13.3 13.4h2.1v5.5h1.8v-5.5H19.3v-1.7h-6v1.7zm-4.1 1.9c.4.2.9.3 1.5.3.8 0 1.4-.4 1.4-1.1 0-.6-.3-.9-1.2-1.3-.9-.4-1.5-.9-1.5-1.8 0-1 .8-1.8 2.2-1.8.6 0 1.1.1 1.4.3l-.3 1.3c-.2-.1-.6-.3-1.1-.3-.7 0-1 .4-1 .8 0 .5.4.8 1.3 1.2 1 .4 1.5 1 1.5 1.9 0 1-.8 1.9-2.4 1.9-.6 0-1.3-.2-1.6-.4l.3-1.2z" fill="white" />
      </svg>
    ),
  },
  {
    name: "JavaScript",
    color: "from-yellow-400/20 to-yellow-300/5 border-yellow-400/30 text-yellow-700 dark:text-yellow-300",
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6">
        <rect width="24" height="24" rx="3" fill="#F7DF1E" />
        <path d="M7 17.5c.4.6.9 1.1 1.9 1.1 1 0 1.6-.5 1.6-1.2V11.5h1.9v5.9c0 2-1.2 2.9-2.9 2.9-1.6 0-2.5-.8-2.9-1.8L7 17.5zm6.1-.1c.4.7 1 1.2 2.1 1.2 1 0 1.6-.5 1.6-1.1 0-.8-.6-1.1-1.7-1.5l-.6-.3c-1.7-.7-2.8-1.6-2.8-3.4 0-1.7 1.3-3 3.3-3 1.4 0 2.4.5 3.1 1.8l-1.7 1.1c-.4-.7-.8-1-1.5-1-.6 0-1 .4-1 1 0 .7.4 1 1.5 1.4l.6.3c2 .8 3.1 1.7 3.1 3.5 0 2-1.5 3.2-3.6 3.2-2 0-3.3-1-3.9-2.2l1.5-1z" fill="#000" />
      </svg>
    ),
  },
  {
    name: "Node.js",
    color: "from-green-500/20 to-green-400/5 border-green-400/30 text-green-600 dark:text-green-300",
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6">
        <path d="M12 1.5L2 7v10l10 5.5L22 17V7L12 1.5z" fill="#339933" />
        <path d="M12 4.2l7.5 4.3v8.5L12 21.3l-7.5-4.3V8.5L12 4.2z" fill="#339933" />
        <path d="M12 7.5c-2.5 0-4 1.2-4 3 0 3.9 5.8 3 5.8 5.5 0 .8-.7 1.3-1.9 1.3-1.6 0-2.2-.8-2.1-2.2H8c0 2.2 1.4 3.4 3.9 3.4 2.3 0 3.9-1.2 3.9-3.1 0-3.9-5.8-3.1-5.8-5.5 0-.7.5-1.1 1.7-1.1 1.3 0 1.9.6 1.9 1.8h1.7C15.3 8.7 14 7.5 12 7.5z" fill="white" />
      </svg>
    ),
  },
  {
    name: "Express",
    color: "from-gray-400/20 to-gray-300/5 border-gray-400/30 text-gray-700 dark:text-gray-300",
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
        <path d="M24 18.6c-.8.4-1.3.3-1.8-.4L17.5 12l-.7-.8L22 5c.5-.6 1-.8 1.8-.4v.1c-1.8 1.6-1.8 1.6-3.3 3.5l-2 2.5 5.5 7v.9zM0 11.8L.9 7C2.5 1.7 9-.7 13.2 2.9c2.5 2.1 3 5.2 2.9 8.4H1.8c-.2 4.6 3.1 7.3 7.5 6 1.7-.5 2.8-1.7 3.3-3.4.5.1 1 .2 1.5.2-.9 3.6-4.5 5.7-8.4 4.8C2.3 18.1.3 15.4 0 11.8zm1.8-.9h12.6c-.2-4-2.5-6.4-6-6.4-3.6 0-6.1 2.5-6.6 6.4z" />
      </svg>
    ),
  },
  {
    name: "PostgreSQL",
    color: "from-indigo-500/20 to-indigo-400/5 border-indigo-400/30 text-indigo-600 dark:text-indigo-300",
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6">
        <path d="M17.1 2c-1-.1-2 .2-2.9.5-.8-.2-1.7-.3-2.7-.3-1.9 0-3.5.5-4.7 1.4C5.4 4.7 4.5 6.4 4.5 8.5c0 1.3.3 2.4.8 3.3-.3.9-.4 1.9-.3 2.9.1 1.3.5 2.4 1.2 3.1.4.4.9.7 1.5.7.4 0 .9-.1 1.4-.4.7.3 1.5.5 2.4.6v.8c0 .8.1 1.5.4 2 .3.6.9.9 1.6.9.5 0 1-.2 1.4-.5.5-.4.8-1 1-1.8l.1-.5c.3 0 .6.1.9.1.6 0 1.2-.1 1.7-.3l.1.3c.2.7.5 1.3 1 1.7.4.3.9.5 1.4.5.7 0 1.3-.4 1.6-.9.3-.6.4-1.3.4-2.1 0-.8-.2-1.6-.5-2.2.5-.9.8-2 .8-3.3 0-1.8-.6-3.3-1.7-4.4.1-.6.1-1.3 0-1.9-.2-1-.6-1.9-1.4-2.4-.5-.3-1-.4-1.6-.4z" fill="#336791" />
        <path d="M12 4c1.7 0 3 .4 4 1.1 1 .7 1.5 1.8 1.5 3.3 0 .7-.1 1.4-.4 2-.6-.4-1.4-.7-2.3-.9-.1-.5-.4-1-.7-1.4-.5-.5-1.1-.8-1.9-.8-.3 0-.5 0-.8.1-.5-.5-1.1-.7-1.8-.7s-1.3.2-1.8.7c-.3-.1-.5-.1-.8-.1-.8 0-1.4.3-1.9.8-.4.5-.6 1-.7 1.6-.9.2-1.7.5-2.3.9-.3-.6-.4-1.3-.4-2 0-1.5.5-2.6 1.5-3.3C8.2 4.4 10 4 12 4z" fill="#fff" />
      </svg>
    ),
  },
  {
    name: "TailwindCSS",
    color: "from-sky-500/20 to-sky-400/5 border-sky-400/30 text-sky-600 dark:text-sky-300",
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6">
        <path d="M12 6C9.6 6 8.1 7.2 7.5 9.6c.9-1.2 1.95-1.65 3.15-1.35.685.17 1.174.664 1.715 1.209C13.248 10.382 14.28 11.4 16.5 11.4c2.4 0 3.9-1.2 4.5-3.6-.9 1.2-1.95 1.65-3.15 1.35-.685-.17-1.174-.664-1.715-1.209C15.252 7.018 14.22 6 12 6zM7.5 11.4C5.1 11.4 3.6 12.6 3 15c.9-1.2 1.95-1.65 3.15-1.35.685.171 1.174.664 1.715 1.209C8.748 15.782 9.78 16.8 12 16.8c2.4 0 3.9-1.2 4.5-3.6-.9 1.2-1.95 1.65-3.15 1.35-.685-.17-1.174-.664-1.715-1.209C10.752 12.418 9.72 11.4 7.5 11.4z" fill="#38BDF8" />
      </svg>
    ),
  },
  {
    name: "Drizzle ORM",
    color: "from-purple-500/20 to-purple-400/5 border-purple-400/30 text-purple-600 dark:text-purple-300",
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none">
        <path d="M3 7.5h8M3 12h8M3 16.5h8" stroke="#C5F74F" strokeWidth="2.5" strokeLinecap="round"/>
        <path d="M13 7.5h8M13 12h8M13 16.5h8" stroke="#C5F74F" strokeWidth="2.5" strokeLinecap="round" strokeDasharray="3 2"/>
      </svg>
    ),
  },
  {
    name: "Git / GitHub",
    color: "from-orange-500/20 to-orange-400/5 border-orange-400/30 text-orange-600 dark:text-orange-300",
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
      </svg>
    ),
  },
  {
    name: "Netlify",
    color: "from-green-400/20 to-green-300/5 border-green-400/30 text-green-600 dark:text-green-300",
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6">
        <path d="M16.934 8.519a1.044 1.044 0 01.303.23l2.349-1.045-2.192-2.171-.491 2.954zM12.957 7h1.752l-3.Sum-3.847-1.108 4.505L12.957 7zM9.008 14.095L7.78 15.33l2.73.585-1.502-1.82zM8.3 7.044L6.83 8.52l.49 2.942 2.17-2.17L8.3 7.044z" fill="#05BDBA" />
        <path d="M11.584 21.217L7.413 17.03l-3.624.76 7.795 3.427zM3 13.7l1.97.432L3 12.21V13.7zM21 12.22l-1.97 1.912 1.97-.43V12.22z" fill="#05BDBA" />
        <path d="M14.99 21.216l4.17-3.424-3.624-.76-4.17 4.184h3.624z" fill="#05BDBA" />
        <path d="M12.413 2.783L8.3 7.044l1.19 1.248h4.998l1.19-1.248-3.264-4.26z" fill="#05BDBA" />
      </svg>
    ),
  },
  {
    name: "Vercel",
    color: "from-gray-400/20 to-gray-300/5 border-gray-400/30 text-gray-700 dark:text-gray-300",
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
        <path d="M12 2L2 19.5h20L12 2z" />
      </svg>
    ),
  },
  {
    name: "Cloudinary",
    color: "from-blue-400/20 to-blue-300/5 border-blue-400/30 text-blue-600 dark:text-blue-300",
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6">
        <path d="M20.5 9.5a5 5 0 00-9.5-1.5A4 4 0 106.5 16H20a3.5 3.5 0 00.5-6.5z" fill="#3448C5" />
        <path d="M13 13l-2 2-2-2M11 15v-5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
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