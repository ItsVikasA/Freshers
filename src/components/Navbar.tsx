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
        scrolled 
          ? 'cyber-card border-b-2 border-neon-blue/30 shadow-neon-blue py-2 sm:py-3' 
          : 'bg-gradient-to-b from-black/50 to-transparent backdrop-blur-sm py-4 sm:py-5'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-xl sm:text-2xl md:text-3xl font-bold font-bebas tracking-wider"
          >
            <span className="bg-gradient-to-r from-neon-blue via-neon-pink to-neon-purple bg-clip-text text-transparent">
              CSE
            </span>
            <span className="text-neon-yellow ml-1">2025</span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
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
                  className="relative text-gray-300 hover:text-neon-blue transition-all cursor-pointer font-space font-medium text-sm xl:text-base uppercase tracking-wide group"
                  activeClass="text-neon-blue"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-neon-blue to-neon-pink group-hover:w-full transition-all duration-300"></span>
                </ScrollLink>
              </motion.div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="lg:hidden text-white z-50 p-2 rounded-lg cyber-card border-2 border-neon-blue/50 hover:border-neon-pink/50 transition-all"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            whileTap={{ scale: 0.9 }}
          >
            {isOpen ? <X size={24} className="text-neon-pink" /> : <Menu size={24} className="text-neon-blue" />}
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          initial={{ opacity: 0, x: '100%' }}
          animate={{ opacity: isOpen ? 1 : 0, x: isOpen ? 0 : '100%' }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          className={`fixed top-0 right-0 bottom-0 w-72 sm:w-80 cyber-card border-l-2 border-neon-pink/50 shadow-neon-pink lg:hidden ${
            isOpen ? 'pointer-events-auto' : 'pointer-events-none'
          }`}
        >
          {/* Mobile menu header */}
          <div className="p-6 border-b border-neon-blue/30">
            <h3 className="text-2xl font-bebas tracking-wider">
              <span className="bg-gradient-to-r from-neon-blue to-neon-pink bg-clip-text text-transparent">
                MENU
              </span>
            </h3>
          </div>
          
          {/* Mobile menu items */}
          <div className="flex flex-col space-y-2 p-6">
            {navItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: isOpen ? 1 : 0, x: isOpen ? 0 : 20 }}
                transition={{ delay: index * 0.05 }}
              >
                <ScrollLink
                  to={item.to}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="block text-gray-300 hover:text-neon-blue transition-all cursor-pointer text-lg font-space font-medium uppercase tracking-wide py-3 px-4 rounded-lg hover:bg-neon-blue/10 border-l-2 border-transparent hover:border-neon-blue"
                  activeClass="text-neon-pink border-neon-pink bg-neon-pink/10"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </ScrollLink>
              </motion.div>
            ))}
          </div>
          
          {/* Mobile menu footer */}
          <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-neon-purple/30">
            <p className="text-center text-sm text-gray-400 font-space">
              <span className="text-neon-yellow">CSE</span> Freshers Party 2025
            </p>
          </div>
        </motion.div>

        {/* Mobile backdrop overlay */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm lg:hidden z-40"
            onClick={() => setIsOpen(false)}
          />
        )}
      </div>
    </nav>
  )
}

export default Navbar
