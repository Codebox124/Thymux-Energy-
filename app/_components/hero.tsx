"use client";

import { motion } from "framer-motion";
import {
  IconArrowRight,
  IconSun,
  IconBolt,
  IconLeaf,
} from "@tabler/icons-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-navy-deep">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/hero.jpg"
          alt="Solar Panels"
          className="object-cover opacity-30 h-screen w-full"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy-deep/60 via-navy-deep/80 to-navy-deep"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 ">
        <div className="max-w-4xl flex items-center flex-col justify-center mx-auto min-h-[90vh]">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-2 bg-white/5 border justify-center mx-auto border-white/10 w-fit px-4 py-2 rounded-full mb-8 backdrop-blur-sm"
          >
            <IconSun className="text-gold" size={20} />
            <span className="text-cream/80 font-nunito md:text-sm text-xs font-medium tracking-wide uppercase">
              Leading the Renewable Revolution
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-6xl lg:text-7xl text-center font-sora font-bold text-white leading-[1.1] mb-8"
          >
            Powering a <span className="text-gold">Sustainable</span> Future for
            Everyone
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg text-cream/70 font-nunito max-w-2xl mb-10 leading-relaxed text-center"
          >
            Thymux Energy provides state-of-the-art solar solutions tailored for
            domestic and industrial needs. Harness the power of the sun and
            reduce your carbon footprint today.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button className="bg-gold hover:bg-bright-gold text-navy-deep px-8 py-4 rounded-full font-nunito font-bold text-lg transition-all flex items-center justify-center gap-2 group shadow-[0_10px_30px_rgba(212,175,55,0.2)]">
              Get a Free Quote
              <IconArrowRight className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="border border-gold/30 hover:border-gold text-white px-8 py-4 rounded-full font-nunito font-bold text-lg transition-all flex items-center justify-center gap-2 bg-white/5 backdrop-blur-sm">
              View Our Projects
            </button>
          </motion.div>
        </div>

        {/* Feature Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-24 border-t border-white/10 py-12"
        >
          <div className="flex items-start gap-4">
            <div className="p-3 bg-gold/10 rounded-xl">
              <IconBolt className="text-gold" size={28} />
            </div>
            <div>
              <h3 className="text-white font-sora font-bold text-xl mb-2">
                High Efficiency
              </h3>
              <p className="text-cream/50 font-nunito text-sm">
                Advanced PV technology for maximum energy output in all
                conditions.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="p-3 bg-gold/10 rounded-xl">
              <IconLeaf className="text-gold" size={28} />
            </div>
            <div>
              <h3 className="text-white font-sora font-bold text-xl mb-2">
                Sustainable
              </h3>
              <p className="text-cream/50 font-nunito text-sm">
                100% clean energy solutions that protect our planet for future
                generations.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="p-3 bg-gold/10 rounded-xl">
              <IconSun className="text-gold" size={28} />
            </div>
            <div>
              <h3 className="text-white font-sora font-bold text-xl mb-2">
                Smart Savings
              </h3>
              <p className="text-cream/50 font-nunito text-sm">
                Significantly reduce your monthly energy bills from day one.
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Decorative Gradient Blobs */}
      <div className="absolute top-1/4 -right-20 w-96 h-96 bg-gold/10 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-0 -left-20 w-80 h-80 bg-navy/30 blur-[100px] rounded-full pointer-events-none"></div>
    </section>
  );
};

export default Hero;
