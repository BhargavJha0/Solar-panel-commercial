"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const testimonials = [
  {
    quote:
      "We were juggling three different engineering firms for our substation projects. Aarbitech consolidated everything — structural, process, permitting — under one roof. Project timelines dropped by 40%.",
    name: "Mark Sullivan",
    role: "VP Engineering",
    company: "GridPoint Energy",
    rating: 5,
  },
  {
    quote:
      "Their on-schedule delivery commitment is real. We’ve tested it across 12 projects spanning four states. Every single one delivered on the stamped timeline.",
    name: "Rachel Torres",
    role: "Director of Operations",
    company: "Apex Power Solutions",
    rating: 5,
  },
  {
    quote:
      "Aarbitech’s structural engineering for our 80MW solar farm was exceptional. Foundation designs accounted for site-specific geotechnical conditions we hadn’t even flagged.",
    name: "David Kim",
    role: "Project Manager",
    company: "SunRise Developments",
    rating: 5,
  },
  {
    quote:
      "We operate across six states with different regulatory requirements. Their permitting team handles jurisdiction-specific compliance before we even have to ask.",
    name: "Neil Thompson",
    role: "Director of Engineering",
    company: "National Energy Corp",
    rating: 5,
  },
  {
    quote:
      "The control-room approach to project management means we always know exactly where things stand. Real-time visibility into every engineering deliverable.",
    name: "Sarah Mitchell",
    role: "CEO",
    company: "Meridian Power Group",
    rating: 5,
  },
  {
    quote:
      "We looked at building an in-house engineering team. The cost and expertise gap made Aarbitech the obvious choice. Saved us $500K+ in the first year alone.",
    name: "James Park",
    role: "CFO",
    company: "Pinnacle Energy",
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
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/[0.04] rounded-full blur-[150px]" />
      </div>

      <div className="max-w-6xl mx-auto relative">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm uppercase tracking-[0.3em] text-blue-400 font-medium"
          >
            Testimonials
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.8 }}
            className="mt-4 text-3xl md:text-5xl lg:text-6xl font-bold text-white"
          >
            Trusted by{" "}
            <span className="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
              Industry Leaders
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
                <span className="absolute -top-8 left-1/2 -translate-x-1/2 text-6xl text-blue-500/20 font-serif">
                  &ldquo;
                </span>
                <p className="text-xl md:text-2xl lg:text-3xl text-white/90 leading-relaxed font-light italic">
                  {testimonials[active].quote}
                </p>
              </div>

              {/* Author */}
              <div className="mt-10 flex flex-col items-center gap-2">
                {/* Avatar placeholder */}
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center text-white font-bold text-lg">
                  {testimonials[active].name.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-white">
                    {testimonials[active].name}
                  </p>
                  <p className="text-sm text-gray-400">
                    {testimonials[active].role} •{" "}
                    {testimonials[active].company}
                  </p>
                </div>
                {/* Stars */}
                <div className="flex gap-1 mt-2">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <svg
                      key={i}
                      className="w-4 h-4 text-blue-400"
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
                  : "bg-white/10 hover:bg-white/30"
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
          className="mt-16 pt-12 border-t border-white/5"
        >
          <p className="text-center text-xs text-gray-600 uppercase tracking-widest mb-6">
            Trusted by companies across the USA
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-40">
            {["GridPoint", "Apex Power", "SunRise Dev", "National Energy", "Meridian Power", "Pinnacle"].map(
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
