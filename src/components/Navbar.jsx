import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import CustomButton from './CustomButton'
import elnubyLogo from '../assets/Images/logo/logo-elnuby.png'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Career', path: '/career' },
    { name: 'Contact', path: '/contact' }
  ]

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? ' backdrop-blur-xl shadow-2xl border-b border-gray-200/20 lg:w-[50%] mx-auto rounded-2xl mt-2 transition-all duration-300'
          : 'bg-gradient-to-r from-dark via-secondary to-dark'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20 relative">
          {/* Mobile Menu Button */}          <Link to="/" className="flex items-center space-x-3">
            <img
              src={elnubyLogo}
              alt="Elnuby Group"
              className={`h-12 md:h-12 w-auto transition-all duration-300 `}
            />

          </Link>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden p-2.5 rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary/50 ${
              isScrolled 
                ? 'text-dark bg-white/90 shadow-lg hover:bg-white hover:shadow-xl' 
                : 'text-white bg-primary/90 shadow-lg hover:bg-primary hover:shadow-xl'
            } flex items-center justify-center`}
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            <div className="flex flex-col justify-center items-center w-5 h-5 space-y-1">
              <span
                className={`w-5 h-0.5 bg-current rounded-full transition-all duration-300 transform ${
                  isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''
                }`}
              />
              <span
                className={`w-5 h-0.5 bg-current rounded-full transition-all duration-300 ${
                  isMobileMenuOpen ? 'opacity-0' : ''
                }`}
              />
              <span
                className={`w-5 h-0.5 bg-current rounded-full transition-all duration-300 transform ${
                  isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''
                }`}
              />
            </div>
          </button>

          {/* Logo */}


          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm font-medium transition-all duration-300 relative group ${
                  location.pathname === link.path
                    ? isScrolled ? 'text-primary' : 'text-primary'
                    : isScrolled ? 'text-gray-700 hover:text-primary' : 'text-white/90 hover:text-white'
                }`}
              >
                {link.name}
                <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full ${
                  location.pathname === link.path ? 'w-full' : ''
                }`}></span>
              </Link>
            ))}
          </div>

          {/* Desktop CTA Button */}
          <div className="hidden md:block">
            <Link to="/contact">
              <CustomButton
                text="English 🌐"
                primaryColor={isScrolled ? "#EC8823" : "#EC8823"}
                secondaryColor={isScrolled ? "#132037" : "#fff"}
                borderColor="#EC8823"
                textColor={isScrolled ? "#fff" : "#fff"}
                width="120px"
                height="40px"
                fontSize="14px"
              />
            </Link>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-50 bg-gradient-to-br from-dark/98 to-secondary/98 backdrop-blur-xl flex flex-col items-center justify-center md:hidden"
            >
              {/* Close button */}
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="absolute top-6 right-6 p-3 rounded-xl bg-primary/20 text-white shadow-lg hover:bg-primary/30 transition-all duration-300"
                aria-label="Close menu"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Logo in menu */}
              <div className="flex flex-col items-center mb-12">
                <img src={elnubyLogo} alt="Elnuby Group" className="h-16 mb-4 filter brightness-0 invert" />
                <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
              </div>

              {/* Navigation Links */}
              <nav className="flex flex-col items-center space-y-6 w-full max-w-sm px-8">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="w-full"
                  >
                    <Link
                      to={link.path}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`flex items-center justify-center text-lg font-semibold px-6 py-4 rounded-2xl transition-all duration-300 w-full ${
                        location.pathname === link.path
                          ? 'bg-primary text-white shadow-xl transform scale-105'
                          : 'text-white/90 hover:bg-white/10 hover:text-white hover:shadow-lg'
                      }`}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
                
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: navLinks.length * 0.1 }}
                  className="w-full mt-8"
                >
                  <Link
                    to="/contact"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="w-full"
                  >
                    <CustomButton
                      text="Get Quote"
                      primaryColor="#EC8823"
                      secondaryColor="#fff"
                      borderColor="#EC8823"
                      textColor="#fff"
                      width="100%"
                      height="52px"
                      fontSize="16px"
                    />
                  </Link>
                </motion.div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  )
}

export default Navbar