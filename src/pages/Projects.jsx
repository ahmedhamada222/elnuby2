import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import ProjectCard from '../components/ProjectCard'
import CustomButton from '../components/CustomButton'
import projectsData from '../data/projects-elnuby'

const Projects = () => {
  // Pagination state
  const [page, setPage] = useState(1)
  const projectsPerPage = 8
  const totalPages = Math.ceil(projectsData.length / projectsPerPage)
  const paginatedProjects = projectsData.slice((page - 1) * projectsPerPage, page * projectsPerPage)

  const [selectedCategory, setSelectedCategory] = useState('All')
  const categories = ['All', ...new Set(projectsData.map(project => project.category))]
  const filteredProjects = selectedCategory === 'All'
    ? projectsData
    : projectsData.filter(project => project.category === selectedCategory)
  const filteredPaginatedProjects = filteredProjects.slice((page - 1) * projectsPerPage, page * projectsPerPage)
  const filteredTotalPages = Math.ceil(filteredProjects.length / projectsPerPage)

  return (
    <div className="min-h-screen bg-light">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary via-secondary to-dark text-white py-24 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center"
          >
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-primary/30 bg-clip-text text-transparent"
            >
              Our Projects
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl text-light/80 max-w-4xl mx-auto leading-relaxed"
            >
              Discover our portfolio of successful construction and development projects that shape the future
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">
              Explore Our Work
            </h2>
            <p className="text-lg text-dark/70 max-w-2xl mx-auto">
              Filter through our diverse portfolio of projects across different sectors
            </p>
          </motion.div>

          {/* Category Filter Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-3 md:gap-4"
          >
            {categories.map((category, index) => (
              <motion.button
                key={category}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                onClick={() => { setSelectedCategory(category); setPage(1); }}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${selectedCategory === category
                    ? 'bg-gradient-to-r from-primary to-secondary text-white shadow-lg shadow-primary/20'
                    : 'bg-light text-dark hover:bg-primary/10 border border-light'
                  }`}
              >
                {category}
              </motion.button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Results Counter */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center mb-12"
          >
            <p className="text-lg text-dark/70">
              Showing <span className="font-semibold text-primary">{filteredProjects.length}</span> projects
              {selectedCategory !== 'All' && (
                <span> in <span className="font-semibold text-primary">{selectedCategory}</span></span>
              )}
            </p>
          </motion.div>

          {/* Projects Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedCategory + page}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8"
            >
              {filteredPaginatedProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  layout
                >
                  <ProjectCard project={project} />
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Empty State */}
          {filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <div className="text-6xl mb-4">🏗️</div>
              <h3 className="text-2xl font-semibold text-dark mb-2">No projects found</h3>
              <p className="text-dark/70">Try selecting a different category</p>
            </motion.div>
          )}

          {/* Pagination */}
          {filteredTotalPages > 1 && (
            <div className="flex justify-center items-center gap-2 mt-10 overflow-x-hidden">
              <CustomButton
                text="Prev"
                primaryColor={page === 1 ? "#f5f5f5" : "#fff"}
                secondaryColor={page === 1 ? "#f5f5f5" : "#EC8823"}
                borderColor={page === 1 ? "#f5f5f5" : "#EC8823"}
                textColor={page === 1 ? "#666" : "#000"}
                width="80px"
                height="40px"
                fontSize="14px"
                onClick={() => {
                  if (page > 1) {
                    setPage((p) => Math.max(1, p - 1))
                    window.scrollTo({
                      top: 600,
                      behavior: 'smooth'
                    })
                  }
                }}
              />
              {[...Array(filteredTotalPages)].map((_, idx) => (
                <CustomButton
                  key={idx}
                  text={(idx + 1).toString()}
                  primaryColor={page === idx + 1 ? "#EC8823" : "#fff"}
                  secondaryColor={page === idx + 1 ? "#EC8823" : "#EC8823"}
                  borderColor="#EC8823"
                  textColor={page === idx + 1 ? "#fff" : "#000"}
                  width="40px"
                  height="40px"
                  fontSize="14px"
                  onClick={() => {
                    setPage(idx + 1)
                    window.scrollTo({
                      top: 600,
                      behavior: 'smooth'
                    })
                  }}
                />
              ))}
              <CustomButton
                text="Next"
                primaryColor={page === filteredTotalPages ? "#f5f5f5" : "#fff"}
                secondaryColor={page === filteredTotalPages ? "#f5f5f5" : "#EC8823"}
                borderColor={page === filteredTotalPages ? "#f5f5f5" : "#EC8823"}
                textColor={page === filteredTotalPages ? "#666" : "#000"}
                width="80px"
                height="40px"
                fontSize="14px"
                onClick={() => {
                  if (page < filteredTotalPages) {
                    setPage((p) => Math.min(filteredTotalPages, p + 1))
                    window.scrollTo({
                      top: 600,
                      behavior: 'smooth'
                    })
                  }
                }}
              />
            </div>
          )}
        </div>
      </section>

      {/* Statistics Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-6">
              Our Impact in Numbers
            </h2>
            <p className="text-lg text-dark/70 max-w-3xl mx-auto">
              Delivering excellence across all our projects with measurable results
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {[
              { number: projectsData.length, label: "Projects Completed", icon: "🏗️" },
              { number: "15+", label: "Years Experience", icon: "⏰" },
              { number: "50+", label: "Team Members", icon: "👥" },
              { number: "100%", label: "Client Satisfaction", icon: "⭐" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-dark/70 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Projects