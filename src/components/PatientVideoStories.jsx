import YouTubeVideo from "./YouTubeVideo";
import { patientVideoStories } from "@/data/videos";
import { ShieldCheck, Video } from "lucide-react";

export default function PatientVideoStories() {
  return (
    <section className="py-16 sm:py-20 bg-white border-b border-slate-100" aria-label="Patient Video Recovery Stories">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <span className="text-xs uppercase font-extrabold tracking-widest text-[#C70031] bg-rose-50 px-3.5 py-1 rounded-full border border-rose-100">
              Verified Recovery Stories
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#09131A] tracking-tight mt-3">
              Hear Directly From Patients &amp; Doctors
            </h2>
            <p className="mt-2 text-slate-600 text-sm sm:text-base leading-relaxed">
              Watch real patients and healthcare professionals share how personalized 1-on-1 virtual physiotherapy helped them overcome debilitating pain.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs font-semibold text-slate-700 bg-slate-50 px-4 py-2 rounded-xl border border-slate-200/80">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>100% Authentic Patient Testimonials</span>
          </div>
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {patientVideoStories.map((story) => (
            <div 
              key={story.id}
              className="flex flex-col bg-white rounded-2xl border border-slate-200/80 overflow-hidden shadow-xs hover:shadow-lg transition-all duration-300"
            >
              {/* YouTube Video Embed Component with Poster */}
              <YouTubeVideo
                videoId={story.videoId}
                title={story.title}
                thumbnail={story.thumbnail}
                youtubeUrl={story.youtubeUrl}
                duration={story.duration}
              />

              {/* Story Details Card */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-xs font-bold text-[#0D78B8] bg-sky-50 px-2.5 py-0.5 rounded-full border border-sky-100">
                      {story.condition}
                    </span>
                    <span className="text-xs text-slate-500 flex items-center gap-1 font-medium">
                      <Video className="w-3.5 h-3.5 text-slate-400" /> Video Story
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-[#09131A] mb-1">
                    {story.patientName}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 italic leading-relaxed mt-2">
                    &ldquo;{story.quote}&rdquo;
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                  <span>Care Team: <strong className="text-slate-800 font-semibold">{story.doctor}</strong></span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
