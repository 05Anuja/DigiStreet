import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Phone, Sparkles } from 'lucide-react';
import Button from './Button';

export default function CTA({
  badge = 'Accelerate Your Growth',
  title = "Ready to build something unforgettable?",
  description = "Partner with Silgate Solutions. Get tailored performance strategies, enterprise web architecture, creative excellence, and measurable business growth.",
  primaryText = "Discuss Your Brief",
  primaryLink = "/contact",
  secondaryText = "Call +91 81088 10916",
  secondaryHref = "tel:+918108810916",
  dark = true,
}) {
  return (
    <section className={`py-16 sm:py-24 relative overflow-hidden ${dark ? 'bg-[#091E3A] text-white border-t border-[#132C4E]' : 'bg-[#F8FAFC] text-slate-900 border-t border-slate-200'}`}>
      {/* Decorative swoosh-inspired gradient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[320px] bg-gradient-to-r from-[#00529B]/25 via-[#F36C3D]/20 to-[#F6C84A]/15 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-8 text-center relative z-10">
        
        {badge && (
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-md bg-white/10 backdrop-blur-sm text-[#F6C84A] text-xs font-semibold uppercase tracking-wider mb-6 border border-white/15">
            <Sparkles className="w-3.5 h-3.5 text-[#F6C84A]" />
            <span>{badge}</span>
          </div>
        )}

        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
          {title}
        </h2>

        <p className={`text-base sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed ${dark ? 'text-slate-300' : 'text-slate-600'}`}>
          {description}
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <Button to={primaryLink} variant="orange" size="lg">
            {primaryText}
          </Button>
          {secondaryHref && (
            <Button href={secondaryHref} variant={dark ? 'darkOutline' : 'secondary'} size="lg" icon="right">
              {secondaryText}
            </Button>
          )}
        </div>

      </div>
    </section>
  );
}
