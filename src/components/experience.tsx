import { motion } from "framer-motion";

const Experience = () => {
  const experiences = [
    {
      role: "Full-Stack Developer (Intern)",
      company: "Teach2give",
      period: "May 2024 – Aug 2024",
      description:
        "Underwent an intensive internship program focused on full-stack web development. Gained hands-on experience with JavaScript, TypeScript, React, Node.js, Express, and database management. Contributed to real-world projects and collaborated with a team of developers to deliver functional web applications.",
    },
    {
      role: "UI/UX tracklead",
      company: "CISLU",
      period: "2022 – Present",
      description:
        "Currently working as one of the UI/UX trainers at Computing Innovation Society of Likipia University (CISLU) where I train students on the basics of UI/UX design using Figma and Adobe XD.",
    },
    
  ];

  return (
    <section
      id="experience"
      className="min-h-screen flex flex-col items-center justify-center gap-8 px-6 md:px-16 py-16 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6 text-center">
         <span className="text-indigo-500">Experience</span>
      </h2>

      <div className="flex flex-col md:flex-row items-stretch justify-center gap-6 w-full max-w-5xl">
        {experiences.map((exp, index) => (
          <motion.div
            key={exp.role}
            className="flex-1 bg-white/80 dark:bg-gray-800/80 rounded-2xl shadow-md p-6 md:p-8 border border-gray-100 dark:border-gray-700 backdrop-blur-sm"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl md:text-2xl font-semibold text-gray-900 dark:text-white mb-2">
              {exp.role}
            </h3>
            <p className="text-indigo-500 font-medium">{exp.company}</p>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">{exp.period}</p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{exp.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
