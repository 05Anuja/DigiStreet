import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Hero from "./Hero";
import AuditForm from "./AuditForm";
import FAQAccordion from "./FAQAccordion";
import CTA from "./CTA";
import ClientMarquee from "./ClientMarquee";
import Button from "./Button";
import {
  MapPin,
  Phone,
  Mail,
  CheckCircle2,
  TrendingUp,
  Award,
  ArrowUpRight,
} from "lucide-react";

export default function LocationPageTemplate({
  cityName,
  country = "India",
  badge = "Regional Presence",
  title,
  subtitle,
  description,
  breadcrumbs = [],
  stats = [],
  officeAddress,
  phone = "+91 81088 10916",
  email = "manoj@silgatehiring.com",
  services = [],
  localInsightsTitle,
  localInsightsText,
  caseStudyTitle,
  caseStudyMetrics = [],
  faqs = [],
}) {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />

      <main className="flex-1">
        <Hero
          badge={badge}
          title={title}
          subtitle={subtitle}
          description={description}
          breadcrumbs={breadcrumbs}
          stats={stats}
          primaryCtaText={`Connect With Our ${cityName} Team`}
          primaryCtaLink="#contact-box"
          secondaryCtaText="Explore Capabilities"
          secondaryCtaLink="#services"
        />

        <ClientMarquee
          title={`Trusted by Top Brands in ${cityName} and Worldwide`}
        />

        {/* Localized Insights Section */}
        {localInsightsText && (
          <section className="py-20 bg-white border-b border-zinc-200/80">
            <div className="max-w-7xl mx-auto px-4 sm:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                <div className="lg:col-span-7 space-y-6">
                  <span className="badge-new">Local Market Mastery</span>
                  <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-900 tracking-tight leading-tight">
                    {localInsightsTitle ||
                      `Why ${cityName} Businesses Partner with Silgate Media`}
                  </h2>
                  <p className="text-sm sm:text-base text-zinc-600 leading-relaxed">
                    {localInsightsText}
                  </p>
                </div>

                <div
                  id="contact-box"
                  className="lg:col-span-5 p-8 rounded-3xl bg-[#FAF9F6] border border-zinc-200 space-y-4"
                >
                  <div className="flex items-center gap-2 text-zinc-900 font-bold text-lg">
                    <MapPin className="w-5 h-5 text-[#FFDF01]" />
                    <span>{cityName} Regional Hub</span>
                  </div>
                  {officeAddress && (
                    <p className="text-xs text-zinc-600 leading-relaxed">
                      {officeAddress}
                    </p>
                  )}
                  <div className="space-y-1 text-xs pt-2 border-t border-zinc-200">
                    <div className="flex items-center gap-2 text-zinc-700">
                      <Phone className="w-4 h-4 text-[#FFDF01]" />
                      <a
                        href={`tel:${phone.replace(/\s+/g, "")}`}
                        className="font-semibold hover:underline"
                      >
                        {phone}
                      </a>
                    </div>
                    <div className="flex items-center gap-2 text-zinc-700">
                      <Mail className="w-4 h-4 text-[#FFDF01]" />
                      <a
                        href={`mailto:${email}`}
                        className="font-semibold hover:underline"
                      >
                        {email}
                      </a>
                    </div>
                  </div>
                  <div className="pt-2">
                    <Button
                      to="/contact"
                      variant="primary"
                      size="md"
                      className="w-full"
                    >
                      Book Local Discovery Meeting
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Localized Services Grid */}
        {services.length > 0 && (
          <section
            id="services"
            className="py-20 bg-[#FAF9F6] border-b border-zinc-200/80"
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-8">
              <div className="max-w-3xl mb-12">
                <span className="badge-new mb-2">
                  Capabilities in {cityName}
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-900 tracking-tight">
                  Comprehensive Digital Solutions Tailored for {cityName} Brands
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.map((s, i) => (
                  <div
                    key={i}
                    className="p-8 rounded-3xl bg-white border border-zinc-200/90 shadow-sm space-y-3 hover:border-black/30 hover:shadow-xl transition-all"
                  >
                    <div className="w-10 h-10 rounded-xl bg-black text-[#FFDF01] flex items-center justify-center font-bold">
                      0{i + 1}
                    </div>
                    <h3 className="text-xl font-bold text-zinc-900">
                      {s.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
                      {s.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        <AuditForm
          title={`Get a Free Digital & SEO Audit for Your ${cityName} Business`}
        />
        {faqs.length > 0 && (
          <FAQAccordion items={faqs} title={`${cityName} Marketing FAQs`} />
        )}
        <CTA title={`Ready to dominate search and social in ${cityName}?`} />
      </main>

      <Footer />
    </div>
  );
}
