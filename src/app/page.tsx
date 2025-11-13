'use client'

import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Invitation from '@/components/Invitation'
import About from '@/components/About'
import Team from '@/components/Team'
import EventDetails from '@/components/EventDetails'
import Timeline from '@/components/Timeline'
import Highlights from '@/components/Highlights'
import Gallery from '@/components/Gallery'
import Footer from '@/components/Footer'
import ParticleBackground from '@/components/ParticleBackground'

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <ParticleBackground />
      <Navbar />
      <Hero />
      <Invitation />
      <About />
      <Team />
      <EventDetails />
      <Timeline />
      <Highlights />
      <Gallery />
      <Footer />
    </main>
  )
}
