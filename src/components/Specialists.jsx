import Image from "next/image";
import Link from "next/link";
import { specialists } from "@/data/specialists";
import { Calendar, ArrowRight, ShieldCheck, CheckCircle2 } from "lucide-react";

export default function Specialists({ limit = 6, showViewAll = true }) {
  const displaySpecialists = limit ? specialists.slice(0, limit) : specialists;

  return (
    <section className="py-16 sm:py-20 bg-white border-b border-slate-100" id="specialists" aria-label="Our Certified Physiotherapists">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <span className="text-xs uppercase font-extrabold tracking-widest text-[#C70031] bg-rose-50 px-3.5 py-1 rounded-full border border-rose-100">
              Expert Clinical Team
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#09131A] tracking-tight mt-3">
              Meet our specialists
            </h2>
            <p className="mt-2 text-slate-600 text-sm sm:text-base leading-relaxed">
              Experienced and U.K. Trained Therapists. Every specialist on Resolve360 is IAP-certified with postgraduate qualifications, hospital training, and an average of 10+ years of dedicated clinical experience.
            </p>
          </div>

          {showViewAll && (
            <Link
              href="/specialists"
              className="inline-flex items-center gap-2 text-[#0D78B8] hover:text-[#0A5C8E] font-bold text-sm group self-start md:self-end pb-1 whitespace-nowrap"
            >
              <span>View All Specialists</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          )}
        </div>

        {/* Specialists Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {displaySpecialists.map((doc) => (
            <article 
              key={doc.id}
              className="bg-white rounded-2xl border border-slate-200/90 overflow-hidden shadow-2xs hover:shadow-xl hover:border-[#0D78B8] transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="p-6">
                
                {/* Doctor Avatar & Experience Badge */}
                <div className="flex items-center gap-4 mb-4">
                  <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-2xl overflow-hidden bg-slate-100 border border-slate-200 flex-shrink-0">
                    <Image
                      src={doc.image}
                      alt={doc.name}
                      fill
                      sizes="80px"
                      className="object-cover object-top group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#09131A] group-hover:text-[#0D78B8] transition-colors leading-snug">
                      {doc.name}
                    </h3>
                    <div className="text-xs font-semibold text-[#0D78B8] mt-0.5">
                      {doc.specialty}
                    </div>
                    <div className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full mt-1 border border-emerald-200/60">
                      <ShieldCheck className="w-3 h-3 text-emerald-600" />
                      <span>{doc.experience}</span>
                    </div>
                  </div>
                </div>

                <div className="text-xs font-semibold text-slate-700 bg-slate-50 p-2.5 rounded-xl border border-slate-100 mb-3">
                  🎓 {doc.qualifications}
                </div>

                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4 line-clamp-3">
                  {doc.bio}
                </p>

                {/* Focus Areas */}
                <div className="border-t border-slate-100 pt-3">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-2">
                    Key Specialties:
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {doc.focusAreas.map((area, i) => (
                      <span 
                        key={i} 
                        className="text-[11px] font-medium bg-slate-100 text-slate-700 px-2.5 py-1 rounded-md"
                      >
                        {area}
                      </span>
                    ))}
                  </div>
                </div>

              </div>

              {/* Card Footer CTA */}
              <div className="px-6 py-3.5 bg-slate-50 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs text-slate-500 font-medium">1-on-1 Video Rehab</span>
                <Link
                  href={`/book-appointment?doctor=${encodeURIComponent(doc.name)}`}
                  className="text-xs font-bold text-[#C70031] hover:text-[#A30028] flex items-center gap-1"
                >
                  <span>Book Session →</span>
                </Link>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
