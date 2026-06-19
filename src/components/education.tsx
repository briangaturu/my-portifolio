import { motion } from "framer-motion";
import webdev254 from "../assets/webdev254.png";

const education = [
  {
    title: "Bachelor of Science in Computer Science",
    institution: "Laikipia University",
    year: "2022 – 2026",
    icon: "🎓",
    tags: ["Software Dev", "Algorithms", "Databases"],
    details:
      "Currently on the verge of completing my degree with a strong focus on software development, data structures, and systems design.",
  },
  {
    title: "Software Development Bootcamp",
    institution: "Teach2Give",
    year: "2024",
    icon: "⚡",
    tags: ["React", "Node.js", "TypeScript", "Teamwork"],
    details:
      "Intensive full-stack program covering JavaScript, TypeScript, React, Node.js, Express, and databases. Completed real-world projects and collaborated in agile teams.",
  },
   {
    title: "Software Development Attachment",
    institution: "Newsline Media",
    year: "2026",
    icon: "⚡",
    tags: ["React", "Node.js", "TypeScript", "Teamwork"],
    details:
      "Intensive three months industrial attachment when i interacted with real world problem and created real world solutions.",
  },
];

const Education = () => {
  return (
    <section
      id="education"
      className="relative min-h-screen flex flex-col items-center justify-center px-6 md:px-20 py-24 overflow-hidden
        bg-[#f0f4ff] dark:bg-[#050b18]"
    >
      {/* Moving background image */}
      <motion.img
        src={webdev254}
        alt=""
        className="absolute top-1/2 left-1/2 w-[700px] opacity-5 pointer-events-none z-0"
        style={{
          transform: "translate(-50%, -50%)",
        }}
        animate={{
          x: [-100, 100, -100],
          y: [-50, 50, -50],
          rotate: [0, 360],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
        }}
      />
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
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-64 rounded-full bg-indigo-400/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-cyan-400/10 blur-3xl pointer-events-none" />

      {/* ── Heading ── */}
      <motion.div
        className="relative z-10 text-center mb-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <p className="text-xs font-bold tracking-[0.2em] uppercase text-cyan-500 dark:text-cyan-400 mb-3">
           Academic Journey
        </p>
        <h2 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white leading-tight">
          My{" "}
          <span
            className="bg-clip-text text-transparent"
            style={{ backgroundImage: "linear-gradient(135deg,#38bdf8,#818cf8)" }}
          >
            Education
          </span>
        </h2>
      </motion.div>

      {/* ── Timeline ── */}
      <div className="relative z-10 w-full max-w-4xl">
        {/* vertical spine */}
        <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-linear-to-b from-cyan-400/50 via-indigo-400/40 to-transparent" />

        <div className="flex flex-col gap-12">
          {education.map((edu, i) => {
            const isLeft = i % 2 === 0;
            return (
              <motion.div
                key={edu.title}
                className={`relative flex flex-col md:flex-row items-center gap-6 ${
                  isLeft ? "md:flex-row" : "md:flex-row-reverse"
                }`}
                initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
                viewport={{ once: true }}
              >
                {/* card */}
                <motion.div
                  className="group relative flex-1 rounded-3xl border border-cyan-400/20 bg-white/60 dark:bg-white/5 backdrop-blur-xl p-7 shadow-[0_8px_40px_rgba(56,189,248,0.07)]"
                  whileHover={{ scale: 1.025, y: -4 }}
                  transition={{ type: "spring", stiffness: 300, damping: 28 }}
                >
                  {/* top glow edge on hover */}
                  <div className="absolute top-0 left-6 right-6 h-px bg-linear-to-r from-transparent via-cyan-400/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full" />

                  {/* corner accent */}
                  <div
                    className="absolute top-0 left-0 w-20 h-20 rounded-tl-3xl pointer-events-none"
                    style={{
                      background: "radial-gradient(circle at top left, rgba(56,189,248,0.12), transparent 70%)",
                    }}
                  />

                  {/* header row */}
                  <div className="flex items-start justify-between gap-3 mb-4">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl" aria-hidden="true">{edu.icon}</span>
                      <div>
                        <h3 className="text-lg md:text-xl font-bold text-gray-900 dark:text-white leading-snug">
                          {edu.title}
                        </h3>
                        <p
                          className="text-sm font-semibold bg-clip-text text-transparent mt-0.5"
                          style={{ backgroundImage: "linear-gradient(90deg,#38bdf8,#818cf8)" }}
                        >
                          {edu.institution}
                        </p>
                      </div>
                    </div>
                    {/* year badge */}
                    <span className="shrink-0 px-3 py-1 rounded-full text-xs font-mono font-bold border border-indigo-400/30 bg-indigo-400/10 text-indigo-600 dark:text-indigo-300">
                      {edu.year}
                    </span>
                  </div>

                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-5">
                    {edu.details}
                  </p>

                  {/* tags */}
                  <div className="flex flex-wrap gap-2">
                    {edu.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 rounded-full text-xs font-semibold border border-cyan-400/25 bg-cyan-400/10 text-cyan-700 dark:text-cyan-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>

                {/* spine node */}
                <motion.div
                  className="hidden md:flex shrink-0 w-10 h-10 rounded-full items-center justify-center border-2 border-cyan-400/60 bg-[#f0f4ff] dark:bg-[#050b18] shadow-[0_0_16px_rgba(56,189,248,0.4)]"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: i * 0.15 + 0.3, type: "spring", stiffness: 400 }}
                  viewport={{ once: true }}
                >
                  <div className="w-3 h-3 rounded-full bg-linear-to-br from-cyan-400 to-indigo-500" />
                </motion.div>

                {/* spacer for alternating side */}
                <div className="hidden md:block flex-1" />
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* bottom strip */}
      <motion.div
        className="relative z-10 mt-16 flex items-center gap-4 w-full max-w-4xl"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        viewport={{ once: true }}
      >
        <div className="h-px flex-1 bg-linear-to-r from-transparent via-cyan-400/30 to-transparent" />
        <span className="text-xs text-gray-400 font-mono tracking-widest uppercase">
          Continuously Growing
        </span>
        <div className="h-px flex-1 bg-linear-to-r from-transparent via-cyan-400/30 to-transparent" />
      </motion.div>
    </section>
  );
};

export default Education;