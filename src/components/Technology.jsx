"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  Award, 
  ShieldCheck, 
  Lock, 
  Sparkles, 
  ZoomIn, 
  X, 
  CheckCircle2, 
  ArrowRight, 
  Download,
  ExternalLink,
  Layers,
  FileText
} from "lucide-react";

export default function Technology() {
  const [viewMode, setViewMode] = useState("document"); // "document" | "podium"
  const [isZoomOpen, setIsZoomOpen] = useState(false);

  const pillars = [
    {
      title: "Personalized.",
      color: "#0D78B8",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 34 34" fill="none">
          <path d="M17.0003 5.66602C18.5032 5.66602 19.9446 6.26304 21.0073 7.32574C22.07 8.38845 22.667 9.82979 22.667 11.3327C22.667 12.8356 22.07 14.2769 21.0073 15.3396C19.446 16.4023 18.5032 16.9993 17.0003 16.9993C15.4974 16.9993 14.0561 16.4023 12.9934 15.3396C11.9307 14.2769 11.3337 12.8356 11.3337 11.3327C11.3337 9.82979 11.9307 8.38845 12.9934 7.32574C14.0561 6.26304 15.4974 5.66602 17.0003 5.66602ZM17.0003 19.8327C23.262 19.8327 28.3337 22.3685 28.3337 25.4993V28.3327H5.66699V25.4993C5.66699 22.3685 10.7387 19.8327 17.0003 19.8327Z" fill="#0D78B8" />
        </svg>
      )
    },
    {
      title: "Precise.",
      color: "#C31336",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 34 34" fill="none">
          <path d="M16.9889 20.7538C16.2451 20.7544 15.5178 20.5341 14.8994 20.1208C14.281 19.7074 13.7993 19.1197 13.5155 18.4321C13.2317 17.7445 13.1585 16.9882 13.3052 16.2589C13.452 15.5297 13.8121 14.8605 14.3398 14.3363C14.4393 14.2377 14.5573 14.1597 14.687 14.1066C14.8167 14.0536 14.9555 14.0267 15.0956 14.0274C15.2357 14.028 15.3743 14.0563 15.5035 14.1105C15.6327 14.1647 15.7499 14.2438 15.8485 14.3434C15.9471 14.4429 16.0252 14.5609 16.0782 14.6906C16.1312 14.8203 16.1581 14.9591 16.1575 15.0992C16.1568 15.2393 16.1286 15.3779 16.0743 15.5071C16.0201 15.6363 15.941 15.7535 15.8415 15.8521C15.6886 16.0015 15.5673 16.1801 15.4845 16.3771C15.4018 16.5742 15.3594 16.7859 15.3598 16.9996C15.3409 17.3361 15.4278 17.67 15.6083 17.9546C15.7887 18.2392 16.0537 18.4603 16.366 18.5868C16.6784 18.7133 17.0225 18.7389 17.3501 18.6601C17.6777 18.5812 17.9725 18.4019 18.1931 18.1471C18.3947 17.9473 18.6671 17.8352 18.951 17.8352C19.2349 17.8352 19.5073 17.9473 19.7089 18.1471C19.9054 18.3505 20.0153 18.6222 20.0153 18.905C20.0153 19.1878 19.9054 19.4596 19.7089 19.663C19.3509 20.0166 18.9259 20.2952 18.4589 20.4825C17.9918 20.6698 17.4921 20.762 16.9889 20.7538Z" fill="#C31336" />
          <path d="M31.5094 17.0003C31.5094 20.8515 29.9796 24.5449 27.2564 27.2681C24.5332 29.9913 20.8398 31.5212 16.9886 31.5212C13.1374 31.5212 9.44401 29.9913 6.72083 27.2681C3.99764 24.5449 2.46777 20.8515 2.46777 17.0003C2.46777 13.1492 3.99764 9.45573 6.72083 6.73255C9.44401 4.00936 13.1374 2.47949 16.9886 2.47949C17.2704 2.47949 17.5407 2.59143 17.7399 2.79069C17.9392 2.98995 18.0511 3.2602 18.0511 3.54199V8.92533C18.0474 9.20598 17.9343 9.4741 17.7359 9.67257C17.5374 9.87104 17.2693 9.98416 16.9886 9.98783C15.6012 9.97828 14.2432 10.3881 13.0928 11.1637C11.9358 11.9304 11.0336 13.0245 10.5012 14.3063C9.96876 15.5881 9.83035 16.9995 10.1036 18.3603C10.548 19.9747 11.5499 21.3795 12.9316 22.3254C14.3133 23.2713 15.9854 23.6971 17.6513 23.5273C19.3171 23.3575 20.8689 22.603 22.0313 21.3978C23.1937 20.1926 23.8916 18.6145 24.0011 16.9437C23.9992 16.8036 24.0254 16.6646 24.0781 16.5348C24.1308 16.405 24.209 16.2872 24.3081 16.1881C24.4071 16.0891 24.525 16.0109 24.6548 15.9582C24.7845 15.9054 24.9236 15.8793 25.0636 15.8812H30.4469C30.5914 15.881 30.7343 15.9102 30.8671 15.9671C30.9998 16.024 31.1196 16.1074 31.219 16.2121C31.3184 16.3169 31.3955 16.4408 31.4454 16.5763C31.4954 16.7118 31.5171 16.8561 31.5094 17.0003Z" fill="#C31336" />
          <path d="M30.9992 8.68422C30.9622 8.95984 30.8494 9.21977 30.6733 9.43505L27.5992 12.5092C27.162 12.9482 26.6211 13.2698 26.0267 13.4442C25.6779 13.5513 25.3148 13.6039 24.95 13.6001C24.7002 13.6222 24.4489 13.6222 24.1992 13.6001L22.315 13.2317L19.085 16.4759C18.8819 16.6691 18.6144 16.7801 18.3342 16.7876C18.0525 16.7873 17.7824 16.6752 17.5833 16.4759C17.4831 16.3782 17.4034 16.2615 17.349 16.1325C17.2946 16.0035 17.2666 15.865 17.2666 15.7251C17.2666 15.5851 17.2946 15.4466 17.349 15.3176C17.4034 15.1886 17.4831 15.0719 17.5833 14.9742L20.8275 11.7159L20.445 9.84588C20.3307 9.24314 20.3598 8.62196 20.53 8.03255C20.7045 7.43809 21.026 6.89724 21.465 6.46005L24.5108 3.41422C24.7201 3.22383 24.9816 3.10048 25.2617 3.06005C25.5237 3.02208 25.7911 3.06665 26.0267 3.18755C26.2604 3.30645 26.4566 3.48791 26.5933 3.71172C26.7317 3.96216 26.7909 4.24861 26.7633 4.53339L26.31 7.73505L29.4975 7.29589C29.7643 7.2697 30.0328 7.32465 30.2679 7.45356C30.5029 7.58247 30.6936 7.77933 30.815 8.01838C30.9304 8.22173 30.9937 8.45048 30.9992 8.68422Z" fill="#C31336" />
        </svg>
      )
    },
    {
      title: "Proven.",
      color: "#6225BE",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 34 34" fill="none">
          <mask id="mask_proven" style={{ maskType: "luminance" }} maskUnits="userSpaceOnUse" x="3" y="1" width="28" height="32">
            <path d="M4.25 6.55601L17.0064 2.83301L29.75 6.55601V14.1904C29.7495 18.1029 28.5181 21.9161 26.2302 25.09C23.9423 28.2638 20.7139 30.6374 17.0021 31.8747C13.289 30.638 10.0592 28.2641 7.77049 25.0895C5.48173 21.9149 4.25006 18.1005 4.25 14.1869V6.55601Z" fill="white" stroke="white" strokeWidth="2" strokeLinejoin="round" />
            <path d="M10.625 16.2917L15.5833 21.25L24.0833 12.75" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </mask>
          <g mask="url(#mask_proven)">
            <path d="M0 0H34V34H0V0Z" fill="#6225BE" />
          </g>
        </svg>
      )
    }
  ];

  const patentHighlights = [
    {
      title: "Official Government of India Patent",
      desc: "Granted by The Patent Office, Government of India.",
      bg: "bg-[#FCEFF2]",
      border: "border-rose-100",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 18 18" fill="none">
          <path d="M2.25 3.471L9.00338 1.5L15.75 3.471V7.51275C15.7497 9.58408 15.0978 11.6028 13.8866 13.2831C12.6753 14.9634 10.9662 16.22 9.00113 16.875C7.03536 16.2203 5.32548 14.9635 4.11379 13.2829C2.90209 11.6022 2.25003 9.5828 2.25 7.51087V3.471Z" fill="#C31336" stroke="#C31336" strokeWidth="0.5" strokeLinejoin="round"/>
          <path d="M5.625 8.625L8.25 11.25L12.75 6.75" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      title: "Patent No. 596041",
      desc: "Protecting Our Innovation for 20 years from 19 Aug 2024",
      bg: "bg-[#EBF8FF]",
      border: "border-sky-100",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0D78B8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
        </svg>
      )
    },
    {
      title: "AI-Powered Recovery",
      desc: "Intelligent assessment and adaptive protocols for better outcomes.",
      bg: "bg-[#F1EFFC]",
      border: "border-purple-100",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#6225BE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 4.44-2.54Z" />
          <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-4.44-2.54Z" />
        </svg>
      )
    },
    {
      title: "Personalized Treatment",
      desc: "Custom protocols, real-time tracking and expert guidance.",
      bg: "bg-[#EBFEEA]",
      border: "border-emerald-100",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0E8E02" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
          <path d="M15 2H9a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1Z" />
          <path d="m9 14 2 2 4-4" />
        </svg>
      )
    }
  ];

  const clinicalPillars = [
    {
      title: "Predictive Prognosis & Milestone Mapping",
      desc: "Mathematical mapping of individual tissue healing curves allows our patented system to forecast recovery timeframes accurately based on clinical pathology."
    },
    {
      title: "Active Protocol Creation Engine",
      desc: "Eliminates exercise guesswork. Dynamically balances isometric loading, eccentric control, and mobility vectors to prevent re-injury and accelerate recovery."
    },
    {
      title: "Real-Time Tele-Delivery & Video Feedback",
      desc: "Integrates therapist-guided visual alignment cues directly into the patient experience for verified form, movement cadence, and safety."
    },
    {
      title: "20-Year Protected Clinical Innovation",
      desc: "Officially granted by The Patent Office, Government of India to Rehabunified Private Limited, protecting our clinical methodology for 20 years from 19 Aug 2024."
    }
  ];

  return (
    <section 
      className="py-16 sm:py-24 relative overflow-hidden bg-cover bg-center border-y border-slate-200/80" 
      id="technology" 
      aria-label="Patent-Protected Rehabilitation Technology"
      style={{
        backgroundImage: "url('/images/patent/MacBook-Air-2.webp')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center center"
      }}
    >
      {/* Ambient luminous glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-rose-100/40 via-sky-100/30 to-transparent rounded-full blur-3xl pointer-events-none -z-0" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-sky-100/40 via-purple-100/20 to-transparent rounded-full blur-3xl pointer-events-none -z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Top Tag: More Effective. More Convenient... */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 bg-[#FCEFF2] text-[#C70031] text-xs sm:text-sm font-bold px-4 py-1.5 rounded-full mb-4 border border-[#F5C2CD] shadow-2xs">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 18 18" fill="none">
              <path d="M2.25 3.471L9.00338 1.5L15.75 3.471V7.51275C15.7497 9.58408 15.0978 11.6028 13.8866 13.2831C12.6753 14.9634 10.9662 16.22 9.00113 16.875C7.03536 16.2203 5.32548 14.9635 4.11379 13.2829C2.90209 11.6022 2.25003 9.5828 2.25 7.51087V3.471Z" fill="#C31336" stroke="#C31336" strokeWidth="0.5"/>
              <path d="M5.625 8.625L8.25 11.25L12.75 6.75" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span>More Effective. More Convenient. Better Than Visiting a Clinic.</span>
          </div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#09131A] leading-tight">
            BEYOND TRADITIONAL{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C70031] via-[#E53935] to-[#9C0024]">
              PHYSIOTHERAPY
            </span>
          </h2>

          <p className="mt-3 text-slate-700 text-base sm:text-lg font-medium leading-relaxed max-w-2xl">
            World’s Most Advanced, Clinically Proven &amp; Patent-Protected Online Physiotherapy.
          </p>

          {/* 3 Core Pills Bar: Personalized. Precise. Proven. */}
          <div className="mt-6 inline-flex flex-wrap items-center justify-center gap-3 sm:gap-6 bg-white/90 backdrop-blur-md px-5 py-2.5 rounded-2xl border border-slate-200/80 shadow-md">
            {pillars.map((p, i) => (
              <div key={i} className="flex items-center gap-2">
                <span className="flex-shrink-0">{p.icon}</span>
                <span className="text-sm sm:text-base font-extrabold text-[#09131A] tracking-tight">
                  {p.title}
                </span>
                {i < pillars.length - 1 && (
                  <span className="hidden sm:inline-block ml-4 text-slate-300 font-light">|</span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* 2-Column Showcase: Features/CTA on Left & Sharp Patent Certificate on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-16">
          
          {/* Left Column: 4 Patent Innovation Boxes + CTA */}
          <div className="lg:col-span-6 space-y-6">
            <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
              Our patent-protected technology is clinically proven to deliver faster recovery, better functional outcomes, and a superior patient experience—anytime, anywhere.
            </p>

            {/* 4 Feature Boxes Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {patentHighlights.map((item, idx) => (
                <div 
                  key={idx}
                  className={`bg-white rounded-2xl p-4 sm:p-5 border ${item.border} shadow-xs hover:shadow-md transition-all duration-200 flex items-start gap-3.5`}
                >
                  <div className={`w-10 h-10 rounded-full ${item.bg} flex items-center justify-center flex-shrink-0 shadow-2xs`}>
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-[#09131A] leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA & Social Proof Group */}
            <div className="pt-2 space-y-4">
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <Link
                  href="/book-appointment"
                  className="resolve-btn px-8 py-3.5 text-base font-bold shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all"
                >
                  <span>Book Free Consultation</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>

                <div className="flex items-center gap-4 text-xs font-semibold text-slate-600">
                  <span className="flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                    <span>100% Safe &amp; Secure</span>
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Lock className="w-4 h-4 text-sky-600" />
                    <span>Privacy First. Always.</span>
                  </span>
                </div>
              </div>

              {/* Social Proof Strip (Frame-79) */}
              <div className="pt-1">
                <div className="inline-block bg-white/95 backdrop-blur-sm border border-slate-200/80 rounded-2xl p-2 shadow-xs">
                  <Image
                    src="/images/patent/Frame-79.webp"
                    alt="10,000+ patients booked this month. Don't wait. Your recovery can't."
                    width={450}
                    height={80}
                    className="h-auto w-auto max-w-full rounded-xl"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: CRYSTAL CLEAR PATENT CERTIFICATE SHOWCASE */}
          <div className="lg:col-span-6 flex flex-col items-center">
            
            {/* View Mode Switcher: Document vs 3D Presentation */}
            <div className="flex items-center gap-2 p-1 bg-white/80 backdrop-blur-md border border-slate-200 rounded-full mb-4 shadow-xs">
              <button
                type="button"
                onClick={() => setViewMode("document")}
                className={`flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-bold transition-all ${
                  viewMode === "document" 
                    ? "bg-[#C70031] text-white shadow-xs" 
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                <FileText className="w-3.5 h-3.5" />
                <span>Clear Certificate (Legible)</span>
              </button>
              <button
                type="button"
                onClick={() => setViewMode("podium")}
                className={`flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-bold transition-all ${
                  viewMode === "podium" 
                    ? "bg-[#C70031] text-white shadow-xs" 
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                <Layers className="w-3.5 h-3.5" />
                <span>3D Award View</span>
              </button>
            </div>

            {/* Certificate Display Card */}
            <div className="relative w-full max-w-md bg-white rounded-3xl p-4 sm:p-5 border border-amber-200/80 shadow-2xl shadow-amber-900/10 hover:shadow-amber-900/15 transition-all group">
              
              {/* Top Certificate Header Ribbon */}
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-full bg-amber-50 border border-amber-200 flex items-center justify-center">
                    <Award className="w-4 h-4 text-amber-700" />
                  </div>
                  <div>
                    <div className="text-[11px] font-extrabold uppercase tracking-wider text-amber-800">
                      Patent Office, Govt. of India
                    </div>
                    <div className="text-xs font-bold text-slate-800">
                      Patent No. 596041
                    </div>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setIsZoomOpen(true)}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0D78B8] hover:text-[#09598a] bg-sky-50 hover:bg-sky-100/80 px-3 py-1.5 rounded-full border border-sky-200 transition-colors"
                  aria-label="Enlarge Patent Certificate"
                >
                  <ZoomIn className="w-3.5 h-3.5" />
                  <span>Enlarge</span>
                </button>
              </div>

              {/* Certificate Image Frame */}
              <div 
                className="relative cursor-pointer overflow-hidden rounded-2xl border border-slate-200/90 bg-gradient-to-b from-amber-50/30 to-white"
                onClick={() => setIsZoomOpen(true)}
              >
                {viewMode === "document" ? (
                  <div className="relative aspect-[1022/1434] w-full">
                    <Image
                      src="/images/patent/patent-document.webp"
                      alt="The Patent Office, Government of India - Official Patent Certificate No. 596041 granted to Rehabunified Private Limited"
                      fill
                      sizes="(max-width: 768px) 100vw, 420px"
                      className="object-contain transition-transform duration-300 group-hover:scale-[1.02]"
                      priority
                    />
                  </div>
                ) : (
                  <div className="relative aspect-[1/1] w-full bg-slate-950 rounded-xl">
                    <Image
                      src="/images/patent/patent-Cert.webp"
                      alt="Resolve360 Granted with Online Physiotherapy Clinical Process Patent 1st in World on 3D Podium"
                      fill
                      sizes="(max-width: 768px) 100vw, 420px"
                      className="object-contain p-2"
                    />
                  </div>
                )}

                {/* Hover overlay hint */}
                <div className="absolute inset-0 bg-slate-900/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                  <div className="bg-white/95 text-slate-900 text-xs font-bold px-3 py-1.5 rounded-full shadow-lg flex items-center gap-1.5">
                    <ZoomIn className="w-3.5 h-3.5 text-[#C70031]" />
                    <span>Click to view full certificate</span>
                  </div>
                </div>
              </div>

              {/* Bottom Verification Details */}
              <div className="mt-3.5 pt-3 border-t border-slate-100 text-center">
                <div className="text-xs font-bold text-slate-800">
                  Patentee: <span className="text-[#C70031]">Rehabunified Private Limited</span>
                </div>
                <div className="text-[11px] text-slate-500 mt-0.5">
                  Application No. 202441062535 · Granted 20 July 2026 · Term: 20 Years
                </div>
                <div className="mt-2 text-[11px] text-emerald-700 font-semibold flex items-center justify-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Officially Verified &amp; Protected Under The Patents Act, 1970</span>
                </div>
              </div>

            </div>

          </div>

        </div>

        {/* Detailed Patented Rehabilitation Technology Box (Matching lines 3294-3300 of the original site) */}
        <div className="bg-white/95 backdrop-blur-md rounded-3xl border border-slate-200/90 p-6 sm:p-10 shadow-lg">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-6">
              <span className="text-xs font-extrabold uppercase tracking-widest text-[#0D78B8] bg-sky-50 px-3.5 py-1 rounded-full border border-sky-100">
                PATENTED REHABILITATION TECHNOLOGY
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#09131A] mt-2 tracking-tight">
                Technology Behind{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C70031] to-[#9C0024]">
                  Personalized Rehabilitation
                </span>
              </h3>
            </div>

            <p className="text-slate-700 text-sm sm:text-base leading-relaxed text-center sm:text-left">
              Resolve360 incorporates patented rehabilitation technology developed for personalized physiotherapy care. The patented system, granted to <strong>Rehabunified Private Limited</strong> under <strong>Patent No. 596041</strong>, is titled <em>“System and method for prognosis, protocol creation, delivery &amp; execution for neuromuscular and musculoskeletal disorders.”</em> Filed under <strong>Application No. 202441062535</strong> on 19 August 2024 and granted on 20 July 2026, the system is designed to support prognosis, rehabilitation protocol creation, delivery and execution for neuromuscular and musculoskeletal disorders. In the context of online physiotherapy, this technology supports structured and personalized rehabilitation protocols that can be delivered and monitored through online consultations, together with qualified physiotherapist guidance, personalized exercises and progress tracking.
            </p>

            {/* 4 Breakthrough Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8 pt-6 border-t border-slate-100">
              {clinicalPillars.map((cp, idx) => (
                <div 
                  key={idx}
                  className="p-4 rounded-2xl bg-slate-50 border border-slate-200/70 hover:bg-white hover:border-[#0D78B8]/40 hover:shadow-xs transition-all"
                >
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#0D78B8] flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-bold text-[#09131A]">
                        {cp.title}
                      </h4>
                      <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                        {cp.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom free trial prompt */}
            <div className="mt-8 text-center pt-4">
              <Link
                href="/book-appointment"
                className="inline-flex items-center gap-2 text-sm font-bold text-[#C70031] hover:text-[#9C0024] bg-rose-50 hover:bg-rose-100/70 px-6 py-2.5 rounded-full border border-rose-200/70 transition-colors"
              >
                <span>Experience Patented Recovery with a Qualified Physiotherapist (₹0 Consultation)</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>

      </div>

      {/* FULL-RESOLUTION CERTIFICATE ZOOM MODAL (LIGHTBOX) */}
      {isZoomOpen && (
        <div 
          className="fixed inset-0 z-50 bg-slate-950/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
          onClick={() => setIsZoomOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label="Enlarged Patent Certificate"
        >
          <div 
            className="relative bg-white rounded-3xl max-w-2xl w-full max-h-[92vh] overflow-y-auto shadow-2xl border border-slate-200 p-5 sm:p-7"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-start justify-between pb-4 mb-4 border-b border-slate-100">
              <div>
                <div className="inline-flex items-center gap-1.5 text-xs font-extrabold text-amber-700 bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
                  <Award className="w-3.5 h-3.5" />
                  <span>The Patent Office, Government of India</span>
                </div>
                <h3 className="text-lg sm:text-xl font-extrabold text-[#09131A] mt-1.5">
                  Patent Certificate No. 596041
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  Granted to Rehabunified Private Limited (Application No. 202441062535)
                </p>
              </div>

              <button
                type="button"
                onClick={() => setIsZoomOpen(false)}
                className="p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
                aria-label="Close Certificate Preview"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* High-Resolution Document Image */}
            <div className="relative aspect-[1022/1434] w-full rounded-2xl overflow-hidden border border-slate-200 shadow-inner bg-slate-50">
              <Image
                src="/images/patent/patent-document.webp"
                alt="Government of India Patent Certificate No. 596041 (Full Resolution)"
                fill
                sizes="(max-width: 1024px) 100vw, 750px"
                className="object-contain"
                priority
              />
            </div>

            {/* Official Legal Grant Summary */}
            <div className="mt-4 p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700 space-y-1.5">
              <div className="font-bold text-slate-900">
                Invention Title:
              </div>
              <p className="italic text-slate-600">
                &ldquo;System and method for prognosis, protocol creation, delivery &amp; execution for neuromuscular and musculoskeletal disorders.&rdquo;
              </p>
              <div className="pt-2 flex flex-wrap items-center justify-between text-[11px] text-slate-500 border-t border-slate-200/60">
                <span>Date of Filing: 19/08/2024</span>
                <span>Date of Grant: 20/07/2026</span>
                <span className="font-semibold text-emerald-700">Term: 20 Years</span>
              </div>
            </div>

            {/* Modal Actions */}
            <div className="mt-5 flex items-center justify-end gap-3 pt-3 border-t border-slate-100">
              <a
                href="/images/patent/patent-document.webp"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 transition-colors"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>Open in New Tab</span>
              </a>
              <button
                type="button"
                onClick={() => setIsZoomOpen(false)}
                className="px-5 py-2 rounded-xl text-xs font-bold text-white bg-[#C70031] hover:bg-[#A30028] shadow-sm transition-colors"
              >
                Close Preview
              </button>
            </div>
          </div>
        </div>
      )}

    </section>
  );
}
