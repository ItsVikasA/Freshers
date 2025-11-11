'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Gamepad2, Music, Utensils, Trophy, Camera, Laugh } from 'lucide-react'

const Highlights = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const highlights = [
    {
      icon: <Gamepad2 className="w-12 h-12" />,
      title: 'Interactive Games',
      description: 'Participate in exciting games and challenges',
      features: ['Treasure Hunt', 'Musical Chairs', 'Quiz Competition', 'Team Building Activities'],
    },
    {
      icon: <Music className="w-12 h-12" />,
      title: 'Live Performances',
      description: 'Enjoy amazing cultural performances',
      features: ['Dance Performances', 'Solo Singing', 'Band Performance', 'DJ Night'],
    },
    {
      icon: <Utensils className="w-12 h-12" />,
      title: 'Delicious Food',
      description: 'Treat yourself to a variety of cuisines',
      features: ['Starters', 'Main Course', 'Desserts', 'Beverages'],
    },
    {
      icon: <Trophy className="w-12 h-12" />,
      title: 'Exciting Prizes',
      description: 'Win amazing prizes and awards',
      features: ['Best Performer', 'Game Winners', 'Lucky Draw', 'Goodie Bags'],
    },
    {
      icon: <Camera className="w-12 h-12" />,
      title: 'Photo Booth',
      description: 'Capture memories with friends',
      features: ['Professional Photography', 'Fun Props', 'Instant Prints', 'Social Media Wall'],
    },
    {
      icon: <Laugh className="w-12 h-12" />,
      title: 'Fun Activities',
      description: 'Various entertainment options',
      features: ['Magic Show', 'Comedy Act', 'Open Mic', 'Karaoke'],
    },
  ]

  return (
    <section id="highlights" className="py-20 relative" ref={ref}>
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
              Event Highlights
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-8"></div>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            From amazing performances to exciting games - here&apos;s what&apos;s waiting for you!
          </p>
        </motion.div>

        {/* Highlights Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {highlights.map((highlight, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-effect p-5 sm:p-6 rounded-xl hover:scale-105 transition-transform group"
            >
              <div className="text-primary group-hover:text-accent transition-colors mb-4">
                {highlight.icon}
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3">{highlight.title}</h3>
              <p className="text-sm sm:text-base text-gray-400 mb-3 sm:mb-4">{highlight.description}</p>
              <ul className="space-y-1.5 sm:space-y-2">
                {highlight.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-300 text-xs sm:text-sm">
                    <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-primary rounded-full mr-2 sm:mr-3 flex-shrink-0"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Special Note */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-12 sm:mt-16 glass-effect p-5 sm:p-8 rounded-xl max-w-4xl mx-auto text-center"
        >
          <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-accent">Special Attractions</h3>
          <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
            🎉 <strong>And that&apos;s not all!</strong> We have special guest performances, surprise acts, 
            amazing prizes for game winners, and a lot more planned. The best part? You&apos;ll get to know 
            your amazing batchmates and friendly seniors. This is where your college memories begin! 
            Don&apos;t miss out - see you there! 🌟
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default Highlights
