import { motion, AnimatePresence } from "framer-motion";
import { Mail, User, MessageSquare, Send, Github, Linkedin, Twitter } from "lucide-react";
import { useState } from "react";
import webdev254 from "../assets/webdev254.png";

const socials = [
  { icon: Github, label: "GitHub", href: "https://github.com/briangaturu" },
  { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com/in/briangaturu" },
  { icon: Twitter, label: "Twitter", href: "https://x.com/BRIANIRERI46504" },
  { icon: Mail, label: "Email", href: "mailto:briangaturu03@gmail.com" },
];

const Contact = () => {
  const [focused, setFocused] = useState<string | null>(null);
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section
      id="contact"
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
      <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-cyan-400/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-indigo-400/10 blur-3xl pointer-events-none" />

      {/* ── Heading ── */}
      <motion.div
        className="relative z-10 text-center mb-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <p className="text-xs font-bold tracking-[0.2em] uppercase text-cyan-500 dark:text-cyan-400 mb-3">
          // Let's Connect
        </p>
        <h2 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white leading-tight">
          Get In{" "}
          <span
            className="bg-clip-text text-transparent"
            style={{ backgroundImage: "linear-gradient(135deg,#38bdf8,#818cf8)" }}
          >
            Touch
          </span>
        </h2>
        <p className="mt-4 text-gray-500 dark:text-gray-400 max-w-md mx-auto text-sm leading-relaxed">
          Have a project in mind or just want to say hi? My inbox is always open.
        </p>
      </motion.div>

      <div className="relative z-10 w-full max-w-5xl grid grid-cols-1 md:grid-cols-5 gap-8 items-start">

        {/* ── Left info panel ── */}
        <motion.div
          className="md:col-span-2 flex flex-col gap-6"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
        >
          {/* availability card */}
          <div className="rounded-3xl border border-cyan-400/20 bg-white/60 dark:bg-white/5 backdrop-blur-xl p-6 shadow-[0_8px_40px_rgba(56,189,248,0.07)]">
            <div className="flex items-center gap-2 mb-3">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-400" />
              </span>
              <span className="text-xs font-bold text-cyan-600 dark:text-cyan-400 tracking-wider uppercase">
                Available for work
              </span>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
              Open to full-time roles, freelance projects, and exciting collaborations.
            </p>
          </div>

          {/* direct email */}
          <div className="rounded-3xl border border-indigo-400/20 bg-white/60 dark:bg-white/5 backdrop-blur-xl p-6 shadow-[0_8px_40px_rgba(99,102,241,0.07)]">
            <p className="text-xs font-bold tracking-[0.15em] uppercase text-indigo-500 dark:text-indigo-400 mb-2">
              Direct Email
            </p>
            <a
              href="mailto:briangaturu@gmail.com"
              className="text-sm font-semibold text-gray-800 dark:text-white hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors break-all"
            >
              briangaturu03@gmail.com
            </a>
          </div>

          {/* socials */}
          <div className="rounded-3xl border border-white/20 dark:border-white/10 bg-white/60 dark:bg-white/5 backdrop-blur-xl p-6">
            <p className="text-xs font-bold tracking-[0.15em] uppercase text-gray-500 mb-4">
              Find me on
            </p>
            <div className="grid grid-cols-2 gap-3">
              {socials.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 px-3 py-2.5 rounded-2xl border border-white/20 dark:border-white/10 bg-white/40 dark:bg-white/5 text-sm font-medium text-gray-700 dark:text-gray-300 hover:border-cyan-400/40 hover:text-cyan-600 dark:hover:text-cyan-300 transition-all duration-200"
                >
                  <Icon size={15} className="shrink-0" />
                  {label}
                </a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* ── Right form ── */}
        <motion.div
          className="md:col-span-3 relative rounded-3xl border border-cyan-400/20 bg-white/60 dark:bg-white/5 backdrop-blur-xl p-8 shadow-[0_8px_40px_rgba(56,189,248,0.08)]"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
        >
          {/* corner accent */}
          <div
            className="absolute top-0 right-0 w-32 h-32 rounded-tr-3xl pointer-events-none"
            style={{
              background: "radial-gradient(circle at top right,rgba(56,189,248,0.12),transparent 70%)",
            }}
          />

          <AnimatePresence mode="wait">
            {sent ? (
              <motion.div
                key="success"
                className="flex flex-col items-center justify-center py-16 gap-4 text-center"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
              >
                <motion.div
                  className="w-16 h-16 rounded-full flex items-center justify-center border-2 border-cyan-400/50 bg-cyan-400/10"
                  animate={{ scale: [1, 1.12, 1] }}
                  transition={{ repeat: 2, duration: 0.5 }}
                >
                  <Send size={28} className="text-cyan-500" />
                </motion.div>
                <h3 className="text-xl font-black text-gray-900 dark:text-white">Message Sent!</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Thanks for reaching out — I'll get back to you soon.
                </p>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                onSubmit={handleSubmit}
                className="space-y-5"
                initial={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                {/* Name */}
                <div>
                  <label className="block text-xs font-bold tracking-wider uppercase text-gray-500 dark:text-gray-400 mb-2">
                    Name
                  </label>
                  <motion.div
                    className={`flex items-center gap-3 rounded-2xl border px-4 py-3 transition-all duration-200 ${
                      focused === "name"
                        ? "border-cyan-400/60 bg-cyan-400/5 shadow-[0_0_0_3px_rgba(56,189,248,0.1)]"
                        : "border-white/20 dark:border-white/10 bg-white/40 dark:bg-white/5"
                    }`}
                  >
                    <User size={16} className="text-cyan-500 shrink-0" />
                    <input
                      type="text"
                      placeholder="Your name"
                      onFocus={() => setFocused("name")}
                      onBlur={() => setFocused(null)}
                      className="w-full bg-transparent outline-none text-sm text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500"
                      required
                    />
                  </motion.div>
                </div>

                {/* Email */}
                <div>
                  <label className="block text-xs font-bold tracking-wider uppercase text-gray-500 dark:text-gray-400 mb-2">
                    Email
                  </label>
                  <motion.div
                    className={`flex items-center gap-3 rounded-2xl border px-4 py-3 transition-all duration-200 ${
                      focused === "email"
                        ? "border-cyan-400/60 bg-cyan-400/5 shadow-[0_0_0_3px_rgba(56,189,248,0.1)]"
                        : "border-white/20 dark:border-white/10 bg-white/40 dark:bg-white/5"
                    }`}
                  >
                    <Mail size={16} className="text-cyan-500 shrink-0" />
                    <input
                      type="email"
                      placeholder="your@email.com"
                      onFocus={() => setFocused("email")}
                      onBlur={() => setFocused(null)}
                      className="w-full bg-transparent outline-none text-sm text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500"
                      required
                    />
                  </motion.div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-bold tracking-wider uppercase text-gray-500 dark:text-gray-400 mb-2">
                    Message
                  </label>
                  <motion.div
                    className={`flex items-start gap-3 rounded-2xl border px-4 py-3 transition-all duration-200 ${
                      focused === "message"
                        ? "border-cyan-400/60 bg-cyan-400/5 shadow-[0_0_0_3px_rgba(56,189,248,0.1)]"
                        : "border-white/20 dark:border-white/10 bg-white/40 dark:bg-white/5"
                    }`}
                  >
                    <MessageSquare size={16} className="text-cyan-500 shrink-0 mt-0.5" />
                    <textarea
                      placeholder="Tell me about your project or just say hi..."
                      rows={5}
                      onFocus={() => setFocused("message")}
                      onBlur={() => setFocused(null)}
                      className="w-full bg-transparent outline-none resize-none text-sm text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500"
                      required
                    />
                  </motion.div>
                </div>

                {/* Submit */}
                <motion.button
                  type="submit"
                  className="group relative w-full py-3.5 rounded-2xl font-bold text-white overflow-hidden"
                  style={{ background: "linear-gradient(135deg,#38bdf8,#6366f1)" }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    <Send size={16} />
                    Send Message
                  </span>
                  {/* shimmer */}
                  <motion.span
                    className="absolute inset-0 bg-white/20 -skew-x-12"
                    initial={{ x: "-120%" }}
                    whileHover={{ x: "120%" }}
                    transition={{ duration: 0.55 }}
                  />
                </motion.button>
              </motion.form>
            )}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* ── Footer ── */}
      <motion.div
        className="relative z-10 mt-16 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        viewport={{ once: true }}
      >
        <div className="flex items-center gap-4 mb-6">
          <div className="h-px flex-1 bg-linear-to-r from-transparent via-cyan-400/30 to-transparent" />
          <span className="text-xs text-gray-400 font-mono tracking-widest uppercase">
            Brian Ireri © {new Date().getFullYear()}
          </span>
          <div className="h-px flex-1 bg-linear-to-r from-transparent via-cyan-400/30 to-transparent" />
        </div>
        <p className="text-xs text-gray-400 dark:text-gray-600">
          Built with React · TypeScript · TailwindCSS · Framer Motion
        </p>
      </motion.div>
    </section>
  );
};

export default Contact;