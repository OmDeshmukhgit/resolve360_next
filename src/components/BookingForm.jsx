"use client";

import { useState } from "react";
import { CheckCircle2, Clock, ShieldCheck, PhoneCall, Sparkles } from "lucide-react";

export default function BookingForm({ embedded = false }) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    condition: "Knee Pain",
    city: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (!formData.name.trim()) {
      setError("Please enter your name");
      return;
    }
    if (!formData.phone.trim() || formData.phone.length < 8) {
      setError("Please enter a valid phone number");
      return;
    }

    setIsSubmitting(true);
    // Simulate instantaneous asynchronous lead capture
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 600);
  };

  if (isSuccess) {
    return (
      <div className={`bg-white rounded-2xl p-6 md:p-8 text-center border border-emerald-100 shadow-xl ${embedded ? "" : "max-w-md mx-auto"}`}>
        <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4 animate-in zoom-in duration-300">
          <CheckCircle2 className="w-9 h-9" />
        </div>
        <h3 className="text-xl font-bold text-slate-900 mb-2">
          Consultation Request Confirmed!
        </h3>
        <p className="text-slate-600 text-sm mb-4">
          Thank you, <strong className="text-slate-800">{formData.name}</strong>. Our senior physiotherapy care coordinator will call you at <strong className="text-slate-800">{formData.phone}</strong> in under 15 minutes.
        </p>
        <div className="bg-emerald-50 text-emerald-800 rounded-xl p-3 text-xs font-medium border border-emerald-200/60 mb-5 flex items-center justify-center gap-2">
          <Sparkles className="w-4 h-4 text-emerald-600 flex-shrink-0" />
          <span>Your initial session is 100% Free (₹0 fee waived)</span>
        </div>
        <button
          type="button"
          onClick={() => {
            setIsSuccess(false);
            setFormData({ name: "", phone: "", condition: "Knee Pain", city: "" });
          }}
          className="text-xs text-sky-600 hover:text-sky-800 underline font-medium"
        >
          Book another consultation
        </button>
      </div>
    );
  }

  return (
    <div className={`bg-white rounded-2xl shadow-xl border border-slate-200/80 p-5 sm:p-7 relative ${embedded ? "" : "max-w-md mx-auto"}`}>
      {/* Header of Form */}
      <div className="mb-5">
        <div className="inline-flex items-center gap-1.5 bg-emerald-50 text-emerald-700 px-3 py-1 rounded-full text-xs font-semibold mb-2 border border-emerald-200/60">
          <ShieldCheck className="w-3.5 h-3.5" />
          First Consultation Free — ₹0
        </div>
        <h2 className="text-lg sm:text-xl font-bold text-slate-900">
          Get a Doctor Call in 15 Minutes
        </h2>
        <p className="text-xs sm:text-sm text-slate-500 mt-1">
          No payment details required. Speak with an expert physiotherapist.
        </p>
      </div>

      {error && (
        <div className="mb-4 p-2.5 bg-rose-50 border border-rose-200 text-rose-700 text-xs rounded-lg">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-xs font-semibold text-slate-700 mb-1">
            Full Name *
          </label>
          <input
            id="name"
            type="text"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder="e.g. Rahul Sharma"
            className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:border-sky-500 focus:ring-2 focus:ring-sky-100 transition-all text-slate-900 placeholder:text-slate-400"
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-xs font-semibold text-slate-700 mb-1">
            Contact Number (WhatsApp enabled) *
          </label>
          <div className="relative">
            <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-xs font-bold text-slate-500">
              +91
            </span>
            <input
              id="phone"
              type="tel"
              required
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              placeholder="98765 43210"
              className="w-full pl-12 pr-3.5 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:border-sky-500 focus:ring-2 focus:ring-sky-100 transition-all text-slate-900 placeholder:text-slate-400"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div>
            <label htmlFor="condition" className="block text-xs font-semibold text-slate-700 mb-1">
              Select Condition
            </label>
            <select
              id="condition"
              value={formData.condition}
              onChange={(e) => setFormData({ ...formData, condition: e.target.value })}
              className="w-full px-3 py-2.5 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:border-sky-500 focus:ring-2 focus:ring-sky-100 transition-all text-slate-800"
            >
              <option value="Back Pain">Back Pain / Sciatica</option>
              <option value="Knee Pain">Knee Pain / Arthritis</option>
              <option value="Neck Pain">Neck Pain / Cervical</option>
              <option value="Shoulder Pain">Shoulder Pain / Frozen Shoulder</option>
              <option value="Heel Pain">Heel Pain / Plantar Fasciitis</option>
              <option value="Post-Surgical">Post-Surgical Rehab</option>
              <option value="Neurological">Neuro Condition (Stroke/Parkinson)</option>
              <option value="Other">Other Chronic Ache</option>
            </select>
          </div>

          <div>
            <label htmlFor="city" className="block text-xs font-semibold text-slate-700 mb-1">
              City / Country
            </label>
            <input
              id="city"
              type="text"
              value={formData.city}
              onChange={(e) => setFormData({ ...formData, city: e.target.value })}
              placeholder="e.g. Bangalore / USA"
              className="w-full px-3 py-2.5 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:border-sky-500 focus:ring-2 focus:ring-sky-100 transition-all text-slate-900 placeholder:text-slate-400"
            />
          </div>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full resolve-btn py-3.5 px-6 text-sm shadow-md cursor-pointer disabled:opacity-70 mt-2"
        >
          {isSubmitting ? (
            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
          ) : (
            <>
              <PhoneCall className="w-4 h-4 mr-2" />
              <span>Book Free Consultation (₹0)</span>
            </>
          )}
        </button>

        <p className="text-[11px] text-slate-600 text-center leading-relaxed">
          By submitting, you agree to receive a call or WhatsApp message from our certified clinical care team.
        </p>

        <div className="pt-2 border-t border-slate-100 flex items-center justify-center gap-4 text-[11px] text-slate-600">
          <span className="flex items-center gap-1">
            <Clock className="w-3.5 h-3.5 text-sky-600" />
            15-min callback
          </span>
          <span>•</span>
          <span className="flex items-center gap-1">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            100% Confidential
          </span>
        </div>
      </form>
    </div>
  );
}
