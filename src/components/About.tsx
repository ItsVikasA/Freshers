'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Users, Music, Trophy, Heart } from 'lucide-react'

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const features = [
    {
      icon: <Users className="w-10 h-10" />,
      title: 'Meet New Friends',
      description: 'Connect with your batch mates and seniors in a fun environment',
    },
    {
      icon: <Music className="w-10 h-10" />,
      title: 'Entertainment',
      description: 'Enjoy live performances, DJ, and amazing musical acts',
    },
    {
      icon: <Trophy className="w-10 h-10" />,
      title: 'Games & Prizes',
      description: 'Participate in exciting games and win amazing prizes',
    },
    {
      icon: <Heart className="w-10 h-10" />,
      title: 'Memorable Experience',
      description: 'Create lasting memories in your college journey',
    },
  ]

  return (
    <section id="about" className="py-20 relative" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-bebas mb-3 tracking-wider">
            <span className="bg-gradient-to-r from-neon-blue via-neon-pink to-neon-purple bg-clip-text text-transparent">
              ABOUT THE EVENT
            </span>
          </h2>
          <div className="w-20 h-0.5 bg-gradient-to-r from-neon-blue to-neon-pink mx-auto mb-6"></div>
          <p className="text-sm md:text-base text-gray-300 max-w-2xl mx-auto leading-relaxed font-space">
            Welcome to the <span className="text-neon-blue font-semibold">CSE family!</span> This freshers party is your official welcome to an amazing journey ahead. 
            We&apos;ve planned an incredible evening filled with <span className="text-neon-pink">performances</span>, <span className="text-neon-purple">games</span>, and <span className="text-neon-yellow">memories</span>!
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.3, delay: index * 0.08 }}
              className="cyber-card p-4 md:p-5 rounded-xl text-center hover:scale-105 transition-all cursor-pointer group border-2 border-neon-blue/20 hover:border-neon-pink/50"
            >
              <div className="text-neon-blue group-hover:text-neon-pink transition-colors mb-3 flex justify-center">
                {feature.icon}
              </div>
              <h3 className="text-sm md:text-base font-bold mb-1.5 font-space uppercase tracking-wide">{feature.title}</h3>
              <p className="text-xs text-gray-400 leading-tight">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Message from Organizing Committee */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-10 cyber-card p-5 md:p-6 rounded-xl max-w-3xl mx-auto border-2 border-neon-purple/30"
        >
          <h3 className="text-lg md:text-xl font-bold mb-3 font-bebas tracking-wider">
            <span className="text-neon-pink">FROM THE ORGANIZERS</span>
          </h3>
          <p className="text-xs md:text-sm text-gray-300 leading-relaxed font-space">
            &quot;Welcome home, freshers! 🎊 This isn&apos;t just another party - it&apos;s your first big memory in CSE. 
            We&apos;ve got amazing performances, fun games, great food, and a chance to meet incredible people. 
            Don&apos;t worry about feeling nervous - everyone&apos;s here to have fun! Can&apos;t wait to see you! ✨&quot;
          </p>
          <p className="text-right text-neon-yellow font-semibold mt-3 text-xs md:text-sm font-space">
            - Your CSE Seniors ❤️
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default About
