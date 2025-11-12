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
          initial={{ opacity: 0, scale: 0.9, rotateY: -15 }}
          animate={isInView ? { opacity: 1, scale: 1, rotateY: 0 } : {}}
          transition={{ duration: 0.8, type: "spring" }}
          className="max-w-2xl mx-auto perspective-1000"
          style={{ perspective: '1000px' }}
        >
          {/* Invitation Card with 3D effect */}
          <motion.div 
            className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-cyan-400/30 hover:border-cyan-400/60 transition-all duration-500 group transform-gpu"
            style={{ 
              transformStyle: 'preserve-3d',
              boxShadow: '0 20px 60px rgba(0, 0, 0, 0.5), 0 0 40px rgba(34, 211, 238, 0.3)'
            }}
            whileHover={{ 
              rotateY: 5, 
              rotateX: -5,
              scale: 1.02,
              transition: { duration: 0.3 }
            }}
          >
            {/* 3D depth layers */}
            <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-transparent pointer-events-none" style={{ transform: 'translateZ(10px)' }}></div>
            
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

            {/* 3D Decorative corners with depth */}
            <div className="absolute top-0 left-0 w-20 h-20 border-t-4 border-l-4 border-cyan-400 opacity-60" style={{ transform: 'translateZ(20px)' }}></div>
            <div className="absolute top-0 right-0 w-20 h-20 border-t-4 border-r-4 border-yellow-400 opacity-60" style={{ transform: 'translateZ(20px)' }}></div>
            <div className="absolute bottom-0 left-0 w-20 h-20 border-b-4 border-l-4 border-yellow-400 opacity-60" style={{ transform: 'translateZ(20px)' }}></div>
            <div className="absolute bottom-0 right-0 w-20 h-20 border-b-4 border-r-4 border-cyan-400 opacity-60" style={{ transform: 'translateZ(20px)' }}></div>
            
            {/* 3D edge highlight */}
            <div className="absolute inset-0 rounded-2xl border border-white/10 group-hover:border-white/20 transition-all pointer-events-none" style={{ transform: 'translateZ(25px)' }}></div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Invitation
