import Link from "next/link";
import { conditions } from "@/data/conditions";
import CTA from "@/components/CTA";
import { ArrowRight, Activity, AlertCircle, ChevronRight, Home, ShieldCheck } from "lucide-react";

export const metadata = {
  title: "Conditions Treated Online | Knee, Back, Neck & Nerve Pain",
  description: "Browse conditions treated by Resolve360 online physiotherapy: Back pain, sciatica, disc bulge, knee osteoarthritis, frozen shoulder, and heel pain. 1:1 care from ₹499.",
  alternates: {
    canonical: "https://resolve360.app/conditions"
  }
};

export default function ConditionsPage() {
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
          <span className="font-semibold text-slate-800">Conditions</span>
        </div>
      </div>

      {/* Conditions Banner */}
      <section className="bg-white py-12 lg:py-16 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-teal-50 text-teal-800 text-xs font-bold px-3 py-1 rounded-full mb-3 border border-teal-200">
            <ShieldCheck className="w-3.5 h-3.5" />
            250+ Conditions Managed
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Conditions Treated with Online Physiotherapy
          </h1>
          <p className="mt-4 text-slate-600 text-base sm:text-lg leading-relaxed">
            Our certified specialists design targeted active therapy protocols for acute injuries, repetitive strain disorders, and chronic spinal ailments.
          </p>
        </div>
      </section>

      {/* Conditions Cards Grid */}
      <section className="py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {conditions.map((condition) => (
              <article 
                key={condition.slug}
                className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-7 shadow-xs hover:shadow-xl hover:border-sky-300 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center mb-5 group-hover:bg-sky-50 group-hover:text-sky-600 transition-colors">
                    <Activity className="w-6 h-6" />
                  </div>

                  <h2 className="text-xl font-bold text-slate-900 group-hover:text-sky-600 transition-colors mb-2.5">
                    <Link href={`/conditions/${condition.slug}`}>
                      {condition.title}
                    </Link>
                  </h2>

                  <p className="text-slate-600 text-sm leading-relaxed mb-5">
                    {condition.shortDescription}
                  </p>

                  {/* Symptoms List */}
                  <div className="pt-4 border-t border-slate-100">
                    <div className="text-[11px] font-bold text-slate-600 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                      <AlertCircle className="w-3.5 h-3.5 text-amber-600" />
                      Recognize The Symptoms:
                    </div>
                    <ul className="space-y-1.5">
                      {condition.symptoms.slice(0, 3).map((sym, i) => (
                        <li key={i} className="text-xs text-slate-700 truncate">
                          • {sym}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-5 mt-5 border-t border-slate-100 flex items-center justify-between">
                  <Link
                    href={`/conditions/${condition.slug}`}
                    className="text-xs font-bold text-sky-600 hover:text-sky-800 flex items-center gap-1 group-hover:translate-x-0.5 transition-transform"
                  >
                    <span>Read Treatment Guide</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                  <Link
                    href="/book-appointment"
                    className="text-xs font-bold bg-slate-50 hover:bg-sky-600 hover:text-white text-slate-700 px-3 py-1.5 rounded-lg border border-slate-200 transition-colors"
                  >
                    Book ₹0
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
