"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    category: "Substation",
    title: "115kV Substation Expansion",
    location: "Houston, TX",
    description: "Full structural and civil engineering for utility substation upgrade including foundation design and steel detailing.",
    stats: { panels: "115kV", production: "240 MW", savings: "14 weeks" },
    gradient: "from-blue-500 to-blue-700",
  },
  {
    category: "Solar Farm",
    title: "Utility-Scale Solar — 80MW",
    location: "Phoenix, AZ",
    description: "Racking structural design, civil grading, and interconnection engineering for large-scale photovoltaic installation.",
    stats: { panels: "80 MW", production: "156,000 MWh/yr", savings: "10 weeks" },
    gradient: "from-cyan-500 to-blue-500",
  },
  {
    category: "Wind",
    title: "Wind Farm Foundation Design",
    location: "Amarillo, TX",
    description: "Geotechnical coordination and reinforced concrete foundation engineering for 45-turbine wind installation.",
    stats: { panels: "45 Turbines", production: "180 MW", savings: "12 weeks" },
    gradient: "from-green-500 to-emerald-500",
  },
  {
    category: "BESS",
    title: "Battery Storage Facility",
    location: "Sacramento, CA",
    description: "Process engineering and structural design for 200MWh battery energy storage system with full permitting.",
    stats: { panels: "200 MWh", production: "50 MW", savings: "8 weeks" },
    gradient: "from-indigo-500 to-purple-500",
  },
];

export default function Portfolio() {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const panels = gsap.utils.toArray<HTMLElement>(".portfolio-card");

      gsap.to(panels, {
        xPercent: -100 * (panels.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: scrollRef.current,
          pin: true,
          scrub: 1,
          end: () => "+=" + ((scrollRef.current?.scrollWidth || 0) - window.innerWidth),
          invalidateOnRefresh: true,
        },
      });
    },
    { scope: containerRef }
  );

  return (
    <section id="portfolio" className="relative py-28" ref={containerRef}>
      {/* Header */}
      <div className="px-6 max-w-7xl mx-auto mb-16">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-sm uppercase tracking-[0.3em] text-amber-400 font-medium"
            >
              Our Work
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.8 }}
              className="mt-4 text-3xl md:text-5xl lg:text-6xl font-bold text-white"
            >
              Featured{" "}
              <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                Projects
              </span>
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-gray-500 text-sm uppercase tracking-widest"
          >
            Scroll horizontally →
          </motion.p>
        </div>
      </div>

      {/* Horizontal scroll */}
      <div ref={scrollRef} className="relative overflow-hidden">
        <div className="flex gap-8 px-6 w-max">
          {projects.map((project, i) => (
            <div
              key={i}
              className="portfolio-card w-[85vw] md:w-[600px] lg:w-[700px] shrink-0"
            >
              <div className="group h-full p-8 md:p-10 rounded-3xl border border-white/5 bg-[#161B22] hover:border-blue-500/20 transition-all duration-500 flex flex-col">
                {/* Category badge */}
                <div className="flex items-center justify-between mb-6">
                  <span
                    className={`px-4 py-1.5 rounded-full text-xs font-medium bg-gradient-to-r ${project.gradient} text-white`}
                  >
                    {project.category}
                  </span>
                  <span className="text-sm text-gray-500">
                    📍 {project.location}
                  </span>
                </div>

                {/* Placeholder for project image */}
                <div className={`w-full h-48 md:h-56 rounded-2xl bg-gradient-to-br ${project.gradient} opacity-20 group-hover:opacity-30 transition-opacity duration-500 mb-6 flex items-center justify-center`}>
                  <svg className="w-16 h-16 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>

                {/* Content */}
                <h3 className="text-xl md:text-2xl font-bold text-white">
                  {project.title}
                </h3>
                <p className="mt-3 text-gray-400 text-sm leading-relaxed flex-grow">
                  {project.description}
                </p>

                {/* Stats */}
                <div className="mt-6 grid grid-cols-3 gap-4 pt-6 border-t border-white/5">
                  <div>
                    <div className="text-lg font-bold text-blue-400">
                      {project.stats.panels}
                    </div>
                    <div className="text-xs text-gray-500">Capacity</div>
                  </div>
                  <div>
                    <div className="text-lg font-bold text-blue-400">
                      {project.stats.production}
                    </div>
                    <div className="text-xs text-gray-500">Output</div>
                  </div>
                  <div>
                    <div className="text-lg font-bold text-blue-400">
                      {project.stats.savings}
                    </div>
                    <div className="text-xs text-gray-500">Delivery</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
