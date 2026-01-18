"use client";

import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative py-24 md:py-32 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-navy-deep via-navy-deep to-navy-deep/90"></div>

      {/* Grid background */}
      <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.1)_1px,transparent_1px)] [background-size:16px_16px] opacity-20 pointer-events-none" />

      <div className="container mx-auto relative z-10 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center justify-center py-1.5 px-4 mb-6 text-xs font-bold tracking-wider uppercase text-gold border border-gold/40 rounded-full bg-gold/10 backdrop-blur-sm"
          >
            Media & News Hub
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-5xl md:text-6xl lg:text-7xl font-sora font-bold text-white mb-6 leading-tight"
          >
            Stay Updated with <span className="text-gold">Thymux Energy</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-lg md:text-xl text-soft-blue-gray max-w-3xl mx-auto leading-relaxed"
          >
            Discover the latest news, press releases, innovation announcements,
            and industry insights from Thymux Energy. Follow our journey as we
            revolutionize renewable energy solutions.
          </motion.p>
        </motion.div>
      </div>

      {/* Decorative elements */}
      <motion.div
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute top-20 right-10 w-64 h-64 bg-gold/10 rounded-full blur-3xl opacity-30 pointer-events-none"
      />
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
        className="absolute bottom-20 left-10 w-64 h-64 bg-gold/10 rounded-full blur-3xl opacity-30 pointer-events-none"
      />
    </section>
  );
};

export default Hero;
