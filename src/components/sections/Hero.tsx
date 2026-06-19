"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { motion } from "framer-motion";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

      tl.from(badgeRef.current, {
        y: 30,
        opacity: 0,
        duration: 0.8,
      })
        .from(
          titleRef.current,
          {
            y: 100,
            opacity: 0,
            duration: 1.2,
            skewY: 4,
          },
          "-=0.4"
        )
        .from(
          subtitleRef.current,
          {
            y: 50,
            opacity: 0,
            duration: 0.9,
          },
          "-=0.6"
        )
        .from(
          ctaRef.current,
          {
            y: 30,
            opacity: 0,
            duration: 0.7,
            scale: 0.95,
          },
          "-=0.4"
        )
        .from(
          statsRef.current,
          {
            y: 40,
            opacity: 0,
            duration: 0.8,
          },
          "-=0.3"
        );

      // Floating orbs
      gsap.utils.toArray<HTMLElement>(".float-element").forEach((el, i) => {
        gsap.to(el, {
          y: "random(-30, 30)",
          x: "random(-15, 15)",
          rotation: "random(-5, 5)",
          duration: "random(4, 7)",
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: i * 0.3,
        });
      });
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <div className="float-element absolute top-20 left-10 w-[500px] h-[500px] bg-purple-600/8 rounded-full blur-[120px]" />
        <div className="float-element absolute bottom-20 right-10 w-[400px] h-[400px] bg-indigo-600/8 rounded-full blur-[100px]" />
        <div className="float-element absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-[150px]" />
      </div>

      {/* Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(91,47,201,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(91,47,201,0.02)_1px,transparent_1px)] bg-[size:80px_80px]" />

      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
        {/* Badge */}
        <div ref={badgeRef}>
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-purple-500/20 bg-purple-500/5 mb-8"
            whileHover={{ scale: 1.05 }}
          >
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-sm text-purple-200/80">
              All Systems Engineered — Monitoring Work Across 18 States
            </span>
          </motion.div>
        </div>

        {/* Headline */}
        <h1
          ref={titleRef}
          className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold text-white tracking-tight leading-[1.1]"
        >
          Engineering Built to Keep{" "}
          <span className="bg-gradient-to-r from-purple-400 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
            Energy Infrastructure
          </span>
          <br />
          <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-gray-300 font-medium">
            Online.
          </span>
        </h1>

        {/* Subtitle */}
        <p
          ref={subtitleRef}
          className="mt-8 text-base md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed"
        >
          Aarbitech Energy delivers structural, process, and compliance
          engineering for utilities, EPCs, and developers — designed for{" "}
          <span className="text-purple-400 font-semibold">uptime</span>, not just
          approval. Projects delivered on{" "}
          <span className="text-purple-400 font-semibold">stamped schedule</span>.
        </p>

        {/* CTA */}
        <div ref={ctaRef} className="mt-10 flex gap-4 justify-center flex-wrap">
          <motion.a
            href="#contact"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 20px 40px rgba(91,47,201,0.3)",
            }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-purple-700 text-white font-semibold rounded-lg text-lg shadow-lg shadow-purple-500/20 hover:bg-purple-800 transition-all"
          >
            Request a Consultation →
          </motion.a>
          <motion.a
            href="#services"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 border border-white/[0.08] text-white font-semibold rounded-lg text-lg hover:border-purple-500/50 hover:bg-purple-500/5 transition-all"
          >
            Download Capability Statement
          </motion.a>
        </div>

        {/* Stats */}
        <div
          ref={statsRef}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-12 max-w-4xl mx-auto"
        >
          {[
            { value: "240+", label: "Projects Engineered" },
            { value: "18", label: "States Active" },
            { value: "100%", label: "On-Schedule Delivery" },
            { value: "96%", label: "Project Readiness" },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-purple-400">
                {stat.value}
              </div>
              <div className="text-xs md:text-sm text-gray-500 mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-xs text-gray-600 uppercase tracking-widest">
          Scroll to explore
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-px h-10 bg-gradient-to-b from-purple-500/50 to-transparent"
        />
      </div>
    </section>
  );
}
