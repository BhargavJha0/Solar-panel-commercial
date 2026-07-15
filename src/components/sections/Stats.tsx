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
    value: 1000,
    suffix: "+",
    label: "Projects Delivered",
    description: "Successfully completed residential, commercial, and industrial solar engineering projects delivering accurate designs, permit packages, and structural solutions for EPC companies.",
  },
  {
    value: 200,
    suffix: "+ MW",
    label: "Solar Capacity Designed",
    description: "Designed and engineered more than 200 MW of solar PV systems, helping clients maximize energy production, optimize project performance, and achieve successful installations.",
  },
  {
    value: 4,
    suffix: "",
    label: "Countries Served",
    description: "Supporting solar developers and EPC companies across India, the United States, Australia and Ireland with engineering solutions tailored to local codes and utility requirements.",
  },
  {
    value: 48,
    suffix: " Hrs",
    prefix: "24–",
    label: "Fast Turnaround Time",
    description: "Efficient workflows and a dedicated engineering team enable us to deliver standard solar designs and permit packages within 24 to 48 hours, helping clients keep projects on schedule.",
  },
];

export default function Stats() {
  return (
    <section className="relative py-28 px-6">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50/50 via-transparent to-transparent" />

      <div className="max-w-7xl mx-auto relative">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xl md:text-2xl uppercase tracking-[0.3em] text-blue-600 font-bold"
          >
            Proven Results
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.8 }}
            className="mt-4 text-xl md:text-2xl lg:text-3xl font-bold text-gray-900"
          >
            Engineering Excellence{" "}
            <span className="bg-gradient-to-r from-blue-600 to-blue-600 bg-clip-text text-transparent">
              Backed by Experience
            </span>
          </motion.h2>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="group p-8 rounded-2xl border border-gray-200 bg-white hover:border-blue-300 transition-all duration-500 text-center shadow-sm"
            >
              <div className="text-4xl md:text-5xl font-bold text-blue-600 group-hover:scale-110 transition-transform duration-300">
                {stat.prefix && <span>{stat.prefix}</span>}
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
