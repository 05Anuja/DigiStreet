import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Hero from "./Hero";
import AuditForm from "./AuditForm";
import FAQAccordion from "./FAQAccordion";
import CTA from "./CTA";
import ClientMarquee from "./ClientMarquee";
import Button from "./Button";
import { CheckCircle2, Sparkles, ArrowUpRight } from "lucide-react";

export default function ServicePageTemplate({
  badge,
  title,
  subtitle,
  description,
  breadcrumbs,
  stats = [],
  overviewTitle = "Strategic Overview",
  overviewText,
  overviewPoints = [],
  featuresTitle = "Key Service Deliverables",
  features = [],
  process = [],
  results,
  faqs = [],
  auditFormTitle,
  ctaTitle,
  ctaDescription,
}) {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          badge={badge}
          title={title}
          subtitle={subtitle}
          description={description}
          breadcrumbs={breadcrumbs}
          stats={stats}
          primaryCtaText="Get a Tailored Proposal"
          primaryCtaLink="#audit-form"
          secondaryCtaText="Explore Deliverables"
          secondaryCtaLink="#deliverables"
        />

        <ClientMarquee />

        {/* Overview Section */}
        {overviewText && (
          <section className="py-20 bg-white border-b border-zinc-200/80">
            <div className="max-w-7xl mx-auto px-4 sm:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                <div className="lg:col-span-7 space-y-6">
                  <span className="badge-new">Why It Matters</span>
                  <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-900 tracking-tight leading-tight">
                    {overviewTitle}
                  </h2>
                  <p className="text-sm sm:text-base text-zinc-600 leading-relaxed">
                    {overviewText}
                  </p>
                  {overviewPoints.length > 0 && (
                    <ul className="space-y-3 pt-2">
                      {overviewPoints.map((pt, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-3 text-sm text-zinc-700"
                        >
                          <CheckCircle2 className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                <div className="lg:col-span-5 bg-[#FAF9F6] border border-zinc-200 rounded-3xl p-8 space-y-4">
                  <h3 className="text-xl font-bold text-zinc-900">
                    Why Silgate Media?
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
                    We bring 14+ years of cross-industry expertise, proprietary
                    data telemetry, and senior leadership involvement to every
                    engagement.
                  </p>
                  <div className="pt-2">
                    <Button to="/contact" variant="primary" size="md">
                      Discuss This Service
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Features / Deliverables Grid */}
        {features.length > 0 && (
          <section
            id="deliverables"
            className="py-20 bg-[#FAF9F6] border-b border-zinc-200/80"
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-8">
              <div className="max-w-3xl mb-14">
                <span className="badge-new mb-2">Deliverables</span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-900 tracking-tight">
                  {featuresTitle}
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {features.map((feat, i) => (
                  <div
                    key={i}
                    className="p-8 rounded-3xl bg-white border border-zinc-200/80 shadow-sm space-y-3 hover:border-black/30 hover:shadow-xl transition-all"
                  >
                    <div className="w-10 h-10 rounded-xl bg-black text-[#FFDF01] flex items-center justify-center font-bold">
                      {i + 1 < 10 ? `0${i + 1}` : i + 1}
                    </div>
                    <h3 className="text-xl font-bold text-zinc-900">
                      {feat.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
                      {feat.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Process Steps */}
        {process.length > 0 && (
          <section className="py-20 bg-white border-b border-zinc-200/80">
            <div className="max-w-7xl mx-auto px-4 sm:px-8">
              <div className="max-w-3xl mb-14">
                <span className="badge-new mb-2">
                  Our Execution Methodology
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-900 tracking-tight">
                  How We Drive Tangible Results
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {process.map((step, i) => (
                  <div
                    key={i}
                    className="p-6 rounded-2xl bg-[#FAF9F6] border border-zinc-200 space-y-2"
                  >
                    <div className="text-xs font-bold text-[#c7a900] uppercase tracking-wider">
                      Phase {i + 1}
                    </div>
                    <h4 className="text-lg font-bold text-zinc-900">
                      {step.title}
                    </h4>
                    <p className="text-xs text-zinc-600 leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Audit Form Section */}
        <AuditForm
          title={
            auditFormTitle ||
            `Get a Free ${title.split(" ")[0]} Audit & Growth Plan`
          }
        />

        {/* FAQs Section */}
        {faqs.length > 0 && (
          <FAQAccordion items={faqs} title="Frequently Asked Questions" />
        )}

        {/* CTA Banner */}
        <CTA
          title={ctaTitle || "Ready to accelerate your brand's growth?"}
          description={
            ctaDescription ||
            "Speak with our strategy team today and discover how we can help you achieve market leadership."
          }
        />
      </main>

      <Footer />
    </div>
  );
}
