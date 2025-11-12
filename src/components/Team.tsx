'use client'

import { motion } from 'framer-motion'
import { useRef } from 'react'
import { useInView } from 'framer-motion'
import Image from 'next/image'

const Team = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const teamMembers = [
    {
      name: 'Prof. Naveen Mathad',
      designation: 'Co-ordinator - CSE Department',
      image: '/team/coordinator.jpg',
      borderColor: 'border-cyan-400',
      textColor: 'text-cyan-400',
      shadowColor: 'shadow-cyan-400/50',
      bgColor: 'from-cyan-400/30',
      iconColor: 'text-cyan-400',
      underlineColor: 'bg-cyan-400',
    },
    {
      name: 'Prof. Manjunath S. G.',
      designation: 'Head of Department - CSE Department',
      image: '/team/hod.jpg',
      borderColor: 'border-pink-400',
      textColor: 'text-pink-400',
      shadowColor: 'shadow-pink-400/50',
      bgColor: 'from-pink-400/30',
      iconColor: 'text-pink-400',
      underlineColor: 'bg-pink-400',
    },
    {
      name: 'Er. Amit Deshpande',
      designation: 'Chief Guest - Co Founder - algorithms365',
      image: '/team/guest.jpg',
      borderColor: 'border-purple-400',
      textColor: 'text-purple-400',
      shadowColor: 'shadow-purple-400/50',
      bgColor: 'from-purple-400/30',
      iconColor: 'text-purple-400',
      underlineColor: 'bg-purple-400',
    },
    {
      name: 'Dr. Shravankumar B. Kerur',
      designation: 'President - Principal of BGMIT',
      image: '/team/principal.jpg',
      borderColor: 'border-yellow-400',
      textColor: 'text-yellow-400',
      shadowColor: 'shadow-yellow-400/50',
      bgColor: 'from-yellow-400/30',
      iconColor: 'text-yellow-400',
      underlineColor: 'bg-yellow-400',
    },
  ]

  return (
    <section id="team" className="py-20 relative" ref={ref}>
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-bebas mb-3 tracking-wider">
            <span className="bg-gradient-to-r from-cyan-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
              Navasparsha-2k25
            </span>
          </h2>
          <div className="w-20 h-0.5 bg-gradient-to-r from-cyan-400 via-pink-400 to-purple-400 mx-auto mb-6"></div>
          <p className="text-sm md:text-base text-gray-300 max-w-2xl mx-auto leading-relaxed font-space">
            Meet the <span className="text-cyan-400 font-semibold">amazing people</span> making this event possible
          </p>
        </motion.div>

        {/* Team Grid */}
        <div className="grid grid-cols-4 gap-4 md:gap-6 lg:gap-8 max-w-6xl mx-auto">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center group cursor-pointer"
            >
              {/* Name */}
              <h3 className={`text-[10px] sm:text-xs md:text-sm lg:text-base xl:text-lg font-bold text-center mb-1 md:mb-2 font-space ${member.textColor} group-hover:scale-105 transition-transform leading-tight`}>
                {member.name}
              </h3>

              {/* Designation */}
              <p className="text-[8px] sm:text-[10px] md:text-xs lg:text-sm text-gray-400 text-center font-space leading-tight px-1">
                {member.designation}
              </p>

              {/* Decorative underline */}
              <div className={`w-8 sm:w-12 md:w-16 h-0.5 md:h-1 ${member.underlineColor} mt-2 md:mt-3 opacity-60 group-hover:opacity-100 transition-all rounded-full`}></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Team
