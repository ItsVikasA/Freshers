'use client'

import { useState } from 'react'
import { Link as ScrollLink } from 'react-scroll'
import { Menu, X } from 'lucide-react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { name: 'Home', to: 'hero' },
    { name: 'About', to: 'about' },
    { name: 'Timeline', to: 'timeline' },
    { name: 'Gallery', to: 'gallery' },
    { name: 'Contact', to: 'contact' },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black shadow-lg shadow-neon-blue/20">
      <div className="px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo - Enhanced for mobile */}
          <div className="flex items-center gap-2">
            <div className="text-2xl md:text-3xl font-bold font-bebas tracking-wider flex items-baseline">
              <span className="text-neon-blue drop-shadow-[0_0_8px_rgba(0,217,255,1)]">CSE</span>
              <span className="text-neon-yellow drop-shadow-[0_0_8px_rgba(255,215,0,1)] ml-1">2025</span>
            </div>
            {/* Separator for desktop */}
            <div className="hidden md:block w-px h-8 bg-neon-blue/30 ml-4"></div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <ScrollLink
                key={item.name}
                to={item.to}
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
                className="text-white hover:text-neon-blue transition-colors cursor-pointer font-space text-sm font-semibold uppercase tracking-wider relative group"
                activeClass="text-neon-blue"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-neon-blue group-hover:w-full transition-all duration-300"></span>
              </ScrollLink>
            ))}
          </div>

          {/* Mobile Menu Button - Enhanced visibility */}
          <button
            className="md:hidden text-neon-blue p-2.5 rounded-lg bg-gray-900 border-2 border-neon-blue shadow-lg shadow-neon-blue/50 hover:bg-gray-800 transition-all"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={22} strokeWidth={2.5} /> : <Menu size={22} strokeWidth={2.5} />}
          </button>
        </div>

        {/* Mobile Navigation - Dropdown */}
        {isOpen && (
          <div className="md:hidden mt-4 bg-gray-900 rounded-lg border-2 border-neon-blue/30 overflow-hidden">
            {navItems.map((item, index) => (
              <ScrollLink
                key={item.name}
                to={item.to}
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
                className={`block text-white hover:text-neon-blue hover:bg-gray-800 transition-all cursor-pointer font-space text-sm font-semibold uppercase tracking-wider py-4 px-5 ${
                  index !== navItems.length - 1 ? 'border-b border-gray-800' : ''
                }`}
                activeClass="text-neon-blue bg-gray-800 border-l-4 border-neon-blue"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </ScrollLink>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
