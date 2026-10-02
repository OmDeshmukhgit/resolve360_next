import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/data/siteConfig";
import { services } from "@/data/services";
import { conditions } from "@/data/conditions";
import { globalCountries } from "@/data/locations";
import { 
  Phone, 
  Mail, 
  MapPin, 
  ShieldCheck, 
  Award, 
  Calendar
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#09131A] text-slate-300 text-xs pt-16 pb-12 border-t border-slate-800" aria-label="Footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Top Brand & Certifications Strip */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-slate-800/80 items-center">
          
          <div className="md:col-span-5 space-y-3">
            <Link href="/" className="inline-flex items-center">
              <Image
                src="/images/footer resolve360 logo.webp"
                alt="Resolve360 Online Physiotherapy"
                width={204}
                height={40}
                className="h-9 sm:h-10 w-auto object-contain"
              />
            </Link>
            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              India’s leading and most trusted online physiotherapy clinic. Providing 1:1 live video rehabilitation with certified specialists across India, USA, UK, Canada, Australia, and UAE.
            </p>
          </div>

          <div className="md:col-span-7 flex flex-wrap items-center justify-start md:justify-end gap-4 sm:gap-6">
            <div className="bg-slate-900 border border-slate-800 p-3.5 rounded-2xl flex items-center gap-3">
              <Award className="w-6 h-6 text-[#C70031] flex-shrink-0" />
              <div>
                <div className="text-xs font-bold text-white">Govt. Indian Patent #596041</div>
                <div className="text-[11px] text-slate-400">Granted Rehabilitation Protocol Technology</div>
              </div>
            </div>

            <div className="bg-slate-900 border border-slate-800 p-3.5 rounded-2xl flex items-center gap-3">
              <ShieldCheck className="w-6 h-6 text-emerald-400 flex-shrink-0" />
              <div>
                <div className="text-xs font-bold text-white">IAP Certified Team</div>
                <div className="text-[11px] text-slate-400">Master&apos;s Level Clinical Physiotherapists</div>
              </div>
            </div>
          </div>

        </div>

        {/* 5 Column Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 py-12 border-b border-slate-800/80">
          
          {/* Col 1: Physiotherapy Services */}
          <div>
            <h3 className="text-white font-bold text-xs uppercase tracking-wider mb-4">
              Physiotherapy Services
            </h3>
            <ul className="space-y-2.5">
              {services.slice(0, 7).map((s) => (
                <li key={s.slug}>
                  <Link 
                    href={`/services/${s.slug}`}
                    className="text-slate-300 hover:text-white transition-colors block text-xs"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/services" className="text-[#0D78B8] hover:text-sky-300 font-bold block text-xs">
                  View All Services →
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 2: Conditions Treated */}
          <div>
            <h3 className="text-white font-bold text-xs uppercase tracking-wider mb-4">
              Conditions Treated
            </h3>
            <ul className="space-y-2.5">
              {conditions.slice(0, 7).map((c) => (
                <li key={c.slug}>
                  <Link 
                    href={`/conditions/${c.slug}`}
                    className="text-slate-300 hover:text-white transition-colors block text-xs"
                  >
                    {c.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/conditions" className="text-[#0D78B8] hover:text-sky-300 font-bold block text-xs">
                  View All Conditions →
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Global Presence */}
          <div>
            <h3 className="text-white font-bold text-xs uppercase tracking-wider mb-4">
              Global Presence
            </h3>
            <ul className="space-y-2.5">
              {globalCountries.map((g) => (
                <li key={g.slug}>
                  <Link 
                    href="/book-appointment"
                    className="text-slate-300 hover:text-white transition-colors flex items-center gap-1.5 text-xs"
                  >
                    <span>{g.flag}</span>
                    <span>{g.title}</span>
                  </Link>
                </li>
              ))}
              <li>
                <span className="text-[11px] text-slate-400 block pt-1">
                  Bengaluru • Mumbai • Delhi-NCR • Chennai • Hyderabad • Pune
                </span>
              </li>
            </ul>
          </div>

          {/* Col 4: Company & Knowledge */}
          <div>
            <h3 className="text-white font-bold text-xs uppercase tracking-wider mb-4">
              Company &amp; Resources
            </h3>
            <ul className="space-y-2.5">
              <li>
                <Link href="/#about" className="text-slate-300 hover:text-white transition-colors block text-xs">
                  About Resolve360
                </Link>
              </li>
              <li>
                <Link href="/#why-choose-us" className="text-slate-300 hover:text-white transition-colors block text-xs">
                  Why Choose Us
                </Link>
              </li>
              <li>
                <Link href="/specialists" className="text-slate-300 hover:text-white transition-colors block text-xs">
                  Our Specialists
                </Link>
              </li>
              <li>
                <Link href="/blogs" className="text-slate-300 hover:text-white transition-colors block text-xs">
                  Physiotherapy Blogs
                </Link>
              </li>
              <li>
                <Link href="/#technology" className="text-slate-300 hover:text-white transition-colors block text-xs">
                  Patented Technology
                </Link>
              </li>
              <li>
                <Link href="/#testimonials" className="text-slate-300 hover:text-white transition-colors block text-xs">
                  Patient Reviews (4.9★)
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-slate-300 hover:text-white transition-colors block text-xs">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 5: Contact & Head Office */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1 space-y-4">
            <h3 className="text-white font-bold text-xs uppercase tracking-wider mb-4">
              Clinical Headquarters
            </h3>
            
            <div className="flex items-start gap-2.5 text-xs text-slate-400">
              <MapPin className="w-4 h-4 text-[#0D78B8] flex-shrink-0 mt-0.5" />
              <span>
                {siteConfig.addresses[0].street}, {siteConfig.addresses[0].city}, {siteConfig.addresses[0].region} {siteConfig.addresses[0].postalCode}
              </span>
            </div>

            <div className="flex items-center gap-2.5 text-xs">
              <Phone className="w-4 h-4 text-[#0D78B8] flex-shrink-0" />
              <a href={`tel:${siteConfig.phone.replace(/[^0-9+]/g, '')}`} className="text-white hover:text-[#0D78B8] font-medium">
                {siteConfig.phone}
              </a>
            </div>

            <div className="flex items-center gap-2.5 text-xs">
              <Mail className="w-4 h-4 text-[#0D78B8] flex-shrink-0" />
              <a href={`mailto:${siteConfig.email}`} className="text-white hover:text-[#0D78B8] font-medium">
                {siteConfig.email}
              </a>
            </div>

            <div className="pt-2">
              <Link
                href="/book-appointment"
                className="w-full resolve-btn py-2.5 px-4 text-xs shadow-md"
              >
                <Calendar className="w-3.5 h-3.5 mr-1.5" />
                <span>Book ₹0 Consultation</span>
              </Link>
            </div>
          </div>

        </div>

        {/* Legal & Medical Disclaimer Bottom */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-slate-400 text-[11px] leading-relaxed">
          <div className="text-center md:text-left">
            <div>
              © {new Date().getFullYear()} Rehabunified Private Limited. All rights reserved. Registered Indian Patent No. 596041.
            </div>
            <div className="text-slate-400 mt-1 max-w-2xl">
              Medical Disclaimer: The information and services provided on Resolve360 are for clinical tele-rehabilitation purposes and do not replace emergency medical interventions. In case of acute trauma or life-threatening emergencies, consult an emergency department immediately.
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 text-slate-400">
            <Link href="/terms-and-conditions" className="hover:text-slate-200">
              Terms &amp; Conditions
            </Link>
            <span>•</span>
            <Link href="/privacy-policy" className="hover:text-slate-200">
              Privacy Policy
            </Link>
            <span>•</span>
            <Link href="/contact" className="hover:text-slate-200">
              Contact
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
