import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, ExternalLink, Folder, ChevronLeft, ChevronRight } from "lucide-react";

// ── Import your project images from assets here ──
// Example:
import ridexpress from "../assets/ridexpress.png";
import foodiehub from "../assets/foodiehub.png";
import rifthaul from "../assets/rifthaul.png";
import agrisoko from "../assets/agrisoko.png";
import webdev254 from "../assets/webdev254.png";

const projects = [
  {
    title: "Ridexpress:Vehicle Rental System",
    description:
      "A full-stack web app for renting vehicles featuring real-time booking, an admin dashboard, and Stripe payments.",
    tech: ["React", "TypeScript", "Express", "PostgreSQL", "Stripe"],
    github: "https://github.com/briangaturu/vehicle-rental-system",
    demo: "https://vehicle-rental-mgnt-system.netlify.app/",
    accent: "from-cyan-500/20 to-blue-500/5 border-cyan-400/25",
    glow: "rgba(56,189,248,0.12)",
    tag: "Full-Stack",
    image: ridexpress,
  },
  {

    title: "Foodiehub:Restaurant Ordering App",
    description:
      "Online restaurant system where users browse meals, manage carts, schedule orders, and complete payments. Admins manage menu and orders.",
    tech: ["React", "Node.js", "Drizzle ORM", "Cloudinary"],
    github: "https://github.com/briangaturu/foodiehub",
    demo: "https://foodiehubke.netlify.app/",
    accent: "from-indigo-500/20 to-purple-500/5 border-indigo-400/25",
    glow: "rgba(99,102,241,0.12)",
    tag: "Full-Stack",
    image:foodiehub,

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
    image: null, // replace with: portfolioImg
  },
  // ── Placeholder projects — fill these in with real details ──
  {
    title: "Agrisoko:Agricultural Marketplace",
    description: "A marketplace connecting farmers and buyers, streamlining agricultural trade with real-time listings, secure payments, and logistics support.",
    tech: ["React", "Node.js"],
    github: "https://github.com/briangaturu/Agrisoko",
    demo: "https://agrisoko.netlify.app/",
    accent: "from-emerald-500/20 to-teal-500/5 border-emerald-400/25",
    glow: "rgba(16,185,129,0.12)",
    tag: "Full-Stack",
    image:agrisoko,
  },
  {
    title: "Rifthaul",
    description: "A marketplace where transporters can post their trucks and get hired and also businesses can post a load for truckers to transport",
    tech: ["React", "TypeScript"],
    github: "https://github.com/briangaturu/rifthaul",
    demo: "https://rifthaul.netlify.app/",
    accent: "from-amber-500/20 to-orange-500/5 border-amber-400/25",
    glow: "rgba(245,158,11,0.12)",
    tag: "Frontend",
    image:rifthaul,
  },
  {
    title: "Project Six",
    description: "Short description of what this project does and the problem it solves.",
    tech: ["Node.js", "PostgreSQL"],
    github: "https://github.com/briangaturu",
    demo: "#",
    accent: "from-rose-500/20 to-pink-500/5 border-rose-400/25",
    glow: "rgba(244,63,94,0.12)",
    tag: "Backend",
    image: null,
  },
];

const PAGE_SIZE = 3;
const totalPages = Math.ceil(projects.length / PAGE_SIZE);

const Projects = () => {
  const [page, setPage] = useState(0);
  const [direction, setDirection] = useState(0);

  const goTo = (newPage: number, dir: number) => {
    setDirection(dir);
    setPage((newPage + totalPages) % totalPages);
  };

  const visibleProjects = projects.slice(
    page * PAGE_SIZE,
    page * PAGE_SIZE + PAGE_SIZE
  );

  return (
    <section
      id="projects"
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

      {/* ── Carousel ── */}
      <div className="relative z-10 w-full max-w-6xl">
        <div className="relative">
          {/* prev arrow */}
          {totalPages > 1 && (
            <button
              onClick={() => goTo(page - 1, -1)}
              aria-label="Previous projects"
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-14 z-20
                w-11 h-11 rounded-full flex items-center justify-center
                bg-white/70 dark:bg-white/10 border border-white/30 dark:border-white/10 backdrop-blur-md
                shadow-lg text-gray-700 dark:text-gray-200
                hover:bg-white hover:scale-110 hover:text-cyan-600 dark:hover:text-cyan-300
                transition-all duration-200"
            >
              <ChevronLeft size={20} />
            </button>
          )}

          {/* cards grid */}
          <div className="overflow-hidden">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={page}
                custom={direction}
                initial={{ opacity: 0, x: direction >= 0 ? 60 : -60 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction >= 0 ? -60 : 60 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full"
              >
                {visibleProjects.map((project, i) => (
                  <motion.div
                    key={project.title}
                    className={`group relative flex flex-col rounded-3xl border bg-linear-to-br backdrop-blur-xl shadow-lg overflow-hidden ${project.accent}`}
                    style={{ boxShadow: `0 8px 40px ${project.glow}` }}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                    whileHover={{ y: -8, scale: 1.02 }}
                  >
                    {/* top glow edge on hover */}
                    <div className="absolute top-0 left-6 right-6 h-px bg-linear-to-r from-transparent via-cyan-400/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full z-10" />

                    {/* image / placeholder */}
                    <div className="relative w-full h-44 overflow-hidden">
                      {project.image ? (
                        <img
                          src={project.image}
                          alt={`${project.title} preview`}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      ) : (
                        <div
                          className="w-full h-full flex items-center justify-center"
                          style={{
                            background: `radial-gradient(circle at 30% 30%, ${project.glow.replace("0.12", "0.3")}, transparent 70%)`,
                          }}
                        >
                          <Folder size={36} className="text-white/40" />
                        </div>
                      )}
                      <div className="absolute inset-0 bg-linear-to-t from-black/10 to-transparent" />
                    </div>

                    <div className="relative flex flex-col flex-1 p-7">
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
                        <span className="text-xs font-mono font-bold text-gray-400 dark:text-gray-600">
                          {String(page * PAGE_SIZE + i + 1).padStart(2, "0")}
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
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* next arrow */}
          {totalPages > 1 && (
            <button
              onClick={() => goTo(page + 1, 1)}
              aria-label="Next projects"
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-14 z-20
                w-11 h-11 rounded-full flex items-center justify-center
                bg-white/70 dark:bg-white/10 border border-white/30 dark:border-white/10 backdrop-blur-md
                shadow-lg text-gray-700 dark:text-gray-200
                hover:bg-white hover:scale-110 hover:text-cyan-600 dark:hover:text-cyan-300
                transition-all duration-200"
            >
              <ChevronRight size={20} />
            </button>
          )}
        </div>

        {/* pagination dots */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-2 mt-10">
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i, i > page ? 1 : -1)}
                aria-label={`Go to page ${i + 1}`}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === page
                    ? "w-8 bg-linear-to-r from-cyan-400 to-indigo-400"
                    : "w-2 bg-gray-300 dark:bg-white/15 hover:bg-gray-400 dark:hover:bg-white/30"
                }`}
              />
            ))}
          </div>
        )}
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