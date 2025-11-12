'use client'

import { motion } from 'framer-motion'
import { useRef } from 'react'
import { useInView } from 'framer-motion'
import Image from 'next/image'

const Invitation = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section id="invitation" className="py-12 md:py-20 relative" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mx-auto"
        >
          {/* Invitation Card */}
          <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-cyan-400/30 hover:border-cyan-400/60 transition-all duration-500 group">
            {/* Glowing effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 via-yellow-400/10 to-purple-400/10 opacity-50 group-hover:opacity-70 transition-opacity"></div>
            
            {/* Image */}
            <div className="relative w-full h-auto">
              <img 
                src="/gallery/f.jpg" 
                alt="Freshers Party Invitation" 
                className="w-full h-auto object-contain"
              />
            </div>

            {/* Decorative corners */}
            <div className="absolute top-0 left-0 w-20 h-20 border-t-4 border-l-4 border-cyan-400 opacity-60"></div>
            <div className="absolute top-0 right-0 w-20 h-20 border-t-4 border-r-4 border-yellow-400 opacity-60"></div>
            <div className="absolute bottom-0 left-0 w-20 h-20 border-b-4 border-l-4 border-yellow-400 opacity-60"></div>
            <div className="absolute bottom-0 right-0 w-20 h-20 border-b-4 border-r-4 border-cyan-400 opacity-60"></div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Invitation
