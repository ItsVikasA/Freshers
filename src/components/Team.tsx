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
      name: 'Dr. Principal Name',
      designation: 'Principal',
      image: '/team/principal.jpg',
      color: 'neon-blue',
    },
    {
      name: 'Dr. HOD Name',
      designation: 'HOD - CSE Department',
      image: '/team/hod.jpg',
      color: 'neon-pink',
    },
    {
      name: 'Chief Guest Name',
      designation: 'Chief Guest',
      image: '/team/guest.jpg',
      color: 'neon-purple',
    },
    {
      name: 'Coordinator Name',
      designation: 'Association Coordinator',
      image: '/team/coordinator.jpg',
      color: 'neon-yellow',
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
            <span className="bg-gradient-to-r from-neon-blue via-neon-pink to-neon-purple bg-clip-text text-transparent">
              OUR TEAM
            </span>
          </h2>
          <div className="w-20 h-0.5 bg-gradient-to-r from-neon-blue to-neon-pink mx-auto mb-6"></div>
          <p className="text-sm md:text-base text-gray-300 max-w-2xl mx-auto leading-relaxed font-space">
            Meet the <span className="text-neon-blue font-semibold">amazing people</span> making this event possible
          </p>
        </motion.div>

        {/* Team Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 max-w-5xl mx-auto">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8, y: 30 }}
              animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center group cursor-pointer"
            >
              {/* Profile Picture Circle */}
              <div className={`relative w-28 h-28 md:w-32 md:h-32 lg:w-36 lg:h-36 mb-4 rounded-full border-4 border-${member.color} shadow-lg shadow-${member.color}/50 overflow-hidden group-hover:scale-110 transition-all duration-300`}>
                {/* Placeholder with gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br from-${member.color}/30 to-gray-900 flex items-center justify-center`}>
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-gray-800 border-2 border-white/20 flex items-center justify-center">
                    <svg className={`w-8 h-8 md:w-10 md:h-10 text-${member.color}`} fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
                
                {/* Uncomment when you have actual images */}
                {/* <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 112px, (max-width: 1024px) 128px, 144px"
                /> */}
                
                {/* Decorative ring */}
                <div className="absolute inset-0 rounded-full border-2 border-white/10 group-hover:border-white/30 transition-all"></div>
              </div>

              {/* Name */}
              <h3 className={`text-base md:text-lg font-bold text-center mb-1 font-space text-${member.color} group-hover:scale-105 transition-transform`}>
                {member.name}
              </h3>

              {/* Designation */}
              <p className="text-xs md:text-sm text-gray-400 text-center font-space leading-tight">
                {member.designation}
              </p>

              {/* Decorative underline */}
              <div className={`w-12 h-0.5 bg-${member.color} mt-2 opacity-0 group-hover:opacity-100 transition-all`}></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Team
