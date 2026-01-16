"use client"
import { Shield, TrendingUp, Zap } from "lucide-react";
import { motion } from "framer-motion";
import { fromLeftToRight, fromRightToLeft, others } from "@/app/solutions/components/Animations";

const DigitalAdvantage = () => (
  <section className="bg-gray-900 text-white">
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
          className="text-4xl md:text-5xl font-bold text-white mb-4">
            The Digital Advantage
          </motion.h2>
          <motion.p
          initial={fromLeftToRight.initial}
                  whileInView={fromLeftToRight.whileInView}
                  viewport={others.viewport}
                  transition={{
                    duration:0.8,
                    ease:"easeInOut",
                    delay: 0.6
                  }}
          className="text-gray-300 text-lg leading-relaxed mb-6">
            As a young and ambitious enterprise launched in 2025, Thymus Energy was built digital-first. Our technology infrastructure enables unprecedented agility and responsiveness.
          </motion.p>
          <div className="space-y-4">
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
              <TrendingUp className="w-6 h-6 text-white mt-1 flex-shrink-0" />
              <div>
                <div className="font-bold text-lg mb-1">Swift Market Response</div>
                <div className="text-gray-400">Digital tools enable rapid response to market opportunities and client needs in real-time.</div>
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
              <Zap className="w-6 h-6 text-white mt-1 flex-shrink-0" />
              <div>
                <div className="font-bold text-lg mb-1">Enhanced Efficiency</div>
                <div className="text-gray-400">Automated workflows reduce manual processes and accelerate transaction execution.</div>
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
              <Shield className="w-6 h-6 text-white mt-1 flex-shrink-0" />
              <div>
                <div className="font-bold text-lg mb-1">Maximum Transparency</div>
                <div className="text-gray-400">Digital platforms provide full visibility into pricing, specifications, and execution status.</div>
              </div>
            </motion.div>
          </div>
        </div>
        <div className="bg-gray-800 rounded-2xl p-10 border border-gray-700">
          <motion.h3
          initial={fromRightToLeft.initial}
                  whileInView={fromRightToLeft.whileInView}
                  viewport={others.viewport}
                  transition={{
                    duration:0.8,
                    ease:"easeInOut",
                    delay: 0.1
                  }}
          className="text-2xl font-bold mb-6">Technology Stack</motion.h3>
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
            className="border-l-4 border-white pl-4">
              <div className="font-bold mb-1">Trading Platforms</div>
              <div className="text-gray-400 text-sm">Enterprise-grade systems for order management and execution</div>
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
            className="border-l-4 border-gray-600 pl-4">
              <div className="font-bold mb-1">Analytics & BI</div>
              <div className="text-gray-400 text-sm">Advanced data analytics for market intelligence and insights</div>
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
            className="border-l-4 border-gray-600 pl-4">
              <div className="font-bold mb-1">Compliance Systems</div>
              <div className="text-gray-400 text-sm">Automated screening and regulatory compliance tools</div>
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
            className="border-l-4 border-gray-600 pl-4">
              <div className="font-bold mb-1">Integration Layer</div>
              <div className="text-gray-400 text-sm">API connections with shipping, inspection, and financial partners</div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default DigitalAdvantage