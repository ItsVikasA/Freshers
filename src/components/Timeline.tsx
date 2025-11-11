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
      time: '6:00 PM',
      title: 'Welcome & Registration',
      description: 'Check-in and receive your event kit',
      icon: <Users className="w-5 h-5" />,
      color: 'neon-blue',
    },
    {
      time: '6:30 PM',
      title: 'Opening Ceremony',
      description: 'Welcome address by faculty and seniors',
      icon: <Sparkles className="w-5 h-5" />,
      color: 'neon-pink',
    },
    {
      time: '7:00 PM',
      title: 'Cultural Performances',
      description: 'Mesmerizing dance and music performances',
      icon: <Music className="w-5 h-5" />,
      color: 'neon-purple',
    },
    {
      time: '8:00 PM',
      title: 'Fun Games & Activities',
      description: 'Interactive games with exciting prizes',
      icon: <Gamepad2 className="w-5 h-5" />,
      color: 'neon-yellow',
    },
    {
      time: '8:45 PM',
      title: 'Dinner Break',
      description: 'Delicious food and refreshments',
      icon: <UtensilsCrossed className="w-5 h-5" />,
      color: 'neon-blue',
    },
    {
      time: '9:30 PM',
      title: 'DJ Night',
      description: 'Dance the night away with amazing music',
      icon: <Music className="w-5 h-5" />,
      color: 'neon-pink',
    },
    {
      time: '10:30 PM',
      title: 'Prize Distribution',
      description: 'Awards for winners and participants',
      icon: <Trophy className="w-5 h-5" />,
      color: 'neon-purple',
    },
    {
      time: '11:00 PM',
      title: 'Closing & Photo Session',
      description: 'Group photos and fond farewell',
      icon: <Camera className="w-5 h-5" />,
      color: 'neon-yellow',
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

        {/* Timeline Items */}
        <div className="max-w-4xl mx-auto space-y-0">
          {schedule.map((item, index) => (
            <TimelineItem key={index} item={item} index={index} />
          ))}
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
