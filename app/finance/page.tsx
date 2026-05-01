import React from 'react'
import Hero from './components/Hero'
import FinancialStructure from './components/FinancialStructure'
import LiquidityManagement from './components/LiquidityManagement'
import Compliance from './components/Compliance'
import CTA from './components/CTA'

function page() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <FinancialStructure />
      <LiquidityManagement />
      <Compliance />
      <CTA />
    </div>
  )
}

export default page
