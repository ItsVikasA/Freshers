'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Link as ScrollLink } from 'react-scroll'
import { Menu, X } from 'lucide-react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Home', to: 'hero' },
    { name: 'About', to: 'about' },
    { name: 'Details', to: 'details' },
    { name: 'Timeline', to: 'timeline' },
    { name: 'Highlights', to: 'highlights' },
    { name: 'Gallery', to: 'gallery' },
    { name: 'Contact', to: 'contact' },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass-effect shadow-lg py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-bold font-orbitron bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent"
          >
            CSE Freshers 2025
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <ScrollLink
                  to={item.to}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="text-gray-300 hover:text-primary transition-colors cursor-pointer font-medium"
                  activeClass="text-primary"
                >
                  {item.name}
                </ScrollLink>
              </motion.div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white text-2xl z-50"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          initial={{ opacity: 0, x: '100%' }}
          animate={{ opacity: isOpen ? 1 : 0, x: isOpen ? 0 : '100%' }}
          transition={{ type: 'tween' }}
          className={`fixed top-0 right-0 bottom-0 w-64 glass-effect md:hidden ${
            isOpen ? 'pointer-events-auto' : 'pointer-events-none'
          }`}
        >
          <div className="flex flex-col items-start space-y-6 p-8 mt-20">
            {navItems.map((item) => (
              <ScrollLink
                key={item.name}
                to={item.to}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="text-gray-300 hover:text-primary transition-colors cursor-pointer text-lg font-medium"
                activeClass="text-primary"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </ScrollLink>
            ))}
          </div>
        </motion.div>
      </div>
    </nav>
  )
}

export default Navbar
