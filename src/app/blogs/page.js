import Link from "next/link";
import { articles } from "@/data/articles";
import CTA from "@/components/CTA";
import { Clock, Calendar, ArrowRight, Home, ChevronRight, BookOpen, User } from "lucide-react";

export const metadata = {
  title: "Online Physiotherapy Blogs & Medical Recovery Guides",
  description: "Read evidence-based rehabilitation articles by certified physiotherapists: Sciatica recovery, back pain exercises, heel pain protocols, and tele-rehab guides.",
  alternates: {
    canonical: "https://resolve360.app/blogs"
  }
};

export default function BlogsPage() {
  return (
    <div className="bg-slate-50 min-h-screen">
      
      {/* Breadcrumb Header */}
      <div className="bg-white border-b border-slate-200/80 py-4 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex items-center gap-2 text-xs text-slate-500">
          <Link href="/" className="hover:text-slate-800 flex items-center gap-1">
            <Home className="w-3.5 h-3.5" />
            <span>Home</span>
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span className="font-semibold text-slate-800">Blogs</span>
        </div>
      </div>

      {/* Banner */}
      <section className="bg-white py-12 lg:py-16 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-sky-50 text-sky-700 text-xs font-bold px-3 py-1 rounded-full mb-3 border border-sky-200">
            <BookOpen className="w-3.5 h-3.5" />
            Physiotherapy Knowledge Base
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Physiotherapy Guides &amp; Clinical Insights
          </h1>
          <p className="mt-4 text-slate-600 text-base sm:text-lg leading-relaxed">
            Written by senior physiotherapists to guide your journey from injury to pain-free performance.
          </p>
        </div>
      </section>

      {/* Articles Listing */}
      <section className="py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {articles.map((article) => (
              <article 
                key={article.slug}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-xl hover:border-sky-300 transition-all duration-300 flex flex-col justify-between group"
              >
                <div className="p-6 sm:p-7">
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-[11px] font-bold text-sky-700 bg-sky-50 px-2.5 py-0.5 rounded-full border border-sky-100">
                      {article.tags[0]}
                    </span>
                    <div className="flex items-center gap-1 text-[11px] text-slate-500">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{article.readTime}</span>
                    </div>
                  </div>

                  <h2 className="text-xl font-bold text-slate-900 group-hover:text-sky-600 transition-colors mb-3 leading-snug">
                    <Link href={`/blogs/${article.slug}`}>
                      {article.title}
                    </Link>
                  </h2>

                  <p className="text-sm text-slate-600 leading-relaxed mb-6 line-clamp-3">
                    {article.description}
                  </p>

                  <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
                    <div className="w-9 h-9 rounded-full bg-slate-100 text-slate-600 flex items-center justify-center font-bold text-xs border border-slate-200">
                      <User className="w-4 h-4 text-sky-600" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-slate-900 leading-none">
                        {article.author.name}
                      </div>
                      <div className="text-[11px] text-slate-500 mt-1">
                        {article.publishedDate}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="px-6 py-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between">
                  <Link
                    href={`/blogs/${article.slug}`}
                    className="text-xs font-bold text-sky-600 hover:text-sky-800 flex items-center gap-1.5 group-hover:translate-x-0.5 transition-transform"
                  >
                    <span>Read Full Article</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </div>
  );
}
