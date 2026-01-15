"use client"
import { Clock, Shield, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";
import { fromBottomToTop, others } from "./Animations";
const Values = () => {
  const values = [
    {
      icon: Shield,
      title: "Compliance & Integrity",
      description: "Strict adherence to international sanctions and regulatory standards including UN, EU, UK, US, and Swiss compliance regimes."
    },
    {
      icon: TrendingUp,
      title: "Operational Excellence",
      description: "Tailor-made solutions meeting specific commercial, logistical, and regulatory requirements of our clients."
    },
    {
      icon: Clock,
      title: "Agility & Innovation",
      description: "Digital transformation and advanced trading platforms enable swift response to market opportunities."
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
            Our Commitment
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
            Building long-term partnerships grounded in integrity and mutual growth
          </motion.p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, idx) => (
            <motion.div
            initial={fromBottomToTop.initial}
        whileInView={fromBottomToTop.whileInView}
        viewport={others.viewport}
        transition={{
          duration:0.8,
          ease:"easeInOut",
          delay: 0.1 * idx
        }}
            key={idx} className="bg-white p-10 rounded-2xl border border-gray-200">
              <value.icon className="w-12 h-12 text-gold mb-6" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {value.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Values;