import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const Hero = () => {
  const fullText = "Apple Developers' Group"
  const [displayedText, setDisplayedText] = useState('')
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + fullText[index])
        setIndex(index + 1)
      }, 80)
      return () => clearTimeout(timeout)
    }
  }, [index])

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden
                 bg-creme-light pt-24"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Logo */}
            <div className="inline-block mb-6">
              <img
                src="/logo.svg"
                alt="ADG Logo"
                className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl shadow-xl mx-auto
                           transform hover:scale-105 transition-transform duration-300
                           object-contain"
              />
            </div>

            {/* Typing Heading */}
            <h1
              className="text-4xl sm:text-5xl md:text-6xl
                         font-medium tracking-tight mb-6
                         text-gray-800 leading-relaxed
                         flex justify-center "
            >
              <span className="flex items-center">
                {displayedText}

                {/* Thin blinking cursor */}
                <span
                  className="inline-block ml-1"
                  style={{
                    width: '1px',
                    height: '1em',
                    backgroundColor: 'currentColor',
                    animation: 'blink 1s infinite',
                  }}
                />
              </span>
            </h1>

            <p className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-6 leading-relaxed">
              Empowering Innovation, Fostering Excellence, Building the Future
            </p>

            <p className="text-sm sm:text-base text-gray-700 mb-12 max-w-2xl mx-auto leading-relaxed">
              Join us in exploring cutting-edge technologies, collaborating on exciting projects,
              and growing together as a community of passionate developers.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() =>
                  document.querySelector('#events')?.scrollIntoView({ behavior: 'smooth' })
                }
                className="px-8 py-4 bg-white
                           text-gray-900 font-semibold rounded-lg shadow-md
                           border border-gray-300 hover:shadow-lg transition-all"
              >
                Explore Events
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() =>
                  document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
                }
                className="px-8 py-4 bg-white
                           text-gray-900 font-semibold rounded-lg shadow-md
                           border border-gray-300 hover:shadow-lg transition-all"
              >
                Get in Touch
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator (safe for mobile) */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-20 sm:bottom-8 left-1/2 transform -translate-x-1/2
                   hidden sm:block"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="w-6 h-10 border-2 border-gray-700
                     rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="w-1 h-3 bg-gray-700 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>

      {/* Cursor Blink Animation */}
      <style>{`
        @keyframes blink {
          0%, 50%, 100% { opacity: 1; }
          25%, 75% { opacity: 0; }
        }
      `}</style>
    </section>
  )
}

export default Hero
