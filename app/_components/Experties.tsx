import { CheckCircle, Globe } from 'lucide-react'
import React from 'react'

export default function ExpertiseSection() {
    return (
        <div>
            <section id="expertise" className="py-20 px-6 bg-slate-800/30 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?w=1600&q=80')] bg-cover bg-center "></div>
                <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-900/60 to-slate-900/80"></div>
                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-4xl md:text-5xl text-white font-bold mb-6">Market-Leading Expertise</h2>
                            <p className="text-xl text-slate-300 mb-8">
                                Our dedicated team combines decades of collective experience in crude and petroleum product trading, shipping, logistics, finance, and risk management.
                            </p>

                            <div className="space-y-4">
                                {[
                                    'Lowest cost provider of Fuel Oil',
                                    'Expert cargo blending capabilities',
                                    'Strategic alliances with major producers',
                                    'Advanced digital trading platforms',
                                    'Comprehensive market intelligence',
                                ].map((item, i) => (
                                    <div key={i} className="flex items-start gap-3">
                                        <CheckCircle className="text-amber-500 flex-shrink-0 mt-1" size={20} />
                                        <span className="text-slate-300">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="bg-gradient-to-br from-amber-500/20 to-slate-800 p-8 text-white rounded-2xl border border-amber-500/20">
                            <h3 className="text-2xl font-bold mb-6">Global Coverage</h3>
                            <div className="space-y-4">
                                {[
                                    'Middle East',
                                    'Asia-Pacific',
                                    'Africa',
                                    'Europe',
                                    'Arabian Gulf',
                                ].map((region, i) => (
                                    <div key={i} className="flex items-center gap-3 bg-slate-900/50 p-4 rounded-lg">
                                        <Globe className="text-amber-500" size={24} />
                                        <span className="font-semibold">{region}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}