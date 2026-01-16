"use client"
import { FileText, Users } from "lucide-react";
import { motion } from "framer-motion";
import { fromBottomToTop, others } from "@/app/solutions/components/Animations";

const SupplyChainRisk = () => (
  <section className="bg-gray-900 text-white">
    <div className="max-w-7xl mx-auto px-6 py-20">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <motion.h2
          initial={fromBottomToTop.initial}
        whileInView={fromBottomToTop.whileInView}
        viewport={others.viewport}
        transition={{
          duration:0.8,
          ease:"easeInOut",
          delay: 0.6
        }}
          
        className="text-4xl md:text-5xl font-bold mb-6">
          Supply Chain Risk Management
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
          
        className="text-xl text-gray-300 leading-relaxed">
          Mitigating supply chain risk through strategic partnerships and comprehensive monitoring
        </motion.p>
      </div>
      <div className="grid md:grid-cols-2 gap-8">
        <motion.div
          initial={fromBottomToTop.initial}
        whileInView={fromBottomToTop.whileInView}
        viewport={others.viewport}
        transition={{
          duration:0.8,
          ease:"easeInOut",
          delay: 0.1
        }}
          
        className="bg-gray-800 rounded-xl p-8 border border-gray-700">
          <Users className="w-10 h-10 text-white mb-4" />
          <h3 className="text-2xl font-bold mb-4">Supplier Diversification</h3>
          <p className="text-gray-300 leading-relaxed">
            Working with numerous suppliers across multiple geographical markets, leveraging strategic alliances with shipping companies, inspection agencies, and financial institutions to ensure supply chain resilience.
          </p>
        </motion.div>
        <motion.div
          initial={fromBottomToTop.initial}
        whileInView={fromBottomToTop.whileInView}
        viewport={others.viewport}
        transition={{
          duration:0.8,
          ease:"easeInOut",
          delay: 0.2
        }}
          
        className="bg-gray-800 rounded-xl p-8 border border-gray-700">
          <FileText className="w-10 h-10 text-white mb-4" />
          <h3 className="text-2xl font-bold mb-4">Insurance & Protection</h3>
          <p className="text-gray-300 leading-relaxed">
            Comprehensive insurance coverage for physical inventory, marine operations, political risk, and payment risk. Internal controls and third-party monitoring help mitigate fraud across the supply chain.
          </p>
        </motion.div>
      </div>
    </div>
  </section>
);


export default SupplyChainRisk