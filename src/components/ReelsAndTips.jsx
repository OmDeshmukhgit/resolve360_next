import YouTubeVideo from "./YouTubeVideo";
import { reelsAndTips } from "@/data/videos";
import { Sparkles } from "lucide-react";

export default function ReelsAndTips() {
  return (
    <section className="py-16 sm:py-20 bg-[#F8FAFC] border-b border-slate-100" aria-label="Reels and Recovery Tips">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs uppercase font-extrabold tracking-widest text-[#0D78B8] bg-sky-50 px-3.5 py-1 rounded-full border border-sky-100 mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Learn. Move. Recover.</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#09131A] tracking-tight">
            Reels &amp; Recovery Tips
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            Bite-sized clinical insights and guided exercise routines to help you understand your body, move better, and support joint recovery daily.
          </p>
        </div>

        {/* Video Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reelsAndTips.map((reel) => (
            <div 
              key={reel.id}
              className="bg-white rounded-2xl border border-slate-200/80 overflow-hidden shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col"
            >
              <YouTubeVideo
                videoId={reel.videoId}
                title={reel.title}
                youtubeUrl={reel.youtubeUrl}
                duration={reel.duration}
              />
              <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#C70031] bg-rose-50 px-2 py-0.5 rounded-md inline-block mb-2">
                    {reel.category}
                  </span>
                  <h3 className="text-sm font-bold text-[#09131A] leading-snug line-clamp-2">
                    {reel.title}
                  </h3>
                </div>
                <div className="pt-3 mt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                  <span>Guided by Specialist</span>
                  <span className="font-semibold text-[#0D78B8]">Watch Tip →</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
