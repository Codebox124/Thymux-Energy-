"use client";

import { motion } from "framer-motion";

export default function CTASection() {
  return (
    <section className="py-16 md:py-32 px-4 sm:px-6 md:px-12 lg:px-24 bg-navy-deep text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.1)_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none" />
      <div className="max-w-5xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light mb-6 md:mb-8 leading-tight px-4">
            We don't trade commodities. <br className="hidden sm:block" />
            <span className="text-gold font-serif italic">
              We trade on relationships.
            </span>
          </h2>
          <div className="w-px h-12 md:h-16 bg-gold/50 mx-auto mb-6 md:mb-8"></div>
          <p className="text-white/70 max-w-2xl mx-auto text-base md:text-lg font-light px-4">
            Around the clock. Across time zones. Every cargo, every contract,
            backed by people who've been doing this for decades, not quarters.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
