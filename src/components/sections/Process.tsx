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
    title: "Project Scooping",
    description:
      "Send us your project details, site information, and design requirements. Our team reviews your needs and understands the project scope before getting started.",
    icon: "📤",
  },
  {
    number: "02",
    title: "Engineering & Design",
    description:
      "Our experienced engineers create optimized solar layouts, electrical designs, structural calculations, and energy simulations using industry-leading software to ensure maximum system performance.",
    icon: "✏️",
  },
  {
    number: "03",
    title: "Compliance & Documentation",
    description:
      "We prepare complete permit-ready drawing packages that comply with local authority, utility, and engineering standards, helping reduce approval delays.",
    icon: "📋",
  },
  {
    number: "04",
    title: "Quality Check",
    description:
      "Every drawing and calculation is thoroughly reviewed by our engineering team to ensure accuracy, safety, and compliance before delivery.",
    icon: "🔍",
  },
  {
    number: "05",
    title: "Delivery",
    description:
      "We deliver your complete engineering package within the agreed timeline, ready for permit submission or construction.",
    icon: "🚀",
  },
  {
    number: "06",
    title: "Ongoing Support",
    description:
      "Need revisions or technical assistance? Our team remains available to support you throughout the approval and installation process until your project is successfully completed.",
    icon: "🤝",
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
            className="text-xl md:text-2xl uppercase tracking-[0.3em] text-blue-600 font-bold"
          >
            Our Approach
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.8 }}
            className="mt-4 text-xl md:text-2xl lg:text-3xl font-bold text-gray-900"
          >
            From Your Idea to a{" "}
            <span className="bg-gradient-to-r from-blue-600 to-blue-600 bg-clip-text text-transparent">
              Successful Solar Project
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-gray-500 max-w-2xl mx-auto text-sm"
          >
            At Aarbitech Energy, we make the engineering process simple, efficient, and hassle-free. We work closely with EPC companies, solar installers, and developers to deliver accurate designs, faster approvals, and reliable engineering support at every stage of the project.
          </motion.p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Center line */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px hidden md:block">
            <div className="timeline-line w-full h-full bg-gradient-to-b from-blue-500 via-blue-600 to-blue-500/20" />
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
                    className={`p-8 rounded-2xl border border-gray-200 bg-white hover:border-blue-300 transition-all duration-500 shadow-sm ${
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
                <div className="relative z-10 w-14 h-14 rounded-full bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center shadow-lg shadow-blue-500/30 shrink-0">
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
