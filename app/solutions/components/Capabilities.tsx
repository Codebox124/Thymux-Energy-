"use client"
import { Globe, Ship, Target, Zap } from "lucide-react";
import { motion } from "framer-motion";
import { fromBottomToTop, others } from "./Animations";

const Capabilities = () => {
  const capabilities = [
    {
      icon: Globe,
      title: "Global Reach",
      description: "Operating across Middle East, Asia-Pacific, Africa, Europe, and beyond with strategic partnerships."
    },
    {
      icon: Ship,
      title: "Logistics Excellence",
      description: "Strategic alliances with leading shipping companies and inspection agencies ensure seamless execution."
    },
    {
      icon: Target,
      title: "Cargo Blending",
      description: "Strong expertise in fuel oil blending, positioning us as the market's lowest cost provider."
    },
    {
      icon: Zap,
      title: "Market Intelligence",
      description: "Real-time monitoring of geopolitical developments, fundamentals, and refining margins."
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
            Our Capabilities
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
            Decades of collective experience in trading, shipping, logistics, and risk management
          </motion.p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
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
            key={idx} className="text-center">
              <div className="p-3 bg-gold/10 rounded-xl w-[fit-content] mx-auto mb-4">
                <capability.icon className="w-8 h-8 text-gold" />
              </div>
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

export default Capabilities;