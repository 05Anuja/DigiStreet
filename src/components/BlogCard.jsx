import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, Calendar, Clock } from "lucide-react";

export default function BlogCard({
  title,
  slug,
  excerpt,
  image,
  date = "September 2026",
  readTime = "5 min read",
  category = "Insights",
}) {
  return (
    <article className="group flex flex-col justify-between bg-white border border-slate-200/90 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:border-[#00529B]/40 hover:-translate-y-1 transition-all duration-300">
      <div>
        {/* Featured Image */}
        <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-100">
          {image ? (
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              onError={(e) => {
                e.target.style.display = "none";
              }}
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-[#091E3A] to-[#00529B] flex items-center justify-center p-6 text-white text-center font-bold">
              Silgate Insights
            </div>
          )}
          <span className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm text-[#00529B] text-xs font-semibold px-3 py-1 rounded-md shadow-sm border border-slate-100">
            {category}
          </span>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-7">
          <div className="flex items-center gap-4 text-xs text-slate-400 mb-3">
            <span className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5 text-[#F36C3D]" />
              <span>{date}</span>
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-[#00529B]" />
              <span>{readTime}</span>
            </span>
          </div>

          <h3 className="text-lg sm:text-xl font-bold text-slate-900 group-hover:text-[#00529B] line-clamp-2 leading-snug mb-3 transition-colors">
            {title}
          </h3>

          {excerpt && (
            <p className="text-xs sm:text-sm text-slate-600 line-clamp-3 leading-relaxed mb-4">
              {excerpt}
            </p>
          )}
        </div>
      </div>

      <div className="px-6 pb-6 pt-0">
        <Link
          to={slug ? `/blog/${slug}` : "/blog"}
          className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#00529B] hover:text-[#F36C3D] group-hover:translate-x-1 transition-all"
        >
          <span>Read Full Article</span>
          <ArrowUpRight className="w-4 h-4" />
        </Link>
      </div>
    </article>
  );
}
