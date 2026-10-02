import Image from "next/image";
import { pressOutlets } from "@/data/press";

export default function PressLogos() {
  return (
    <section className="py-12 sm:py-16 bg-[#F8FAFC] border-b border-slate-100" aria-label="Resolve360 in the News">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs uppercase font-extrabold tracking-widest text-[#0D78B8] bg-sky-50 px-3.5 py-1 rounded-full border border-sky-100">
            Media Recognition
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#09131A] tracking-tight mt-3">
            Resolve360 in News
          </h2>
          <p className="mt-2 text-slate-600 text-sm sm:text-base leading-relaxed">
            Featured and recognized across India’s leading newspapers, medical publications, and national broadcasts.
          </p>
        </div>

        {/* Media Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 sm:gap-8 items-center justify-items-center">
          {pressOutlets.map((outlet) => (
            <div 
              key={outlet.name}
              className="w-full flex items-center justify-center p-3 bg-white rounded-xl border border-slate-200/60 shadow-2xs hover:shadow-md hover:border-slate-300 transition-all duration-200 h-16"
            >
              <Image
                src={outlet.logo}
                alt={`${outlet.name} featured Resolve360`}
                width={outlet.width}
                height={outlet.height}
                className="max-h-8 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
