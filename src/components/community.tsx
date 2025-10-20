import { motion } from "framer-motion";
import { MessageSquare, Github } from "lucide-react";

const Community = () => {
  const communities = [
    {
      title: "Open Source Contributor",
      description:
        "I actively contribute to open-source projects, focusing on improving developer experience, UI components, and documentation. Collaboration and learning from other developers is something I truly enjoy.",
      icon: <Github className="text-indigo-500" size={24} />,
    },
    {
      title: " Communities",
      description:
        "Became part of the Teach2give developer community during my internship, engaging in knowledge sharing sessions, code reviews, and collaborative problem-solving to enhance our collective skills.",
      icon: <MessageSquare className="text-indigo-500" size={24} />,
    },
    
  ];

  return (
    <section
      id="community"
      className="min-h-screen flex flex-col items-center justify-center gap-10 px-6 md:px-20 py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white text-center">
        Developer <span className="text-indigo-500">Community</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 w-full max-w-5xl">
        {communities.map((item, index) => (
          <motion.div
            key={index}
            className="bg-white/80 dark:bg-gray-800/80 rounded-2xl shadow-md p-6 border border-gray-100 dark:border-gray-700 backdrop-blur-sm hover:shadow-xl transition-transform transform hover:-translate-y-2"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-3">
              {item.icon}
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                {item.title}
              </h3>
            </div>
            <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
              {item.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Community;
