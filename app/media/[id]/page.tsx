"use client";

import { motion } from "framer-motion";
import {
  IconArrowLeft,
  IconCalendar,
  IconUser,
  IconClock,
  IconShare2,
} from "@tabler/icons-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useParams } from "next/navigation";

interface NewsArticle {
  id: string;
  title: string;
  content: string;
  category: string;
  date: string;
  author: string;
  readTime: string;
  tags: string[];
  relatedArticles: string[]; // Changed to string[] to match keys
  image: string;
}

const NEWS_ARTICLES: Record<string, NewsArticle> = {
  "1": {
    id: "1",
    category: "Press Release",
    title: "Thymux Energy Expands Solar Operations to West Africa",
    date: "Jan 12, 2026",
    author: "Dr. Emmanuel Okafor",
    readTime: "8 min read",
    image:
      "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?q=80&w=2075&auto=format&fit=crop",
    content: `
      <p>Thymux Energy is thrilled to announce a major expansion of our solar operations across West Africa. This strategic initiative represents a significant milestone in our commitment to providing sustainable energy solutions to underserved communities across the Atlantic region.</p>

      <h3>The Expansion Details</h3>
      <p>Our new initiative aims to provide sustainable energy solutions to over 50,000 households across multiple West African nations, including Ghana, Nigeria, Ivory Coast, and Senegal. This expansion will deploy approximately 250 MW of solar capacity over the next 18 months, making it one of the largest renewable energy projects in the region.</p>

      <h3>Key Features</h3>
      <ul>
        <li><strong>Distributed Solar Systems:</strong> We're implementing community-based solar installations that provide electricity access to rural and semi-urban areas previously lacking reliable power.</li>
        <li><strong>Job Creation:</strong> The project will create over 3,000 direct and indirect jobs, providing training and employment opportunities for local communities.</li>
        <li><strong>Environmental Impact:</strong> The initiative will prevent approximately 200,000 tons of CO2 emissions annually compared to diesel generation.</li>
        <li><strong>Economic Benefits:</strong> Customers will see a reduction of 40-50% in their electricity costs compared to traditional diesel-based systems.</li>
      </ul>

      <h3>Technology & Infrastructure</h3>
      <p>The expansion utilizes our latest high-efficiency solar modules combined with smart energy management systems. Each installation is equipped with advanced battery storage solutions ensuring 24-hour power availability, even during periods of low sunlight.</p>

      <h3>Community Partnership</h3>
      <p>We are partnering with local governments, NGOs, and community organizations to ensure that this expansion is culturally sensitive and economically beneficial for all stakeholders. Our approach prioritizes local hiring, community education, and sustainable business models that empower local entrepreneurs.</p>

      <h3>Future Outlook</h3>
      <p>This West African expansion is just the beginning. We are planning similar initiatives in East Africa and Southeast Asia over the next five years, with the goal of providing clean, affordable energy to 1 million households globally by 2030.</p>

      <p>For more information about this expansion or partnership opportunities, please contact our business development team at expansion@thymuxenergy.com.</p>
    `,
    tags: ["Solar Energy", "West Africa", "Expansion", "Sustainability"],
    relatedArticles: ["2"], // Fixed: use string keys
  },
  "2": {
    id: "2",
    category: "Innovation",
    title: "Introducing Next-Gen High Efficiency PV Modules",
    date: "Jan 05, 2026",
    author: "Dr. Sarah Chen",
    readTime: "10 min read",
    image:
      "https://images.unsplash.com/photo-1548337138-e87d889cc369?q=80&w=2000&auto=format&fit=crop",
    content: `
      <p>Thymux Energy is proud to unveil our breakthrough photovoltaic technology: the NextGen-PV Module. This revolutionary advancement achieves a 25% increase in energy conversion efficiency in low-light conditions, setting a new industry standard.</p>

      <h3>The Innovation</h3>
      <p>Our research and development team has spent over three years perfecting the NextGen-PV Module, incorporating advanced materials science, machine learning algorithms, and innovative design principles. The result is a solar panel that performs exceptionally well even in challenging environmental conditions.</p>

      <h3>Key Technical Features</h3>
      <ul>
        <li><strong>Dual-Junction Technology:</strong> Our patented dual-junction perovskite-silicon design captures a broader spectrum of light wavelengths.</li>
        <li><strong>AI-Optimized Surfaces:</strong> Machine learning algorithms have been used to design panel surfaces that minimize reflection and maximize light absorption.</li>
        <li><strong>Enhanced Temperature Management:</strong> Innovative cooling mechanisms ensure optimal performance even in extreme heat.</li>
        <li><strong>Durability:</strong> The modules are rated for 30+ years of operation with minimal degradation.</li>
      </ul>

      <h3>Performance Metrics</h3>
      <p>In independent testing conducted by certified third-party laboratories, the NextGen-PV Module demonstrated:</p>
      <ul>
        <li>25% higher efficiency in low-light conditions compared to industry-standard panels</li>
        <li>18% overall efficiency improvement across all lighting conditions</li>
        <li>Consistent performance in temperatures ranging from -40°C to +80°C</li>
        <li>Superior durability against weather-related stress</li>
      </ul>

      <h3>Environmental & Economic Benefits</h3>
      <p>The improved efficiency means fewer panels are needed to generate the same amount of electricity, reducing material waste and installation costs. For residential customers, this translates to faster payback periods and higher long-term savings.</p>

      <h3>Availability & Pricing</h3>
      <p>The NextGen-PV Module is now available for pre-order, with initial production starting in Q2 2026. We're offering competitive pricing with flexible installation packages for both residential and commercial customers.</p>

      <h3>Looking Forward</h3>
      <p>This is just the beginning of a new era in solar technology. Our R&D team is already working on Gen-2 modules that will push efficiency even further. We're committed to making clean energy not just sustainable, but economically superior to fossil fuels.</p>
    `,
    tags: ["Innovation", "Solar Technology", "Efficiency", "R&D"],
    relatedArticles: ["1"], // Fixed: use string keys
  },
};

const MediaDetailPage = () => {
  const params = useParams();
  const articleId = params.id as string;
  const article = NEWS_ARTICLES[articleId];

  if (!article) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-sora font-bold text-navy-deep mb-4">
            Article Not Found
          </h1>
          <p className="text-soft-blue-gray mb-8">
            The article you&apos;re looking for doesn&apos;t exist.
          </p>
          <Link href="/media">
            <Button className="bg-gold hover:bg-gold/90 text-navy-deep">
              Return to Media
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-white text-navy-deep ">
      <section className="relative py-12 px-6 bg-navy-deep overflow-hidden pt-30">
        <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.1)_1px,transparent_1px)] [background-size:16px_16px] opacity-20 pointer-events-none" />

        <div className="container mx-auto max-w-4xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <span className="inline-flex items-center justify-center py-1.5 px-4 mb-6 text-xs font-bold tracking-wider uppercase text-gold border border-gold/40 rounded-full bg-gold/10 backdrop-blur-sm">
              {article.category}
            </span>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-sora font-bold text-white mb-6 leading-tight">
              {article.title}
            </h1>

            <div className="flex flex-wrap items-center justify-center gap-6 text-soft-blue-gray">
              <div className="flex items-center gap-2">
                <IconUser size={16} />
                <span className="font-nunito">{article.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <IconCalendar size={16} />
                <span className="font-nunito">{article.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <IconClock size={16} />
                <span className="font-nunito">{article.readTime}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Image */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="relative h-96 md:h-[500px] overflow-hidden container mx-auto max-w-3xl"
      >
        <img
          src={article.image}
          alt={article.title}
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Article Content */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="prose prose-lg max-w-none
              prose-headings:font-sora prose-headings:font-bold prose-headings:text-navy-deep
              prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4
              prose-p:text-soft-blue-gray prose-p:leading-relaxed prose-p:mb-6 prose-p:font-nunito
              prose-li:text-soft-blue-gray prose-li:font-nunito prose-li:mb-2
              prose-ul:mb-6 prose-ol:mb-6
              prose-strong:text-navy-deep prose-strong:font-bold
              prose-a:text-gold prose-a:font-bold hover:prose-a:underline"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />

          {/* Tags */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-12 pt-8 border-t border-navy-deep/10"
          >
            <div className="flex flex-wrap gap-3">
              {article.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-2 bg-cream/20 text-navy-deep rounded-full text-sm font-nunito font-bold hover:bg-gold hover:text-white transition-all duration-300 cursor-pointer"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Share Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-8 flex items-center gap-4"
          >
            <span className="text-navy-deep font-nunito font-bold">Share:</span>
            <button className="p-3 bg-cream/20 rounded-lg hover:bg-gold hover:text-white transition-all duration-300">
              <IconShare2 size={18} />
            </button>
            {/* Add more share buttons if needed (Twitter, LinkedIn, etc.) */}
          </motion.div>
        </div>
      </section>

      {/* Related Articles */}
      {article.relatedArticles && article.relatedArticles.length > 0 && (
        <section className="py-16 px-6 bg-cream/5">
          <div className="container mx-auto max-w-4xl">
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-3xl font-sora font-bold text-navy-deep mb-8 flex items-center gap-3"
            >
              <span className="w-12 h-[2px] bg-gold"></span>
              Related Articles
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {article.relatedArticles.map((relatedId, index) => {
                const relatedArticle = NEWS_ARTICLES[relatedId];
                if (!relatedArticle) return null;

                return (
                  <motion.div
                    key={relatedId}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="group cursor-pointer"
                  >
                    <Link href={`/media/${relatedId}`}>
                      <div className="relative h-48 rounded-lg overflow-hidden mb-4">
                        <img
                          src={relatedArticle.image}
                          alt={relatedArticle.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                      <h3 className="text-lg font-sora font-bold text-navy-deep group-hover:text-gold transition-colors mb-2">
                        {relatedArticle.title}
                      </h3>
                      <p className="text-sm text-soft-blue-gray font-nunito">
                        {relatedArticle.date} • {relatedArticle.readTime}
                      </p>
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-16 px-6 bg-gradient-to-br from-navy-deep to-navy-deep/90">
        <div className="container mx-auto max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-sora font-bold text-white mb-4">
              Stay Updated with Thymux Energy
            </h2>
            <p className="text-soft-blue-gray mb-8 font-nunito">
              Subscribe to our newsletter to get the latest news and insights.
            </p>
            <Link href="/media">
              <Button className="bg-gold hover:bg-gold/90 text-navy-deep font-nunito font-bold">
                Back to All Articles
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default MediaDetailPage;
