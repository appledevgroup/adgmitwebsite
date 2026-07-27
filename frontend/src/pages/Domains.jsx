import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import {
  FaAndroid,
  FaGlobe,
  FaBrain,
  FaCloud,
} from "react-icons/fa";
import appleBg from "../assets/apple-bg.png";

const domains = [
  {
    title: "Mobile Development",
    icon: FaAndroid,
    hoverDescription:
      "Learn more about our Mobile Development domain.\n\nClick to know more!",
    description:
      "Build modern mobile applications for both Android and iOS using Kotlin, Java, Swift, and SwiftUI. Members explore native app development, Firebase integration, REST APIs, offline storage, notifications, and responsive UI design. Through hands-on projects and workshops, you'll learn how to design, develop, test, and deploy production-ready mobile applications while following industry best practices.",
  },
  {
    title: "Web Development",
    icon: FaGlobe,
    hoverDescription:
      "Learn more about our Web Development domain.\n\nClick to know more!",
    description:
      "Our Web Development domain empowers members to build modern, full-stack web applications using technologies like React, Next.js, Node.js, Express, and databases such as MongoDB and PostgreSQL. Members gain experience in responsive design, REST APIs, authentication, deployment, and scalable application architecture while collaborating on real-world projects.",
  },
  {
    title: "Machine Learning",
    icon: FaBrain,
    hoverDescription:
      "Learn more about our Machine Learning domain.\n\nClick to know more!",
    description:
      "Explore Artificial Intelligence and Machine Learning through hands-on projects using Python, TensorFlow, PyTorch, and Scikit-learn. Members learn concepts such as deep learning, computer vision, natural language processing, and data analytics while building intelligent systems and deploying ML models using modern cloud platforms.",
  },
  {
    title: "Cloud Computing",
    icon: FaCloud,
    hoverDescription:
      "Learn more about our Cloud Computing domain.\n\nClick to know more!",
    description:
      "Learn how modern applications are deployed and managed on the cloud using platforms like AWS. Members gain practical experience with EC2, S3, Lambda, IAM, CloudFront, API Gateway, Docker, Kubernetes, CI/CD pipelines, Infrastructure as Code, monitoring, and scalable system design. Through real-world projects, you'll understand how to build secure, reliable, and highly available cloud-native applications.",
  },
];

const Domains = () => {
  const [expanded, setExpanded] = useState(null);
  const [clicked, setClicked] = useState(null);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const updateTheme = () => {
      setIsDark(document.documentElement.classList.contains("dark"));
    };

    updateTheme();

    const observer = new MutationObserver(updateTheme);

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, []);

  return (
    <section
      className="relative min-h-screen pt-32 pb-20 bg-white dark:bg-black transition-colors duration-300"
      style={{
        backgroundImage: isDark ? "none" : `url(${appleBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "local",
      }}
    > 
      <div className="absolute inset-0 bg-white/60 dark:hidden" />
      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white"
        >
          Our Domains
        </motion.h1>

        <p className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto mb-12">
          Explore the technical domains we actively work in.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto items-start">
          {domains.map((domain, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.02, y: -5 }}
              onMouseEnter={() => setExpanded(i)}
              onMouseLeave={() => setExpanded(null)}
              onClick={() => setClicked(clicked === i ? null : i)}
              className={`p-8 rounded-xl shadow-xl text-left self-start min-h-[9rem] transition-all duration-300 cursor-pointer
                ${
                  expanded === i
                    ? "bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700"
                    : "bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800"
                }`}
            >
              <div className="flex justify-center mb-3">
                <domain.icon className="text-5xl text-gray-700 dark:text-gray-300" />
              </div>
              <h3 className="text-2xl font-semibold mb-3 text-center text-gray-700 dark:text-gray-300">
                {domain.title}
              </h3>
              <motion.div
                key={`desc-${i}`}
                initial={false}
                animate={{
                  height: expanded === i ? "auto" : 0,
                  opacity: expanded === i ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
                style={{ overflow: "hidden" }}
              >
                <p className="text-gray-900 dark:text-white text-center">
                  {clicked === i ? domain.description : domain.hoverDescription}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Domains;
