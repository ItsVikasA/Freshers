'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter, Linkedin } from 'lucide-react'

const Contact = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Email',
      info: 'vikas.ambalazari@gmail.com',
      link: 'mailto:vikas.ambalazari@gmail.com',
      color: 'neon-blue',
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'Phone',
      info: '+91 70190 33666',
      link: 'tel:+917019033666',
      color: 'neon-pink',
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'Location',
      info: 'BGMIT Auditorium',
      link: '#',
      color: 'neon-purple',
    },
  ]

  const organizers = [
    { name: 'Prabhu Talikoti', role: 'Event Head', phone: '+91 73378 23233' },
    { name: 'Vikas', role: 'Technical Head', phone: '+91 70190 03366' },
    { name: 'Ompreet Hadli', role: 'Creative Head', phone: '+91 88676 16150' },
  ]

  const socialLinks = [
    { icon: <Facebook className="w-5 h-5" />, name: 'Facebook', url: 'https://www.facebook.com/p/Cse-Bgmit-100072360492372/', color: 'neon-blue' },
    { icon: <Instagram className="w-5 h-5" />, name: 'Instagram', url: '#', color: 'neon-pink' },
    { icon: <Linkedin className="w-5 h-5" />, name: 'LinkedIn', url: '#', color: 'neon-purple' },
  ]

  return (
    <section id="contact" className="py-20 relative" ref={ref}>
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-bebas mb-3 tracking-wider">
            <span className="bg-gradient-to-r from-neon-blue via-neon-pink to-neon-purple bg-clip-text text-transparent">
              GET IN TOUCH
            </span>
          </h2>
          <div className="w-20 h-0.5 bg-gradient-to-r from-neon-blue to-neon-pink mx-auto mb-6"></div>
          <p className="text-sm md:text-base text-gray-300 max-w-2xl mx-auto font-space">
            Questions? <span className="text-neon-pink">We&apos;re here to help!</span> 💬
          </p>
        </motion.div>

        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4 mb-8 max-w-5xl mx-auto">
          {contactInfo.map((contact, index) => (
            <motion.a
              key={index}
              href={contact.link}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className={`cyber-card p-4 rounded-2xl text-center group cursor-pointer border-2 border-${contact.color}/30 hover:border-${contact.color}/60 transition-all relative overflow-hidden`}
            >
              <div className={`absolute inset-0 bg-${contact.color}/5 opacity-0 group-hover:opacity-100 transition-opacity`} />
              <div className="relative z-10">
                <div className={`text-${contact.color} mb-3 flex justify-center group-hover:scale-110 transition-transform`}>
                  {contact.icon}
                </div>
                <h3 className={`text-sm md:text-base font-bold font-space uppercase tracking-wide text-${contact.color} mb-1`}>
                  {contact.title}
                </h3>
                <p className="text-xs md:text-sm text-gray-300 font-space break-words">{contact.info}</p>
              </div>
            </motion.a>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 md:gap-4 max-w-6xl mx-auto">
          {/* Organizing Committee */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="cyber-card p-5 rounded-2xl border-2 border-neon-blue/30"
          >
            <h3 className="text-lg md:text-xl font-bold mb-4 font-bebas tracking-wider">
              <span className="text-neon-blue">ORGANIZING TEAM</span>
            </h3>
            <div className="space-y-3">
              {organizers.map((organizer, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="border-l-2 border-neon-blue/50 pl-3 hover:border-neon-blue hover:pl-4 transition-all"
                >
                  <h4 className="font-bold text-white text-xs md:text-sm font-space">{organizer.name}</h4>
                  <p className="text-neon-blue/70 text-[10px] md:text-xs">{organizer.role}</p>
                  <p className="text-gray-300 text-[10px] md:text-xs font-space">{organizer.phone}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Social Media & Quick Message */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="cyber-card p-5 rounded-2xl border-2 border-neon-pink/30"
          >
            <h3 className="text-lg md:text-xl font-bold mb-3 font-bebas tracking-wider">
              <span className="text-neon-pink">CONNECT WITH US</span>
            </h3>
            <p className="text-xs md:text-sm text-gray-400 mb-4 font-space">
              Follow for <span className="text-neon-pink">updates</span>, <span className="text-neon-blue">BTS</span>, and more! 💬
            </p>
            <div className="flex gap-2 md:gap-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -3 }}
                  className={`w-9 h-9 md:w-10 md:h-10 flex items-center justify-center cyber-card rounded-full border border-${social.color}/30 hover:border-${social.color} text-${social.color} transition-all`}
                  aria-label={social.name}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Note */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-8 text-center max-w-4xl mx-auto"
        >
          <p className="text-gray-400 text-[10px] md:text-xs font-space">
            <span className="text-neon-yellow">⚡</span> For urgent queries, call the organizing committee directly
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
