"use client"
import { fromBottomToTop, others } from "@/app/solutions/components/Animations";
import { motion } from "framer-motion";
import { Activity, AlertCircle, DollarSign, Globe, Lock, TrendingUp } from "lucide-react";


const RiskFramework = () => {
  const risks = [
    {
      icon: Activity,
      title: "Commodity Price Risk",
      description: "Active monitoring and hedging strategies using financial derivatives to manage exposure to crude oil and petroleum product price volatility."
    },
    {
      icon: DollarSign,
      title: "Credit & Counterparty Risk",
      description: "Comprehensive due diligence, credit assessment, and ongoing monitoring of all trading partners and counterparties worldwide."
    },
    {
      icon: Globe,
      title: "Country & Political Risk",
      description: "Continuous evaluation of geopolitical developments and market fundamentals to mitigate country-specific and regulatory risks."
    },
    {
      icon: TrendingUp,
      title: "Market & Liquidity Risk",
      description: "Daily position monitoring, stress testing for extreme movements, and maintaining adequate liquidity for all trading activities."
    },
    {
      icon: Lock,
      title: "Operational Risk",
      description: "Strict policies and procedures covering fraud prevention, compliance, and regulatory requirements across all jurisdictions."
    },
    {
      icon: AlertCircle,
      title: "Exchange Rate Risk",
      description: "Currency hedging programs and financial instruments to manage foreign exchange exposure across multi-currency operations."
    }
  ];

  return (
    <section className="bg-gray-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
            <motion.h2
          initial={fromBottomToTop.initial}
                  whileInView={fromBottomToTop.whileInView}
                  viewport={others.viewport}
                  transition={{
                    duration:0.8,
                    ease:"easeInOut",
                    delay: 0.6
                  }}
          className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Risk Management Framework
          </motion.h2>
           <motion.p
          initial={fromBottomToTop.initial}
        whileInView={fromBottomToTop.whileInView}
        viewport={others.viewport}
        transition={{
          duration:0.8,
          ease:"easeInOut",
          delay: 0.6
        }}
          className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive controls addressing all aspects of commodities trading risk
          </motion.p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {risks.map((risk, idx) => (
             <motion.div
              initial={fromBottomToTop.initial}
        whileInView={fromBottomToTop.whileInView}
        viewport={others.viewport}
        transition={{
          duration:0.8,
          ease:"easeInOut",
          delay: 0.1 * idx
        }}
             key={idx} className="bg-white p-8 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow">
              <risk.icon className="w-10 h-10 text-gold mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {risk.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {risk.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RiskFramework