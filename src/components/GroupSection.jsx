import { motion } from 'framer-motion'

function GroupSection() {
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
          <h2 className="text-4xl font-bold text-dark mb-6">Elnuby Group Structure</h2>
          <p className="text-xl text-dark/70 max-w-3xl mx-auto">
            A comprehensive business conglomerate spanning multiple industries and sectors
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              name: "Elnuby Construction",
              icon: "🏗️",
              description: "Core construction and building services",
              services: ["Commercial Construction", "Residential Projects", "Infrastructure"],
              color: "blue"
            },
            {
              name: "Elnuby Development",
              icon: "🏢",
              description: "Real estate development and property management",
              services: ["Property Development", "Asset Management", "Investment"],
              color: "green"
            },
            {
              name: "Elnuby Engineering",
              icon: "⚙️",
              description: "Engineering consultancy and technical services",
              services: ["Structural Engineering", "MEP Design", "Project Management"],
              color: "purple"
            },
            {
              name: "Elnuby Technology",
              icon: "💻",
              description: "Smart building solutions and technology integration",
              services: ["Building Automation", "IoT Solutions", "Digital Twins"],
              color: "indigo"
            },
            {
              name: "Elnuby Sustainability",
              icon: "🌱",
              description: "Green building and environmental solutions",
              services: ["LEED Certification", "Solar Integration", "Waste Management"],
              color: "emerald"
            },
            {
              name: "Elnuby International",
              icon: "🌍",
              description: "Global operations and international projects",
              services: ["International Projects", "Joint Ventures", "Market Expansion"],
              color: "orange"
            }
          ].map((company, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border border-light hover:border-primary"
            >
              <div className="text-center mb-6">
                <div className="text-5xl mb-4">{company.icon}</div>
                <h3 className="text-xl font-bold text-dark mb-2">{company.name}</h3>
                <p className="text-dark/70">{company.description}</p>
              </div>
              
              <div className="space-y-3">
                <h4 className="font-semibold text-dark mb-3">Core Services:</h4>
                <ul className="space-y-2">
                  {company.services.map((service, serviceIndex) => (
                    <li key={serviceIndex} className="flex items-center text-dark/70">
                      <div className="w-2 h-2 rounded-full bg-primary mr-3"></div>
                      {service}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Group Overview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-20 bg-gradient-to-r from-primary to-secondary rounded-lg p-8 text-white"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-4">Unified Vision, Diverse Expertise</h3>
              <p className="text-lg mb-6">
                Each division of Elnuby Group operates with specialized expertise while 
                maintaining our core values of excellence, innovation, and sustainability. 
                This integrated approach allows us to deliver comprehensive solutions 
                that meet the evolving needs of our clients.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="text-2xl font-bold">6</div>
                  <div className="text-sm">Specialized Divisions</div>
                </div>
                <div>
                  <div className="text-2xl font-bold">15+</div>
                  <div className="text-sm">Countries Served</div>
                </div>
              </div>
            </div>
            <div className="bg-white/10 rounded-lg p-6">
              <h4 className="text-xl font-bold mb-4">Our Approach</h4>
              <ul className="space-y-3">
                {[
                  "Integrated project delivery across all divisions",
                  "Shared expertise and best practices",
                  "Unified quality standards and processes",
                  "Collaborative innovation and R&D"
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default GroupSection 