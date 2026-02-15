import { useState } from 'react'
import { motion } from 'framer-motion'
import axios from 'axios'
import { Instagram, Linkedin, Github, Twitter } from 'lucide-react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      await axios.post('/api/feedback', formData)
      setSubmitStatus({
        type: 'success',
        message: 'Thank you! Your message has been sent successfully.',
      })
      setFormData({ name: '', email: '', subject: '', message: '' })
    } catch {
      setSubmitStatus({
        type: 'error',
        message: 'Something went wrong. Please try again later.',
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-20 bg-white">
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
            <span className="text-gradient">Get in Touch</span>
          </h2>
          <p className="text-xl text-black max-w-3xl mx-auto">
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
            className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-xl shadow-lg border border-gray-100"
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
                  className="input"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email *"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="input"
                />
              </div>

              <input
                type="text"
                name="subject"
                placeholder="Subject *"
                required
                value={formData.subject}
                onChange={handleChange}
                className="input"
              />

              <textarea
                name="message"
                rows="6"
                placeholder="Your Message *"
                required
                value={formData.message}
                onChange={handleChange}
                className="input resize-none"
              />

              {submitStatus && (
                <div
                  className={`p-4 rounded-lg ${
                    submitStatus.type === 'success'
                      ? 'bg-green-50 text-green-800'
                      : 'bg-red-50 text-red-800'
                  }`}
                >
                  {submitStatus.message}
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-8 py-4 bg-white text-black font-semibold rounded-lg shadow-lg hover:shadow-xl border-2 border-black transition-all duration-300 disabled:opacity-50"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>

              {/* FOLLOW US */}
              <div className="pt-8">
                <p className="text-lg font-semibold text-black mb-4 text-center">
                  Follow us
                </p>

                <div className="flex justify-center gap-8">
                  <a
                    href="https://www.instagram.com/adg.mit/?hl=en"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    className="text-black hover:text-gray-600 transition-colors duration-200"
                  >
                    <Instagram size={28} strokeWidth={1.5} />
                  </a>

                  <a
                    href="https://www.linkedin.com/company/adg-manipal/posts/?feedView=all"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="text-black hover:text-gray-600 transition-colors duration-200"
                  >
                    <Linkedin size={28} strokeWidth={1.5} />
                  </a>

                  <a
                    href="https://github.com/adgclub"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                    className="text-black hover:text-gray-600 transition-colors duration-200"
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
      <style>{`
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
      `}</style>
    </section>
  )
}

export default Contact
