"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";

function AnimatedCounter({
  target,
  suffix = "",
  prefix = "",
  duration = 2000,
}: {
  target: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [isInView, target, duration]);

  return (
    <span ref={ref}>
      {prefix}
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

const stats = [
  {
    value: 240,
    suffix: "+",
    label: "Projects Engineered",
    description: "Structural, process, and compliance engineering delivered",
  },
  {
    value: 100,
    suffix: "%",
    label: "On-Schedule Delivery",
    description: "Every project delivered on stamped schedule without exception",
  },
  {
    value: 18,
    suffix: "",
    label: "States with Active Work",
    description: "Active engineering operations across the United States",
  },
  {
    value: 842,
    suffix: " MW",
    label: "Grid Load Managed",
    description: "Total capacity of sites with active engineering support",
  },
  {
    value: 50,
    suffix: "+",
    label: "Licensed Engineers",
    description: "Professional engineers with deep energy sector expertise",
  },
  {
    value: 96,
    suffix: "%",
    label: "Project Readiness",
    description: "Average project readiness score across active portfolio",
  },
];

export default function Stats() {
  return (
    <section className="relative py-28 px-6">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-50/50 via-transparent to-transparent" />

      <div className="max-w-7xl mx-auto relative">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm uppercase tracking-[0.3em] text-purple-600 font-medium"
          >
            Proven Results
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.8 }}
            className="mt-4 text-3xl md:text-5xl lg:text-6xl font-bold text-gray-900"
          >
            Numbers That{" "}
            <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
              Speak
            </span>
          </motion.h2>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="group p-8 rounded-2xl border border-gray-200 bg-white hover:border-purple-300 transition-all duration-500 text-center shadow-sm"
            >
              <div className="text-4xl md:text-5xl font-bold text-purple-600 group-hover:scale-110 transition-transform duration-300">
                <AnimatedCounter
                  target={stat.value}
                  suffix={stat.suffix}
                />
              </div>
              <h3 className="mt-3 text-lg font-semibold text-gray-900">
                {stat.label}
              </h3>
              <p className="mt-2 text-sm text-gray-500">{stat.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
