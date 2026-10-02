"use client";

import { useState } from "react";
import { faqs } from "@/data/faqs";
import { ChevronDown, HelpCircle, PhoneCall, Sparkles } from "lucide-react";
import Link from "next/link";

export default function FAQ({ limit = 8, showAll = false }) {
  const [openIdx, setOpenIdx] = useState(0); // First item open by default
  const displayFaqs = showAll ? faqs : faqs.slice(0, limit);

  const toggle = (idx) => {
    setOpenIdx(openIdx === idx ? -1 : idx);
  };

  // Generate FAQ Schema JSON-LD
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": displayFaqs.map((f) => ({
      "@type": "Question",
      "name": f.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": f.answer
      }
    }))
  };

  return (
    <section className="py-16 lg:py-24 bg-slate-50 border-b border-slate-200/80" id="faqs" aria-label="Frequently Asked Questions">
      {/* Inject FAQ Schema for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Section Heading */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-sky-100 text-sky-800 text-xs font-bold px-3 py-1 rounded-full mb-3 border border-sky-200">
            <HelpCircle className="w-3.5 h-3.5" />
            Common Inquiries
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-slate-600 text-base sm:text-lg leading-relaxed">
            Everything you need to know about online physiotherapy consultations, treatment plans, pricing, and our patent.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3.5">
          {displayFaqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className={`bg-white rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen 
                    ? "border-sky-300 shadow-md ring-1 ring-sky-100" 
                    : "border-slate-200 hover:border-slate-300"
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full px-5 sm:px-6 py-4 sm:py-5 text-left flex items-center justify-between gap-4 focus:outline-none"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${idx}`}
                >
                  <span className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                    {faq.question}
                  </span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-200 ${
                    isOpen ? "bg-sky-100 text-sky-700 rotate-180" : "bg-slate-100 text-slate-500"
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div
                    id={`faq-answer-${idx}`}
                    className="px-5 sm:px-6 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 animate-in fade-in duration-200"
                  >
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still Have Questions CTA */}
        <div className="mt-12 p-6 bg-white rounded-2xl border border-slate-200 text-center flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <h3 className="text-base font-bold text-slate-900">
              Still have questions about your specific condition?
            </h3>
            <p className="text-xs text-slate-500 mt-1">
              Speak directly with our senior care coordinator. No obligation, 100% free call.
            </p>
          </div>
          <Link
            href="/book-appointment"
            className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold px-5 py-3 rounded-xl shadow-xs transition-colors whitespace-nowrap"
          >
            <PhoneCall className="w-3.5 h-3.5 text-sky-400" />
            <span>Request Call in 15 Mins</span>
          </Link>
        </div>

      </div>
    </section>
  );
}
