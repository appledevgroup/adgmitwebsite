const Footer = () => {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Events', href: '#events' },
    { name: 'Contact', href: '#contact' },
  ]

  const socialLinks = [
    { name: 'GitHub', href: '#' },
    { name: 'LinkedIn', href: 'https://www.linkedin.com/company/adg-manipal/posts/?feedView=all' },
    { name: 'Instagram', href: 'https://www.instagram.com/adg.mit/?hl=en' },
    
    
  ]

  const scrollToSection = (href) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="bg-gray-900 dark:bg-black text-gray-300 dark:text-gray-400">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src="/logo.svg" 
                alt="ADG Logo" 
                className="w-12 h-12 rounded-lg object-contain"
              />
              <div>
                <h3 className="text-white dark:text-gray-100 font-bold text-xl">ADG Technical Club</h3>
                <p className="text-xs text-gray-400">Innovation & Excellence</p>
              </div>
            </div>
            <p className="text-gray-400 dark:text-gray-500 mb-4 max-w-md">
              Empowering innovation, fostering excellence, and building the future 
              through technology and collaboration.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-white-muted hover:text-creme transition-colors duration-200"
                  aria-label={link.name}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-white-muted hover:text-creme transition-colors duration-200"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400 dark:text-gray-500">
              <li>adg.mit@manipal.edu</li>
              
              <li>Follow us on instagram</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 dark:text-gray-500">
          <p>&copy; {currentYear} ADG Technical Club. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

