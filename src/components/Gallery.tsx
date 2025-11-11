'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { FaTimes } from 'react-icons/fa'
import Image from 'next/image'

const Gallery = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  // Placeholder images - Replace with actual event photos
  const images = [
    { id: 1, src: '/gallery/img1.jpg', alt: 'Event moment 1', category: 'Performances' },
    { id: 2, src: '/gallery/img2.jpg', alt: 'Event moment 2', category: 'Games' },
    { id: 3, src: '/gallery/img3.jpg', alt: 'Event moment 3', category: 'Food' },
    { id: 4, src: '/gallery/img4.jpg', alt: 'Event moment 4', category: 'Performances' },
    { id: 5, src: '/gallery/img5.jpg', alt: 'Event moment 5', category: 'Group Photos' },
    { id: 6, src: '/gallery/img6.jpg', alt: 'Event moment 6', category: 'Games' },
    { id: 7, src: '/gallery/img7.jpg', alt: 'Event moment 7', category: 'DJ Night' },
    { id: 8, src: '/gallery/img8.jpg', alt: 'Event moment 8', category: 'Awards' },
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
              {/* Placeholder for images */}
              <div className="aspect-square bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 flex items-center justify-center">
                <div className="text-center">
                  <p className="text-gray-400 text-sm">{image.category}</p>
                  <p className="text-gray-500 text-xs mt-2">Image placeholder</p>
                </div>
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
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-4 right-4 text-white text-3xl hover:text-accent transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <FaTimes />
            </button>
            <div className="max-w-4xl max-h-[90vh] relative">
              <div className="aspect-video bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 flex items-center justify-center rounded-lg">
                <div className="text-center">
                  <p className="text-white text-lg">{images[selectedImage].category}</p>
                  <p className="text-gray-400 mt-2">
                    {images[selectedImage].alt}
                  </p>
                  <p className="text-gray-500 text-sm mt-4">
                    Replace with actual images in /public/gallery/
                  </p>
                </div>
              </div>
              <div className="mt-4 text-center">
                <button
                  className="mx-2 px-4 py-2 bg-primary rounded hover:bg-primary/80 transition-colors"
                  onClick={(e) => {
                    e.stopPropagation()
                    setSelectedImage(selectedImage > 0 ? selectedImage - 1 : images.length - 1)
                  }}
                >
                  Previous
                </button>
                <button
                  className="mx-2 px-4 py-2 bg-secondary rounded hover:bg-secondary/80 transition-colors"
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

        {/* Note about images */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-12 text-center"
        >
          <p className="text-gray-400 text-sm">
            * Add actual event photos to the /public/gallery/ directory
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default Gallery
