"use client";

import { motion } from "framer-motion";

export default function ContactSection() {
  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 md:px-12 lg:px-24 bg-white text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto"
      >
        <h2 className="text-xl md:text-2xl font-bold text-navy-deep uppercase tracking-widest mb-4 md:mb-6">
          Let's talk business
        </h2>
        <p className="text-soft-blue-gray mb-8 md:mb-10 leading-relaxed text-sm md:text-base px-4">
          Whether you need to source crude, move fuel oil, or manage risk in
          volatile markets—our team provides the reliable support your
          operations require. Dubai-based. Globally connected.
        </p>
        <a
          href="/contact"
          className="inline-block border-b-2 border-navy-deep pb-1 text-navy-deep font-medium hover:text-gold hover:border-gold transition-all duration-300 text-sm md:text-base"
        >
          Get in touch &rarr;
        </a>
      </motion.div>
    </section>
  );
}
