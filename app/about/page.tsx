"use client";

import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "tween",
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function AboutUsPage() {
  return (
    <main className="min-h-screen bg-neutral-50 text-navy-deep selection:bg-gold selection:text-white overflow-hidden">
      <section className="relative pt-20 pb-16 md:pt-40 md:pb-32 px-4 sm:px-6 md:px-12 lg:px-24 border-b border-navy-deep/10 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/about-hero-img.avif')] bg-cover bg-center" />

        <div className="absolute inset-0 bg-navy-deep/85" />

        <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.1)_1px,transparent_1px)] [background-size:16px_16px] opacity-20 pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-5xl"
          >
            <motion.span
              variants={fadeInUp}
              className="inline-flex items-center justify-center py-1.5 px-4 mb-6 md:mb-8 text-[10px] font-bold tracking-[0.25em] uppercase text-white border border-white rounded-full bg-transparent"
            >
              Established 2025
            </motion.span>

            <motion.h1
              variants={fadeInUp}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-light leading-[1.1] md:leading-[0.9] tracking-tighter text-white mb-6 md:mb-10"
            >
              Powering Your Success <br />
              <span className="font-medium text-gold relative inline-block">
                In Global Oil Markets.
                <span className="absolute -bottom-2 left-0 w-full h-[2px] bg-gold/20"></span>
              </span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white max-w-3xl font-extralight leading-relaxed md:leading-normal tracking-tight"
            >
              We are a dynamic, forward-thinking oil and gas trading company,
              strategically headquartered in the thriving business hub of Dubai.
            </motion.p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-32 px-4 sm:px-6 md:px-12 lg:px-24 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-20 items-start">
          <div className="lg:col-span-4 space-y-4 md:space-y-6 lg:sticky lg:top-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-6 md:p-10 bg-neutral-50 border border-neutral-200 rounded-lg transition-all duration-500 hover:border-gold/50 group"
            >
              <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-soft-blue-gray mb-4 flex items-center gap-2">
                <span className="w-2 h-2 bg-gold rounded-full"></span>
                Headquarters
              </h3>
              <p className="text-2xl md:text-3xl font-medium text-navy-deep tracking-tight">
                Dubai, UAE
              </p>
              <p className="text-sm text-soft-blue-gray mt-3 font-medium border-t border-neutral-200 pt-3">
                Registered in DMCC, a prestigious economic zone.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="p-6 md:p-10 bg-neutral-50 border border-neutral-200 rounded-lg transition-all duration-500 hover:border-gold/50 group"
            >
              <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-soft-blue-gray mb-4 flex items-center gap-2">
                <span className="w-2 h-2 bg-gold rounded-full"></span>
                Focus
              </h3>
              <p className="text-2xl md:text-3xl font-medium text-navy-deep tracking-tight">
                Global Trading
              </p>
              <p className="text-sm text-soft-blue-gray mt-3 font-medium border-t border-neutral-200 pt-3">
                Connecting Middle East, Asia-Pacific, Africa, and Europe.
              </p>
            </motion.div>
          </div>

          <div className="lg:col-span-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="space-y-8 md:space-y-12"
            >
              <motion.h2
                variants={fadeInUp}
                className="text-3xl sm:text-4xl md:text-5xl font-medium text-navy-deep tracking-tight leading-tight"
              >
                Energizing Global Markets with Integrity, Efficiency, and
                Excellence.
              </motion.h2>

              <motion.div
                variants={fadeInUp}
                className="prose prose-lg md:prose-xl text-soft-blue-gray/90 font-light leading-relaxed max-w-none"
              >
                <p>
                  Thymus Energy FZCO is a newly established, dynamic, and
                  forward-thinking oil and gas trading company officially
                  launched in 2025. Benefiting from world-class infrastructure
                  and seamless access to global markets, we specialize in the
                  international trading of crude oils and a comprehensive
                  portfolio of refined petroleum products.
                </p>
                <p className="mt-6 md:mt-8">
                  With a sharp focus on reliability, transparency, and
                  operational excellence, Thymus Energy is rapidly positioning
                  itself as a trusted partner for producers, refineries, trading
                  houses, and end-users worldwide.
                </p>
              </motion.div>

              <motion.div
                variants={fadeInUp}
                className="mt-8 md:mt-12 bg-navy-deep p-6 sm:p-8 md:p-12 rounded-2xl relative overflow-hidden group shadow-2xl shadow-navy-deep/20"
              >
                <div className="absolute -top-24 -right-24 w-64 h-64 border border-white/5 rounded-full opacity-50"></div>
                <div className="absolute top-12 -right-12 w-32 h-32 border border-white/10 rounded-full opacity-50"></div>

                <div className="absolute top-0 right-0 p-10 opacity-10 group-hover:opacity-20 transition-opacity duration-700 transform group-hover:scale-110">
                  <svg
                    width="120"
                    height="120"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="text-gold"
                  >
                    <path d="M12 2L2 7l10 5 10-5-10-5zm0 9l2.5-1.25L12 8.5l-2.5 1.25L12 11zm0 2.5l-5-2.5-5 2.5L12 22l10-8.5-5-2.5-5 2.5z" />
                  </svg>
                </div>

                <div className="relative z-10">
                  <h3 className="text-gold font-medium text-xl md:text-2xl mb-4 md:mb-6 flex items-center gap-3">
                    <span className="w-6 md:w-8 h-[1px] bg-gold"></span>
                    Market Edge: Blending Expertise
                  </h3>
                  <p className="text-white/80 text-base md:text-lg leading-relaxed font-light max-w-xl">
                    Thymus Energy possesses strong expertise in cargo blending
                    activity, particularly for Fuel Oil. We are recognized in
                    the market as the{" "}
                    <span className="text-white font-semibold border-b border-gold/50 pb-0.5">
                      lowest cost provider of Fuel Oil
                    </span>
                    , offering tailor-made solutions that meet specific
                    commercial and logistical requirements.
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-neutral-50 border-y border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-24">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-20 border-b border-neutral-200 pb-6 md:pb-8">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium text-navy-deep tracking-tight mb-4 md:mb-0">
              Our Portfolio
            </h2>
            <p className="text-soft-blue-gray max-w-md md:text-right font-medium text-sm md:text-base">
              Handling transactions of any size, from spot deals to long-term
              supply agreements.
            </p>
          </div>

          <div className="md:hidden space-y-3">
            {[
              "Crude Oils",
              "Fuel Oil",
              "Gas Oil",
              "Gasoline",
              "LPG",
              "Asphalt / Bitumen",
              "Base Oils",
            ].map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="group relative flex items-center justify-between p-4 bg-white border border-neutral-200 rounded-lg hover:border-gold/50 transition-all duration-300"
              >
                <div className="flex items-center gap-3">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-navy-deep/5 text-navy-deep text-xs font-bold group-hover:bg-gold/10 group-hover:text-gold transition-colors duration-300">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-base font-medium text-navy-deep">
                    {item}
                  </h3>
                </div>
                <span className="text-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  &rarr;
                </span>
              </motion.div>
            ))}
          </div>

          <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-px bg-neutral-200 overflow-hidden rounded-sm border border-neutral-200">
            {[
              "Crude Oils",
              "Fuel Oil",
              "Gas Oil",
              "Gasoline",
              "LPG",
              "Asphalt / Bitumen",
              "Base Oils",
            ].map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="group relative p-6 md:p-10 bg-white hover:bg-neutral-50 transition-colors duration-500"
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-lg md:text-xl font-medium text-navy-deep group-hover:translate-x-2 transition-transform duration-300">
                    {item}
                  </h3>
                  <span className="text-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform -translate-x-2 group-hover:translate-x-0">
                    &rarr;
                  </span>
                </div>
                <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              </motion.div>
            ))}

            <div className="hidden lg:block bg-white"></div>
            <div className="hidden lg:block bg-white"></div>
          </div>
        </div>
      </section>

      <section className="py-0 px-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[600px] md:min-h-[800px]">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="relative h-full min-h-[400px] md:min-h-[500px] lg:min-h-full group overflow-hidden"
          >
            <div className="absolute inset-0 bg-navy-deep/20 z-10 mix-blend-multiply" />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-deep to-transparent opacity-90 z-20" />
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=1974&auto=format&fit=crop')] bg-cover bg-center transition-transform duration-[2s] ease-in-out group-hover:scale-105" />

            <div className="relative z-30 h-full flex flex-col justify-end p-6 sm:p-8 md:p-12 lg:p-24">
              <h3 className="text-gold text-xs md:text-sm font-bold uppercase tracking-[0.2em] mb-4 md:mb-6">
                Digital Transformation
              </h3>
              <p className="text-white text-lg sm:text-xl md:text-2xl lg:text-3xl font-light leading-normal border-l-2 border-gold pl-4 md:pl-8">
                We place particular emphasis on the use of advanced trading
                platforms to enhance efficiency and transparency. As a young and
                ambitious enterprise, we are driven by innovation and agility.
              </p>
            </div>
          </motion.div>

          <div className="flex items-center bg-white p-6 sm:p-8 md:p-12 lg:p-24">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="space-y-10 md:space-y-16 max-w-xl mx-auto"
            >
              <motion.div variants={fadeInUp} className="group">
                <h2 className="text-2xl md:text-3xl font-medium text-navy-deep mb-3 md:mb-4 group-hover:text-gold transition-colors duration-300">
                  Strategic Sourcing
                </h2>
                <p className="text-soft-blue-gray text-base md:text-lg font-light leading-relaxed">
                  Our flexible sourcing capabilities allow us to secure
                  competitive cargoes from the Arabian Gulf and other key
                  producing regions. We leverage strong relationships with major
                  oil producers and national oil companies.
                </p>
              </motion.div>

              <div className="w-full h-px bg-neutral-200" />

              <motion.div variants={fadeInUp} className="group">
                <h2 className="text-2xl md:text-3xl font-medium text-navy-deep mb-3 md:mb-4 group-hover:text-gold transition-colors duration-300">
                  Logistics & Finance
                </h2>
                <p className="text-soft-blue-gray text-base md:text-lg font-light leading-relaxed">
                  Through strategic alliances with leading shipping companies,
                  inspection agencies, and financial institutions, we ensure the
                  smooth and secure execution of every deal. Our team combines
                  decades of experience in risk management and shipping.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-32 bg-neutral-50 px-4 sm:px-6 md:px-12 lg:px-24">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-start"
          >
            <div className="md:col-span-4">
              <h2 className="text-xl md:text-2xl font-bold text-navy-deep mb-4 uppercase tracking-widest">
                Compliance & <br /> Sanctions Policy
              </h2>
              <div className="w-16 h-1 bg-gold mb-6 md:mb-8" />
            </div>

            <div className="md:col-span-8 bg-white p-6 sm:p-8 md:p-14 border border-neutral-200 shadow-sm rounded-lg relative">
              <div className="absolute top-0 left-0 w-full h-1 bg-navy-deep rounded-t-lg" />
              <p className="text-navy-deep/80 text-lg md:text-xl font-light mb-6 md:mb-8 leading-relaxed">
                Thymus Energy is{" "}
                <span className="text-navy-deep font-semibold border-b-2 border-gold/40">
                  fully committed to strict compliance
                </span>{" "}
                with all applicable international sanctions regimes. The Company
                shall not engage in any trade or business transactions with any
                party designated on sanctions lists by the UN, EU, UK,
                Switzerland, or the USA (including OFAC SDN List).
              </p>
              <p className="text-soft-blue-gray text-xs md:text-sm font-medium tracking-wide uppercase">
                We implement and maintain robust screening procedures, due
                diligence processes, and contractual safeguards to ensure
                ongoing compliance. This prohibition applies irrespective of
                jurisdiction and extends to entities owned or controlled by
                sanctioned parties.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-32 px-4 sm:px-6 md:px-12 text-center bg-white relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-transparent to-navy-deep/20"></div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto relative z-10"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-light text-navy-deep mb-6 md:mb-10 tracking-tighter leading-tight">
            Partner with us for a new standard of{" "}
            <br className="hidden sm:block" />
            <span className="font-serif italic text-gold block mt-2">
              professionalism.
            </span>
          </h2>

          <p className="text-soft-blue-gray mb-8 md:mb-12 text-base md:text-xl font-light px-4">
            We invite producers, refiners, traders, and consumers to build
            long-term partnerships grounded in integrity.
          </p>

          <a
            href="/contact"
            className="group relative inline-flex items-center justify-center px-8 md:px-12 py-4 md:py-5 text-xs md:text-sm font-bold tracking-[0.2em] uppercase text-white bg-navy-deep overflow-hidden rounded-full hover:shadow-lg hover:shadow-gold/20 transition-all duration-300"
          >
            <span className="absolute inset-0 w-full h-full bg-gold transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out"></span>
            <span className="relative z-10 group-hover:text-navy-deep transition-colors duration-300">
              Contact Us
            </span>
          </a>
        </motion.div>
      </section>
    </main>
  );
}
