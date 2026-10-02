import Link from "next/link";
import { siteConfig } from "@/data/siteConfig";
import ContactForm from "@/components/ContactForm";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  ShieldCheck, 
  Home, 
  ChevronRight 
} from "lucide-react";

export const metadata = {
  title: "Contact Resolve360 | Online Physiotherapy Support & Helpline",
  description: "Get in touch with Resolve360. Speak with our clinical care team, inquire about personalized physical therapy plans, or request a call in 15 minutes.",
  alternates: {
    canonical: "https://resolve360.app/contact"
  }
};

export default function ContactPage() {
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
          <span className="font-semibold text-slate-800">Contact Us</span>
        </div>
      </div>

      {/* Banner */}
      <section className="bg-white py-12 lg:py-16 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-sky-50 text-sky-700 text-xs font-bold px-3 py-1 rounded-full mb-3 border border-sky-200">
            <ShieldCheck className="w-3.5 h-3.5" />
            Patient Care &amp; Support
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Contact Resolve360
          </h1>
          <p className="mt-4 text-slate-600 text-base sm:text-lg leading-relaxed">
            Have a question about our online physiotherapy sessions, corporate wellness, or insurance claims? We are here to assist you.
          </p>
        </div>
      </section>

      {/* Contact Content Grid */}
      <section className="py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            
            {/* Left Contact Details & Addresses */}
            <div className="lg:col-span-5 space-y-6">
              
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
                <h2 className="text-xl font-bold text-slate-900">
                  Direct Contact Channels
                </h2>

                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center flex-shrink-0 border border-sky-100">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-slate-500">Phone Support</div>
                    <a href={`tel:${siteConfig.phone.replace(/[^0-9+]/g, '')}`} className="text-sm font-bold text-slate-900 hover:text-sky-600">
                      {siteConfig.phone}
                    </a>
                    <div className="text-[11px] text-slate-500 mt-0.5">Callback in under 15 minutes</div>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center flex-shrink-0 border border-sky-100">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-slate-500">Email Inquiries</div>
                    <a href={`mailto:${siteConfig.email}`} className="text-sm font-bold text-slate-900 hover:text-sky-600">
                      {siteConfig.email}
                    </a>
                    <div className="text-[11px] text-slate-500 mt-0.5">Response within 2 hours</div>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center flex-shrink-0 border border-sky-100">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-slate-500">Clinical Video Hours</div>
                    <div className="text-sm font-bold text-slate-900">7:00 AM – 10:00 PM IST</div>
                    <div className="text-[11px] text-slate-500 mt-0.5">Global time zones accommodated (EST, GMT, GST)</div>
                  </div>
                </div>
              </div>

              {/* Office Addresses */}
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
                <h3 className="text-lg font-bold text-slate-900">
                  Global Clinical Offices
                </h3>

                <div className="border-b border-slate-100 pb-4">
                  <div className="flex items-center gap-2 text-xs font-bold text-sky-700 mb-1">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>India Headquarters (Bengaluru)</span>
                  </div>
                  <div className="text-xs text-slate-600 leading-relaxed">
                    {siteConfig.addresses[0].street}, {siteConfig.addresses[0].city}, {siteConfig.addresses[0].region} {siteConfig.addresses[0].postalCode}
                  </div>
                </div>

                <div>
                  <div className="flex items-center gap-2 text-xs font-bold text-sky-700 mb-1">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>United States Office (San Francisco)</span>
                  </div>
                  <div className="text-xs text-slate-600 leading-relaxed">
                    {siteConfig.addresses[1].street}, {siteConfig.addresses[1].city}, {siteConfig.addresses[1].region} {siteConfig.addresses[1].postalCode}
                  </div>
                </div>
              </div>

            </div>

            {/* Right Contact Form Column */}
            <div className="lg:col-span-7">
              <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm">
                <h2 className="text-2xl font-bold text-slate-900 mb-2">
                  Send Us a Message
                </h2>
                <p className="text-sm text-slate-600 mb-6">
                  Fill out the form below and our clinical care coordinator will get in touch with you promptly.
                </p>

                <ContactForm />
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
