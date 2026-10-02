import Image from "next/image";
import Link from "next/link";
import { services } from "@/data/services";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function Services({ limit = null, showViewAll = true }) {
  const displayServices = limit ? services.slice(0, limit) : services;

  return (
    <section className="py-16 sm:py-20 bg-white border-b border-slate-100" id="services" aria-label="Our Physiotherapy Services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <span className="text-xs uppercase font-extrabold tracking-widest text-[#0D78B8] bg-sky-50 px-3.5 py-1 rounded-full border border-sky-100">
              Our Services
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#09131A] tracking-tight mt-3">
              One-stop solution for all your <span className="text-[#C70031]">rehab needs</span>
            </h2>
            <p className="mt-2 text-slate-600 text-sm sm:text-base leading-relaxed">
              We connect you with a qualified specialist for personalized rehabilitation – online, from wherever you are.
            </p>
            <p className="mt-1 text-slate-500 text-xs sm:text-sm italic font-medium">
              Physiotherapy, Pain Management, Speech Therapy, Women’s Health, Clinical Psychology, Medical Nutrition &amp; more.
            </p>
          </div>

          {showViewAll && (
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-[#0D78B8] hover:text-[#0A5C8E] font-bold text-sm group self-start md:self-end pb-1 whitespace-nowrap"
            >
              <span>Explore All {services.length} Specialities</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          )}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {displayServices.map((service) => (
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
                  <h3 className="text-base sm:text-lg font-bold text-white leading-snug drop-shadow-sm group-hover:text-sky-200 transition-colors">
                    {service.title}
                  </h3>
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
                <div className="pt-2">
                  <Link
                    href={`/book-appointment?service=${service.slug}`}
                    className="inline-flex items-center gap-1.5 text-sm sm:text-base font-bold text-[#0D78B8] hover:text-[#0A5C8E] group-hover:translate-x-1 transition-all"
                  >
                    <span>Book Consultation →</span>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
