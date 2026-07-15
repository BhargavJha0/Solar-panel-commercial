"use client";

import { useRef } from "react";
import { motion } from "framer-motion";

const categories = [
  {
    icon: "🏭",
    label: "Commercial & Industrial",
    title: "Commercial & Industrial Projects",
    gradient: "from-blue-500 to-blue-700",
    bg: "bg-blue-50",
    border: "border-blue-200",
    tag: "bg-blue-100 text-blue-700",
    accent: "text-blue-600",
    projects: [
      { name: "DS Group Headquarters", capacity: "315 kW" },
      { name: "DS Group Flavoured", capacity: "205 kW" },
      { name: "Country Delight", capacity: "200 kW" },
      { name: "Indo Nuclear Energy", capacity: "200 kW" },
      { name: "Gurind India", capacity: "190 kW" },
      { name: "Chittagarh Resorts", capacity: "160 kW" },
      { name: "MR Floor Mills", capacity: "150 kW" },
      { name: "Mira Exim", capacity: "150 kW" },
      { name: "MK Enterprises", capacity: "100 kW" },
      { name: "Classic Rubtech Pvt Ltd", capacity: "70 kW" },
      { name: "SRB Group", capacity: "70 kW" },
      { name: "Pearl Pressision", capacity: "50 kW" },
    ],
  },
  {
    icon: "🎓",
    label: "Educational & Medical",
    title: "Educational & Medical Institution Projects",
    gradient: "from-emerald-500 to-teal-600",
    bg: "bg-emerald-50",
    border: "border-emerald-200",
    tag: "bg-emerald-100 text-emerald-700",
    accent: "text-emerald-600",
    projects: [
      { name: "GD Goenka School", capacity: "450 kW" },
      { name: "Bloom Healthcare", capacity: "150 kW" },
      { name: "Accurate College", capacity: "50 kW" },
      { name: "Dayanand Public School", capacity: "50 kW" },
      { name: "SR Capital Public School", capacity: "34 kW" },
      { name: "Amicare", capacity: "40 kW" },
      { name: "Butterfly School", capacity: "30 kW" },
      { name: "Glorious Educational Society", capacity: "20 kW" },
      { name: "Aryadeep Public School", capacity: "—" },
    ],
  },
];

export default function Portfolio() {
  const ref = useRef(null);

  return (
    <section id="portfolio" className="relative py-28 px-6">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-50/30 to-transparent" />

      <div className="max-w-7xl mx-auto relative">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm uppercase tracking-[0.3em] text-blue-600 font-bold"
          >
            Our Work
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.8 }}
            className="mt-4 text-3xl md:text-5xl lg:text-6xl font-bold text-gray-900"
          >
            Our{" "}
            <span className="bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent">
              Projects
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="mt-4 text-gray-500 max-w-2xl mx-auto text-sm md:text-base"
          >
            Delivering precision engineering across industries — from corporate headquarters to schools and hospitals.
          </motion.p>
        </div>

        {/* Two category cards */}
        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {categories.map((cat, ci) => (
            <motion.div
              key={ci}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: ci * 0.15, duration: 0.7, ease: "easeOut" }}
              className={`rounded-3xl border ${cat.border} bg-white shadow-sm overflow-hidden`}
            >
              {/* Card header */}
              <div className={`bg-gradient-to-br ${cat.gradient} px-7 py-6 relative overflow-hidden`}>
                <div className="absolute -top-6 -right-6 w-32 h-32 bg-white/10 rounded-full" />
                <div className="absolute -bottom-8 -left-4 w-24 h-24 bg-white/10 rounded-full" />
                <div className="relative z-10 flex items-center gap-4">
                  <span className="text-4xl">{cat.icon}</span>
                  <div>
                    <p className="text-[10px] font-extrabold text-white/70 uppercase tracking-[0.2em]">{cat.label}</p>
                    <h3 className="text-lg md:text-xl font-black text-white leading-tight">{cat.title}</h3>
                  </div>
                </div>
                <div className={`mt-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 text-white text-xs font-bold`}>
                  {cat.projects.length} Projects
                </div>
              </div>

              {/* Project list */}
              <div className="px-7 py-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {cat.projects.map((p, pi) => (
                    <motion.div
                      key={pi}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: ci * 0.1 + pi * 0.05 }}
                      className={`flex items-center justify-between gap-2 px-3.5 py-2.5 rounded-xl ${cat.bg} border ${cat.border}`}
                    >
                      <div className="flex items-center gap-2 min-w-0">
                        <span className={`shrink-0 w-1.5 h-1.5 rounded-full ${cat.accent.replace("text-", "bg-")}`} />
                        <span className="text-xs font-semibold text-gray-800 truncate">{p.name}</span>
                      </div>
                      <span className={`shrink-0 text-xs font-black ${cat.accent}`}>{p.capacity}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
