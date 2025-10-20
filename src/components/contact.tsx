import { motion } from "framer-motion";
import { Mail, User, MessageSquare } from "lucide-react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col items-center justify-center gap-10 px-6 md:px-20 py-20 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white text-center">
        Get In <span className="text-indigo-500">Touch</span>
      </h2>

      <motion.div
        className="w-full max-w-2xl bg-white/80 dark:bg-gray-800/80 rounded-3xl shadow-lg p-8 md:p-10 border border-gray-100 dark:border-gray-700 backdrop-blur-sm"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <form className="space-y-6">
          {/* Name Field */}
          <div>
            <label className="block text-gray-800 dark:text-gray-200 font-medium mb-2">
              Name
            </label>
            <div className="flex items-center bg-gray-100 dark:bg-gray-700/50 rounded-xl p-3">
              <User className="text-indigo-500 mr-3" size={20} />
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full bg-transparent outline-none text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                required
              />
            </div>
          </div>

          {/* Email Field */}
          <div>
            <label className="block text-gray-800 dark:text-gray-200 font-medium mb-2">
              Email
            </label>
            <div className="flex items-center bg-gray-100 dark:bg-gray-700/50 rounded-xl p-3">
              <Mail className="text-indigo-500 mr-3" size={20} />
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full bg-transparent outline-none text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                required
              />
            </div>
          </div>

          {/* Message Field */}
          <div>
            <label className="block text-gray-800 dark:text-gray-200 font-medium mb-2">
              Message
            </label>
            <div className="flex items-start bg-gray-100 dark:bg-gray-700/50 rounded-xl p-3">
              <MessageSquare className="text-indigo-500 mr-3 mt-1" size={20} />
              <textarea
                placeholder="Write your message..."
                rows={5}
                className="w-full bg-transparent outline-none resize-none text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                required
              ></textarea>
            </div>
          </div>

          {/* Submit Button */}
          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full py-3 rounded-xl bg-indigo-500 hover:bg-indigo-600 text-white font-semibold shadow-md transition"
          >
            Send Message
          </motion.button>
        </form>
      </motion.div>

      {/* Footer Note */}
      <p className="text-gray-600 dark:text-gray-400 text-sm text-center">
        You can also reach me directly via{" "}
        <a
          href="mailto:briangaturu@gmail.com"
          className="text-indigo-500 hover:underline"
        >
          briangaturu@gmail.com
        </a>
      </p>
    </section>
  );
};

export default Contact;
