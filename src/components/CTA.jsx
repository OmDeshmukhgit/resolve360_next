import Link from "next/link";
import { siteConfig } from "@/data/siteConfig";
import { Phone, Calendar, Clock, ShieldCheck, Award, ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section className="py-16 sm:py-20 bg-[#09131A] text-white relative overflow-hidden border-t border-slate-800" aria-label="Book Online Physiotherapy Consultation">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10 text-center">
        
        {/* Badges */}
        <div className="inline-flex items-center gap-2 bg-[#C70031]/20 text-rose-300 text-xs font-bold px-3.5 py-1.5 rounded-full mb-4 border border-[#C70031]/40">
          <Award className="w-3.5 h-3.5 text-[#C70031]" />
          <span>Zero-Obligation Trial Session</span>
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white leading-tight">
          Ready to Live Free from Pain? <br className="hidden sm:inline" />
          <span className="text-[#0D78B8]">
            Book Your Free Consultation Today
          </span>
        </h2>

        <p className="mt-4 text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
          Speak 1-on-1 with a certified physiotherapy specialist over live video. Your initial diagnostic assessment is <strong className="text-white font-bold">100% Free (₹0)</strong> with zero payment details required.
        </p>

        {/* Highlight Stats Strip */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 my-8 text-xs sm:text-sm text-slate-300">
          <span className="flex items-center gap-1.5">
            <Clock className="w-4 h-4 text-[#0D78B8]" />
            Specialist callback in 15 mins
          </span>
          <span>•</span>
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            Care plans from ₹499/session
          </span>
          <span>•</span>
          <span className="flex items-center gap-1.5">
            <Award className="w-4 h-4 text-[#C70031]" />
            Govt. Indian Patent #596041
          </span>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
          <Link
            href="/book-appointment"
            className="w-full sm:w-auto resolve-btn px-8 py-3.5 text-base shadow-xl hover:scale-[1.02]"
          >
            <Calendar className="w-5 h-5 mr-2" />
            <span>Book Free ₹0 Session</span>
          </Link>

          <a
            href="tel:+9108095659804"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 text-white font-bold text-sm sm:text-base px-6 py-3.5 rounded-[18px] border border-slate-700 transition-colors"
          >
            <Phone className="w-4 h-4 text-[#0D78B8]" />
            <span>Call +91 080 9565 9804</span>
          </a>
        </div>

        {/* Secondary Trust Note */}
        <p className="mt-6 text-xs text-slate-400">
          Over 50,000 patients treated across India, US, UK, Canada, Australia &amp; UAE. 4.9/5 Google Rating.
        </p>

      </div>
    </section>
  );
}
