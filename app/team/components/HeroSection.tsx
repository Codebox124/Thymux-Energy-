import { motion } from "framer-motion";
import { staggerContainer, fadeInUp } from "./animationVariants";

export default function HeroSection() {
  return (
    <section className="relative pt-24 pb-16 md:pt-40 md:pb-20 px-4 sm:px-6 md:px-12 lg:px-24 overflow-hidden">
      <div className="absolute inset-0 bg-[url('/team-hero-img.avif')] bg-cover bg-center" />
      <div className="absolute inset-0 bg-navy-deep/85" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="max-w-4xl"
        >
          <motion.h1
            variants={fadeInUp}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light leading-[1.05] md:leading-[0.9] tracking-tighter text-white mb-6 md:mb-10"
          >
            Built by traders. <br />
            <span className="font-medium text-gold">Built for results.</span>
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="text-lg md:text-2xl text-white/90 max-w-2xl font-light leading-relaxed"
          >
            Our team doesn't just watch markets, we move in them. Decades of
            trading floors, shipping routes, and deal-making shape every
            decision we make for you.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
