"use client"
import { fromBottomToTop, others } from "@/app/solutions/components/Animations";
import { motion } from "framer-motion";

const Capabilities = () => {
  const capabilities = [
    {
      title: "Real-Time Market Data",
      description: "Access to live pricing, vessel tracking, and market movements across all major petroleum product grades and crude oil benchmarks."
    },
    {
      title: "Cargo Optimization Tools",
      description: "Advanced blending calculators and specification matching systems that identify optimal cargo compositions for fuel oil and other products."
    },
    {
      title: "Risk Management Systems",
      description: "Comprehensive tools for monitoring exposure, hedging strategies, and portfolio risk across multiple markets and timeframes."
    },
    {
      title: "Logistics Coordination",
      description: "Integrated scheduling and tracking systems for vessel nominations, cargo inspections, and documentation management."
    },
    {
      title: "Financial Settlement",
      description: "Automated invoicing, payment tracking, and reconciliation systems ensuring accurate and timely financial execution."
    },
    {
      title: "Regulatory Reporting",
      description: "Built-in compliance monitoring and reporting tools aligned with international standards and regulatory requirements."
    }
  ];

  return (
    <section className="bg-white border-b border-gray-200">
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
            Platform Capabilities
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
            Comprehensive tools for every aspect of petroleum trading
          </motion.p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((capability, idx) => (
            <motion.div
            initial={fromBottomToTop.initial}
        whileInView={fromBottomToTop.whileInView}
        viewport={others.viewport}
        transition={{
          duration:0.8,
          ease:"easeInOut",
          delay: 0.1 * idx
        }}
            key={idx} className="bg-gray-50 p-8 rounded-xl border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {capability.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {capability.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};


export default Capabilities