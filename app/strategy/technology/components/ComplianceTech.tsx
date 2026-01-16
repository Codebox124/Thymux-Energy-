"use client"
import { fromBottomToTop, others } from "@/app/solutions/components/Animations";
import { motion } from "framer-motion";
import { Database, Lock, Shield, Zap } from "lucide-react";

const ComplianceTech = () => {
  const features = [
    {
      icon: Shield,
      title: "Sanctions Screening",
      description: "Automated screening against UN, EU, UK, US OFAC, and Swiss SECO sanctions lists for all counterparties and vessels."
    },
    {
      icon: Lock,
      title: "Due Diligence Automation",
      description: "Robust digital workflows for Know Your Customer (KYC), Ultimate Beneficial Owner (UBO) verification, and ongoing monitoring."
    },
    {
      icon: Database,
      title: "Audit Trail Management",
      description: "Comprehensive digital record-keeping of all transactions, communications, and compliance checks for regulatory audits."
    },
    {
      icon: Zap,
      title: "Real-Time Alerts",
      description: "Instant notifications of sanctions updates, regulatory changes, and compliance requirements across all jurisdictions."
    }
  ];

  return (
    <section className="bg-gray-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <motion.h2
          initial={fromBottomToTop.initial}
                  whileInView={fromBottomToTop.whileInView}
                  viewport={others.viewport}
                  transition={{
                    duration:0.8,
                    ease:"easeInOut",
                    delay: 0.6
                  }}
          className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Compliance Technology
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
          className="text-lg text-gray-600 max-w-2xl mx-auto">
            Advanced systems ensuring strict adherence to international regulations
          </motion.p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, idx) => (
            <motion.div
            initial={fromBottomToTop.initial}
        whileInView={fromBottomToTop.whileInView}
        viewport={others.viewport}
        transition={{
          duration:0.8,
          ease:"easeInOut",
          delay: 0.1 * idx
        }}
            key={idx} className="text-center">
              <div className="p-3 bg-gold/10 rounded-xl w-[fit-content] mx-auto mb-4">
                <feature.icon className="w-8 h-8 text-gold" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ComplianceTech 