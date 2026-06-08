import { motion } from "framer-motion";
import { Github, ExternalLink, Folder } from "lucide-react";

const projects = [
  {
    title: "Vehicle Rental System",
    description:
      "A full-stack web app for renting vehicles featuring real-time booking, an admin dashboard, and Stripe payments.",
    tech: ["React", "TypeScript", "Express", "PostgreSQL", "Stripe"],
    github: "https://github.com/briangaturu/vehicle-rental-system",
    demo: "https://vehicle-rental-mgnt-system.netlify.app/",
    accent: "from-cyan-500/20 to-blue-500/5 border-cyan-400/25",
    glow: "rgba(56,189,248,0.12)",
    tag: "Full-Stack",
  },
  {
    title: "Restaurant Ordering App",
    description:
      "Online restaurant system where users browse meals, manage carts, schedule orders, and complete payments. Admins manage menu and orders.",
    tech: ["React", "Node.js", "Drizzle ORM", "Cloudinary"],
    github: "https://github.com/briangaturu/grill-and-go",
    demo: "https://restaurant-ordering-demo.vercel.app",
    accent: "from-indigo-500/20 to-purple-500/5 border-indigo-400/25",
    glow: "rgba(99,102,241,0.12)",
    tag: "Full-Stack",
  },
  {
    title: "Portfolio Website",
    description:
      "Personal portfolio built with React, TailwindCSS, and Framer Motion — designed to showcase projects and experience elegantly.",
    tech: ["React", "TailwindCSS", "Framer Motion"],
    github: "https://github.com/briangaturu/my-portifolio",
    demo: "https://brian-gaturu1.netlify.app/",
    accent: "from-violet-500/20 to-pink-500/5 border-violet-400/25",
    glow: "rgba(139,92,246,0.12)",
    tag: "Frontend",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="relative min-h-screen flex flex-col items-center justify-center px-6 md:px-20 py-24 overflow-hidden
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
      <div className="absolute top-0 right-0 w-[500px] h-64 rounded-full bg-indigo-400/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-64 rounded-full bg-cyan-400/10 blur-3xl pointer-events-none" />

      {/* ── Heading ── */}
      <motion.div
        className="relative z-10 text-center mb-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <p className="text-xs font-bold tracking-[0.2em] uppercase text-cyan-500 dark:text-cyan-400 mb-3">
           What I've Built
        </p>
        <h2 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white leading-tight">
          Featured{" "}
          <span
            className="bg-clip-text text-transparent"
            style={{ backgroundImage: "linear-gradient(135deg,#38bdf8,#818cf8)" }}
          >
            Projects
          </span>
        </h2>
        <p className="mt-4 text-gray-500 dark:text-gray-400 max-w-lg mx-auto text-sm">
          A selection of real-world applications I've designed, built, and shipped.
        </p>
      </motion.div>

      {/* ── Cards grid ── */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl">
        {projects.map((project, i) => (
          <motion.div
            key={project.title}
            className={`group relative flex flex-col rounded-3xl border bg-linear-to-br backdrop-blur-xl p-7 shadow-lg ${project.accent}`}
            style={{ boxShadow: `0 8px 40px ${project.glow}` }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -8, scale: 1.02 }}
            viewport={{ once: true }}
          >
            {/* top glow edge on hover */}
            <div className="absolute top-0 left-6 right-6 h-px bg-linear-to-r from-transparent via-cyan-400/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full" />

            {/* corner accent */}
            <div
              className="absolute top-0 left-0 w-24 h-24 rounded-tl-3xl pointer-events-none"
              style={{
                background: `radial-gradient(circle at top left, ${project.glow.replace("0.12", "0.25")}, transparent 70%)`,
              }}
            />

            {/* header */}
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-2">
                <Folder
                  size={18}
                  className="text-cyan-500 dark:text-cyan-400 shrink-0"
                />
                <span className="text-xs font-bold tracking-wider uppercase text-gray-400 dark:text-gray-500">
                  {project.tag}
                </span>
              </div>
              {/* number badge */}
              <span className="text-xs font-mono font-bold text-gray-400 dark:text-gray-600">
                {String(i + 1).padStart(2, "0")}
              </span>
            </div>

            <h3 className="text-xl font-black text-gray-900 dark:text-white mb-3 leading-snug">
              {project.title}
            </h3>

            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-5 flex-1">
              {project.description}
            </p>

            {/* tech chips */}
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="px-2.5 py-1 rounded-full text-xs font-semibold border border-white/20 dark:border-white/10 bg-white/40 dark:bg-white/5 text-gray-700 dark:text-gray-300"
                >
                  {t}
                </span>
              ))}
            </div>

            {/* action buttons */}
            <div className="flex items-center gap-3 mt-auto">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group/btn flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold border border-white/20 dark:border-white/10 bg-white/40 dark:bg-white/5 text-gray-800 dark:text-gray-200 hover:bg-gray-900 hover:text-white hover:border-gray-900 transition-all duration-200"
              >
                <Github size={14} />
                Code
              </a>
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="relative flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold text-white overflow-hidden"
                style={{ background: "linear-gradient(135deg,#38bdf8,#6366f1)" }}
              >
                <span className="relative z-10 flex items-center gap-2">
                  <ExternalLink size={14} />
                  Live Demo
                </span>
                {/* shimmer */}
                <motion.span
                  className="absolute inset-0 bg-white/20 -skew-x-12"
                  initial={{ x: "-120%" }}
                  whileHover={{ x: "120%" }}
                  transition={{ duration: 0.5 }}
                />
              </a>
            </div>
          </motion.div>
        ))}
      </div>

      {/* ── GitHub CTA ── */}
      <motion.div
        className="relative z-10 mt-14 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        viewport={{ once: true }}
      >
        <a
          href="https://github.com/briangaturu"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-7 py-3 rounded-full border border-cyan-400/30 bg-white/60 dark:bg-white/5 backdrop-blur-sm text-sm font-semibold text-gray-700 dark:text-gray-300 hover:border-cyan-400/60 hover:text-cyan-600 dark:hover:text-cyan-300 transition-all hover:scale-105"
        >
          <Github size={16} />
          View all projects on GitHub
        </a>
      </motion.div>

      {/* bottom strip */}
      <motion.div
        className="relative z-10 mt-12 flex items-center gap-4 w-full max-w-6xl"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="h-px flex-1 bg-linear-to-r from-transparent via-cyan-400/30 to-transparent" />
        <span className="text-xs text-gray-400 font-mono tracking-widest uppercase">
          Always Shipping
        </span>
        <div className="h-px flex-1 bg-linear-to-r from-transparent via-cyan-400/30 to-transparent" />
      </motion.div>
    </section>
  );
};

export default Projects;