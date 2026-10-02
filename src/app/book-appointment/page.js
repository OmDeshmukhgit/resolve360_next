import BookingForm from "@/components/BookingForm";
import { siteConfig } from "@/data/siteConfig";
import { 
  ShieldCheck, 
  Clock, 
  Calendar, 
  Phone, 
  CheckCircle2, 
  Sparkles,
  HelpCircle
} from "lucide-react";

export const metadata = {
  title: "Book Free Online Physiotherapy Consultation (₹0)",
  description: "Schedule your free 1:1 live video consultation with a certified physiotherapist. Get a callback in 15 minutes. Personalized care plans starting at ₹499/session.",
  alternates: {
    canonical: "https://resolve360.app/book-appointment"
  }
};

export default function BookAppointmentPage() {
  const steps = [
    {
      step: "1",
      title: "Submit Your Request",
      desc: "Fill the quick form with your contact number and pain concern. No credit card required."
    },
    {
      step: "2",
      title: "15-Minute Callback",
      desc: "Our senior clinical care coordinator contacts you to understand symptoms and confirm appointment slot."
    },
    {
      step: "3",
      title: "1:1 Live Video Consultation",
      desc: "Connect securely with your specialist for comprehensive movement diagnosis and immediate relief drills."
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen py-12 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-800 text-xs font-bold px-3.5 py-1.5 rounded-full mb-3 border border-emerald-200">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            100% Free Initial Assessment — ₹0 Fee
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Book Your Online Physiotherapy Consultation
          </h1>
          <p className="mt-4 text-slate-600 text-base sm:text-lg leading-relaxed">
            Get personalized care from licensed Master&apos;s level physiotherapists. Your first session is completely free with zero payment details required.
          </p>
        </div>

        {/* 2-Column: Left Booking Form + Right Benefits & Steps */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-16">
          
          <div className="lg:col-span-6">
            <BookingForm />
          </div>

          <div className="lg:col-span-6 space-y-6">
            
            {/* What to Expect Card */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm">
              <h2 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                <Clock className="w-5 h-5 text-sky-600" />
                <span>What Happens After You Book?</span>
              </h2>

              <div className="space-y-6">
                {steps.map((st) => (
                  <div key={st.step} className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-sky-100 text-sky-700 flex items-center justify-center font-bold text-sm flex-shrink-0">
                      {st.step}
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-slate-900 mb-1">
                        {st.title}
                      </h3>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        {st.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Direct Phone Support */}
            <div className="bg-gradient-to-r from-sky-900 to-slate-900 text-white rounded-3xl p-6 sm:p-8 shadow-md">
              <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                <Phone className="w-5 h-5 text-sky-400" />
                <span>Prefer to Call Us Directly?</span>
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                Our helpline is open daily. Speak directly to our clinical triage team for immediate scheduling.
              </p>
              <a
                href={`tel:${siteConfig.phone.replace(/[^0-9+]/g, '')}`}
                className="inline-flex items-center gap-2 bg-white text-slate-900 hover:bg-sky-50 font-bold text-sm px-5 py-2.5 rounded-xl transition-colors"
              >
                <span>Call {siteConfig.phone}</span>
              </a>
            </div>

          </div>

        </div>

        {/* Transparent Pricing Plans Grid */}
        <div className="mt-16 pt-12 border-t border-slate-200">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              Transparent, Affordable Care Plans
            </h2>
            <p className="text-sm text-slate-600 mt-2">
              Start with a free assessment, then choose an active recovery plan tailored to your condition.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {siteConfig.pricing.plans.map((plan) => (
              <div
                key={plan.name}
                className={`bg-white rounded-2xl border p-6 flex flex-col justify-between relative transition-all duration-200 ${
                  plan.popular 
                    ? "border-sky-500 shadow-xl ring-2 ring-sky-500/20" 
                    : "border-slate-200 shadow-xs hover:shadow-md"
                }`}
              >
                {plan.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-sky-600 text-white text-[10px] font-extrabold px-3 py-1 rounded-full uppercase tracking-wider">
                    Most Popular
                  </span>
                )}

                <div>
                  <div className="text-xs font-semibold text-slate-500 mb-1">
                    {plan.badge}
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">
                    {plan.name}
                  </h3>
                  <div className="mb-4">
                    <span className="text-3xl font-black text-slate-900">{plan.price}</span>
                    <span className="text-xs text-slate-500 ml-1">/ {plan.period}</span>
                  </div>

                  <ul className="space-y-2.5 border-t border-slate-100 pt-4 mb-6">
                    {plan.features.map((feat, i) => (
                      <li key={i} className="text-xs text-slate-700 flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href="#top"
                  className={`w-full py-2.5 px-4 rounded-xl font-bold text-xs text-center transition-colors ${
                    plan.popular
                      ? "bg-sky-600 hover:bg-sky-700 text-white shadow-sm"
                      : "bg-slate-100 hover:bg-slate-200 text-slate-800"
                  }`}
                >
                  {plan.cta}
                </a>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
