"use client";

import { motion, easeOut } from "framer-motion";
import { Globe, Shield, TrendingUp, Zap } from "lucide-react";

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: easeOut,
      },
    },
  };

  const featureVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center pt-16 md:pt-20 overflow-hidden bg-slate-950">
      {/* Background Image Layer */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1584270148139-7dfa9637869b?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center opacity md:opacity-80"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/70 via-slate-950/85 to-slate-950"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl flex items-center flex-col justify-center mx-auto min-h-[85vh] md:min-h-[90vh] py-8"
        >
          <motion.div
            variants={itemVariants}
            className="flex items-center gap-2 bg-white/5 border justify-center mx-auto border-white/10 w-fit px-3 py-1.5 md:px-4 md:py-2 rounded-full mb-6 md:mb-8 backdrop-blur-sm"
          >
            <Globe className="text-amber-500" size={16} />
            <span className="text-slate-300 text-xs md:text-sm font-medium tracking-wide uppercase">
              <span className="hidden sm:inline">Established 2025 • </span>DMCC Dubai, UAE
            </span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl text-center font-bold text-white leading-tight mb-4 md:mb-8 px-2"
          >
            Energizing Global Markets with{' '}
            <span className="text-amber-500 inline-block">Integrity</span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-sm sm:text-base md:text-lg text-slate-400 max-w-2xl mb-6 md:mb-10 leading-relaxed text-center px-4"
          >
            Thymus Energy FZCO is a dynamic crude oil and petroleum products trading company, specializing in Fuel Oil, Gas Oil, Gasoline, LPG, Base Oils, and Bitumen across global markets.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center w-full px-4 sm:w-auto"
          >
            <a className="r" href="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-amber-500 hover:bg-amber-600 text-slate-900 px-6 py-3 md:px-8 cursor-pointe md:py-4 rounded-full font-bold text-base md:text-lg transition-all flex items-center justify-center gap-2 group shadow-[0_10px_30px_rgba(251,191,36,0.3)]"
              >
                Request Quote
                <TrendingUp className="group-hover:translate-x-1 transition-transform" size={18} />
              </motion.button>
            </a>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border border-amber-500/30 hover:border-amber-500 text-white px-6 py-3 md:px-8 md:py-4 rounded-full font-bold text-base md:text-lg transition-all flex items-center justify-center gap-2 bg-white/5 backdrop-blur-sm"
            >
              View Projects
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Feature Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 mt-12 md:mt-24 border-t border-white/10 py-8 md:py-12 px-4">
          {[
            {
              icon: Zap,
              title: "Market Leader",
              description: "Recognized as the lowest cost provider of Fuel Oil with expert cargo blending capabilities.",
            },
            {
              icon: Globe,
              title: "Global Reach",
              description: "Operating across Middle East, Asia-Pacific, Africa, Europe with strong producer relationships.",
            },
            {
              icon: Shield,
              title: "Full Compliance",
              description: "Strict adherence to UN, EU, UK, Swiss, and US sanctions regimes with robust due diligence.",
            },
          ].map((feature, index) => (
            <motion.div
              key={index}
              variants={featureVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="flex items-start gap-3 md:gap-4 bg-white/5 md:bg-transparent p-4 md:p-0 rounded-xl md:rounded-none backdrop-blur-sm md:backdrop-blur-none border border-white/5 md:border-0"
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className="p-2 md:p-3 bg-amber-500/10 rounded-xl flex-shrink-0"
              >
                <feature.icon className="text-amber-500" size={24} />
              </motion.div>
              <div>
                <h3 className="text-white font-bold text-base md:text-xl mb-1 md:mb-2">
                  {feature.title}
                </h3>
                <p className="text-slate-400 text-xs md:text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Decorative Gradient Blobs */}
      <div className="absolute top-1/4 -right-20 w-64 h-64 md:w-96 md:h-96 bg-amber-500/10 blur-[80px] md:blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-0 -left-20 w-56 h-56 md:w-80 md:h-80 bg-slate-800/30 blur-[80px] md:blur-[100px] rounded-full pointer-events-none"></div>
    </section>
  );
};

export default Hero;