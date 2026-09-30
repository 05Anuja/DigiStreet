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
      className={`group relative flex flex-col justify-between p-6 sm:p-8 rounded-2xl transition-all duration-300 border ${
        featured 
          ? 'bg-gradient-to-b from-[#091E3A] to-[#0D274A] text-white border-[#1E3E6B] shadow-xl hover:-translate-y-1 hover:shadow-2xl' 
          : 'bg-white text-slate-900 border-slate-200/90 shadow-sm hover:border-[#00529B]/40 hover:shadow-xl hover:-translate-y-1'
      } ${className}`}
    >
      <div>
        {/* Top Badges / Icon */}
        <div className="flex items-center justify-between gap-3 mb-6">
          <div className="flex items-center gap-2 flex-wrap">
            {tag && (
              <span className={`text-[11px] font-semibold tracking-wider uppercase px-2.5 py-1 rounded-md ${
                featured ? 'bg-white/10 text-slate-200 border border-white/15' : 'bg-[#EBF3FB] text-[#00529B] border border-blue-100'
              }`}>
                {tag}
              </span>
            )}
            {badge && (
              <span className="text-[10px] font-bold tracking-wider uppercase px-2.5 py-0.5 rounded-md bg-[#FFF1EC] text-[#F36C3D] border border-[#FED7AA]">
                {badge}
              </span>
            )}
          </div>

          <div className={`w-10 h-10 rounded-lg flex items-center justify-center transition-all group-hover:scale-105 ${
            featured ? 'bg-[#00529B] text-white group-hover:bg-[#F36C3D]' : 'bg-[#EBF3FB] text-[#00529B] group-hover:bg-[#00529B] group-hover:text-white'
          }`}>
            <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </div>
        </div>

        {/* Title */}
        <h3 className={`text-xl sm:text-2xl font-bold tracking-tight mb-3 transition-colors ${
          featured ? 'text-white' : 'text-slate-900 group-hover:text-[#00529B]'
        }`}>
          {title}
        </h3>

        {/* Description */}
        <p className={`text-sm leading-relaxed mb-6 ${featured ? 'text-slate-300' : 'text-slate-600'}`}>
          {description}
        </p>

        {/* Feature bullets */}
        {features.length > 0 && (
          <ul className="space-y-2 mb-8">
            {features.map((feat, i) => (
              <li key={i} className="flex items-start gap-2 text-xs sm:text-sm">
                <CheckCircle2 className={`w-4 h-4 mt-0.5 flex-shrink-0 ${featured ? 'text-[#F6C84A]' : 'text-[#00529B]'}`} />
                <span className={featured ? 'text-slate-200' : 'text-slate-700'}>{feat}</span>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Bottom Link Action */}
      <div className={`pt-4 border-t ${featured ? 'border-white/10' : 'border-slate-100'}`}>
        <Link 
          to={link} 
          className={`inline-flex items-center gap-1.5 text-sm font-semibold transition-colors ${
            featured ? 'text-[#F6C84A] hover:text-white' : 'text-[#00529B] group-hover:text-[#F36C3D]'
          }`}
        >
          <span>Explore Service</span>
          <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Link>
      </div>
    </div>
  );
}
