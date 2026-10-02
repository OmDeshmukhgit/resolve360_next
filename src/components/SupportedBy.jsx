import Image from "next/image";
import { supportedBy } from "@/data/supportedBy";

export default function SupportedBy() {
  return (
    <section className="py-12 sm:py-16 bg-white border-y border-slate-100" aria-label="Backed & Supported By">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-xs uppercase font-extrabold tracking-widest text-[#C70031] bg-rose-50 px-3.5 py-1 rounded-full border border-rose-100">
            Clinical Ecosystem
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#09131A] tracking-tight mt-3">
            Backed &amp; Supported By
          </h2>
          <p className="mt-2 text-slate-600 text-sm sm:text-base leading-relaxed">
            An ecosystem that believes in better recovery. Hospitals, clinicians, investors, and partners who help us build rehab worth trusting.
          </p>
        </div>

        {/* Logos Flex Grid */}
        <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 lg:gap-16">
          {supportedBy.map((partner) => (
            <div 
              key={partner.name}
              className="flex items-center justify-center p-3 rounded-xl hover:scale-105 transition-transform duration-200"
            >
              <Image
                src={partner.logo}
                alt={`${partner.name} - Supporter of Resolve360`}
                width={partner.width}
                height={partner.height}
                className="h-9 sm:h-11 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
