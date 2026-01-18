"use client";

import { motion } from "framer-motion";

const stats = [
  {
    value: "500+",
    label: "News Articles Published",
    description: "Sharing insights and updates regularly",
  },
  {
    value: "2M+",
    label: "Monthly Readers",
    description: "Engaged global community",
  },
  {
    value: "50+",
    label: "Countries Covered",
    description: "Worldwide renewable energy reach",
  },
  {
    value: "24/7",
    label: "News Coverage",
    description: "Always keeping you updated",
  },
];

const Stats = () => {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="inline-flex items-center justify-center py-1.5 px-4 mb-6 text-xs font-bold tracking-wider uppercase text-gold border border-gold/40 rounded-full bg-gold/10"
          >
            Our Reach
          </motion.span>

          <h2 className="text-4xl md:text-5xl font-sora font-bold text-navy-deep mb-4">
            Media <span className="text-gold">Impact</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="relative group"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-gold to-gold/50 rounded-lg opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur"></div>

              <div className="relative bg-white border border-navy-deep/10 rounded-lg p-8 text-center hover:border-gold/40 transition-all duration-300">
                <motion.div
                  initial={{ scale: 0.9 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.2, type: "spring" }}
                  className="text-5xl md:text-6xl font-sora font-bold text-gold mb-3"
                >
                  {stat.value}
                </motion.div>

                <h3 className="text-lg font-sora font-bold text-navy-deep mb-2">
                  {stat.label}
                </h3>

                <p className="text-sm text-soft-blue-gray">
                  {stat.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
