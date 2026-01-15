"use client";

import Link from "next/link";
import {
  IconBrandFacebook,
  IconBrandTwitter,
  IconBrandLinkedin,
  IconBrandInstagram,
  IconMail,
  IconPhone,
  IconMapPin,
} from "@tabler/icons-react";
import Image from "next/image";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy-deep text-white pt-20 pb-10 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-2">
              <Image src={"/logo.jpeg"} alt="logo" width={100} height={100} />
            </Link>
            <p className="text-cream/50 font-nunito leading-relaxed">
              Pioneering the future of energy with sustainable, reliable, and
              affordable solar solutions for every home and business.
            </p>
            <div className="flex gap-4">
              {[
                IconBrandFacebook,
                IconBrandTwitter,
                IconBrandLinkedin,
                IconBrandInstagram,
              ].map((Icon, i) => (
                <Link
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-gold hover:text-navy-deep transition-all"
                >
                  <Icon size={20} />
                </Link>
              ))}
            </div>
          </div>

          {/* Links Column */}
          <div>
            <h4 className="text-white font-sora font-bold text-lg mb-6">
              Quick Links
            </h4>
            <ul className="space-y-4 font-nunito text-cream/60">
              <li>
                <Link
                  href="/about"
                  className="hover:text-gold transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/solutions"
                  className="hover:text-gold transition-colors"
                >
                  Our Solutions
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  className="hover:text-gold transition-colors"
                >
                  Latest Projects
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="hover:text-gold transition-colors"
                >
                  Energy Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-gold transition-colors"
                >
                  Contact Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Solutions Column */}
          <div>
            <h4 className="text-white font-sora font-bold text-lg mb-6">
              Our Solutions
            </h4>
            <ul className="space-y-4 font-nunito text-cream/60">
              <li>
                <Link href="#" className="hover:text-gold transition-colors">
                  Residential Solar
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gold transition-colors">
                  Commercial Installation
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gold transition-colors">
                  Battery Storage
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gold transition-colors">
                  Smart Monitoring
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gold transition-colors">
                  Maintenance Services
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="text-white font-sora font-bold text-lg mb-6">
              Contact Us
            </h4>
            <ul className="space-y-4 font-nunito text-cream/60">
              <li className="flex gap-3">
                <IconMail className="text-gold shrink-0" size={20} />
                <span>hello@thymux.energy</span>
              </li>
              <li className="flex gap-3">
                <IconPhone className="text-gold shrink-0" size={20} />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex gap-3">
                <IconMapPin className="text-gold shrink-0" size={20} />
                <span>123 Solar Way, Energy City, ST 90210</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:row justify-between items-center gap-4 text-cream/40 font-nunito text-sm">
          <p>© {currentYear} Thymux Energy Inc. All rights reserved.</p>
          <div className="flex gap-8">
            <Link href="#" className="hover:text-gold">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-gold">
              Terms of Service
            </Link>
            <Link href="#" className="hover:text-gold">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
