'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Gamepad2, Music, Utensils, Trophy, Camera, Laugh } from 'lucide-react'

const Highlights = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const highlights = [
    {
      icon: <Gamepad2 className="w-8 h-8" />,
      title: 'Interactive Games',
      description: 'Exciting challenges',
      features: ['Treasure Hunt', 'Musical Chairs', 'Quiz', 'Team Games'],
      color: 'neon-blue',
      size: 'large', // Will span 2 columns
    },
    {
      icon: <Music className="w-8 h-8" />,
      title: 'Live Performances',
      description: 'Amazing shows',
      features: ['Dance', 'Singing', 'Band', 'DJ'],
      color: 'neon-pink',
      size: 'large',
    },
    {
      icon: <Utensils className="w-8 h-8" />,
      title: 'Delicious Food',
      description: 'Variety of cuisines',
      features: ['Starters', 'Main Course', 'Desserts', 'Drinks'],
      color: 'neon-purple',
      size: 'small',
    },
    {
      icon: <Trophy className="w-8 h-8" />,
      title: 'Exciting Prizes',
      description: 'Win amazing rewards',
      features: ['Best Performer', 'Winners', 'Lucky Draw', 'Goodies'],
      color: 'neon-yellow',
      size: 'small',
    },
    {
      icon: <Camera className="w-8 h-8" />,
      title: 'Photo Booth',
      description: 'Capture memories',
      features: ['Photography', 'Props', 'Prints', 'Social Wall'],
      color: 'neon-blue',
      size: 'small',
    },
    {
      icon: <Laugh className="w-8 h-8" />,
      title: 'Entertainment',
      description: 'Fun activities',
      features: ['Magic Show', 'Comedy', 'Open Mic', 'Karaoke'],
      color: 'neon-pink',
      size: 'small',
    },
  ]

  return (
    <section id="highlights" className="py-20 relative" ref={ref}>
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
              EVENT HIGHLIGHTS
            </span>
          </h2>
          <div className="w-20 h-0.5 bg-gradient-to-r from-neon-blue to-neon-pink mx-auto mb-6"></div>
          <p className="text-sm md:text-base text-gray-300 max-w-2xl mx-auto font-space">
            Experience <span className="text-neon-pink">amazing performances</span>, <span className="text-neon-blue">exciting games</span>, and <span className="text-neon-yellow">unforgettable moments!</span>
          </p>
        </motion.div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 max-w-6xl mx-auto">
          {highlights.map((highlight, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className={`cyber-card p-4 rounded-2xl border-2 border-${highlight.color}/30 hover:border-${highlight.color}/60 transition-all group cursor-pointer relative overflow-hidden
                ${highlight.size === 'large' ? 'md:col-span-2 md:row-span-2' : 'col-span-1'}
              `}
            >
              {/* Background glow effect */}
              <div className={`absolute inset-0 bg-${highlight.color}/5 opacity-0 group-hover:opacity-100 transition-opacity`} />
              
              {/* Content */}
              <div className="relative z-10 h-full flex flex-col">
                {/* Icon & Title */}
                <div className="flex items-start gap-3 mb-3">
                  <div className={`text-${highlight.color} group-hover:scale-110 transition-transform flex-shrink-0`}>
                    {highlight.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className={`text-sm md:text-base font-bold font-space uppercase tracking-wide text-${highlight.color} mb-1 truncate`}>
                      {highlight.title}
                    </h3>
                    <p className="text-[10px] md:text-xs text-gray-400 font-space line-clamp-1">
                      {highlight.description}
                    </p>
                  </div>
                </div>

                {/* Features - Show more on large cards */}
                <ul className={`space-y-1 flex-1 ${highlight.size === 'large' ? 'block' : 'hidden md:block'}`}>
                  {highlight.features.slice(0, highlight.size === 'large' ? 4 : 2).map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-300 text-[10px] md:text-xs">
                      <span className={`w-1 h-1 bg-${highlight.color} rounded-full mr-2 flex-shrink-0`}></span>
                      <span className="truncate">{feature}</span>
                    </li>
                  ))}
                  {highlight.size === 'small' && highlight.features.length > 2 && (
                    <li className="text-[10px] text-gray-500 mt-1">+{highlight.features.length - 2} more</li>
                  )}
                </ul>

                {/* Hover indicator */}
                <motion.div 
                  className={`absolute bottom-2 right-2 text-${highlight.color} opacity-0 group-hover:opacity-100 transition-opacity`}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                >
                  <div className="w-6 h-6 rounded-full border-2 border-current flex items-center justify-center">
                    <span className="text-xs">→</span>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Special Note */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-10 cyber-card p-5 md:p-6 rounded-2xl max-w-4xl mx-auto text-center border-2 border-neon-purple/30"
        >
          <h3 className="text-lg md:text-xl font-bold mb-3 font-bebas tracking-wider">
            <span className="text-neon-yellow">✨ AND MORE SURPRISES!</span>
          </h3>
          <p className="text-xs md:text-sm text-gray-300 leading-relaxed font-space">
            Special guest performances, surprise acts, amazing prizes, and the chance to meet incredible people. 
            This is where your <span className="text-neon-pink font-semibold">college memories</span> begin! �
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default Highlights
