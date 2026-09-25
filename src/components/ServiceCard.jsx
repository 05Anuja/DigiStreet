import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';

export default function ServiceCard({
  title,
  tag,
  badge,
  description,
  features = [],
  link,
  icon: Icon,
  className = '',
  featured = false,
}) {
  return (
    <div 
      className={`group relative flex flex-col justify-between p-6 sm:p-8 rounded-3xl transition-all duration-300 border ${
        featured 
          ? 'bg-zinc-900 text-white border-zinc-800 shadow-xl' 
          : 'bg-white text-zinc-900 border-zinc-200/90 hover:border-black/30 hover:shadow-xl'
      } ${className}`}
    >
      <div>
        {/* Top Badges / Icon */}
        <div className="flex items-center justify-between gap-3 mb-6">
          <div className="flex items-center gap-2 flex-wrap">
            {tag && (
              <span className={`text-[11px] font-semibold tracking-wider uppercase px-2.5 py-1 rounded-full ${
                featured ? 'bg-zinc-800 text-zinc-300' : 'bg-zinc-100 text-zinc-600'
              }`}>
                {tag}
              </span>
            )}
            {badge && (
              <span className={`text-[10px] font-extrabold tracking-wider uppercase px-2.5 py-0.5 rounded-full ${
                badge.toLowerCase().includes('hot') || badge.toLowerCase().includes('demanded')
                  ? 'bg-rose-500 text-white'
                  : 'bg-black text-[#FFDF01]'
              }`}>
                {badge}
              </span>
            )}
          </div>

          <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-transform group-hover:scale-110 ${
            featured ? 'bg-zinc-800 text-[#FFDF01]' : 'bg-[#FFDF01]/20 text-black'
          }`}>
            <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </div>
        </div>

        {/* Title */}
        <h3 className="text-xl sm:text-2xl font-bold tracking-tight mb-3">
          {title}
        </h3>

        {/* Description */}
        <p className={`text-sm leading-relaxed mb-6 ${featured ? 'text-zinc-400' : 'text-zinc-600'}`}>
          {description}
        </p>

        {/* Feature bullets */}
        {features.length > 0 && (
          <ul className="space-y-2 mb-8">
            {features.map((feat, i) => (
              <li key={i} className="flex items-start gap-2 text-xs sm:text-sm">
                <CheckCircle2 className={`w-4 h-4 mt-0.5 flex-shrink-0 ${featured ? 'text-[#FFDF01]' : 'text-emerald-600'}`} />
                <span className={featured ? 'text-zinc-300' : 'text-zinc-700'}>{feat}</span>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Bottom Link Action */}
      <div className="pt-4 border-t border-zinc-100/10">
        <Link 
          to={link} 
          className={`inline-flex items-center gap-1.5 text-sm font-semibold group-hover:underline ${
            featured ? 'text-[#FFDF01]' : 'text-black'
          }`}
        >
          <span>Explore Service</span>
          <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Link>
      </div>
    </div>
  );
}
