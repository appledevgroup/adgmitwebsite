import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Link, useLocation } from 'react-router-dom'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const location = useLocation()

  // Scroll to section (works from any route)
  const goToSection = (id) => {
    setIsMobileMenuOpen(false)

    if (location.pathname !== '/') {
      window.location.href = `/#${id}`
    } else {
      document.querySelector(`#${id}`)?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg'
          : 'bg-white/80 backdrop-blur-sm'
      }`}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img
              src="/logo.svg"
              alt="ADG Logo"
              className="w-12 h-12 rounded-lg shadow-lg object-contain"
            />
            <div>
              <h1 className="text-xl font-bold text-gradient">ADG</h1>
              <p className="text-xs text-gray-500">Innovation & Excellence</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {/* Scroll links */}
            <button onClick={() => goToSection('home')} className="nav-link">
              Home
            </button>
            <button onClick={() => goToSection('about')} className="nav-link">
              About
            </button>
            <button onClick={() => goToSection('events')} className="nav-link">
              Events
            </button>
            <button onClick={() => goToSection('contact')} className="nav-link">
              Contact
            </button>

            {/* Page links */}
            <Link to="/domains" className="nav-link">
              Domains
            </Link>
            <Link to="/board" className="nav-link">
              Board
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            className="md:hidden py-4 border-t border-gray-200 space-y-2"
          >
            <button onClick={() => goToSection('home')} className="mobile-link">
              Home
            </button>
            <button onClick={() => goToSection('about')} className="mobile-link">
              About
            </button>
            <button onClick={() => goToSection('events')} className="mobile-link">
              Events
            </button>
            <button onClick={() => goToSection('contact')} className="mobile-link">
              Contact
            </button>

            <Link to="/domains" className="mobile-link" onClick={() => setIsMobileMenuOpen(false)}>
              Domains
            </Link>
            <Link to="/board" className="mobile-link" onClick={() => setIsMobileMenuOpen(false)}>
              Board
            </Link>
          </motion.div>
        )}
      </nav>

      {/* Reusable styles */}
      <style>{`
        .nav-link {
          color: black;
          font-weight: 500;
          position: relative;
          transition: color 0.2s;
        }
        .nav-link:hover {
          color: #c2a97e;
        }
        .mobile-link {
          display: block;
          width: 100%;
          padding: 0.5rem 1rem;
          text-align: left;
          color: black;
          border-radius: 0.5rem;
        }
        .mobile-link:hover {
          background: #f5f0e8;
          color: #c2a97e;
        }
      `}</style>
    </motion.header>
  )
}

export default Header
