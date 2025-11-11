'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Calendar, Clock, MapPin, Shirt, Ticket, UtensilsCrossed, Camera, Gift, Sparkles, MessageCircle } from 'lucide-react'

const EventDetails = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const details = [
    {
      icon: <Calendar className="w-8 h-8" />,
      title: 'Date',
      info: 'November 14, 2025',
      description: 'Mark your calendars!',
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: 'Time',
      info: '9:00 AM Onwards',
      description: 'Make sure to arrive on time!',
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      title: 'Venue',
      info: process.env.NEXT_PUBLIC_EVENT_VENUE || 'College Auditorium',
      description: process.env.NEXT_PUBLIC_EVENT_ADDRESS || 'Main Campus Building',
    },
    {
      icon: <Shirt className="w-8 h-8" />,
      title: 'Dress Code',
      info: 'Smart Casual / Ethnic',
      description: 'Dress to impress!',
    },
  ]

  return (
    <section id="details" className="py-20 relative" ref={ref}>
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
              Event Details
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-8"></div>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Mark your calendars! Here&apos;s everything you need to know about the event.
          </p>
        </motion.div>

        {/* Details Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {details.map((detail, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-effect p-5 sm:p-6 rounded-xl hover:scale-105 transition-transform cursor-pointer group"
            >
              <div className="text-primary group-hover:text-accent transition-colors mb-3 sm:mb-4 flex justify-center">
                {detail.icon}
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-1.5 sm:mb-2 text-center">{detail.title}</h3>
              <p className="text-xl sm:text-2xl font-bold text-primary mb-1.5 sm:mb-2 text-center">
                {detail.info}
              </p>
              <p className="text-gray-400 text-center text-xs sm:text-sm">{detail.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Important Information */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="glass-effect p-5 sm:p-8 rounded-xl max-w-4xl mx-auto"
        >
          <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-accent text-center">Important Information</h3>
          <ul className="space-y-3 sm:space-y-4 text-gray-300">
            <li className="flex items-start gap-2 sm:gap-3">
              <Ticket className="w-4 h-4 sm:w-5 sm:h-5 text-primary mt-0.5 flex-shrink-0" />
              <span className="text-sm sm:text-base"><strong>FREE Entry</strong> - Just bring your college ID card</span>
            </li>
            <li className="flex items-start gap-2 sm:gap-3">
              <UtensilsCrossed className="w-4 h-4 sm:w-5 sm:h-5 text-accent mt-0.5 flex-shrink-0" />
              <span className="text-sm sm:text-base"><strong>Food & Refreshments</strong> included - Come hungry!</span>
            </li>
            <li className="flex items-start gap-2 sm:gap-3">
              <Camera className="w-4 h-4 sm:w-5 sm:h-5 text-secondary mt-0.5 flex-shrink-0" />
              <span className="text-sm sm:text-base"><strong>Professional Photography</strong> - Capture your memories</span>
            </li>
            <li className="flex items-start gap-2 sm:gap-3">
              <Gift className="w-4 h-4 sm:w-5 sm:h-5 text-primary mt-0.5 flex-shrink-0" />
              <span className="text-sm sm:text-base"><strong>Prizes & Surprises</strong> - Participate in games to win</span>
            </li>
            <li className="flex items-start gap-2 sm:gap-3">
              <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-accent mt-0.5 flex-shrink-0" />
              <span className="text-sm sm:text-base"><strong>Dress to Impress</strong> - Smart casual or ethnic wear</span>
            </li>
            <li className="flex items-start gap-2 sm:gap-3">
              <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 text-secondary mt-0.5 flex-shrink-0" />
              <span className="text-sm sm:text-base"><strong>Questions?</strong> Contact the organizing committee below</span>
            </li>
          </ul>
        </motion.div>

        {/* Google Maps */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-8 sm:mt-12 glass-effect p-3 sm:p-4 rounded-xl max-w-4xl mx-auto overflow-hidden"
        >
          <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-center text-primary">Location</h3>
          <div className="relative w-full h-[250px] sm:h-[350px] md:h-[450px] rounded-lg overflow-hidden">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3828.700573775731!2d75.28514787514162!3d16.33823668438089!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc7403a4c215e2f%3A0xfb587de72521ec79!2sBiluru%20Gurubasav%20Mahaswamiji%20Institute%20of%20Technology%2C%20Mudhol!5e0!3m2!1sen!2sin!4v1762872033744!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="BGMIT College Location"
            />
          </div>
          <p className="text-center text-gray-400 mt-3 sm:mt-4 text-xs sm:text-sm">
            Biluru Gurubasav Mahaswamiji Institute of Technology, Mudhol
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default EventDetails
