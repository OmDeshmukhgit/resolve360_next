import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { services, getServiceBySlug } from "@/data/services";
import { conditions } from "@/data/conditions";
import BookingForm from "@/components/BookingForm";
import CTA from "@/components/CTA";
import { 
  ChevronRight, 
  Home, 
  CheckCircle2, 
  ShieldCheck, 
  Sparkles, 
  Calendar, 
  ArrowRight,
  Clock
} from "lucide-react";

export async function generateStaticParams() {
  return services.map((s) => ({
    slug: s.slug
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return {
      title: "Service Not Found"
    };
  }

  return {
    title: service.metaTitle,
    description: service.metaDescription,
    alternates: {
      canonical: `https://resolve360.app/services/${service.slug}`
    },
    openGraph: {
      title: service.metaTitle,
      description: service.metaDescription,
      url: `https://resolve360.app/services/${service.slug}`,
      type: "article",
      images: [{ url: service.image, alt: service.title }]
    }
  };
}

export default async function ServiceDetailPage({ params }) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  // Find related conditions
  const relatedConditions = conditions.filter(c => c.relatedServiceSlug === service.slug);

  // Structured Data Schema for Service
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": service.title,
    "serviceType": service.category,
    "description": service.fullDescription,
    "provider": {
      "@type": "MedicalBusiness",
      "name": "Resolve360",
      "url": "https://resolve360.app"
    },
    "areaServed": ["India", "United States", "United Kingdom", "Worldwide"]
  };

  return (
    <div className="bg-slate-50 min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      {/* Breadcrumb Navigation */}
      <div className="bg-white border-b border-slate-200/80 py-4 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex items-center gap-2 text-xs text-slate-500">
          <Link href="/" className="hover:text-slate-800 flex items-center gap-1">
            <Home className="w-3.5 h-3.5" />
            <span>Home</span>
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <Link href="/services" className="hover:text-slate-800">
            Services
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span className="font-semibold text-slate-800 truncate">{service.title}</span>
        </div>
      </div>

      {/* Hero Section of Service */}
      <section className="bg-white py-12 lg:py-16 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 bg-sky-50 text-sky-700 text-xs font-bold px-3 py-1 rounded-full border border-sky-200">
                <ShieldCheck className="w-3.5 h-3.5" />
                {service.category}
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
                {service.title}
              </h1>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                {service.fullDescription}
              </p>

              <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-slate-700 pt-2">
                <span className="flex items-center gap-1.5 bg-slate-100 px-3 py-1.5 rounded-lg">
                  <Clock className="w-4 h-4 text-sky-600" />
                  30-45 Min Video Calls
                </span>
                <span className="flex items-center gap-1.5 bg-emerald-50 text-emerald-800 px-3 py-1.5 rounded-lg border border-emerald-200/60">
                  <Sparkles className="w-4 h-4 text-emerald-600" />
                  1st Consultation ₹0 Free
                </span>
              </div>
            </div>

            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-3xl bg-gradient-to-br from-sky-50 to-teal-50 border border-sky-100 p-8 flex items-center justify-center shadow-xl">
                <Image
                  src={service.image}
                  alt={service.title}
                  width={220}
                  height={220}
                  className="object-contain drop-shadow-md"
                  priority
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Main Content & Booking Form Grid */}
      <section className="py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-10">
              
              {/* Clinical Benefits */}
              <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs">
                <h2 className="text-2xl font-bold text-slate-900 mb-5">
                  Core Clinical Highlights &amp; Benefits
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {service.benefits.map((b, i) => (
                    <div key={i} className="flex items-start gap-3 p-3 bg-slate-50 rounded-xl border border-slate-100">
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm text-slate-700 font-medium">{b}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Conditions Treated in this Service */}
              <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs">
                <h2 className="text-2xl font-bold text-slate-900 mb-5">
                  Pathologies &amp; Conditions Treated
                </h2>
                <ul className="space-y-3">
                  {service.conditionsTreated.map((cond, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm text-slate-700 pb-2 border-b border-slate-100 last:border-b-0">
                      <div className="w-2 h-2 rounded-full bg-sky-500" />
                      <span>{cond}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Related Detailed Condition Guides */}
              {relatedConditions.length > 0 && (
                <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs">
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">
                    Related Condition Guides
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-600 mb-4">
                    Explore in-depth recovery protocols for specific conditions treated under this specialty:
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {relatedConditions.map((cond) => (
                      <Link
                        key={cond.slug}
                        href={`/conditions/${cond.slug}`}
                        className="p-3.5 bg-slate-50 hover:bg-sky-50 rounded-xl border border-slate-200 hover:border-sky-300 transition-colors flex items-center justify-between group"
                      >
                        <span className="text-xs font-bold text-slate-800 group-hover:text-sky-700">
                          {cond.title}
                        </span>
                        <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-sky-600 group-hover:translate-x-0.5 transition-transform" />
                      </Link>
                    ))}
                  </div>
                </div>
              )}

            </div>

            {/* Right Booking Column */}
            <div className="lg:col-span-5">
              <div className="sticky top-24">
                <BookingForm />
              </div>
            </div>

          </div>
        </div>
      </section>

      <CTA />
    </div>
  );
}
