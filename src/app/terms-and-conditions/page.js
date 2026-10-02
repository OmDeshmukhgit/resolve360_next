import Link from "next/link";
import { siteConfig } from "@/data/siteConfig";
import { Home, ChevronRight, ShieldCheck } from "lucide-react";

export const metadata = {
  title: "Terms and Conditions",
  description: "Terms and Conditions for Resolve360 online physiotherapy and telehealth rehabilitation services operated by Rehabunified Private Limited.",
  alternates: {
    canonical: "https://resolve360.app/terms-and-conditions"
  }
};

export default function TermsPage() {
  return (
    <div className="bg-slate-50 min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs text-slate-500 mb-6">
          <Link href="/" className="hover:text-slate-800 flex items-center gap-1">
            <Home className="w-3.5 h-3.5" />
            <span>Home</span>
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span className="font-semibold text-slate-800">Terms and Conditions</span>
        </div>

        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm space-y-8">
          <div>
            <div className="inline-flex items-center gap-1.5 bg-sky-50 text-sky-700 text-xs font-bold px-3 py-1 rounded-full mb-3 border border-sky-200">
              <ShieldCheck className="w-3.5 h-3.5" />
              Legal Agreement
            </div>
            <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">
              Terms &amp; Conditions
            </h1>
            <p className="text-xs text-slate-500 mt-1">
              Last updated: October 2026 • Operative Entity: Rehabunified Private Limited
            </p>
          </div>

          <section className="space-y-3 text-slate-700 text-sm leading-relaxed">
            <h2 className="text-lg font-bold text-slate-900">1. Acceptance of Terms</h2>
            <p>
              By accessing or using the website ({siteConfig.url}), mobile application, or any tele-rehabilitation services provided by Rehabunified Private Limited (doing business as &ldquo;Resolve360&rdquo;), you acknowledge and agree to be bound by these Terms and Conditions.
            </p>
          </section>

          <section className="space-y-3 text-slate-700 text-sm leading-relaxed">
            <h2 className="text-lg font-bold text-slate-900">2. Telehealth &amp; Clinical Scope</h2>
            <p>
              Resolve360 provides remote active physiotherapy consultations and structured exercise programs through certified practitioners. Tele-physiotherapy is not an emergency medical service. If you experience severe chest pain, shortness of breath, sudden numbness, or acute traumatic injury, you must seek immediate emergency medical care.
            </p>
          </section>

          <section className="space-y-3 text-slate-700 text-sm leading-relaxed">
            <h2 className="text-lg font-bold text-slate-900">3. Intellectual Property &amp; Patent Rights</h2>
            <p>
              All proprietary systems, methodologies, mobile interfaces, and recovery workflows—including the granted Indian Patent No. 596041 titled &ldquo;System and method for prognosis, protocol creation, delivery &amp; execution for neuromuscular and musculoskeletal disorders&rdquo;—are the exclusive intellectual property of Rehabunified Private Limited. Any unauthorized reproduction, scraping, or reverse engineering is strictly prohibited.
            </p>
          </section>

          <section className="space-y-3 text-slate-700 text-sm leading-relaxed">
            <h2 className="text-lg font-bold text-slate-900">4. Cancellations &amp; Rescheduling</h2>
            <p>
              Patients may reschedule consultations with at least 4 hours advance notice through our care coordinator or mobile application. Free introductory assessments are limited to one per patient.
            </p>
          </section>

          <section className="space-y-3 text-slate-700 text-sm leading-relaxed">
            <h2 className="text-lg font-bold text-slate-900">5. Governing Law</h2>
            <p>
              These Terms shall be governed by and construed in accordance with the laws of India, with exclusive jurisdiction in the courts of Bengaluru, Karnataka.
            </p>
          </section>
        </div>

      </div>
    </div>
  );
}
