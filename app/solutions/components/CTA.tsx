"use client"
import { IconArrowRight } from "@tabler/icons-react";
import { motion } from "framer-motion";
import { fromBottomToTop, others } from "./Animations";

const CTA = () => (
  <section className="bg-white">
    <div className="max-w-7xl mx-auto px-6 py-20">
      <div className="bg-gray-100 rounded-3xl p-12 md:p-16 text-center">
        <motion.h2
        initial={fromBottomToTop.initial}
                whileInView={fromBottomToTop.whileInView}
                viewport={others.viewport}
                transition={{
                  duration:0.8,
                  ease:"easeInOut",
                  delay: 0.6
                }}
        className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Ready to Partner with Us?
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
        className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Join producers, refiners, traders, and consumers worldwide who trust Thymus Energy for professional energy trading solutions.
        </motion.p>
        <motion.button
        initial={fromBottomToTop.initial}
        whileInView={fromBottomToTop.whileInView}
        viewport={others.viewport}
        transition={{
          duration:0.8,
          ease:"easeInOut",
          delay: 0.6
        }}
        className="bg-gold mx-auto cursor-pointer hover:bg-bright-gold text-navy-deep px-8 py-4 rounded-full font-nunito font-bold text-lg transition-bg flex items-center justify-center gap-2 group shadow-[0_10px_30px_rgba(212,175,55,0.2)]">
              Contact Our Team
              <IconArrowRight className="group-hover:translate-x-1 transition-transform" />
        </motion.button>
      </div>
    </div>
  </section>
);

export default CTA;