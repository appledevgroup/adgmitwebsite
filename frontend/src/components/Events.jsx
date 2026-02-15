import { motion } from 'framer-motion'

const Events = () => {
  const events = [
    {
      id: 1,
      title: 'Appathon 2026',
      date: 'March 25-26, 2026',
      description: '48-hour coding competition with exciting prizes and mentorship opportunities.',
      category: 'Competition',
      status: 'Upcoming',
    },
    {
      id: 2,
      title: 'React Workshop',
      date: 'February 28, 2026',
      description: 'Learn React from scratch with hands-on projects and expert guidance.',
      category: 'Workshop',
      status: 'Upcoming',
    },
    {
      id: 3,
      title: 'AI & ML Seminar',
      date: 'October 20, 2025',
      description: 'Deep dive into Artificial Intelligence and Machine Learning applications.',
      category: 'Seminar',
      status: 'Past',
    },
    {
      id: 4,
      title: 'Web Development Bootcamp',
      date: 'January 10-12, 2026',
      description: 'Intensive 3-day bootcamp covering full-stack web development.',
      category: 'Bootcamp',
      status: 'Past',
    },
  ]

  const getStatusColor = (status) => {
    return status === 'Upcoming'
      ? 'bg-green-100 text-green-800'
      : 'bg-gray-100 text-gray-800'
  }

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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {events.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100"
            >
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-semibold ${getStatusColor(event.status)}`}>
                    {event.status}
                  </span>
                  <span className="text-sm text-gray-800 font-medium">{event.category}</span>
                </div>
                
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
          ))}
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

