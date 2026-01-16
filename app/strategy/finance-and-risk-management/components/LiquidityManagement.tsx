"use client"
import { fromLeftToRight, fromRightToLeft, others } from "@/app/solutions/components/Animations";
import { motion } from "framer-motion";
import { BarChart3 } from "lucide-react";

const LiquidityManagement = () => (
  <section className="bg-white border-b border-gray-200">
    <div className="max-w-7xl mx-auto px-6 py-20">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="bg-gray-50 rounded-2xl p-10 border border-gray-200">
          <BarChart3 className="w-12 h-12 text-gold mb-6" />
          <motion.h3
          initial={fromLeftToRight.initial}
                  whileInView={fromLeftToRight.whileInView}
                  viewport={others.viewport}
                  transition={{
                    duration:0.8,
                    ease:"easeInOut",
                    delay: 0.6
                  }}
          className="text-2xl font-bold text-gray-900 mb-4">Managing Volatility</motion.h3>
          <motion.p
          initial={fromLeftToRight.initial}
                  whileInView={fromLeftToRight.whileInView}
                  viewport={others.viewport}
                  transition={{
                    duration:0.8,
                    ease:"easeInOut",
                    delay: 0.6
                  }}
          className="text-gray-600 leading-relaxed mb-6">
            We perform daily position monitoring and stress tests for extreme market movements, constantly assessing the size of our physical and hedge book and associated liquidity needs.
          </motion.p>
          <div className="space-y-3">
            <motion.div
            initial={fromLeftToRight.initial}
                  whileInView={fromLeftToRight.whileInView}
                  viewport={others.viewport}
                  transition={{
                    duration:0.8,
                    ease:"easeInOut",
                    delay: 0.1
                  }}
            className="flex items-center gap-3">
              <div className="w-1.5 h-1.5 bg-gray-900 rounded-full"></div>
              <span className="text-gray-700">Daily exposure analysis and limits monitoring</span>
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
            className="flex items-center gap-3">
              <div className="w-1.5 h-1.5 bg-gray-900 rounded-full"></div>
              <span className="text-gray-700">Stress testing for market scenarios</span>
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
            className="flex items-center gap-3">
              <div className="w-1.5 h-1.5 bg-gray-900 rounded-full"></div>
              <span className="text-gray-700">Margin call preparedness and response</span>
            </motion.div>
          </div>
        </div>
        <div>
          <motion.h2
          initial={fromRightToLeft.initial}
                  whileInView={fromRightToLeft.whileInView}
                  viewport={others.viewport}
                  transition={{
                    duration:0.8,
                    ease:"easeInOut",
                    delay: 0.6
                  }}
          className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Liquidity & Capital Management
          </motion.h2>
          <motion.p
          initial={fromRightToLeft.initial}
                  whileInView={fromRightToLeft.whileInView}
                  viewport={others.viewport}
                  transition={{
                    duration:0.8,
                    ease:"easeInOut",
                    delay: 0.1
                  }}
          className="text-lg text-gray-600 mb-6 leading-relaxed">
            Thymus Energy maintains a strong liquidity position with assets optimally financed. Our culture of financial prudence ensures adequate funding is available to respond to market requirements.
          </motion.p>
          <motion.div
          initial={fromRightToLeft.initial}
                  whileInView={fromRightToLeft.whileInView}
                  viewport={others.viewport}
                  transition={{
                    duration:0.8,
                    ease:"easeInOut",
                    delay: 0.2
                  }}
          className="bg-gray-50 rounded-xl p-6 border border-gray-200">
            <div className="font-bold text-gray-900 mb-3">Capital Adequacy</div>
            <p className="text-gray-600 leading-relaxed">
              Backed by a robust financial structure and clear growth strategy, Thymus Energy is equipped to handle transactions of any size, from spot deals to long-term supply agreements, while maintaining financial stability.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  </section>
);

export default LiquidityManagement