"use client"
import { Droplet, Zap, TrendingUp } from 'lucide-react'
import React from 'react'
import { motion } from 'framer-motion'

export default function Stat() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <section className="py-16 px-6 bg-gradient-to-r from-slate-800 via-slate-700 to-slate-800">
                <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
                    {[
                        { label: 'Global Regions', value: '5+' },
                        { label: 'Product Lines', value: '7+' },
                        { label: 'Years Experience', value: '20+' },
                        { label: 'Cost Leader', value: 'Fuel Oil' },
                    ].map((stat, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            className="text-center"
                        >
                            <motion.div
                                initial={{ scale: 0 }}
                                whileInView={{ scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.1 + 0.2, type: 'spring', stiffness: 200 }}
                                className="text-5xl font-bold text-amber-400 mb-2"
                            >
                                {stat.value}
                            </motion.div>
                            <div className="text-slate-200 font-medium">{stat.label}</div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Products Section */}
            <section id="products" className="py-20 px-6">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Product Portfolio</h2>
                        <p className="text-xl text-slate-400">Comprehensive trading solutions across all major petroleum products</p>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-6">
                        {[
                            { icon: Droplet, title: 'Crude Oils', desc: 'International trading of crude oils from major producing regions' },
                            { icon: Zap, title: 'Fuel Oil', desc: 'Market-leading cargo blending and lowest cost provision' },
                            { icon: TrendingUp, title: 'Gas Oil', desc: 'Premium quality gas oil for diverse industrial applications' },
                            { icon: Droplet, title: 'Gasoline', desc: 'Refined gasoline products meeting international standards' },
                            { icon: Zap, title: 'LPG', desc: 'Liquefied petroleum gas for commercial and industrial use' },
                            { icon: TrendingUp, title: 'Base Oils', desc: 'High-grade base oils for lubricant manufacturing' },
                        ].map((product, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                whileHover={{ scale: 1.05, y: -5 }}
                                className="bg-gradient-to-br from-slate-700 to-slate-800 border-2 border-slate-600 p-8 rounded-xl hover:border-amber-400 hover:shadow-xl hover:shadow-amber-500/20 transition-all group"
                            >
                                <motion.div
                                    whileHover={{ rotate: 360 }}
                                    transition={{ duration: 0.6 }}
                                >
                                    <product.icon className="text-amber-400 mb-4 group-hover:scale-110 transition-transform" size={40} />
                                </motion.div>
                                <h3 className="text-2xl font-bold mb-3 text-white">{product.title}</h3>
                                <p className="text-slate-300">{product.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </motion.div>
    )
}