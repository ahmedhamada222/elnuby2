import { motion } from 'framer-motion'
import CustomButton from './CustomButton'

function ProjectCard({ project }) {
  return (
    <motion.div
      whileHover={{ 
        y: -8,
        scale: 1.02,
        transition: { duration: 0.3 }
      }}
      className="group  bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 border border-light"
    >
      {/* Project Image Container */}
      <div className="relative h-60 overflow-hidden">
        {typeof project.image === 'string' && project.image ? (
          <img
            src={project.image}
            alt={project.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-light to-primary/10 flex items-center justify-center">
            <div className="text-6xl">🏗️</div>
          </div>
        )}
        
        {/* Category Badge */}
        <div className="absolute top-4 right-4">
          <span className="bg-white/90 backdrop-blur-sm text-primary px-3 py-1 rounded-full text-xs font-semibold shadow-lg border border-primary">
            {project.category}
          </span>
        </div>
        
        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300"></div>
      </div>

      {/* Project Content */}
      <div className="p-6 flex flex-col justify-center items-start w-full">
        <div className="mb-4 h-[90px] w-full">
          <h3 className=" w-full font-bold text-dark mb-2 group-hover:text-primary transition-colors duration-300">
            {project.name}
          </h3>
          <p className="text-dark/70 text-sm leading-relaxed line-clamp-3">
            {project.description}
          </p>
        </div>

        {/* Action Button */}
        <div className="w-full">
          <CustomButton
            text="View Details"
            primaryColor="#EC8823"
            secondaryColor="#132037"
            borderColor="#EC8823"
            textColor="#fff"
            width="100%"
            height="48px"
            fontSize="16px"
          />
        </div>
      </div>
    </motion.div>
  )
}

export default ProjectCard
