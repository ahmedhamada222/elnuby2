import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import CustomButton from './CustomButton'
import logoFooter from '../assets/Images/logo/logo-elnuby-footer.png'

function Footer() {
  return (
    <footer className="bg-gradient-to-br from-dark via-secondary to-dark text-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid lg:grid-cols-5 gap-12 py-16">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="flex items-center gap-4">
                <img src={logoFooter} alt="Elnuby Group Logo" className="h-16 w-auto" />
              </div>
              <p className="text-light/90 text-lg leading-relaxed max-w-md">
                Building the future through innovation and excellence. We are a leading construction and development company committed to creating sustainable, high-quality projects that shape communities.
              </p>
              
              {/* Newsletter Subscription */}
              <div className="space-y-4">
                <h5 className="text-lg font-semibold text-light">Subscribe to Our Newsletter</h5>
                <div className="flex gap-2">
                  <input 
                    type="email" 
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-light placeholder-light/60 focus:outline-none focus:border-primary"
                  />
                  <CustomButton
                    text="Subscribe"
                    primaryColor="#EC8823"
                    secondaryColor="#132037"
                    borderColor="#EC8823"
                    textColor="#fff"
                    width="120px"
                    height="48px"
                    fontSize="14px"
                  />
                </div>
              </div>

              {/* Social Media */}
              <div className="flex space-x-4">
                {[
                  { name: 'LinkedIn', icon: '💼', href: '#' },
                  { name: 'Twitter', icon: '🐦', href: '#' },
                  { name: 'Facebook', icon: '📘', href: '#' },
                  { name: 'Instagram', icon: '📷', href: '#' }
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="w-12 h-12 flex items-center justify-center rounded-full bg-white/10 hover:bg-primary transition-all duration-300 text-xl hover:scale-110"
                    title={social.name}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-xl font-bold text-light mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { name: 'Home', path: '/' },
                { name: 'About Us', path: '/about' },
                { name: 'Projects', path: '/projects' },
                { name: 'Careers', path: '/career' },
                { name: 'Contact', path: '/contact' }
              ].map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className="text-light/80 hover:text-primary transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-xl font-bold text-light mb-6">Our Services</h4>
            <ul className="space-y-3">
              {[
                '🏗️ Construction Management',
                '📐 Architectural Design',
                '🏢 Project Development',
                '🛣️ Infrastructure',
                '🔨 Renovation'
              ].map((service, index) => (
                <li key={index} className="text-light/80 hover:text-primary transition-colors duration-200 flex items-center gap-2 group">
                  <span className="w-1 h-1 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  {service}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="text-xl font-bold text-light mb-6">Contact Info</h4>
            <ul className="space-y-4 text-light/80">
              <li className="flex items-start gap-3">
                <span className="text-primary text-lg">📍</span>
                <div>
                  <p className="font-medium">Elnuby Group Building</p>
                  <p>123 Hassan El Maamoun St, Nasr City, Cairo</p>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-primary text-lg">📞</span>
                <span>01153494444</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-primary text-lg">✉️</span>
                <span>info@elnuby.com</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-primary text-lg">🕒</span>
                <span>Mon-Fri: 8AM-6PM</span>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="border-t border-white/10 py-6"
        >
          <div className="flex flex-col md:flex-row items-center justify-between text-sm text-light/60">
            <div className="mb-4 md:mb-0">
              © 2024 Elnuby Group. All rights reserved.
            </div>
            <div className="flex items-center space-x-6">
              <Link to="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
              <span className="text-light/40">|</span>
              <Link to="/terms" className="hover:text-primary transition-colors">Terms of Service</Link>
              <span className="text-light/40">|</span>
              <Link to="/sitemap" className="hover:text-primary transition-colors">Sitemap</Link>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer 