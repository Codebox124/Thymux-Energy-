import React from 'react'
import Hero from './components/Hero'
import RiskFramework from './components/RiskFramework'
import RiskTools from './components/RiskTools'
import SupplyChainRisk from './components/SupplyChainRisk'
import CTA from './components/CTA'

function page() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <RiskFramework />
      <RiskTools />
      <SupplyChainRisk />
      <CTA />
    </div>
  )
}

export default page
