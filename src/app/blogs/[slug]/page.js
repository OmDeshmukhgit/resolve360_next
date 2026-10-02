import Link from "next/link";
import { notFound } from "next/navigation";
import { articles, getArticleBySlug } from "@/data/articles";
import { getConditionBySlug } from "@/data/conditions";
import { siteConfig } from "@/data/siteConfig";
import CTA from "@/components/CTA";
import { 
  ChevronRight, 
  Home, 
  Clock, 
  Calendar, 
  User, 
  Share2, 
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  BookOpen
} from "lucide-react";

export async function generateStaticParams() {
  return articles.map((a) => ({
    slug: a.slug
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    return { title: "Article Not Found" };
  }

  return {
    title: article.metaTitle,
    description: article.metaDescription,
    alternates: {
      canonical: `https://resolve360.app/blogs/${article.slug}`
    },
    openGraph: {
      title: article.metaTitle,
      description: article.metaDescription,
      url: `https://resolve360.app/blogs/${article.slug}`,
      type: "article",
      publishedTime: article.publishedDate,
      modifiedTime: article.updatedDate,
      authors: [article.author.name]
    }
  };
}

export default async function BlogDetailPage({ params }) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  // Related conditions
  const relatedConditions = (article.relatedConditionSlugs || [])
    .map(cSlug => getConditionBySlug(cSlug))
    .filter(Boolean);

  // Article JSON-LD Schema
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": article.h1,
    "description": article.description,
    "datePublished": article.publishedDate,
    "dateModified": article.updatedDate || article.publishedDate,
    "author": {
      "@type": "Person",
      "name": article.author.name,
      "jobTitle": article.author.role
    },
    "publisher": {
      "@type": "Organization",
      "name": siteConfig.name,
      "logo": {
        "@type": "ImageObject",
        "url": `${siteConfig.url}/images/logo.png`
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://resolve360.app/blogs/${article.slug}`
    }
  };

  return (
    <div className="bg-slate-50 min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      {/* Breadcrumb Navigation */}
      <div className="bg-white border-b border-slate-200/80 py-4 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto flex items-center gap-2 text-xs text-slate-500">
          <Link href="/" className="hover:text-slate-800 flex items-center gap-1">
            <Home className="w-3.5 h-3.5" />
            <span>Home</span>
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <Link href="/blogs" className="hover:text-slate-800">
            Blogs
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span className="font-semibold text-slate-800 truncate">{article.title}</span>
        </div>
      </div>

      {/* Article Content Container */}
      <article className="py-12 lg:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          
          {/* Header Card */}
          <header className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm mb-10">
            <div className="flex flex-wrap items-center gap-2 mb-4">
              {article.tags.map((tag, i) => (
                <span key={i} className="text-xs font-bold text-sky-700 bg-sky-50 px-3 py-1 rounded-full border border-sky-100">
                  {tag}
                </span>
              ))}
              <span className="text-xs text-slate-500 flex items-center gap-1 ml-auto">
                <Clock className="w-3.5 h-3.5" />
                {article.readTime}
              </span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-6">
              {article.h1}
            </h1>

            <p className="text-slate-600 text-base sm:text-lg leading-relaxed mb-8">
              {article.description}
            </p>

            {/* Author Profile Bio Box */}
            <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200/80 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-sky-100 text-sky-700 flex items-center justify-center font-bold text-base border border-sky-200 flex-shrink-0">
                  <User className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-sm font-bold text-slate-900 flex items-center gap-1.5">
                    <span>{article.author.name}</span>
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  </div>
                  <div className="text-xs text-slate-600">
                    {article.author.role} • {article.author.experience}
                  </div>
                  <div className="text-[11px] text-slate-500 mt-0.5">
                    {article.author.credentials}
                  </div>
                </div>
              </div>

              <div className="text-xs text-slate-500 sm:text-right border-t sm:border-t-0 pt-2 sm:pt-0">
                <div>Published: {article.publishedDate}</div>
                {article.updatedDate && (
                  <div className="text-[11px] text-emerald-700 font-medium mt-0.5">
                    Medically Reviewed: {article.updatedDate}
                  </div>
                )}
              </div>
            </div>
          </header>

          {/* Body Sections */}
          <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm space-y-8 mb-10">
            {article.sections.map((sec, idx) => (
              <section key={idx} className="space-y-3">
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                  {sec.heading}
                </h2>
                <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                  {sec.content}
                </p>
              </section>
            ))}

            {/* Quick Answer / Takeaway Callout */}
            <div className="p-5 bg-sky-50 rounded-2xl border border-sky-200/80">
              <h3 className="text-sm font-bold text-sky-900 mb-2 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-sky-600" />
                <span>Clinical Takeaway</span>
              </h3>
              <p className="text-xs sm:text-sm text-sky-800 leading-relaxed">
                Active tele-rehabilitation empowers patients with self-management techniques that address the biomechanical root cause. Supervised video therapy is safe, highly effective, and avoids reliance on passive temporary treatments.
              </p>
            </div>
          </div>

          {/* Related Condition Guides */}
          {relatedConditions.length > 0 && (
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm mb-10">
              <h3 className="text-lg font-bold text-slate-900 mb-4">
                Related Condition Rehabilitation Guides
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {relatedConditions.map((cond) => (
                  <Link
                    key={cond.slug}
                    href={`/conditions/${cond.slug}`}
                    className="p-4 bg-slate-50 hover:bg-sky-50 rounded-xl border border-slate-200 hover:border-sky-300 transition-colors flex items-center justify-between group"
                  >
                    <div>
                      <div className="text-xs font-bold text-slate-900 group-hover:text-sky-700">
                        {cond.title}
                      </div>
                      <div className="text-[11px] text-slate-500 mt-0.5">
                        View treatment guide →
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-sky-600 group-hover:translate-x-0.5 transition-transform" />
                  </Link>
                ))}
              </div>
            </div>
          )}

        </div>
      </article>

      <CTA />
    </div>
  );
}
