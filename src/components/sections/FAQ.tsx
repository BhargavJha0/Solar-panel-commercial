"use client";

import { motion } from "framer-motion";

const faqs = [
  {
    q: "What engineering disciplines do you cover?",
    a: "We provide structural, civil, process, mechanical, and electrical engineering for energy infrastructure. This includes foundation design, support structures, P&IDs, equipment sizing, and power systems.",
  },
  {
    q: "How does your compliance process work?",
    a: "Every deliverable is verified against state, federal, and industry-specific standards. Our multi-layer QC process ensures stamped drawings pass regulatory review on first submission across all active jurisdictions.",
  },
  {
    q: "What states do you operate in?",
    a: "We currently have active engineering work across 18 U.S. states with licensed Professional Engineers in each jurisdiction. We expand coverage based on client project needs.",
  },
  {
    q: "Is there a minimum project size?",
    a: "No minimum project size. We support everything from single-site assessments to multi-state utility-scale programs. Our engineering approach scales to fit your project requirements.",
  },
  {
    q: "What deliverable formats do you provide?",
    a: "We deliver in AutoCAD (.dwg), PDF, and Revit formats as standard. Stamped drawing packages include all required documentation per jurisdiction for direct regulatory submission.",
  },
  {
    q: "How do I get started with a project?",
    a: "Send us your site data and project timeline. We'll assess scope, confirm capability fit, and respond with a detailed proposal within two business days.",
  },
];

export default function FAQ() {
  return (
    <section className="relative py-28 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm uppercase tracking-[0.3em] text-purple-600 font-medium"
          >
            FAQ
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.8 }}
            className="mt-4 text-3xl md:text-5xl font-bold text-gray-900"
          >
            Common{" "}
            <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
              Questions
            </span>
          </motion.h2>
        </div>

        {/* FAQ items */}
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <motion.details
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="group rounded-2xl border border-gray-200 bg-white overflow-hidden shadow-sm"
            >
              <summary className="flex items-center justify-between p-6 cursor-pointer list-none hover:bg-purple-50/50 transition-colors">
                <span className="text-base font-medium text-gray-900 pr-4">
                  {faq.q}
                </span>
                <span className="shrink-0 w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-purple-600 group-open:rotate-45 transition-transform duration-300">
                  +
                </span>
              </summary>
              <div className="px-6 pb-6 text-sm text-gray-500 leading-relaxed">
                {faq.a}
              </div>
            </motion.details>
          ))}
        </div>
      </div>
    </section>
  );
}
