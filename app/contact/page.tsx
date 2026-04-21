"use client";

import type React from "react";
import { useState } from "react";
import { Mail, Phone, MapPin, Linkedin, Youtube } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="bg-[#1b2d42] text-white px-6">
      {/* Hero Section */}
      <section className="bg-[#1b2d42] pt-20 pb-6 md:pt-32 md:pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Backgrund thingy */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/hero.jpg"
              alt="Solar Panels"
              className="object-cover opacity-30 h-screen w-full"
              width={300}
              height={200}
            />
            <div className="absolute inset-0 bg-linear-to-b from-navy-deep/60 via-navy-deep/80 to-navy-deep"></div>
          </div>

          <div className="text-center relative z-10">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-6xl lg:text-7xl text-center font-sora font-bold text-white leading-[1.1] mb-5 md:mb-8 pt-10"
            >
              Get in Touch
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg text-gray-300 mb-6 max-w-2xl mx-auto text-balance leading-relaxed"
            >
              Have a trading inquiry or partnership opportunity? We&apos;re here
              to help you navigate global petroleum markets.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-16 md:py-24 bg-[#1b2d42] relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-gold mb-8">
                Send us a Message
              </h2>

              {submitted && (
                <div className="mb-6 p-4 bg-green-50/10 border border-green-400/30 rounded-lg">
                  <p className="text-green-300 font-semibold">
                    Thank you! We&apos;ll get back to you soon.
                  </p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-semibold text-white mb-2"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-[#3a4e68] rounded-lg bg-[#2d4454] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gold"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold text-white mb-2"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-[#3a4e68] rounded-lg bg-[#2d4454] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gold"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-semibold text-white mb-2"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-[#3a4e68] rounded-lg bg-[#2d4454] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gold"
                    placeholder="+1 (xxx) yyy-zzzz"
                  />
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-semibold text-white mb-2"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-[#3a4e68] rounded-lg bg-[#2d4454] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gold"
                    placeholder="Trading Inquiry"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold text-white mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-[#3a4e68] rounded-lg bg-[#2d4454] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gold resize-none"
                    placeholder="Tell us about your trading or supply requirements..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gold text-[#1b2d42] font-semibold py-3 rounded-full hover:bg-[#e8c66f] transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-gold mb-8">
                  Contact Information
                </h2>
              </div>

              {/* Office Address */}
              <div className="flex gap-4">
                <MapPin className="w-6 h-6 text-gold shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-white mb-2">
                    Office Address
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    Jumeirah Bay X2 Tower, Office 3709
                    <br />
                    Cluster X, Jumeirah Lake Towers (JLT)
                    <br />
                    PO Box: 72045, DMCC
                    <br />
                    Dubai, United Arab Emirates
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex gap-4">
                <Phone className="w-6 h-6 text-gold shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-white mb-2">Phone</h3>
                  <p className="text-gray-300">
                    <a
                      href="tel:+97145660071"
                      className="hover:text-gold transition-colors"
                    >
                      +971 4 566 0071
                    </a>
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex gap-4">
                <Mail className="w-6 h-6 text-gold shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-white mb-2">Email</h3>
                  <p className="text-gray-300">
                    <a
                      href="mailto:trading@thymus-energy.com"
                      className="hover:text-gold transition-colors"
                    >
                      trading@thymus-energy.com
                    </a>
                  </p>
                </div>
              </div>

              {/* Business Hours */}
              <div className="mt-8 pt-8 border-t border-[#3a4e68]">
                <h3 className="font-semibold text-white mb-4">
                  Business Hours
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Monday - Friday: 9:00 AM - 6:00 PM
                 
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 md:py-24 bg-[#0f1820] relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gold mb-8">
            Visit Our Office
          </h2>
          <div className="w-full h-96 rounded-lg overflow-hidden shadow-lg border border-[#3a4e68]">
            <iframe
              src="https://www.google.com/maps?q=Jumeirah+Bay+X2+Tower+Cluster+X+JLT+DMCC+Dubai+UAE&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
