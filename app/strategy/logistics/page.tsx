"use client"

import { useEffect, useRef } from "react"
import {
    Ship,
    FilePenLine as Pipeline,
    Factory,
    Warehouse,
    Database,
    TrendingUp,
    Globe,
    Shield,
    Zap,
    ArrowRight,
    Leaf,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"

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
        title: "Shipping",
        description:
            "Access to a large fleet of time-charter vessels with strategic investments into vessels as joint-venture partners.",
    },
    {
        icon: Pipeline,
        title: "Pipelines",
        description:
            "Pipeline investments provide logistical flexibility to efficiently distribute energy across various markets.",
    },
    {
        icon: Factory,
        title: "Refineries",
        description: "Investments in crude oil, oil products, and biofuel plants complement our physical trading activity.",
    },
    {
        icon: Warehouse,
        title: "Terminals",
        description: "Terminals are highly complementary assets that secure access to physical import and export flows.",
    },
    {
        icon: Database,
        title: "Storage",
        description:
            "Strategic storage facilities for crude oil and products generate value through time and distance arbitrage.",
    },
]

const benefits = [
    {
        icon: TrendingUp,
        title: "Diversified Operations",
        description: "Create additional sources of income through integrated asset management",
    },
    {
        icon: Globe,
        title: "Global Reach",
        description: "Physical presence worldwide providing valuable market insights",
    },
    {
        icon: Shield,
        title: "Supply Security",
        description: "Greater control over physical product flows protecting against supply risk",
    },
    {
        icon: Zap,
        title: "Operational Synergies",
        description: "Economies of scale capturing additional margin along the value chain",
    },
]

const stats = [
    { value: "100+", label: "Fleet Vessels" },
    { value: "45+", label: "Countries" },
    { value: "500+", label: "Partners" },
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
                            Moving Energy Forward
                        </span>
                    </div>
                    <h1 className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-100 ease-out [&.animate-in]:opacity-100 [&.animate-in]:translate-y-0 text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-white text-balance">
                        Logistics & <span className="text-amber-500">Infrastructure</span>
                    </h1>
                    <p className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-200 ease-out [&.animate-in]:opacity-100 [&.animate-in]:translate-y-0 text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-10 leading-relaxed">
                        Thymux Energy has invested in logistics and midstream assets that strategically complement our daily
                        operations, enhancing management of sourcing and distribution while diversifying income streams.
                    </p>
                    <div className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-300 ease-out [&.animate-in]:opacity-100 [&.animate-in]:translate-y-0 flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/contact"
                            className="inline-flex items-center justify-center gap-2 bg-amber-500 text-[#1b2d42] font-semibold px-8 py-4 rounded-full hover:bg-amber-400 transition-all duration-300 hover:scale-105"
                        >
                            Get Started
                            <ArrowRight className="w-5 h-5" />
                        </Link>
                        <Link
                            href="/projects"
                            className="inline-flex items-center justify-center gap-2 border-2 border-white/30 text-white font-semibold px-8 py-4 rounded-full hover:bg-white/10 transition-all duration-300"
                        >
                            View Our Projects
                        </Link>
                    </div>
                </div>

                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
                    <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
                        <div className="w-1.5 h-3 bg-amber-500 rounded-full animate-pulse" />
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
                            Our <span className="">Logistics Services</span>
                        </h2>
                        <p className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-100 ease-out [&.animate-in]:opacity-100 [&.animate-in]:translate-y-0 text-gray-600 max-w-2xl mx-auto">
                            Comprehensive infrastructure investments that support efficient energy distribution and trading operations
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {logisticsServices.map((service, index) => (
                            <div
                                key={service.title}
                                className={`animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 ease-out [&.animate-in]:opacity-100 [&.animate-in]:translate-y-0`}
                                style={{ transitionDelay: `${index * 100}ms` }}
                            >
                                <div className="group h-full p-8 bg-white border border-gray-200 rounded-2xl  transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-amber-500/5">
                                    <div className="w-14 h-14 bg-[#1b2d42] rounded-xl flex items-center justify-center mb-6 transition-colors duration-300">
                                        <service.icon className="w-7 h-7 text-white" />
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
                                Integration Benefits for <span className="text-gold">Your Business</span>
                            </h2>
                            <p className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-100 ease-out [&.animate-in]:opacity-100 [&.animate-in]:translate-y-0 text-gray-600 mb-8 leading-relaxed">
                                Our activities along the energy supply chain, and physical presence throughout the world, provide
                                valuable insights into the marketplace. This information supports our ability to identify and capture
                                opportunities.
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
                                <Image
                                    src="https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?q=80&w=2070&auto=format&fit=crop"
                                    alt="Energy logistics and shipping"
                                    className="w-full h-125 object-cover"
                                    width={828}
                                    height={500}
                                />
                            </div>
                            <div className="absolute -bottom-6 -left-6 bg-[#1b2d42] rounded-xl p-6 shadow-2xl">
                                <p className="text-gold text-4xl font-bold">100+</p>
                                <p className="text-gray-300 text-sm">Fleet Vessels</p>
                            </div>
                            <div className="absolute -top-6 -right-6 bg-gold rounded-xl p-4 shadow-2xl">
                                <Globe className="w-8 h-8 text-[#1b2d42]" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Energy Transition Section - Dark */}
            <section className="py-24 bg-[#1b2d42]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="animate-on-scroll opacity-0 -translate-x-5 transition-all duration-700 ease-out [&.animate-in]:opacity-100 [&.animate-in]:translate-x-0 order-2 lg:order-1">
                            <div className="relative rounded-2xl overflow-hidden">
                                <Image
                                    src="https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=2072&auto=format&fit=crop"
                                    alt="Solar panels and renewable energy"
                                    className="w-full h-100 object-cover"
                                    width={828} 
                                    height={500}
                                />
                            </div>
                        </div>

                        <div className="order-1 lg:order-2">
                            <div className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 ease-out [&.animate-in]:opacity-100 [&.animate-in]:translate-y-0">
                                <span className="inline-flex items-center gap-2 px-4 py-2 bg-gold/20 border border-gold/30 rounded-full text-gold text-sm font-medium mb-6">
                                    <Leaf className="w-4 h-4" />
                                    Sustainability Commitment
                                </span>
                            </div>
                            <h2 className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-100 ease-out [&.animate-in]:opacity-100 [&.animate-in]:translate-y-0 text-3xl md:text-4xl font-bold text-white mb-6">
                                Supporting the <span className="text-gold">Energy Transition</span>
                            </h2>
                            <p className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-200 ease-out [&.animate-in]:opacity-100 [&.animate-in]:translate-y-0 text-gray-300 mb-6 leading-relaxed">
                                As part of Thymux Energy&apos;s efforts to support the Energy Transition, we have committed to improving the
                                environmental impact of our current portfolio and investing in new sustainable commodities.
                            </p>
                            <p className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-300 ease-out [&.animate-in]:opacity-100 [&.animate-in]:translate-y-0 text-gray-400 mb-8 leading-relaxed">
                                Our biofuel plants and renewable energy investments represent our dedication to a cleaner future while
                                maintaining operational excellence in traditional energy logistics.
                            </p>
                            <div className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-400 ease-out [&.animate-in]:opacity-100 [&.animate-in]:translate-y-0">
                                <Link
                                    href="/solutions"
                                    className="inline-flex items-center gap-2 text-gold font-semibold hover:gap-4 transition-all duration-300"
                                >
                                    Learn about our solutions
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
                        Ready to <span className="text-gold">Partner with Us?</span>
                    </h2>
                    <p className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-100 ease-out [&.animate-in]:opacity-100 [&.animate-in]:translate-y-0 text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
                        Discover how our integrated logistics network can support your energy needs with reliable, efficient, and
                        sustainable solutions.
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
