'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter, Linkedin } from 'lucide-react'

const Contact = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const contactInfo = [
    {
      icon: <Mail className="w-8 h-8" />,
      title: 'Email',
      info: process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'cse.committee@college.edu',
      link: `mailto:${process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'cse.committee@college.edu'}`,
    },
    {
      icon: <Phone className="w-8 h-8" />,
      title: 'Phone',
      info: '+91 12345 67890',
      link: 'tel:+911234567890',
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      title: 'Location',
      info: 'CSE Department, Main Building',
      link: '#',
    },
  ]

  const organizers = [
    { name: 'Student Coordinator 1', role: 'Event Head', phone: '+91 98765 43210' },
    { name: 'Student Coordinator 2', role: 'Technical Head', phone: '+91 98765 43211' },
    { name: 'Student Coordinator 3', role: 'Creative Head', phone: '+91 98765 43212' },
  ]

  const socialLinks = [
    { icon: <Facebook className="w-6 h-6" />, name: 'Facebook', url: '#' },
    { icon: <Instagram className="w-6 h-6" />, name: 'Instagram', url: '#' },
    { icon: <Twitter className="w-6 h-6" />, name: 'Twitter', url: '#' },
    { icon: <Linkedin className="w-6 h-6" />, name: 'LinkedIn', url: '#' },
  ]

  return (
    <section id="contact" className="py-20 relative" ref={ref}>
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-orbitron mb-4">
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Contact Us
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-8"></div>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Have questions? Reach out to us!
          </p>
        </motion.div>

        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {contactInfo.map((contact, index) => (
            <motion.a
              key={index}
              href={contact.link}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-effect p-6 rounded-xl text-center hover:scale-105 transition-transform group"
            >
              <div className="text-primary group-hover:text-accent transition-colors mb-4 flex justify-center">
                {contact.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{contact.title}</h3>
              <p className="text-gray-300">{contact.info}</p>
            </motion.a>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Organizing Committee */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="glass-effect p-8 rounded-xl"
          >
            <h3 className="text-2xl font-bold mb-6 text-accent">Organizing Committee</h3>
            <div className="space-y-4">
              {organizers.map((organizer, index) => (
                <div key={index} className="border-l-4 border-primary pl-4">
                  <h4 className="font-bold text-white">{organizer.name}</h4>
                  <p className="text-gray-400 text-sm">{organizer.role}</p>
                  <p className="text-gray-300 text-sm">{organizer.phone}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Social Media & Quick Message */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="glass-effect p-8 rounded-xl"
          >
            <h3 className="text-2xl font-bold mb-6 text-accent">Follow Us</h3>
            <p className="text-gray-400 mb-4">
              Follow us for event updates, behind-the-scenes, and more! Drop a DM if you have any questions 💬
            </p>
            <div className="flex gap-4 mb-8">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 flex items-center justify-center bg-white/10 rounded-full hover:bg-primary hover:scale-110 transition-all text-2xl"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>

            <div className="border-t border-gray-600 pt-6">
              <h4 className="font-bold mb-4">Office Hours</h4>
              <p className="text-gray-300 text-sm">Monday - Friday: 9:00 AM - 5:00 PM</p>
              <p className="text-gray-300 text-sm">Saturday: 10:00 AM - 2:00 PM</p>
              <p className="text-gray-300 text-sm">Sunday: Closed</p>
            </div>
          </motion.div>
        </div>

        {/* Note */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-12 text-center"
        >
          <p className="text-gray-400 text-sm">
            * For urgent queries, please call the organizing committee members directly.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
