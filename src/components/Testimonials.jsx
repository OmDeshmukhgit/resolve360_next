"use client";

import { useState } from "react";
import { testimonials } from "@/data/testimonials";
import { Star, ShieldCheck, Quote, ChevronLeft, ChevronRight, CheckCircle2 } from "lucide-react";

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () => {
    setCurrentIndex((prevIdx) => (prevIdx === 0 ? testimonials.length - 1 : prevIdx - 1));
  };

  const next = () => {
    setCurrentIndex((prevIdx) => (prevIdx === testimonials.length - 1 ? 0 : prevIdx + 1));
  };

  return (
    <section className="py-16 sm:py-20 bg-white border-b border-slate-100" id="testimonials" aria-label="Patient Reviews & Testimonials">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Heading matching original Resolve360 */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <div className="inline-flex items-center gap-1.5 bg-amber-50 text-amber-900 text-xs font-extrabold px-3.5 py-1 rounded-full mb-3 border border-amber-200">
            <div className="flex text-[#FFBA00]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-[#FFBA00] text-[#FFBA00]" />
              ))}
            </div>
            <span>4.9 / 5 Rating on Google &amp; Trustindex</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#09131A] tracking-tight">
            Trusted by patients for 2 Million + Rehab Sessions Done.
          </h2>

          <div className="mt-4 flex flex-wrap items-center justify-center gap-4 text-xs font-semibold text-slate-700">
            <span className="flex items-center gap-1.5 bg-slate-50 px-3 py-1 rounded-full border border-slate-200">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              4.9/5 Patient Satisfaction
            </span>
            <span className="flex items-center gap-1.5 bg-slate-50 px-3 py-1 rounded-full border border-slate-200">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              Global Online Consultations
            </span>
            <span className="flex items-center gap-1.5 bg-slate-50 px-3 py-1 rounded-full border border-slate-200">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              Evidence-Informed Recovery
            </span>
          </div>
        </div>

        {/* Featured Patient Story Slider */}
        <div className="max-w-4xl mx-auto mb-14">
          <div className="bg-[#F8FAFC] rounded-3xl border border-slate-200/90 p-6 sm:p-10 shadow-md relative overflow-hidden">
            <Quote className="absolute top-6 right-6 w-20 h-20 text-slate-200/60 pointer-events-none -z-0" />

            <div className="relative z-10">
              {/* Star Rating & Verified Pill */}
              <div className="flex flex-wrap items-center justify-between gap-3 mb-5">
                <div className="flex items-center gap-2">
                  <div className="flex text-[#FFBA00]">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#FFBA00] text-[#FFBA00]" />
                    ))}
                  </div>
                  <span className="text-xs font-bold text-[#09131A]">5.0 Star Rating</span>
                </div>
                <div className="inline-flex items-center gap-1.5 bg-emerald-50 text-emerald-700 text-xs font-semibold px-3 py-1 rounded-full border border-emerald-200">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  <span>{testimonials[currentIndex].source}</span>
                </div>
              </div>

              {/* Headline */}
              <h3 className="text-lg sm:text-xl font-bold text-[#09131A] mb-3">
                &ldquo;{testimonials[currentIndex].headline}&rdquo;
              </h3>

              {/* Review Text */}
              <p className="text-slate-700 text-sm sm:text-base leading-relaxed mb-6">
                {testimonials[currentIndex].text}
              </p>

              {/* Author & Treatment */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-5 border-t border-slate-200/80">
                <div>
                  <div className="font-bold text-[#09131A] text-base">
                    {testimonials[currentIndex].name}
                  </div>
                  <div className="text-xs font-semibold text-[#0D78B8] mt-0.5">
                    {testimonials[currentIndex].condition}
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={prev}
                    className="p-2.5 rounded-full border border-slate-300 bg-white hover:bg-slate-100 text-slate-700 hover:text-slate-900 transition-colors"
                    aria-label="Previous Review"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    type="button"
                    onClick={next}
                    className="p-2.5 rounded-full border border-slate-300 bg-white hover:bg-slate-100 text-slate-700 hover:text-slate-900 transition-colors"
                    aria-label="Next Review"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Multi-Review Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.slice(0, 3).map((rev) => (
            <div 
              key={rev.id}
              className="p-6 bg-white rounded-2xl border border-slate-200/80 shadow-2xs hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex text-[#FFBA00] mb-3">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#FFBA00] text-[#FFBA00]" />
                  ))}
                </div>
                <h4 className="text-sm font-bold text-[#09131A] mb-2 leading-snug">
                  {rev.headline}
                </h4>
                <p className="text-xs text-slate-600 line-clamp-4 leading-relaxed">
                  {rev.text}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                <span className="font-bold text-slate-900">{rev.name}</span>
                <span className="text-[#0D78B8] font-semibold text-[11px] truncate max-w-[140px]">{rev.condition}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
