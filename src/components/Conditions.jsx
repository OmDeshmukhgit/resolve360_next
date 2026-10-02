import Link from "next/link";
import { conditions } from "@/data/conditions";
import { ArrowRight, Activity, AlertCircle } from "lucide-react";

export default function Conditions({ limit = 8, showViewAll = true }) {
  const displayConditions = limit ? conditions.slice(0, limit) : conditions;

  return (
    <section className="py-16 sm:py-20 bg-[#F8FAFC] border-b border-slate-200/80" id="conditions" aria-label="Conditions Treated">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Heading matching original Resolve360 */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <span className="text-xs uppercase font-extrabold tracking-widest text-[#0D78B8] bg-sky-50 px-3.5 py-1 rounded-full border border-sky-100">
              Targeted Rehabilitation
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#09131A] tracking-tight mt-3">
              Online Physiotherapy for a Range of Conditions
            </h2>
            <p className="mt-2 text-slate-600 text-sm sm:text-base leading-relaxed">
              From acute joint injuries to decades of chronic back or neck discomfort, our active rehabilitation protocols deliver targeted relief without surgery or medication reliance.
            </p>
          </div>

          {showViewAll && (
            <Link
              href="/conditions"
              className="inline-flex items-center gap-2 text-[#0D78B8] hover:text-[#0A5C8E] font-bold text-sm group self-start md:self-end pb-1 whitespace-nowrap"
            >
              <span>View All Conditions</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          )}
        </div>

        {/* Conditions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {displayConditions.map((condition) => (
            <article 
              key={condition.slug}
              className="bg-white rounded-2xl border border-slate-200/90 p-5 shadow-2xs hover:shadow-lg hover:border-[#0D78B8] transition-all duration-200 flex flex-col justify-between group"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-sky-50 text-[#0D78B8] flex items-center justify-center mb-4 group-hover:bg-rose-50 group-hover:text-[#C70031] transition-colors">
                  <Activity className="w-5 h-5" />
                </div>

                <h3 className="text-base font-bold text-[#09131A] group-hover:text-[#0D78B8] transition-colors mb-2">
                  <Link href={`/conditions/${condition.slug}`}>
                    {condition.title}
                  </Link>
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed mb-4 line-clamp-3">
                  {condition.shortDescription}
                </p>

                {/* Symptoms Preview */}
                <div className="space-y-1.5 pt-3 border-t border-slate-100">
                  <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1">
                    Key Symptoms:
                  </div>
                  {condition.symptoms.slice(0, 2).map((symp, i) => (
                    <div key={i} className="text-[11px] text-slate-700 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C70031] flex-shrink-0" />
                      <span className="truncate font-medium">{symp}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between">
                <Link
                  href={`/conditions/${condition.slug}`}
                  className="text-xs font-bold text-[#0D78B8] hover:text-[#0A5C8E] flex items-center gap-1 group-hover:translate-x-0.5 transition-transform"
                >
                  <span>Explore Protocol</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <Link
                  href="/book-appointment"
                  className="text-[11px] font-bold text-[#C70031] hover:text-[#A30028]"
                >
                  Book Free
                </Link>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
