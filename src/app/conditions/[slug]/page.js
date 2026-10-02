import Link from "next/link";
import { notFound } from "next/navigation";
import { conditions, getConditionBySlug } from "@/data/conditions";
import { getServiceBySlug } from "@/data/services";
import BookingForm from "@/components/BookingForm";
import CTA from "@/components/CTA";
import { 
  ChevronRight, 
  Home, 
  CheckCircle2, 
  AlertCircle, 
  HelpCircle, 
  ArrowRight,
  ShieldCheck,
  Stethoscope
} from "lucide-react";

export async function generateStaticParams() {
  return conditions.map((c) => ({
    slug: c.slug
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const condition = getConditionBySlug(slug);

  if (!condition) {
    return { title: "Condition Not Found" };
  }

  return {
    title: condition.metaTitle,
    description: condition.metaDescription,
    alternates: {
      canonical: `https://resolve360.app/conditions/${condition.slug}`
    },
    openGraph: {
      title: condition.metaTitle,
      description: condition.metaDescription,
      url: `https://resolve360.app/conditions/${condition.slug}`,
      type: "article"
    }
  };
}

export default async function ConditionDetailPage({ params }) {
  const { slug } = await params;
  const condition = getConditionBySlug(slug);

  if (!condition) {
    notFound();
  }

  const relatedService = condition.relatedServiceSlug ? getServiceBySlug(condition.relatedServiceSlug) : null;

  // MedicalWebPage Schema
  const conditionSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    "name": condition.h1,
    "description": condition.overview,
    "url": `https://resolve360.app/conditions/${condition.slug}`,
    "mainEntity": {
      "@type": "MedicalCondition",
      "name": condition.title,
      "signOrSymptom": condition.symptoms.map(s => ({ "@type": "MedicalSignOrSymptom", "name": s })),
      "cause": condition.causes.map(c => ({ "@type": "MedicalCause", "name": c }))
    }
  };

  return (
    <div className="bg-slate-50 min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(conditionSchema) }}
      />

      {/* Breadcrumb Navigation */}
      <div className="bg-white border-b border-slate-200/80 py-4 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex items-center gap-2 text-xs text-slate-500">
          <Link href="/" className="hover:text-slate-800 flex items-center gap-1">
            <Home className="w-3.5 h-3.5" />
            <span>Home</span>
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <Link href="/conditions" className="hover:text-slate-800">
            Conditions
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span className="font-semibold text-slate-800 truncate">{condition.title}</span>
        </div>
      </div>

      {/* Header Section */}
      <section className="bg-white py-12 lg:py-16 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 max-w-4xl">
          <div className="inline-flex items-center gap-2 bg-sky-50 text-sky-700 text-xs font-bold px-3 py-1 rounded-full mb-3 border border-sky-200">
            <ShieldCheck className="w-3.5 h-3.5" />
            Clinical Recovery Guide
          </div>
          
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            {condition.h1}
          </h1>

          <p className="mt-5 text-base sm:text-lg text-slate-600 leading-relaxed">
            {condition.overview}
          </p>

          {/* Related Service Badge */}
          {relatedService && (
            <div className="mt-6 pt-5 border-t border-slate-100 flex flex-wrap items-center gap-3">
              <span className="text-xs font-semibold text-slate-500">Recommended Specialty:</span>
              <Link
                href={`/services/${relatedService.slug}`}
                className="inline-flex items-center gap-1.5 bg-sky-50 hover:bg-sky-100 text-sky-800 text-xs font-bold px-3 py-1.5 rounded-lg border border-sky-200 transition-colors"
              >
                <Stethoscope className="w-3.5 h-3.5 text-sky-600" />
                <span>{relatedService.title} →</span>
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* Main Content & Booking Column */}
      <section className="py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-10">
              
              {/* Symptoms Card */}
              <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs">
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2.5">
                  <AlertCircle className="w-5 h-5 text-amber-500" />
                  <span>Common Symptoms &amp; Indicators</span>
                </h2>
                <ul className="space-y-2.5">
                  {condition.symptoms.map((s, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-sm text-slate-700">
                      <div className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 flex-shrink-0" />
                      <span>{s}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Causes Card */}
              <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs">
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4">
                  Root Causes &amp; Risk Factors
                </h2>
                <ul className="space-y-2.5">
                  {condition.causes.map((c, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-sm text-slate-700">
                      <div className="w-1.5 h-1.5 rounded-full bg-sky-500 mt-2 flex-shrink-0" />
                      <span>{c}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* How Physio Helps */}
              <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs">
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4">
                  How Online Physiotherapy Treats {condition.title}
                </h2>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  {condition.howPhysioHelps}
                </p>
                <div className="mt-4 p-4 bg-emerald-50 rounded-xl border border-emerald-200/60 text-emerald-900 text-xs sm:text-sm font-medium flex items-center gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                  <span>
                    Clinically guided under Indian Patent No. 596041 for precision rehabilitation protocol creation.
                  </span>
                </div>
              </div>

              {/* FAQs for this Condition */}
              {condition.faqs && condition.faqs.length > 0 && (
                <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs">
                  <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                    <HelpCircle className="w-5 h-5 text-sky-600" />
                    <span>Frequently Asked Questions</span>
                  </h2>
                  <div className="space-y-4">
                    {condition.faqs.map((faq, i) => (
                      <div key={i} className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                        <h3 className="text-sm font-bold text-slate-900 mb-2">
                          {faq.question}
                        </h3>
                        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
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
