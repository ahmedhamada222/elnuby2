import { motion } from 'framer-motion'

function MissionVisionSection() {
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
          <h2 className="text-4xl font-bold text-dark mb-6">Our Mission & Vision</h2>
          <p className="text-xl text-dark/70 max-w-3xl mx-auto">
            Guiding principles that drive our commitment to excellence and innovation
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-primary to-secondary rounded-lg p-8 text-white"
          >
            <div className="text-center mb-8">
              <div className="text-6xl mb-4">🎯</div>
              <h3 className="text-3xl font-bold mb-4">Our Mission</h3>
            </div>
            <p className="text-lg mb-6 leading-relaxed">
              To deliver exceptional construction and development solutions that exceed 
              client expectations while maintaining the highest standards of quality, 
              safety, and sustainability. We strive to create lasting value for our 
              stakeholders and contribute positively to the communities we serve.
            </p>
            <div className="space-y-4">
              <h4 className="text-xl font-semibold mb-4">We achieve this by:</h4>
              <ul className="space-y-3">
                {[
                  "Maintaining uncompromising quality standards",
                  "Embracing innovation and cutting-edge technology",
                  "Fostering strong client relationships",
                  "Investing in our people and their development",
                  "Promoting sustainable and responsible practices"
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start"
                  >
                    <span className="text-primary/30 mr-3 mt-1">✓</span>
                    {item}
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-secondary to-dark rounded-lg p-8 text-white"
          >
            <div className="text-center mb-8">
              <div className="text-6xl mb-4">🔮</div>
              <h3 className="text-3xl font-bold mb-4">Our Vision</h3>
            </div>
            <p className="text-lg mb-6 leading-relaxed">
              To be the leading construction and development company in the region, 
              recognized for innovation, excellence, and sustainable practices. We 
              envision a future where our projects not only meet today's needs but 
              also create lasting legacies for generations to come.
            </p>
            <div className="space-y-4">
              <h4 className="text-xl font-semibold mb-4">Our vision encompasses:</h4>
              <ul className="space-y-3">
                {[
                  "Industry leadership in sustainable development",
                  "Global recognition for innovation and quality",
                  "Expansion into new markets and sectors",
                  "Technology-driven construction solutions",
                  "Creating iconic landmarks and communities"
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start"
                  >
                    <span className="text-primary/30 mr-3 mt-1">★</span>
                    {item}
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Values Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <h3 className="text-3xl font-bold text-dark text-center mb-12">Our Core Values</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: "🏆",
                title: "Excellence",
                description: "We strive for excellence in everything we do, from the smallest detail to the grandest vision."
              },
              {
                icon: "💡",
                title: "Innovation",
                description: "Embracing new technologies and creative solutions to solve complex challenges."
              },
              {
                icon: "🤝",
                title: "Integrity",
                description: "Building trust through transparency, honesty, and ethical business practices."
              },
              {
                icon: "🌱",
                title: "Sustainability",
                description: "Committed to environmental responsibility and sustainable development practices."
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 bg-light rounded-lg hover:bg-primary/10 transition-colors"
              >
                <div className="text-5xl mb-4">{value.icon}</div>
                <h4 className="text-xl font-bold text-dark mb-3">{value.title}</h4>
                <p className="text-dark/70">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Commitment Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          viewport={{ once: true }}
          className="mt-20 bg-gradient-to-r from-primary to-secondary rounded-lg p-8 text-white text-center"
        >
          <h3 className="text-3xl font-bold mb-6">Our Commitment to You</h3>
          <p className="text-xl mb-8 max-w-4xl mx-auto">
            We are committed to delivering projects that not only meet your requirements 
            but exceed your expectations. Our team of experts works tirelessly to ensure 
            every project reflects our values of excellence, innovation, and sustainability.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                number: "100%",
                label: "Client Satisfaction"
              },
              {
                number: "25+",
                label: "Years of Excellence"
              },
              {
                number: "500+",
                label: "Successful Projects"
              }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-primary/30">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default MissionVisionSection 