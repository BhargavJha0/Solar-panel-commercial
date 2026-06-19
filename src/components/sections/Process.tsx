"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    number: "01",
    title: "Project Scoping",
    description:
      "Send us your site data, timeline, and engineering requirements. We assess scope and confirm capability fit within two business days.",
    icon: "📤",
  },
  {
    number: "02",
    title: "Engineering & Design",
    description:
      "Our licensed engineers develop structural, process, and electrical designs with full code compliance and stamped drawings.",
    icon: "✏️",
  },
  {
    number: "03",
    title: "Review & QC",
    description:
      "Multi-layer quality verification against jurisdiction requirements, safety codes, and industry standards before delivery.",
    icon: "🔍",
  },
  {
    number: "04",
    title: "Permitting & Submittals",
    description:
      "Stamped drawing packages submitted to regulatory bodies. We handle revisions and follow-up through full approval.",
    icon: "📋",
  },
  {
    number: "05",
    title: "Construction Support",
    description:
      "Ongoing engineering support during construction with field coordination, RFIs, and as-built documentation.",
    icon: "✅",
  },
];

export default function Process() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // Animate timeline line
      gsap.from(".timeline-line", {
        scaleY: 0,
        transformOrigin: "top",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 60%",
          end: "bottom 80%",
          scrub: 1,
        },
      });

      // Animate each step
      gsap.utils.toArray<HTMLElement>(".process-step").forEach((step, i) => {
        gsap.from(step, {
          x: i % 2 === 0 ? -60 : 60,
          opacity: 0,
          scrollTrigger: {
            trigger: step,
            start: "top 80%",
            end: "top 60%",
            scrub: 1,
          },
        });
      });
    },
    { scope: containerRef }
  );

  return (
    <section id="process" className="relative py-28 px-6" ref={containerRef}>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm uppercase tracking-[0.3em] text-purple-600 font-medium"
          >
            Our Approach
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.8 }}
            className="mt-4 text-3xl md:text-5xl lg:text-6xl font-bold text-gray-900"
          >
            From Scope to{" "}
            <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
              Completion
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-gray-500 max-w-2xl mx-auto text-lg"
          >
            A streamlined 5-step process that takes your energy project from
            initial scope to construction support — on time, every time.
          </motion.p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Center line */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px hidden md:block">
            <div className="timeline-line w-full h-full bg-gradient-to-b from-purple-500 via-indigo-600 to-purple-500/20" />
          </div>

          {/* Steps */}
          <div className="space-y-16 md:space-y-24">
            {steps.map((step, i) => (
              <div
                key={i}
                className={`process-step flex flex-col md:flex-row items-center gap-8 ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Content */}
                <div
                  className={`flex-1 ${
                    i % 2 === 0 ? "md:text-right" : "md:text-left"
                  }`}
                >
                  <div
                    className={`p-8 rounded-2xl border border-gray-200 bg-white hover:border-purple-300 transition-all duration-500 shadow-sm ${
                      i % 2 === 0 ? "md:mr-8" : "md:ml-8"
                    }`}
                  >
                    <span className="text-3xl">{step.icon}</span>
                    <h3 className="mt-3 text-xl font-bold text-gray-900">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-gray-500 text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Center dot */}
                <div className="relative z-10 w-14 h-14 rounded-full bg-gradient-to-br from-purple-600 to-indigo-700 flex items-center justify-center shadow-lg shadow-purple-500/30 shrink-0">
                  <span className="text-white font-bold text-sm">
                    {step.number}
                  </span>
                </div>

                {/* Spacer */}
                <div className="flex-1 hidden md:block" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
