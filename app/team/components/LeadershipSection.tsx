"use client";

import { motion } from "framer-motion";
import { leadership } from "./data";
import { staggerContainer, fadeInUp } from "./animationVariants";

export default function LeadershipSection() {
  return (
    <section className="py-16 md:py-32 px-4 sm:px-6 md:px-12 lg:px-24 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 md:mb-16 border-b border-neutral-200 pb-6 md:pb-8"
        >
          <h2 className="text-xs md:text-sm font-bold uppercase tracking-[0.2em] text-soft-blue-gray mb-2 md:mb-0">
            Leadership
          </h2>
          <p className="text-navy-deep/60 text-xs md:text-sm">
            Singapore. Geneva. Dubai. Now here.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-24">
          {leadership.map((leader) => (
            <motion.div
              key={leader.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="group"
            >
              <motion.div
                variants={fadeInUp}
                className="aspect-[4/5] w-full bg-navy-deep/5 rounded-sm relative overflow-hidden mb-6 md:mb-8"
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-[8rem] md:text-[12rem] font-serif italic text-navy-deep/40 select-none">
                    {leader.initials}
                  </span>
                </div>

                <div className="absolute inset-0 bg-navy-deep/90 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center p-6 md:p-12">
                  <p className="text-white text-base md:text-lg font-light leading-relaxed text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                    "{leader.bio}"
                  </p>
                </div>
              </motion.div>

              <motion.div variants={fadeInUp} className="space-y-2">
                <div className="flex justify-between items-start border-t border-navy-deep/10 pt-4 md:pt-6">
                  <div>
                    <h3 className="text-2xl md:text-3xl font-medium text-navy-deep tracking-tight">
                      [Name Pending]
                    </h3>
                    <p className="text-gold font-medium mt-1 text-sm md:text-base">
                      {leader.role}
                    </p>
                  </div>
                  <span className="text-xs font-bold text-navy-deep/20">
                    {leader.id}
                  </span>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
