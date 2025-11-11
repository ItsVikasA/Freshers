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
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-orbitron mb-4">
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              About the Event
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-8"></div>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Welcome to the CSE family! 🎓 This freshers party is your official welcome to an amazing journey ahead. 
            We&apos;ve planned an incredible evening where you&apos;ll meet your batchmates, connect with seniors, 
            enjoy amazing performances, play exciting games, and create memories that&apos;ll last throughout your college life. 
            Come ready to have fun, make friends, and celebrate the start of your CSE adventure!
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
              className="glass-effect p-6 rounded-xl text-center hover:scale-105 transition-transform cursor-pointer group"
            >
              <div className="text-primary group-hover:text-accent transition-colors mb-4 flex justify-center">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Message from Organizing Committee */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-16 glass-effect p-8 rounded-xl max-w-4xl mx-auto"
        >
          <h3 className="text-2xl font-bold mb-4 text-primary">
            Message from the Organizing Committee
          </h3>
          <p className="text-gray-300 leading-relaxed">
            &quot;Welcome home, freshers! 🎊 This isn&apos;t just another party - it&apos;s your first big memory in CSE. 
            We&apos;ve got amazing performances lined up, fun games with awesome prizes, great food, and most importantly, 
            a chance for you to meet the incredible people you&apos;ll spend the next few years with. 
            Don&apos;t worry about feeling nervous - everyone&apos;s here to have fun and make you feel at home. 
            Can&apos;t wait to see you all there!&quot;
          </p>
          <p className="text-right text-accent font-semibold mt-4">
            - Your CSE Seniors & Organizing Committee ❤️
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default About
