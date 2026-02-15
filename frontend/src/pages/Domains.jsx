import { motion } from 'framer-motion'

const domains = [
  {
    title: 'iOS Development',
    description: 'Swift, SwiftUI, Apple ecosystem development.',
  },
  {
    title: 'Android Development',
    description: 'Kotlin, Java, modern Android architecture.',
  },
  {
    title: 'Web Development',
    description: 'Frontend, Backend, MERN stack & modern web.',
  },
  {
    title: 'Machine Learning',
    description: 'AI, data science, models & intelligent systems.',
  },
]

const Domains = () => {
  return (
    <section className="min-h-screen pt-32 pb-20 bg-white">
      <div className="container mx-auto px-4 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold mb-6 text-gradient"
        >
          Our Domains
        </motion.h1>

        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          Explore the technical domains we actively work in.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {domains.map((domain, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.03 }}
              className="p-8 bg-creme-light rounded-xl shadow-lg text-left"
            >
              <h3 className="text-2xl font-semibold mb-3">{domain.title}</h3>
              <p className="text-gray-700">{domain.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Domains
