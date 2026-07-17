"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const clientTypes = [
  {
    icon: "🏗️",
    title: "Solar EPC Companies",
    description: "Complete engineering support for residential, commercial, and utility-scale solar projects. We help EPCs streamline design, permitting, and execution with accurate, permit-ready engineering packages.",
  },
  {
    icon: "🔧",
    title: "Solar Installers",
    description: "From system layouts to permit documentation, we provide installers with the technical support needed to simplify installations and reduce project delays.",
  },
  {
    icon: "📈",
    title: "Solar Developers",
    description: "We assist developers with feasibility studies, energy yield analysis, conceptual designs, permit plan sets, and engineering documentation to move projects from planning to construction.",
  },
  {
    icon: "🏢",
    title: "Commercial & Industrial Businesses",
    description: "Helping businesses transition to clean energy through customized solar system designs, structural analysis, and optimized energy solutions that maximize long-term savings.",
  },
  {
    icon: "💡",
    title: "Renewable Energy Consultants",
    description: "Partner with us for specialized engineering services, including solar PV design, battery energy storage system (BESS) design, structural calculations, and utility compliance support.",
  },
  {
    icon: "⚡",
    title: "EV Charging Infrastructure Providers",
    description: "We deliver engineering and design solutions for EV charging station projects, including site layouts, electrical design, load analysis, and permit-ready documentation.",
  },
];

export default function Clients() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // Marquee animation
      const marquee = document.querySelector(".marquee-track");
      if (marquee) {
        gsap.to(marquee, {
          xPercent: -50,
          ease: "none",
          duration: 20,
          repeat: -1,
        });
      }
    },
    { scope: containerRef }
  );

  return (
    <section className="relative py-28 px-6" ref={containerRef}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xl md:text-2xl uppercase tracking-[0.3em] text-blue-600 font-bold"
          >
            Who We Serve
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.8 }}
            className="mt-4 text-xl md:text-2xl lg:text-3xl font-bold text-gray-900"
          >
            Engineering Solutions for Every Stage of{" "}
            <span className="bg-gradient-to-r from-blue-600 to-blue-600 bg-clip-text text-transparent">
              Your Solar Business
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-gray-500 max-w-2xl mx-auto text-sm"
          >
            Whether you&apos;re designing a single residential system or managing a portfolio of commercial solar projects, Aarbitech Energy provides reliable engineering support that helps you deliver projects faster, with confidence and compliance.
          </motion.p>
        </div>

        {/* Client types grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {clientTypes.map((client, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="group p-6 rounded-2xl border border-gray-200 bg-white hover:border-blue-300 hover:bg-blue-50/50 transition-all duration-400 shadow-sm"
            >
              <span className="text-3xl">{client.icon}</span>
              <h3 className="mt-3 text-base font-semibold text-gray-900 group-hover:text-blue-700 transition-colors">
                {client.title}
              </h3>
              <p className="mt-2 text-sm text-gray-500">
                {client.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Client logos marquee */}
        <div className="mt-20 overflow-hidden">
          <p className="text-center text-xs text-gray-600 uppercase tracking-widest mb-8">
            Trusted by our clients
          </p>
          <div className="relative">
            {/* Fade edges */}
            <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent z-10" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent z-10" />
            <div className="marquee-track flex items-center gap-12 whitespace-nowrap">
              {[
                "24 Secure.jpeg",
                "Accurate collage.png",
                "AKS IT.jpeg",
                "Ami care.jpeg",
                "APS Group.jpeg",
                "Arya deeep public school.jpeg",
                "Chetak logistics.png",
                "Country delight.png",
                "DAR Group.jpeg",
                "Dayanand Publoc School.jpeg",
                "DS Group.jpeg",
                "FCS.jpeg",
                "GD Goenka.jpeg",
                "gLORIOUS PUBLIC SCHOOL.jpeg",
                "Gurind India.jpeg",
                "HArcomp.jpeg",
                "Indo Muclear energy.jpeg",
                "Mira exim.jpeg",
                "Moglix.png",
                "MS sr sec pub school.jpeg",
                "Pearl precision products pvt ltd.jpeg",
                "Rinova solar.jpeg",
                "SR Capital.png",
                "SRB Group.png",
                // duplicate for seamless loop
                "24 Secure.jpeg",
                "Accurate collage.png",
                "AKS IT.jpeg",
                "Ami care.jpeg",
                "APS Group.jpeg",
                "Arya deeep public school.jpeg",
                "Chetak logistics.png",
                "Country delight.png",
                "DAR Group.jpeg",
                "Dayanand Publoc School.jpeg",
                "DS Group.jpeg",
                "FCS.jpeg",
                "GD Goenka.jpeg",
                "gLORIOUS PUBLIC SCHOOL.jpeg",
                "Gurind India.jpeg",
                "HArcomp.jpeg",
                "Indo Muclear energy.jpeg",
                "Mira exim.jpeg",
                "Moglix.png",
                "MS sr sec pub school.jpeg",
                "Pearl precision products pvt ltd.jpeg",
                "Rinova solar.jpeg",
                "SR Capital.png",
                "SRB Group.png",
              ].map((logo, i) => (
                <div
                  key={i}
                  className="flex-shrink-0 flex items-center justify-center h-16 w-36 bg-white rounded-xl border border-gray-100 shadow-sm px-3"
                >
                  <Image
                    src={`/clients/${encodeURIComponent(logo)}`}
                    alt={logo.replace(/\.(jpeg|png)$/i, "")}
                    width={120}
                    height={56}
                    className="h-12 w-auto object-contain"
                    unoptimized
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
