import Link from "next/link";
import Image from "next/image";
import { services } from "@/data/services";
import CTA from "@/components/CTA";
import { ArrowRight, CheckCircle2, ChevronRight, Home, ShieldCheck } from "lucide-react";

export const metadata = {
  title: "Online Physiotherapy Services & Specialities",
  description: "Explore Resolve360's specialized online physiotherapy services: Musculoskeletal, Spine, Neuro, Orthopedic, Post-Surgical, and Women's Health. Care from ₹499.",
  alternates: {
    canonical: "https://resolve360.app/services"
  }
};

export default function ServicesPage() {
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
          <span className="font-semibold text-slate-800">Services</span>
        </div>
      </div>

      {/* Services Banner */}
      <section className="bg-white py-12 lg:py-16 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-sky-50 text-sky-700 text-xs font-bold px-3 py-1 rounded-full mb-3 border border-sky-200">
            <ShieldCheck className="w-3.5 h-3.5" />
            Specialized Tele-Rehabilitation
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Specialized Online Physiotherapy Services
          </h1>
          <p className="mt-4 text-slate-600 text-base sm:text-lg leading-relaxed">
            Delivering evidence-based 1:1 active physiotherapy for musculoskeletal injuries, severe spine conditions, post-operative recoveries, and chronic pain.
          </p>
        </div>
      </section>

      {/* Services Cards Listing */}
      <section className="py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {services.map((service) => (
              <article 
                key={service.slug}
                className="bg-white rounded-3xl border border-slate-200/90 overflow-hidden shadow-xs hover:shadow-xl hover:border-[#0D78B8]/40 transition-all duration-300 flex flex-col justify-between group"
              >
                {/* Top Banner Image with Title Overlay */}
                <Link 
                  href={`/services/${service.slug}`}
                  className="relative w-full aspect-[16/10] overflow-hidden block focus:outline-none"
                >
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  {/* Gradient overlay for text contrast */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent" />
                  
                  {/* Overlay Title */}
                  <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
                    <h2 className="text-base sm:text-lg font-bold text-white leading-snug drop-shadow-sm group-hover:text-sky-200 transition-colors">
                      {service.title}
                    </h2>
                  </div>
                </Link>

                {/* Card Body: Conditions List */}
                <div className="p-6 sm:p-7 flex flex-col justify-between flex-1">
                  <ul className="space-y-3 mb-6 flex-1">
                    {service.conditionsTreated.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-slate-700 text-xs sm:text-sm font-medium">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#0D78B8] flex-shrink-0" />
                        <span className="leading-snug">{item}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Bottom CTA Link */}
                  <div className="pt-2 flex items-center justify-between">
                    <Link
                      href={`/book-appointment?service=${service.slug}`}
                      className="inline-flex items-center gap-1.5 text-sm sm:text-base font-bold text-[#0D78B8] hover:text-[#0A5C8E] group-hover:translate-x-1 transition-all"
                    >
                      <span>Book Consultation →</span>
                    </Link>
                    <Link
                      href={`/services/${service.slug}`}
                      className="text-xs font-semibold text-slate-400 hover:text-slate-600 transition-colors"
                    >
                      Details
                    </Link>
                  </div>
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
