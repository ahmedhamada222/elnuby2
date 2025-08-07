import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import CustomButton from './CustomButton'
import nubyInside from '../assets/Images/About/nubyinside.jpg'

function AboutSection() {
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
          <h2 className="text-4xl font-bold text-dark mb-6">About Elnuby Group</h2>
          <p className="text-xl text-dark/70 max-w-3xl mx-auto">
            A leading construction and development company committed to excellence and innovation
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-dark mb-6">
              Building Excellence Since 1995
            </h3>
            <p className="text-lg text-dark/70 mb-6">
              Elnuby Group has been at the forefront of the construction industry for over 
              two decades, delivering exceptional projects that shape skylines and communities 
              across the UAE and beyond.
            </p>
            <p className="text-lg text-dark/70 mb-8">
              Our commitment to quality, innovation, and sustainable development has made us 
              a trusted partner for clients seeking excellence in construction and development 
              services.
            </p>
            <div className="grid grid-cols-2 gap-6 mb-8">
              {[
                { number: "500+", label: "Projects Completed" },
                { number: "25+", label: "Years Experience" },
                { number: "1M+", label: "Square Meters Built" },
                { number: "100%", label: "Client Satisfaction" }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
                  <div className="text-dark/70">{stat.label}</div>
                </motion.div>
              ))}
            </div>
            <Link to="/about">
              <CustomButton
                text="Learn More About Us →"
                primaryColor="#EC8823"
                secondaryColor="#132037"
                borderColor="#EC8823"
                textColor="#fff"
                width="220px"
                height="50px"
                fontSize="16px"
              />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-white h-96 rounded-lg flex items-center justify-center overflow-hidden shadow-lg">
              <img src={nubyInside} alt="Elnuby Group Office" className="object-cover w-full h-full" />
            </div>
            {/* Floating Elements */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
              className="absolute -top-4 -left-4 bg-primary text-white p-4 rounded-lg shadow-lg"
            >
              <div className="text-2xl mb-2">🏆</div>
              <div className="text-sm font-medium">Award Winning</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              viewport={{ once: true }}
              className="absolute -bottom-4 -right-4 bg-secondary text-white p-4 rounded-lg shadow-lg"
            >
              <div className="text-2xl mb-2">🌱</div>
              <div className="text-sm font-medium">Sustainable</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection 