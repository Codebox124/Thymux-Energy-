"use client"
import { fromBottomToTop, others } from "@/app/solutions/components/Animations";
import { motion } from "framer-motion";
import { Database, Globe, LineChart } from "lucide-react";

const TradingPlatforms = () => {
  const platforms = [
    {
      icon: LineChart,
      title: "Advanced Trading Platforms",
      description: "State-of-the-art digital trading systems that enable real-time execution, pricing optimization, and seamless transaction management across all petroleum products."
    },
    {
      icon: Database,
      title: "Market Intelligence Systems",
      description: "Sophisticated analytics tools that monitor geopolitical developments, market fundamentals, and refining margins to provide timely and insightful intelligence."
    },
    {
      icon: Globe,
      title: "Global Network Integration",
      description: "Integrated platforms connecting producers, refineries, shipping companies, inspection agencies, and financial institutions for smooth execution."
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
            Trading Infrastructure
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
            Enterprise-grade platforms built for speed, accuracy, and transparency
          </motion.p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {platforms.map((platform, idx) => (
            <motion.div
            initial={fromBottomToTop.initial}
                    whileInView={fromBottomToTop.whileInView}
                    viewport={others.viewport}
                    transition={{
                      duration:0.8,
                      ease:"easeInOut",
                      delay: 0.1 * idx
                    }}
            key={idx} className="bg-white p-10 rounded-2xl border border-gray-200 hover:shadow-lg transition-shadow">
              <platform.icon className="w-12 h-12 text-gold mb-6" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {platform.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {platform.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TradingPlatforms