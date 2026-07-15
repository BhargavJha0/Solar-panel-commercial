"use client";

import { useRef } from "react";
import Image from "next/image";
import bgImage from "../../../assets/head-background.jpg";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { motion } from "framer-motion";
import Link from "next/link";

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
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32"
    >
      {/* Background Image */}
      <Image
        src={bgImage}
        alt="Hero background"
        fill
        priority
        className="object-cover object-center"
        style={{ zIndex: 0 }}
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" style={{ zIndex: 1 }} />

      {/* Background */}
      <div className="absolute inset-0" style={{ zIndex: 2 }}>
        <div className="float-element absolute top-20 left-10 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px]" />
        <div className="float-element absolute bottom-20 right-10 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[100px]" />
        <div className="float-element absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-400/5 rounded-full blur-[150px]" />
      </div>

      {/* Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:80px_80px]" style={{ zIndex: 3 }} />

      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto" style={{ zIndex: 10 }}>
        {/* Headline */}
        <h1
          ref={titleRef}
          className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold text-white tracking-tight leading-[1.1]"
        >
          Engineering Excellence for{" "}
          <span className="bg-gradient-to-r from-blue-300 via-blue-200 to-blue-300 bg-clip-text text-transparent">
            Solar Projects
          </span>
          <br />
          <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white/70 font-medium">
            Worldwide.
          </span>
        </h1>

        {/* Subtitle */}
        <p
          ref={subtitleRef}
          className="mt-8 text-base md:text-xl text-white/70 max-w-3xl mx-auto leading-relaxed"
        >
          Aarbitech Energy provides solar design, structural engineering, permit
          packages, and consultancy services for EPC companies across{" "}
          <span className="text-white font-semibold">India, USA, Australia</span>{" "}
          and{" "}
          <span className="text-white font-semibold">Ireland</span>.
        </p>

        {/* CTA */}
        <div ref={ctaRef} className="mt-10 flex gap-4 justify-center flex-wrap">
          <Link href="/contact">
            <motion.span
              whileHover={{
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(91,47,201,0.3)",
              }}
              whileTap={{ scale: 0.95 }}
              className="inline-block px-8 py-4 bg-white text-blue-700 font-semibold rounded-lg text-lg shadow-lg shadow-white/20 hover:bg-gray-100 transition-all"
            >
              Request a Consultation →
            </motion.span>
          </Link>
          <motion.a
            href="#services"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 border border-white/30 text-white font-semibold rounded-lg text-lg hover:border-white/60 hover:bg-white/10 transition-all"
          >
            Download Capability Statement
          </motion.a>
        </div>

        {/* Stats */}
        <div
          ref={statsRef}
          className="mt-16 grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-8 max-w-5xl mx-auto"
        >
          {[
            { value: "10+", label: "MW Designed" },
            { value: "1500+", label: "Projects Delivered" },
            { value: "500+", label: "Satisfied Customers" },
            { value: "2023", label: "Established" },
            { value: "20+", label: "Core Team Members" },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-white">
                {stat.value}
              </div>
              <div className="text-xs md:text-sm text-white/60 mt-1">
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
          className="w-px h-10 bg-gradient-to-b from-blue-500/50 to-transparent"
        />
      </div>
    </section>
  );
}
