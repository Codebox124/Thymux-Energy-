"use client"
import { motion } from "framer-motion";
import { fromBottomToTop, others } from "./Animations";

const Products = () => {
  const products = [
    {
      title: "Crude Oils",
      description: "International trading of crude oils with flexible sourcing from the Arabian Gulf and key producing regions worldwide."
    },
    {
      title: "Fuel Oil",
      description: "Market-leading cargo blending expertise. Recognized as the lowest cost provider of Fuel Oil in the market."
    },
    {
      title: "Gas Oil & Gasoline",
      description: "Comprehensive supply of middle distillates and motor fuels to meet diverse market demands."
    },
    {
      title: "LPG & Asphalt",
      description: "Reliable trading of liquefied petroleum gas and asphalt for industrial and commercial applications."
    },
    {
      title: "Base Oils",
      description: "Premium quality base oils for lubricant manufacturing and industrial use across global markets."
    },
    {
      title: "Bitumen",
      description: "Consistent supply of bitumen for infrastructure and construction projects worldwide."
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