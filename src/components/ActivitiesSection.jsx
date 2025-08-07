import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import CustomButton from './CustomButton'

function ActivitiesSection() {
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
          <h2 className="text-4xl font-bold text-dark mb-6">Our Activities & Services</h2>
          <p className="text-xl text-dark/70 max-w-3xl mx-auto">
            Comprehensive construction and development services tailored to your needs
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {[
            {
              icon: "🏢",
              title: "Commercial Construction",
              description: "Office buildings, retail centers, and commercial complexes",
              features: ["High-rise buildings", "Shopping malls", "Office complexes"],
              color: "blue"
            },
            {
              icon: "🏠",
              title: "Residential Projects",
              description: "Luxury apartments, villas, and residential communities",
              features: ["Luxury apartments", "Villa communities", "Mixed-use developments"],
              color: "green"
            },
            {
              icon: "🏗️",
              title: "Infrastructure",
              description: "Roads, bridges, and essential infrastructure projects",
              features: ["Highways and roads", "Bridges and tunnels", "Public facilities"],
              color: "orange"
            },
            {
              icon: "🏭",
              title: "Industrial Construction",
              description: "Factories, warehouses, and industrial facilities",
              features: ["Manufacturing plants", "Warehouses", "Industrial parks"],
              color: "purple"
            },
            {
              icon: "🏨",
              title: "Hospitality & Tourism",
              description: "Hotels, resorts, and tourism infrastructure",
              features: ["Luxury hotels", "Resorts and spas", "Tourism facilities"],
              color: "pink"
            },
            {
              icon: "🏥",
              title: "Healthcare Facilities",
              description: "Hospitals, clinics, and medical centers",
              features: ["Hospitals", "Medical centers", "Specialized clinics"],
              color: "red"
            }
          ].map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="text-center mb-6">
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-dark mb-2">{service.title}</h3>
                <p className="text-dark/70">{service.description}</p>
              </div>
              
              <div className="space-y-3">
                <h4 className="font-semibold text-dark mb-3">Key Features:</h4>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-dark/70">
                      <div className="w-2 h-2 rounded-full bg-primary mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Specialized Services */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="bg-white rounded-lg shadow-lg p-8"
        >
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-8">Specialized Services</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: "📐",
                title: "Design & Planning",
                description: "Architectural design and project planning"
              },
              {
                icon: "🔧",
                title: "Project Management",
                description: "End-to-end project management services"
              },
              {
                icon: "🌱",
                title: "Sustainable Building",
                description: "Green building and LEED certification"
              },
              {
                icon: "💻",
                title: "Smart Technology",
                description: "Building automation and IoT integration"
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 rounded-lg bg-light hover:bg-primary/10 transition-colors"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h4 className="font-bold text-gray-900 mb-2">{service.title}</h4>
                <p className="text-gray-600 text-sm">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Process Overview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Process</h3>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Consultation",
                description: "Initial meeting to understand your requirements and vision"
              },
              {
                step: "02",
                title: "Planning",
                description: "Detailed project planning, design, and feasibility studies"
              },
              {
                step: "03",
                title: "Execution",
                description: "Professional construction and project management"
              },
              {
                step: "04",
                title: "Delivery",
                description: "Quality assurance and handover of completed project"
              }
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {step.step}
                </div>
                <h4 className="text-lg font-bold text-dark mb-2">{step.title}</h4>
                <p className="text-dark/70">{step.description}</p>
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
            <h3 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h3>
            <p className="text-xl mb-6">
              Let's discuss how we can bring your vision to life with our comprehensive 
              construction and development services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <CustomButton
                  text="Get Free Consultation"
                  primaryColor="#fff"
                  secondaryColor="#EC8823"
                  borderColor="#fff"
                  textColor="#EC8823"
                  width="220px"
                  height="50px"
                  fontSize="16px"
                />
              </Link>
              <Link to="/projects">
                <CustomButton
                  text="View Our Projects"
                  primaryColor="transparent"
                  secondaryColor="#fff"
                  borderColor="#fff"
                  textColor="#fff"
                  width="220px"
                  height="50px"
                  fontSize="16px"
                />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ActivitiesSection 