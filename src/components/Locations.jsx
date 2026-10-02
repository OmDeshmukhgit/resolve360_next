import Image from "next/image";
import Link from "next/link";
import { globalCountries, majorCities } from "@/data/locations";
import { Globe, MapPin, Clock, ArrowRight, ShieldCheck } from "lucide-react";

export default function Locations() {
  return (
    <section className="py-16 sm:py-20 bg-[#F8FAFC] border-b border-slate-200/80" id="locations" aria-label="Global Availability & Locations">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Heading matching original Resolve360 */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-sky-50 text-[#0D78B8] text-xs font-extrabold px-3.5 py-1 rounded-full mb-3 border border-sky-100">
            <Globe className="w-3.5 h-3.5" />
            <span>Global Telerehabilitation Network</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#09131A] tracking-tight">
            Online Physiotherapy from India, Available Worldwide
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            High-definition 1:1 online physical therapy scheduled to your exact local time zone. Providing affordable, world-class active rehabilitation to patients locally and across 18+ countries.
          </p>
        </div>

        {/* Global Countries Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
          {globalCountries.map((c) => (
            <div 
              key={c.slug}
              className="bg-white rounded-2xl border border-slate-200/90 p-6 shadow-2xs hover:shadow-lg hover:border-[#0D78B8] transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2.5">
                    <span className="text-2xl">{c.flag}</span>
                    <h3 className="text-lg font-bold text-[#09131A]">
                      {c.country}
                    </h3>
                  </div>
                  <div className="relative w-8 h-8 rounded-full overflow-hidden bg-slate-100 border border-slate-200">
                    <Image
                      src={c.image}
                      alt={c.title}
                      fill
                      sizes="32px"
                      className="object-contain"
                    />
                  </div>
                </div>

                <div className="text-xs font-bold text-[#0D78B8] mb-2">
                  {c.title}
                </div>

                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  {c.description}
                </p>

                <div className="space-y-2 pt-3 border-t border-slate-100 text-xs text-slate-600">
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-1.5 font-medium">
                      <Clock className="w-3.5 h-3.5 text-[#0D78B8]" />
                      Timezone Flexibility
                    </span>
                    <span className="font-semibold text-slate-800">{c.timezone}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-1.5 font-medium">
                      <MapPin className="w-3.5 h-3.5 text-[#0D78B8]" />
                      Starting Care Plan
                    </span>
                    <span className="font-semibold text-emerald-700">
                      {c.startingPrice}
                    </span>
                  </div>
                </div>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between">
                <Link
                  href="/book-appointment"
                  className="text-xs font-bold text-[#0D78B8] hover:text-[#0A5C8E] flex items-center gap-1 group"
                >
                  <span>Book in {c.country}</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </Link>
                <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200/60">
                  1st Session ₹0 Free
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Indian Cities Strip */}
        <div className="bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-8 shadow-2xs">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-5 pb-4 border-b border-slate-100">
            <div>
              <h3 className="text-lg font-bold text-[#09131A]">
                India-Wide Online Physiotherapy Coverage
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                Senior post-graduate physiotherapists available across all major metro areas with multi-lingual consultations (English, Hindi, Kannada, Tamil, Telugu, Marathi).
              </p>
            </div>
            <Link
              href="/book-appointment"
              className="text-xs font-bold text-[#C70031] hover:text-[#A30028] whitespace-nowrap self-start sm:self-auto flex items-center gap-1"
            >
              <span>Consult Indian Specialist →</span>
            </Link>
          </div>

          <div className="flex flex-wrap gap-2">
            {majorCities.map((city) => (
              <span
                key={city.name}
                className="text-xs font-medium px-3 py-1.5 rounded-xl border border-slate-200 bg-slate-50 text-slate-700 hover:border-[#0D78B8] hover:text-[#0D78B8] transition-colors"
              >
                {city.name}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
