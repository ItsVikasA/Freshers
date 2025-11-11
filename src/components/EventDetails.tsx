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
      info: 'December 14, 2025',
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
            Mark your calendars! Here's everything you need to know about the event.
          </p>
        </motion.div>

        {/* Details Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {details.map((detail, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-effect p-6 rounded-xl hover:scale-105 transition-transform cursor-pointer group"
            >
              <div className="text-primary group-hover:text-accent transition-colors mb-4 flex justify-center">
                {detail.icon}
              </div>
              <h3 className="text-xl font-bold mb-2 text-center">{detail.title}</h3>
              <p className="text-2xl font-bold text-primary mb-2 text-center">
                {detail.info}
              </p>
              <p className="text-gray-400 text-center text-sm">{detail.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Important Information */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="glass-effect p-8 rounded-xl max-w-4xl mx-auto"
        >
          <h3 className="text-2xl font-bold mb-6 text-accent text-center">Important Information</h3>
          <ul className="space-y-4 text-gray-300">
            <li className="flex items-start gap-3">
              <Ticket className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
              <span><strong>FREE Entry</strong> - Just bring your college ID card</span>
            </li>
            <li className="flex items-start gap-3">
              <UtensilsCrossed className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
              <span><strong>Food & Refreshments</strong> included - Come hungry!</span>
            </li>
            <li className="flex items-start gap-3">
              <Camera className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
              <span><strong>Professional Photography</strong> - Capture your memories</span>
            </li>
            <li className="flex items-start gap-3">
              <Gift className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
              <span><strong>Prizes & Surprises</strong> - Participate in games to win</span>
            </li>
            <li className="flex items-start gap-3">
              <Sparkles className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
              <span><strong>Dress to Impress</strong> - Smart casual or ethnic wear</span>
            </li>
            <li className="flex items-start gap-3">
              <MessageCircle className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
              <span><strong>Questions?</strong> Contact the organizing committee below</span>
            </li>
          </ul>
        </motion.div>

        {/* Map placeholder - Replace with actual map integration */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-12 glass-effect p-4 rounded-xl max-w-4xl mx-auto h-96 flex items-center justify-center"
        >
          <div className="text-center">
            <MapPin className="w-16 h-16 text-primary mx-auto mb-4" />
            <p className="text-gray-400">
              Map integration will be added here
              <br />
              <span className="text-sm">(Google Maps / Leaflet)</span>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default EventDetails
