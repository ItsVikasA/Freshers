'use client'

import { motion } from 'framer-motion'
import Countdown from 'react-countdown'
import { Link as ScrollLink } from 'react-scroll'
import { Calendar, MapPin } from 'lucide-react'

const Hero = () => {
  // Event date - Update this to your actual event date
  const eventDate = process.env.NEXT_PUBLIC_EVENT_DATE || '2025-12-31T18:00:00'

  const renderer = ({ days, hours, minutes, seconds, completed }: any) => {
    if (completed) {
      return <span className="text-4xl font-bold">Event is Live! 🎉</span>
    } else {
      return (
        <div className="flex gap-4 md:gap-8 justify-center">
          {[
            { value: days, label: 'Days' },
            { value: hours, label: 'Hours' },
            { value: minutes, label: 'Minutes' },
            { value: seconds, label: 'Seconds' },
          ].map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 + 0.5 }}
              className="flex flex-col items-center"
            >
              <div className="glass-effect px-4 md:px-6 py-3 md:py-4 rounded-lg">
                <span className="text-3xl md:text-5xl font-bold font-orbitron text-primary">
                  {item.value}
                </span>
              </div>
              <span className="text-sm md:text-base text-gray-400 mt-2">
                {item.label}
              </span>
            </motion.div>
          ))}
        </div>
      )
    }
  }

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 animate-pulse-slow" />
      
      <div className="container mx-auto px-4 z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Event Title */}
          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold font-orbitron mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              CSE Freshers Party
            </span>
            <br />
            <span className="text-white text-5xl md:text-6xl">2025</span>
          </motion.h1>

          {/* Tagline */}
          <motion.p
            className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Join us for an unforgettable evening of fun, music, and memories!
            <br />
            All CSE freshers are invited! 🎉
          </motion.p>

          {/* Quick Info */}
          <motion.div
            className="flex flex-wrap gap-6 justify-center mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <div className="flex items-center gap-2 glass-effect px-4 py-2 rounded-full">
              <FaCalendarAlt className="text-primary" />
              <span className="text-sm md:text-base">Date TBA</span>
            </div>
            <div className="flex items-center gap-2 glass-effect px-4 py-2 rounded-full">
              <FaMapMarkerAlt className="text-accent" />
              <span className="text-sm md:text-base">Venue TBA</span>
            </div>
          </motion.div>

          {/* Countdown Timer */}
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8 }}
          >
            <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-gray-200">
              Event Starts In
            </h2>
            <Countdown date={eventDate} renderer={renderer} />
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
          >
            <ScrollLink
              to="details"
              smooth={true}
              duration={500}
              className="cursor-pointer"
            >
              <button className="bg-gradient-to-r from-primary to-secondary hover:from-primary/80 hover:to-secondary/80 text-white font-bold py-3 px-8 rounded-full transition-all transform hover:scale-105 shadow-lg">
                View Details
              </button>
            </ScrollLink>
            <ScrollLink
              to="contact"
              smooth={true}
              duration={500}
              className="cursor-pointer"
            >
              <button className="glass-effect hover:bg-white/20 text-white font-bold py-3 px-8 rounded-full transition-all transform hover:scale-105">
                Contact Us
              </button>
            </ScrollLink>
          </motion.div>
        </motion.div>
      </div>

      {/* Floating elements */}
      <motion.div
        className="absolute top-20 left-10 w-20 h-20 bg-primary/30 rounded-full blur-xl"
        animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-32 h-32 bg-secondary/30 rounded-full blur-xl"
        animate={{ y: [0, 20, 0], x: [0, -10, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
      />
      <motion.div
        className="absolute top-1/2 left-1/4 w-24 h-24 bg-accent/30 rounded-full blur-xl"
        animate={{ y: [0, -15, 0], x: [0, 15, 0] }}
        transition={{ duration: 7, repeat: Infinity }}
      />
    </section>
  )
}

export default Hero
