"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const services = [
  {
    icon: "📐",
    title: "Structural & Civil Engineering",
    description:
      "Foundation, support structure, and civil design for substations, racking, and process facilities. Built for uptime.",
    features: ["Foundation Design", "Support Structures", "Civil Works"],
    gradient: "from-blue-500/20 to-blue-600/20",
    borderColor: "border-blue-500/20",
    delay: 0,
  },
  {
    icon: "⚙️",
    title: "Process & Mechanical Design",
    description:
      "P&IDs, equipment sizing, and mechanical systems for power and process facilities with full compliance.",
    features: ["P&ID Development", "Equipment Sizing", "Mechanical Systems"],
    gradient: "from-cyan-500/20 to-blue-500/20",
    borderColor: "border-cyan-500/20",
    delay: 0.1,
  },
  {
    icon: "🔍",
    title: "Site Assessment & Due Diligence",
    description:
      "Feasibility studies, geotechnical coordination, and interconnection assessments for informed project decisions.",
    features: ["Feasibility Studies", "Geotechnical", "Interconnection"],
    gradient: "from-green-500/20 to-emerald-500/20",
    borderColor: "border-green-500/20",
    delay: 0.2,
  },
  {
    icon: "📋",
    title: "Permitting & Compliance",
    description:
      "Stamped drawing packages and regulatory submittals across state and federal jurisdictions. First-time approvals.",
    features: ["Stamped Drawings", "Regulatory Submittals", "Code Compliance"],
    gradient: "from-indigo-500/20 to-purple-500/20",
    borderColor: "border-indigo-500/20",
    delay: 0.3,
  },
  {
    icon: "⚡",
    title: "Electrical & Interconnection",
    description:
      "Power systems engineering, utility interconnection applications, and grid-tie solutions for energy projects.",
    features: ["Power Systems", "Grid Integration", "Utility Applications"],
    gradient: "from-amber-500/20 to-yellow-500/20",
    borderColor: "border-amber-500/20",
    delay: 0.4,
  },
  {
    icon: "🏗️",
    title: "Construction Support",
    description:
      "Pre-construction engineering, field support, and as-built documentation for seamless project execution.",
    features: ["Pre-Construction", "Field Support", "As-Built Docs"],
    gradient: "from-teal-500/20 to-cyan-500/20",
    borderColor: "border-teal-500/20",
    delay: 0.5,
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { y: 60, opacity: 0, scale: 0.95 },
  visible: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: { duration: 0.7, ease: "easeOut" as const },
  },
};

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="relative py-28 px-6">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/[0.02] to-transparent" />

      <div className="max-w-7xl mx-auto relative">
        {/* Section header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm uppercase tracking-[0.3em] text-blue-400 font-medium"
          >
            Our Capabilities
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.8 }}
            className="mt-4 text-3xl md:text-5xl lg:text-6xl font-bold text-white"
          >
            Complete Engineering{" "}
            <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
              Solutions
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="mt-4 text-gray-400 max-w-2xl mx-auto text-lg"
          >
            From structural design to final compliance — we handle every stage of
            energy engineering so you can focus on building and operations.
          </motion.p>
        </div>

        {/* Services grid */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className={`group relative p-8 rounded-2xl border ${service.borderColor} bg-[#161B22] hover:bg-[#1c2230] transition-all duration-500 overflow-hidden`}
            >
              {/* Hover gradient */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              />

              <div className="relative z-10">
                <span className="text-4xl">{service.icon}</span>
                <h3 className="mt-4 text-xl font-bold text-white group-hover:text-blue-100 transition-colors">
                  {service.title}
                </h3>
                <p className="mt-3 text-gray-400 text-sm leading-relaxed">
                  {service.description}
                </p>

                {/* Feature tags */}
                <div className="mt-5 flex flex-wrap gap-2">
                  {service.features.map((feature, i) => (
                    <span
                      key={i}
                      className="text-xs px-3 py-1 rounded-full bg-white/5 text-gray-300 border border-white/5"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional services row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {[
            "Energy Storage Design",
            "Substation Engineering",
            "EV Infrastructure",
            "Renewable Integration",
          ].map((item, i) => (
            <div
              key={i}
              className="p-4 rounded-xl border border-white/5 bg-white/[0.02] text-center hover:border-blue-500/20 hover:bg-blue-500/5 transition-all duration-300"
            >
              <span className="text-sm text-gray-300">{item}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
