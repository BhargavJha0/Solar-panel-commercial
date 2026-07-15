"use client";

import { motion } from "framer-motion";

const footerLinks = {
  services: [
    { name: "Structural Engineering", href: "#" },
    { name: "Process & Mechanical", href: "#" },
    { name: "Permitting & Compliance", href: "#" },
    { name: "Site Assessment", href: "#" },
    { name: "Interconnection", href: "#" },
    { name: "Construction Support", href: "#" },
    { name: "Energy Storage", href: "#" },
    { name: "Substation Design", href: "#" },
  ],
  company: [
    { name: "About Us", href: "#" },
    { name: "Careers", href: "#" },
    { name: "Insights", href: "#" },
    { name: "Case Studies", href: "#" },
    { name: "Data Security", href: "#" },
    { name: "Partner Program", href: "#" },
  ],
  resources: [
    { name: "Client Portal", href: "#" },
    { name: "Engineering Standards", href: "#" },
    { name: "Code Compliance", href: "#" },
    { name: "FAQs", href: "#" },
    { name: "Privacy Policy", href: "#" },
    { name: "Terms & Conditions", href: "#" },
  ],
};

export default function Footer() {
  return (
    <footer className="relative pt-20 pb-8 px-6 border-t border-gray-200 bg-[#1A0A3E]">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0F0622] to-transparent" />

      <div className="max-w-7xl mx-auto relative">
        {/* Main footer */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 mb-4"
            >
              <div className="w-10 h-10 rounded-lg bg-blue-600 flex items-center justify-center">
                <svg className="w-6 h-6 text-white" viewBox="0 0 40 40" fill="none">
                  <path d="M20 4 L30 34 L24 34 L20 22 L16 34 L10 34 Z" fill="currentColor"/>
                  <rect x="15" y="24" width="10" height="3" fill="#5B2FC9"/>
                </svg>
              </div>
              <span className="text-xl font-bold text-white">
                Aarbitech<span className="text-blue-400"> Energy</span>
              </span>
            </motion.div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
              Engineering, Design, Solutions. Structural, process, and compliance
              engineering for utilities, EPCs, and developers — designed for
              uptime, not just approval.
            </p>

            {/* Contact info */}
            <div className="mt-6 space-y-2 text-sm text-gray-400">
              <p>📞 <a href="tel:+919310575389" className="hover:text-blue-400 transition-colors">+91-9310575389</a></p>
              <p>📞 <a href="tel:+917408254142" className="hover:text-blue-400 transition-colors">+91-7408254142</a></p>
              <p>📧 <a href="mailto:info@aarbitechenergy.com" className="hover:text-blue-400 transition-colors">info@aarbitechenergy.com</a></p>
              <p>📧 <a href="mailto:sales@aarbitechenergy.com" className="hover:text-blue-400 transition-colors">sales@aarbitechenergy.com</a></p>
            </div>

            {/* Social links */}
            <div className="flex gap-3 mt-6">
              {["LinkedIn", "Twitter", "Instagram", "YouTube"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-blue-400 hover:border-blue-500/30 transition-all"
                >
                  <span className="text-xs font-medium">
                    {social.charAt(0)}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm uppercase tracking-widest text-white font-semibold mb-4">
              Services
            </h4>
            <ul className="space-y-2.5">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-blue-400 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm uppercase tracking-widest text-white font-semibold mb-4">
              Company
            </h4>
            <ul className="space-y-2.5">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-blue-400 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-sm uppercase tracking-widest text-white font-semibold mb-4">
              Resources
            </h4>
            <ul className="space-y-2.5">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-blue-400 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Certifications */}
        <div className="py-8 border-t border-white/5 mb-8">
          <div className="flex flex-wrap justify-center items-center gap-8">
            {["ISO 9001:2015", "ISO 27001", "NABCEP Partner", "UL Certified", "Great Place to Work"].map(
              (cert, i) => (
                <span
                  key={i}
                  className="text-xs text-gray-500 px-4 py-2 rounded-full border border-white/5"
                >
                  {cert}
                </span>
              )
            )}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-white/5 text-xs text-gray-600">
          <p>
            © {new Date().getFullYear()} Aarbitech Energy. All Rights Reserved.
          </p>
          <p>
            Engineering · Design · Solutions
          </p>
        </div>
      </div>
    </footer>
  );
}
