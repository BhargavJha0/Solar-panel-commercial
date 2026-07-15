"use client";

import { motion } from "framer-motion";

const highlights = [
  { value: "1,500+", label: "Project Designs Delivered" },
  { value: "500+", label: "Clients Supported" },
  { value: "2023", label: "Established" },
  { value: "3", label: "Countries Served" },
];

export default function About() {
  return (
    <section id="about" className="relative py-28 px-6 overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-blue-100/40 rounded-full blur-[150px] -translate-x-1/2 -translate-y-1/2" />

      <div className="max-w-7xl mx-auto relative">
        {/* Centred header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xl md:text-2xl uppercase tracking-[0.3em] text-blue-600 font-bold"
          >
            About Us
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.8 }}
            className="mt-4 text-xl md:text-2xl lg:text-3xl font-bold text-gray-900"
          >
            A Specialized Solar Design &{" "}
            <span className="bg-gradient-to-r from-blue-600 to-blue-600 bg-clip-text text-transparent">
              Engineering Consultancy
            </span>
          </motion.h2>
        </div>

        {/* Body — text + stat cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left — paragraphs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="space-y-4 text-gray-500 text-sm leading-relaxed"
          >
            <p>
              Aarbitech Energy Pvt. Ltd. is a specialized solar design and
              engineering consultancy providing end-to-end engineering solutions
              for Solar EPC companies across{" "}
              <span className="text-gray-700 font-medium">India, the USA, and Australia</span>.
            </p>
            <p>
              Established in 2023, we help our clients accelerate project
              execution through high-quality{" "}
              <span className="text-gray-700 font-medium">
                Solar PV Design, Structural Engineering, Energy Simulations,
                Permit Packages, and Technical Documentation
              </span>
              . With extensive industry experience and a commitment to
              engineering excellence, we have successfully delivered over{" "}
              <span className="text-gray-700 font-medium">1,500 project designs</span> and
              supported more than{" "}
              <span className="text-gray-700 font-medium">500 clients</span>.
            </p>
            <p>
              At Aarbitech, our mission is to empower the renewable energy
              industry with accurate, reliable, and cost-effective engineering
              solutions that drive sustainable growth and long-term project
              success.
            </p>
            <p>
              Since 2023, we have supported projects across India, USA, and
              Australia with high-quality engineering solutions including PV
              design, structural engineering, permit drawings, energy
              simulations, and project documentation.
            </p>
          </motion.div>

          {/* Right — stat cards */}
          <div className="grid grid-cols-2 gap-5">
            {highlights.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="p-8 rounded-2xl border border-blue-100 bg-white shadow-sm hover:border-blue-300 hover:shadow-md transition-all duration-400 text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-blue-600">
                  {item.value}
                </div>
                <div className="mt-2 text-sm text-gray-500">{item.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
