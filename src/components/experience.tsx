import { motion } from "framer-motion";

const experiences = [
  {
    role: "Full-Stack Developer (Intern)",
    company: "Teach2Give",
    period: "May 2024 – Aug 2024",
    icon: "💻",
    type: "Internship",
    tags: ["React", "Node.js", "TypeScript", "Express", "Teamwork"],
    description:
      "Underwent an intensive internship focused on full-stack web development. Gained hands-on experience with JavaScript, TypeScript, React, Node.js, Express, and database management. Contributed to real-world projects and collaborated with a team of developers to deliver functional web applications.",
  },
  {
    role: "UI/UX Track Lead",
    company: "CISLU",
    period: "1 Club Year",
    icon: "🎨",
    type: "Leadership",
    tags: ["Figma", "Adobe XD", "Mentorship", "UI/UX"],
    description:
      "Serving as one of the UI/UX trainers at the Computing Innovation Society of Laikipia University (CISLU), training students on the fundamentals of UI/UX design using Figma and Adobe XD.",
  },
  {
    role: "Attache",
    company: "Newsline Media",
    period: "May 2026 – Aug 2026",
    icon: "📡",
    type: "Attachment",
    tags: ["React", "Node.js", "TypeScript", "Express", "Mobile Dev", "Cybersecurity", "Networking"],
    description:
      "Intensive attachment covering full-stack web development, mobile application development, cybersecurity, and networking. Gained hands-on experience with React, Node.js, Express, database management, mobile app development, penetration testing basics, and networking.",
  },
];

const Experience = () => {
  return (
    <section
      id="experience"
      className="relative min-h-screen flex flex-col items-center justify-center px-6 md:px-20 py-24 overflow-hidden
        bg-gray-100 dark:bg-[#080f1e]"
    >
      {/* scanlines — dark only */}
      <div
        className="absolute inset-0 pointer-events-none opacity-0 dark:opacity-[0.025]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg,#fff 0px,#fff 1px,transparent 1px,transparent 4px)",
        }}
      />
      {/* grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(99,179,237,.07) 1px,transparent 1px),
            linear-gradient(90deg,rgba(99,179,237,.07) 1px,transparent 1px)
          `,
          backgroundSize: "48px 48px",
        }}
      />
      {/* blobs */}
      <div className="absolute top-0 left-1/4 w-96 h-64 rounded-full bg-cyan-500/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-64 rounded-full bg-indigo-500/10 blur-3xl pointer-events-none" />

      {/* ── Heading ── */}
      <motion.div
        className="relative z-10 text-center mb-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <p className="text-xs font-bold tracking-[0.2em] uppercase text-cyan-500 dark:text-cyan-400 mb-3">
          // Where I've Worked
        </p>
        <h2 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white leading-tight">
          My{" "}
          <span
            className="bg-clip-text text-transparent"
            style={{ backgroundImage: "linear-gradient(135deg,#38bdf8,#818cf8)" }}
          >
            Experience
          </span>
        </h2>
      </motion.div>

      {/* ── Alternating Timeline ── */}
      <div className="relative z-10 w-full max-w-4xl">
        {/* vertical spine */}
        <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-400/50 via-indigo-400/40 to-transparent" />

        <div className="flex flex-col gap-12">
          {experiences.map((exp, i) => {
            const isLeft = i % 2 === 0;
            return (
              <motion.div
                key={exp.role}
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
                  className="group relative flex-1 rounded-3xl border border-cyan-400/20 bg-white/60 dark:bg-white/5 backdrop-blur-xl p-7 shadow-[0_8px_40px_rgba(56,189,248,0.06)]"
                  whileHover={{ scale: 1.025, y: -4 }}
                  transition={{ type: "spring", stiffness: 300, damping: 28 }}
                >
                  {/* hover top glow */}
                  <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full" />
                  {/* corner accent */}
                  <div
                    className="absolute top-0 left-0 w-24 h-24 rounded-tl-3xl pointer-events-none"
                    style={{
                      background: "radial-gradient(circle at top left,rgba(56,189,248,0.1),transparent 70%)",
                    }}
                  />

                  {/* top row */}
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                    <div>
                      <h3 className="text-lg md:text-xl font-bold text-gray-900 dark:text-white leading-snug">
                        {exp.role}
                      </h3>
                      <p
                        className="text-sm font-semibold mt-0.5 bg-clip-text text-transparent"
                        style={{ backgroundImage: "linear-gradient(90deg,#38bdf8,#818cf8)" }}
                      >
                        {exp.company}
                      </p>
                    </div>

                    <div className="flex flex-col items-end gap-1.5">
                      <span className="px-3 py-1 rounded-full text-xs font-mono font-bold border border-indigo-400/30 bg-indigo-400/10 text-indigo-600 dark:text-indigo-300 whitespace-nowrap">
                        {exp.period}
                      </span>
                      <span className="px-3 py-1 rounded-full text-xs font-semibold border border-cyan-400/25 bg-cyan-400/10 text-cyan-600 dark:text-cyan-300">
                        {exp.type}
                      </span>
                    </div>
                  </div>

                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-5">
                    {exp.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 rounded-full text-xs font-semibold border border-gray-300 dark:border-white/10 bg-gray-200/60 dark:bg-white/5 text-gray-700 dark:text-gray-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>

                {/* spine node */}
                <motion.div
                  className="hidden md:flex shrink-0 w-10 h-10 rounded-full items-center justify-center border-2 border-cyan-400/60 bg-gray-100 dark:bg-[#080f1e] shadow-[0_0_18px_rgba(56,189,248,0.4)]"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: i * 0.15 + 0.3, type: "spring", stiffness: 400 }}
                  viewport={{ once: true }}
                >
                  <span className="text-base" aria-hidden="true">{exp.icon}</span>
                </motion.div>

                {/* spacer */}
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
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent" />
        <span className="text-xs text-gray-500 font-mono tracking-widest uppercase">
          More to come
        </span>
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent" />
      </motion.div>
    </section>
  );
};

export default Experience;