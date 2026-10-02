import Image from "next/image";
import Link from "next/link";
import { Phone, Mail, CheckCircle2, ArrowRight, Star } from "lucide-react";

export default function AppShowcase() {
  return (
    <section className="py-20 sm:py-28 bg-gradient-to-b from-white via-sky-50/40 to-slate-50 relative overflow-hidden border-b border-slate-200" aria-label="Resolve360 Mobile App">
      
      {/* Decorative Background Elements */}
      <div className="absolute top-1/2 right-10 -translate-y-1/2 w-[550px] h-[550px] bg-gradient-to-tr from-[#0D78B8]/15 via-sky-300/10 to-[#C70031]/10 rounded-full blur-3xl pointer-events-none -z-0" />
      <div className="absolute top-10 left-10 w-96 h-96 bg-sky-100/40 rounded-full blur-3xl pointer-events-none -z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column: App Messaging & CTAs */}
          <div className="lg:col-span-6 space-y-6 text-left">
            
            <div className="inline-flex items-center gap-2 text-xs uppercase font-extrabold tracking-widest text-[#0D78B8] bg-sky-50 px-3.5 py-1.5 rounded-full border border-sky-100 shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-[#0D78B8] animate-pulse" />
              <span>Mobile Rehabilitation App</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#09131A] tracking-tight leading-[1.15]">
              Recovery &amp; rehab, <br className="hidden sm:inline" />
              <span className="text-[#C70031]">in your pocket.</span>
            </h2>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Book sessions, follow personalised exercise plans, and chat with your care manager — everything for your Pain-to-Peace journey in one unified mobile app.
            </p>

            {/* Feature Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-1">
              {[
                "Instant HD video consultations with specialist",
                "Daily structured exercise routines with video guidance",
                "Direct clinical chat for symptoms & questions",
                "Automatic progress reports and posture assessments"
              ].map((feat, i) => (
                <div key={i} className="flex items-start gap-2.5 p-2.5 rounded-xl bg-white/70 border border-slate-200/60 shadow-2xs">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span className="text-xs font-semibold text-slate-800 leading-snug">{feat}</span>
                </div>
              ))}
            </div>

            {/* Official App Store Download Badges */}
            <div className="pt-2">
              <div className="text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-3">
                Download Free Patient App:
              </div>
              <div className="flex flex-wrap items-center gap-3">
                {/* Apple App Store */}
                <a
                  href="https://apps.apple.com/in/app/resolve360/id1496257541"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 bg-slate-950 hover:bg-black text-white px-4 py-2.5 rounded-xl shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 border border-slate-800"
                  aria-label="Download Resolve360 on Apple App Store"
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.87c.62-.75 1.04-1.8 0.92-2.87-.9.04-2 .6-2.65 1.36-.57.66-.99 1.74-.86 2.78 1.01.08 2.05-.52 2.59-1.27z"/>
                  </svg>
                  <div className="text-left">
                    <div className="text-[10px] leading-none uppercase tracking-wider text-slate-400 font-medium">Download on the</div>
                    <div className="text-xs font-bold leading-tight tracking-tight mt-0.5">App Store</div>
                  </div>
                </a>

                {/* Google Play */}
                <a
                  href="https://play.google.com/store/apps/details?id=com.resolve360.patientapp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 bg-slate-950 hover:bg-black text-white px-4 py-2.5 rounded-xl shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 border border-slate-800"
                  aria-label="Get Resolve360 on Google Play"
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M3.609 1.814L13.792 12 3.61 22.186c-.37-.363-.61-.88-.61-1.464V3.278c0-.584.24-1.101.609-1.464zm11.238 11.24L17.7 15.91l-11.83 6.83 8.977-9.686zM18.89 12l2.36 1.363c.69.398.69 1.05 0 1.448L18.89 16.174l-2.046-2.087L18.89 12zm-4.043-.946L5.87 1.368 17.7 8.197l-2.853 2.857z"/>
                  </svg>
                  <div className="text-left">
                    <div className="text-[10px] leading-none uppercase tracking-wider text-slate-400 font-medium">Get it on</div>
                    <div className="text-xs font-bold leading-tight tracking-tight mt-0.5">Google Play</div>
                  </div>
                </a>
              </div>
            </div>

            {/* Direct Clinical Contact Strip */}
            <div className="pt-2 flex flex-wrap items-center gap-6 text-xs sm:text-sm font-semibold text-slate-800 border-t border-slate-200/80">
              <a 
                href="tel:+9108095659804" 
                className="flex items-center gap-2 text-slate-800 hover:text-[#C70031] transition-colors"
              >
                <Phone className="w-4 h-4 text-[#C70031]" />
                <span>+91 - 080 - 9565 9804</span>
              </a>
              <a 
                href="mailto:care@resolve360.app" 
                className="flex items-center gap-2 text-slate-800 hover:text-[#0D78B8] transition-colors"
              >
                <Mail className="w-4 h-4 text-[#0D78B8]" />
                <span>care@resolve360.app</span>
              </a>
            </div>

            {/* Primary Action Button */}
            <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <Link
                href="/book-appointment"
                className="w-full sm:w-auto resolve-btn px-8 py-3.5 text-sm sm:text-base shadow-md hover:scale-[1.02]"
              >
                <span>Book Free Consultation</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
              <span className="text-xs text-slate-500 font-medium">
                First session ₹0 Free — No payment required
              </span>
            </div>

          </div>

          {/* Right Column: High-Impact Floating iPhone Mockup */}
          <div className="lg:col-span-6 relative flex items-center justify-center pt-8 lg:pt-0">
            
            {/* Ambient Multi-layer Radial Glow */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#0D78B8]/20 via-sky-300/15 to-[#C70031]/10 rounded-full blur-3xl opacity-75 pointer-events-none" />

            {/* Subtle Circular Radial Guide Ring */}
            <div className="absolute w-[92%] aspect-square rounded-full border border-sky-200/50 bg-gradient-to-b from-sky-50/50 to-transparent pointer-events-none" />

            {/* Main iPhone Mockup Image - Expansive and Prominent */}
            <div className="relative z-10 w-full max-w-2xl transform hover:scale-[1.02] transition-transform duration-700 ease-out">
              <Image
                src="/images/hero/App_showcase_mockup_iPhone_screens_202608071808-1-2048x1142.webp"
                alt="Resolve360 Mobile App Showcase on iPhone Screens"
                width={1280}
                height={714}
                priority
                className="w-full h-auto object-contain drop-shadow-[0_20px_40px_rgba(13,120,184,0.18)]"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            {/* Floating Trust Badge 1: 4.9 App Rating */}
            <div className="absolute -bottom-4 left-2 sm:left-6 bg-white/95 backdrop-blur-md rounded-2xl p-3 sm:p-3.5 shadow-xl border border-slate-200/80 flex items-center gap-3 z-20 hover:scale-105 transition-transform">
              <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-500 flex items-center justify-center flex-shrink-0 font-black">
                <Star className="w-5 h-5 fill-current" />
              </div>
              <div>
                <div className="text-xs sm:text-sm font-extrabold text-[#09131A] flex items-center gap-1.5">
                  <span>4.9 / 5.0</span>
                  <div className="flex text-amber-400 text-xs">
                    {"★".repeat(5)}
                  </div>
                </div>
                <div className="text-[11px] text-slate-500 font-medium">50,000+ App Downloads</div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
