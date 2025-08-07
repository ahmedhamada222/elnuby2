import { useState } from 'react'
import { motion } from 'framer-motion'
import CustomButton from '../components/CustomButton'

function Career() {
  const [selectedJob, setSelectedJob] = useState(null)
  const [showForm, setShowForm] = useState(false)

  const jobs = [
    {
      id: 1,
      title: "Senior Project Manager",
      department: "Construction",
      location: "Dubai, UAE",
      type: "Full-time",
      experience: "8+ years",
      description: "Lead and manage large-scale construction projects from inception to completion.",
      requirements: [
        "Bachelor's degree in Civil Engineering or related field",
        "Proven experience in managing construction projects",
        "Strong leadership and communication skills",
        "PMP certification preferred"
      ]
    },
    {
      id: 2,
      title: "Architectural Designer",
      department: "Design",
      location: "Abu Dhabi, UAE",
      type: "Full-time",
      experience: "5+ years",
      description: "Create innovative architectural designs for residential and commercial projects.",
      requirements: [
        "Bachelor's degree in Architecture",
        "Proficiency in AutoCAD, Revit, and 3D modeling software",
        "Strong portfolio of completed projects",
        "Knowledge of sustainable design principles"
      ]
    },
    {
      id: 3,
      title: "Site Engineer",
      department: "Construction",
      location: "Sharjah, UAE",
      type: "Full-time",
      experience: "3+ years",
      description: "Oversee construction activities and ensure quality standards are met.",
      requirements: [
        "Bachelor's degree in Civil Engineering",
        "Experience in construction supervision",
        "Knowledge of safety regulations",
        "Strong problem-solving skills"
      ]
    },
    {
      id: 4,
      title: "Quantity Surveyor",
      department: "Finance",
      location: "Dubai, UAE",
      type: "Full-time",
      experience: "4+ years",
      description: "Manage project costs and prepare detailed cost estimates.",
      requirements: [
        "Bachelor's degree in Quantity Surveying or related field",
        "Experience in construction cost management",
        "Proficiency in cost estimation software",
        "Strong analytical skills"
      ]
    },
    {
      id: 5,
      title: "Marketing Manager",
      department: "Marketing",
      location: "Dubai, UAE",
      type: "Full-time",
      experience: "6+ years",
      description: "Develop and execute marketing strategies for the company's projects and services.",
      requirements: [
        "Bachelor's degree in Marketing or Business",
        "Experience in B2B marketing",
        "Strong digital marketing skills",
        "Excellent communication abilities"
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-r from-blue-900 to-blue-700 flex items-center justify-center">
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 text-center text-white">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl font-bold mb-4"
          >
            Join Our Team
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl"
          >
            Build your career with a company that values innovation and excellence
          </motion.p>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Work With Us</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join a team that's building the future and creating lasting impact
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Growth Opportunities",
                description: "Continuous learning and career advancement in a dynamic industry.",
                icon: "📈"
              },
              {
                title: "Innovation Culture",
                description: "Work with cutting-edge technologies and creative solutions.",
                icon: "💡"
              },
              {
                title: "Competitive Benefits",
                description: "Comprehensive health coverage, flexible work arrangements, and more.",
                icon: "🏆"
              },
              {
                title: "Diverse Projects",
                description: "Work on exciting projects across different sectors and locations.",
                icon: "🌍"
              },
              {
                title: "Team Environment",
                description: "Collaborate with talented professionals in a supportive atmosphere.",
                icon: "🤝"
              },
              {
                title: "Impact",
                description: "Contribute to projects that shape communities and improve lives.",
                icon: "🏗️"
              }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
              >
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Listings */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Current Openings</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore opportunities to join our growing team
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            <div className="space-y-6">
              {jobs.map((job, index) => (
                <motion.div
                  key={job.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`bg-white p-6 rounded-lg shadow-lg cursor-pointer transition-all duration-300 ${
                    selectedJob?.id === job.id ? 'ring-2 ring-blue-500 shadow-xl' : 'hover:shadow-xl'
                  }`}
                  onClick={() => setSelectedJob(job)}
                >
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold text-gray-900">{job.title}</h3>
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                      {job.type}
                    </span>
                  </div>
                  <div className="space-y-2 text-gray-600">
                    <p><span className="font-medium">Department:</span> {job.department}</p>
                    <p><span className="font-medium">Location:</span> {job.location}</p>
                    <p><span className="font-medium">Experience:</span> {job.experience}</p>
                  </div>
                  <p className="text-gray-600 mt-4">{job.description}</p>
                </motion.div>
              ))}
            </div>

            <div className="lg:sticky lg:top-8">
              {selectedJob ? (
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  className="bg-white p-8 rounded-lg shadow-lg"
                >
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{selectedJob.title}</h3>
                  <div className="space-y-4 mb-6">
                    <p><span className="font-medium">Department:</span> {selectedJob.department}</p>
                    <p><span className="font-medium">Location:</span> {selectedJob.location}</p>
                    <p><span className="font-medium">Type:</span> {selectedJob.type}</p>
                    <p><span className="font-medium">Experience:</span> {selectedJob.experience}</p>
                  </div>
                  <div className="mb-6">
                    <h4 className="font-bold text-gray-900 mb-2">Description:</h4>
                    <p className="text-gray-600">{selectedJob.description}</p>
                  </div>
                  <div className="mb-6">
                    <h4 className="font-bold text-gray-900 mb-2">Requirements:</h4>
                    <ul className="list-disc list-inside text-gray-600 space-y-1">
                      {selectedJob.requirements.map((req, index) => (
                        <li key={index}>{req}</li>
                      ))}
                    </ul>
                  </div>
                  <CustomButton
                    text="Apply Now"
                    primaryColor="#2563eb"
                    secondaryColor="#1d4ed8"
                    borderColor="#2563eb"
                    textColor="#fff"
                    width="100%"
                    height="48px"
                    fontSize="16px"
                    onClick={() => setShowForm(true)}
                  />
                </motion.div>
              ) : (
                <div className="bg-white p-8 rounded-lg shadow-lg text-center text-gray-500">
                  <p>Select a job to view details</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Application Form Modal */}
      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="bg-white rounded-lg p-8 max-w-md w-full max-h-[90vh] overflow-y-auto"
          >
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold text-gray-900">Apply for {selectedJob?.title}</h3>
              <button
                onClick={() => setShowForm(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                ✕
              </button>
            </div>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                <input
                  type="tel"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Resume/CV</label>
                <input
                  type="file"
                  accept=".pdf,.doc,.docx"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Cover Letter</label>
                <textarea
                  rows="4"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Tell us why you're interested in this position..."
                ></textarea>
              </div>
              <div className="flex gap-4 pt-4">
                <div className="flex-1">
                  <CustomButton
                    text="Cancel"
                    primaryColor="transparent"
                    secondaryColor="#f3f4f6"
                    borderColor="#d1d5db"
                    textColor="#374151"
                    width="100%"
                    height="40px"
                    fontSize="14px"
                    onClick={() => setShowForm(false)}
                  />
                </div>
                <div className="flex-1">
                  <CustomButton
                    text="Submit Application"
                    primaryColor="#2563eb"
                    secondaryColor="#1d4ed8"
                    borderColor="#2563eb"
                    textColor="#fff"
                    width="100%"
                    height="40px"
                    fontSize="14px"
                  />
                </div>
              </div>
            </form>
          </motion.div>
        </div>
      )}
    </div>
  )
}

export default Career 