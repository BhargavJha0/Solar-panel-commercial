"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import projectImg1 from "../../../assets/projects-images/WhatsApp Image 2026-07-03 at 11.18.43.jpeg";
import projectImg2 from "../../../assets/projects-images/WhatsApp Image 2026-07-03 at 11.18.45.jpeg";
import projectImg3 from "../../../assets/projects-images/WhatsApp Image 2026-07-03 at 11.31.26 (1).jpeg";
import projectImg4 from "../../../assets/projects-images/WhatsApp Image 2026-07-03 at 11.31.26.jpeg";
import projectImg5 from "../../../assets/projects-images/WhatsApp Image 2026-07-03 at 11.31.32.jpeg";
import projectImg6 from "../../../assets/projects-images/WhatsApp Image 2026-07-03 at 11.31.35.jpeg";
import projectImg7 from "../../../assets/projects-images/WhatsApp Image 2026-07-03 at 11.31.43.jpeg";
import projectImg8 from "../../../assets/projects-images/WhatsApp Image 2026-07-03 at 11.31.45.jpeg";

const categories = [
  {
    icon: "🏭",
    label: "Commercial & Industrial",
    title: "Commercial & Industrial Projects",
    gradient: "from-blue-500 to-blue-700",
    bg: "bg-blue-50",
    border: "border-blue-200",
    tag: "bg-blue-100 text-blue-700",
    accent: "text-blue-600",
    gallery: [projectImg1, projectImg2, projectImg3, projectImg4],
    projects: [
      { name: "DS Group Headquarters", capacity: "315 kW", projectType: "Commercial Project", location: "Noida Sector 67" },
      { name: "DS Group Flavoured", capacity: "205 kW", projectType: "Commercial Project", location: "Noida, UP" },
      { name: "Country Delight", capacity: "200 kW", projectType: "Commercial Project", location: "Gurugram, Haryana" },
      { name: "Indo Nuclear Energy", capacity: "200 kW", projectType: "Commercial Project", location: "Satna, MP" },
      { name: "Gurind India", capacity: "190 kW", projectType: "Commercial Project", location: "Noida, UP" },
      { name: "Chittagarh Resort", capacity: "160 kW", projectType: "Commercial Project", location: "Rajasthan" },
      { name: "MR Floor Mills", capacity: "150 kW", projectType: "Commercial Project", location: "Noida, UP" },
      { name: "Mira Exim", capacity: "150 kW", projectType: "Commercial Project", location: "Noida, UP" },
      { name: "MK Enterprises", capacity: "100 kW", projectType: "Commercial Project", location: "Noida, UP" },
      { name: "Classic Rubtech Pvt Ltd", capacity: "70 kW", projectType: "Commercial Project", location: "Okhla, Delhi" },
      { name: "SRB Group", capacity: "70 kW", projectType: "Commercial Project", location: "Noida, UP" },
      { name: "Pearl Pressision", capacity: "50 kW", projectType: "Commercial Project", location: "Greater Noida" },
    ],
  },
  {
    icon: "🎓",
    label: "Educational & Medical",
    title: "Educational & Medical Institution Projects",
    gradient: "from-emerald-500 to-teal-600",
    bg: "bg-emerald-50",
    border: "border-emerald-200",
    tag: "bg-emerald-100 text-emerald-700",
    accent: "text-emerald-600",
    gallery: [projectImg5, projectImg6, projectImg7, projectImg8],
    projects: [
      { name: "GD Goenka School", capacity: "450 kW", projectType: "Commercial Project", location: "Model Town, Delhi" },
      { name: "Bloom Healthcare", capacity: "150 kW", projectType: "Commercial Project", location: "Noida, UP" },
      { name: "Accurate College", capacity: "50 kW", projectType: "Commercial Project", location: "Greater Noida" },
      { name: "Dayanand Public School", capacity: "50 kW", projectType: "Commercial Project", location: "Model Town, Delhi" },
      { name: "SR Capital Public School", capacity: "34 kW", projectType: "Commercial Project", location: "Delhi" },
      { name: "Amicare", capacity: "40 kW", projectType: "Commercial Project (Hospital)", location: "Ghaziabad, UP" },
      { name: "Butterfly School", capacity: "30 kW", projectType: "Commercial Project", location: "Nagloyi" },
      { name: "Glorious Educational Society", capacity: "20 kW", projectType: "Commercial Project (Society)", location: "New Delhi" },
      { name: "Aryadeep Public School", capacity: "15 kW", projectType: "Commercial Project", location: "Greater Noida, UP" },
    ],
  },
];

export default function Portfolio() {
  const ref = useRef(null);
  const [activeImageIndexes, setActiveImageIndexes] = useState([0, 0]);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveImageIndexes((prev) =>
        categories.map((cat, index) => (prev[index] + 1) % cat.gallery.length)
      );
    }, 3200);

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="portfolio" className="relative py-28 px-6">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-50/30 to-transparent" />

      <div className="max-w-7xl mx-auto relative">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm uppercase tracking-[0.3em] text-blue-600 font-bold"
          >
            Our Work
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.8 }}
            className="mt-4 text-3xl md:text-5xl lg:text-6xl font-bold text-gray-900"
          >
            Our{" "}
            <span className="bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent">
              Projects
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="mt-4 text-gray-500 max-w-2xl mx-auto text-sm md:text-base"
          >
            Delivering precision engineering across industries — from corporate headquarters to schools and hospitals.
          </motion.p>
        </div>

        {/* Two category cards */}
        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {categories.map((cat, ci) => (
            <motion.div
              key={ci}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: ci * 0.15, duration: 0.7, ease: "easeOut" }}
              className={`rounded-3xl border ${cat.border} bg-white shadow-sm overflow-hidden`}
            >
              {/* Card header */}
              <div className={`bg-gradient-to-br ${cat.gradient} px-7 py-6 relative overflow-hidden`}>
                <div className="absolute -top-6 -right-6 w-32 h-32 bg-white/10 rounded-full" />
                <div className="absolute -bottom-8 -left-4 w-24 h-24 bg-white/10 rounded-full" />
                <div className="relative z-10 flex items-center gap-4">
                  <span className="text-4xl">{cat.icon}</span>
                  <div>
                    <p className="text-[10px] font-extrabold text-white/70 uppercase tracking-[0.2em]">{cat.label}</p>
                    <h3 className="text-lg md:text-xl font-black text-white leading-tight">{cat.title}</h3>
                  </div>
                </div>
                <div className={`mt-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 text-white text-xs font-bold`}>
                  {cat.projects.length} Projects
                </div>
              </div>

              {/* Rotating project gallery */}
              <div className="px-7 pt-6">
                <div className="relative aspect-[16/9] rounded-2xl overflow-hidden border border-gray-200 bg-gray-100">
                  <motion.div
                    key={`${ci}-${activeImageIndexes[ci]}`}
                    initial={{ opacity: 0.15, scale: 1.03 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.65, ease: "easeOut" }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={cat.gallery[activeImageIndexes[ci]]}
                      alt={`${cat.title} project ${activeImageIndexes[ci] + 1}`}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover"
                      priority={ci === 0}
                    />
                  </motion.div>

                  <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/45 to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between gap-2">
                    <span className="text-white text-xs font-semibold truncate">
                      {cat.projects[activeImageIndexes[ci] % cat.projects.length].name}
                    </span>
                    <span className="shrink-0 rounded-full bg-white/85 px-2 py-1 text-[11px] font-bold text-gray-900">
                      {activeImageIndexes[ci] + 1}/{cat.gallery.length}
                    </span>
                  </div>
                </div>

                <div className="mt-3 flex items-center justify-center gap-2">
                  {cat.gallery.map((_, gi) => (
                    <button
                      key={gi}
                      type="button"
                      onClick={() =>
                        setActiveImageIndexes((prev) => {
                          const next = [...prev];
                          next[ci] = gi;
                          return next;
                        })
                      }
                      className={`h-2.5 rounded-full transition-all duration-300 ${
                        gi === activeImageIndexes[ci]
                          ? `${cat.accent.replace("text-", "bg-")} w-7`
                          : "bg-gray-300 w-2.5 hover:bg-gray-400"
                      }`}
                      aria-label={`Show image ${gi + 1} for ${cat.title}`}
                    />
                  ))}
                </div>
              </div>

              {/* Project list */}
              <div className="px-7 py-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {cat.projects.map((p, pi) => (
                    <motion.div
                      key={pi}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: ci * 0.1 + pi * 0.05 }}
                      tabIndex={0}
                      aria-label={`${p.name}: ${p.capacity}, ${p.projectType}, ${p.location}`}
                      className={`group relative flex h-[42px] items-center justify-between gap-2 overflow-hidden rounded-xl border px-3.5 py-2.5 focus:outline-none focus:ring-2 focus:ring-offset-2 ${cat.bg} ${cat.border} ${cat.accent.replace("text-", "focus:ring-")}`}
                    >
                      <div className="flex min-w-0 items-center gap-2 transition-opacity duration-200 group-hover:opacity-0 group-focus:opacity-0">
                        <span className={`shrink-0 w-1.5 h-1.5 rounded-full ${cat.accent.replace("text-", "bg-")}`} />
                        <span className="text-xs font-semibold text-gray-800 truncate">{p.name}</span>
                      </div>
                      <span className={`shrink-0 text-xs font-black transition-opacity duration-200 group-hover:opacity-0 group-focus:opacity-0 ${cat.accent}`}>{p.capacity}</span>
                      <div className="pointer-events-none absolute inset-0 flex flex-col justify-center px-3.5 opacity-0 transition-opacity duration-200 group-hover:opacity-100 group-focus:opacity-100">
                        <p className="truncate text-xs font-black text-gray-900">{p.name} <span className={cat.accent}>{p.capacity}</span></p>
                        <p className="truncate text-[10px] font-semibold text-gray-600">{p.projectType} · {p.location}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
