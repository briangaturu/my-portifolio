import { motion } from "framer-motion";
import brian from "../assets/brian.jpg";

const Hero = () => {
  return (
    <section
      id="hero"
      className="flex flex-col md:flex-row items-center justify-between min-h-screen px-8 md:px-20 bg-gradient-to-br from-white via-gray-50 to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"
    >
      {/* Left Content */}
      <motion.div
        className="space-y-6 text-center md:text-left max-w-xl"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 dark:text-white leading-tight">
          Hi, I’m <span className="text-indigo-500">Brian Gaturu</span>
        </h1>

        <p className="text-lg text-gray-600 dark:text-gray-300">
          A passionate <span className="font-semibold text-indigo-500">Full-Stack Developer</span> dedicated to crafting clean, scalable, and user-friendly digital experiences.
        </p>

        <motion.div
          className="flex justify-center md:justify-start gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <a
            href="#projects"
            className="px-6 py-3 rounded-full bg-indigo-500 text-white font-medium shadow-md hover:bg-indigo-600 transition"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-6 py-3 rounded-full border border-gray-300 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-800 transition"
          >
            Contact Me
          </a>
        </motion.div>
      </motion.div>

      {/* Right Image */}
      <motion.div
        className="mt-12 md:mt-0"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <img
          src={brian}
          alt="Brian Gaturu illustration"
          className="w-72 md:w-[400px] drop-shadow-xl rounded-full"
        />
      </motion.div>
    </section>
  );
};

export default Hero;
