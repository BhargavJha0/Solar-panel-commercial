"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

const clientTypes = [
  {
    icon: "⚡",
    title: "Utilities",
    description: "Substation design, grid infrastructure, and power systems engineering at utility scale.",
  },
  {
    icon: "🏗️",
    title: "EPC Companies",
    description: "Enterprise-grade engineering support for high-volume energy construction projects.",
  },
  {
    icon: "📈",
    title: "Developers",
    description: "Feasibility studies, site assessments, and design packages for project financing.",
  },
  {
    icon: "🏭",
    title: "Asset Owners",
    description: "Operations engineering, capacity expansion, and compliance maintenance support.",
  },
  {
    icon: "💼",
    title: "Financial Partners",
    description: "Independent engineering reviews and technical due diligence for energy investments.",
  },
  {
    icon: "🔧",
    title: "O&M Providers",
    description: "Retrofit designs, system expansions, and performance engineering support.",
  },
];

export default function Clients() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // Marquee animation
      const marquee = document.querySelector(".marquee-track");
      if (marquee) {
        gsap.to(marquee, {
          xPercent: -50,
          ease: "none",
          duration: 30,
          repeat: -1,
        });
      }
    },
    { scope: containerRef }
  );

  return (
    <section className="relative py-28 px-6" ref={containerRef}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm uppercase tracking-[0.3em] text-purple-400 font-medium"
          >
            Who We Serve
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.8 }}
            className="mt-4 text-3xl md:text-5xl lg:text-6xl font-bold text-white"
          >
            Built for{" "}
            <span className="bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
              Energy Professionals
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-gray-400 max-w-2xl mx-auto text-lg"
          >
            Whether you manage 5 MW or 500 MW — our engineering platform and process
            scale with you.
          </motion.p>
        </div>

        {/* Client types grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {clientTypes.map((client, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="group p-6 rounded-2xl border border-white/5 bg-[#1A1230] hover:border-purple-500/20 hover:bg-[#221840] transition-all duration-400"
            >
              <span className="text-3xl">{client.icon}</span>
              <h3 className="mt-3 text-base font-semibold text-white group-hover:text-purple-100 transition-colors">
                {client.title}
              </h3>
              <p className="mt-2 text-sm text-gray-400">
                {client.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Global presence marquee */}
        <div className="mt-20 overflow-hidden">
          <p className="text-center text-xs text-gray-600 uppercase tracking-widest mb-6">
            Serving clients across
          </p>
          <div className="relative">
            <div className="marquee-track flex gap-12 whitespace-nowrap">
              {[
                "🇺🇸 United States",
                "🇨🇦 Canada",
                "🇬🇧 United Kingdom",
                "🇦🇺 Australia",
                "🇪🇺 Europe",
                "🇦🇪 UAE",
                "🇮🇳 India",
                "🇺🇸 United States",
                "🇨🇦 Canada",
                "🇬🇧 United Kingdom",
                "🇦🇺 Australia",
                "🇪🇺 Europe",
                "🇦🇪 UAE",
                "🇮🇳 India",
              ].map((country, i) => (
                <span
                  key={i}
                  className="text-lg text-gray-400 font-medium"
                >
                  {country}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
