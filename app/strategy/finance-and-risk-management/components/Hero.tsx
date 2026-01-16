"use client"
import { Shield } from "lucide-react";
import { motion } from "framer-motion";
import { fromBottomToTop, others } from "@/app/solutions/components/Animations";
import { IconArrowRight } from "@tabler/icons-react";

const Hero = () => (
  <section className="bg-white relative border-b border-gray-200">
     <div className="absolute inset-0 z-0">
        <img
          src="/finance-hero.jpg"
          alt="Solar Panels"
          className="object-cover opacity-30 h-screen w-full"
        />
        <div className="absolute inset-0 bg-linear-to-b from-navy-deep/60 via-navy-deep/80 to-navy-deep"></div>
      </div>
    <div className="max-w-7xl relative z-1 mx-auto px-6 py-20 md:py-32">
      <div className="max-w-3xl">
        <motion.div
                initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={others.viewport}
                className="flex items-center gap-2 bg-white/5 border justify-center border-white/10 w-fit px-4 py-2 rounded-full mb-8 backdrop-blur-sm">
                  <Shield className="w-4 h-4 text-gold" />
                  <span className="text-cream/80 font-nunito md:text-sm text-xs font-medium tracking-wide uppercase">Finance & Risk Management</span>
                </motion.div>
        <motion.h1
                        initial={fromBottomToTop.initial}
                        whileInView={fromBottomToTop.whileInView}
                        viewport={others.viewport}
                        transition={{
                            duration:0.8,
                            ease:"easeInOut"
                        }}
                        className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
          Financial Strength Meets Risk Excellence
        </motion.h1>
        <motion.p
        initial={fromBottomToTop.initial}
        whileInView={fromBottomToTop.whileInView}
        viewport={others.viewport}
        transition={{
          duration:0.8,
          ease:"easeInOut",
          delay: 0.6
        }}
        className="text-xl text-cream/70 mb-8 leading-relaxed">
          At Thymus Energy, robust financial structures and comprehensive risk management frameworks form the foundation of our trading operations. We ensure stable growth while navigating the complexities of global energy markets.
        </motion.p>
        <motion.div
            initial={fromBottomToTop.initial}
        whileInView={fromBottomToTop.whileInView}
        viewport={others.viewport}
        transition={{
          duration:0.8,
          ease:"easeInOut",
          delay: 0.6
        }}
            className="flex flex-col sm:flex-row gap-4 "
          >
            <button className="bg-gold cursor-pointer hover:bg-bright-gold text-navy-deep px-8 py-4 rounded-full font-nunito font-bold text-lg transition-all flex items-center justify-center gap-2 group shadow-[0_10px_30px_rgba(212,175,55,0.2)]">
              Our Approach
              <IconArrowRight className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="border cursor-pointer border-gold/30 hover:border-gold text-white px-8 py-4 rounded-full font-nunito font-bold text-lg transition-all flex items-center justify-center gap-2 bg-white/5 backdrop-blur-sm">
              Contact Finance
            </button>
          </motion.div>
      </div>
    </div>
  </section>
);

export default Hero;
