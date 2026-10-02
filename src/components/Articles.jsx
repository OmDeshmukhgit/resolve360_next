import Link from "next/link";
import { articles } from "@/data/articles";
import { BookOpen, Clock, Calendar, ArrowRight, User } from "lucide-react";

export default function Articles({ limit = 3, showViewAll = true }) {
  const displayArticles = limit ? articles.slice(0, limit) : articles;

  return (
    <section className="py-16 lg:py-24 bg-white border-b border-slate-100" id="articles" aria-label="Latest Clinical Insights & Guides">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <span className="text-xs uppercase font-extrabold tracking-wider text-sky-700 bg-sky-50 px-3 py-1 rounded-full border border-sky-200">
              Physiotherapy Guides &amp; Insights
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-3">
              Evidence-Based Rehabilitation Articles
            </h2>
            <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
              Written and reviewed by registered physical therapy specialists to help you understand pain mechanics and take charge of your recovery.
            </p>
          </div>

          {showViewAll && (
            <Link
              href="/blogs"
              className="inline-flex items-center gap-2 text-sky-600 hover:text-sky-700 font-bold text-sm group self-start md:self-end pb-1 whitespace-nowrap"
            >
              <span>Explore All Guides</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          )}
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {displayArticles.map((article) => (
            <article 
              key={article.slug}
              className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-xl hover:border-sky-300 transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="p-6">
                
                {/* Tags & Read Time */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-[11px] font-bold text-sky-700 bg-sky-50 px-2.5 py-0.5 rounded-full border border-sky-100">
                    {article.tags[0]}
                  </span>
                  <div className="flex items-center gap-1 text-[11px] text-slate-500">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{article.readTime}</span>
                  </div>
                </div>

                {/* Article Title */}
                <h3 className="text-lg font-bold text-slate-900 group-hover:text-sky-600 transition-colors mb-3 leading-snug">
                  <Link href={`/blogs/${article.slug}`}>
                    {article.title}
                  </Link>
                </h3>

                {/* Article Excerpt */}
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-5 line-clamp-3">
                  {article.description}
                </p>

                {/* Author Info */}
                <div className="flex items-center gap-2.5 pt-4 border-t border-slate-100">
                  <div className="w-8 h-8 rounded-full bg-slate-100 text-slate-600 flex items-center justify-center font-bold text-xs border border-slate-200">
                    <User className="w-4 h-4 text-sky-600" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-900 leading-none">
                      {article.author.name}
                    </div>
                    <div className="text-[10px] text-slate-500 mt-1">
                      {article.publishedDate}
                    </div>
                  </div>
                </div>

              </div>

              {/* Link CTA */}
              <div className="px-6 py-3.5 bg-slate-50 border-t border-slate-100 flex items-center justify-between">
                <Link
                  href={`/blogs/${article.slug}`}
                  className="text-xs font-bold text-sky-600 hover:text-sky-800 flex items-center gap-1.5 group-hover:translate-x-0.5 transition-transform"
                >
                  <span>Read Complete Guide</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
