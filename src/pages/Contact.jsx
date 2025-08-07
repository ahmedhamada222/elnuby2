import { useState } from 'react'
import { motion } from 'framer-motion'
import CustomButton from '../components/CustomButton'
import { Link } from 'react-router-dom'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })

  const contactInfo = {
    address: '١٢٣ ش حسن المأمون – المنطقة السادسة – مدينة نصر – القاهرة',
    phone: '01153494444',
    landline: '0223546465',
    email: 'info@elnuby.com',
    hours: 'Monday - Friday: 8:00 AM - 6:00 PM'
  }

  const officeLocations = [
    {
      city: 'القاهرة',
      address: '١٢٣ ش حسن المأمون – المنطقة السادسة – مدينة نصر – القاهرة',
      country: 'مصر'
    },
    {
      city: 'الرياض',
      address: '2537 شارع رقم 78, حي العليا, مدينة الرياض, المملكة العربية السعودية',
      country: 'السعودية'
    },
    {
      city: 'الأقصر',
      address: 'ش المستشفى الدولى امام الاسعاف – الأقصر',
      country: 'مصر'
    },
    {
      city: 'أسوان',
      address: 'شارع النفق . بجوار مطعم ابو عثمان عمارة محمد السنى – أسوان',
      country: 'مصر'
    }
  ]

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white overflow-x-hidden">
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
              Get In Touch
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed"
            >
              Ready to start your next project? Let's discuss how we can bring your vision to life
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Contact Cards Section */}
      <section className="py-20 -mt-16 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: "📍",
                title: "Visit Us",
                description: "١٢٣ ش حسن المأمون – المنطقة السادسة – مدينة نصر – القاهرة",
                color: "from-blue-500 to-blue-600"
              },
              {
                icon: "📞",
                title: "Call Us",
                description: "01153494444",
                color: "from-green-500 to-green-600"
              },
              {
                icon: "✉️",
                title: "Email Us",
                description: "info@elnuby.com",
                color: "from-orange-500 to-orange-600"
              }
            ].map((card, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${card.color} flex items-center justify-center text-2xl mb-6`}>
                  {card.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{card.title}</h3>
                <p className="text-gray-600">{card.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-xl p-8"
            >
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Send us a Message
                </h2>
                <p className="text-gray-600">
                  Fill out the form below and we'll get back to you within 24 hours
                </p>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
                    placeholder="Enter your phone number"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
                    placeholder="What's this about?"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>
                <CustomButton
                  text="Send Message"
                  primaryColor="#EC8823"
                  secondaryColor="#132037"
                  borderColor="#EC8823"
                  textColor="#fff"
                  width="100%"
                  height="56px"
                  fontSize="16px"
                />
              </form>
            </motion.div>

            {/* Contact Info & Image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {/* Office Image */}
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <div className="aspect-video bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="text-6xl mb-4">🏢</div>
                    <h3 className="text-2xl font-bold mb-2">Elnuby Group Office</h3>
                    <p className="text-white/90">Modern workspace for innovation</p>
                  </div>
                </div>
              </div>

              {/* Contact Details */}
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Contact Information
                </h3>
                <div className="space-y-6">
                  {[
                    {
                      icon: "📍",
                      title: "Address",
                      content: "Elnuby Group Building, 123 Hassan El Maamoun St, Nasr City, Cairo",
                      color: "text-blue-600"
                    },
                    {
                      icon: "📞",
                      title: "Phone",
                      content: "01153494444",
                      color: "text-green-600"
                    },
                    {
                      icon: "✉️",
                      title: "Email",
                      content: "info@elnuby.com",
                      color: "text-orange-600"
                    },
                    {
                      icon: "🕒",
                      title: "Business Hours",
                      content: "Monday - Friday: 8:00 AM - 6:00 PM",
                      color: "text-purple-600"
                    }
                  ].map((item, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className={`text-2xl ${item.color}`}>{item.icon}</div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">{item.title}</h4>
                        <p className="text-gray-600">{item.content}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Social Media */}
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Follow Us</h4>
                  <div className="flex space-x-4">
                    {[
                      { name: 'LinkedIn', icon: '💼', href: '#' },
                      { name: 'Twitter', icon: '🐦', href: '#' },
                      { name: 'Facebook', icon: '📘', href: '#' },
                      { name: 'Instagram', icon: '📷', href: '#' }
                    ].map((social, index) => (
                      <motion.a
                        key={index}
                        href={social.href}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-100 hover:bg-primary transition-all duration-300 text-xl hover:scale-110"
                        title={social.name}
                      >
                        {social.icon}
                      </motion.a>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map & Location Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Find Our Office
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Located in the heart of Nasr City, our office is easily accessible and ready to welcome you
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-xl overflow-hidden"
          >
            <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
              <div className="text-center">
                <div className="text-8xl mb-6">🗺️</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Interactive Map</h3>
                <p className="text-gray-600 mb-4">123 Hassan El Maamoun St, Nasr City, Cairo</p>
                <Link to="/about" className="inline-block">
                  <CustomButton
                    text="Get Directions"
                    primaryColor="#EC8823"
                    secondaryColor="#132037"
                    borderColor="#EC8823"
                    textColor="#fff"
                    width="180px"
                    height="48px"
                    fontSize="14px"
                  />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Contact