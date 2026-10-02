"use client";

import { useState } from "react";
import Image from "next/image";
import { Play } from "lucide-react";

/**
 * High-performance YouTube Video Player component
 * - Uses lazy-loading poster image to protect mobile performance & LCP
 * - Only loads the heavy YouTube iframe on user interaction
 */
export default function YouTubeVideo({
  videoId,
  title,
  thumbnail,
  youtubeUrl,
  duration,
  className = ""
}) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [imgError, setImgError] = useState(false);

  // Extract video ID from youtubeUrl if videoId is not directly passed
  const resolvedVideoId = videoId || (youtubeUrl ? extractVideoId(youtubeUrl) : "");

  function extractVideoId(url) {
    if (!url) return "";
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : "";
  }

  // Fallback thumbnail if none provided
  const initialPoster = thumbnail || (resolvedVideoId 
    ? `https://img.youtube.com/vi/${resolvedVideoId}/hqdefault.jpg`
    : "/images/hero/hero-physio.webp");

  const posterSrc = imgError ? "/images/hero/hero-physio.webp" : initialPoster;

  if (isPlaying && resolvedVideoId) {
    return (
      <div className={`relative w-full aspect-video rounded-2xl overflow-hidden shadow-lg bg-black ${className}`}>
        <iframe
          src={`https://www.youtube.com/embed/${resolvedVideoId}?autoplay=1&rel=0&modestbranding=1`}
          title={title || "Resolve360 Physiotherapy Video"}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 w-full h-full border-0"
        />
      </div>
    );
  }

  return (
    <div 
      className={`group relative w-full aspect-video rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 bg-slate-900 cursor-pointer ${className}`}
      onClick={() => setIsPlaying(true)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          setIsPlaying(true);
        }
      }}
      aria-label={`Play video: ${title || "Resolve360 Physiotherapy"}`}
    >
      {/* Poster Image */}
      <Image
        src={posterSrc}
        alt={title || "Resolve360 Video"}
        fill
        unoptimized={typeof posterSrc === "string" && posterSrc.startsWith("http")}
        onError={() => setImgError(true)}
        className="object-cover object-center group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />

      {/* Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/30 to-transparent" />

      {/* Play Button */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#C70031] text-white flex items-center justify-center shadow-lg shadow-[#C70031]/40 group-hover:scale-110 group-hover:bg-[#0D78B8] transition-all duration-300">
          <Play className="w-6 h-6 sm:w-7 sm:h-7 fill-current ml-1" />
        </div>
      </div>

      {/* Duration Badge */}
      {duration && (
        <div className="absolute top-3 right-3 bg-black/70 backdrop-blur-sm text-white text-[11px] font-semibold px-2 py-0.5 rounded-md">
          {duration}
        </div>
      )}

      {/* Video Title Banner */}
      <div className="absolute bottom-0 inset-x-0 p-4 text-white">
        <p className="text-xs uppercase tracking-wider text-[#FFBA00] font-semibold mb-1">
          Patient Recovery Story
        </p>
        <h4 className="text-sm sm:text-base font-bold text-white line-clamp-2 drop-shadow-sm">
          {title}
        </h4>
      </div>
    </div>
  );
}
