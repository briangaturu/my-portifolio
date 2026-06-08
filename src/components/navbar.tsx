import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";

interface NavItem {
  name: string;
  href: string;
}

const navLinks: NavItem[] = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Education", href: "#education" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Community", href: "#community" },
  { name: "Contact", href: "#contact" },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("Home");
  const [scrolled, setScrolled] = useState(false);
  const indicatorRef = useRef<{ [key: string]: HTMLAnchorElement | null }>({});
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 });

  const { scrollY } = useScroll();
  const navOpacity = useTransform(scrollY, [0, 60], [0.7, 0.95]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* move the sliding indicator to the active link */
  useEffect(() => {
    const el = indicatorRef.current[active];
    if (el) {
      const parent = el.offsetParent as HTMLElement;
      setIndicatorStyle({
        left: el.offsetLeft,
        width: el.offsetWidth,
      });
    }
  }, [active]);

  return (
    <motion.nav
      style={{ opacity: navOpacity }}
      className={`fixed w-full z-50 top-0 left-0 transition-all duration-500 ${
        scrolled
          ? "bg-white/10 dark:bg-[#050b18]/60 backdrop-blur-xl border-b border-cyan-400/20 shadow-[0_4px_30px_rgba(56,189,248,0.08)]"
          : "bg-transparent"
      }`}
    >
      {/* top accent line */}
      <div
        className="absolute top-0 left-0 right-0 h-[1.5px]"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, #38bdf8 30%, #818cf8 70%, transparent 100%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
        {/* ── Logo ── */}
        <motion.a
          href="#hero"
          className="relative text-xl font-black tracking-tight"
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
        >
          <span
            className="bg-clip-text text-transparent"
            style={{
              backgroundImage: "linear-gradient(135deg,#38bdf8 0%,#818cf8 60%,#a78bfa 100%)",
            }}
          >
            Brian Ireri
          </span>
          <span className="text-gray-900 dark:text-white font-black">.</span>
          {/* logo glow */}
          <span className="absolute -inset-1 rounded-lg blur-sm opacity-0 hover:opacity-30 transition-opacity bg-linear-to-r from-cyan-400 to-indigo-500 -z-10" />
        </motion.a>

        {/* ── Desktop Links ── */}
        <div className="hidden md:flex items-center relative gap-1">
          {/* sliding background pill */}
          <motion.div
            className="absolute h-8 rounded-full bg-white/10 dark:bg-white/5 border border-cyan-400/20 backdrop-blur-sm z-0"
            animate={indicatorStyle}
            transition={{ type: "spring", stiffness: 380, damping: 32 }}
          />

          {navLinks.map((item) => (
            <a
              key={item.name}
              href={item.href}
              ref={(el) => { indicatorRef.current[item.name] = el; }}
              onClick={() => setActive(item.name)}
              className={`relative z-10 px-4 py-1.5 text-sm font-medium rounded-full transition-colors duration-200 ${
                active === item.name
                  ? "text-cyan-500 dark:text-cyan-300"
                  : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
              }`}
            >
              {item.name}
              {/* active dot */}
              {active === item.name && (
                <motion.span
                  layoutId="active-dot"
                  className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-cyan-400"
                />
              )}
            </a>
          ))}
        </div>

        {/* ── CTA ── */}
        <div className="hidden md:block">
          <motion.a
            href="#contact"
            className="relative px-5 py-2 rounded-full text-sm font-semibold text-white overflow-hidden"
            style={{
              background: "linear-gradient(135deg,#38bdf8,#6366f1)",
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
          >
            <span className="relative z-10">Hire Me</span>
            {/* shimmer */}
            <motion.span
              className="absolute inset-0 bg-white/25 -skew-x-12"
              initial={{ x: "-120%" }}
              whileHover={{ x: "120%" }}
              transition={{ duration: 0.55 }}
            />
          </motion.a>
        </div>

        {/* ── Mobile Menu Button ── */}
        <button
          onClick={() => setIsOpen((p) => !p)}
          className="md:hidden relative w-9 h-9 flex items-center justify-center rounded-lg border border-cyan-400/30 bg-white/10 dark:bg-white/5 backdrop-blur-sm text-gray-700 dark:text-gray-300 hover:border-cyan-400/60 transition-colors"
          aria-label="Toggle menu"
        >
          <motion.svg
            className="w-5 h-5"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            animate={isOpen ? "open" : "closed"}
          >
            <motion.path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              variants={{
                closed: { d: "M4 6h16" },
                open: { d: "M6 18L18 6" },
              }}
            />
            <motion.path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              variants={{
                closed: { d: "M4 12h16", opacity: 1 },
                open: { d: "M4 12h16", opacity: 0 },
              }}
            />
            <motion.path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              variants={{
                closed: { d: "M4 18h16" },
                open: { d: "M6 6l12 12" },
              }}
            />
          </motion.svg>
        </button>
      </div>

      {/* ── Mobile Menu ── */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden overflow-hidden bg-white/80 dark:bg-[#050b18]/90 backdrop-blur-xl border-t border-cyan-400/20"
          >
            <ul className="flex flex-col py-4 px-6 gap-1">
              {navLinks.map((item, i) => (
                <motion.li
                  key={item.name}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <a
                    href={item.href}
                    onClick={() => {
                      setActive(item.name);
                      setIsOpen(false);
                    }}
                    className={`flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 ${
                      active === item.name
                        ? "bg-cyan-400/10 text-cyan-600 dark:text-cyan-300 border border-cyan-400/20"
                        : "text-gray-700 dark:text-gray-400 hover:bg-gray-100/60 dark:hover:bg-white/5"
                    }`}
                  >
                    {active === item.name && (
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0" />
                    )}
                    {item.name}
                  </a>
                </motion.li>
              ))}
              <motion.li
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navLinks.length * 0.05 }}
                className="pt-2"
              >
                <a
                  href="#contact"
                  onClick={() => setIsOpen(false)}
                  className="block text-center px-4 py-2.5 rounded-xl text-sm font-semibold text-white"
                  style={{ background: "linear-gradient(135deg,#38bdf8,#6366f1)" }}
                >
                  Reach out
                </a>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;