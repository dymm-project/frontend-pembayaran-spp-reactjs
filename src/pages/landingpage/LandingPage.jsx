import React from 'react'
import Navbar from '../../components/landingpage/Navbar'
import Hero from '../../components/landingpage/Hero'
import Analytics from '../../components/landingpage/Analytics'
import Footer from '../../components/landingpage/Footer'


const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Analytics />
      <Footer />
    </div>
  )
}

export default LandingPage