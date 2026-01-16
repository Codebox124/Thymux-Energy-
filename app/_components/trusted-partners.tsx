"use client";

import { motion } from "framer-motion";
import {
  Fuel,
  Ship,
  Droplets,
  Factory,
  Gauge,
} from "lucide-react";

const partners = [
  { name: "PetroMax Trading", icon: Fuel },
  { name: "Maritime Logistics", icon: Ship },
  { name: "Gulf Energy Corp", icon: Droplets },
  { name: "Refinery Solutions", icon: Factory },
  { name: "Energy Metrics", icon: Gauge },
];

const TrustedPartners = () => {
  return (
    <section className="py-20 bg-slate-900/50 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1601972599748-26dd1bebd7a2?w=1600&q=80')] bg-cover bg-center opacity-5"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/90 via-slate-900/80 to-slate-950/90"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-amber-500 font-semibold uppercase tracking-[0.2em] text-sm mb-4"
          >
            Trusted by Industry Leaders
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-white"
          >
            Powering Success with Global Partners
          </motion.h2>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-60 hover:opacity-100 transition-opacity duration-500">
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center gap-3 group cursor-pointer"
            >
              <partner.icon
                size={40}
                className="text-amber-500 group-hover:text-amber-400 transition-colors"
              />
              <span className="text-white font-bold text-xl tracking-tight">
                {partner.name.split(" ")[0]}
                <span className="text-amber-500">
                  {" " + (partner.name.split(" ")[1] || "")}
                </span>
              </span>
            </motion.div>
          ))}
        </div>

        {/* Animated Line */}
        <div className="mt-20 h-[1px] w-full bg-gradient-to-r from-transparent via-amber-500/20 to-transparent"></div>
      </div>
    </section>
  );
};

export default TrustedPartners;