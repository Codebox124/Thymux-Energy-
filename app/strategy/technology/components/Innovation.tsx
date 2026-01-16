"use client"
import { fromBottomToTop, others } from "@/app/solutions/components/Animations";
import { motion } from "framer-motion";
const Innovation = () => (
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
            Continuous Innovation
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
            We invest in emerging technologies to stay ahead of market evolution
          </motion.p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
          initial={fromBottomToTop.initial}
        whileInView={fromBottomToTop.whileInView}
        viewport={others.viewport}
        transition={{
          duration:0.8,
          ease:"easeInOut",
          delay: 0.1
        }}
          className="bg-gray-50 p-8 rounded-xl border border-gray-200">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Machine Learning & AI</h3>
            <p className="text-gray-600 leading-relaxed">
              Exploring predictive analytics for pricing trends, cargo optimization algorithms, and automated pattern recognition in market movements.
            </p>
          </motion.div>
          <motion.div
          initial={fromBottomToTop.initial}
        whileInView={fromBottomToTop.whileInView}
        viewport={others.viewport}
        transition={{
          duration:0.8,
          ease:"easeInOut",
          delay: 0.2
        }}
          className="bg-gray-50 p-8 rounded-xl border border-gray-200">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Blockchain Integration</h3>
            <p className="text-gray-600 leading-relaxed">
              Evaluating distributed ledger technologies for enhanced transaction transparency, smart contracts, and streamlined documentation.
            </p>
          </motion.div>
          <motion.div
          initial={fromBottomToTop.initial}
        whileInView={fromBottomToTop.whileInView}
        viewport={others.viewport}
        transition={{
          duration:0.8,
          ease:"easeInOut",
          delay: 0.3
        }}
          className="bg-gray-50 p-8 rounded-xl border border-gray-200">
            <h3 className="text-xl font-bold text-gray-900 mb-4">API Ecosystem</h3>
            <p className="text-gray-600 leading-relaxed">
              Building robust APIs for seamless integration with client systems, enabling automated order placement and real-time data feeds.
            </p>
          </motion.div>
          <motion.div
          initial={fromBottomToTop.initial}
        whileInView={fromBottomToTop.whileInView}
        viewport={others.viewport}
        transition={{
          duration:0.8,
          ease:"easeInOut",
          delay: 0.4
        }}
          className="bg-gray-50 p-8 rounded-xl border border-gray-200">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Mobile Solutions</h3>
            <p className="text-gray-600 leading-relaxed">
              Developing mobile-first interfaces for traders and clients to access market data, execute trades, and monitor positions on-the-go.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  </section>
);


export default Innovation