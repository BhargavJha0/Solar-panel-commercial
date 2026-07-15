"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const testimonials = [
  {
    quote:
      "Aarbitech Energy has been our trusted solar design partner for the past three years. Their technical expertise, quick turnaround times, and deep understanding of EPC requirements have played an important role in the successful execution of our solar projects.",
    name: "Divya Srivastava",
    role: "Director",
    company: "Rinova Solar Power Pvt. Ltd.",
    rating: 5,
  },
  {
    quote:
      "Aarbitech Energy has been an invaluable engineering partner in the successful execution of our solar projects. Their team provided exceptional design support for our 315 kW rooftop ballast solar project and 205 kW rooftop superstructure installation, delivering accurate, optimized, and code-compliant engineering solutions. In addition to project design, Aarbitech also supported us as a technical design consultant and tender reviewer for our Agartala and Kundli solar projects. Their attention to detail, technical expertise, and thorough review process helped us make informed decisions and ensure project feasibility from both engineering and commercial perspectives. We appreciate their professionalism, responsiveness, and commitment to quality. We highly recommend Aarbitech Energy to any EPC company seeking reliable solar design and engineering consultancy services.",
    name: "Mr. Kamra",
    role: "Head of Department",
    company: "DS Group",
    rating: 5,
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="testimonials" className="relative py-28 px-6 overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-100/50 rounded-full blur-[150px]" />
      </div>

      <div className="max-w-6xl mx-auto relative">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xl md:text-2xl uppercase tracking-[0.3em] text-blue-600 font-bold"
          >
            Testimonials
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.8 }}
            className="mt-4 text-xl md:text-2xl lg:text-3xl font-bold text-gray-900"
          >
            Trusted by Our{" "}
            <span className="bg-gradient-to-r from-blue-600 to-blue-600 bg-clip-text text-transparent">
              Clients
            </span>
          </motion.h2>
        </div>

        {/* Main testimonial */}
        <div className="relative min-h-[320px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -40, scale: 0.95 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="text-center max-w-4xl"
            >
              {/* Quote */}
              <div className="relative">
                <span className="absolute -top-8 left-1/2 -translate-x-1/2 text-6xl text-blue-200 font-serif">
                  &ldquo;
                </span>
                <p className="text-lg md:text-xl lg:text-2xl text-gray-700 leading-relaxed font-light italic">
                  {testimonials[active].quote}
                </p>
              </div>

              {/* Author */}
              <div className="mt-10 flex flex-col items-center gap-2">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center text-white font-bold text-lg">
                  {testimonials[active].name.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-gray-900">
                    {testimonials[active].name}
                  </p>
                  <p className="text-sm text-gray-500">
                    {testimonials[active].role} &bull;{" "}
                    {testimonials[active].company}
                  </p>
                </div>
                {/* Stars */}
                <div className="flex gap-1 mt-2">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <svg
                      key={i}
                      className="w-4 h-4 text-blue-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation dots */}
        <div className="flex justify-center gap-3 mt-10">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                i === active
                  ? "bg-blue-500 scale-125"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>

        {/* Client logos strip */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-16 pt-12 border-t border-gray-200"
        >
          <p className="text-center text-xs text-gray-400 uppercase tracking-widest mb-6">
            Trusted by companies across India, USA, Australia &amp; Ireland
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-40">
            {["Rinova Solar Power", "DS Group", "GD Goenka School", "Country Delight", "Indo Nuclear Energy", "Bloom Healthcare"].map(
              (name, i) => (
                <span key={i} className="text-sm md:text-base font-semibold text-gray-400">
                  {name}
                </span>
              )
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
