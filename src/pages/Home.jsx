import HeroSection from '../components/HeroSection'
import AboutSection from '../components/AboutSection'
import ProudSection from '../components/ProudSection'
import GroupSection from '../components/GroupSection'
import ActivitiesSection from '../components/ActivitiesSection'
import MissionVisionSection from '../components/MissionVisionSection'
import PartnersSection from '../components/PartnersSection'
import ProjectCard from '../components/ProjectCard'
import projectsData from '../data/projects-elnuby'
import { useState } from 'react'

function Home() {
  // Pagination state for projects
  const paginatedProjects = projectsData.slice(0, 4)

  return (
    <div className="w-full overflow-x-hidden">
      <HeroSection />
      <AboutSection />
      {/* Our Projects Section */}
      <section className="py-20 px-4 bg-light">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-dark mb-4">Our Projects</h2>
            <p className="text-xl text-dark/70 max-w-3xl mx-auto">
              Explore a selection of our recent work and successful projects.
            </p>
          </div>
          <div className="grid  grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
            {paginatedProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>
      <ProudSection />
      <GroupSection />
      <ActivitiesSection />
      <MissionVisionSection />
      <PartnersSection />
    </div>
  )
}

export default Home 