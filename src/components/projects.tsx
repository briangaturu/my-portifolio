import { motion } from "framer-motion";

const Projects = () => {
  const projects = [
    {
      title: "Vehicle Rental System",
      description:
        "A full-stack web application for renting vehicles, featuring real-time booking, admin dashboard, and Stripe payments. Built with React, Express, and PostgreSQL.",
      tech: ["React", "TypeScript", "Express", "PostgreSQL", "Stripe"],
      link: "#",
    },
    {
      title: "Restaurant Ordering App",
      description:
        "An online restaurant system where users can browse meals, add items to cart, schedule orders, and complete payments. Admins can manage menu and orders.",
      tech: ["React", "Node.js", "Drizzle ORM", "Cloudinary"],
      link: "#",
    },
    {
      title: "Portfolio Website",
      description:
        "A personal portfolio website built with React, TailwindCSS, and Framer Motion. Designed to showcase projects, experience, and contact information elegantly.",
      tech: ["React", "TailwindCSS", "Framer Motion"],
      link: "#",
    },
  ];

  return (
    <section
      id="projects"
      className="min-h-screen flex flex-col items-center justify-center gap-10 px-6 md:px-20 py-20 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white text-center">
        Featured <span className="text-indigo-500">Projects</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            className="bg-white/80 dark:bg-gray-800/80 rounded-2xl shadow-md p-6 border border-gray-100 dark:border-gray-700 backdrop-blur-sm hover:shadow-xl transition-transform transform hover:-translate-y-2"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              {project.title}
            </h3>
            <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed mb-4">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-gray-100 dark:bg-gray-700/50 text-gray-800 dark:text-gray-200 rounded-full text-xs font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>

            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-500 font-medium hover:text-indigo-600 dark:hover:text-indigo-400 transition"
            >
              View Project →
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
