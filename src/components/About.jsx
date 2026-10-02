"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  Check, 
  ShieldCheck, 
  ArrowRight, 
  Video, 
  FileText, 
  Smartphone,
  CheckCircle2,
  XCircle,
  Sparkles,
  Users,
  Activity,
  Clock,
  Award
} from "lucide-react";

export default function About() {
  const [activeTab, setActiveTab] = useState("session"); // "session" | "platform"

  const steps = [
    {
      num: "01",
      title: "1-on-1 Clinical Video Evaluation",
      desc: "Connect securely with a licensed specialist who assesses joint movement, pain vectors, and medical history over high-definition video.",
      icon: Video,
      color: "text-[#0D78B8]",
      bg: "bg-sky-50",
      border: "border-sky-100"
    },
    {
      num: "02",
      title: "Patented Custom Treatment Protocol",
      desc: "Receive an individualized recovery plan engineered using our Indian Patent #596041 methodology to target root biomechanical causes.",
      icon: FileText,
      color: "text-[#C70031]",
      bg: "bg-rose-50",
      border: "border-rose-100"
    },
    {
      num: "03",
      title: "Live Guided Exercise & App Tracking",
      desc: "Perform exercises with real-time posture correction during calls, and track daily adherence with HD exercise videos on our mobile app.",
      icon: Smartphone,
      color: "text-emerald-600",
      bg: "bg-emerald-50",
      border: "border-emerald-100"
    }
  ];

  const comparisonItems = [
    {
      feature: "Commute & Convenience",
      traditional: "Travel in pain through traffic; 30-45 mins waiting room delay",
      resolve: "Instant 1-click access from your living room at your chosen time"
    },
    {
      feature: "Clinical Attention",
      traditional: "Therapist juggling 3-4 patients at once; passive unsupervised machines",
      resolve: "100% dedicated 1-on-1 focus for the entire 30-45 minute session"
    },
    {
      feature: "Treatment Focus",
      traditional: "Temporary symptom relief with heat pads, ultrasound & TENS units",
      resolve: "Active neuromuscular re-education & strength training to fix the root cause"
    },
    {
      feature: "Adherence & Support",
      traditional: "Photocopied sheet with zero daily follow-up or form monitoring",
      resolve: "Mobile app with HD video guides, daily reminders & direct therapist chat"
    }
  ];

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-slate-50 via-white to-slate-50/60 border-b border-slate-200/80 relative overflow-hidden" id="about" aria-label="About Online Physiotherapy">
      {/* Background glow accents */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-gradient-to-r from-sky-100/40 via-rose-100/30 to-purple-100/30 blur-3xl pointer-events-none -z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Heading */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 bg-[#FCEFF2] text-[#C70031] text-xs font-bold px-4 py-1.5 rounded-full mb-3 border border-[#F5C2CD] shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-[#C70031] animate-pulse" />
            <span>Active Telerehabilitation • Live 1-on-1 Care</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#09131A] tracking-tight">
            What is{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C70031] via-[#E53935] to-[#9C0024]">
              Online Physiotherapy?
            </span>
          </h2>

          <p className="mt-4 text-slate-600 text-base sm:text-lg leading-relaxed">
            Online physiotherapy is a live video consultation with a qualified senior physiotherapist who assesses your condition, analyzes your movement in real time, and guides you through <strong>personalized active exercises and rehabilitation</strong>—all from the comfort of your home.
          </p>
        </div>

        {/* Main 2-Column Feature Area */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-16">
          
          {/* Visual Column (Widescreen Showcase Frame) */}
          <div className="lg:col-span-7 flex flex-col">
            
            {/* Tab Selector */}
            <div className="flex items-center justify-between gap-2 mb-3">
              <div className="inline-flex p-1 bg-slate-100/90 rounded-xl border border-slate-200">
                <button
                  type="button"
                  onClick={() => setActiveTab("session")}
                  className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all ${
                    activeTab === "session"
                      ? "bg-white text-[#09131A] shadow-xs"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  <Activity className="w-3.5 h-3.5 text-[#C70031]" />
                  <span>Live Consultation in Action</span>
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab("platform")}
                  className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all ${
                    activeTab === "platform"
                      ? "bg-white text-[#09131A] shadow-xs"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  <Award className="w-3.5 h-3.5 text-[#0D78B8]" />
                  <span>Platform Overview</span>
                </button>
              </div>

              <span className="hidden sm:inline-flex items-center gap-1.5 text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                100% Full-View Fidelity
              </span>
            </div>

            {/* Video Call Studio Frame (Uncropped, Full Widescreen Display) */}
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border border-slate-200/90 bg-white shadow-xl hover:shadow-2xl transition-all duration-300">
              
              {/* Studio Window Bar */}
              <div className="bg-slate-900 text-slate-300 px-4 py-2.5 flex items-center justify-between text-xs border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-500 inline-block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500 inline-block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 inline-block" />
                  </div>
                  <span className="ml-2 font-mono text-[11px] text-slate-400 hidden sm:inline">
                    resolve360://telerehab-session-encrypted
                  </span>
                </div>
                <div className="flex items-center gap-3 text-[11px]">
                  <span className="flex items-center gap-1 text-emerald-400 font-semibold">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                    1080p HD Live Call
                  </span>
                  <span className="text-slate-400 hidden sm:inline">Latency: 14ms</span>
                </div>
              </div>

              {/* Responsive Widescreen Image Container */}
              <div className="relative aspect-[16/9] w-full bg-slate-100 overflow-hidden">
                {activeTab === "session" ? (
                  <Image
                    src="/images/hero/hero-physio.webp"
                    alt="Patient performing active physical therapy exercise at home guided by a physiotherapist on live video"
                    fill
                    sizes="(max-width: 1024px) 100vw, 750px"
                    className="object-cover object-center transition-transform duration-500 hover:scale-[1.01]"
                    priority
                  />
                ) : (
                  <Image
                    src="/images/hero/hero-banner.jpg"
                    alt="Resolve360 - India's Leading Online Physiotherapy Platform with 50,000+ patients treated"
                    fill
                    sizes="(max-width: 1024px) 100vw, 750px"
                    className="object-contain bg-slate-950/5 transition-transform duration-500 hover:scale-[1.01]"
                    priority
                  />
                )}

                {/* Floating Micro-Badge Top Left (Non-Intrusive) */}
                <div className="absolute top-3 left-3 bg-slate-900/80 backdrop-blur-md text-white text-[11px] font-bold px-3 py-1.5 rounded-full flex items-center gap-1.5 border border-white/20 shadow-md">
                  <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse" />
                  <span>1:1 Dedicated Tele-Rehab</span>
                </div>

                {/* Floating Micro-Badge Bottom Right */}
                <div className="absolute bottom-3 right-3 bg-white/90 backdrop-blur-md text-slate-900 text-[11px] font-bold px-3 py-1.5 rounded-full flex items-center gap-1.5 border border-white/80 shadow-md">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Real-time Biomechanical Alignment</span>
                </div>
              </div>

              {/* Call Controls & Quality Metrics Footer Bar */}
              <div className="bg-slate-50 px-4 py-3 border-t border-slate-200/80 flex flex-wrap items-center justify-between gap-3 text-xs">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-slate-800">
                    {activeTab === "session" 
                      ? "Active Consultation: Shoulder & Spine Mobility" 
                      : "Rehabunified Private Limited — Certified Telerehabilitation"}
                  </span>
                </div>
                <div className="flex items-center gap-2 text-slate-500 text-[11px]">
                  <span className="inline-flex items-center gap-1 text-slate-700 font-semibold">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#C70031]" />
                    HIPAA &amp; DISHA Compliant
                  </span>
                </div>
              </div>

            </div>

            {/* Quick 3-Pillar Highlight Under Image */}
            <div className="grid grid-cols-3 gap-3 mt-4 text-center">
              <div className="bg-white rounded-xl p-3 border border-slate-200/80 shadow-2xs">
                <div className="text-lg sm:text-xl font-extrabold text-[#09131A]">50,000+</div>
                <div className="text-[11px] text-slate-500 font-medium">Patients Treated</div>
              </div>
              <div className="bg-white rounded-xl p-3 border border-slate-200/80 shadow-2xs">
                <div className="text-lg sm:text-xl font-extrabold text-[#C70031]">₹499</div>
                <div className="text-[11px] text-slate-500 font-medium">Starting / Session</div>
              </div>
              <div className="bg-white rounded-xl p-3 border border-slate-200/80 shadow-2xs">
                <div className="text-lg sm:text-xl font-extrabold text-amber-600">4.9 ★</div>
                <div className="text-[11px] text-slate-500 font-medium">Google Rating</div>
              </div>
            </div>

          </div>

          {/* Explanation & Clinical Advantage Column */}
          <div className="lg:col-span-5 space-y-6">
            
            <div>
              <span className="text-xs font-extrabold uppercase tracking-wider text-[#0D78B8]">
                Evidence-Informed Clinical Methodology
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#09131A] tracking-tight mt-1">
                Active Movement That Puts You in Control
              </h3>
            </div>

            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              Traditional clinics frequently rely on passive machines (ultrasound wands, heating pads, TENS currents) that temporarily soothe symptoms without fixing the root cause.
            </p>

            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              Resolve360 embraces modern clinical rehabilitation guidelines: <strong>active movement, neuromuscular re-education, and progressive strengthening</strong>. Because you learn and practice the exercises inside your own home environment, recovery is faster, habits are retained, and long-term recurrence rates plummet.
            </p>

            {/* Micro Feature List */}
            <div className="space-y-3 pt-1">
              {[
                { title: "No stressful traffic commutes", desc: "Save hours of painful travel and clinic waiting" },
                { title: "1-on-1 undivided doctor attention", desc: "Full 30 to 45 minutes focused solely on your recovery" },
                { title: "Long-term self-management", desc: "Learn movement mechanics you maintain for a lifetime" },
                { title: "Worldwide scheduling", desc: "Care coordinated across India, USA, UK, UAE & 18+ nations" }
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-3 bg-white p-3 rounded-xl border border-slate-200/70 shadow-2xs">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                  </div>
                  <div>
                    <div className="text-xs sm:text-sm font-bold text-[#09131A]">{item.title}</div>
                    <div className="text-[11px] sm:text-xs text-slate-500">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Link & Free Consultation Button */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <Link
                href="/book-appointment"
                className="resolve-btn px-6 py-3 text-sm font-bold shadow-md hover:shadow-lg hover:scale-[1.02] text-center"
              >
                <span>Book Free ₹0 Consultation</span>
                <ArrowRight className="w-4 h-4 ml-1.5" />
              </Link>
              
              <Link
                href="#services"
                className="text-center text-xs font-bold text-slate-600 hover:text-[#0D78B8] py-2 px-3 transition-colors"
              >
                Explore Specialties ↓
              </Link>
            </div>

          </div>

        </div>

        {/* Traditional Clinic vs Resolve360 Comparison Card */}
        <div className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-8 shadow-sm mb-16">
          <div className="max-w-3xl mx-auto text-center mb-6">
            <span className="text-xs font-extrabold uppercase tracking-wider text-[#C70031] bg-rose-50 px-3 py-1 rounded-full border border-rose-100">
              The Difference is Clear
            </span>
            <h3 className="text-xl sm:text-2xl font-extrabold text-[#09131A] mt-2">
              Traditional Physical Therapy Clinics vs. Resolve360 Active Telerehab
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            
            {/* Traditional Clinics */}
            <div className="p-5 sm:p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-4">
              <div className="flex items-center gap-2 text-rose-700 font-extrabold text-sm sm:text-base">
                <XCircle className="w-5 h-5 text-rose-500 flex-shrink-0" />
                <span>Traditional Offline Clinic</span>
              </div>
              <ul className="space-y-3 text-xs sm:text-sm text-slate-600">
                <li className="flex items-start gap-2">
                  <span className="text-rose-500 font-bold">✕</span>
                  <span>Painful commutes through traffic &amp; long waiting room delays</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-rose-500 font-bold">✕</span>
                  <span>Passive machines (TENS, heat pads) that only mask symptoms</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-rose-500 font-bold">✕</span>
                  <span>Hurried 5-minute check-ins; therapist divided among multiple patients</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-rose-500 font-bold">✕</span>
                  <span>Expensive packaged deals with zero daily habit reinforcement</span>
                </li>
              </ul>
            </div>

            {/* Resolve360 Active Telerehab */}
            <div className="p-5 sm:p-6 rounded-2xl bg-gradient-to-br from-emerald-50/60 to-sky-50/60 border border-emerald-200/80 space-y-4 shadow-xs">
              <div className="flex items-center gap-2 text-emerald-800 font-extrabold text-sm sm:text-base">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                <span>Resolve360 Active Online Physiotherapy</span>
              </div>
              <ul className="space-y-3 text-xs sm:text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <span className="text-emerald-600 font-bold">✓</span>
                  <span>Start your session in 1 click from home; zero travel fatigue</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-600 font-bold">✓</span>
                  <span>Active exercise therapy targeting the root biomechanical cause</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-600 font-bold">✓</span>
                  <span>100% undivided attention from a senior specialist for full 30-45 mins</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-600 font-bold">✓</span>
                  <span>Care plans starting at ₹499 with HD app guides &amp; daily tracking</span>
                </li>
              </ul>
            </div>

          </div>
        </div>

        {/* 3 Step Process: How It Works */}
        <div className="text-center mb-8">
          <span className="text-xs font-extrabold uppercase tracking-wider text-slate-500">
            Simple 3-Step Journey
          </span>
          <h3 className="text-xl sm:text-2xl font-extrabold text-[#09131A] mt-1">
            How Your Online Physiotherapy Journey Works
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((s) => {
            const Icon = s.icon;
            return (
              <div 
                key={s.num}
                className="bg-white rounded-2xl p-6 border border-slate-200/90 hover:border-[#0D78B8] hover:shadow-lg transition-all duration-200 relative group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span aria-hidden="true" className="text-3xl font-black text-slate-200 group-hover:text-[#C70031] transition-colors">
                      {s.num}
                    </span>
                    <div className={`w-11 h-11 rounded-xl ${s.bg} ${s.color} border ${s.border} flex items-center justify-center shadow-2xs`}>
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>
                  <h4 className="text-base font-bold text-[#09131A] mb-2">
                    {s.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {s.desc}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center text-xs font-bold text-[#0D78B8]">
                  <span>Step {s.num} Guided Care</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
