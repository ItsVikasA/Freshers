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
    { name: 'Contact', to: 'contact' },
  ]

  const socialLinks = [
    { icon: <Facebook className="w-5 h-5" />, name: 'Facebook', url: '#' },
    { icon: <Instagram className="w-5 h-5" />, name: 'Instagram', url: '#' },
    { icon: <Twitter className="w-5 h-5" />, name: 'Twitter', url: '#' },
    { icon: <Linkedin className="w-5 h-5" />, name: 'LinkedIn', url: '#' },
  ]

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="relative bg-gradient-to-b from-transparent to-black/50 pt-20 pb-6">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-8 sm:mb-12">
          {/* Brand Section */}
          <div>
            <h3 className="text-xl sm:text-2xl font-bold font-orbitron mb-3 sm:mb-4 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              CSE Freshers 2025
            </h3>
            <p className="text-sm sm:text-base text-gray-400 mb-3 sm:mb-4">
              Celebrating the beginning of an amazing journey in Computer Science Engineering.
            </p>
            <p className="text-gray-500 text-xs sm:text-sm">
              Organized by CSE Department Student Committee
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-base sm:text-lg font-bold mb-3 sm:mb-4 text-white">Quick Links</h4>
            <ul className="space-y-1.5 sm:space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <ScrollLink
                    to={link.to}
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    className="text-sm sm:text-base text-gray-400 hover:text-primary transition-colors cursor-pointer inline-block"
                  >
                    {link.name}
                  </ScrollLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Event Links */}
          <div>
            <h4 className="text-base sm:text-lg font-bold mb-3 sm:mb-4 text-white">Event Info</h4>
            <ul className="space-y-1.5 sm:space-y-2">
              {eventLinks.map((link, index) => (
                <li key={index}>
                  <ScrollLink
                    to={link.to}
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    className="text-sm sm:text-base text-gray-400 hover:text-primary transition-colors cursor-pointer inline-block"
                  >
                    {link.name}
                  </ScrollLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h4 className="text-base sm:text-lg font-bold mb-3 sm:mb-4 text-white">Connect With Us</h4>
            <p className="text-gray-400 text-xs sm:text-sm mb-3 sm:mb-4">
              Follow us on social media for updates and announcements
            </p>
            <div className="flex gap-2.5 sm:gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center bg-white/10 rounded-full hover:bg-primary hover:scale-110 transition-all"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 mb-6"></div>

        {/* Bottom Footer */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4">
          <div className="text-center sm:text-left">
            <p className="text-gray-400 text-xs sm:text-sm">
              &copy; {currentYear} CSE Freshers Party. All rights reserved.
            </p>
            <p className="text-gray-400 text-xs sm:text-sm flex items-center justify-center sm:justify-start gap-1.5 sm:gap-2 mt-1">
              Made with <Heart className="text-red-500 w-3 h-3 sm:w-4 sm:h-4 fill-current" /> by CSE Students
            </p>
          </div>

          <div className="flex items-center gap-3 sm:gap-4">
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 sm:gap-2 text-gray-400 hover:text-primary transition-colors"
              aria-label="Scroll to top"
            >
              <span className="text-xs sm:text-sm">Back to Top</span>
              <div className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center bg-white/10 rounded-full hover:bg-primary transition-colors">
                <ArrowUp className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </div>
            </button>
          </div>
        </div>

        {/* Additional Links */}
        <div className="mt-6 text-center">
          <p className="text-gray-500 text-xs">
            <a href="#" className="hover:text-primary transition-colors">
              Privacy Policy
            </a>
            {' | '}
            <a href="#" className="hover:text-primary transition-colors">
              Terms & Conditions
            </a>
            {' | '}
            <a href="#" className="hover:text-primary transition-colors">
              Code of Conduct
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
