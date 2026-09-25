import React from 'react';
import IndustryPageTemplate from '../../components/IndustryPageTemplate';

export default function B2BIndustry() {
  return (
    <IndustryPageTemplate
      industryName="B2B & Enterprise"
      badge="B2B Marketing Practice"
      title="Digital Marketing Agency for Business to Business (B2B)"
      subtitle="Generating Qualified Enterprise Inquiries, Inbound RFQs, and C-Suite Pipeline"
      description="In B2B, clicks don't pay salaries—signed contracts do. We engineer high-value demand generation engines combining commercial-intent technical SEO, account-based LinkedIn advertising, and authority whitepapers."
      breadcrumbs={[
        { label: 'Industries', link: '/services' },
        { label: 'B2B Digital Marketing' }
      ]}
      stats={[
        { value: "₹250Cr+", label: "Pipeline Value Influenced" },
        { value: "C-Level", label: "Executive Account Targeting" },
        { value: "+210%", label: "Average Inbound RFQ Lift" },
        { value: "14+", label: "Years Industrial B2B Leadership" }
      ]}
      challenges={[
        { title: "Multi-Month Buying Cycles", desc: "Enterprise deals require consensus across engineering, finance, legal, and executive leadership over 6 to 12 months." },
        { title: "Niche Technical Keywords", desc: "High-ticket industrial solutions often have low search volume, requiring hyper-specific long-tail query capture." },
        { title: "Lead Quality vs. Lead Volume", desc: "Marketing teams waste time filtering low-budget students and irrelevant vendors instead of actual procurement officers." }
      ]}
      solutions={[
        { title: "Account-Based Marketing (ABM)", desc: "Hyper-targeting key decision-makers at tier-1 enterprise accounts with tailored case studies and messaging." },
        { title: "Specification Sheet & CAD Optimization", desc: "Making engineering drawings, datasheets, and compliance documents rank at the top of Google." },
        { title: "Interactive ROI & TCO Calculators", desc: "Empowering internal champions inside prospective client organizations to justify purchase approvals to their CFOs." },
        { title: "Full-Funnel CRM Attribution", desc: "Integrating closed-won deal data back into ad platforms to optimize for actual revenue rather than cheap form fills." }
      ]}
      caseStudyTitle="Tripling Inbound RFQs for Global Heavy Engineering Conglomerate"
      caseStudyDesc="Re-architected the technical search presence and deployed account-based LinkedIn funnels for a multi-billion dollar industrial supplier."
      caseStudyMetrics={[
        { value: "+240%", label: "Verified Enterprise RFQs" },
        { value: "#1", label: "Rankings Across 15 Core Terms" },
        { value: "6.8x", label: "Attributed Deal Pipeline" },
        { value: "18 Months", label: "Sustained Organic Growth" }
      ]}
      faqs={[
        { q: "How do you generate leads for niche industrial B2B companies?", a: "We target the exact engineering part names, industry standard codes, and supplier RFP terms that procurement managers search, paired with gated technical whitepapers and account-based LinkedIn ads." }
      ]}
    />
  );
}
