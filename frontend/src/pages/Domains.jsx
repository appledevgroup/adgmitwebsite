import { motion } from 'framer-motion'
import { useState } from 'react'
import { FaApple, FaAndroid, FaGlobe, FaBrain, FaAppStoreIos } from 'react-icons/fa'

const domains = [
  {
    title: 'iOS Development',
    icon: FaAppStoreIos,
    hoverDescription: 'Learn more about our iOS Development domain.\n\nClick to know more!',
    description: 'Join our iOS Development domain to master Swift and SwiftUI through exciting projects and workshops. We build innovative apps for iPhones and iPads, exploring ARKit for augmented reality and Core ML for AI features. Members collaborate on real-world applications, from concept to App Store, learning best practices in mobile development and Apple ecosystem integration.',
  },
  {
    title: 'Android Development',
    icon: FaAndroid,
    hoverDescription: 'Learn more about our Android Development domain.\n\nClick to know more!',
    description: 'Dive into Android Development with our domain covering Kotlin, Java, and modern architecture. We build engaging mobile apps using Material Design and Firebase integration. Members collaborate on location-based apps, camera features, and offline capabilities while learning security, performance optimization, and cross-device compatibility.',
  },
  {
    title: 'Web Development',
    icon: FaGlobe,
    hoverDescription: 'Learn more about our Web Development domain.\n\nClick to know more!',
    description: 'Our Web Development domain empowers members to build dynamic websites and applications using React, Vue, and Angular. We explore the MERN stack with Node.js and MongoDB for full-stack development. Through workshops and team projects, we focus on responsive design, API integration, security practices, and agile methodologies to create modern, accessible web solutions.',
  },
  {
    title: 'Machine Learning',
    icon: FaBrain,
    hoverDescription: 'Learn more about our Machine Learning domain.\n\nClick to know more!',
    description: 'Explore the world of AI and Machine Learning in our domain, where we use Python frameworks like TensorFlow and PyTorch. Members learn deep learning, NLP, and computer vision through hands-on projects and research. We build recommendation systems and predictive models, emphasizing ethical AI practices and deployment on cloud platforms like AWS and GCP.',
  },
]

const Domains = () => {
  const [expanded, setExpanded] = useState(null)
  const [clicked, setClicked] = useState(null)

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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto items-start">
          {domains.map((domain, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.03 }}
              onMouseEnter={() => setExpanded(i)}
              onMouseLeave={() => setExpanded(null)}
              onClick={() => setClicked(clicked === i ? null : i)}
              className={`p-8 rounded-xl shadow-lg text-left self-start min-h-[9rem] transition-colors duration-300 cursor-pointer ${expanded === i ? 'bg-[#1d1d1d] text-white border border-gray-600' : 'bg-[#1d1d1d] text-white'}`}>

              <div className="flex justify-center mb-3">
                <domain.icon className="text-5xl" />
              </div>
              <h3 className="text-2xl font-semibold mb-3 text-center">{domain.title}</h3>
              <motion.div
                key={`desc-${i}`}
                initial={false}
                animate={{ height: expanded === i ? 'auto' : 0, opacity: expanded === i ? 1 : 0 }}
                transition={{ duration: 0.3 }}
                style={{ overflow: 'hidden' }}
              >
                <p className="text-white text-center">{clicked === i ? domain.description : domain.hoverDescription}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Domains
