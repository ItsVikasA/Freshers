'use client'

import { motion } from 'framer-motion'
import Countdown from 'react-countdown'
import { Link as ScrollLink } from 'react-scroll'
import { Calendar, MapPin } from 'lucide-react'

const Hero = () => {
  // Event date - November 14, 2025 at 9:00 AM
  const eventDate = process.env.NEXT_PUBLIC_EVENT_DATE || '2025-11-14T09:00:00'

  const renderer = ({ days, hours, minutes, seconds, completed }: any) => {
    if (completed) {
      return (
        <motion.div 
          className="text-4xl md:text-6xl font-bold"
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            Event is Live! 🎉
          </span>
        </motion.div>
      )
    } else {
      return (
        <div className="flex gap-2 sm:gap-3 md:gap-6 justify-center flex-wrap">
          {[
            { value: days, label: 'Days', color: 'from-primary to-secondary' },
            { value: hours, label: 'Hours', color: 'from-secondary to-accent' },
            { value: minutes, label: 'Minutes', color: 'from-accent to-primary' },
            { value: seconds, label: 'Seconds', color: 'from-primary to-accent' },
          ].map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, scale: 0, rotateY: 180 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{ 
                delay: index * 0.15 + 0.5,
                type: "spring",
                stiffness: 200
              }}
              className="relative group"
            >
              {/* Glowing border effect */}
              <div className={`absolute -inset-0.5 bg-gradient-to-r ${item.color} rounded-2xl blur opacity-60 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse`}></div>
              
              {/* Timer box */}
              <div className="relative flex flex-col items-center bg-gray-900/90 backdrop-blur-xl px-3 sm:px-5 md:px-7 py-4 sm:py-5 md:py-6 rounded-2xl border border-white/10 hover:border-white/30 transition-all duration-300 hover:scale-110 hover:-translate-y-2">
                {/* Number with animated gradient */}
                <motion.span 
                  className={`text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold font-orbitron bg-gradient-to-r ${item.color} bg-clip-text text-transparent mb-1 sm:mb-2`}
                  animate={{ 
                    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                  }}
                  transition={{ 
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                >
                  {String(item.value).padStart(2, '0')}
                </motion.span>
                
                {/* Label */}
                <span className="text-[10px] sm:text-xs md:text-sm uppercase tracking-wider text-gray-400 font-semibold">
                  {item.label}
                </span>
                
                {/* Decorative dots */}
                <div className="absolute -top-1 -right-1 w-2 h-2 bg-gradient-to-r from-primary to-secondary rounded-full animate-ping"></div>
                <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-gradient-to-r from-accent to-primary rounded-full animate-ping" style={{ animationDelay: '0.5s' }}></div>
              </div>
            </motion.div>
          ))}
        </div>
      )
    }
  }

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-neon-blue/10 via-neon-pink/10 to-neon-purple/10" />
      <div className="absolute inset-0 bg-neon-glow opacity-50" />
      
      <div className="container mx-auto px-4 z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Event Title */}
          <motion.h1
            className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold font-bebas mb-6 px-4 tracking-wider"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <span className="bg-gradient-to-r from-neon-blue via-neon-pink to-neon-purple bg-clip-text text-transparent neon-text animate-neon-pulse">
              CSE FRESHERS
            </span>
            <br />
            <span className="text-neon-yellow text-5xl sm:text-6xl md:text-7xl lg:text-8xl neon-text" style={{ textShadow: '0 0 20px #FFD700, 0 0 40px #FFD700' }}>
              PARTY 2025
            </span>
          </motion.h1>

          {/* Tagline */}
          <motion.p
            className="text-base sm:text-lg md:text-xl lg:text-2xl font-space text-gray-300 mb-8 max-w-3xl mx-auto px-4 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <span className="text-neon-blue font-semibold">Join us</span> for an{' '}
            <span className="text-neon-pink font-semibold">unforgettable</span> evening of{' '}
            <span className="text-neon-purple font-semibold">fun, music,</span> and{' '}
            <span className="text-neon-yellow font-semibold">memories!</span>
            <br className="hidden sm:block" />
            <span className="sm:inline block mt-2 sm:mt-0">✨ All CSE freshers are invited! �</span>
          </motion.p>

          {/* Quick Info */}
          <motion.div
            className="flex flex-wrap gap-3 sm:gap-4 md:gap-6 justify-center mb-8 sm:mb-12 px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <motion.div 
              className="flex items-center gap-2 cyber-card px-4 sm:px-5 py-3 rounded-2xl border-2 border-neon-blue/50"
              whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(0,217,255,0.5)' }}
            >
              <Calendar className="text-neon-blue w-5 h-5 sm:w-6 sm:h-6" />
              <span className="text-xs sm:text-sm md:text-base font-space font-semibold">November 14, 2025 | 9:00 AM</span>
            </motion.div>
            <motion.div 
              className="flex items-center gap-2 cyber-card px-4 sm:px-5 py-3 rounded-2xl border-2 border-neon-pink/50"
              whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(255,16,240,0.5)' }}
            >
              <MapPin className="text-neon-pink w-5 h-5 sm:w-6 sm:h-6" />
              <span className="text-xs sm:text-sm md:text-base font-space font-semibold">Auditorium</span>
            </motion.div>
          </motion.div>

          {/* Countdown Timer */}
          <motion.div
            className="mb-8 sm:mb-12 px-2 sm:px-4"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8 }}
          >
            <motion.h2 
              className="text-xl sm:text-2xl md:text-3xl font-semibold mb-6 sm:mb-8"
              animate={{ 
                textShadow: [
                  '0 0 20px rgba(147, 51, 234, 0.5)',
                  '0 0 30px rgba(59, 130, 246, 0.5)',
                  '0 0 20px rgba(147, 51, 234, 0.5)',
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                ⏰ Event Starts In
              </span>
            </motion.h2>
            <Countdown date={eventDate} renderer={renderer} />
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center px-4"
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
              <motion.button 
                className="relative bg-gradient-to-r from-neon-blue to-neon-purple text-white font-bold font-space py-4 px-10 rounded-xl overflow-hidden group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10 text-sm sm:text-base uppercase tracking-wider">View Details</span>
                <div className="absolute inset-0 bg-gradient-to-r from-neon-pink to-neon-purple opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.button>
            </ScrollLink>
            <ScrollLink
              to="contact"
              smooth={true}
              duration={500}
              className="cursor-pointer"
            >
              <motion.button 
                className="neon-border cyber-card text-white font-bold font-space py-4 px-10 rounded-xl"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="text-sm sm:text-base uppercase tracking-wider">Contact Us</span>
              </motion.button>
            </ScrollLink>
          </motion.div>
        </motion.div>
      </div>

      {/* Floating neon elements */}
      <motion.div
        className="absolute top-20 left-10 w-32 h-32 bg-neon-blue/20 rounded-full blur-3xl"
        animate={{ 
          y: [0, -30, 0], 
          x: [0, 20, 0],
          scale: [1, 1.2, 1] 
        }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-40 h-40 bg-neon-pink/20 rounded-full blur-3xl"
        animate={{ 
          y: [0, 30, 0], 
          x: [0, -20, 0],
          scale: [1, 1.3, 1] 
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-1/2 left-1/4 w-36 h-36 bg-neon-purple/20 rounded-full blur-3xl"
        animate={{ 
          y: [0, -20, 0], 
          x: [0, 25, 0],
          scale: [1, 1.25, 1] 
        }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-1/3 right-1/4 w-28 h-28 bg-neon-yellow/15 rounded-full blur-3xl"
        animate={{ 
          y: [0, 25, 0], 
          x: [0, -15, 0],
          scale: [1, 1.15, 1] 
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
    </section>
  )
}

export default Hero
