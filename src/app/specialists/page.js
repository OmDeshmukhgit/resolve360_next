import Image from "next/image";
import Link from "next/link";
import { specialists } from "@/data/specialists";
import CTA from "@/components/CTA";
import { 
  UserCheck, 
  ShieldCheck, 
  Award, 
  Calendar, 
  Languages, 
  ChevronRight, 
  Home 
} from "lucide-react";

export const metadata = {
  title: "Certified Online Physiotherapists & Specialists",
  description: "Meet our licensed, IAP-certified physiotherapists with average 10+ years experience. UK and India trained specialists for spine, neuro, sports, and orthopedic rehab.",
  alternates: {
    canonical: "https://resolve360.app/specialists"
  }
};

export default function SpecialistsPage() {
  return (
    <div className="bg-slate-50 min-h-screen">
      
      {/* Breadcrumb Header */}
      <div className="bg-white border-b border-slate-200/80 py-4 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex items-center gap-2 text-xs text-slate-500">
          <Link href="/" className="hover:text-slate-800 flex items-center gap-1">
            <Home className="w-3.5 h-3.5" />
            <span>Home</span>
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span className="font-semibold text-slate-800">Specialists</span>
        </div>
      </div>

      {/* Banner */}
      <section className="bg-white py-12 lg:py-16 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-sky-50 text-sky-700 text-xs font-bold px-3 py-1 rounded-full mb-3 border border-sky-200">
            <ShieldCheck className="w-3.5 h-3.5" />
            Top 1% Licensed Practitioners
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Our Certified Physiotherapists
          </h1>
          <p className="mt-4 text-slate-600 text-base sm:text-lg leading-relaxed">
            Every clinician on Resolve360 holds postgraduate degrees (M.Pt) and extensive hospital rehabilitation experience. We never assign junior trainees to your recovery.
          </p>
        </div>
      </section>

      {/* Specialists List */}
      <section className="py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {specialists.map((doc) => (
              <article 
                key={doc.id}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-xl hover:border-sky-300 transition-all duration-300 flex flex-col justify-between group"
              >
                <div className="p-6 sm:p-7">
                  
                  {/* Doctor Profile Header */}
                  <div className="flex items-center gap-4 mb-5">
                    <div className="relative w-18 h-18 sm:w-20 sm:h-20 rounded-2xl overflow-hidden bg-slate-100 border-2 border-sky-100 flex-shrink-0">
                      <Image
                        src={doc.image}
                        alt={doc.name}
                        fill
                        sizes="90px"
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div>
                      <h2 className="text-lg font-bold text-slate-900 group-hover:text-sky-600 transition-colors">
                        {doc.name}
                      </h2>
                      <div className="text-xs font-semibold text-sky-700">
                        {doc.specialty}
                      </div>
                      <div className="inline-flex items-center gap-1 text-[11px] font-medium text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full mt-1 border border-emerald-200/60">
                        <ShieldCheck className="w-3 h-3 text-emerald-600" />
                        <span>{doc.experience}</span>
                      </div>
                    </div>
                  </div>

                  {/* Education & Bio */}
                  <div className="space-y-3 mb-5">
                    <div className="text-[11px] font-medium text-slate-600 bg-slate-50 p-2.5 rounded-xl border border-slate-100 leading-relaxed">
                      <strong className="text-slate-800">Qualifications:</strong> {doc.qualifications}
                    </div>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-4">
                      {doc.bio}
                    </p>
                  </div>

                  {/* Languages Spoken */}
                  <div className="flex items-center gap-2 text-xs text-slate-500 mb-4 pb-3 border-b border-slate-100">
                    <Languages className="w-4 h-4 text-sky-600 flex-shrink-0" />
                    <span>Languages: <strong className="text-slate-700">{doc.languages.join(", ")}</strong></span>
                  </div>

                  {/* Focus Areas */}
                  <div>
                    <div className="text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-2">
                      Specialized Expertise:
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {doc.focusAreas.map((f, i) => (
                        <span key={i} className="text-[11px] bg-slate-100 text-slate-700 px-2.5 py-1 rounded-md font-medium">
                          {f}
                        </span>
                      ))}
                    </div>
                  </div>

                </div>

                {/* Card CTA */}
                <div className="p-4 sm:p-5 bg-slate-50 border-t border-slate-100">
                  <Link
                    href="/book-appointment"
                    className="w-full flex items-center justify-center gap-2 bg-sky-600 hover:bg-sky-700 text-white py-3 px-4 rounded-xl font-bold text-xs sm:text-sm shadow-xs transition-colors"
                  >
                    <Calendar className="w-4 h-4" />
                    <span>Book 1:1 Consultation (₹0 Free)</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </div>
  );
}
