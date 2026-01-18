"use client"

import { useEffect, useRef } from "react"
import {
    Ship,
    Truck,
    Warehouse,
    MapPin,
    Database,
    TrendingUp,
    Globe,
    Shield,
    Zap,
    ArrowRight,
    Clock,
} from "lucide-react"
import Link from "next/link"

function useIntersectionObserver() {
    const ref = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("animate-in")
                    }
                })
            },
            { threshold: 0.1, rootMargin: "0px 0px -50px 0px" },
        )

        const elements = ref.current?.querySelectorAll(".animate-on-scroll")
        elements?.forEach((el) => observer.observe(el))

        return () => observer.disconnect()
    }, [])

    return ref
}

const logisticsServices = [
    {
        icon: Ship,
        title: "Maritime Logistics",
        description:
            "Strategic partnerships with vessel operators and shipping companies ensuring reliable crude oil and petroleum product transportation across global routes.",
    },
    {
        icon: Warehouse,
        title: "Terminal Access",
        description:
            "Exclusive access to major oil terminals and ports worldwide, facilitating seamless loading, discharge, and transshipment operations.",
    },
    {
        icon: Database,
        title: "Storage Solutions",
        description: "Strategic storage capacity at key hubs enabling efficient inventory management and market timing for optimal trading opportunities.",
    },
    {
        icon: Truck,
        title: "Land Transportation",
        description: "Integrated road and rail logistics networks for inland distribution of refined petroleum products to end-users and distributors.",
    },
    {
        icon: MapPin,
        title: "Supply Chain Management",
        description:
            "End-to-end supply chain coordination from origin to destination, ensuring product quality, compliance, and timely delivery.",
    },
]

const benefits = [
    {
        icon: TrendingUp,
        title: "Operational Efficiency",
        description: "Streamlined logistics reduce costs and improve delivery times across all markets",
    },
    {
        icon: Globe,
        title: "Global Network",
        description: "Strategic presence in major trading hubs provides market intelligence and agility",
    },
    {
        icon: Shield,
        title: "Risk Management",
        description: "Diversified logistics infrastructure mitigates supply chain disruptions and delays",
    },
    {
        icon: Zap,
        title: "Rapid Response",
        description: "Flexible operations adapt quickly to changing market conditions and customer needs",
    },
]

const stats = [
    { value: "50+", label: "Shipping Partners" },
    { value: "30+", label: "Port Terminals" },
    { value: "25+", label: "Markets Served" },
    { value: "24/7", label: "Operations" },
]

export default function LogisticsPage() {
    const containerRef = useIntersectionObserver()

    return (
        <div ref={containerRef}>
            {/* Hero Section - Dark with Background Image */}
            <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-[#1b2d42]">
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{
                        backgroundImage:
                            "url('https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop')",
                    }}
                >
                    <div className="absolute inset-0 bg-[#1b2d42]/85" />
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
                    <div className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 ease-out [&.animate-in]:opacity-100 [&.animate-in]:translate-y-0">
                        <span className="inline-block px-4 py-2 bg-gold/20 border border-gold/30 rounded-full text-gold text-sm font-medium mb-6">
                            Seamless Global Logistics
                        </span>
                    </div>
                    <h1 className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-100 ease-out [&.animate-in]:opacity-100 [&.animate-in]:translate-y-0 text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-white text-balance">
                        Logistics & <span className="text-gold">Supply Chain</span>
                    </h1>
                    <p className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-200 ease-out [&.animate-in]:opacity-100 [&.animate-in]:translate-y-0 text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-10 leading-relaxed">
                        Thymux Energy FZCO leverages world-class infrastructure and strategic partnerships to deliver efficient, reliable logistics solutions for crude oil and refined petroleum products across global markets.
                    </p>
                    <div className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-300 ease-out [&.animate-in]:opacity-100 [&.animate-in]:translate-y-0 flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/contact"
                            className="inline-flex items-center justify-center gap-2 bg-gold text-[#1b2d42] font-semibold px-8 py-4 rounded-full hover:bg-amber-400 transition-all duration-300 hover:scale-105"
                        >
                            Get Started
                            <ArrowRight className="w-5 h-5" />
                        </Link>
                        <Link
                            href="/projects"
                            className="inline-flex items-center justify-center gap-2 border-2 border-white/30 text-white font-semibold px-8 py-4 rounded-full hover:bg-white/10 transition-all duration-300"
                        >
                            View Our Operations
                        </Link>
                    </div>
                </div>

                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
                    <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
                        <div className="w-1.5 h-3 bg-gold rounded-full animate-pulse" />
                    </div>
                </div>
            </section>

            {/* Stats Section - White */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {stats.map((stat, index) => (
                            <div
                                key={stat.label}
                                className={`animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 ease-out [&.animate-in]:opacity-100 [&.animate-in]:translate-y-0 text-center`}
                                style={{ transitionDelay: `${index * 100}ms` }}
                            >
                                <p className="text-4xl md:text-5xl font-bold text-[#1b2d42] mb-2">{stat.value}</p>
                                <p className="text-gray-500 font-medium">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Services Grid Section - Light Gray */}
            <section className="py-24 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 ease-out [&.animate-in]:opacity-100 [&.animate-in]:translate-y-0 text-4xl md:text-5xl font-bold text-[#1b2d42] mb-4">
                            Our <span className="text-gold">Logistics Capabilities</span>
                        </h2>
                        <p className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-100 ease-out [&.animate-in]:opacity-100 [&.animate-in]:translate-y-0 text-gray-600 max-w-2xl mx-auto">
                            Comprehensive logistics infrastructure supporting efficient oil and gas trading operations worldwide
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {logisticsServices.map((service, index) => (
                            <div
                                key={service.title}
                                className={`animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 ease-out [&.animate-in]:opacity-100 [&.animate-in]:translate-y-0`}
                                style={{ transitionDelay: `${index * 100}ms` }}
                            >
                                <div className="group h-full p-8 bg-white border border-gray-200 rounded-2xl transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-gold/5">
                                    <div className="w-14 h-14 bg-[#1b2d42] rounded-xl flex items-center justify-center mb-6 group-hover:bg-gold transition-colors duration-300">
                                        <service.icon className="w-7 h-7 text-white group-hover:text-[#1b2d42]" />
                                    </div>
                                    <h3 className="text-xl font-bold text-[#1b2d42] mb-3">{service.title}</h3>
                                    <p className="text-gray-600 leading-relaxed">{service.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Benefits Section - White */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 ease-out [&.animate-in]:opacity-100 [&.animate-in]:translate-y-0 text-3xl md:text-4xl font-bold text-[#1b2d42] mb-6">
                                Integrated Logistics for <span className="text-gold">Your Success</span>
                            </h2>
                            <p className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-100 ease-out [&.animate-in]:opacity-100 [&.animate-in]:translate-y-0 text-gray-600 mb-8 leading-relaxed">
                                Our extensive logistics network and strategic partnerships across major trading hubs provide valuable market insights and operational flexibility, enabling us to identify and capture opportunities for our clients.
                            </p>

                            <div className="space-y-6">
                                {benefits.map((benefit, index) => (
                                    <div
                                        key={benefit.title}
                                        className={`animate-on-scroll opacity-0 -translate-x-5 transition-all duration-700 ease-out [&.animate-in]:opacity-100 [&.animate-in]:translate-x-0 flex gap-4`}
                                        style={{ transitionDelay: `${(index + 2) * 100}ms` }}
                                    >
                                        <div className="w-12 h-12 bg-gold/10 rounded-lg flex items-center justify-center shrink-0">
                                            <benefit.icon className="w-6 h-6 text-gold" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-[#1b2d42] mb-1">{benefit.title}</h3>
                                            <p className="text-gray-500 text-sm">{benefit.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="animate-on-scroll opacity-0 translate-x-8 transition-all duration-700 delay-300 ease-out [&.animate-in]:opacity-100 [&.animate-in]:translate-x-0 relative">
                            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                                <img
                                    src="https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?q=80&w=2070&auto=format&fit=crop"
                                    alt="Oil tanker and shipping logistics"
                                    className="w-full h-[500px] object-cover"
                                />
                            </div>
                            <div className="absolute -bottom-6 -left-6 bg-[#1b2d42] rounded-xl p-6 shadow-2xl">
                                <p className="text-gold text-4xl font-bold">50+</p>
                                <p className="text-gray-300 text-sm">Shipping Partners</p>
                            </div>
                            <div className="absolute -top-6 -right-6 bg-gold rounded-xl p-4 shadow-2xl">
                                <Globe className="w-8 h-8 text-[#1b2d42]" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Infrastructure Section - Dark */}
            <section className="py-24 bg-[#1b2d42]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="animate-on-scroll opacity-0 -translate-x-5 transition-all duration-700 ease-out [&.animate-in]:opacity-100 [&.animate-in]:translate-x-0 order-2 lg:order-1">
                            <div className="relative rounded-2xl overflow-hidden">
                                <img
                                    src="https://images.unsplash.com/photo-1605648916319-cf082f7524a1?q=80&w=2072&auto=format&fit=crop"
                                    alt="Oil storage tanks and infrastructure"
                                    className="w-full h-[500px] object-cover"
                                />
                            </div>
                        </div>

                        <div className="order-1 lg:order-2">
                            <div className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 ease-out [&.animate-in]:opacity-100 [&.animate-in]:translate-y-0">
                                <span className="inline-flex items-center gap-2 px-4 py-2 bg-gold/20 border border-gold/30 rounded-full text-gold text-sm font-medium mb-6">
                                    <Clock className="w-4 h-4" />
                                    Strategic Infrastructure
                                </span>
                            </div>
                            <h2 className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-100 ease-out [&.animate-in]:opacity-100 [&.animate-in]:translate-y-0 text-3xl md:text-4xl font-bold text-white mb-6">
                                Built for <span className="text-gold">Reliability</span>
                            </h2>
                            <p className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-200 ease-out [&.animate-in]:opacity-100 [&.animate-in]:translate-y-0 text-gray-300 mb-6 leading-relaxed">
                                Our logistics infrastructure is built on strategic partnerships with leading terminal operators, shipping companies, and storage facilities. This network enables us to deliver crude oil and refined products efficiently and reliably.
                            </p>
                            <p className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-300 ease-out [&.animate-in]:opacity-100 [&.animate-in]:translate-y-0 text-gray-400 mb-8 leading-relaxed">
                                From major export terminals to key import hubs, we maintain 24/7 operational capability to meet the demands of our global trading operations and ensure uninterrupted supply to our clients.
                            </p>
                            <div className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-400 ease-out [&.animate-in]:opacity-100 [&.animate-in]:translate-y-0">
                                <Link
                                    href="/projects"
                                    className="inline-flex items-center gap-2 text-gold font-semibold hover:gap-4 transition-all duration-300"
                                >
                                    Explore our trading operations
                                    <ArrowRight className="w-5 h-5" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section - White */}
            <section className="py-24 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 ease-out [&.animate-in]:opacity-100 [&.animate-in]:translate-y-0 text-3xl md:text-4xl font-bold text-[#1b2d42] mb-6">
                        Ready to <span className="text-gold">Optimize Your Supply Chain?</span>
                    </h2>
                    <p className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-100 ease-out [&.animate-in]:opacity-100 [&.animate-in]:translate-y-0 text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
                        Discover how our integrated logistics network can support your energy trading needs with reliable, efficient, and transparent solutions.
                    </p>
                    <div className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-200 ease-out [&.animate-in]:opacity-100 [&.animate-in]:translate-y-0 flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/contact"
                            className="inline-flex items-center justify-center gap-2 bg-[#1b2d42] text-white font-semibold px-8 py-4 rounded-full hover:bg-[#2a4060] transition-all duration-300 hover:scale-105"
                        >
                            Contact Us Today
                            <ArrowRight className="w-5 h-5" />
                        </Link>
                        <Link
                            href="/about"
                            className="inline-flex items-center justify-center gap-2 border-2 border-[#1b2d42] text-[#1b2d42] font-semibold px-8 py-4 rounded-full hover:bg-[#1b2d42] hover:text-white transition-all duration-300"
                        >
                            About Thymux Energy
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}