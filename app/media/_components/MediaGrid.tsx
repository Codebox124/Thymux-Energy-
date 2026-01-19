"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { IconArrowRight, IconCalendar } from "@tabler/icons-react";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const mediaItems = [
  {
    id: 1,
    category: "Press Release",
    title: "Thymux Energy Expands Solar Operations to West Africa",
    date: "Jan 12, 2026",
    description:
      "Our new initiative aims to provide sustainable energy solutions to over 50,000 households across the Atlantic region.",
    image:
      "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?q=80&w=2075&auto=format&fit=crop",
    href: "/media/1",
    featured: true,
  },
  {
    id: 2,
    category: "Innovation",
    title: "Introducing Next-Gen High Efficiency PV Modules",
    date: "Jan 05, 2026",
    description:
      "Our latest photovoltaic technology achieves a 25% increase in energy conversion efficiency in low-light conditions.",
    image:
      "https://images.unsplash.com/photo-1548337138-e87d889cc369?q=80&w=2000&auto=format&fit=crop",
    href: "/media/2",
    featured: true,
  },
  {
    id: 3,
    category: "Events",
    title: "Global Renewable Energy Summit 2026",
    date: "Dec 20, 2025",
    description:
      "Thymux Energy was honored with the 'Sustainable Innovation Award' for our breakthrough in urban solar architecture.",
    image:
      "https://images.unsplash.com/photo-1540575861501-7cf05a4b125a?q=80&w=2070&auto=format&fit=crop",
    href: "/media/3",
    featured: true,
  },
  {
    id: 4,
    category: "News",
    title: "Partnership with Global Energy Leaders",
    date: "Dec 10, 2025",
    description:
      "Thymux Energy announces strategic partnership with leading international renewable energy companies to accelerate innovation.",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop",
    href: "/media/4",
    featured: false,
  },
  {
    id: 5,
    category: "Innovation",
    title: "AI-Powered Energy Management System Launch",
    date: "Dec 01, 2025",
    description:
      "We unveil our new machine learning platform that optimizes energy distribution and reduces waste by up to 30%.",
    image:
      "https://images.unsplash.com/photo-1518391846015-55a9cc003b25?q=80&w=2070&auto=format&fit=crop",
    href: "/media/5",
    featured: false,
  },
  {
    id: 6,
    category: "Events",
    title: "Sustainability Conference 2026 Announcement",
    date: "Nov 25, 2025",
    description:
      "Join us at the largest renewable energy conference where industry experts discuss the future of sustainable energy.",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop",
    href: "/media/6",
    featured: false,
  },
];

type CategoryFilter =
  | "all"
  | "Press Release"
  | "Innovation"
  | "Events"
  | "News";

const MediaGrid = () => {
  const [activeFilter, setActiveFilter] = useState<CategoryFilter>("all");

  const categories: CategoryFilter[] = [
    "all",
    "Press Release",
    "Innovation",
    "Events",
    "News",
  ];

  const filteredItems =
    activeFilter === "all"
      ? mediaItems
      : mediaItems.filter((item) => item.category === activeFilter);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap gap-3 mb-16 justify-center"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-6 py-2 rounded-full font-nunito font-bold text-sm transition-all duration-300 capitalize ${
                activeFilter === category
                  ? "bg-gold text-white shadow-lg"
                  : "bg-cream/20 text-navy-deep hover:bg-cream/40"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Featured Items */}
        {activeFilter === "all" && (
          <div className="mb-20">
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-3xl font-sora font-bold text-navy-deep mb-8 flex items-center gap-3"
            >
              <span className="w-12 h-[2px] bg-gold"></span>
              Featured Stories
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {mediaItems
                .filter((item) => item.featured)
                .map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                  >
                    <Card className="group h-full p-0 border-none bg-white shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden flex flex-col">
                      <div className="relative h-64 overflow-hidden">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700"
                        />
                        <div className="absolute top-4 left-4 bg-navy-deep/90 text-gold px-3 py-1 rounded-full text-xs font-bold font-nunito backdrop-blur-sm">
                          {item.category}
                        </div>
                      </div>
                      <CardHeader className="pt-4 pb-2">
                        <div className="flex items-center gap-2 text-soft-blue-gray text-xs mb-2 font-nunito">
                          <IconCalendar size={14} />
                          <span>{item.date}</span>
                        </div>
                        <h3 className="text-xl font-sora font-bold text-navy-deep group-hover:text-gold transition-colors duration-300 line-clamp-2">
                          {item.title}
                        </h3>
                      </CardHeader>
                      <CardContent className="flex-grow">
                        <p className="text-soft-blue-gray font-nunito line-clamp-3 leading-relaxed">
                          {item.description}
                        </p>
                      </CardContent>
                      <CardFooter className="pt-2 pb-4">
                        <Link
                          href={item.href}
                          className="flex items-center gap-2 text-navy-deep font-nunito font-bold hover:text-gold transition-colors group/btn"
                        >
                          Read Article
                          <IconArrowRight
                            size={18}
                            className="group-hover/btn:translate-x-1 transition-transform"
                          />
                        </Link>
                      </CardFooter>
                    </Card>
                  </motion.div>
                ))}
            </div>
          </div>
        )}

        {/* All/Filtered Items */}
        <div>
          {activeFilter !== "all" && (
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-3xl font-sora font-bold text-navy-deep mb-8 flex items-center gap-3 capitalize"
            >
              <span className="w-12 h-[2px] bg-gold"></span>
              {activeFilter}
            </motion.h2>
          )}
          {activeFilter === "all" && (
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-3xl font-sora font-bold text-navy-deep mb-8 flex items-center gap-3"
            >
              <span className="w-12 h-[2px] bg-gold"></span>
              All Stories
            </motion.h2>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <Card className="group h-full p-0 border-none bg-white shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden flex flex-col">
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute top-4 left-4 bg-navy-deep/90 text-gold px-3 py-1 rounded-full text-xs font-bold font-nunito backdrop-blur-sm">
                      {item.category}
                    </div>
                  </div>
                  <CardHeader className="pt-4 pb-2">
                    <div className="flex items-center gap-2 text-soft-blue-gray text-xs mb-2 font-nunito">
                      <IconCalendar size={14} />
                      <span>{item.date}</span>
                    </div>
                    <h3 className="text-xl font-sora font-bold text-navy-deep group-hover:text-gold transition-colors duration-300 line-clamp-2">
                      {item.title}
                    </h3>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-soft-blue-gray font-nunito line-clamp-3 leading-relaxed">
                      {item.description}
                    </p>
                  </CardContent>
                  <CardFooter className="pt-2 pb-4">
                    <Link
                      href={item.href}
                      className="flex items-center gap-2 text-navy-deep font-nunito font-bold hover:text-gold transition-colors group/btn"
                    >
                      Read Article
                      <IconArrowRight
                        size={18}
                        className="group-hover/btn:translate-x-1 transition-transform"
                      />
                    </Link>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>

          {filteredItems.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-center py-16"
            >
              <p className="text-lg text-soft-blue-gray">
                No articles found in this category.
              </p>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

export default MediaGrid;
