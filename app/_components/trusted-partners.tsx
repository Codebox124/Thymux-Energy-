"use client";

import { motion } from "framer-motion";
import {
  IconBrandTabler,
  IconWind,
  IconDroplet,
  IconTornado,
  IconRecycle,
} from "@tabler/icons-react";

const partners = [
  { name: "Solaris Tech", icon: IconBrandTabler },
  { name: "WindFlow", icon: IconWind },
  { name: "EcoStream", icon: IconDroplet },
  { name: "Aura Energy", icon: IconTornado },
  { name: "Genesis Renew", icon: IconRecycle },
];

const TrustedPartners = () => {
  return (
    <section className="py-20 bg-cream/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-soft-blue-gray font-nunito font-semibold uppercase tracking-[0.2em] text-sm mb-4"
          >
            Trusted by Industry Leaders
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-sora font-bold text-navy-deep"
          >
            Engineering Excellence with Global Partners
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
              className="flex items-center gap-3 group pointer-events-none"
            >
              <partner.icon
                size={40}
                className="text-gold group-hover:text-gold-brass transition-colors"
              />
              <span className="text-navy font-sora font-bold text-xl tracking-tighter">
                {partner.name.split(" ")[0]}
                <span className="text-gold">
                  {partner.name.split(" ")[1] || ""}
                </span>
              </span>
            </motion.div>
          ))}
        </div>

        {/* Animated Line */}
        <div className="mt-20 h-[1px] w-full bg-gradient-to-r from-transparent via-navy/10 to-transparent"></div>
      </div>
    </section>
  );
};

export default TrustedPartners;
