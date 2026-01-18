"use client"

import { useEffect, useRef } from "react"
import {
    Fuel,
    Ship,
    Droplets,
    Factory,
    TrendingUp,
    Award,
    Users,
    Globe,
    ArrowRight,
    MapPin,
    BarChart3,
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

const operations = [
    {
        icon: Droplets,
        title: "Brent Crude Trading",
        location: "North Sea - Europe",
        volume: "500K bbl/month",
        description: "Strategic trading of Brent crude oil from North Sea producers, ensuring reliable supply chains to refineries worldwide.",
        status: "Active",
        image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?q=80&w=2000&auto=format&fit=crop",
    },
    {
        icon: Ship,
        title: "WTI Crude Operations",
        location: "USA - Gulf Coast",
        volume: "750K bbl/month",
        description: "Premium West Texas Intermediate crude oil trading with direct access to major Gulf Coast terminals and refineries.",
        status: "Active",
        image: "https://images.unsplash.com/photo-1605648916319-cf082f7524a1?q=80&w=2000&auto=format&fit=crop",
    },
    {
        icon: Fuel,
        title: "Diesel & Gasoil",
        location: "Middle East",
        volume: "300K MT/month",
        description: "High-volume trading of ultra-low sulfur diesel and gasoil products serving marine, industrial, and commercial sectors.",
        status: "Operational",
        image: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?q=80&w=2000&auto=format&fit=crop",
    },
    {
        icon: Factory,
        title: "Jet Fuel Supply",
        location: "Asia-Pacific",
        volume: "200K MT/month",
        description: "Specialized aviation fuel trading supporting major airports and airlines across the Asia-Pacific region.",
        status: "Active",
        image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=2000&auto=format&fit=crop",
    },
    {
        icon: Droplets,
        title: "LPG Trading Hub",
        location: "Global",
        volume: "150K MT/month",
        description: "Liquefied petroleum gas trading operations connecting producers to distributors across multiple continents.",
        status: "Development",
        image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=2000&auto=format&fit=crop",
    },
    {
        icon: Ship,
        title: "Marine Bunker Fuel",
        location: "Singapore Hub",
        volume: "400K MT/month",
        description: "Strategic bunker fuel operations serving the world's busiest maritime routes and major shipping companies.",
        status: "Active",
        image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=2000&auto=format&fit=crop",
    },
]

const stats = [
    { value: "2M+", label: "Barrels Traded Monthly" },
    { value: "$500M+", label: "Trading Volume" },
    { value: "25+", label: "Active Markets" },
    { value: "50+", label: "Global Partners" },
]

const achievements = [
    {
        icon: Award,
        title: "Industry Excellence",
        description: "Recognized for operational excellence and reliability in oil & gas trading",
    },
    {
        icon: TrendingUp,
        title: "Rapid Expansion",
        description: "Aggressive growth strategy with expanding market presence since 2025 launch",
    },
    {
        icon: Globe,
        title: "Global Network",
        description: "Strategic partnerships across major oil-producing and consuming regions",
    },
    {
        icon: Users,
        title: "Trusted Partner",
        description: "Building long-term relationships with producers, refiners, and distributors",
    },
]

export default function ProjectsPage() {
    const containerRef = useIntersectionObserver()

    return (
        <div ref={containerRef}>
            {/* Hero Section - Dark with Background Image */}
            <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-[#1b2d42]">
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{
                        backgroundImage:
                            "url('https://images.unsplash.com/photo-1578662996442-48f60103fc96?q=80&w=2072&auto=format&fit=crop')",
                    }}
                >
                    <div className="absolute inset-0 bg-[#1b2d42]/85" />
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
                    <div className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 ease-out [&.animate-in]:opacity-100 [&.animate-in]:translate-y-0">
                        <span className="inline-block px-4 py-2 bg-gold/20 border border-gold/30 rounded-full text-gold text-sm font-medium mb-6">
                            Global Energy Trading
                        </span>
                    </div>
                    <h1 className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-100 ease-out [&.animate-in]:opacity-100 [&.animate-in]:translate-y-0 text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-white text-balance">
                        Our <span className="text-gold">Trading Operations</span>
                    </h1>
                    <p className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-200 ease-out [&.animate-in]:opacity-100 [&.animate-in]:translate-y-0 text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-10 leading-relaxed">
                        Thymux Energy FZCO is your trusted partner in international oil and gas trading. We specialize in crude oils and refined petroleum products, connecting global markets with reliability and transparency.
                    </p>
                    <div className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-300 ease-out [&.animate-in]:opacity-100 [&.animate-in]:translate-y-0 flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/contact"
                            className="inline-flex items-center justify-center gap-2 bg-gold text-[#1b2d42] font-semibold px-8 py-4 rounded-full hover:bg-amber-400 transition-all duration-300 hover:scale-105"
                        >
                            Partner With Us
                            <ArrowRight className="w-5 h-5" />
                        </Link>
                        <Link
                            href="/logistics"
                            className="inline-flex items-center justify-center gap-2 border-2 border-white/30 text-white font-semibold px-8 py-4 rounded-full hover:bg-white/10 transition-all duration-300"
                        >
                            Explore Logistics
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

            {/* Operations Grid Section - Light Gray */}
            <section className="py-24 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 ease-out [&.animate-in]:opacity-100 [&.animate-in]:translate-y-0 text-3xl md:text-4xl font-bold text-[#1b2d42] mb-4">
                            Featured <span className="text-gold">Trading Operations</span>
                        </h2>
                        <p className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-100 ease-out [&.animate-in]:opacity-100 [&.animate-in]:translate-y-0 text-gray-600 max-w-2xl mx-auto">
                            A comprehensive portfolio of crude oil and refined product trading operations across global markets
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {operations.map((operation, index) => (
                            <div
                                key={operation.title}
                                className={`animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 ease-out [&.animate-in]:opacity-100 [&.animate-in]:translate-y-0`}
                                style={{ transitionDelay: `${index * 100}ms` }}
                            >
                                <div className="group relative h-96 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer">
                                    {/* Background Image */}
                                    <img
                                        src={operation.image}
                                        alt={operation.title}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                    />

                                    {/* Gradient Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#1b2d42] via-[#1b2d42]/30 to-transparent opacity-90 group-hover:opacity-95 transition-opacity duration-300" />

                                    {/* Icon Badge */}
                                    <div className="absolute top-4 right-4">
                                        <div className="w-12 h-12 bg-gold rounded-full flex items-center justify-center group-hover:bg-amber-400 transition-colors duration-300 shadow-lg">
                                            <operation.icon className="w-6 h-6 text-[#1b2d42]" />
                                        </div>
                                    </div>

                                    {/* Operation Content */}
                                    <div className="absolute inset-0 flex flex-col justify-end p-6">
                                        {/* Status Badge */}
                                        <div className="mb-4">
                                            <span
                                                className={`inline-block text-xs font-bold px-3 py-1.5 rounded-full backdrop-blur-md ${operation.status === "Active"
                                                        ? "bg-green-500/30 text-green-100 border border-green-400/50"
                                                        : operation.status === "Operational"
                                                            ? "bg-blue-500/30 text-blue-100 border border-blue-400/50"
                                                            : "bg-gold/30 text-amber-100 border border-amber-400/50"
                                                    }`}
                                            >
                                                {operation.status}
                                            </span>
                                        </div>

                                        {/* Title */}
                                        <h3 className="text-2xl font-bold text-white mb-2">{operation.title}</h3>

                                        {/* Location */}
                                        <div className="flex items-center gap-2 text-amber-300 text-sm font-medium mb-3">
                                            <MapPin className="w-4 h-4" />
                                            {operation.location}
                                        </div>

                                        {/* Description - Hidden on mobile, shown on hover */}
                                        <p className="text-gray-200 text-sm leading-relaxed mb-4 line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                            {operation.description}
                                        </p>

                                        {/* Volume */}
                                        <div className="flex items-center justify-between pt-4 border-t border-white/20">
                                            <span className="text-sm font-semibold text-amber-300">{operation.volume}</span>
                                            <span className="text-xs text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                                Learn more →
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Achievements Section - White */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 ease-out [&.animate-in]:opacity-100 [&.animate-in]:translate-y-0 text-3xl md:text-4xl font-bold text-[#1b2d42] mb-4">
                            Why Choose <span className="text-gold">Thymux Energy</span>
                        </h2>
                        <p className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-100 ease-out [&.animate-in]:opacity-100 [&.animate-in]:translate-y-0 text-gray-600 max-w-2xl mx-auto">
                            Your trusted partner in oil and gas trading with commitment to reliability, transparency, and operational excellence
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {achievements.map((achievement, index) => (
                            <div
                                key={achievement.title}
                                className={`animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 ease-out [&.animate-in]:opacity-100 [&.animate-in]:translate-y-0 text-center`}
                                style={{ transitionDelay: `${index * 100}ms` }}
                            >
                                <div className="flex justify-center mb-6">
                                    <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center group hover:bg-gold/20 transition-colors duration-300">
                                        <achievement.icon className="w-8 h-8 text-gold" />
                                    </div>
                                </div>
                                <h3 className="text-lg font-bold text-[#1b2d42] mb-3">{achievement.title}</h3>
                                <p className="text-gray-600">{achievement.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Impact Section - Light Gray with Stats */}
            <section className="py-24 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="animate-on-scroll opacity-0 -translate-x-5 transition-all duration-700 ease-out [&.animate-in]:opacity-100 [&.animate-in]:translate-x-0">
                            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                                <img
                                    src="https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=774&auto=format&fit=crop"
                                    alt="Oil and gas trading operations"
                                    className="w-full h-[500px] object-cover"
                                />
                            </div>
                        </div>

                        <div>
                            <div className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 ease-out [&.animate-in]:opacity-100 [&.animate-in]:translate-y-0">
                                <span className="inline-flex items-center gap-2 px-4 py-2 bg-gold/20 border border-gold/30 rounded-full text-gold text-sm font-medium mb-6">
                                    <Globe className="w-4 h-4" />
                                    Market Leadership
                                </span>
                            </div>
                            <h2 className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-100 ease-out [&.animate-in]:opacity-100 [&.animate-in]:translate-y-0 text-3xl md:text-4xl font-bold text-[#1b2d42] mb-6">
                                Driving Global <span className="text-gold">Energy Markets</span>
                            </h2>
                            <p className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-200 ease-out [&.animate-in]:opacity-100 [&.animate-in]:translate-y-0 text-gray-600 mb-8 leading-relaxed">
                                Since our establishment in 2025, Thymux Energy FZCO has rapidly positioned itself as a dynamic player in international oil and gas trading. We connect producers with end-users through reliable supply chains and transparent operations.
                            </p>

                            <div className="space-y-4">
                                {[
                                    { label: "Monthly Trading Volume", value: "2M+ barrels" },
                                    { label: "Strategic Partnerships", value: "50+ global partners" },
                                    { label: "Market Coverage", value: "25+ active markets" },
                                ].map((item, index) => (
                                    <div
                                        key={item.label}
                                        className={`animate-on-scroll opacity-0 -translate-x-5 transition-all duration-700 ease-out [&.animate-in]:opacity-100 [&.animate-in]:translate-x-0 flex items-center gap-4`}
                                        style={{ transitionDelay: `${(index + 3) * 100}ms` }}
                                    >
                                        <BarChart3 className="w-5 h-5 text-gold shrink-0" />
                                        <div>
                                            <p className="text-sm text-gray-500">{item.label}</p>
                                            <p className="font-bold text-[#1b2d42]">{item.value}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section - White */}
            <section className="py-24 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 ease-out [&.animate-in]:opacity-100 [&.animate-in]:translate-y-0 text-3xl md:text-4xl font-bold text-[#1b2d42] mb-6">
                        Partner With a <span className="text-gold">Trusted Trader</span>
                    </h2>
                    <p className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-100 ease-out [&.animate-in]:opacity-100 [&.animate-in]:translate-y-0 text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
                        Whether you're a producer, refinery, trading house, or end-user, Thymux Energy FZCO offers reliable trading solutions backed by transparency and operational excellence.
                    </p>
                    <div className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-200 ease-out [&.animate-in]:opacity-100 [&.animate-in]:translate-y-0 flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/contact"
                            className="inline-flex items-center justify-center gap-2 bg-[#1b2d42] text-white font-semibold px-8 py-4 rounded-full hover:bg-[#2a4060] transition-all duration-300 hover:scale-105"
                        >
                            Contact Us
                            <ArrowRight className="w-5 h-5" />
                        </Link>
                        <Link
                            href="/logistics"
                            className="inline-flex items-center justify-center gap-2 border-2 border-[#1b2d42] text-[#1b2d42] font-semibold px-8 py-4 rounded-full hover:bg-[#1b2d42] hover:text-white transition-all duration-300"
                        >
                            View Our Operations
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}