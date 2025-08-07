import { motion } from 'framer-motion'
import ceoImg from '../assets/Images/About/engsaleh.jpg'
import leaderImg from '../assets/Images/About/genalaa.jpg'
import ceoImg2 from '../assets/Images/About/nubyinside2.jpg'


const About = () => {
  const companyInfo = {
    name: "Elnuby Group",
    location: "Egypt, Middle East & Africa",
    years: 24,
    projects: 500
  }
  const aboutInfo = {
    description: "Elnuby Group has been at the forefront of construction and development in Egypt and the region for over 20 years. We have built our reputation on quality, innovation, and commitment to excellence."
  }
  const values = [
    { icon: "🏗️", title: "Excellence", description: "We strive for excellence in every project we undertake" },
    { icon: "🤝", title: "Integrity", description: "Honest and transparent business practices" },
    { icon: "💡", title: "Innovation", description: "Embracing new technologies and methods" },
    { icon: "🌱", title: "Sustainability", description: "Committed to environmentally responsible construction" }
  ]
  const leadership = [
    { name: "Eng. Saleh El Nuby", position: "Chief Executive Officer", image: ceoImg, bio: "Over 30 years of experience in construction and development. Visionary leader and founder of Elnuby Group." },
    { name: "Gen. Alaa El Nuby", position: "Vice Chairman", image: leaderImg, bio: "Expert in project management and operations with a strong background in engineering and leadership." }
  ]

  return (
    <div className="min-h-screen bg-light overflow-x-hidden">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary via-secondary to-dark text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">About Elnuby Group</h1>
            <p className="text-xl md:text-2xl text-light/80 max-w-3xl mx-auto">
              Leading construction and development company in Egypt, Middle East & Africa
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            <div>
              <h2 className="text-3xl font-bold text-dark mb-6">Our Story</h2>
              <p className="text-lg text-dark/70 mb-6">
                {aboutInfo.description}
              </p>
              <p className="text-lg text-dark/70 mb-6">
                From humble beginnings, we have grown into one of the most trusted names in the construction industry, delivering projects that shape the future of our cities and communities.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">{companyInfo.years}+</div>
                  <div className="text-dark/70">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">{companyInfo.projects}+</div>
                  <div className="text-dark/70">Projects Completed</div>
                </div>
              </div>
            </div>
            <div className="bg-white h-96 rounded-lg flex items-center justify-center overflow-hidden shadow-lg">
              <img src={ceoImg2} alt="CEO" className="object-cover w-full h-full" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-dark mb-6">Our Core Values</h2>
            <p className="text-lg text-dark/70 max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center p-6 rounded-lg bg-light hover:bg-primary/10 transition-colors duration-300"
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold text-dark mb-2">{value.title}</h3>
                <p className="text-dark/70">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-dark mb-6">Our Leadership</h2>
            <p className="text-lg text-dark/70 max-w-3xl mx-auto">
              Meet the team that drives our success
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {leadership.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center bg-light rounded-lg shadow-lg p-8 flex flex-col items-center"
              >
                <div className=" overflow-hidden mb-4 border-4 border-primary shadow-md">
                  <img src={member.image} alt={member.name} className="object-cover w-full h-full" />
                </div>
                <h3 className="text-xl font-semibold text-dark mb-2">{member.name}</h3>
                <p className="text-primary font-medium mb-2">{member.position}</p>
                <p className="text-dark/70">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default About