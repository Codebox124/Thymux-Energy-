"use client";

import { motion } from "framer-motion";
import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import { useState } from "react";
import Link from "next/link";

const featuredArticles = [
  {
    id: 1,
    title: "Thymus Energy's Blending Expertise: The Lowest-Cost Fuel Oil Provider",
    excerpt:
      "An inside look at how Thymus Energy's cargo blending capabilities deliver premium Fuel Oil grades at the most competitive prices in the Arabian Gulf market.",
    author: "Thymus Energy Trading Desk",
    readTime: "5 min read",
    image:
      "https://images.unsplash.com/photo-1605648916319-cf082f7524a1?q=80&w=2075&auto=format&fit=crop",
    href: "/media/1",
  },
  {
    id: 2,
    title: "Strategic Infrastructure: Our 250,000 CBM Storage Network",
    excerpt:
      "How Thymus Energy's onshore storage facilities across the Arabian Gulf — including Basra, Iraq — deliver speed, flexibility, and cost efficiency to our clients.",
    author: "Thymus Energy Operations",
    readTime: "7 min read",
    image:
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?q=80&w=2000&auto=format&fit=crop",
    href: "/media/2",
  },
  {
    id: 3,
    title: "Global Petroleum Markets 2026: Opportunities in the Arabian Gulf",
    excerpt:
      "A market outlook on Fuel Oil, Gas Oil, VGO, and Naphtha trading dynamics across the Gulf region and how Thymus Energy is positioned to capitalize.",
    author: "Thymus Energy Research",
    readTime: "6 min read",
    image:
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=2070&auto=format&fit=crop",
    href: "/media/3",
  },
];

const FeaturedCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? featuredArticles.length - 1 : prev - 1,
    );
  };

  const goToNext = () => {
    setCurrentIndex((prev) =>
      prev === featuredArticles.length - 1 ? 0 : prev + 1,
    );
  };

  const currentArticle = featuredArticles[currentIndex];

  return (
    <section className="py-20 px-6 bg-cream/5">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-3 mb-12"
        >
          <span className="w-12 h-[2px] bg-gold"></span>
          <span className="text-gold font-nunito font-bold tracking-widest uppercase text-sm">
            Featured Article
          </span>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 30 }}
            transition={{ duration: 0.5 }}
            className="relative h-96 rounded-lg overflow-hidden"
          >
            <img
              src={currentArticle.image}
              alt={currentArticle.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/80 via-transparent to-transparent" />
          </motion.div>

          {/* Content Section */}
          <motion.div
            key={`content-${currentIndex}`}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col justify-center"
          >
            <div className="inline-flex items-center gap-3 mb-4 text-soft-blue-gray text-sm font-nunito">
              <span>By {currentArticle.author}</span>
              <span className="w-1 h-1 rounded-full bg-gold"></span>
              <span>{currentArticle.readTime}</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-sora font-bold text-navy-deep mb-6 leading-tight">
              {currentArticle.title}
            </h2>

            <p className="text-lg text-soft-blue-gray mb-8 leading-relaxed">
              {currentArticle.excerpt}
            </p>

            <Link
              href={currentArticle.href}
              className="inline-flex items-center gap-2 text-navy-deep font-nunito font-bold hover:text-gold transition-colors group mb-8"
            >
              Read Full Article
              <IconArrowRight
                size={20}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>

            {/* Navigation Controls */}
            <div className="flex items-center gap-4">
              <button
                onClick={goToPrevious}
                className="p-3 rounded-lg bg-cream/30 hover:bg-gold hover:text-white text-navy-deep transition-all duration-300"
                aria-label="Previous article"
              >
                <IconArrowLeft size={20} />
              </button>

              <div className="flex items-center gap-2">
                {featuredArticles.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      index === currentIndex
                        ? "w-8 bg-gold"
                        : "w-2 bg-cream/40 hover:bg-cream/60"
                    }`}
                    aria-label={`Go to article ${index + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={goToNext}
                className="p-3 rounded-lg bg-cream/30 hover:bg-gold hover:text-white text-navy-deep transition-all duration-300"
                aria-label="Next article"
              >
                <IconArrowRight size={20} />
              </button>
            </div>

            <div className="mt-8 text-sm text-soft-blue-gray/70">
              {currentIndex + 1} of {featuredArticles.length}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCarousel;
