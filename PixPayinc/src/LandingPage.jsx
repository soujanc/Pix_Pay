import React from 'react'
import Navbar from './components/common/Navbar'
import About from './components/sections/About'
import Features from './components/sections/Features'
import Header from './components/sections/Header'
import Steps from './components/sections/Steps'
import StatsandPricing from './components/sections/StatsandPricing'
import Testimonials from './components/sections/Testimonials'
import CTO from './components/sections/CTO'

export default function LandingPage() {
  return (
    <>
      <Navbar />
      <Header />
      <Features />
      <About />
      <Steps />
      <StatsandPricing />
      <Testimonials />
      <CTO />
    </>
  )
}
