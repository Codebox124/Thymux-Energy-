"use client"
import { fromBottomToTop, fromLeftToRight, others } from "@/app/solutions/components/Animations";
import { motion } from "framer-motion";
const Compliance = () => (
  <section className="bg-white border-b border-gray-200">
    <div className="max-w-7xl mx-auto px-6 py-20">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
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
            Compliance & Regulatory Risk
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
          className="text-lg text-gray-600">
            Strict adherence to international standards and regulatory requirements
          </motion.p>
        </div>
        <div className="bg-gray-50 rounded-2xl p-10 border border-gray-200">
          <div className="space-y-6">
            <motion.div
            initial={fromLeftToRight.initial}
                  whileInView={fromLeftToRight.whileInView}
                  viewport={others.viewport}
                  transition={{
                    duration:0.8,
                    ease:"easeInOut",
                    delay: 0.1
                  }}
            >
              <h3 className="text-xl font-bold text-gray-900 mb-3">Sanctions Compliance</h3>
              <p className="text-gray-600 leading-relaxed">
                Robust screening procedures and due diligence processes ensure ongoing compliance with UN, EU, UK, US OFAC, and Swiss SECO sanctions lists. All counterparties, vessels, and transactions are vetted against designated sanctions regimes.
              </p>
            </motion.div>
            <motion.div
            initial={fromLeftToRight.initial}
                  whileInView={fromLeftToRight.whileInView}
                  viewport={others.viewport}
                  transition={{
                    duration:0.8,
                    ease:"easeInOut",
                    delay: 0.2
                  }}
            >
              <h3 className="text-xl font-bold text-gray-900 mb-3">Regulatory Framework</h3>
              <p className="text-gray-600 leading-relaxed">
                Strict policies and procedures subject to constant review cover hedging, trading, operations, and compliance activities. These frameworks are key elements in managing counterparty relationships, fraud prevention, and regulatory risks.
              </p>
            </motion.div>
            <motion.div
            initial={fromLeftToRight.initial}
                  whileInView={fromLeftToRight.whileInView}
                  viewport={others.viewport}
                  transition={{
                    duration:0.8,
                    ease:"easeInOut",
                    delay: 0.3
                  }}
            >
              <h3 className="text-xl font-bold text-gray-900 mb-3">Health, Safety & Environmental</h3>
              <p className="text-gray-600 leading-relaxed">
                Commitment to the highest international standards of health, safety, and environmental responsibility throughout all trading and operational activities.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  </section>
);


export default Compliance