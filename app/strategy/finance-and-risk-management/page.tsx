import React from 'react'
import Hero from './components/Hero'
import RiskFramework from './components/RiskFramework'
import RiskTools from './components/RiskTools'
import FinancialStructure from './components/FinancialStructure'
import LiquidityManagement from './components/LiquidityManagement'
import SupplyChainRisk from './components/SupplyChainRisk'
import Compliance from './components/Compliance'
import CTA from './components/CTA'

function page() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <RiskFramework />
      <RiskTools />
      <FinancialStructure />
      <LiquidityManagement />
      <SupplyChainRisk />
      <Compliance />
      <CTA />
    </div>
  )
}

export default page

