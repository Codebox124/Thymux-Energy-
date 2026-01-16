"use client";

import { motion } from "framer-motion";
import {
  IconArrowRight,
  IconSun,
  IconBolt,
  IconLeaf,
} from "@tabler/icons-react";
import { Globe, Shield, TrendingUp, Zap } from "lucide-react";

const Hero = () => {
  return (
       <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-slate-950">
        {/* Background Image Layer */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1584270148139-7dfa9637869b?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center opacity"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/60 via-slate-950/80 to-slate-950"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl flex items-center flex-col justify-center mx-auto min-h-[90vh]">
            <div className="flex items-center gap-2 bg-white/5 border justify-center mx-auto border-white/10 w-fit px-4 py-2 rounded-full mb-8 backdrop-blur-sm">
              <Globe className="text-amber-500" size={20} />
              <span className="text-slate-300 text-sm font-medium tracking-wide uppercase">
                Established 2025 • DMCC Dubai, UAE
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl text-center font-bold text-white leading-tight mb-8">
              Energizing Global Markets with{' '}
              <span className="text-amber-500">Integrity</span>
            </h1>

            <p className="text-lg text-slate-400 max-w-2xl mb-10 leading-relaxed text-center">
              Thymus Energy FZCO is a dynamic crude oil and petroleum products trading company, specializing in Fuel Oil, Gas Oil, Gasoline, LPG, Base Oils, and Bitumen across global markets.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-amber-500 hover:bg-amber-600 text-slate-900 px-8 py-4 rounded-full font-bold text-lg transition-all flex items-center justify-center gap-2 group shadow-[0_10px_30px_rgba(251,191,36,0.3)]">
                Request Quote
                <TrendingUp className="group-hover:translate-x-1 transition-transform" size={20} />
              </button>
              <button className="border border-amber-500/30 hover:border-amber-500 text-white px-8 py-4 rounded-full font-bold text-lg transition-all flex items-center justify-center gap-2 bg-white/5 backdrop-blur-sm">
                View Products
              </button>
            </div>
          </div>

          {/* Feature Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-24 border-t border-white/10 py-12">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-amber-500/10 rounded-xl">
                <Zap className="text-amber-500" size={28} />
              </div>
              <div>
                <h3 className="text-white font-bold text-xl mb-2">
                  Market Leader
                </h3>
                <p className="text-slate-400 text-sm">
                  Recognized as the lowest cost provider of Fuel Oil with expert cargo blending capabilities.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="p-3 bg-amber-500/10 rounded-xl">
                <Globe className="text-amber-500" size={28} />
              </div>
              <div>
                <h3 className="text-white font-bold text-xl mb-2">
                  Global Reach
                </h3>
                <p className="text-slate-400 text-sm">
                  Operating across Middle East, Asia-Pacific, Africa, Europe with strong producer relationships.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="p-3 bg-amber-500/10 rounded-xl">
                <Shield className="text-amber-500" size={28} />
              </div>
              <div>
                <h3 className="text-white font-bold text-xl mb-2">
                  Full Compliance
                </h3>
                <p className="text-slate-400 text-sm">
                  Strict adherence to UN, EU, UK, Swiss, and US sanctions regimes with robust due diligence.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative Gradient Blobs */}
        <div className="absolute top-1/4 -right-20 w-96 h-96 bg-amber-500/10 blur-[120px] rounded-full pointer-events-none"></div>
        <div className="absolute bottom-0 -left-20 w-80 h-80 bg-slate-800/30 blur-[100px] rounded-full pointer-events-none"></div>
      </section>
  );
};

export default Hero;