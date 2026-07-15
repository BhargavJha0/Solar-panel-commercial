"use client";

import { motion } from "framer-motion";

const reasons = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Global Experience",
    description: "Aarbitech Energy has successfully delivered solar design and engineering solutions for projects across India, the USA, and Australia. Our team is well-versed in international standards, local regulations, and utility requirements, enabling us to provide designs that are both technically sound and fully compliant.",
    metric: "3+",
    metricLabel: "Countries",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "Fast Turnaround",
    description: "We understand that timely project delivery is critical in the solar industry. Our streamlined design process, experienced engineering team, and efficient project management allow us to deliver accurate engineering packages within committed timelines.",
    metric: "24–48h",
    metricLabel: "Delivery",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    title: "Dedicated Team",
    description: "Our team consists of experienced solar design engineers, structural engineers, and technical consultants committed to delivering excellence. Every project is assigned dedicated professionals who work closely with clients, ensuring clear communication and technical accuracy.",
    metric: "20+",
    metricLabel: "Experts",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Cost Effective",
    description: "We focus on optimizing every design to reduce material costs, improve installation efficiency, and maximize project returns. By combining engineering expertise with practical field knowledge, we help clients lower project costs while maintaining the highest quality standards.",
    metric: "500+",
    metricLabel: "Clients Saved",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: "Quality Assurance",
    description: "Every engineering package undergoes a comprehensive quality review before delivery. Our rigorous quality control process ensures accuracy, compliance with industry standards, and error-free documentation, giving our clients complete confidence in every design we produce.",
    metric: "1500+",
    metricLabel: "Projects",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
    title: "Code Compliance",
    description: "Our engineering solutions are designed in accordance with applicable national and international standards, including IS Codes, AS/NZS Standards, NEC, ASCE, and other local utility requirements. This ensures seamless approvals, safer installations, and long-term project reliability.",
    metric: "IS·NEC",
    metricLabel: "Standards",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: "EPC Industry Expertise",
    description: "With years of experience working alongside Solar EPC companies, we understand the practical challenges of project execution. Our designs are developed with constructability, installation efficiency, and cost optimization in mind, making us a reliable engineering partner worldwide.",
    metric: "2023",
    metricLabel: "Est.",
  },
];

export default function WhyUs() {
  return (
    <section className="relative py-28 px-6 overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-100/50 rounded-full blur-[150px] -translate-y-1/2 translate-x-1/2" />

      <div className="max-w-7xl mx-auto relative">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-16 gap-6">
          <div>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-xl md:text-2xl uppercase tracking-[0.3em] text-blue-600 font-bold"
            >
              Why Choose Us
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.8 }}
              className="mt-4 text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 max-w-2xl"
            >
              Why Partner with{" "}
              <span className="bg-gradient-to-r from-blue-600 to-blue-600 bg-clip-text text-transparent">
                Aarbitech Energy
              </span>
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-500 max-w-md text-sm"
          >
            From global expertise to fast turnaround — here is why 500+ clients
            across India, USA, Australia and Ireland trust Aarbitech Energy.
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {reasons.map((reason, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.6 }}
              className="group relative p-8 bg-white rounded-2xl border border-gray-200 hover:border-blue-300 hover:bg-blue-50/50 transition-all duration-500 shadow-sm"
            >
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="text-blue-600 group-hover:text-blue-700 transition-colors">
                {reason.icon}
              </div>

              <h3 className="mt-5 text-lg font-bold text-gray-900">
                {reason.title}
              </h3>
              <p className="mt-3 text-sm text-gray-500 leading-relaxed">
                {reason.description}
              </p>

              <div className="mt-6 flex items-baseline gap-2">
                <span className="text-2xl font-bold text-blue-600">
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
