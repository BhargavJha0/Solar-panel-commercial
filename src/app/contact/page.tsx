"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

interface FormData {
  firstName: string;
  lastName: string;
  company: string;
  email: string;
  message: string;
}

const initialForm: FormData = {
  firstName: "",
  lastName: "",
  company: "",
  email: "",
  message: "",
};

const inputCls =
  "w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 placeholder-gray-400 outline-none transition-all focus:border-blue-500 focus:ring-2 focus:ring-blue-100";

export default function ContactPage() {
  const [form, setForm] = useState<FormData>(initialForm);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const fullName = `${form.firstName} ${form.lastName}`.trim();
    if (!fullName || !form.company || !form.email || !form.message) {
      setErrorMsg("Please fill all required fields.");
      setStatus("error");
      return;
    }

    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: fullName,
          company: form.company,
          email: form.email,
          phone: "",
          projectType: "",
          message: form.message,
          consultationType: "sales",
        }),
      });

      if (res.ok) {
        setStatus("success");
      } else {
        const data = await res.json();
        setErrorMsg(data.error || "Something went wrong. Please try again.");
        setStatus("error");
      }
    } catch {
      setErrorMsg("Network error. Please try again.");
      setStatus("error");
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-100 px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-20 -left-20 h-72 w-72 rounded-full bg-blue-200/40 blur-[90px]" />
        <div className="absolute -bottom-20 right-0 h-72 w-72 rounded-full bg-sky-200/40 blur-[90px]" />
      </div>

      <div className="relative mx-auto w-full max-w-4xl">
        <div className="mb-6 flex items-center justify-between sm:mb-8">
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.jpg"
              alt="Aarbitech Energy"
              width={170}
              height={46}
              className="h-9 w-auto object-contain sm:h-10"
              priority
            />
          </Link>
          <Link href="/" className="text-sm text-gray-600 transition-colors hover:text-blue-700">
            Back to site
          </Link>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="rounded-2xl border border-gray-200 bg-white p-5 shadow-xl shadow-slate-300/40 sm:p-8"
        >
          <AnimatePresence>
            {status === "success" && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="px-2 py-10 text-center"
              >
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100">
                  <svg className="h-8 w-8 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">Request Submitted</h2>
                <p className="mx-auto mt-2 max-w-md text-gray-600">
                  Thanks for sharing your project details. Our team will contact you shortly.
                </p>
                <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
                  <button
                    onClick={() => {
                      setStatus("idle");
                      setForm(initialForm);
                    }}
                    className="h-11 rounded-xl border border-gray-200 px-5 text-sm font-semibold text-gray-700 transition-colors hover:bg-gray-50"
                  >
                    Send another request
                  </button>
                  <Link
                    href="/"
                    className="inline-flex h-11 items-center rounded-xl bg-blue-700 px-5 text-sm font-semibold text-white transition-colors hover:bg-blue-800"
                  >
                    Back to home
                  </Link>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {status !== "success" && (
            <>
              <h1 className="text-2xl font-bold leading-tight text-gray-900 sm:text-3xl">
                Tell Us About Your Project
              </h1>
              <p className="mt-2 text-sm text-gray-500">
                Share your requirements and our team will get back to you within 2 business days.
              </p>

              <form onSubmit={handleSubmit} className="mt-7 space-y-5">
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-gray-700">First name*</label>
                    <input
                      type="text"
                      name="firstName"
                      required
                      value={form.firstName}
                      onChange={handleChange}
                      className={inputCls}
                    />
                  </div>

                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-gray-700">Last name*</label>
                    <input
                      type="text"
                      name="lastName"
                      required
                      value={form.lastName}
                      onChange={handleChange}
                      className={inputCls}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-gray-700">Company name*</label>
                    <input
                      type="text"
                      name="company"
                      required
                      value={form.company}
                      onChange={handleChange}
                      className={inputCls}
                    />
                  </div>

                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-gray-700">Email*</label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      className={inputCls}
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-1.5 block text-sm font-medium text-gray-700">
                    What are you inquiring about?*
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Project scope, location, timeline, and anything else we should know."
                    className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 placeholder-gray-400 outline-none transition-all focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                  />
                </div>

                {status === "error" && errorMsg && (
                  <div className="rounded-xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm text-rose-700">
                    {errorMsg}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="mt-2 inline-flex h-12 w-full items-center justify-center rounded-xl bg-blue-700 px-5 text-sm font-semibold text-white transition-colors hover:bg-blue-800 disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {status === "loading" ? "Submitting..." : "Submit"}
                </button>
              </form>
            </>
          )}
        </motion.div>
      </div>
    </div>
  );
}
