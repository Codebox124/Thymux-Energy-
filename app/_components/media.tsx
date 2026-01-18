"use client";

import { motion } from "framer-motion";
import { IconArrowRight, IconCalendar, IconNews } from "@tabler/icons-react";
import Image from "next/image";
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
    category: "Press Release",
    title: "Thymux Energy Expands Solar Operations to West Africa",
    date: "Jan 12, 2026",
    description:
      "Our new initiative aims to provide sustainable energy solutions to over 50,000 households across the Atlantic region.",
    image:
      "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?q=80&w=2075&auto=format&fit=crop",
    href: "/news/west-africa-expansion",
  },
  {
    category: "Innovation",
    title: "Introducing Next-Gen High Efficiency PV Modules",
    date: "Jan 05, 2026",
    description:
      "Our latest photovoltaic technology achieves a 25% increase in energy conversion efficiency in low-light conditions.",
    image:
      "https://images.unsplash.com/photo-1548337138-e87d889cc369?q=80&w=2000&auto=format&fit=crop",
    href: "/news/next-gen-pv",
  },
  {
    category: "Events",
    title: "Global Renewable Energy Summit 2026",
    date: "Dec 20, 2025",
    description:
      "Thymux Energy was honored with the 'Sustainable Innovation Award' for our breakthrough in urban solar architecture.",
    image:
      "https://images.unsplash.com/photo-1540575861501-7cf05a4b125a?q=80&w=2070&auto=format&fit=crop",
    href: "/news/energy-summit-2026",
  },
];

const Media = () => {
  return (
    <section className="py-24 bg-cream/10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-6">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 mb-4"
            >
              <span className="w-12 h-[2px] bg-gold"></span>
              <span className="text-gold font-nunito font-bold tracking-widest uppercase text-sm">
                Media & Insights
              </span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-sora font-bold text-navy-deep leading-tight"
            >
              Latest from the <span className="text-gold">Energy</span>{" "}
              Frontiers
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Link href="/media/" passHref>
              <Button
                variant="outline"
                className="border-gold text-navy-deep hover:bg-gold hover:text-white rounded-full font-nunito font-bold px-6 py-2 h-auto"
              >
                View All News <IconArrowRight className="ml-2" />
              </Button>
            </Link>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mediaItems.map((item, index) => (
            <motion.div
              key={item.title}
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
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
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

      {/* Background Graphic Elements */}
      <div className="absolute left-0 bottom-0 w-full h-1/2 bg-linear-to-t from-cream/20 to-transparent pointer-events-none -z-10"></div>
    </section>
  );
};

export default Media;
