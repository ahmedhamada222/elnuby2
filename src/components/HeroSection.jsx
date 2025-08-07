import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import CustomButton from './CustomButton'
import hero1 from '../assets/hero1.jpg'
import hero2 from '../assets/hero2.jpg'
import hero3 from '../assets/hero3.jpg'

function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
      title: "El Nuby Group for Contracting",
      subtitle: "We Always Strive for Excellence and Dedication in Customer Service",
      image: hero1,
      cta: "Learn More"
    },
    {
      title: "El Nuby Group for Contracting",
      subtitle: "We Always Strive for Excellence and Dedication in Customer Service",
      image: hero2,
      cta: "Learn More"
    },
    {
      title: "El Nuby Group for Contracting",
      subtitle: "We Always Strive for Excellence and Dedication in Customer Service",
      image: hero3,
      cta: "Learn More"
    },
    
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [slides.length])

  return (
    <section className="relative h-screen overflow-hidden ">
      {/* Background Slides */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${slides[currentSlide].image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          {/* Stronger overlay for mobile */}
          <div className="absolute inset-0 bg-black/60 md:bg-black/40"></div>
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center px-2 md:px-0">
        <div className="max-w-xl md:max-w-4xl mx-auto px-2 sm:px-6 lg:px-8 text-center text-white flex flex-col items-center justify-center h-full">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.8 }}
            className=" flex flex-col items-center justify-center"
          >
            {/* English Title */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl xs:text-4xl sm:text-5xl md:text-5xl font-bold mb-2 md:mb-4 drop-shadow-lg"
            >
              {slides[currentSlide].title}
            </motion.h1>

            {/* Arabic Title Subtitle */}
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-lg xs:text-xl md:text-xl font-light mb-2 drop-shadow font-arabic text-white/80"
              dir="rtl"
            >
              {slides[currentSlide].arabicTitle}
            </motion.h2>

            {/* English Subtitle */}
            <motion.h3
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-lg xs:text-xl md:text-3xl font-light mb-2 md:mb-6 drop-shadow"
            >
              {slides[currentSlide].subtitle}
            </motion.h3>

            {/* Arabic Subtitle */}
            <motion.h4
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="text-base xs:text-lg md:text-xl font-light mb-4 drop-shadow font-arabic text-white/70"
              dir="rtl"
            >
              {slides[currentSlide].arabicSubtitle}
            </motion.h4>

            {/* English Description */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-base xs:text-lg md:text-xl max-w-2xl md:max-w-3xl mx-auto mb-4 md:mb-8 text-gray-200 drop-shadow"
            >
              {slides[currentSlide].description}
            </motion.p>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="flex flex-col xs:flex-row gap-3 md:gap-4 justify-center items-center"
            >
              <Link to="/about" className="w-full xs:w-auto">
                <CustomButton
                  text={slides[currentSlide].cta}
                  primaryColor="#EC8823"
                  secondaryColor="#fff"
                  borderColor="#EC8823"
                  textColor="#000"
                  width="180px"
                  height="52px"
                  fontSize="18px"
                />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex justify-center items-center space-x-4 md:space-x-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-4 h-4 md:w-3 md:h-3 rounded-full transition-all duration-300 border-2 border-white focus:outline-none focus:ring-2 focus:ring-primary ${
                currentSlide === index
                  ? 'bg-accent scale-125 shadow-lg'
                  : 'bg-white/50 hover:bg-white/75'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
        className="absolute bottom-6 right-6 z-20 hidden xs:block"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-white text-center"
        >
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-3 bg-white rounded-full mt-2"
            />
          </div>
          <p className="text-xs mt-2">Scroll</p>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default HeroSection 