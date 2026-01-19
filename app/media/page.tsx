"use client";

import Hero from "./_components/Hero";
import FeaturedCarousel from "./_components/FeaturedCarousel";
import Stats from "./_components/Stats";
import MediaGrid from "./_components/MediaGrid";
import Newsletter from "./_components/Newsletter";

export default function MediaPage() {
  return (
    <main className="min-h-screen bg-white text-navy-deep">
      <Hero />
      <FeaturedCarousel />
      <Stats />
      <MediaGrid />
      <Newsletter />
    </main>
  );
}
