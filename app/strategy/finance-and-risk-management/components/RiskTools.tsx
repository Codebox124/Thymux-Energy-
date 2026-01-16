"use client"
import { fromLeftToRight, fromRightToLeft, others } from "@/app/solutions/components/Animations";
import { motion } from "framer-motion";
const RiskTools = () => (
  <section className="bg-white border-b border-gray-200">
    <div className="max-w-7xl mx-auto px-6 py-20">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <motion.h2
           initial={fromLeftToRight.initial}
                  whileInView={fromLeftToRight.whileInView}
                  viewport={others.viewport}
                  transition={{
                    duration:0.8,
                    ease:"easeInOut",
                    delay: 0.6
                  }}
                  className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            Risk Management Tools
          </motion.h2>
          <motion.p
          initial={fromLeftToRight.initial}
                  whileInView={fromLeftToRight.whileInView}
                  viewport={others.viewport}
                  transition={{
                    duration:0.8,
                    ease:"easeInOut",
                    delay: 0.7
                  }}
          className="text-lg text-gray-600 mb-8 leading-relaxed">
            Managing and mitigating risk is fundamental to successful petroleum trading. Thymus Energy employs a multi-layered approach combining technology, policies, and expertise.
          </motion.p>
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
            className="flex items-start gap-4">
              <div className="w-2 h-2 bg-gray-900 rounded-full mt-2"></div>
              <div>
                <div className="font-bold text-lg text-gray-900 mb-1">Derivative Instruments</div>
                <div className="text-gray-600">Financial derivatives to hedge commodity price and foreign exchange rate exposures effectively.</div>
              </div>
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
            className="flex items-start gap-4">
              <div className="w-2 h-2 bg-gray-900 rounded-full mt-2"></div>
              <div>
                <div className="font-bold text-lg text-gray-900 mb-1">Physical Position Offsetting</div>
                <div className="text-gray-600">Natural hedging through balanced physical positions across multiple markets and products.</div>
              </div>
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
            className="flex items-start gap-4">
              <div className="w-2 h-2 bg-gray-900 rounded-full mt-2"></div>
              <div>
                <div className="font-bold text-lg text-gray-900 mb-1">Insurance Coverage</div>
                <div className="text-gray-600">Comprehensive insurance for freight, operational, country, and political risks.</div>
              </div>
            </motion.div>
            
            <motion.div
            initial={fromLeftToRight.initial}
                  whileInView={fromLeftToRight.whileInView}
                  viewport={others.viewport}
                  transition={{
                    duration:0.8,
                    ease:"easeInOut",
                    delay: 0.4
                  }}
            className="flex items-start gap-4">
              <div className="w-2 h-2 bg-gray-900 rounded-full mt-2"></div>
              <div>
                <div className="font-bold text-lg text-gray-900 mb-1">Information Systems</div>
                <div className="text-gray-600">Proprietary platforms consolidating trade positions, exposures, and P&L globally on a daily basis.</div>
              </div>
            </motion.div>
            
          </div>
        </div>
        <div className="bg-gray-50 rounded-2xl p-10 border border-gray-200">
          <motion.h3
          initial={fromRightToLeft.initial}
                  whileInView={fromRightToLeft.whileInView}
                  viewport={others.viewport}
                  transition={{
                    duration:0.8,
                    ease:"easeInOut",
                    delay: 0.1
                  }}
          className="text-2xl font-bold text-gray-900 mb-6">Control Functions</motion.h3>
          <div className="space-y-4">
            <motion.div
            initial={fromRightToLeft.initial}
                  whileInView={fromRightToLeft.whileInView}
                  viewport={others.viewport}
                  transition={{
                    duration:0.8,
                    ease:"easeInOut",
                    delay: 0.2
                  }}
            className="pb-4 border-b border-gray-200">
              <div className="font-bold text-gray-900 mb-1">Risk Management</div>
              <div className="text-gray-600 text-sm">Daily exposure monitoring and stress testing</div>
            </motion.div>

            <motion.div
            initial={fromRightToLeft.initial}
                  whileInView={fromRightToLeft.whileInView}
                  viewport={others.viewport}
                  transition={{
                    duration:0.8,
                    ease:"easeInOut",
                    delay: 0.3
                  }}
            className="pb-4 border-b border-gray-200">
              <div className="font-bold text-gray-900 mb-1">Credit & Finance</div>
              <div className="text-gray-600 text-sm">Counterparty assessment and liquidity management</div>
            </motion.div>

            <motion.div
            initial={fromRightToLeft.initial}
                  whileInView={fromRightToLeft.whileInView}
                  viewport={others.viewport}
                  transition={{
                    duration:0.8,
                    ease:"easeInOut",
                    delay: 0.4
                  }}
            className="pb-4 border-b border-gray-200">
              <div className="font-bold text-gray-900 mb-1">Compliance</div>
              <div className="text-gray-600 text-sm">Regulatory adherence and sanctions screening</div>
            </motion.div>

            <motion.div
            initial={fromRightToLeft.initial}
                  whileInView={fromRightToLeft.whileInView}
                  viewport={others.viewport}
                  transition={{
                    duration:0.8,
                    ease:"easeInOut",
                    delay: 0.5
                  }}
            className="pb-4 border-b border-gray-200">
              <div className="font-bold text-gray-900 mb-1">Tax & Controlling</div>
              <div className="text-gray-600 text-sm">Financial controls and reporting oversight</div>
            </motion.div>

            <motion.div
            initial={fromRightToLeft.initial}
                  whileInView={fromRightToLeft.whileInView}
                  viewport={others.viewport}
                  transition={{
                    duration:0.8,
                    ease:"easeInOut",
                    delay: 0.6
                  }}
            >
              <div className="font-bold text-gray-900 mb-1">Internal Audit</div>
              <div className="text-gray-600 text-sm">Independent verification and process review</div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  </section>
);


export default RiskTools