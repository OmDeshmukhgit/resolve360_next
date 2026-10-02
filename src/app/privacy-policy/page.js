import Link from "next/link";
import { siteConfig } from "@/data/siteConfig";
import { Home, ChevronRight, ShieldCheck } from "lucide-react";

export const metadata = {
  title: "Privacy Policy",
  description: "Privacy policy and patient data security standards for Resolve360 online physiotherapy clinic.",
  alternates: {
    canonical: "https://resolve360.app/privacy-policy"
  }
};

export default function PrivacyPage() {
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
          <span className="font-semibold text-slate-800">Privacy Policy</span>
        </div>

        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm space-y-8">
          <div>
            <div className="inline-flex items-center gap-1.5 bg-emerald-50 text-emerald-700 text-xs font-bold px-3 py-1 rounded-full mb-3 border border-emerald-200">
              <ShieldCheck className="w-3.5 h-3.5" />
              Patient Confidentiality
            </div>
            <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">
              Privacy Policy
            </h1>
            <p className="text-xs text-slate-500 mt-1">
              Last updated: October 2026 • Operative Entity: Rehabunified Private Limited
            </p>
          </div>

          <section className="space-y-3 text-slate-700 text-sm leading-relaxed">
            <h2 className="text-lg font-bold text-slate-900">1. Commitment to Health Data Security</h2>
            <p>
              At Resolve360, protecting patient privacy is our top priority. All personal information, medical records, diagnostic scans, and clinical notes uploaded or shared during tele-consultations are encrypted in transit and at rest using industry-standard protocols.
            </p>
          </section>

          <section className="space-y-3 text-slate-700 text-sm leading-relaxed">
            <h2 className="text-lg font-bold text-slate-900">2. Information We Collect</h2>
            <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm">
              <li>Contact details (name, phone number, email address, city/country).</li>
              <li>Health and medical history voluntarily provided for clinical evaluation.</li>
              <li>Movement logs and exercise compliance telemetry collected via our mobile application.</li>
              <li>Technical device logs and analytics required for optimal video stream quality.</li>
            </ul>
          </section>

          <section className="space-y-3 text-slate-700 text-sm leading-relaxed">
            <h2 className="text-lg font-bold text-slate-900">3. Non-Disclosure &amp; Third Parties</h2>
            <p>
              We do not sell, rent, or trade your medical or contact details to third-party advertisers. Patient data is only shared with your assigned treating physiotherapists and required clinical coordinators.
            </p>
          </section>

          <section className="space-y-3 text-slate-700 text-sm leading-relaxed">
            <h2 className="text-lg font-bold text-slate-900">4. Contact Privacy Officer</h2>
            <p>
              For any questions regarding your data, consent withdrawal, or deletion requests, please contact our data grievance officer at{" "}
              <a href={`mailto:${siteConfig.email}`} className="text-sky-600 font-semibold underline">
                {siteConfig.email}
              </a>.
            </p>
          </section>
        </div>

      </div>
    </div>
  );
}
