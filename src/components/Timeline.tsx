'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const Timeline = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const schedule = [
    {
      time: '6:00 PM',
      title: 'Welcome & Registration',
      description: 'Check-in and receive your event kit',
    },
    {
      time: '6:30 PM',
      title: 'Opening Ceremony',
      description: 'Welcome address by faculty and seniors',
    },
    {
      time: '7:00 PM',
      title: 'Cultural Performances',
      description: 'Mesmerizing dance and music performances',
    },
    {
      time: '8:00 PM',
      title: 'Fun Games & Activities',
      description: 'Interactive games with exciting prizes',
    },
    {
      time: '8:45 PM',
      title: 'Dinner Break',
      description: 'Delicious food and refreshments',
    },
    {
      time: '9:30 PM',
      title: 'DJ Night',
      description: 'Dance the night away with amazing music',
    },
    {
      time: '10:30 PM',
      title: 'Prize Distribution',
      description: 'Awards for winners and participants',
    },
    {
      time: '11:00 PM',
      title: 'Closing & Photo Session',
      description: 'Group photos and fond farewell',
    },
  ]

  return (
    <section id="timeline" className="py-20 relative" ref={ref}>
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
              Event Timeline
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-8"></div>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Here's what you can expect throughout the evening
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto">
          {schedule.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative pl-8 sm:pl-32 py-6 group"
            >
              {/* Timeline line */}
              {index !== schedule.length - 1 && (
                <div className="absolute left-2 sm:left-8 top-14 w-0.5 h-full bg-gradient-to-b from-primary to-secondary opacity-30"></div>
              )}

              {/* Time marker */}
              <div className="absolute left-0 sm:left-4 w-4 h-4 rounded-full bg-primary ring-4 ring-primary/20 group-hover:scale-125 transition-transform"></div>

              {/* Time */}
              <div className="hidden sm:block absolute left-12 top-6 text-right w-24">
                <span className="text-accent font-bold text-lg">{item.time}</span>
              </div>

              {/* Content */}
              <div className="glass-effect p-6 rounded-xl group-hover:scale-105 transition-transform">
                <span className="sm:hidden text-accent font-bold text-sm mb-2 block">
                  {item.time}
                </span>
                <h3 className="text-xl font-bold mb-2 text-white group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-400">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Note */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="mt-12 text-center"
        >
          <p className="text-gray-400 text-sm">
            * Timeline is tentative and subject to change. Actual timings may vary.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default Timeline
