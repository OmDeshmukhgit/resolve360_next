import Image from "next/image";
import Link from "next/link";
import BookingForm from "./BookingForm";
import { Star, ShieldCheck, Award, ArrowRight, CheckCircle2 } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative bg-white pt-8 pb-12 sm:pt-12 sm:pb-16 border-b border-slate-100" aria-label="Hero Section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Authentic Resolve360 Hero Messaging */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Trust Badge */}
            <div className="inline-flex items-center gap-2 bg-rose-50 text-[#C70031] text-xs font-extrabold px-3.5 py-1.5 rounded-full border border-rose-100">
              <Award className="w-3.5 h-3.5 text-[#C70031]" />
              <span>India&apos;s No.1 &amp; Most Trusted Online Paramedic Clinic</span>
            </div>

            {/* Official H1 with Signature Red & Blue Accent Words */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[50px] font-black text-[#09131A] tracking-tight leading-[1.12]">
              India’s <span className="text-[#C70031]">Leading</span> <span className="text-[#0D78B8]">Online<br className="hidden sm:inline" /> Physiotherapy Platform</span>
            </h1>

            {/* Subheadline from Original Site */}
            <p className="text-base sm:text-lg text-slate-600 max-w-xl leading-relaxed">
              Get pain relief at home with <strong className="text-slate-900 font-bold">1:1 Live Video Sessions</strong> with Certified Experts. Providing affordable, world-class online physical therapy From India to patients locally and worldwide.
            </p>

            {/* Social Proof Rating & Safety Badges */}
            <div className="pt-1 flex flex-wrap items-center gap-4 sm:gap-6 text-sm">
              <div className="flex items-center gap-2 bg-slate-50 px-3.5 py-2 rounded-xl border border-slate-200/80">
                <div className="flex text-[#FFBA00]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#FFBA00] text-[#FFBA00]" />
                  ))}
                </div>
                <span className="font-extrabold text-[#09131A] text-sm">4.9</span>
                <span className="text-slate-500 text-xs">/ 50,000+ patients</span>
              </div>

              <div className="flex items-center gap-1.5 text-slate-700 font-semibold text-xs sm:text-sm">
                <ShieldCheck className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>100% Safe &amp; Convenient</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Link
                href="/book-appointment"
                className="resolve-btn px-7 py-3.5 text-sm sm:text-base shadow-md hover:scale-[1.02]"
              >
                <span>Book Appointment</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center gap-1.5 px-5 py-3.5 rounded-[18px] border-2 border-slate-200 text-slate-700 font-bold text-sm hover:border-[#0D78B8] hover:text-[#0D78B8] transition-colors"
              >
                <span>View Treatments</span>
              </Link>
            </div>

            {/* Key Clinical Guarantees */}
            <div className="pt-4 border-t border-slate-100 grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs text-slate-600 font-medium">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>Senior IAP Doctors</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>Patented Protocols</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>Zero Clinic Commutes</span>
              </div>
            </div>

          </div>

          {/* Right Column: Real Hero Image + Interactive Free Consultation Callback Card */}
          <div className="lg:col-span-5 flex flex-col space-y-4">
            
            {/* Top: Actual Resolve360 Hero LCP Image */}
            <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden shadow-md border border-slate-200 bg-slate-100">
              <Image
                src="/images/hero/hero-physio.webp"
                alt="Woman doing shoulder stretch during online physiotherapy session."
                fill
                priority
                className="object-cover object-center"
                sizes="(max-width: 768px) 100vw, 500px"
              />
              <div className="absolute bottom-3 left-3 bg-black/60 backdrop-blur-md text-white text-[11px] font-semibold px-2.5 py-1 rounded-lg">
                1-on-1 Video Rehabilitation
              </div>
            </div>

            {/* Bottom: The Callback Card */}
            <div className="resolve-form-shadow bg-white rounded-2xl border border-slate-200/90 overflow-hidden">
              <BookingForm embedded={true} />
            </div>

          </div>

        </div>

      </div>

      {/* Pricing Ribbon below Hero matching Original Site */}
      <div className="mt-12 py-3 bg-[#F1F5FE] border-y border-slate-200/80 text-center px-4">
        <p className="text-xs sm:text-sm font-semibold text-slate-700">
          Paid care plans starting at <strong className="text-[#C70031] font-bold">₹499/session</strong>. (Note: Final pricing varies by city and specialist.)
        </p>
      </div>
    </section>
  );
}
