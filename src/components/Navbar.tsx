'use client'

import { useState } from 'react'
import { Link as ScrollLink } from 'react-scroll'
import { Home, Calendar, Image, Mail, User } from 'lucide-react'

const Navbar = () => {
  const [active, setActive] = useState('hero')

  const navItems = [
    { name: 'Home', to: 'hero', icon: Home, color: 'neon-blue' },
    { name: 'About', to: 'about', icon: User, color: 'neon-pink' },
    { name: 'Timeline', to: 'timeline', icon: Calendar, color: 'neon-purple' },
    { name: 'Gallery', to: 'gallery', icon: Image, color: 'neon-yellow' },
    { name: 'Contact', to: 'contact', icon: Mail, color: 'neon-blue' },
  ]

  return (
    <>
      {/* Desktop Top Navbar */}
      <nav className="hidden md:block fixed top-0 left-0 right-0 z-50 bg-gray-900/80 backdrop-blur-md border-b-2 border-neon-blue/30 shadow-lg">
        <div className="container mx-auto px-6 py-3.5">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-1">
              <span className="text-2xl font-bold font-bebas tracking-wider text-neon-blue">CSE</span>
              <span className="text-2xl font-bold font-bebas tracking-wider text-neon-yellow">FRESHERS</span>
              <span className="text-2xl font-bold font-bebas tracking-wider text-neon-pink">2025</span>
            </div>

            {/* Desktop Navigation */}
            <div className="flex items-center gap-10">
              {navItems.map((item) => {
                const Icon = item.icon
                return (
                  <ScrollLink
                    key={item.name}
                    to={item.to}
                    spy={true}
                    smooth={true}
                    offset={-80}
                    duration={500}
                    onSetActive={() => setActive(item.to)}
                    className={`flex items-center gap-2 cursor-pointer font-space text-sm font-semibold uppercase tracking-wider transition-all ${
                      active === item.to ? 'text-neon-blue' : 'text-gray-300 hover:text-white'
                    }`}
                  >
                    <Icon size={18} strokeWidth={2} />
                    {item.name}
                  </ScrollLink>
                )
              })}
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Top Navigation */}
      <nav className="md:hidden fixed top-0 left-0 right-0 z-50 bg-black border-b-2 border-neon-blue/30 shadow-lg">
        <div className="px-4 py-3">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-1">
              <span className="text-lg font-bold font-bebas tracking-wider text-neon-blue drop-shadow-[0_0_10px_rgba(0,217,255,1)]">CSE</span>
              <span className="text-lg font-bold font-bebas tracking-wider text-neon-yellow drop-shadow-[0_0_10px_rgba(255,215,0,1)]">FRESHERS</span>
              <span className="text-lg font-bold font-bebas tracking-wider text-neon-pink drop-shadow-[0_0_10px_rgba(255,16,240,1)]">2025</span>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setActive(active === 'menu' ? 'hero' : 'menu')}
              className="p-2 rounded-lg bg-gray-900 border-2 border-neon-blue text-neon-blue"
            >
              {active === 'menu' ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>

          {/* Mobile Dropdown Menu */}
          {active === 'menu' && (
            <div className="mt-3 bg-gray-900 rounded-lg border-2 border-neon-blue/30 overflow-hidden">
              {navItems.map((item, index) => {
                const Icon = item.icon
                return (
                  <ScrollLink
                    key={item.name}
                    to={item.to}
                    spy={true}
                    smooth={true}
                    offset={-80}
                    duration={500}
                    onClick={() => setActive(item.to)}
                    className={`flex items-center gap-3 px-4 py-3 cursor-pointer transition-all ${
                      index !== navItems.length - 1 ? 'border-b border-gray-800' : ''
                    } hover:bg-gray-800`}
                  >
                    <Icon size={18} className="text-neon-blue" strokeWidth={2} />
                    <span className="text-white font-space text-sm font-semibold uppercase tracking-wider">
                      {item.name}
                    </span>
                  </ScrollLink>
                )
              })}
            </div>
          )}
        </div>
      </nav>
    </>
  )
}

export default Navbar
