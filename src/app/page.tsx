'use client'

import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import EventDetails from '@/components/EventDetails'
import Timeline from '@/components/Timeline'
import Team from '@/components/Team'
import Highlights from '@/components/Highlights'
import Gallery from '@/components/Gallery'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import ParticleBackground from '@/components/ParticleBackground'

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <ParticleBackground />
      <Navbar />
      <Hero />
      <About />
      <Team />
      <EventDetails />
      <Timeline />
      <Highlights />
      <Gallery />
      <Contact />
      <Footer />
    </main>
  )
}
