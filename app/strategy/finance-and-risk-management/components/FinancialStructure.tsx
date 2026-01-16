"use client"
import { fromBottomToTop, others } from "@/app/solutions/components/Animations";
import { motion } from "framer-motion";
const FinancialStructure = () => {
  const facilities = [
    {
      title: "Short-Term Transactional Facilities",
      description: "Self-liquidating bilateral credit lines and borrowing base financings to support daily trade activities and meet liquidity requirements."
    },
    {
      title: "Revolving Credit Facilities",
      description: "Unsecured revolving facilities for general corporate needs, bridge financing for investments, and flexible working capital management."
    },
    {
      title: "Secured Term Financing",
      description: "Project finance and acquisition loans for specific long-term financing needs and strategic asset acquisitions."
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
            Financial Structure
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
            Robust financial partnerships and diverse funding solutions
          </motion.p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {facilities.map((facility, idx) => (
            <motion.div
             initial={fromBottomToTop.initial}
        whileInView={fromBottomToTop.whileInView}
        viewport={others.viewport}
        transition={{
          duration:0.8,
          ease:"easeInOut",
          delay: 0.1 * idx
        }}
            key={idx} className="bg-white p-8 rounded-xl border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {facility.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {facility.description}
              </p>
            </motion.div>
          ))}
        </div>
        <div className="bg-white rounded-2xl p-10 border border-gray-200">
          <motion.div
           initial={fromBottomToTop.initial}
        whileInView={fromBottomToTop.whileInView}
        viewport={others.viewport}
        transition={{
          duration:0.8,
          ease:"easeInOut",
          delay: 0.6
        }}
          className="max-w-3xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Banking Relationships</h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              Thymus Energy is building long-term relationships with leading global and regional financial institutions. Our approach includes establishing local partnerships for regional operations and creating tailored financing structures for specific markets and activities.
            </p>
            <p className="text-gray-600 leading-relaxed">
              We maintain constant dialogue with financing partners to adjust available facilities to the evolving needs of our business, ensuring optimal capital structure and liquidity management.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FinancialStructure