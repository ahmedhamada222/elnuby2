import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import CustomButton from './CustomButton'
// Import partner images
import logo1 from '../assets/Images/Partner/logos-1.jpg'
import logo2 from '../assets/Images/Partner/logos-2.jpg'
import logo3 from '../assets/Images/Partner/logos-3.jpg'
import logo4 from '../assets/Images/Partner/logos-4.jpg'
import logo5 from '../assets/Images/Partner/logos-5.jpg'
import logo6 from '../assets/Images/Partner/logos-6.jpg'
import logo7 from '../assets/Images/Partner/logos-7.jpg'
import logo8 from '../assets/Images/Partner/logos-8.jpg'
import logo9 from '../assets/Images/Partner/logos-9.jpg'
import logo10 from '../assets/Images/Partner/logos-10.jpg'
import logo11 from '../assets/Images/Partner/logos-11.jpg'
import logo12 from '../assets/Images/Partner/logos-12.jpg'
import logo13 from '../assets/Images/Partner/logos-13.jpg'
import logo14 from '../assets/Images/Partner/logos-14.jpg'
import logo15 from '../assets/Images/Partner/logos-15.jpg'
import logo16 from '../assets/Images/Partner/logos-16.jpg'
import logo17 from '../assets/Images/Partner/logos-17.jpg'
import logo18 from '../assets/Images/Partner/logos-18.jpg'
import logo19 from '../assets/Images/Partner/logos-19.jpg'
import logo20 from '../assets/Images/Partner/logos-20.jpg'
import logo21 from '../assets/Images/Partner/logos-21.jpg'
import logo22 from '../assets/Images/Partner/logos-22.jpg'

function getLogoName(filename) {
  // Remove extension and replace dashes with spaces, capitalize words
  return filename.replace('logos-', 'Partner ').replace('.jpg', '').replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase())
}

function PartnersSection() {
  const [currentSlide, setCurrentSlide] = useState(0)

  // Array of partner images with file-based names
  const partners = [
    { name: getLogoName('logos-1.jpg'), logo: logo1 },
    { name: getLogoName('logos-2.jpg'), logo: logo2 },
    { name: getLogoName('logos-3.jpg'), logo: logo3 },
    { name: getLogoName('logos-4.jpg'), logo: logo4 },
    { name: getLogoName('logos-5.jpg'), logo: logo5 },
    { name: getLogoName('logos-6.jpg'), logo: logo6 },
    { name: getLogoName('logos-7.jpg'), logo: logo7 },
    { name: getLogoName('logos-8.jpg'), logo: logo8 },
    { name: getLogoName('logos-9.jpg'), logo: logo9 },
    { name: getLogoName('logos-10.jpg'), logo: logo10 },
    { name: getLogoName('logos-11.jpg'), logo: logo11 },
    { name: getLogoName('logos-12.jpg'), logo: logo12 },
    { name: getLogoName('logos-13.jpg'), logo: logo13 },
    { name: getLogoName('logos-14.jpg'), logo: logo14 },
    { name: getLogoName('logos-15.jpg'), logo: logo15 },
    { name: getLogoName('logos-16.jpg'), logo: logo16 },
    { name: getLogoName('logos-17.jpg'), logo: logo17 },
    { name: getLogoName('logos-18.jpg'), logo: logo18 },
    { name: getLogoName('logos-19.jpg'), logo: logo19 },
    { name: getLogoName('logos-20.jpg'), logo: logo20 },
    { name: getLogoName('logos-21.jpg'), logo: logo21 },
    { name: getLogoName('logos-22.jpg'), logo: logo22 },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % Math.ceil(partners.length / 6))
    }, 3500)
    return () => clearInterval(timer)
  }, [partners.length])

  return (
    <section className="py-20 px-4 bg-light">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-dark mb-6">Our Trusted Partners</h2>
          <p className="text-xl text-dark/70 max-w-3xl mx-auto">
            We collaborate with leading organizations and government entities to deliver 
            exceptional projects across the region
          </p>
        </motion.div>

        {/* Partners Swiper/Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative overflow-hidden py-6"
        >
          <div className="flex transition-transform duration-500 ease-in-out"
               style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
            {Array.from({ length: Math.ceil(partners.length / 6) }, (_, slideIndex) => (
              <div key={slideIndex} className="flex-shrink-0 w-full">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
                  {partners.slice(slideIndex * 6, (slideIndex + 1) * 6).map((partner, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col items-center justify-center"
                    >
                      <img src={partner.logo} alt={partner.name} className="h-24 w-auto object-contain mb-2" />
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Carousel Controls */}
          <div className="flex justify-center mt-8 space-x-2">
            {Array.from({ length: Math.ceil(partners.length / 6) }, (_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentSlide === index
                    ? 'bg-primary scale-125'
                    : 'bg-dark/20 hover:bg-dark/40'
                }`}
              />
            ))}
          </div>
        </motion.div>

        {/* Partnership Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <h3 className="text-3xl font-bold text-dark text-center mb-12">Why Partner With Us</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "🤝",
                title: "Proven Track Record",
                description: "25+ years of successful partnerships and project delivery"
              },
              {
                icon: "💼",
                title: "Comprehensive Solutions",
                description: "End-to-end services from concept to completion"
              },
              {
                icon: "🏆",
                title: "Quality Assurance",
                description: "Rigorous quality standards and international certifications"
              }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 bg-white rounded-lg shadow-lg"
              >
                <div className="text-5xl mb-4">{benefit.icon}</div>
                <h4 className="text-xl font-bold text-dark mb-3">{benefit.title}</h4>
                <p className="text-dark/70">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Partnership Types */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          viewport={{ once: true }}
          className="mt-20 bg-white rounded-lg shadow-lg p-8"
        >
          <h3 className="text-3xl font-bold text-dark text-center mb-8">Partnership Types</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Government",
                description: "Infrastructure and public sector projects",
                count: "15+"
              },
              {
                title: "Private Sector",
                description: "Commercial and residential developments",
                count: "200+"
              },
              {
                title: "International",
                description: "Global partnerships and joint ventures",
                count: "25+"
              },
              {
                title: "Technology",
                description: "Innovation and smart city solutions",
                count: "10+"
              }
            ].map((type, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-4 border border-light rounded-lg hover:border-primary transition-colors"
              >
                <div className="text-2xl font-bold text-primary mb-2">{type.count}</div>
                <h4 className="font-bold text-dark mb-2">{type.title}</h4>
                <p className="text-dark/70 text-sm">{type.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-primary to-secondary rounded-lg p-8 text-white">
            <h3 className="text-3xl font-bold mb-4">Become Our Partner</h3>
            <p className="text-xl mb-6">
              Join our network of trusted partners and collaborate on innovative 
              projects that shape the future of construction and development.
            </p>
            <CustomButton
              text="Contact Us"
              primaryColor="#fff"
              secondaryColor="#EC8823"
              borderColor="#fff"
              textColor="#EC8823"
              width="200px"
              height="50px"
              fontSize="16px"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default PartnersSection 