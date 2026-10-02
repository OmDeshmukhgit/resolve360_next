import { siteConfig } from "@/data/siteConfig";
import { Users, Activity, UserCheck, Star, ShieldCheck, Clock } from "lucide-react";

export default function Stats() {
  const iconMap = {
    "50,000+": Users,
    "250+": Activity,
    "65+": UserCheck,
    "4.9/5": Star,
    "100%": ShieldCheck,
    "15 Min": Clock
  };

  return (
    <section className="bg-slate-900 text-white py-12 lg:py-16 relative overflow-hidden" aria-label="Key Clinical Statistics">
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="text-xs uppercase font-extrabold tracking-widest text-sky-400 mb-2">
            Clinical Excellence & Scale
          </h2>
          <p className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
            Transforming Recovery for Patients Worldwide
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
          {siteConfig.stats.map((stat) => {
            const Icon = iconMap[stat.value] || Activity;
            return (
              <div 
                key={stat.label}
                className="bg-slate-800/80 backdrop-blur-sm border border-slate-700/60 rounded-2xl p-4 sm:p-5 text-center flex flex-col items-center justify-center hover:border-sky-500/50 hover:bg-slate-800 transition-all duration-200 group"
              >
                <div className="w-10 h-10 rounded-xl bg-sky-500/10 text-sky-400 flex items-center justify-center mb-3 group-hover:scale-110 group-hover:bg-sky-500/20 transition-all">
                  <Icon className="w-5 h-5" />
                </div>
                <div className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                  {stat.value}
                </div>
                <div className="text-xs font-semibold text-slate-300 mt-1 line-clamp-2">
                  {stat.label}
                </div>
                <div className="text-[10px] text-sky-400/80 mt-1">
                  {stat.highlight}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
