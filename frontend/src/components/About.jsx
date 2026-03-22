import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import teamImage from '../assets/image.png'

const STEVE_JOBS_QUOTE = '\u201cStay hungry, stay foolish.\u201d'

const About = () => {
  const quoteRef = useRef(null)
  const [quoteVisible, setQuoteVisible] = useState(false)
  const [quoteIndex, setQuoteIndex] = useState(0)

  useEffect(() => {
    const el = quoteRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setQuoteVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.35, rootMargin: '0px 0px -8% 0px' }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!quoteVisible) return
    if (quoteIndex >= STEVE_JOBS_QUOTE.length) return
    const timeout = setTimeout(() => {
      setQuoteIndex((i) => i + 1)
    }, 48)
    return () => clearTimeout(timeout)
  }, [quoteVisible, quoteIndex])

  const typedQuote = STEVE_JOBS_QUOTE.slice(0, quoteIndex)
  const quoteTyping = quoteVisible && quoteIndex < STEVE_JOBS_QUOTE.length

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
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

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

        {/* Quote Section — typewriter starts when scrolled into view */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="text-center max-w-4xl mx-auto mb-16"
        >
          <blockquote
            ref={quoteRef}
            className="text-2xl md:text-3xl font-light italic text-gray-800 leading-relaxed
                       min-h-[3.5rem] md:min-h-[4.5rem] flex flex-col items-center justify-center"
          >
            <span className="inline-flex items-center justify-center flex-wrap gap-0">
              {typedQuote}
              {quoteTyping && (
                <span
                  className="inline-block ml-0.5 align-baseline not-italic"
                  style={{
                    width: '2px',
                    height: '0.85em',
                    backgroundColor: 'currentColor',
                    animation: 'about-quote-blink 1s infinite',
                  }}
                  aria-hidden
                />
              )}
            </span>
          </blockquote>
          <p className="mt-4 text-gray-500 text-lg not-italic">
            — Steve Jobs
          </p>
        </motion.div>

        <style>{`
          @keyframes about-quote-blink {
            0%, 50%, 100% { opacity: 1; }
            25%, 75% { opacity: 0; }
          }
        `}</style>
      </div>
    </section>
  )
}

export default About
