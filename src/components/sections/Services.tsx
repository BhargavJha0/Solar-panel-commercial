"use client";

import { useState, useEffect } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef } from "react";

const services = [
  {
    number: "01",
    icon: "☀️",
    title: "Solar Services",
    brief: "Convert leads into projects with professional proposals.",
    detail:
      "",
    features: [
      {
        name: "Solar Sales Proposal",
        desc: "We develop high-quality solar sales proposals that help EPC companies convert leads into successful projects. Using industry-leading software such as Aurora Solar, HelioScope, Brightpath, and PVsyst, we create accurate system layouts, energy generation simulations, financial analysis, and ROI calculations. Our proposals include 3D visualizations, shading analysis, equipment selection, production estimates, and comprehensive project reports, enabling clients to present professional and data-driven solutions with confidence.",
      },
      {
        name: "Solar Permit Plan Set",
        desc: "Our permit-ready drawing packages are designed to meet the requirements of local authorities and utility providers. We prepare complete permit documentation, including site plans, electrical drawings, structural details, equipment specifications, and code-compliant layouts for residential, commercial, and industrial projects.",
      },
      {
        name: "PE Stamp",
        desc: "We coordinate with licensed Professional Engineers (PE) to provide certified engineering drawings where required. Our team ensures that all structural and electrical designs are prepared to applicable engineering standards, enabling smooth project approvals and permitting.",
      },
      {
        name: "AHJ & Utility Compliances",
        desc: "We ensure every design complies with the requirements of the Authority Having Jurisdiction (AHJ) and local utility companies. Our engineering team stays updated with regional codes and utility standards to minimize revisions, reduce approval time, and streamline project execution.",
      },
      {
        name: "As Built Design",
        desc: "We prepare accurate as-built drawings that reflect the final installed system after project completion. These drawings are essential for project documentation, future maintenance, warranty support, and utility close-out requirements.",
      },
      {
        name: "EV Charging Station Design",
        desc: "We provide complete engineering solutions for electric vehicle charging infrastructure, including site assessment, charger layout, electrical load calculations, cable routing, protection systems, and utility coordination for residential, commercial, and fleet charging projects.",
      },
    ],
    color: "from-yellow-400 to-orange-400",
    bg: "bg-yellow-50",
    border: "border-yellow-200",
    tag: "bg-yellow-100 text-yellow-700",
  },
  {
    number: "02",
    icon: "🏗️",
    title: "Structural Engineering",
    brief: "Safe, optimized structures for solar and industrial projects.",
    detail:
      "Our structural engineering team delivers precise, code-compliant designs for solar mounting systems, steel structures, and large-span installations. We combine advanced analysis tools with deep domain knowledge to ensure every structure is safe, efficient, and built to last.",
    features: [
      {
        name: "Solar Structure Design & Analysis",
        desc: "Our engineers design safe, optimized, and cost-effective solar mounting structures for rooftop, ground-mounted, ballast, carport, and elevated solar systems. Every structure is engineered for maximum durability and installation efficiency.",
      },
      {
        name: "Steel Structure Design & Analysis",
        desc: "We deliver detailed steel structure designs for industrial, commercial, and infrastructure projects. Our designs focus on structural integrity, material optimization, and compliance with relevant engineering standards to ensure long-term performance.",
      },
      {
        name: "STAAD Pro Analysis",
        desc: "Using STAAD Pro, we perform advanced structural analysis to evaluate load-bearing capacity, wind resistance, seismic performance, and overall structural stability. Our detailed analysis ensures reliable and code-compliant engineering solutions.",
      },
      {
        name: "Wind Load Calculations",
        desc: "Accurate wind load analysis is critical for every solar project. We perform detailed wind load calculations in accordance with applicable design standards to ensure that structures can safely withstand site-specific environmental conditions.",
      },
      {
        name: "Truss Design",
        desc: "Our truss engineering solutions are designed for industrial sheds, warehouses, commercial buildings, and large-span rooftop solar installations. We optimize structural performance while minimizing material usage and construction costs.",
      },
    ],
    color: "from-blue-500 to-indigo-600",
    bg: "bg-blue-50",
    border: "border-blue-200",
    tag: "bg-blue-100 text-blue-700",
  },
  {
    number: "03",
    icon: "📄",
    title: "Engineering Documentation",
    brief: "Complete permit packages, as-builts & technical reports.",
    detail:
      "We produce thorough, accurate engineering documentation that supports every stage of a project — from permit approval through commissioning, operation, and compliance. Our documentation is prepared to the highest professional standards.",
    features: [
      {
        name: "Permit Packages",
        desc: "We prepare complete engineering packages required for permit approvals, including electrical drawings, structural details, calculations, equipment specifications, and supporting documentation that meet local authority requirements.",
      },
      {
        name: "As-Built Drawings",
        desc: "We develop comprehensive as-built documentation reflecting the final installed system, ensuring accurate project records for operation, maintenance, future upgrades, and regulatory compliance.",
      },
      {
        name: "Technical Reports",
        desc: "Our technical reports include engineering calculations, design basis reports, structural analysis, energy simulations, feasibility studies, and other project-specific documentation that supports informed decision-making.",
      },
    ],
    color: "from-emerald-500 to-teal-600",
    bg: "bg-emerald-50",
    border: "border-emerald-200",
    tag: "bg-emerald-100 text-emerald-700",
  },
];

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selected, setSelected] = useState<typeof services[0] | null>(null);

  useEffect(() => {
    document.body.style.overflow = selected ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [selected]);

  return (
    <section id="services" className="relative py-28 px-6">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-50/50 to-transparent" />

      <div className="max-w-7xl mx-auto relative">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xl md:text-2xl uppercase tracking-[0.3em] text-blue-600 font-bold"
          >
            Our Capabilities
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.8 }}
            className="mt-4 text-3xl md:text-4xl lg:text-5xl font-black text-gray-900"
          >
            Complete Engineering{" "}
            <span className="bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent">
              Solutions
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="mt-4 text-gray-500 max-w-2xl mx-auto text-sm md:text-base"
          >
            From structural design to final compliance — we handle every stage of energy
            engineering so you can focus on building and operations.
          </motion.p>
        </div>

        {/* Cards grid */}
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { y: 60, opacity: 0, scale: 0.95 },
                visible: { y: 0, opacity: 1, scale: 1, transition: { duration: 0.6, ease: "easeOut" } },
              }}
              onClick={() => setSelected(service)}
              whileHover={{ y: -6, boxShadow: "0 20px 40px rgba(0,0,0,0.10)" }}
              className={`group relative p-8 rounded-2xl border ${service.border} ${service.bg} cursor-pointer transition-colors duration-300 overflow-hidden`}
            >
              {/* Number watermark */}
              <span className="absolute top-4 right-5 text-6xl font-black text-black/5 select-none leading-none">
                {service.number}
              </span>

              <div className="relative z-10">
                <span className="text-4xl">{service.icon}</span>
                <h3 className="mt-4 text-lg font-bold text-gray-900 group-hover:text-blue-700 transition-colors">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm text-gray-500 leading-relaxed">{service.brief}</p>

                <ul className="mt-5 space-y-2.5">
                  {service.features.map((f, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <span className={`mt-0.5 shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold ${service.tag}`}>
                        ✓
                      </span>
                      <span className="text-xs font-semibold text-gray-800">{f.name}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex items-center gap-2 text-blue-600 text-sm font-semibold">
                  <span>Read more</span>
                  <motion.span
                    animate={{ x: [0, 4, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                  >
                    →
                  </motion.span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Modal overlay */}
      <AnimatePresence>
        {selected && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setSelected(null)}
              className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm"
            />

            {/* Modal panel — bottom sheet on mobile, floating card on desktop */}
            <motion.div
              key="modal"
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              transition={{ type: "spring", stiffness: 320, damping: 32 }}
              className="fixed inset-x-0 bottom-0 md:inset-x-auto md:left-1/2 md:-translate-x-1/2 md:bottom-6 z-50 w-full md:w-[700px] max-h-[90vh] flex flex-col rounded-t-3xl md:rounded-3xl shadow-2xl bg-white overflow-hidden"
            >
              {/* Gradient band */}
              <div className={`h-1.5 w-full bg-gradient-to-r ${selected.color} shrink-0`} />

              {/* Sticky header */}
              <div className="shrink-0 px-7 pt-6 pb-5 md:px-9 border-b border-gray-100">
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <motion.div
                      initial={{ scale: 0.5, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20, delay: 0.08 }}
                      className={`w-13 h-13 w-[52px] h-[52px] rounded-2xl bg-gradient-to-br ${selected.color} flex items-center justify-center text-2xl shadow-md`}
                    >
                      {selected.icon}
                    </motion.div>
                    <div>
                      <motion.p
                        initial={{ opacity: 0, y: 4 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.12 }}
                        className="text-[10px] font-extrabold text-gray-400 uppercase tracking-[0.22em]"
                      >
                        Service {selected.number}
                      </motion.p>
                      <motion.h3
                        initial={{ opacity: 0, y: 4 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.16 }}
                        className="text-xl md:text-2xl font-black text-gray-900 leading-tight"
                      >
                        {selected.title}
                      </motion.h3>
                    </div>
                  </div>
                  <button
                    onClick={() => setSelected(null)}
                    className="shrink-0 w-9 h-9 rounded-full bg-gray-100 hover:bg-red-50 hover:text-red-500 flex items-center justify-center text-gray-400 text-sm font-bold transition-all duration-200"
                  >
                    ✕
                  </button>
                </div>
              </div>

              {/* Scrollable body */}
              <div className="overflow-y-auto flex-1 px-7 py-6 md:px-9 md:py-7 space-y-6">

                {/* Overview */}
                <motion.p
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.18 }}
                  className="text-gray-600 text-sm leading-relaxed"
                >
                  {selected.detail}
                </motion.p>

                {/* Divider */}
                <div className="h-px bg-gray-100" />

                {/* Features */}
                <div>
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.22 }}
                    className="text-[10px] font-extrabold text-gray-400 uppercase tracking-[0.22em] mb-4"
                  >
                    Key Features
                  </motion.p>
                  <ul className="space-y-3">
                    {selected.features.map((f, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -16 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.26 + i * 0.07, type: "spring", stiffness: 280, damping: 24 }}
                        className={`flex items-start gap-3 p-4 rounded-2xl border ${selected.border} ${selected.bg} hover:shadow-sm transition-shadow duration-200`}
                      >
                        <span className={`mt-0.5 shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-[11px] font-black ${selected.tag}`}>
                          {i + 1}
                        </span>
                        <div>
                          <p className="text-sm font-bold text-gray-900">{f.name}</p>
                          <p className="mt-1 text-xs text-gray-500 leading-relaxed">{f.desc}</p>
                        </div>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* CTA */}
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.55 }}
                  className="flex items-center gap-3 pb-1"
                >
                  <a
                    href="#contact"
                    onClick={() => setSelected(null)}
                    className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r ${selected.color} text-white font-bold text-sm shadow-md hover:shadow-lg hover:scale-[1.03] transition-all duration-300`}
                  >
                    Request This Service →
                  </a>
                  <button
                    onClick={() => setSelected(null)}
                    className="px-5 py-3 rounded-xl border border-gray-200 text-gray-500 text-sm font-medium hover:bg-gray-50 transition-colors"
                  >
                    Close
                  </button>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}
