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
          <section className="py-20 bg-white border-b border-slate-200/80">
            <div className="max-w-7xl mx-auto px-4 sm:px-8">
              <div className="max-w-3xl mb-12">
                <span className="badge-new mb-2">Market Realities</span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                  {challengesTitle}
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {challenges.map((c, i) => (
                  <div key={i} className="p-8 rounded-2xl bg-[#F8FAFC] border border-slate-200/90 space-y-3">
                    <div className="w-10 h-10 rounded-lg bg-[#00529B] text-white flex items-center justify-center font-bold">
                      0{i+1}
                    </div>
                    <h3 className="text-xl font-bold text-slate-900">{c.title}</h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{c.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Solutions Section */}
        {solutions.length > 0 && (
          <section id="playbook" className="py-20 bg-[#F8FAFC] border-b border-slate-200/80">
            <div className="max-w-7xl mx-auto px-4 sm:px-8">
              <div className="max-w-3xl mb-12">
                <span className="badge-new mb-2">The Solution</span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                  {solutionsTitle}
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {solutions.map((s, i) => (
                  <div key={i} className="p-8 rounded-2xl bg-white border border-slate-200/90 shadow-sm space-y-3 hover:border-[#00529B]/40 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                    <CheckCircle2 className="w-6 h-6 text-[#00529B]" />
                    <h3 className="text-xl font-bold text-slate-900">{s.title}</h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{s.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Case Study Feature */}
        {caseStudyTitle && (
          <section className="py-20 bg-white border-b border-slate-200/80">
            <div className="max-w-7xl mx-auto px-4 sm:px-8">
              <div className="bg-gradient-to-br from-[#091E3A] to-[#07172C] text-white rounded-2xl p-8 sm:p-14 border border-[#1E3E6B] shadow-2xl">
                <div className="max-w-3xl space-y-4 mb-8">
                  <span className="badge-new">Proven Case Study</span>
                  <h3 className="text-2xl sm:text-4xl font-extrabold tracking-tight">{caseStudyTitle}</h3>
                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed">{caseStudyDesc}</p>
                </div>

                {caseStudyMetrics.length > 0 && (
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-6 border-t border-[#132C4E]">
                    {caseStudyMetrics.map((m, mi) => (
                      <div key={mi} className="space-y-1">
                        <div className="text-2xl sm:text-3xl font-extrabold text-[#F6C84A]">{m.value}</div>
                        <div className="text-xs text-slate-300">{m.label}</div>
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
