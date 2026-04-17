"use client"
import { motion } from "framer-motion";
import { fromBottomToTop, others } from "./Animations";

const Products = () => {
  const products = [
    {
      title: "Fuel Oil",
      description: "Market-leading cargo handling expertise. Recognized as the lowest-cost provider of premium Fuel Oil grades tailored to exact customer specifications."
    },
    {
      title: "Gas Oil",
      description: "Premium quality Gas Oil for diverse industrial, marine, and commercial applications across global markets."
    },
    {
      title: "VGO",
      description: "Vacuum Gas Oil trading connecting major refineries and end-users. Flexible sourcing from the Arabian Gulf and key producing regions."
    },
    {
      title: "Naphtha",
      description: "Full range Naphtha supply for petrochemical feedstock and handling operations, meeting stringent performance specifications."
    },
    {
      title: "Bitumen",
      description: "Consistent supply of Bitumen for infrastructure and construction projects worldwide, backed by our strategic storage network."
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
            Our Product Portfolio
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
            Comprehensive refined petroleum products and crude oil trading solutions
          </motion.p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, idx) => (
            <motion.div
            initial={fromBottomToTop.initial}
        whileInView={fromBottomToTop.whileInView}
        viewport={others.viewport}
        transition={{
          duration:0.8,
          ease:"easeInOut",
          delay: 0.1 * idx
        }}
            key={idx} className="bg-white p-8 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {product.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {product.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};


export default Products;