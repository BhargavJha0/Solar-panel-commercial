"use client";

import { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useModal } from "@/components/providers/ModalContext";

type ConsultationType = "sales" | "info" | null;

interface FormData {
  name: string;
  company: string;
  email: string;
  phone: string;
  projectType: string;
  message: string;
}

const initialForm: FormData = {
  name: "",
  company: "",
  email: "",
  phone: "",
  projectType: "",
  message: "",
};

const inputCls =
  "w-full px-3 py-2 rounded-lg border border-gray-200 bg-gray-50 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-100 transition-all";

export default function ConsultationModal() {
  const { isOpen, closeModal } = useModal();
  const [mounted, setMounted] = useState(false);
  const [consultationType, setConsultationType] =
    useState<ConsultationType>(null);
  const [form, setForm] = useState<FormData>(initialForm);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const overlayRef = useRef<HTMLDivElement>(null);

  // Mount guard for portal (SSR safe)
  useEffect(() => {
    setMounted(true);
  }, []);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      const scrollY = window.scrollY;
      document.body.style.overflow = "hidden";
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = "100%";
    } else {
      const scrollY = document.body.style.top;
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      window.scrollTo(0, parseInt(scrollY || "0") * -1);
    }
    return () => {
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
    };
  }, [isOpen]);

  // Reset state when closed
  useEffect(() => {
    if (!isOpen) {
      setTimeout(() => {
        setConsultationType(null);
        setForm(initialForm);
        setStatus("idle");
        setErrorMsg("");
      }, 300);
    }
  }, [isOpen]);

  // Close on Escape
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
    };
    if (isOpen) window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [isOpen, closeModal]);

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === overlayRef.current) closeModal();
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!consultationType) return;

    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, consultationType }),
      });

      if (res.ok) {
        setStatus("success");
      } else {
        const data = await res.json();
        setErrorMsg(data.error || "Something went wrong. Please try again.");
        setStatus("error");
      }
    } catch {
      setErrorMsg("Network error. Please check your connection and try again.");
      setStatus("error");
    }
  };

  if (!mounted) return null;

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <motion.div
          ref={overlayRef}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={handleOverlayClick}
          className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
        >
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.97 }}
            transition={{ type: "spring", stiffness: 320, damping: 32 }}
            className="relative flex w-full max-w-xl max-h-[calc(100dvh-2rem)] flex-col overflow-hidden rounded-2xl bg-white shadow-2xl"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 bg-gradient-to-r from-blue-700 to-blue-900">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-white/15 flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h2 className="text-base font-bold text-white leading-tight">Request a Consultation</h2>
                  <p className="text-xs text-blue-200">Aarbitech Energy · Reply within 2 business days</p>
                </div>
              </div>
              <button
                onClick={closeModal}
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors text-white"
                aria-label="Close"
              >
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Success */}
            <AnimatePresence>
              {status === "success" && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-14 px-8 text-center"
                >
                  <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mb-3">
                    <svg className="w-7 h-7 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-1">Message Sent!</h3>
                  <p className="text-sm text-gray-500 max-w-xs">
                    Our team will get back to you within{" "}
                    <span className="font-semibold text-blue-700">2 business days</span>.
                  </p>
                  <button
                    onClick={closeModal}
                    className="mt-6 px-7 py-2.5 bg-blue-700 text-white text-sm font-semibold rounded-lg hover:bg-blue-800 transition-colors"
                  >
                    Done
                  </button>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Form */}
            {status !== "success" && (
              <form
                data-lenis-prevent
                onSubmit={handleSubmit}
                className="min-h-0 overflow-y-auto overscroll-contain px-6 py-5 space-y-4"
              >

                {/* Type selector */}
                <div>
                  <p className="text-xs font-semibold text-gray-600 uppercase tracking-wide mb-2">
                    Inquiry Type <span className="text-red-400">*</span>
                  </p>
                  <div className="flex gap-2">
                    {[
                      { key: "sales" as const, emoji: "💼", label: "Sales Inquiry", sub: "Quotes & proposals" },
                      { key: "info" as const, emoji: "💡", label: "General Info", sub: "Services & process" },
                    ].map(({ key, emoji, label, sub }) => (
                      <button
                        key={key}
                        type="button"
                        onClick={() => setConsultationType(key)}
                        className={`flex-1 flex items-center gap-2.5 px-3 py-2.5 rounded-xl border-2 text-left transition-all duration-150 ${
                          consultationType === key
                            ? "border-blue-600 bg-blue-50"
                            : "border-gray-200 hover:border-blue-300 hover:bg-gray-50"
                        }`}
                      >
                        <span className="text-lg leading-none">{emoji}</span>
                        <div>
                          <div className="text-xs font-semibold text-gray-800">{label}</div>
                          <div className="text-[11px] text-gray-400">{sub}</div>
                        </div>
                        {consultationType === key && (
                          <span className="ml-auto w-4 h-4 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                            <svg className="w-2.5 h-2.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                            </svg>
                          </span>
                        )}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Row 1: Name + Company */}
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-medium text-gray-600 mb-1">
                      Full Name <span className="text-red-400">*</span>
                    </label>
                    <input type="text" name="name" required value={form.name} onChange={handleChange}
                      placeholder="John Smith" className={inputCls} />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-600 mb-1">Company</label>
                    <input type="text" name="company" value={form.company} onChange={handleChange}
                      placeholder="Acme Solar Inc." className={inputCls} />
                  </div>
                </div>

                {/* Row 2: Email + Phone */}
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-medium text-gray-600 mb-1">
                      Email <span className="text-red-400">*</span>
                    </label>
                    <input type="email" name="email" required value={form.email} onChange={handleChange}
                      placeholder="you@company.com" className={inputCls} />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-600 mb-1">Phone</label>
                    <input type="tel" name="phone" value={form.phone} onChange={handleChange}
                      placeholder="+91 9310575389" className={inputCls} />
                  </div>
                </div>

                {/* Row 3: Project Type */}
                <div>
                  <label className="block text-xs font-medium text-gray-600 mb-1">Project Type</label>
                  <select name="projectType" value={form.projectType} onChange={handleChange} className={inputCls}>
                    <option value="">Select project type...</option>
                    <option>Residential Solar</option>
                    <option>Commercial Solar</option>
                    <option>Industrial Solar</option>
                    <option>Utility-Scale Solar</option>
                    <option>EV Charging Infrastructure</option>
                    <option>Battery Energy Storage (BESS)</option>
                    <option>Other</option>
                  </select>
                </div>

                {/* Row 4: Message */}
                <div>
                  <label className="block text-xs font-medium text-gray-600 mb-1">
                    Message <span className="text-red-400">*</span>
                  </label>
                  <textarea name="message" required rows={3} value={form.message} onChange={handleChange}
                    placeholder="Tell us about your project — location, capacity, timeline..."
                    className={`${inputCls} resize-none`}
                  />
                </div>

                {/* Error */}
                {status === "error" && errorMsg && (
                  <div className="flex items-center gap-2 p-2.5 bg-red-50 border border-red-200 rounded-lg">
                    <svg className="w-3.5 h-3.5 text-red-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01M12 3a9 9 0 100 18A9 9 0 0012 3z" />
                    </svg>
                    <p className="text-xs text-red-600">{errorMsg}</p>
                  </div>
                )}

                {/* Footer */}
                <div className="flex items-center justify-between pt-1">
                  {consultationType ? (
                    <p className="text-[11px] text-gray-400">
                      Sending to{" "}
                      <span className="text-blue-600 font-medium">
                        {consultationType === "sales" ? "sales@aarbitechenergy.com" : "info@aarbitechenergy.com"}
                      </span>
                    </p>
                  ) : (
                    <p className="text-[11px] text-gray-400"><span className="text-red-400">*</span> Required</p>
                  )}
                  <button
                    type="submit"
                    disabled={status === "loading" || !consultationType}
                    className="px-6 py-2.5 bg-blue-700 text-white text-sm font-semibold rounded-lg hover:bg-blue-800 disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center gap-2 shadow-md shadow-blue-200"
                  >
                    {status === "loading" ? (
                      <>
                        <svg className="w-3.5 h-3.5 animate-spin" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Request
                        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
}
