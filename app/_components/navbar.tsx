"use client";

import { useState, useEffect } from "react";
import { IconMenu, IconMenu2, IconX } from "@tabler/icons-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
    { name: "Solutions", href: "/solutions" },
    { name: "Projects", href: "/projects" },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-navy-deep/60 backdrop-blur-md py-6 shadow-sm"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2 group">
          <Image src={"/logo.jpeg"} alt="logo" width={100} height={100} />
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-cream/80 hover:text-gold transition-colors font-nunito font-medium"
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/get-started"
            className="bg-gold hover:bg-bright-gold text-navy-deep px-6 py-2.5 rounded-full font-sora font-bold transition-all hover:scale-105 active:scale-95 shadow-[0_4px_20px_rgba(212,175,55,0.2)]"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <IconX size={30} /> : <IconMenu size={30} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-navy-deep border-t border-white/10 p-6 md:hidden flex flex-col gap-6"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-cream text-xl font-nunito font-medium hover:text-gold transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/get-started"
              onClick={() => setIsOpen(false)}
              className="bg-gold text-navy-deep text-center py-4 rounded-xl font-sora font-bold"
            >
              Get Started
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
