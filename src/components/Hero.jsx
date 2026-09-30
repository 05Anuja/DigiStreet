import React from "react";
import { Link } from "react-router-dom";
import { ChevronRight, ArrowUpRight } from "lucide-react";
import Button from "./Button";

export default function Hero({
  badge = "Silgate Solutions",
  title,
  subtitle,
  description,
  breadcrumbs = [],
  primaryCtaText = "Get in Touch",
  primaryCtaLink = "/contact",
  secondaryCtaText = "Explore Services",
  secondaryCtaLink = "/services",
  showCta = true,
  stats = [],
  dark = false,
}) {
  return (
    <section
      className={`relative pt-12 pb-16 md:pt-16 md:pb-24 border-b ${dark ? "bg-[#091E3A] text-white border-[#132C4E]" : "bg-gradient-to-b from-[#F8FAFC] via-white to-white text-slate-900 border-slate-200/80"}`}
    >
      {/* Ambient swoosh glow */}
      <div className="absolute top-0 right-10 w-96 h-96 bg-gradient-to-br from-[#00529B]/10 via-[#F36C3D]/10 to-transparent rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        {/* Breadcrumbs */}
        {breadcrumbs.length > 0 && (
          <nav className="flex items-center gap-1.5 text-xs text-slate-400 mb-6 flex-wrap">
            <Link to="/" className="hover:text-[#00529B] transition-colors">
              Home
            </Link>
            {breadcrumbs.map((crumb, idx) => (
              <React.Fragment key={idx}>
                <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
                {crumb.link ? (
                  <Link to={crumb.link} className="hover:text-[#00529B] transition-colors">
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="text-slate-700 font-medium">
                    {crumb.label}
                  </span>
                )}
              </React.Fragment>
            ))}
          </nav>
        )}

        {/* Badge */}
        {badge && (
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-md bg-[#EBF3FB] text-[#00529B] border border-blue-200 text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#F36C3D] animate-pulse"></span>
            <span>{badge}</span>
          </div>
        )}

        {/* Main Title & Subtitle */}
        <div className="max-w-4xl">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] mb-6 text-slate-900">
            {title}
          </h1>
          {subtitle && (
            <p className="text-lg sm:text-xl font-medium text-slate-600 mb-4">
              {subtitle}
            </p>
          )}
          {description && (
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-3xl mb-8">
              {description}
            </p>
          )}

          {/* CTA Buttons */}
          {showCta && (
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Button
                to={primaryCtaLink}
                variant="primary"
                size="lg"
              >
                {primaryCtaText}
              </Button>
              {secondaryCtaText && (
                <Button to={secondaryCtaLink} variant="outline" size="lg">
                  {secondaryCtaText}
                </Button>
              )}
            </div>
          )}
        </div>

        {/* Optional Stats Counter Bar */}
        {stats.length > 0 && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 pt-8 border-t border-slate-200/80">
            {stats.map((stat, i) => (
              <div key={i} className="space-y-1">
                <div className="text-2xl sm:text-4xl font-extrabold text-[#00529B] tracking-tight">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm text-slate-500 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
