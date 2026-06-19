"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

export default function CTA() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.from(".cta-content", {
        y: 60,
        opacity: 0,
        scale: 0.95,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 70%",
        },
      });
    },
    { scope: containerRef }
  );

  return (
    <section id="contact" className="relative py-28 px-6" ref={containerRef}>
      <div className="max-w-5xl mx-auto">
        <div className="cta-content relative rounded-[2rem] overflow-hidden">
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 via-indigo-600/10 to-purple-700/20" />
          <div className="absolute inset-0 bg-[#1A1230]" />
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-indigo-600/10" />

          {/* Grid pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(91,47,201,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(91,47,201,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />

          {/* Animated orbs */}
          <div className="absolute top-10 left-10 w-32 h-32 bg-purple-500/10 rounded-full blur-[60px] animate-pulse" />
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-indigo-600/10 rounded-full blur-[80px] animate-pulse" />

          {/* Content */}
          <div className="relative z-10 p-10 md:p-16 lg:p-20 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", bounce: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-purple-500/30 bg-purple-500/10 mb-8"
            >
              <span className="text-sm text-purple-300">
                🚀 Scope your next project in 2 business days
              </span>
            </motion.div>

            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Ready to Scope Your
              <br />
              <span className="bg-gradient-to-r from-purple-300 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
                Next Project?
              </span>
            </h2>

            <p className="mt-6 text-gray-400 text-lg max-w-2xl mx-auto">
              Send us your site data and timeline — we’ll respond with a
              capability fit within two business days.
            </p>

            {/* CTA Buttons */}
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="#"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 25px 50px rgba(91,47,201,0.4)",
                }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-5 bg-purple-700 text-white font-bold rounded-lg text-lg shadow-xl shadow-purple-500/25 hover:bg-purple-800 transition-all"
              >
                Request a Consultation →
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-5 border-2 border-white/[0.08] text-white font-bold rounded-lg text-lg hover:border-purple-500/50 hover:bg-purple-500/5 transition-all"
              >
                contact@aarbitechenergy.com
              </motion.a>
            </div>

            {/* Trust signals */}
            <div className="mt-12 flex flex-wrap justify-center gap-6 md:gap-10 text-sm text-gray-500">
              <span className="flex items-center gap-2">
                <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                No minimum orders
              </span>
              <span className="flex items-center gap-2">
                <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Free revisions
              </span>
              <span className="flex items-center gap-2">
                <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                24/7 Support
              </span>
              <span className="flex items-center gap-2">
                <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Cancel anytime
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
