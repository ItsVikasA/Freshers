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
      name: 'Coordinator Name',
      designation: 'Association Coordinator',
      image: '/team/coordinator.jpg',
      borderColor: 'border-cyan-400',
      textColor: 'text-cyan-400',
      shadowColor: 'shadow-cyan-400/50',
      bgColor: 'from-cyan-400/30',
      iconColor: 'text-cyan-400',
      underlineColor: 'bg-cyan-400',
    },
    {
      name: 'Dr. HOD Name',
      designation: 'HOD - CSE Department',
      image: '/team/hod.jpg',
      borderColor: 'border-pink-400',
      textColor: 'text-pink-400',
      shadowColor: 'shadow-pink-400/50',
      bgColor: 'from-pink-400/30',
      iconColor: 'text-pink-400',
      underlineColor: 'bg-pink-400',
    },
    {
      name: 'Chief Guest Name',
      designation: 'Chief Guest',
      image: '/team/guest.jpg',
      borderColor: 'border-purple-400',
      textColor: 'text-purple-400',
      shadowColor: 'shadow-purple-400/50',
      bgColor: 'from-purple-400/30',
      iconColor: 'text-purple-400',
      underlineColor: 'bg-purple-400',
    },
    {
      name: 'Dr. Principal Name',
      designation: 'Principal',
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
              OUR TEAM
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
              initial={{ opacity: 0, scale: 0.8, y: 30 }}
              animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center group cursor-pointer"
            >
              {/* Profile Picture Circle */}
              <div className={`relative w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 lg:w-36 lg:h-36 mb-3 md:mb-4 rounded-full border-4 ${member.borderColor} shadow-lg ${member.shadowColor} overflow-hidden group-hover:scale-110 transition-all duration-300`}>
                {/* Placeholder with gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${member.bgColor} to-gray-900 flex items-center justify-center`}>
                  <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-20 md:h-20 rounded-full bg-gray-800 border-2 border-white/20 flex items-center justify-center">
                    <svg className={`w-6 h-6 sm:w-7 sm:h-7 md:w-10 md:h-10 ${member.iconColor}`} fill="currentColor" viewBox="0 0 20 20">
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
              <h3 className={`text-xs sm:text-sm md:text-base lg:text-lg font-bold text-center mb-1 font-space ${member.textColor} group-hover:scale-105 transition-transform`}>
                {member.name}
              </h3>

              {/* Designation */}
              <p className="text-[10px] sm:text-xs md:text-sm text-gray-400 text-center font-space leading-tight px-1">
                {member.designation}
              </p>

              {/* Decorative underline */}
              <div className={`w-12 h-0.5 ${member.underlineColor} mt-2 opacity-0 group-hover:opacity-100 transition-all`}></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Team
