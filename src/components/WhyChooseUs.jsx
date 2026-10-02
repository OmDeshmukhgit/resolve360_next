import { 
  UserCheck, 
  Video, 
  FileSpreadsheet, 
  Sparkles, 
  Home, 
  MessageSquareHeart,
  ShieldCheck,
  Award
} from "lucide-react";

export default function WhyChooseUs() {
  const pillars = [
    {
      title: "Qualified Physiotherapists",
      desc: "Every practitioner is IAP-certified with postgraduate Master's degrees (M.Pt) and extensive clinical rehabilitation backgrounds. No junior trainees or non-clinical fitness coaches.",
      icon: UserCheck
    },
    {
      title: "1 on 1 Consultations",
      desc: "Full 30 to 45-minute live interactive video consultations where your therapist observes every repetition, corrects angles, and adjusts resistance in real time.",
      icon: Video
    },
    {
      title: "Personalized Recovery Plans",
      desc: "No cookie-cutter exercises. Your treatment protocol is uniquely designed around your daily posture, workstation ergonomics, pain threshold, and mobility goals.",
      icon: FileSpreadsheet
    },
    {
      title: "Evidence - Informed Approach",
      desc: "We ditch passive heating machines and electrical stimulation in favor of scientifically proven active muscle recruitment and joint stabilization that solves root causes.",
      icon: Sparkles
    },
    {
      title: "Convenient Online Care",
      desc: "Skip long traffic delays, waiting rooms, and mobility struggles. Receive world-class physical therapy at home, in your office, or while traveling abroad.",
      icon: Home
    },
    {
      title: "Ongoing Recovery Support",
      desc: "Recovery doesn't pause between video calls. Enjoy direct WhatsApp and app messaging with your care team to ask questions and report progress daily.",
      icon: MessageSquareHeart
    }
  ];

  const stats = [
    { value: "50,000+", label: "Patients Treated" },
    { value: "65+", label: "Certified Physiotherapists" },
    { value: "4.9/5", label: "Google Patient Rating" },
    { value: "100%", label: "Personalized 1-on-1 Sessions" }
  ];

  return (
    <section className="py-16 sm:py-20 bg-[#F8FAFC] border-b border-slate-200/80" id="why-choose-us" aria-label="Why Choose Resolve360">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Heading */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-rose-50 text-[#C70031] text-xs font-extrabold px-3.5 py-1 rounded-full mb-3 border border-rose-100">
            <Award className="w-3.5 h-3.5" />
            <span>The Resolve360 Clinical Advantage</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#09131A] tracking-tight">
            Why Choose Resolve360 for Online Physiotherapy?
          </h2>
          <p className="mt-3 text-slate-600 text-base sm:text-lg leading-relaxed">
            Combining licensed medical specialists with patented active exercise technology to give you the most convenient, effective rehab experience possible.
          </p>
        </div>

        {/* 6 Grid Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div 
                key={pillar.title}
                className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/90 shadow-2xs hover:shadow-lg hover:border-[#0D78B8] transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-sky-50 text-[#0D78B8] flex items-center justify-center mb-5 border border-sky-100">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-[#09131A] mb-2.5">
                    {pillar.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Authentic Key Stats Strip */}
        <div className="bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-8 shadow-xs">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center divide-y md:divide-y-0 md:divide-x divide-slate-100">
            {stats.map((s, idx) => (
              <div key={s.label} className={idx > 0 ? "pt-4 md:pt-0" : ""}>
                <div className="text-3xl sm:text-4xl font-black text-[#0D78B8] tracking-tight">
                  {s.value}
                </div>
                <div className="text-xs sm:text-sm font-semibold text-slate-600 mt-1">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
