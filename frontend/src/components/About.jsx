import { motion } from 'framer-motion'
import { useEffect, useState, useRef } from 'react'
import teamImage from '../assets/image.png'
import appleBg from '../assets/apple-bg.png'

const About = () => {
  const quoteText = '"Stay hungry, stay foolish."'
  const [displayedQuote, setDisplayedQuote] = useState('')
  const [quoteIndex, setQuoteIndex] = useState(0)
  const [hasStarted, setHasStarted] = useState(false)
  const quoteRef = useRef(null)

  // Start typing only when the quote section scrolls into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setHasStarted(true) },
      { threshold: 0.5 }
    )
    if (quoteRef.current) observer.observe(quoteRef.current)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!hasStarted) return
    if (quoteIndex < quoteText.length) {
      const timeout = setTimeout(() => {
        setDisplayedQuote((prev) => prev + quoteText[quoteIndex])
        setQuoteIndex(quoteIndex + 1)
      }, 60)
      return () => clearTimeout(timeout)
    }
  }, [hasStarted, quoteIndex])
  const features = [
    {
      title: 'Innovation',
      description: 'We push boundaries and explore cutting-edge technologies to stay ahead of the curve.',
    },
    {
      title: 'Community',
      description: 'A vibrant community of passionate developers, designers, and tech enthusiasts.',
    },
    {
      title: 'Learning',
      description: 'Continuous learning through workshops, hackathons, and collaborative projects.',
    },
    {
      title: 'Projects',
      description: 'Build real-world projects that make a difference and enhance your portfolio.',
    },
  ]

  return (
    <section
      id="about"
      className="relative py-20"
      style={{
        backgroundImage: `url(${appleBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'local',
      }}
    >
      {/* Overlay so content stays readable */}
      <div className="absolute inset-0 bg-white/70 backdrop-blur-sm" />

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
            <span className="text-gradient">About Us</span>
          </h2>
          <p className="text-sm sm:text-base text-gray-700 max-w-3xl mx-auto leading-relaxed">
            We are a dynamic technical club dedicated to fostering innovation, 
            collaboration, and excellence in technology. We express a primary agenda to educate people about the Apple ecosystem and train them with the Swift language. Besides the Swift platform, we also feel pride in recognizing our highly skilled Android, ML, and Web-Dev coders. We strive to offer the best-in-class mentorship for those who have a zeal to succeed and a passion to develop.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gradient-to-br from-creme-light to-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-creme-muted"
            >
              <h3 className="text-xl font-semibold mb-2 text-gray-800">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Team Image */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-r from-creme to-creme-warm rounded-2xl p-8 md:p-12 shadow-2xl mb-20"
        >
          <div className="flex justify-center">
            <img
              src={teamImage}
              alt="Team Picture"
              className="rounded-xl shadow-lg max-w-full h-auto"
            />
          </div>
        </motion.div>

        {/* Quote Section */}
        <motion.div
          ref={quoteRef}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="text-center max-w-4xl mx-auto mb-18"
        >
          <blockquote className="text-2xl md:text-3xl font-light italic text-gray-800 leading-relaxed flex justify-center items-center">
            <span>{displayedQuote}</span>
            {quoteIndex < quoteText.length && (
              <span
                className="inline-block ml-1"
                style={{
                  width: '1px',
                  height: '1em',
                  backgroundColor: 'currentColor',
                  animation: 'blink 1s infinite',
                }}
              />
            )}
          </blockquote>
          <p className="mt-4 text-gray-500 text-lg">
            — Steve Jobs
          </p>
        </motion.div>

        <style>{`
          @keyframes blink {
            0%, 50%, 100% { opacity: 1; }
            25%, 75% { opacity: 0; }
          }
        `}</style>

      </div>
    </section>
  )
}

export default About
