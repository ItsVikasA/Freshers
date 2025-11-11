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
    { id: 1, src: '/gallery/1.jpg', alt: 'CSE Freshers Event', category: 'Event Highlights' },
    { id: 2, src: '/gallery/2.jpg', alt: 'CSE Freshers Celebration', category: 'Event Highlights' },
    { id: 3, src: '/gallery/3.jpg', alt: 'CSE Freshers Moments', category: 'Event Highlights' },
  ]

  return (
    <section id="gallery" className="py-20 relative" ref={ref}>
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-orbitron mb-4">
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Gallery
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-8"></div>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            See what you&apos;re missing! Check out the fun from our previous freshers parties 📸
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {images.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group cursor-pointer overflow-hidden rounded-xl"
              onClick={() => setSelectedImage(index)}
            >
              {/* Event Image */}
              <div className="aspect-square relative overflow-hidden">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />
              </div>
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end">
                <div className="p-4 w-full">
                  <p className="text-white font-semibold">{image.category}</p>
                  <p className="text-gray-300 text-sm">{image.alt}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 z-50 flex flex-col items-center justify-center p-2 sm:p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-2 right-2 sm:top-4 sm:right-4 text-white text-2xl sm:text-3xl hover:text-accent transition-colors z-10 bg-black/50 rounded-full w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center"
              onClick={() => setSelectedImage(null)}
              aria-label="Close"
            >
              <FaTimes />
            </button>
            <div className="w-full max-w-7xl mx-auto px-2 sm:px-4 flex-1 flex flex-col items-center justify-center">
              <div className="relative w-full h-[70vh] sm:h-[75vh] md:h-[80vh] lg:h-[85vh]">
                <Image
                  src={images[selectedImage].src}
                  alt={images[selectedImage].alt}
                  fill
                  className="object-contain"
                  sizes="(max-width: 640px) 95vw, (max-width: 1024px) 90vw, 85vw"
                  priority
                />
              </div>
              <div className="mt-4 sm:mt-6 text-center flex justify-center gap-2 sm:gap-4 w-full">
                <button
                  className="px-4 py-2 sm:px-6 sm:py-3 bg-primary rounded-lg hover:bg-primary/80 transition-colors font-semibold text-white text-sm sm:text-base flex-1 max-w-[150px]"
                  onClick={(e) => {
                    e.stopPropagation()
                    setSelectedImage(selectedImage > 0 ? selectedImage - 1 : images.length - 1)
                  }}
                >
                  Previous
                </button>
                <button
                  className="px-4 py-2 sm:px-6 sm:py-3 bg-secondary rounded-lg hover:bg-secondary/80 transition-colors font-semibold text-white text-sm sm:text-base flex-1 max-w-[150px]"
                  onClick={(e) => {
                    e.stopPropagation()
                    setSelectedImage(selectedImage < images.length - 1 ? selectedImage + 1 : 0)
                  }}
                >
                  Next
                </button>
              </div>
            </div>
          </motion.div>
        )}

        {/* Note */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-12 text-center"
        >
          <p className="text-gray-400 text-sm">
            Click on any image to view in full size 📸
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default Gallery
