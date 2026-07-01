import { motion } from "framer-motion";
import { Github, MessageSquare, Users, Zap } from "lucide-react";
import webdev254 from "../assets/webdev254.png";

const communities = [
  {
    title: "Open Source Contributor",
    description:
      "Actively contributing to open-source projects with a focus on improving developer experience, UI components, and documentation. Collaboration and learning from other developers is something I truly enjoy.",
    icon: Github,
    accent: "from-cyan-500/15 to-cyan-400/5 border-cyan-400/25",
    iconColor: "text-cyan-500 dark:text-cyan-400",
    iconBg: "bg-cyan-400/10 border-cyan-400/20",
    glow: "rgba(56,189,248,0.1)",
    stats: "10+ Repos",
  },
  {
    title: "Teach2Give Developer Community",
    description:
      "Part of the Teach2Give developer community — engaging in knowledge-sharing sessions, code reviews, and collaborative problem-solving that sharpen our collective skills as a team.",
    icon: MessageSquare,
    accent: "from-indigo-500/15 to-indigo-400/5 border-indigo-400/25",
    iconColor: "text-indigo-500 dark:text-indigo-400",
    iconBg: "bg-indigo-400/10 border-indigo-400/20",
    glow: "rgba(99,102,241,0.1)",
    stats: "Active Member",
  },
  {
    title: "CISLU — UI/UX Track Lead",
    description:
      "Leading the UI/UX track at the Computing Innovation Society of Laikipia University, mentoring students on design fundamentals, Figma workflows, and building user-centred products.",
    icon: Users,
    accent: "from-violet-500/15 to-violet-400/5 border-violet-400/25",
    iconColor: "text-violet-500 dark:text-violet-400",
    iconBg: "bg-violet-400/10 border-violet-400/20",
    glow: "rgba(139,92,246,0.1)",
    stats: "Track Lead",
  },
  {
    title: "Always Building in Public",
    description:
      "Sharing progress, experiments, and learnings on GitHub and within developer circles. Believes in learning out loud and building things that others can learn from, fork, and improve.",
    icon: Zap,
    accent: "from-amber-500/15 to-yellow-400/5 border-amber-400/25",
    iconColor: "text-amber-500 dark:text-amber-400",
    iconBg: "bg-amber-400/10 border-amber-400/20",
    glow: "rgba(245,158,11,0.1)",
    stats: "Open to Collab",
  },
];

const Community = () => {
  return (
    <section
      id="community"
      className="relative min-h-screen flex flex-col items-center justify-center px-6 md:px-20 py-24 overflow-hidden
        bg-[#f0f4ff] dark:bg-[#080f1e]"
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
      <div className="absolute top-0 left-1/3 w-96 h-64 rounded-full bg-cyan-500/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/3 w-96 h-64 rounded-full bg-violet-500/10 blur-3xl pointer-events-none" />

      {/* ── Heading ── */}
      <motion.div
        className="relative z-10 text-center mb-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <p className="text-xs font-bold tracking-[0.2em] uppercase text-cyan-500 dark:text-cyan-400 mb-3">
           Where I Collaborate
        </p>
        <h2 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white leading-tight">
          Developer{" "}
          <span
            className="bg-clip-text text-transparent"
            style={{ backgroundImage: "linear-gradient(135deg,#38bdf8,#818cf8)" }}
          >
            Community
          </span>
        </h2>
        <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-lg mx-auto text-sm leading-relaxed">
          I believe great software is built together — here's where I show up.
        </p>
      </motion.div>

      {/* ── Cards grid ── */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl">
        {communities.map((item, i) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={item.title}
              className={`group relative flex flex-col rounded-3xl border bg-linear-to-br backdrop-blur-xl p-7 ${item.accent}`}
              style={{ boxShadow: `0 8px 40px ${item.glow}` }}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -6, scale: 1.02 }}
              viewport={{ once: true }}
            >
              {/* top hover glow */}
              <div className="absolute top-0 left-6 right-6 h-px bg-linear-to-r from-transparent via-cyan-400/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full" />
              {/* corner accent */}
              <div
                className="absolute top-0 left-0 w-24 h-24 rounded-tl-3xl pointer-events-none"
                style={{
                  background: `radial-gradient(circle at top left,${item.glow.replace("0.1", "0.25")},transparent 70%)`,
                }}
              />

              {/* icon + stat row */}
              <div className="flex items-center justify-between mb-5">
                <div className={`flex items-center justify-center w-11 h-11 rounded-2xl border ${item.iconBg}`}>
                  <Icon size={20} className={item.iconColor} />
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-bold border ${item.iconBg} ${item.iconColor}`}>
                  {item.stats}
                </span>
              </div>

              <h3 className="text-lg font-black text-gray-900 dark:text-white mb-3 leading-snug">
                {item.title}
              </h3>

              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                {item.description}
              </p>

              {/* bottom accent line */}
              <div
                className="absolute bottom-0 left-6 right-6 h-px opacity-20 rounded-full"
                style={{
                  background: "linear-gradient(90deg,transparent,currentColor,transparent)",
                }}
              />
            </motion.div>
          );
        })}
      </div>

      {/* ── Connect CTA ── */}
      <motion.div
        className="relative z-10 mt-14 flex flex-col items-center gap-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        viewport={{ once: true }}
      >
        <p className="text-sm text-gray-500 dark:text-gray-500 font-mono"> Want to build something together?</p>
        <a
          href="https://github.com/briangaturu"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-7 py-3 rounded-full text-sm font-semibold text-white transition-all hover:scale-105"
          style={{ background: "linear-gradient(135deg,#38bdf8,#6366f1)" }}
        >
          <Github size={16} />
          Follow on GitHub
        </a>
      </motion.div>

      {/* bottom strip */}
      <motion.div
        className="relative z-10 mt-12 flex items-center gap-4 w-full max-w-4xl"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="h-px flex-1 bg-linear-to-r from-transparent via-cyan-400/30 to-transparent" />
        <span className="text-xs text-gray-500 font-mono tracking-widest uppercase">
          Better Together
        </span>
        <div className="h-px flex-1 bg-linear-to-r from-transparent via-cyan-400/30 to-transparent" />
      </motion.div>
    </section>
  );
};

export default Community;