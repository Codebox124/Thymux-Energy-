"use client"
import { motion } from "framer-motion";
import { fromLeftToRight, fromRightToLeft, others } from "./Animations";
const Location = () => (
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
          className="text-4xl md:text-5xl font-bold mb-6">
            Strategically Positioned in Dubai
          </motion.h2>
          <motion.p
          initial={fromLeftToRight.initial}
        whileInView={fromLeftToRight.whileInView}
        viewport={others.viewport}
        transition={{
          duration:0.9,
          ease:"easeInOut",
          delay: 0.6
        }}
          className="text-gray-300 text-lg leading-relaxed mb-6">
            Registered in DMCC, one of the region's most prestigious economic zones, Thymus Energy benefits from world-class infrastructure and seamless access to global markets.
          </motion.p>
          <motion.p
          initial={fromLeftToRight.initial}
        whileInView={fromLeftToRight.whileInView}
        viewport={others.viewport}
        transition={{
          duration:1,
          ease:"easeInOut",
          delay: 0.6
        }}
          className="text-gray-300 leading-relaxed">
            Our location in the thriving business hub of Dubai provides unparalleled connectivity to producers, refineries, trading houses, and end-users across key regions worldwide.
          </motion.p>
        </div>
        <motion.div
        initial={fromRightToLeft.initial}
        whileInView={fromRightToLeft.whileInView}
        viewport={others.viewport}
        transition={{
          duration:0.8,
          ease:"easeInOut",
          delay: 0.6
        }}
        className="bg-gray-800 rounded-2xl p-8 border border-gray-700">
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <div className="w-2 h-2 bg-white rounded-full mt-2"></div>
              <div>
                <div className="font-bold text-lg mb-1">Headquarters</div>
                <div className="text-gray-400">DMCC, Dubai, UAE</div>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-2 h-2 bg-white rounded-full mt-2"></div>
              <div>
                <div className="font-bold text-lg mb-1">Established</div>
                <div className="text-gray-400">2025</div>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-2 h-2 bg-white rounded-full mt-2"></div>
              <div>
                <div className="font-bold text-lg mb-1">Market Focus</div>
                <div className="text-gray-400">Middle East, Asia-Pacific, Africa, Europe</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default Location;