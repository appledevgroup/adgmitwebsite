import { useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import { Instagram, Linkedin, Github } from "lucide-react";
import appleBg from "../assets/apple-bg.png";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      await axios.post("/api/feedback", formData);
      setSubmitStatus({
        type: "success",
        message: "Thank you! Your message has been sent successfully.",
      });
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch {
      setSubmitStatus({
        type: "error",
        message: "Something went wrong. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative py-20
                bg-[url('../assets/apple-bg.png')]
                bg-cover
                bg-center
                dark:bg-none
                dark:bg-black"
    >
      <div
        className="absolute inset-0
                  bg-white/55
                  dark:bg-black/65
                  transition-colors duration-300"
      />
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Get in Touch</span>
          </h2>
          <p className="text-xl text-gray-800 dark:text-gray-300 max-w-3xl mx-auto">
            Have questions or feedback? We'd love to hear from you!
          </p>
        </motion.div>

        {/* Contact Form */}
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="
              bg-white/70
              dark:bg-white/5
              backdrop-blur-xl
              p-8
              rounded-xl
              border
              border-white/20
              dark:border-white/10
              shadow-xl"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name *"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="
                    w-full
                    px-4
                    py-3
                    rounded-lg
                    border
                    border-gray-300
                    dark:border-gray-700
                    bg-white
                    dark:bg-gray-900
                    text-gray-900
                    dark:text-white
                    placeholder:text-gray-400
                    dark:placeholder:text-gray-500
                    focus:outline-none
                    focus:ring-2
                    focus:ring-black
                    dark:focus:ring-white
                    transition-all"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email *"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="
                    w-full
                    px-4
                    py-3
                    rounded-lg
                    border
                    border-gray-300
                    dark:border-gray-700
                    bg-white
                    dark:bg-gray-900
                    text-gray-900
                    dark:text-white
                    placeholder:text-gray-400
                    dark:placeholder:text-gray-500
                    focus:outline-none
                    focus:ring-2
                    focus:ring-black
                    dark:focus:ring-white
                    transition-all"
                />
              </div>

              <input
                type="text"
                name="subject"
                placeholder="Subject *"
                required
                value={formData.subject}
                onChange={handleChange}
                className="
                  w-full
                  px-4
                  py-3
                  rounded-lg
                  border
                  border-gray-300
                  dark:border-gray-700
                  bg-white
                  dark:bg-gray-900
                  text-gray-900
                  dark:text-white
                  placeholder:text-gray-400
                  dark:placeholder:text-gray-500
                  focus:outline-none
                  focus:ring-2
                  focus:ring-black
                  dark:focus:ring-white
                  transition-all"
              />

              <textarea
                name="message"
                rows="6"
                placeholder="Your Message *"
                required
                value={formData.message}
                onChange={handleChange}
                className="
                  w-full
                  px-4
                  py-3
                  rounded-lg
                  border
                  border-gray-300
                  dark:border-gray-700
                  bg-white
                  dark:bg-gray-900
                  text-gray-900
                  dark:text-white
                  placeholder:text-gray-400
                  dark:placeholder:text-gray-500
                  resize-none
                  focus:outline-none
                  focus:ring-2
                  focus:ring-black
                  dark:focus:ring-white
                  transition-all"
              />

              {submitStatus && (
                <div
                  className={`p-4 rounded-lg ${
                    submitStatus.type === "success"
                      ? "bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300"
                      : "bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-300"
                  }`}
                >
                  {submitStatus.message}
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting} className="
                  w-full
                  px-8
                  py-4
                  bg-white
                  dark:bg-white
                  text-black
                  font-semibold
                  rounded-lg
                  border-2
                  border-black
                  shadow-lg
                  hover:shadow-xl
                  transition-all
                  duration-300
                  disabled:opacity-50"  
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>

              {/* FOLLOW US */}
              <div className="pt-8">
                <p className="text-lg font-semibold text-gray-900 dark:text-white mb-4 text-center">
                  Follow us
                </p>

                <div className="flex justify-center gap-8">
                  <a
                    href="https://www.instagram.com/adg.mit/?hl=en"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    className="text-gray-900
                    dark:text-gray-200
                    hover:text-gray-600
                    dark:hover:text-white transition-colors duration-200"
                  >
                    <Instagram size={28} strokeWidth={1.5} />
                  </a>

                  <a
                    href="https://www.linkedin.com/company/adg-manipal/posts/?feedView=all"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="text-gray-900
                    dark:text-gray-200
                    hover:text-gray-600
                    dark:hover:text-white transition-colors duration-200"
                  >
                    <Linkedin size={28} strokeWidth={1.5} />
                  </a>

                  <a
                    href="https://github.com/appledevgroup"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                    className="text-gray-900
                    dark:text-gray-200
                    hover:text-gray-600
                    dark:hover:text-white transition-colors duration-200"
                  >
                    <Github size={28} strokeWidth={1.5} />
                  </a>
                </div>
              </div>
            </form>
          </motion.div>
        </div>
      </div>

      {/* Shared input styles */}
      {/* <style>{`
        .input {
          width: 100%;
          padding: 0.75rem 1rem;
          border: 1px solid #e5e5e5;
          border-radius: 0.5rem;
          outline: none;
          transition: all 0.2s ease;
        }
        .input:focus {
          border-color: black;
          box-shadow: 0 0 0 2px rgba(0,0,0,0.08);
        }
      `}</style> */}
    </section>
  );
};

export default Contact;
