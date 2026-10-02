"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { 
  Menu, 
  X, 
  Phone, 
  Calendar, 
  ChevronDown, 
  Award,
  Clock,
  Mail
} from "lucide-react";
import { services } from "@/data/services";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);
  const pathname = usePathname();

  // Scroll listener for subtle header elevation
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setIsOpen(false);
    setServicesDropdown(false);
  }, [pathname]);

  const navLinks = [
    { name: "Home", href: "/" },
    { 
      name: "Services", 
      href: "/services",
      hasDropdown: true,
      items: services.map(s => ({ name: s.title, href: `/services/${s.slug}` }))
    },
    { name: "Conditions", href: "/conditions" },
    { name: "Specialists", href: "/specialists" },
    { name: "Blogs", href: "/blogs" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      {/* Top Utility Announcement Bar */}
      <div className="bg-[#09131A] text-white text-xs py-2 px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1 bg-[#C70031]/20 text-rose-300 px-2 py-0.5 rounded-full font-semibold text-[11px] border border-[#C70031]/40">
              <Award className="w-3 h-3 text-[#C70031]" />
              Patent No. 596041
            </span>
            <span className="text-slate-300 hidden md:inline text-[11px]">
              Govt. of India Patented Physical Therapy Protocol
            </span>
          </div>

          <div className="flex items-center gap-4 text-[11px]">
            <a 
              href="tel:+9108095659804" 
              className="inline-flex items-center gap-1.5 text-slate-200 hover:text-white font-medium transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#0D78B8]" />
              <span>+91 - 080 - 9565 9804</span>
            </a>
            <span className="text-slate-600 hidden sm:inline">|</span>
            <a 
              href="mailto:care@resolve360.app" 
              className="inline-flex items-center gap-1.5 text-slate-200 hover:text-white font-medium transition-colors hidden sm:inline-flex"
            >
              <Mail className="w-3.5 h-3.5 text-[#0D78B8]" />
              <span>care@resolve360.app</span>
            </a>
            <span className="text-slate-600 hidden sm:inline">|</span>
            <span className="text-emerald-400 font-semibold hidden sm:inline flex items-center gap-1">
              1st Consultation ₹0 Free
            </span>
          </div>
        </div>
      </div>

      {/* Main Navigation Header */}
      <header 
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200 py-3" 
            : "bg-white border-b border-slate-100 py-3.5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          
          {/* Real Resolve360 Official Logo */}
          <Link 
            href="/" 
            className="flex items-center focus:outline-none" 
            aria-label="Resolve360 Online Physiotherapy"
          >
            <Image 
              src="/images/logo.png" 
              alt="Resolve360 - India's No.1 Online Physiotherapy Clinic" 
              width={222} 
              height={28}
              className="h-8 sm:h-9 w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));

              if (link.hasDropdown) {
                return (
                  <div 
                    key={link.name} 
                    className="relative group"
                    onMouseEnter={() => setServicesDropdown(true)}
                    onMouseLeave={() => setServicesDropdown(false)}
                  >
                    <Link
                      href={link.href}
                      className={`inline-flex items-center gap-1 px-3.5 py-2 rounded-xl text-sm font-semibold transition-colors ${
                        isActive 
                          ? "text-[#0D78B8] bg-sky-50 font-bold" 
                          : "text-slate-700 hover:text-[#0D78B8] hover:bg-slate-50"
                      }`}
                      aria-expanded={servicesDropdown}
                    >
                      {link.name}
                      <ChevronDown className="w-4 h-4 text-slate-500 group-hover:rotate-180 transition-transform duration-200" />
                    </Link>

                    {/* Services Dropdown */}
                    <div 
                      className={`absolute top-full left-0 w-80 bg-white rounded-2xl shadow-xl border border-slate-100 py-3 mt-1 transition-all duration-200 ${
                        servicesDropdown ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2"
                      }`}
                    >
                      <div className="px-4 py-1.5 text-[11px] font-extrabold text-[#C70031] uppercase tracking-wider">
                        Specialized Clinical Treatments
                      </div>
                      <div className="divide-y divide-slate-50 max-h-96 overflow-y-auto">
                        {link.items.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            className="block px-4 py-2.5 text-xs sm:text-sm text-slate-700 hover:text-[#0D78B8] hover:bg-sky-50/60 font-medium transition-colors"
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              }

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`px-3.5 py-2 rounded-xl text-sm font-semibold transition-colors ${
                    isActive 
                      ? "text-[#0D78B8] bg-sky-50 font-bold" 
                      : "text-slate-700 hover:text-[#0D78B8] hover:bg-slate-50"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <Link
              href="/book-appointment"
              className="resolve-btn px-5 py-2.5 text-sm shadow-md"
            >
              <Calendar className="w-4 h-4 mr-2" />
              <span>Book Appointment</span>
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-xl text-slate-700 hover:text-slate-900 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-[#0D78B8]"
            aria-label={isOpen ? "Close Menu" : "Open Menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        {isOpen && (
          <div className="lg:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 space-y-2 shadow-xl animate-in slide-in-from-top-2 duration-200">
            {navLinks.map((link) => (
              <div key={link.name}>
                <Link
                  href={link.href}
                  className={`block px-3 py-2.5 rounded-xl text-base font-semibold ${
                    pathname === link.href ? "text-[#0D78B8] bg-sky-50 font-bold" : "text-slate-800 hover:bg-slate-50"
                  }`}
                >
                  {link.name}
                </Link>
                {link.hasDropdown && (
                  <div className="pl-4 pr-2 py-1 space-y-1 bg-slate-50/80 rounded-xl mt-1 mb-2">
                    {link.items.map((sub) => (
                      <Link
                        key={sub.name}
                        href={sub.href}
                        className="block py-1.5 text-xs text-slate-700 hover:text-[#0D78B8] font-medium"
                      >
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}

            <div className="pt-4 border-t border-slate-100 space-y-3">
              <Link
                href="/book-appointment"
                className="w-full resolve-btn py-3 text-sm shadow-md"
              >
                <Calendar className="w-4 h-4 mr-2" />
                Book Free Consultation (₹0)
              </Link>
              <div className="text-center text-xs text-slate-600 flex items-center justify-center gap-1.5 font-medium">
                <Clock className="w-3.5 h-3.5 text-[#0D78B8]" />
                Specialist calls back within 15 mins
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
