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
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          {/* Invitation Card - Simple */}
          <div className="relative rounded-xl overflow-hidden shadow-lg">
            {/* Image */}
            <img 
              src="/gallery/f.jpg" 
              alt="Freshers Party Invitation" 
              className="w-full h-auto object-contain"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Invitation
