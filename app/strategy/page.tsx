"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Shield,
  Truck,
  DollarSign,
  Cpu,
  Users,
  ArrowRight,
} from "lucide-react";
import { fromBottomToTop, others } from "@/app/solutions/components/Animations";

const pillars = [
  {
    icon: Shield,
    title: "Risk Management",
    description:
      "Comprehensive risk frameworks that safeguard our operations and protect stakeholder value across global energy markets.",
    href: "/risk-management",
    tag: "Risk Management",
  },
  {
    icon: DollarSign,
    title: "Finance",
    description:
      "Robust financial structures and liquidity management that underpin every trade and enable sustainable growth.",
    href: "/finance",
    tag: "Finance",
  },
  {
    icon: Truck,
    title: "Logistics",
    description:
      "World-class supply chain infrastructure ensuring seamless movement of petroleum products from origin to destination.",
    href: "/logistics",
    tag: "Logistics",
  },
  {
    icon: Cpu,
    title: "Technology",
    description:
      "Advanced digital platforms and real-time analytics that sharpen our competitive edge in global energy trading.",
    href: "/strategy/technology",
    tag: "Technology",
  },
  {
    icon: Users,
    title: "Our Team",
    description:
      "Industry-leading experts with decades of collective experience in trading, shipping, finance, and risk management.",
    href: "/strategy/team",
    tag: "Team",
  },
];

const stats = [
  { value: "5", label: "Strategic Pillars" },
  { value: "25+", label: "Markets Served" },
  { value: "250K+", label: "CBM Storage" },
  { value: "100%", label: "Compliance-Led" },
];

export default function StrategyPage() {
  return (
    <main className="min-h-screen bg-white text-navy-deep overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 md:pt-40 md:pb-32 px-4 sm:px-6 md:px-12 lg:px-24 overflow-hidden">
        {/* Background — same as home page */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-cover bg-center opacity md:opacity-80 bg-[url(/hero.jpg)]" />
          <div className="absolute inset-0 bg-slate-950/70" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.15, delayChildren: 0.2 },
              },
            }}
            className="max-w-4xl"
          >
            <motion.div
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
              }}
              className="flex items-center gap-2 bg-white/5 border border-white/10 w-fit px-4 py-2 rounded-full mb-8 backdrop-blur-sm"
            >
              <Shield className="w-4 h-4 text-gold" />
              <span className="text-cream/80 font-nunito md:text-sm text-xs font-medium tracking-wide uppercase">
                Our Strategy
              </span>
            </motion.div>

            <motion.h1
              variants={{
                hidden: { opacity: 0, y: 60 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.8, ease: "easeInOut" },
                },
              }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
            >
              Built to Lead.{" "}
              <span className="text-gold">Designed to Last.</span>
            </motion.h1>

            <motion.p
              variants={{
                hidden: { opacity: 0, y: 60 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.8, ease: "easeInOut", delay: 0.2 },
                },
              }}
              className="text-xl text-cream/70 mb-10 leading-relaxed max-w-2xl"
            >
              Thymus Energy's strategy is anchored in five interconnected pillars
              — each reinforcing the other to deliver disciplined growth,
              resilient operations, and consistent value across global energy
              markets.
            </motion.p>

            <motion.div
              variants={{
                hidden: { opacity: 0, y: 60 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.8, ease: "easeInOut", delay: 0.4 },
                },
              }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gold cursor-pointer hover:bg-bright-gold text-navy-deep px-8 py-4 rounded-full font-nunito font-bold text-lg transition-all flex items-center justify-center gap-2 group shadow-[0_10px_30px_rgba(212,175,55,0.2)]"
                >
                  Partner With Us
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
                </motion.button>
              </Link>
              <Link href="/about">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border cursor-pointer border-gold/30 hover:border-gold text-white px-8 py-4 rounded-full font-nunito font-bold text-lg transition-all flex items-center justify-center gap-2 bg-white/5 backdrop-blur-sm"
                >
                  About Thymus
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-navy-deep border-y border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="text-center"
            >
              <div className="text-3xl md:text-4xl font-bold text-gold font-sora mb-1">
                {stat.value}
              </div>
              <div className="text-cream/60 text-sm font-nunito tracking-wide uppercase">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Strategy Pillars */}
      <section className="py-20 md:py-32 px-4 sm:px-6 md:px-12 lg:px-24 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={fromBottomToTop.initial}
            whileInView={fromBottomToTop.whileInView}
            viewport={others.viewport}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 bg-gold/10 border border-gold/20 rounded-full text-gold text-sm font-nunito font-medium tracking-wide uppercase mb-4">
              Five Pillars
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-navy-deep mb-4">
              Our Strategic Framework
            </h2>
            <p className="text-lg text-soft-blue-gray max-w-2xl mx-auto font-nunito leading-relaxed">
              Each pillar is purpose-built to strengthen our position as a
              reliable partner in global petroleum trading.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {pillars.map((pillar, i) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: "easeOut" }}
              >
                <Link href={pillar.href}>
                  <motion.div
                    whileHover={{ y: -6 }}
                    transition={{ duration: 0.25 }}
                    className="group h-full p-8 bg-white border border-gray-200 rounded-2xl hover:border-gold/40 hover:shadow-xl hover:shadow-gold/5 transition-all duration-300 cursor-pointer"
                  >
                    <div className="w-14 h-14 bg-navy-deep rounded-xl flex items-center justify-center mb-6 group-hover:bg-gold transition-colors duration-300">
                      <pillar.icon className="text-gold group-hover:text-navy-deep transition-colors duration-300" size={24} />
                    </div>
                    <span className="inline-block px-3 py-1 bg-gold/10 border border-gold/20 rounded-full text-gold text-xs font-nunito font-medium tracking-wide uppercase mb-3">
                      {pillar.tag}
                    </span>
                    <h3 className="text-xl font-bold text-navy-deep mb-3 font-sora group-hover:text-gold transition-colors duration-300">
                      {pillar.title}
                    </h3>
                    <p className="text-soft-blue-gray font-nunito leading-relaxed text-sm mb-6">
                      {pillar.description}
                    </p>
                    <div className="flex items-center gap-2 text-gold font-nunito font-semibold text-sm">
                      Explore
                      <ArrowRight
                        size={16}
                        className="group-hover:translate-x-1 transition-transform duration-300"
                      />
                    </div>
                  </motion.div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 px-4 sm:px-6 md:px-12 lg:px-24 bg-navy-deep">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={fromBottomToTop.initial}
            whileInView={fromBottomToTop.whileInView}
            viewport={others.viewport}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="text-3xl md:text-5xl font-bold text-white mb-6 font-sora"
          >
            Ready to Work With Us?
          </motion.h2>
          <motion.p
            initial={fromBottomToTop.initial}
            whileInView={fromBottomToTop.whileInView}
            viewport={others.viewport}
            transition={{ duration: 0.8, ease: "easeInOut", delay: 0.2 }}
            className="text-cream/70 text-lg font-nunito leading-relaxed mb-10 max-w-2xl mx-auto"
          >
            Get in touch to explore how our strategic capabilities can support
            your energy supply chain and trading objectives.
          </motion.p>
          <motion.div
            initial={fromBottomToTop.initial}
            whileInView={fromBottomToTop.whileInView}
            viewport={others.viewport}
            transition={{ duration: 0.8, ease: "easeInOut", delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gold cursor-pointer hover:bg-bright-gold text-navy-deep px-8 py-4 rounded-full font-nunito font-bold text-lg transition-all flex items-center justify-center gap-2 group shadow-[0_10px_30px_rgba(212,175,55,0.2)]"
              >
                Contact Us
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
              </motion.button>
            </Link>
            <Link href="/solutions">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border cursor-pointer border-gold/30 hover:border-gold text-white px-8 py-4 rounded-full font-nunito font-bold text-lg transition-all flex items-center justify-center gap-2 bg-white/5 backdrop-blur-sm"
              >
                Our Solutions
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
