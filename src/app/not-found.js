import Link from "next/link";
import { Stethoscope, Home, Calendar, ArrowRight, HelpCircle } from "lucide-react";

export const metadata = {
  title: "404 - Page Not Found",
  description: "The page you are looking for does not exist. Browse our online physiotherapy services, conditions treated, or book a consultation.",
  robots: {
    index: false,
    follow: true
  }
};

export default function NotFound() {
  return (
    <div className="bg-slate-50 min-h-[75vh] flex items-center justify-center py-16 px-4">
      <div className="max-w-md w-full bg-white rounded-3xl p-8 border border-slate-200 text-center shadow-lg">
        <div className="w-16 h-16 rounded-2xl bg-sky-50 text-sky-600 flex items-center justify-center mx-auto mb-5 border border-sky-100">
          <Stethoscope className="w-8 h-8" />
        </div>

        <span className="text-xs uppercase font-extrabold tracking-widest text-sky-600">
          Error 404
        </span>

        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-1 mb-3">
          Page Not Found
        </h1>

        <p className="text-slate-600 text-sm leading-relaxed mb-6">
          The rehabilitation resource or page you requested could not be located. It may have been updated or moved.
        </p>

        <div className="space-y-3">
          <Link
            href="/"
            className="w-full inline-flex items-center justify-center gap-2 bg-sky-600 hover:bg-sky-700 text-white font-bold text-sm py-3 px-4 rounded-xl shadow-xs transition-colors"
          >
            <Home className="w-4 h-4" />
            <span>Return to Homepage</span>
          </Link>

          <Link
            href="/services"
            className="w-full inline-flex items-center justify-center gap-2 bg-slate-50 hover:bg-slate-100 text-slate-800 font-bold text-sm py-3 px-4 rounded-xl border border-slate-200 transition-colors"
          >
            <span>Browse Physiotherapy Services</span>
            <ArrowRight className="w-4 h-4" />
          </Link>

          <Link
            href="/book-appointment"
            className="w-full inline-flex items-center justify-center gap-2 text-xs font-semibold text-sky-600 hover:text-sky-800 py-2"
          >
            <Calendar className="w-3.5 h-3.5" />
            <span>Book Free ₹0 Consultation</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
