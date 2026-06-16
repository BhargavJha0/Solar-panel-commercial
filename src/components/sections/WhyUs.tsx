"use client";

import { motion } from "framer-motion";

const reasons = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "On-Schedule Delivery",
    description: "100% on-time delivery across every project. Engineering completed and stamped according to the committed timeline, every time.",
    metric: "100%",
    metricLabel: "On Time",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: "Full Compliance",
    description: "Every deliverable meets state, federal, and industry standards. Stamped drawings that pass regulatory review on first submission.",
    metric: "96%",
    metricLabel: "First-Pass Rate",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Cost Efficiency",
    description: "Eliminate in-house engineering overhead. No hiring, training, or capacity constraints. Scale engineering support with zero fixed cost.",
    metric: "40%",
    metricLabel: "Cost Savings",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Multi-State Coverage",
    description: "Licensed engineers operating across 18 states with jurisdiction-specific expertise. Local code knowledge with national delivery capability.",
    metric: "18",
    metricLabel: "States Active",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: "Real-Time Monitoring",
    description: "Control-room visibility into every active project. Live status tracking, milestone updates, and deliverable management from one dashboard.",
    metric: "24/7",
    metricLabel: "Visibility",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    title: "Expert Engineering Team",
    description: "Licensed PEs with deep energy sector experience. Structural, process, electrical, and civil disciplines under one integrated team.",
    metric: "50+",
    metricLabel: "Engineers",
  },
];

export default function WhyUs() {
  return (
    <section className="relative py-28 px-6 overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-500/[0.03] rounded-full blur-[150px] -translate-y-1/2 translate-x-1/2" />

      <div className="max-w-7xl mx-auto relative">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-16 gap-6">
          <div>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-sm uppercase tracking-[0.3em] text-blue-400 font-medium"
            >
              Why Choose Us
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.8 }}
              className="mt-4 text-3xl md:text-5xl lg:text-6xl font-bold text-white max-w-2xl"
            >
              Your Engineering{" "}
              <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                Advantage
              </span>
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 max-w-md text-lg"
          >
            Choosing the right engineering partner directly impacts how fast
            projects move from design to construction.
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5 rounded-3xl overflow-hidden">
          {reasons.map((reason, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.6 }}
              className="group relative p-8 bg-[#0D1117] hover:bg-[#161B22] transition-all duration-500"
            >
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="text-blue-400 group-hover:text-blue-300 transition-colors">
                {reason.icon}
              </div>

              <h3 className="mt-5 text-lg font-bold text-white">
                {reason.title}
              </h3>
              <p className="mt-3 text-sm text-gray-400 leading-relaxed">
                {reason.description}
              </p>

              <div className="mt-6 flex items-baseline gap-2">
                <span className="text-2xl font-bold text-blue-400">
                  {reason.metric}
                </span>
                <span className="text-xs text-gray-500 uppercase tracking-wider">
                  {reason.metricLabel}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
