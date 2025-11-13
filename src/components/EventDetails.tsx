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
      info: '10:00 AM Onwards',
      description: 'Make sure to arrive on time!',
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      title: 'Venue',
      info: 'Auditorium',
      description: 'BGMIT College Mantur Road, Mudhol, Bagalkot',
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
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-bebas mb-3 tracking-wider">
            <span className="bg-gradient-to-r from-neon-blue via-neon-pink to-neon-purple bg-clip-text text-transparent">
              EVENT DETAILS
            </span>
          </h2>
          <div className="w-20 h-0.5 bg-gradient-to-r from-neon-blue to-neon-pink mx-auto mb-6"></div>
          <p className="text-sm md:text-base text-gray-300 max-w-2xl mx-auto font-space">
            Mark your calendars! Here&apos;s everything you need to know.
          </p>
        </motion.div>

        {/* Details Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 mb-10 max-w-5xl mx-auto">
          {details.map((detail, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.3, delay: index * 0.08 }}
              className="cyber-card p-4 rounded-xl hover:scale-105 transition-all cursor-pointer group border-2 border-neon-pink/20 hover:border-neon-blue/50"
            >
              <div className="text-neon-pink group-hover:text-neon-blue transition-colors mb-2 flex justify-center">
                {detail.icon}
              </div>
              <h3 className="text-xs md:text-sm font-bold mb-1 text-center font-space uppercase tracking-wide">{detail.title}</h3>
              <p className="text-base md:text-lg font-bold text-neon-blue mb-1 text-center font-bebas tracking-wider">
                {detail.info}
              </p>
              <p className="text-gray-400 text-center text-[10px] md:text-xs">{detail.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Important Information */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="cyber-card p-5 md:p-6 rounded-xl max-w-3xl mx-auto border-2 border-neon-blue/30"
        >
          <h3 className="text-lg md:text-xl font-bold mb-4 font-bebas tracking-wider text-center">
            <span className="text-neon-pink">IMPORTANT INFO</span>
          </h3>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-gray-300">
            <li className="flex items-start gap-2">
              <Ticket className="w-4 h-4 text-neon-blue mt-0.5 flex-shrink-0" />
              <span className="text-xs md:text-sm font-space"><strong className="text-neon-blue">FREE Entry</strong> - Bring college ID</span>
            </li>
            <li className="flex items-start gap-2">
              <UtensilsCrossed className="w-4 h-4 text-neon-pink mt-0.5 flex-shrink-0" />
              <span className="text-xs md:text-sm font-space"><strong className="text-neon-pink">Food</strong> included</span>
            </li>
            <li className="flex items-start gap-2">
              <Camera className="w-4 h-4 text-neon-purple mt-0.5 flex-shrink-0" />
              <span className="text-xs md:text-sm font-space"><strong className="text-neon-purple">Photography</strong> available</span>
            </li>
            <li className="flex items-start gap-2">
              <Gift className="w-4 h-4 text-neon-yellow mt-0.5 flex-shrink-0" />
              <span className="text-xs md:text-sm font-space"><strong className="text-neon-yellow">Prizes</strong> to win</span>
            </li>
            <li className="flex items-start gap-2">
              <Sparkles className="w-4 h-4 text-neon-blue mt-0.5 flex-shrink-0" />
              <span className="text-xs md:text-sm font-space"><strong className="text-neon-blue">Dress</strong> smart casual</span>
            </li>
            <li className="flex items-start gap-2">
              <MessageCircle className="w-4 h-4 text-neon-pink mt-0.5 flex-shrink-0" />
              <span className="text-xs md:text-sm font-space"><strong className="text-neon-pink">Questions?</strong> Contact us</span>
            </li>
          </ul>
        </motion.div>

        {/* Google Maps */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-8 cyber-card p-3 md:p-4 rounded-xl max-w-3xl mx-auto overflow-hidden border-2 border-neon-purple/30"
        >
          <h3 className="text-lg md:text-xl font-bold mb-3 text-center font-bebas tracking-wider">
            <span className="text-neon-yellow">VENUE LOCATION</span>
          </h3>
          <div className="relative w-full h-[200px] sm:h-[280px] md:h-[320px] rounded-lg overflow-hidden border border-neon-blue/30">
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
          <p className="text-center text-gray-400 mt-3 text-[10px] md:text-xs font-space">
            BGMIT College, Mudhol
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default EventDetails
