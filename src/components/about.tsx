import { motion } from "framer-motion";
import brian2 from "../assets/brian2.jpeg";


const techStack = [
  { name: "React", color: "bg-cyan-500/10 text-cyan-600 border-cyan-500/30" },
  { name: "TypeScript", color: "bg-blue-500/10 text-blue-600 border-blue-500/30" },
  { name: "JavaScript", color: "bg-yellow-400/20 text-yellow-700 border-yellow-400/40" },
  { name: "Node.js", color: "bg-green-500/10 text-green-600 border-green-500/30" },
  { name: "Express", color: "bg-gray-500/10 text-gray-700 border-gray-500/30 dark:text-gray-200" },
  { name: "PostgreSQL", color: "bg-indigo-500/10 text-indigo-600 border-indigo-500/30" },
  { name: "TailwindCSS", color: "bg-sky-500/10 text-sky-600 border-sky-500/30" },
  { name: "Drizzle ORM", color: "bg-purple-500/10 text-purple-600 border-purple-500/30" },
  { name: "Git / GitHub", color: "bg-orange-500/10 text-orange-600 border-orange-500/30" },
];

const About = () => {
  return (
    <>
      {/* ABOUT ME SECTION */}
      <section
        id="about"
        className="min-h-screen flex items-center px-6 md:px-20 py-20 bg-linear-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800"
      >
        <div className="w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Left: Image */}
          <motion.div
            className="flex justify-center md:justify-start"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img
              src={brian2}
              alt="Brian Gaturu"
              className="w-72 h-72 md:w-[380px] md:h-[380px] object-cover rounded-3xl shadow-xl"
            />
          </motion.div>

          {/* Right: About text */}
          <motion.div
            className="bg-white/80 dark:bg-gray-800/80 rounded-3xl shadow-lg p-8 md:p-10 border border-gray-100 dark:border-gray-700 backdrop-blur-sm"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
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
          </motion.div>
        </div>
      </section>

      {/* TECH STACK SECTION */}
      <section
        id="tech"
        className="min-h-screen flex items-center px-6 md:px-20 py-20 bg-linear-to-b from-white to-gray-50 dark:from-gray-800 dark:to-gray-900"
      >
        <div className="w-full max-w-6xl mx-auto">
          <motion.div
            className="bg-white/80 dark:bg-gray-800/80 rounded-3xl shadow-lg p-8 md:p-10 border border-gray-100 dark:border-gray-700 backdrop-blur-sm"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 text-center">
              Tech <span className="text-indigo-500">Stack</span>
            </h2>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-8 text-center">
              As a full-stack developer, I work with a variety of technologies to build
              robust and scalable applications.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {techStack.map((tech) => (
                <div
                  key={tech.name}
                  className={`py-3 px-4 rounded-xl font-medium text-center border transition 
                  hover:scale-105 hover:shadow-lg ${tech.color}`}
                >
                  {tech.name}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default About;
