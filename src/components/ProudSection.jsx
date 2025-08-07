import { motion } from 'framer-motion'

function ProudSection() {
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
          <h2 className="text-4xl font-bold text-dark mb-6">What We're Proud Of</h2>
          <p className="text-xl text-dark/70 max-w-3xl mx-auto">
            Our achievements and milestones that define our journey of excellence
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: "🏆",
              title: "Industry Awards",
              description: "Multiple awards for excellence in construction and sustainable development",
              year: "2023"
            },
            {
              icon: "🌍",
              title: "Global Reach",
              description: "Successfully completed projects across 15+ countries worldwide",
              year: "2023"
            },
            {
              icon: "🏗️",
              title: "Landmark Projects",
              description: "Built some of the most iconic structures in the region",
              year: "2022"
            },
            {
              icon: "🌱",
              title: "Sustainability Leadership",
              description: "Pioneering green building practices and LEED certifications",
              year: "2022"
            },
            {
              icon: "🤝",
              title: "Client Partnerships",
              description: "Long-term relationships with Fortune 500 companies",
              year: "2021"
            },
            {
              icon: "💡",
              title: "Innovation Hub",
              description: "Investing in cutting-edge construction technologies",
              year: "2021"
            }
          ].map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="text-4xl">{achievement.icon}</div>
                <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                  {achievement.year}
                </span>
              </div>
              <h3 className="text-xl font-bold text-dark mb-3">{achievement.title}</h3>
              <p className="text-dark/70">{achievement.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Timeline Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <h3 className="text-3xl font-bold text-dark text-center mb-12">Our Journey</h3>
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-primary/20"></div>
            
            <div className="space-y-12">
              {[
                {
                  year: "1995",
                  title: "Company Founded",
                  description: "Elnuby Group established with a vision for excellence"
                },
                {
                  year: "2005",
                  title: "First Major Project",
                  description: "Completed landmark commercial complex in Dubai"
                },
                {
                  year: "2015",
                  title: "International Expansion",
                  description: "Expanded operations to 10+ countries"
                },
                {
                  year: "2020",
                  title: "Sustainability Focus",
                  description: "Launched comprehensive green building initiative"
                },
                {
                  year: "2024",
                  title: "Future Ready",
                  description: "Leading innovation in smart construction technologies"
                }
              ].map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                >
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                      <div className="text-2xl font-bold text-primary mb-2">{milestone.year}</div>
                      <h4 className="text-lg font-bold text-dark mb-2">{milestone.title}</h4>
                      <p className="text-dark/70">{milestone.description}</p>
                    </div>
                  </div>
                  
                  {/* Timeline Dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-white shadow-lg"></div>
                  
                  <div className="w-1/2"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ProudSection 