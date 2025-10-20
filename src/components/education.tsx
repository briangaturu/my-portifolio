import { motion } from "framer-motion";

const Education = () => {
  const education = [
    {
      title: "Bachelor of Science in Computer Science",
      institution: "Laikipia University",
      details:
        "Currently on the verge of completing my degree with a strong focus on software development ",
    },
    {
      title: "Software Development Bootcamp",
      institution: "Teach2give",
      
      details:
        "Intensive program covering full-stack web development, including  JavaScript,Typescript, React, Node.js,express and databases. Completed real-world projects and collaborated in teams.",
    },
  ];

  return (
    <section
      id="education"
      className="min-h-screen flex flex-col items-center justify-center gap-8 px-6 md:px-16 py-12 bg-gradient-to-b from-white to-gray-50 dark:from-gray-800 dark:to-gray-900"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6 text-center">
        Education <span className="text-indigo-500"></span>
      </h2>

      <div className="flex flex-col md:flex-row items-stretch justify-center gap-6 w-full max-w-5xl">
        {education.map((edu, index) => (
          <motion.div
            key={edu.title}
            className="flex-1 bg-white/80 dark:bg-gray-800/80 rounded-2xl shadow-md p-6 md:p-8 border border-gray-100 dark:border-gray-700 backdrop-blur-sm"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl md:text-2xl font-semibold text-gray-900 dark:text-white mb-2">
              {edu.title}
            </h3>
            <p className="text-indigo-500 font-medium">{edu.institution}</p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              {edu.details}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Education;
