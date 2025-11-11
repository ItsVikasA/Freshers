'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { FaTimes } from 'react-icons/fa'
import Image from 'next/image'

const Gallery = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  // Event photos from previous freshers party
  const images = [
    { id: 1, src: '/gallery/1.jpg', alt: 'CSE Freshers Event', category: 'Highlights', size: 'large', color: 'neon-blue' },
    { id: 2, src: '/gallery/2.jpg', alt: 'CSE Freshers Celebration', category: 'Celebration', size: 'medium', color: 'neon-pink' },
    { id: 3, src: '/gallery/3.jpg', alt: 'CSE Freshers Moments', category: 'Moments', size: 'medium', color: 'neon-purple' },
  ]

  return (
    <section id="gallery" className="py-20 relative" ref={ref}>
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-bebas mb-3 tracking-wider">
            <span className="bg-gradient-to-r from-neon-blue via-neon-pink to-neon-purple bg-clip-text text-transparent">
              EVENT GALLERY
            </span>
          </h2>
          <div className="w-20 h-0.5 bg-gradient-to-r from-neon-blue to-neon-pink mx-auto mb-6"></div>
          <p className="text-sm md:text-base text-gray-300 max-w-2xl mx-auto font-space">
            See what you&apos;re missing! <span className="text-neon-pink">Previous moments</span> 📸
          </p>
        </motion.div>

        {/* Masonry-Style Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 max-w-6xl mx-auto">
          {images.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ scale: 1.03, y: -8 }}
              className={`relative group cursor-pointer overflow-hidden rounded-2xl border-2 border-${image.color}/30 hover:border-${image.color} transition-all
                ${image.size === 'large' ? 'md:col-span-2 md:row-span-2' : 'col-span-1'}
              `}
              onClick={() => setSelectedImage(index)}
            >
              {/* Event Image */}
              <div className={`relative overflow-hidden ${image.size === 'large' ? 'aspect-[4/3]' : 'aspect-square'}`}>
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover group-hover:scale-110 group-hover:rotate-2 transition-all duration-500"
                  sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                />
                {/* Neon overlay effect */}
                <div className={`absolute inset-0 bg-gradient-to-br from-${image.color}/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity`} />
              </div>
              
              {/* Category Badge */}
              <div className={`absolute top-3 left-3 cyber-card px-3 py-1 rounded-full border border-${image.color}/50 backdrop-blur-md z-10`}>
                <p className={`text-${image.color} text-[10px] md:text-xs font-bold font-space uppercase tracking-wider`}>
                  {image.category}
                </p>
              </div>

              {/* Hover Info Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-4">
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  whileHover={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.1 }}
                >
                  <p className={`text-${image.color} font-bold text-sm md:text-base font-space mb-1`}>
                    {image.category}
                  </p>
                  <p className="text-gray-300 text-xs md:text-sm font-space">{image.alt}</p>
                  <div className="mt-3 flex items-center gap-2">
                    <div className={`w-8 h-8 rounded-full border-2 border-${image.color} flex items-center justify-center`}>
                      <span className={`text-${image.color} text-xs`}>→</span>
                    </div>
                    <span className="text-gray-400 text-xs font-space">Click to expand</span>
                  </div>
                </motion.div>
              </div>

              {/* Corner accent */}
              <div className={`absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-${image.color}/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity`} />
            </motion.div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/98 backdrop-blur-sm z-50 flex flex-col items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-3 right-3 md:top-6 md:right-6 text-white hover:text-neon-pink transition-colors z-10 cyber-card rounded-full w-10 h-10 md:w-12 md:h-12 flex items-center justify-center border-2 border-neon-pink/30 hover:border-neon-pink"
              onClick={() => setSelectedImage(null)}
              aria-label="Close"
            >
              <FaTimes className="text-xl" />
            </button>
            
            {/* Image info badge */}
            <div className={`absolute top-3 left-3 md:top-6 md:left-6 cyber-card px-4 py-2 rounded-xl border-2 border-${images[selectedImage].color}/50 z-10`}>
              <p className={`text-${images[selectedImage].color} text-xs md:text-sm font-bold font-space`}>
                {images[selectedImage].category}
              </p>
            </div>

            <div className="w-full max-w-7xl mx-auto flex-1 flex flex-col items-center justify-center">
              <div className={`relative w-full h-[70vh] md:h-[80vh] border-2 border-${images[selectedImage].color}/30 rounded-2xl overflow-hidden`}>
                <Image
                  src={images[selectedImage].src}
                  alt={images[selectedImage].alt}
                  fill
                  className="object-contain"
                  sizes="90vw"
                  priority
                />
              </div>
              <div className="mt-6 flex justify-center gap-3 w-full">
                <button
                  className="px-5 py-2.5 cyber-card rounded-xl border-2 border-neon-blue/50 hover:border-neon-blue transition-all font-semibold text-neon-blue text-xs md:text-sm font-space uppercase tracking-wider hover:scale-105"
                  onClick={(e) => {
                    e.stopPropagation()
                    setSelectedImage(selectedImage > 0 ? selectedImage - 1 : images.length - 1)
                  }}
                >
                  ← Previous
                </button>
                <button
                  className="px-5 py-2.5 cyber-card rounded-xl border-2 border-neon-pink/50 hover:border-neon-pink transition-all font-semibold text-neon-pink text-xs md:text-sm font-space uppercase tracking-wider hover:scale-105"
                  onClick={(e) => {
                    e.stopPropagation()
                    setSelectedImage(selectedImage < images.length - 1 ? selectedImage + 1 : 0)
                  }}
                >
                  Next →
                </button>
              </div>
            </div>
          </motion.div>
        )}

        {/* Note */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-8 text-center max-w-4xl mx-auto"
        >
          <p className="text-gray-400 text-[10px] md:text-xs font-space">
            <span className="text-neon-yellow">⚡</span> Click any image to view full size • More photos coming soon!
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default Gallery
