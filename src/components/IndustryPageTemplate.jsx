import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Hero from './Hero';
import AuditForm from './AuditForm';
import FAQAccordion from './FAQAccordion';
import CTA from './CTA';
import ClientMarquee from './ClientMarquee';
import Button from './Button';
import { CheckCircle2, TrendingUp, Target, Award, ArrowUpRight } from 'lucide-react';

export default function IndustryPageTemplate({
  industryName,
  badge = "Industry Practice",
  title,
  subtitle,
  description,
  breadcrumbs = [],
  stats = [],
  challengesTitle = "Key Industry Challenges We Solve",
  challenges = [],
  solutionsTitle = "Our Tailored Growth Playbook",
  solutions = [],
  caseStudyTitle,
  caseStudyDesc,
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
          primaryCtaText={`Get Free ${industryName} Audit`}
          primaryCtaLink="#audit-form"
          secondaryCtaText="Explore Playbook"
          secondaryCtaLink="#playbook"
        />

        <ClientMarquee title={`Trusted by Leading ${industryName} Brands Across India & Globally`} />

        {/* Challenges Section */}
        {challenges.length > 0 && (
          <section className="py-20 bg-white border-b border-zinc-200/80">
            <div className="max-w-7xl mx-auto px-4 sm:px-8">
              <div className="max-w-3xl mb-12">
                <span className="badge-new mb-2">Market Realities</span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-900 tracking-tight">
                  {challengesTitle}
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {challenges.map((c, i) => (
                  <div key={i} className="p-8 rounded-3xl bg-[#FAF9F6] border border-zinc-200/90 space-y-3">
                    <div className="w-10 h-10 rounded-xl bg-black text-[#FFDF01] flex items-center justify-center font-bold">
                      0{i+1}
                    </div>
                    <h3 className="text-xl font-bold text-zinc-900">{c.title}</h3>
                    <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">{c.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Solutions Section */}
        {solutions.length > 0 && (
          <section id="playbook" className="py-20 bg-[#FAF9F6] border-b border-zinc-200/80">
            <div className="max-w-7xl mx-auto px-4 sm:px-8">
              <div className="max-w-3xl mb-12">
                <span className="badge-new mb-2">The Solution</span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-900 tracking-tight">
                  {solutionsTitle}
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {solutions.map((s, i) => (
                  <div key={i} className="p-8 rounded-3xl bg-white border border-zinc-200/90 shadow-sm space-y-3 hover:shadow-xl transition-all">
                    <CheckCircle2 className="w-6 h-6 text-emerald-600" />
                    <h3 className="text-xl font-bold text-zinc-900">{s.title}</h3>
                    <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">{s.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Case Study Feature */}
        {caseStudyTitle && (
          <section className="py-20 bg-white border-b border-zinc-200/80">
            <div className="max-w-7xl mx-auto px-4 sm:px-8">
              <div className="bg-[#0d0d0d] text-white rounded-3xl p-8 sm:p-14">
                <div className="max-w-3xl space-y-4 mb-8">
                  <span className="badge-new">Proven Case Study</span>
                  <h3 className="text-2xl sm:text-4xl font-extrabold tracking-tight">{caseStudyTitle}</h3>
                  <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">{caseStudyDesc}</p>
                </div>

                {caseStudyMetrics.length > 0 && (
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-6 border-t border-zinc-800">
                    {caseStudyMetrics.map((m, mi) => (
                      <div key={mi} className="space-y-1">
                        <div className="text-2xl sm:text-3xl font-extrabold text-[#FFDF01]">{m.value}</div>
                        <div className="text-xs text-zinc-400">{m.label}</div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </section>
        )}

        <AuditForm title={`Get a Free Digital Marketing Audit for Your ${industryName} Brand`} />
        {faqs.length > 0 && <FAQAccordion items={faqs} title={`${industryName} Marketing FAQs`} />}
        <CTA title={`Ready to dominate the ${industryName} category?`} />
      </main>

      <Footer />
    </div>
  );
}
