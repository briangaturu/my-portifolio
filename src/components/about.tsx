import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col md:flex-row items-stretch justify-center gap-10 px-6 md:px-20 py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800"
    >
      {/* About Me Card */}
      <motion.div
        className="flex-1 max-w-xl bg-white/80 dark:bg-gray-800/80 rounded-3xl shadow-lg p-8 md:p-10 border border-gray-100 dark:border-gray-700 backdrop-blur-sm flex flex-col justify-between"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6 text-center">
            About <span className="text-indigo-500">Me</span>
          </h2>

          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            I’m <span className="font-semibold text-indigo-500">Brian Gaturu</span>, a
            passionate <span className="font-semibold">Full-Stack Developer</span> who
            enjoys building dynamic and scalable web applications.
          </p>

          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            My focus is on crafting clean, maintainable code and creating intuitive
            user experiences. I value continuous learning and collaboration in
            delivering impactful digital products.
          </p>

          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            I’m always exploring new tools and technologies that enhance performance,
            reliability, and developer experience.
          </p>
        </div>
      </motion.div>

      {/* Tech Stack Card */}
      <motion.div
        className="flex-1 max-w-xl bg-white/80 dark:bg-gray-800/80 rounded-3xl shadow-lg p-8 md:p-10 border border-gray-100 dark:border-gray-700 backdrop-blur-sm flex flex-col justify-between"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6 text-center">
            Tech <span className="text-indigo-500">Stack</span>
          </h2>

          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6 text-center">
            As a full-stack developer, I work with a variety of technologies to build
            robust and scalable applications.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-center">
            {[
              "React",
              "TypeScript",
              "JavaScript",
              "Node.js",
              "Express",
              "PostgreSQL",
              "TailwindCSS",
              "Drizzle ORM",
              "Git / GitHub",
            ].map((tech) => (
              <div
                key={tech}
                className="py-3 px-4 bg-gray-100 dark:bg-gray-700/50 rounded-xl text-gray-800 dark:text-gray-200 font-medium hover:shadow-md transition"
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
