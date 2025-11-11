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
      <nav className="hidden md:block fixed top-0 left-0 right-0 z-50 bg-black border-b-2 border-neon-blue/30 shadow-lg">
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

      {/* Mobile Bottom Navigation (Floating) */}
      <nav className="md:hidden fixed bottom-4 left-4 right-4 z-50 bg-gray-900 rounded-2xl border-2 border-neon-blue/30 shadow-2xl shadow-neon-blue/20">
        <div className="flex items-center justify-around py-3 px-2">
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
                className="cursor-pointer group"
              >
                <div className={`flex flex-col items-center gap-1 transition-all ${
                  active === item.to ? 'scale-110' : 'scale-100'
                }`}>
                  <div className={`p-2.5 rounded-xl transition-all ${
                    active === item.to 
                      ? `bg-${item.color}/20 border-2 border-${item.color}` 
                      : 'bg-gray-800 border-2 border-transparent group-hover:border-gray-600'
                  }`}>
                    <Icon 
                      size={20} 
                      className={active === item.to ? `text-${item.color}` : 'text-gray-400 group-hover:text-white'}
                      strokeWidth={2.5}
                    />
                  </div>
                  <span className={`text-[10px] font-space font-bold uppercase tracking-wider ${
                    active === item.to ? `text-${item.color}` : 'text-gray-500'
                  }`}>
                    {item.name}
                  </span>
                </div>
              </ScrollLink>
            )
          })}
        </div>
      </nav>

      {/* Mobile Top Brand Badge */}
      <div className="md:hidden fixed top-4 left-1/2 -translate-x-1/2 z-50 bg-black rounded-full px-5 py-2 border-2 border-neon-blue/40 shadow-lg">
        <div className="text-lg font-bold font-bebas tracking-wider flex items-center gap-2">
          <span className="text-neon-blue">CSE</span>
          <span className="text-neon-yellow">2025</span>
        </div>
      </div>
    </>
  )
}

export default Navbar
