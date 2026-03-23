import { motion } from 'framer-motion'
import { useState } from 'react'
import gbm1 from '../assets/gbm1.png'
import gbm2 from '../assets/gbm2.png'
import gbm3 from '../assets/gbm3.png'
import ict1 from '../assets/ict1.png'
import ict2 from '../assets/ict2.png'
import tech1 from '../assets/tech1.png'
import tech2 from '../assets/tech2.png'
import tech3 from '../assets/tech3.png'
import ws1 from '../assets/ws1.png'
import ws2 from '../assets/ws2.png'
import ws3 from '../assets/ws3.png'

const Events = () => {
  const events = [
    {
      id: 1,
      title: 'General Body Meeting',
      date: '2025',
      description: 'First general body meeting of the Board with Mancomm of ADGs tenure 2025-2026.',
      images: [
        gbm2,gbm1,gbm3
      ],
    },
    {
      id: 2,
      title: 'ADG Stall at ICT Gala',
      date: 'September, 2025',
      description: 'Showcasing our projects and engaging with the tech community at the ICT Gala.',
      images: [
        ict1,ict2
      ],
    },
    {
      id: 3,
      title: 'Events at TechTatva 2025',
      date: 'October, 2025',
      description: 'workshops and competitions at TechTatva, the annual tech fest of MIT, Manipal.',
      category: 'Fest',
      images: [
        tech1,tech2,tech3
      ],
    },
    {
      id: 4,
      title: 'Frontend UI/UX & IOS Workshop',
      date: '2026',
      description: 'workshops covering frontend development, UI/UX design principles, and iOS app development.',
      category: 'Workshop',
      images: [
        ws1,ws2,ws3
      ],
    },
  ]

  const getStatusColor = (status) => {
    return status === 'Upcoming'
      ? 'bg-green-100 text-green-800'
      : 'bg-gray-100 text-gray-800'
  }

  // Track current image index per card
  const [currentIndex, setCurrentIndex] = useState(
    Object.fromEntries(events.map((e) => [e.id, 0]))
  )

  const prev = (id, total) =>
    setCurrentIndex((s) => ({ ...s, [id]: (s[id] - 1 + total) % total }))

  const next = (id, total) =>
    setCurrentIndex((s) => ({ ...s, [id]: (s[id] + 1) % total }))

  return (
    <section id="events" className="py-20 bg-gradient-to-br from-creme-light to-creme-lightest">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Events & Activities</span>
          </h2>
          <p className="text-xl text-gray-800 max-w-3xl mx-auto">
            Join us for exciting events, workshops, and competitions throughout the year.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {events.map((event, index) => {
            const idx = currentIndex[event.id]
            const total = event.images.length
            return (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100"
              >
                {/* Image Carousel */}
                <div className="relative w-full h-52 bg-gray-100 overflow-hidden">
                  <img
                    src={event.images[idx]}
                    alt={`${event.title} photo ${idx + 1}`}
                    className="w-full h-full object-cover transition-opacity duration-300"
                  />

                  {/* Prev button */}
                  <button
                    onClick={() => prev(event.id, total)}
                    className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full w-8 h-8 flex items-center justify-center shadow transition"
                  >
                    <svg className="w-4 h-4 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>

                  {/* Next button */}
                  <button
                    onClick={() => next(event.id, total)}
                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full w-8 h-8 flex items-center justify-center shadow transition"
                  >
                    <svg className="w-4 h-4 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>

                  {/* Dot indicators */}
                  <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5">
                    {event.images.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setCurrentIndex((s) => ({ ...s, [event.id]: i }))}
                        className={`w-1.5 h-1.5 rounded-full transition-all ${i === idx ? 'bg-white scale-125' : 'bg-white/50'}`}
                      />
                    ))}
                  </div>

                  {/* Status badge overlaid on image */}
                  <span className={`absolute top-3 left-3 px-3 py-1 rounded-full text-sm font-semibold ${getStatusColor(event.status)}`}>
                    {event.status}
                  </span>
                  <span className="absolute top-3 right-3 text-sm text-gray-800 font-medium bg-white/80 px-2 py-0.5 rounded-full">
                    {event.category}
                  </span>
                </div>

                {/* Card Body */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3 text-gray-800">{event.title}</h3>

                  <div className="flex items-center text-gray-500 mb-4">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span>{event.date}</span>
                  </div>

                  <p className="text-gray-600 leading-relaxed">{event.description}</p>

                  {event.status === 'Upcoming' && (
                    <button className="mt-6 px-6 py-2 bg-creme text-gray-800 rounded-lg hover:bg-creme-dark transition-colors duration-200 font-medium">
                      Register Now
                    </button>
                  )}
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-16 text-center"
        >
          <p className="text-lg text-gray-800 mb-6">
            Want to stay updated with our latest events?
          </p>
          <button
            onClick={() => {
              const element = document.querySelector('#contact')
              element?.scrollIntoView({ behavior: 'smooth' })
            }}
            className="px-8 py-4 bg-white text-gray-800 font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Join Our Community
          </button>
        </motion.div>
      </div>
    </section>
  )
}

export default Events
