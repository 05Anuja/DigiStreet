import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Calendar, Clock } from 'lucide-react';

export default function BlogCard({
  title,
  slug,
  excerpt,
  image,
  date = 'September 2026',
  readTime = '5 min read',
  category = 'Insights',
}) {
  return (
    <article className="group flex flex-col justify-between bg-white border border-zinc-200/80 rounded-3xl overflow-hidden hover:shadow-xl hover:border-black/30 transition-all duration-300">
      <div>
        {/* Featured Image */}
        <div className="relative aspect-[16/9] w-full overflow-hidden bg-zinc-100">
          {image ? (
            <img 
              src={image} 
              alt={title} 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              onError={(e) => {
                e.target.style.display = 'none';
              }}
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-zinc-800 to-black flex items-center justify-center p-6 text-white text-center font-bold">
              DigiStreet Insights
            </div>
          )}
          <span className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm text-black text-xs font-semibold px-3 py-1 rounded-full shadow-sm">
            {category}
          </span>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-7">
          <div className="flex items-center gap-4 text-xs text-zinc-400 mb-3">
            <span className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5" />
              <span>{date}</span>
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              <span>{readTime}</span>
            </span>
          </div>

          <h3 className="text-lg sm:text-xl font-bold text-zinc-900 group-hover:text-black line-clamp-2 leading-snug mb-3">
            {title}
          </h3>

          {excerpt && (
            <p className="text-xs sm:text-sm text-zinc-600 line-clamp-3 leading-relaxed mb-4">
              {excerpt}
            </p>
          )}
        </div>
      </div>

      <div className="px-6 pb-6 pt-0">
        <Link 
          to={slug ? `/blog/${slug}` : '/blog'} 
          className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-black hover:text-amber-600 group-hover:translate-x-1 transition-all"
        >
          <span>Read Full Article</span>
          <ArrowUpRight className="w-4 h-4" />
        </Link>
      </div>
    </article>
  );
}
