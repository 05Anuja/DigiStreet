import React from "react";
import { Link } from "react-router-dom";
import { ChevronRight, ArrowUpRight } from "lucide-react";
import Button from "./Button";

export default function Hero({
  badge = "Silgate Media",
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
      className={`relative pt-12 pb-16 md:pt-16 md:pb-24 border-b ${dark ? "bg-[#0d0d0d] text-white border-zinc-800" : "bg-gradient-to-b from-[#F7F6F2] to-white text-zinc-900 border-zinc-200/80"}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Breadcrumbs */}
        {breadcrumbs.length > 0 && (
          <nav className="flex items-center gap-1.5 text-xs text-zinc-500 mb-6 flex-wrap">
            <Link to="/" className="hover:text-black">
              Home
            </Link>
            {breadcrumbs.map((crumb, idx) => (
              <React.Fragment key={idx}>
                <ChevronRight className="w-3.5 h-3.5 text-zinc-400" />
                {crumb.link ? (
                  <Link to={crumb.link} className="hover:text-black">
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="text-zinc-800 font-medium">
                    {crumb.label}
                  </span>
                )}
              </React.Fragment>
            ))}
          </nav>
        )}

        {/* Badge */}
        {badge && (
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black text-[#FFDF01] text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#FFDF01] animate-pulse"></span>
            <span>{badge}</span>
          </div>
        )}

        {/* Main Title & Subtitle */}
        <div className="max-w-4xl">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] mb-6">
            {title}
          </h1>
          {subtitle && (
            <p className="text-lg sm:text-xl font-medium text-zinc-600 mb-4">
              {subtitle}
            </p>
          )}
          {description && (
            <p className="text-sm sm:text-base text-zinc-600 leading-relaxed max-w-3xl mb-8">
              {description}
            </p>
          )}

          {/* CTA Buttons */}
          {showCta && (
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Button
                to={primaryCtaLink}
                variant={dark ? "yellow" : "primary"}
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
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 pt-8 border-t border-zinc-200/80">
            {stats.map((stat, i) => (
              <div key={i} className="space-y-1">
                <div className="text-2xl sm:text-4xl font-extrabold text-black tracking-tight">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm text-zinc-500 font-medium">
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
