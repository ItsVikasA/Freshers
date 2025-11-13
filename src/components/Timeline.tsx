'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { Clock, Users, Music, Gamepad2, UtensilsCrossed, Sparkles, Trophy, Camera } from 'lucide-react'

const Timeline = () => {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const schedule = [
    {
      time: '10:00 AM',
      title: 'Event Beginning',
      description: 'Arrival and welcome of all participants',
      icon: <Sparkles className="w-5 h-5" />,
      color: 'neon-blue',
    },
    {
      time: '10:15 AM',
      title: 'Invocation Song',
      description: 'Sacred invocation to begin the ceremony',
      icon: <Music className="w-5 h-5" />,
      color: 'neon-pink',
    },
    {
      time: '10:25 AM',
      title: 'Guest Welcoming',
      description: 'Warm welcome to our esteemed chief guest',
      icon: <Users className="w-5 h-5" />,
      color: 'neon-purple',
    },
    {
      time: '10:35 AM',
      title: 'Program Inauguration',
      description: 'Official inauguration of the freshers party',
      icon: <Sparkles className="w-5 h-5" />,
      color: 'neon-yellow',
    },
    {
      time: '10:50 AM',
      title: 'Fresher Welcome',
      description: 'Special welcome address for all freshers',
      icon: <Users className="w-5 h-5" />,
      color: 'neon-blue',
    },
    {
      time: '11:05 AM',
      title: 'Guest Introduction',
      description: 'Introduction of the chief guest and dignitaries',
      icon: <Users className="w-5 h-5" />,
      color: 'neon-pink',
    },
    {
      time: '11:20 AM',
      title: 'Guest Talk',
      description: 'Inspiring speech by our chief guest',
      icon: <Users className="w-5 h-5" />,
      color: 'neon-purple',
    },
    {
      time: '11:45 AM',
      title: 'Presidential Talk',
      description: 'Address by the association president',
      icon: <Users className="w-5 h-5" />,
      color: 'neon-yellow',
    },
    {
      time: '12:05 PM',
      title: 'Felicitation',
      description: 'Honoring our guests with mementos',
      icon: <Trophy className="w-5 h-5" />,
      color: 'neon-blue',
    },
    {
      time: '12:20 PM',
      title: 'Vote of Thanks',
      description: 'Expressing gratitude to all attendees',
      icon: <Sparkles className="w-5 h-5" />,
      color: 'neon-pink',
    },
  ]

  const TimelineItem = ({ item, index }: { item: any; index: number }) => {
    const itemRef = useRef(null)
    const { scrollYProgress: itemProgress } = useScroll({
      target: itemRef,
      offset: ["start end", "center center"]
    })

    const opacity = useTransform(itemProgress, [0, 0.5], [0, 1])
    const scale = useTransform(itemProgress, [0, 0.5], [0.8, 1])
    const x = useTransform(itemProgress, [0, 0.5], [index % 2 === 0 ? -100 : 100, 0])

    return (
      <motion.div
        ref={itemRef}
        style={{ opacity, scale, x }}
        className="relative mb-8"
      >
        <div className={`flex items-center gap-4 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
          {/* Time Badge */}
          <motion.div
            className={`cyber-card px-4 py-2 rounded-xl border-2 border-${item.color}/50 min-w-[100px] text-center`}
            whileHover={{ scale: 1.05 }}
          >
            <Clock className={`w-3 h-3 text-${item.color} mx-auto mb-1`} />
            <span className={`text-${item.color} font-bold font-bebas text-lg tracking-wider`}>
              {item.time}
            </span>
          </motion.div>

          {/* Connector Line */}
          <motion.div
            className={`h-0.5 flex-1 bg-gradient-to-r ${
              index % 2 === 0 
                ? `from-${item.color}/50 to-transparent` 
                : `from-transparent to-${item.color}/50`
            }`}
            initial={{ scaleX: 0 }}
            style={{ 
              scaleX: useTransform(itemProgress, [0, 0.5], [0, 1]),
              transformOrigin: index % 2 === 0 ? 'left' : 'right'
            }}
          />

          {/* Event Card */}
          <motion.div
            className={`cyber-card p-4 rounded-xl border-2 border-${item.color}/30 hover:border-${item.color}/60 transition-all flex-1 max-w-md group`}
            whileHover={{ scale: 1.02, y: -5 }}
          >
            <div className="flex items-start gap-3">
              <div className={`text-${item.color} group-hover:scale-110 transition-transform mt-1`}>
                {item.icon}
              </div>
              <div className="flex-1">
                <h3 className={`text-base md:text-lg font-bold mb-1 font-space text-${item.color} uppercase tracking-wide`}>
                  {item.title}
                </h3>
                <p className="text-gray-400 text-xs md:text-sm font-space">
                  {item.description}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    )
  }

  return (
    <section id="timeline" className="py-20 relative overflow-hidden" ref={containerRef}>
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-bebas mb-3 tracking-wider">
            <span className="bg-gradient-to-r from-neon-blue via-neon-pink to-neon-purple bg-clip-text text-transparent">
              EVENT TIMELINE
            </span>
          </h2>
          <div className="w-20 h-0.5 bg-gradient-to-r from-neon-blue to-neon-pink mx-auto mb-6"></div>
          <p className="text-sm md:text-base text-gray-300 max-w-2xl mx-auto font-space">
            Scroll down to explore the <span className="text-neon-pink">exciting events</span> throughout the evening
          </p>
        </motion.div>

        {/* Scroll Progress Indicator */}
        <motion.div 
          className="max-w-4xl mx-auto mb-8 relative"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="h-1 bg-gray-800 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-neon-blue via-neon-pink to-neon-purple"
              style={{ scaleX: scrollYProgress, transformOrigin: "left" }}
            />
          </div>
          <p className="text-center text-xs text-gray-500 mt-2 font-space">
            Keep scrolling to reveal more events ⬇️
          </p>
        </motion.div>

        {/* Timeline Items with Vertical Road Line */}
        <div className="max-w-4xl mx-auto relative">
          {/* Vertical Road Line - Center for both mobile and desktop */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 -translate-x-1/2">
            {/* Gradient Road */}
            <div className="absolute inset-0 bg-gradient-to-b from-neon-blue via-neon-pink to-neon-purple opacity-40"></div>
            {/* Animated Dots */}
            <motion.div
              className="absolute inset-0 bg-repeat-y"
              style={{
                backgroundImage: 'linear-gradient(to bottom, transparent 0%, transparent 40%, rgba(0,217,255,0.8) 40%, rgba(0,217,255,0.8) 60%, transparent 60%, transparent 100%)',
                backgroundSize: '2px 30px',
              }}
              animate={{ backgroundPositionY: ['0px', '30px'] }}
              transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
            />
          </div>

          <div className="space-y-0">
            {schedule.map((item, index) => (
              <div key={index} className="relative">
                {/* Center Dot on Road */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-gradient-to-br from-neon-blue to-neon-pink border-2 border-white shadow-lg shadow-neon-blue/50 z-10"></div>
                
                <TimelineItem item={item} index={index} />
              </div>
            ))}
          </div>
        </div>

        {/* Note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-12 text-center"
        >
          <p className="text-gray-400 text-xs md:text-sm font-space">
            * Timeline is tentative and subject to change
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default Timeline
