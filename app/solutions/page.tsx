import React from 'react'
import Hero from './components/Hero'
import Products from './components/Products'
import Capabilities from './components/Capabilities'
import Values from './components/Values'
import CTA from './components/CTA'
import Location from './components/Location'

function page() {
  return (
    <div className="min-h-screen bg-white">
      <Hero  />
      <Products />
      <Capabilities />
      <Values />
      <Location />
      <CTA />
    </div>
  )
}

export default page







