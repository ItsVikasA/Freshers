'use client'

import { Heart, Facebook, Instagram, Twitter, Linkedin, ArrowUp } from 'lucide-react'
import { Link as ScrollLink } from 'react-scroll'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { name: 'Home', to: 'hero' },
    { name: 'About', to: 'about' },
    { name: 'Details', to: 'details' },
    { name: 'Gallery', to: 'gallery' },
  ]

  const eventLinks = [
    { name: 'Timeline', to: 'timeline' },
    { name: 'Highlights', to: 'highlights' },
    { name: 'Gallery', to: 'gallery' },
  ]

  const socialLinks = [
    { icon: <Facebook className="w-4 h-4" />, name: 'Facebook', url: '#', color: 'neon-blue' },
    { icon: <Instagram className="w-4 h-4" />, name: 'Instagram', url: 'https://www.instagram.com/bgmit_souls_', color: 'neon-pink' },
    { icon: <Twitter className="w-4 h-4" />, name: 'Twitter', url: '#', color: 'neon-blue' },
    { icon: <Linkedin className="w-4 h-4" />, name: 'LinkedIn', url: 'https://www.linkedin.com/in/vikas028', color: 'neon-purple' },
  ]

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="relative bg-gray-900 pt-12 pb-4 border-t border-neon-blue/20">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Main Footer Content */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-6">
          {/* Brand Section */}
          <div className="col-span-2 lg:col-span-1">
            <h3 className="text-lg md:text-xl font-bold font-bebas mb-2 tracking-wider">
              <span className="bg-gradient-to-r from-neon-blue via-neon-pink to-neon-purple bg-clip-text text-transparent">
                CSE
              </span>
              <span className="text-neon-yellow"> 2025</span>
            </h3>
            <p className="text-xs text-gray-400 mb-2 font-space leading-relaxed">
              Celebrating the beginning of an <span className="text-neon-pink">amazing journey</span> in Computer Science.
            </p>
            <p className="text-gray-500 text-[10px] font-space">
              Organized by CSE Student Committee
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm md:text-base font-bold mb-2 md:mb-3 font-space text-neon-blue tracking-wide">QUICK LINKS</h4>
            <ul className="space-y-1">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <ScrollLink
                    to={link.to}
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    className="text-[10px] md:text-xs text-gray-400 hover:text-neon-blue transition-colors cursor-pointer inline-block font-space"
                  >
                    → {link.name}
                  </ScrollLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Event Links */}
          <div>
            <h4 className="text-sm md:text-base font-bold mb-2 md:mb-3 font-space text-neon-pink tracking-wide">EVENT INFO</h4>
            <ul className="space-y-1">
              {eventLinks.map((link, index) => (
                <li key={index}>
                  <ScrollLink
                    to={link.to}
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    className="text-[10px] md:text-xs text-gray-400 hover:text-neon-pink transition-colors cursor-pointer inline-block font-space"
                  >
                    → {link.name}
                  </ScrollLink>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-neon-blue/20 mb-4"></div>

        {/* Bottom Footer */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-3 md:gap-4">
          <div className="text-center sm:text-left">
            <p className="text-gray-400 text-[10px] md:text-xs font-space">
              &copy; {currentYear} CSE Freshers Party. All rights reserved.
            </p>
            <p className="text-gray-400 text-[10px] md:text-xs flex items-center justify-center sm:justify-start gap-1 mt-0.5 font-space">
              Made with <Heart className="text-neon-pink w-2.5 h-2.5 md:w-3 md:h-3 fill-current animate-pulse" /> by <span className="text-neon-blue">CSE Students</span>
            </p>
          </div>

          {/* Developed By */}
          <a 
            href="https://linktr.ee/Its_VikasA" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-gray-800/50 px-4 py-2.5 rounded-lg border border-neon-blue/20 hover:border-neon-blue hover:bg-gray-800 transition-all group"
          >
            <span className="text-gray-400 text-xs md:text-sm font-space">Developed by:</span>
            <div className="flex items-center gap-2">
              {/* Developer Profile Picture */}
              <div className="w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-neon-blue overflow-hidden bg-gray-900 group-hover:scale-110 transition-transform shadow-lg shadow-neon-blue/30">
                <img src="/gallery/vikas.jpg" alt="Vikas" className="w-full h-full object-cover" />
              </div>
              <span className="text-neon-blue text-xs md:text-sm font-space font-bold group-hover:text-white transition-colors">Vikas</span>
            </div>
          </a>

        </div>

        {/* Back to Top */}
        <div className="mt-4 flex justify-center">
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-gray-400 hover:text-neon-blue transition-colors group"
            aria-label="Scroll to top"
          >
            <span className="text-[10px] md:text-xs font-space">BACK TO TOP</span>
            <div className="w-6 h-6 md:w-7 md:h-7 flex items-center justify-center cyber-card rounded-full border border-neon-blue/30 group-hover:border-neon-blue transition-all group-hover:scale-110">
              <ArrowUp className="w-3 h-3 md:w-3.5 md:h-3.5 text-neon-blue" />
            </div>
          </button>
        </div>

        {/* Additional Links */}
        <div className="mt-4 text-center">
          <p className="text-gray-500 text-[10px] font-space">
            <a href="#" className="hover:text-neon-blue transition-colors">
              Privacy Policy
            </a>
            <span className="text-neon-blue/30"> | </span>
            <a href="#" className="hover:text-neon-pink transition-colors">
              Terms & Conditions
            </a>
            <span className="text-neon-pink/30"> | </span>
            <a href="#" className="hover:text-neon-purple transition-colors">
              Code of Conduct
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
