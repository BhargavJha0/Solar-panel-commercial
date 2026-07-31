"use client";

import { motion } from "framer-motion";

const faqs = [
  {
    q: "Do you actually submit the application, or just prepare the documents?",
    a: "We submit it. Once the plan set and application package are ready, we file directly with the AHJ through SolarAPP+, their online portal, or paper/mail-in - whichever they require - and track it from there.",
  },
  {
    q: "How do you know which AHJ is correct for a given address?",
    a: "We cross-reference the site against city, county, and fire-district boundaries before submission. Jurisdictional lines do not always follow ZIP codes or obvious city limits, which is one of the more common sources of misdirected applications.",
  },
  {
    q: "What happens if the AHJ requests corrections?",
    a: "We handle the response. Comments are reviewed, the plan set or application is revised, and it is resubmitted - you do not have to interpret reviewer notes or manage the back-and-forth yourself.",
  },
  {
    q: "Do you cover commercial and utility-scale submissions, or only residential?",
    a: "Both. Commercial and utility-scale projects generally route through plan-check and fire-review processes rather than instant-issue programs, and we handle that submission path the same way - application, tracking, and corrections included.",
  },
  {
    q: "Who pays the AHJ's permit fee?",
    a: "The AHJ's fee itself is a pass-through cost paid on the project's behalf as part of submission - we calculate the correct fee type and coordinate payment so intake is not held up.",
  },
  {
    q: "What is included in a standard PV permit package?",
    a: "A standard PV permit package includes a site layout, electrical one-line and three-line diagrams, structural mounting details, and manufacturer spec sheets for panels, inverters, and racking. Some jurisdictions require additional documents such as rapid shutdown plans, battery integration details, or PE stamps.",
  },
  {
    q: "What does Aarbitech actually provide?",
    a: "We produce the engineering drawing package required by both the SGIP Program Administrator and your local utility for permit and interconnection approval. This includes single-line diagrams, site plans, load calculations, and full permit-ready CAD packages - typically delivered within 24 business hours.",
  },
  {
    q: "Which utilities do you work with?",
    a: "We prepare drawings for all major California utilities - PG&E, Southern California Edison (SCE), San Diego Gas & Electric (SDG&E), Los Angeles Department of Water & Power (LADWP), and Sacramento Municipal Utility District (SMUD). Our team knows each utility's specific formatting and technical requirements.",
  },
  {
    q: "Do all solar projects require a PE stamp?",
    a: "Not all projects require engineering stamps. Requirements vary by AHJ, system size, roof type, and local building codes.",
  },
  {
    q: "How quickly can engineering reviews be completed?",
    a: "Typical review timelines range from 1-2 business days depending on project complexity and jurisdiction requirements.",
  },
  {
    q: "Can you assist with AHJ corrections?",
    a: "Absolutely. Our team provides revision support and engineering responses to AHJ comments.",
  },
  {
    q: "Do you support battery storage and EV charging projects?",
    a: "Yes. We provide engineering review and stamping support for solar-plus-storage and EV charging infrastructure projects.",
  },
  {
    q: "What documents are required for engineering review?",
    a: "Typically, permit plans, site information, equipment specifications, structural details, and project photos are required.",
  },
  {
    q: "What types of solar projects do you support?",
    a: "We support residential, commercial, industrial, ground-mount, carport, battery storage, and utility-scale solar projects.",
  },
  {
    q: "Which U.S. states and jurisdictions does Aarbitech support?",
    a: "Aarbitech supports solar permitting projects across all 50 U.S. states and maintains an extensive database of AHJ-specific requirements to streamline approvals.",
  },
  {
    q: "Can Aarbitech handle AHJ corrections and permit revisions?",
    a: "Absolutely. Our team provides quick turnaround support for AHJ comments, redlines, and permit revisions to help expedite project approvals.",
  },
  {
    q: "What makes your solar permit plan services USA different?",
    a: "Our solar permit plan services USA are not just fast but quite detailed too. Since we already have PE partners in all 50 states, we can deliver PE stamped solar permit drawings and solar plans for permit very quickly. That means less back and forth with AHJ and smoother permit approval overall.",
  },
  {
    q: "What CAD drafting services for solar installers do you provide?",
    a: "We cover complete CAD drafting services for solar installers, including engineering drawing services, solar power system design, and all kinds of as-built drawings. Our crew also makes interconnection drawings and structural design packages, helping installers wrap up their paperwork and permits quicker.",
  },
  {
    q: "How does solar structural engineering design outsourcing help?",
    a: "When you go for our solar structural engineering design outsourcing, you save both time and money. Our engineers already know structural design for solar mounting systems like the back of their hand. We manage code checks, quality checks, and drawings so your team do not have to do the same thing twice.",
  },
  {
    q: "How corrections and changes are addressed?",
    a: "At Aarbitech, we ensure a smooth correction and change process for Solar PV Permit Designs. Any AHJ or utility corrections can be submitted through our Portal, where our team promptly reviews and updates the design - typically within 24 hours. Minor revisions related to the original design scope are covered at no additional cost within 60 days of delivery, while scope changes such as layout or equipment modifications may incur additional charges. All updates and communications are tracked in the portal for complete transparency and version control.",
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="relative py-28 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm uppercase tracking-[0.3em] text-blue-600 font-medium"
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
            <span className="bg-gradient-to-r from-blue-600 to-blue-600 bg-clip-text text-transparent">
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
              <summary className="flex items-center justify-between p-6 cursor-pointer list-none hover:bg-blue-50/50 transition-colors">
                <span className="text-base font-medium text-gray-900 pr-4">
                  {faq.q}
                </span>
                <span className="shrink-0 w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-blue-600 group-open:rotate-45 transition-transform duration-300">
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
