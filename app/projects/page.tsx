"use client"

import { useEffect, useRef } from "react"
import {
    Zap,
    Wind,
    Droplet,
    Leaf,
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

const projects = [
    {
        icon: Zap,
        title: "Solar Farm Alpha",
        location: "California, USA",
        capacity: "150 MW",
        description: "Large-scale solar installation providing clean energy to 50,000+ households with advanced tracking systems.",
        status: "Active",
        image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=2000&auto=format&fit=crop",
    },
    {
        icon: Wind,
        title: "Wind Energy Hub",
        location: "North Sea, Europe",
        capacity: "250 MW",
        description: "Offshore wind facility leveraging optimal coastal conditions for maximum renewable energy generation.",
        status: "Active",
        image: "https://images.unsplash.com/photo-1513828583688-c52646db42da?q=80&w=2000&auto=format&fit=crop",
    },
    {
        icon: Droplet,
        title: "Hydro Generation",
        location: "Norway",
        capacity: "180 MW",
        description: "Efficient hydroelectric facility utilizing natural water flow for sustainable power production.",
        status: "Operational",
        image: "https://images.unsplash.com/photo-1766371901358-a6bbab631966?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        icon: Leaf,
        title: "Biofuel Innovation",
        location: "Brazil",
        capacity: "50 MT/day",
        description: "Advanced biofuel production plant converting agricultural waste into sustainable energy sources.",
        status: "Active",
        image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2000&auto=format&fit=crop",
    },
    {
        icon: Zap,
        title: "Solar Storage Complex",
        location: "Arizona, USA",
        capacity: "100 MW + 200 MWh",
        description: "Integrated solar and battery storage system enabling 24/7 renewable energy availability.",
        status: "Development",
        image: "https://images.unsplash.com/photo-1508614589041-895b88991e3e?q=80&w=2000&auto=format&fit=crop",
    },
    {
        icon: Wind,
        title: "Onshore Wind Park",
        location: "Germany",
        capacity: "200 MW",
        description: "Modern onshore wind facility supporting Europe's transition to clean renewable energy.",
        status: "Active",
        image: "https://images.unsplash.com/photo-1590110125534-8edcb4afb43a?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
]

const stats = [
    { value: "2.5 GW", label: "Total Capacity" },
    { value: "8M+", label: "Tons CO₂ Reduced" },
    { value: "50+", label: "Active Projects" },
    { value: "15+", label: "Countries" },
]

const achievements = [
    {
        icon: Award,
        title: "Industry Leading",
        description: "Recognized for innovation and excellence in renewable energy",
    },
    {
        icon: TrendingUp,
        title: "Rapid Growth",
        description: "Consistently expanding portfolio with 30% year-over-year growth",
    },
    {
        icon: Globe,
        title: "Global Presence",
        description: "Operating across 15 countries with diversified energy solutions",
    },
    {
        icon: Users,
        title: "Community Impact",
        description: "Positively impacting millions of lives through sustainable energy",
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
                            "url('https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=2072&auto=format&fit=crop')",
                    }}
                >
                    <div className="absolute inset-0 bg-[#1b2d42]/80" />
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
                    <div className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 ease-out [&.animate-in]:opacity-100 [&.animate-in]:translate-y-0">
                        <span className="inline-block px-4 py-2 bg-gold/20 border border-gold/30 rounded-full text-gold text-sm font-medium mb-6">
                            Powering the Future
                        </span>
                    </div>
                    <h1 className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-100 ease-out [&.animate-in]:opacity-100 [&.animate-in]:translate-y-0 text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-white text-balance">
                        Our <span className="text-gold">Projects</span>
                    </h1>
                    <p className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-200 ease-out [&.animate-in]:opacity-100 [&.animate-in]:translate-y-0 text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-10 leading-relaxed">
                        Thymux Energy is committed to delivering world-class renewable energy solutions across multiple continents.
                        Explore our portfolio of innovative projects transforming the global energy landscape.
                    </p>
                    <div className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-300 ease-out [&.animate-in]:opacity-100 [&.animate-in]:translate-y-0 flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/contact"
                            className="inline-flex items-center justify-center gap-2 bg-gold text-[#1b2d42] font-semibold px-8 py-4 rounded-full hover:bg-amber-400 transition-all duration-300 hover:scale-105"
                        >
                            Get In Touch
                            <ArrowRight className="w-5 h-5" />
                        </Link>
                        <Link
                            href="/logistics"
                            className="inline-flex items-center justify-center gap-2 border-2 border-white/30 text-white font-semibold px-8 py-4 rounded-full hover:bg-white/10 transition-all duration-300"
                        >
                            Learn About Logistics
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

            {/* Projects Grid Section - Light Gray */}
            <section className="py-24 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 ease-out [&.animate-in]:opacity-100 [&.animate-in]:translate-y-0 text-3xl md:text-4xl font-bold text-[#1b2d42] mb-4">
                            Featured <span className="text-gold">Energy Projects</span>
                        </h2>
                        <p className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-100 ease-out [&.animate-in]:opacity-100 [&.animate-in]:translate-y-0 text-gray-600 max-w-2xl mx-auto">
                            A diverse portfolio of renewable energy installations delivering sustainable solutions worldwide
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.map((project, index) => (
                            <div
                                key={project.title}
                                className={`animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 ease-out [&.animate-in]:opacity-100 [&.animate-in]:translate-y-0`}
                                style={{ transitionDelay: `${index * 100}ms` }}
                            >
                                <div className="group relative h-96 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer">
                                    {/* Background Image */}
                                    <Image
                                        src={project.image || "/placeholder.svg"}
                                        alt={project.title}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                        width={400}
                                        height={384}
                                    />

                                    {/* Gradient Overlay */}
                                    <div className="absolute inset-0 bg-linear-to-t from-[#1b2d42] via-[#1b2d42]/30 to-transparent opacity-90 group-hover:opacity-95 transition-opacity duration-300" />

                                    {/* Icon Badge */}
                                    <div className="absolute top-4 right-4">
                                        <div className="w-12 h-12 bg-gold rounded-full flex items-center justify-center group-hover:bg-amber-400 transition-colors duration-300 shadow-lg">
                                            <project.icon className="w-6 h-6 text-[#1b2d42]" />
                                        </div>
                                    </div>

                                    {/* Project Content */}
                                    <div className="absolute inset-0 flex flex-col justify-end p-6">
                                        {/* Status Badge */}
                                        <div className="mb-4">
                                            <span
                                                className={`inline-block text-xs font-bold px-3 py-1.5 rounded-full backdrop-blur-md ${project.status === "Active"
                                                        ? "bg-green-500/30 text-green-100 border border-green-400/50"
                                                        : project.status === "Operational"
                                                            ? "bg-blue-500/30 text-blue-100 border border-blue-400/50"
                                                            : "bg-gold/30 text-amber-100 border border-amber-400/50"
                                                    }`}
                                            >
                                                {project.status}
                                            </span>
                                        </div>

                                        {/* Title */}
                                        <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>

                                        {/* Location */}
                                        <div className="flex items-center gap-2 text-amber-300 text-sm font-medium mb-3">
                                            <MapPin className="w-4 h-4" />
                                            {project.location}
                                        </div>

                                        {/* Description - Hidden on mobile, shown on hover */}
                                        <p className="text-gray-200 text-sm leading-relaxed mb-4 line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                            {project.description}
                                        </p>

                                        {/* Capacity */}
                                        <div className="flex items-center justify-between pt-4 border-t border-white/20">
                                            <span className="text-sm font-semibold text-amber-300">{project.capacity}</span>
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
                            Leading the renewable energy revolution with innovation, commitment, and excellence
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
                                <Image
                                    src="https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                    alt="Renewable energy impact"
                                    className="w-full h-125 object-cover"
                                    width={828}
                                    height={500}
                                    priority
                                />
                            </div>
                        </div>

                        <div>
                            <div className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 ease-out [&.animate-in]:opacity-100 [&.animate-in]:translate-y-0">
                                <span className="inline-flex items-center gap-2 px-4 py-2 bg-gold/20 border border-gold/30 rounded-full text-gold text-sm font-medium mb-6">
                                    <Leaf className="w-4 h-4" />
                                    Environmental Impact
                                </span>
                            </div>
                            <h2 className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-100 ease-out [&.animate-in]:opacity-100 [&.animate-in]:translate-y-0 text-3xl md:text-4xl font-bold text-[#1b2d42] mb-6">
                                Making a Real <span className="text-gold">Difference</span>
                            </h2>
                            <p className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-200 ease-out [&.animate-in]:opacity-100 [&.animate-in]:translate-y-0 text-gray-600 mb-8 leading-relaxed">
                                Our renewable energy projects have prevented over 8 million tons of CO₂ emissions, equivalent to
                                removing 1.7 million cars from the road annually. We&apos;re committed to accelerating the energy transition
                                while creating sustainable economic value.
                            </p>

                            <div className="space-y-4">
                                {[
                                    { label: "Clean Energy Generated", value: "15+ TWh annually" },
                                    { label: "Jobs Created", value: "5,000+ positions" },
                                    { label: "Communities Served", value: "50+ million people" },
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
                        Join Us in Shaping a <span className="text-gold">Sustainable Future</span>
                    </h2>
                    <p className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-100 ease-out [&.animate-in]:opacity-100 [&.animate-in]:translate-y-0 text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
                        Whether you&apos;re an investor, partner, or community member interested in renewable energy, Thymux Energy is
                        here to collaborate and create lasting positive impact.
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
