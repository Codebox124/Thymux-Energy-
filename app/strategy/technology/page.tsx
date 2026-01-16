import React from 'react'
import Hero from './components/Hero'
import TradingPlatforms from './components/TradingPlatforms'
import Capabilities from './components/Capabilities'
import ComplianceTech from './components/ComplianceTech'
import DigitalAdvantage from './components/DigitalAdvantage'
import Innovation from './components/Innovation'
import CTA from './components/CTA'

function page() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <TradingPlatforms />
      <Capabilities />
      <ComplianceTech />
      <DigitalAdvantage />
      <Innovation />
      <CTA />
    </div>
  )
}

export default page

