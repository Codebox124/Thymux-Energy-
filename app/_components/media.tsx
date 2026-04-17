/* eslint-disable @next/next/no-img-element */
"use client";

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
    category: "Press Release",
    title: "Thymus Energy FZCO Expands Storage Capacity in Basra, Iraq",
    date: "Jan 12, 2026",
    description:
      "Thymus Energy strengthens its regional infrastructure with expanded onshore storage operations in Basra, supporting faster cargo turnaround and greater supply flexibility.",
    image:
      "https://images.unsplash.com/photo-1605648916319-cf082f7524a1?q=80&w=2075&auto=format&fit=crop",
    href: "/media/1",
  },
  {
    category: "Innovation",
    title: "Advanced Cargo Blending: Thymus Energy's Competitive Edge",
    date: "Jan 05, 2026",
    description:
      "How our in-house blending expertise enables us to deliver premium Fuel Oil grades tailored to exact customer specifications — consistently at the lowest cost in the market.",
    image:
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?q=80&w=2000&auto=format&fit=crop",
    href: "/media/2",
  },
  {
    category: "Events",
    title: "Arabian Gulf Energy Forum 2026",
    date: "Dec 20, 2025",
    description:
      "Thymus Energy participated in the Arabian Gulf Energy Forum, reinforcing partnerships with major refineries, ship operators, and trading houses across the region.",
    image:
      "https://images.unsplash.com/photo-1540575861501-7cf05a4b125a?q=80&w=2070&auto=format&fit=crop",
    href: "/media/3",
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
              <span className="w-12 h-0.5 bg-gold"></span>
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
                className="border-gold fle text-navy-deep hover:bg-gold hover:text-white rounded-full font-nunito font-bold px-6 py-2 h-auto"
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
                <CardContent className="grow">
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
