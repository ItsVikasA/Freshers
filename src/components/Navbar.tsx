'use client'

import { useState } from 'react'
import { Link as ScrollLink } from 'react-scroll'
import { Home, Calendar, Image, Mail, User } from 'lucide-react'

const Navbar = () => {
  const [active, setActive] = useState('hero')

  const navItems = [
    { name: 'Home', to: 'hero', icon: Home, color: 'cyan-400' },
    { name: 'About', to: 'about', icon: User, color: 'yellow-400' },
    { name: 'Timeline', to: 'timeline', icon: Calendar, color: 'cyan-400' },
    { name: 'Gallery', to: 'gallery', icon: Image, color: 'yellow-400' },
  ]

  return (
    <>
      {/* Desktop Top Navbar */}
      <nav className="hidden md:block fixed top-0 left-0 right-0 z-50 bg-gray-900/80 backdrop-blur-md border-b-2 border-neon-blue/30 shadow-lg">
        <div className="container mx-auto px-6 py-3.5">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-1">
              <span className="text-2xl font-bold font-zaslia tracking-wide bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(34,211,238,1)] animate-pulse">Navasparsh</span>
              <span className="text-2xl font-bold font-zaslia tracking-wide text-violet-400 drop-shadow-[0_0_15px_rgba(167,139,250,1)]">-</span>
              <span className="text-2xl font-bold font-zaslia tracking-wide bg-gradient-to-r from-purple-500 via-violet-500 to-fuchsia-500 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(168,85,247,1)] animate-pulse">2k25</span>
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
                      active === item.to ? 'text-cyan-400' : 'text-gray-300 hover:text-white'
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
      <nav className="md:hidden fixed top-0 left-0 right-0 z-50 bg-gray-900/90 backdrop-blur-sm border-b-2 border-cyan-400/40 shadow-lg shadow-cyan-400/20">
        <div className="px-4 py-3.5">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-0.5">
              <span className="text-sm font-bold font-zaslia tracking-wide bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(34,211,238,1)]">Navasparsh</span>
              <span className="text-sm font-bold font-zaslia tracking-wide text-violet-400 drop-shadow-[0_0_15px_rgba(167,139,250,1)]">-</span>
              <span className="text-sm font-bold font-zaslia tracking-wide bg-gradient-to-r from-purple-500 via-violet-500 to-fuchsia-500 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(168,85,247,1)]">2k25</span>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setActive(active === 'menu' ? 'hero' : 'menu')}
              className="p-2 rounded-lg bg-gray-900 border-2 border-cyan-400 text-cyan-400"
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
            <div className="mt-3 bg-gray-900 rounded-lg border-2 border-cyan-400/30 overflow-hidden">
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
                    <Icon size={18} className="text-cyan-400" strokeWidth={2} />
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
